(function () {
    if (isMobile) throw new Error("It's mobile");

    // 泰文句子庫
    const QUOTES = [
        "สวัสดีครับ",
        "ขอบคุณมากค่ะ",
        "ประเทศไทยมีอากาศร้อน",
        "ส้มตำอร่อยมาก",
        "ภาษาไทยเรียนไม่ยาก",
        "การเรียนรู้ไม่มีวันสิ้นสุด",
        "ฉันรักประเทศไทย",
        "วันนี้วันอะไร",
        "วันนี้วันที่เท่าไหร่",
        "บ่ายโมงสิบสี่นาที",
        "บ่ายสามโมงครึ่ง",
        "แปดโมงครึ่ง"
    ];

    // DOM 元素
    const textDisplayEl = document.getElementById('text-display');
    const timeEl = document.getElementById('time');
    const wpmEl = document.getElementById('wpm');
    const accEl = document.getElementById('accuracy');
    const modeEl = document.getElementById('mode'); // Basic | Advanced

    // 遊戲狀態
    let isStarted = false;
    let timer = null;
    let timeLeft = 60;
    let isShiftDown = false;
    let modeChecked = document.querySelector('input[name="select"]:checked')?.id;

    // mode: Basic 生成隨機泰文
    function getChar() {
        var row = Math.floor(Math.random() * 4);
        var col = Math.floor(Math.random() * KEYBOARD_LAYOUT[row].length);
        var target = Math.random() < 0.5 ? "n" : "s";
        return KEYBOARD_LAYOUT[row][col][target];
    }
    function generateRandomThai() {
        do {
            var char1 = getChar();
        } while (!char1);
        do {
            var char2 = getChar();
        } while (!char2);

        // 組合結果
        return `${char1.repeat(4)}${char2.repeat(4)}`;
    }

    function startNewQuote() {
        typedTextArray = [];
        console.log(`mode: ${modeChecked}`);
        if (modeChecked == "option-1") {
            var quote = generateRandomThai();
        } else {
            var quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
        }
        targetTextArray = Array.from(quote);

        updateTextDisplay();
        updateHint();
    }

    function updateTextDisplay() {
        textDisplayEl.innerHTML = '';

        targetTextArray.forEach((char, index) => {
            const span = document.createElement('span');
            span.innerText = char;
            span.className = 'char';

            if (index < typedTextArray.length) {
                if (typedTextArray[index] === char) {
                    span.classList.add('correct');
                } else {
                    span.classList.add('incorrect');
                    if (isThaiCombiningChar(char)) {
                        const ex1 = textDisplayEl.childNodes[index - 1];
                        const ex2 = textDisplayEl.childNodes[index - 2];
                        if (ex1 && !isThaiCombiningChar(ex1.innerHTML)) {
                            textDisplayEl.childNodes[index - 1].classList.add('markAsIncorrect');
                        } else if (ex2 && !isThaiCombiningChar(ex2.innerHTML)) {
                            textDisplayEl.childNodes[index - 2].classList.add('markAsIncorrect');
                        }
                    }
                }
            } else if (index === typedTextArray.length) {
                span.classList.add('active');
            }

            textDisplayEl.appendChild(span);
        });
    }

    function isThaiCombiningChar(char) {
        if (!char || char.length === 0) return false;

        // 取得該字元的 Unicode 編碼點
        const code = char.charCodeAt(0);

        /**
         * 泰文 Unicode 依附字元主要範圍：
         * 1. 0x0E31, 0x0E34 - 0x0E3A (上方與下方元音)
         * 2. 0x0E47 - 0x0E4E (音調符號、標記、Garan)
         * 3. 0x0E33 (Sara Am - 雖然是元音，但由 ํ 和 า 組成，行為上依附前字)
         */
        return (
            (code >= 0x0E34 && code <= 0x0E3A) || // 上下元音
            (code >= 0x0E47 && code <= 0x0E4E) || // 音調與標記
            code === 0x0E31 ||                   // Mai Han-Akat (ั)
            code === 0x0E33                      // Sara Am (ำ)
        );
    }

    function startTimer() {
        if (isStarted) return;
        isStarted = true;
        timeLeft = 60;

        timer = setInterval(() => {
            timeLeft--;
            timeEl.innerText = timeLeft;

            let correctChars = 0;
            for (let i = 0; i < typedTextArray.length; i++) {
                if (typedTextArray[i] === targetTextArray[i]) correctChars++;
            }

            const minsElapsed = (60 - timeLeft) / 60;
            const wpm = minsElapsed > 0 ? Math.round((correctChars / 5) / minsElapsed) : 0;
            wpmEl.innerText = wpm;

            if (timeLeft <= 0) {
                clearInterval(timer);
                isStarted = false;
                Swal.fire({
                    title: '時間到！',
                    text: 'WPM： ' + wpm + '　準確率： ' + accEl.innerText,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            }
        }, 1000);
    }

    function calculateAccuracy() {
        if (typedTextArray.length === 0) return 100;
        let correct = 0;
        for (let i = 0; i < typedTextArray.length; i++) {
            if (typedTextArray[i] === targetTextArray[i]) correct++;
        }
        return Math.round((correct / typedTextArray.length) * 100);
    }

    window.addEventListener('keydown', (e) => {
        if (timeLeft <= 0 && isStarted) return;

        if (["Space", "Backspace", "Tab", "Quote", "Slash"].includes(e.code)) {
            e.preventDefault();
        }

        if (e.key === 'Shift') {
            isShiftDown = true;
            keyboardEl.classList.add('shift-active');
        }

        const keyEl = document.getElementById(`key-${e.code}`);
        if (keyEl) keyEl.classList.add('pressed');

        if (e.ctrlKey || e.altKey || e.metaKey) return;

        startTimer();

        if (e.code === 'Backspace') {
            typedTextArray.pop();
            updateTextDisplay();
            updateHint();
            accEl.innerText = calculateAccuracy();
            return;
        }

        let inputChar = null;
        const thaiRegex = /[\u0E00-\u0E7F]/;
        if (thaiRegex.test(e.key)) {
            inputChar = e.key;
        } else if (codeMap[e.code]) {
            inputChar = isShiftDown ? codeMap[e.code].shift : codeMap[e.code].normal;
        }

        if (inputChar && typedTextArray.length < targetTextArray.length) {
            typedTextArray.push(inputChar);
            updateTextDisplay();
            updateHint();
            accEl.innerText = calculateAccuracy();

            if (typedTextArray.length === targetTextArray.length) {
                setTimeout(() => startNewQuote(), 300);
            }
        }
    });

    window.addEventListener('keyup', (e) => {
        if (e.key === 'Shift') {
            isShiftDown = false;
            keyboardEl.classList.remove('shift-active');
        }

        const keyEl = document.getElementById(`key-${e.code}`);
        if (keyEl) keyEl.classList.remove('pressed');
    });

    document.getElementById('btn-restart').addEventListener('click', () => {
        clearInterval(timer);
        isStarted = false;
        timeLeft = 60;
        timeEl.innerText = '60';
        wpmEl.innerText = '0';
        accEl.innerText = '100';
        startNewQuote();
    });

    modeEl.addEventListener('change', (e) => {
        var bas = "option-1";
        var adv = "option-2";
        var value = e.target.id;

        // 確保觸發的是 input 元素
        if (e.target.type === 'radio') {
            console.log(`選擇的值為：${e.target.id}`);
            modeChecked = value;
            const elements = document.querySelector('.text-display');
            if (modeChecked == bas) {
                elements.classList.remove('adv-sen');
                elements.classList.add('bas-char');
            } else {
                elements.classList.remove('bas-char');
                elements.classList.add('adv-sen');
            }
            startNewQuote();
        }
    });

    startNewQuote();

})();