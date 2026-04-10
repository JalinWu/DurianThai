// 泰文句子庫
const QUOTES = [
    "สวั่สดีครับ", 
    "ขอบคุณมากค่ะ", 
    "ประเทศไทยมีอากาศร้อน", 
    "ส้มตำอร่อยมาก", 
    "ภาษาไทยเรียนไม่ยาก",
    "การเรียนรู้ไม่มีวันสิ้นสุด",
    "ฉันรักประเทศไทย"
];

// 泰文標準鍵盤佈局 (加入 cls 以區分控制手指顏色)
const KEYBOARD_LAYOUT = [
    // Row 1
    [{code: 'Backquote', n: '_', s: '%', cls: 'f-pinky'}, {code: 'Digit1', n: 'ๅ', s: '+', cls: 'f-pinky'}, {code: 'Digit2', n: '/', s: '๑', cls: 'f-ring'}, {code: 'Digit3', n: '-', s: '๒', cls: 'f-middle'}, {code: 'Digit4', n: 'ภ', s: '๓', cls: 'f-index'}, {code: 'Digit5', n: 'ถ', s: '๔', cls: 'f-index'}, {code: 'Digit6', n: 'ุ', s: 'ู', cls: 'f-index'}, {code: 'Digit7', n: 'ึ', s: '฿', cls: 'f-index'}, {code: 'Digit8', n: 'ค', s: '๕', cls: 'f-middle'}, {code: 'Digit9', n: 'ต', s: '๖', cls: 'f-ring'}, {code: 'Digit0', n: 'จ', s: '๗', cls: 'f-pinky'}, {code: 'Minus', n: 'ข', s: '๘', cls: 'f-pinky'}, {code: 'Equal', n: 'ช', s: '๙', cls: 'f-pinky'}, {code: 'Backspace', label: '←', cls: 'w-backspace f-special'}],
    // Row 2
    [{code: 'Tab', label: 'Tab', cls: 'w-tab f-special'}, {code: 'KeyQ', n: 'ๆ', s: '๐', cls: 'f-pinky'}, {code: 'KeyW', n: 'ไ', s: '"', cls: 'f-ring'}, {code: 'KeyE', n: 'ำ', s: 'ฎ', cls: 'f-middle'}, {code: 'KeyR', n: 'พ', s: 'ฑ', cls: 'f-index'}, {code: 'KeyT', n: 'ะ', s: 'ธ', cls: 'f-index'}, {code: 'KeyY', n: 'ั', s: 'ํ', cls: 'f-index'}, {code: 'KeyU', n: 'ี', s: '๊', cls: 'f-index'}, {code: 'KeyI', n: 'ร', s: 'ณ', cls: 'f-middle'}, {code: 'KeyO', n: 'น', s: 'ฯ', cls: 'f-ring'}, {code: 'KeyP', n: 'ย', s: 'ญ', cls: 'f-pinky'}, {code: 'BracketLeft', n: 'บ', s: 'ฐ', cls: 'f-pinky'}, {code: 'BracketRight', n: 'ล', s: ',', cls: 'f-pinky'}, {code: 'Backslash', n: 'ฃ', s: 'ฅ', cls: 'f-pinky'}],
    // Row 3
    [{code: 'CapsLock', label: 'Caps', cls: 'w-caps f-special'}, {code: 'KeyA', n: 'ฟ', s: 'ฤ', cls: 'f-pinky'}, {code: 'KeyS', n: 'ห', s: 'ฆ', cls: 'f-ring'}, {code: 'KeyD', n: 'ก', s: 'ฏ', cls: 'f-middle'}, {code: 'KeyF', n: 'ด', s: 'โ', cls: 'f-index'}, {code: 'KeyG', n: 'เ', s: 'ฌ', cls: 'f-index'}, {code: 'KeyH', n: '้', s: '็', cls: 'f-index'}, {code: 'KeyJ', n: '่', s: '๋', cls: 'f-index'}, {code: 'KeyK', n: 'า', s: 'ษ', cls: 'f-middle'}, {code: 'KeyL', n: 'ส', s: 'ศ', cls: 'f-ring'}, {code: 'Semicolon', n: 'ว', s: 'ซ', cls: 'f-pinky'}, {code: 'Quote', n: 'ง', s: '.', cls: 'f-pinky'}, {code: 'Enter', label: 'Enter', cls: 'w-enter f-special'}],
    // Row 4
    [{code: 'ShiftLeft', label: 'Shift', cls: 'w-shift f-special'}, {code: 'KeyZ', n: 'ผ', s: '(', cls: 'f-pinky'}, {code: 'KeyX', n: 'ป', s: ')', cls: 'f-ring'}, {code: 'KeyC', n: 'แ', s: 'ฉ', cls: 'f-middle'}, {code: 'KeyV', n: 'อ', s: 'ฮ', cls: 'f-index'}, {code: 'KeyB', n: 'ิ', s: 'ฺ', cls: 'f-index'}, {code: 'KeyN', n: 'ื', s: '์', cls: 'f-index'}, {code: 'KeyM', n: 'ท', s: '?', cls: 'f-index'}, {code: 'Comma', n: 'ม', s: 'ฒ', cls: 'f-middle'}, {code: 'Period', n: 'ใ', s: 'ฬ', cls: 'f-ring'}, {code: 'Slash', n: 'ฝ', s: 'ฦ', cls: 'f-pinky'}, {code: 'ShiftRight', label: 'Shift', cls: 'w-shift f-special'}],
    // Row 5
    [{code: 'Space', n: ' ', s: ' ', label: 'Space', cls: 'w-space f-special'}]
];

// 建立對應字典
const codeMap = {};
const charToHintMap = {};

// DOM 元素
const keyboardEl = document.getElementById('keyboard');
const textDisplayEl = document.getElementById('text-display');
const timeEl = document.getElementById('time');
const wpmEl = document.getElementById('wpm');
const accEl = document.getElementById('accuracy');

// 遊戲狀態
let targetTextArray = [];
let typedTextArray = [];
let isStarted = false;
let timer = null;
let timeLeft = 60;
let isShiftDown = false;

function initKeyboard() {
    keyboardEl.innerHTML = '';
    KEYBOARD_LAYOUT.forEach(row => {
        const rowEl = document.createElement('div');
        rowEl.className = 'keyboard-row';
        
        row.forEach(key => {
            const keyEl = document.createElement('div');
            keyEl.className = `key ${key.cls || ''}`;
            keyEl.id = `key-${key.code}`;

            if (key.label) {
                keyEl.innerHTML = `<span>${key.label}</span>`;
            } else {
                keyEl.innerHTML = `
                    <span class="key-shift-char">${key.s}</span>
                    <span class="key-normal-char">${key.n}</span>
                `;
            }
            rowEl.appendChild(keyEl);

            if (key.n !== undefined) {
                codeMap[key.code] = { normal: key.n, shift: key.s };
                charToHintMap[key.n] = { code: key.code, shift: false };
                charToHintMap[key.s] = { code: key.code, shift: true };
            }
        });
        keyboardEl.appendChild(rowEl);
    });
}

function startNewQuote() {
    typedTextArray = [];
    const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
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
                    const ex1 = textDisplayEl.childNodes[index-1];
                    const ex2 = textDisplayEl.childNodes[index-2];
                    if (ex1 && !isThaiCombiningChar(ex1.innerHTML)) {
                        textDisplayEl.childNodes[index-1].classList.add('markAsIncorrect');
                    } else if (ex2 && ! isThaiCombiningChar(ex2.innerHTML)) {
                        textDisplayEl.childNodes[index-2].classList.add('markAsIncorrect');
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

function updateHint() {
    document.querySelectorAll('.key.hint').forEach(el => el.classList.remove('hint'));
    document.getElementById('key-ShiftLeft')?.classList.remove('hint');
    document.getElementById('key-ShiftRight')?.classList.remove('hint');

    if (typedTextArray.length < targetTextArray.length) {
        const nextChar = targetTextArray[typedTextArray.length];
        const hintData = charToHintMap[nextChar];
        
        if (hintData) {
            const keyEl = document.getElementById(`key-${hintData.code}`);
            if (keyEl) keyEl.classList.add('hint');
            
            if (hintData.shift) {
                document.getElementById('key-ShiftLeft').classList.add('hint');
                document.getElementById('key-ShiftRight').classList.add('hint');
            }
        }
    }
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

initKeyboard();
startNewQuote();