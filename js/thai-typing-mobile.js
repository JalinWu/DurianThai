(function () {
    if (!isMobile) throw new Error("It's desktop");

    const keyMobileEl = document.getElementsByClassName('key-mobile');
    const shiftKey = document.getElementById('key-ShiftLeft');

    // keyboard
    Array.from(keyMobileEl).forEach(element => {
        if (!element) return;

        // --- 手機觸控支援 (Touch Events) ---
        // 手指碰觸螢幕時：立刻亮起 (加 active)
        element.addEventListener('touchstart', (e) => {
            e.preventDefault(); // 阻止瀏覽器預設的點擊延遲與縮放行為
            element.classList.add('active');

            // 觸發你的按鍵輸入邏輯...
            keyOnTouch(e);

            // 按下 Shift 按鍵
            if (shiftKey && element == shiftKey) {
                switchNormalAndShiftKey();
            }
        });

        // 手指離開螢幕時：立刻熄滅 (拿掉 active)
        element.addEventListener('touchend', () => {
            element.classList.remove('active');
        });

        // 防止手指滑出按鍵外卻沒熄滅
        element.addEventListener('touchcancel', () => {
            element.classList.remove('active');
        });
    });

    function keyOnTouch(event) {
        // console.log(event.target.textContent.trim());
        const spans = event.currentTarget.querySelectorAll('span');

        spans.forEach(span => {
            // offsetParent 不為 null，代表該 span 目前是顯示狀態 (沒有 display: none)
            if (span.offsetParent !== null) {
                const content = span.textContent.trim();

                // 如果內容不是空的，就印出 console
                if (content) {
                    console.log(content);
                }
            }
        });
    }

    function switchNormalAndShiftKey() {
        Array.from(keyMobileEl).forEach(element => {
            // 找到該按鍵底下所有的 span
            const spans = element.querySelectorAll('span');

            // 遍歷這兩個 span，並切換 (toggle) 它們的 hide class
            spans.forEach(span => {
                span.classList.toggle('hide');
            });
        })
    }

    // text-display

    // 泰文句子庫
    const QUOTES = [
        "สวัสดีครับ",
    ];

    // DOM 元素
    const textDisplayEl = document.getElementById('text-display');

    function startNewQuote() {
        typedTextArray = [];

        var quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
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
                    console.log(char);
                    console.log(isThaiCombiningChar(char));
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

    startNewQuote();

})();