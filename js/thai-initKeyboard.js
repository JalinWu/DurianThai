// 泰文標準鍵盤佈局 (加入 cls 以區分控制手指顏色)
const KEYBOARD_LAYOUT = [
    // Row 1
    [{ code: 'Backquote', n: '_', s: '%', cls: 'f-pinky' }, { code: 'Digit1', n: 'ๅ', s: '+', cls: 'f-pinky' }, { code: 'Digit2', n: '/', s: '๑', cls: 'f-ring' }, { code: 'Digit3', n: '-', s: '๒', cls: 'f-middle' }, { code: 'Digit4', n: 'ภ', s: '๓', cls: 'f-index' }, { code: 'Digit5', n: 'ถ', s: '๔', cls: 'f-index' }, { code: 'Digit6', n: 'ุ', s: 'ู', cls: 'f-index' }, { code: 'Digit7', n: 'ึ', s: '฿', cls: 'f-index' }, { code: 'Digit8', n: 'ค', s: '๕', cls: 'f-middle' }, { code: 'Digit9', n: 'ต', s: '๖', cls: 'f-ring' }, { code: 'Digit0', n: 'จ', s: '๗', cls: 'f-pinky' }, { code: 'Minus', n: 'ข', s: '๘', cls: 'f-pinky' }, { code: 'Equal', n: 'ช', s: '๙', cls: 'f-pinky' }, { code: 'Backspace', label: '←', cls: 'w-backspace f-special' }],
    // Row 2
    [{ code: 'Tab', label: 'Tab', cls: 'w-tab f-special' }, { code: 'KeyQ', n: 'ๆ', s: '๐', cls: 'f-pinky' }, { code: 'KeyW', n: 'ไ', s: '"', cls: 'f-ring' }, { code: 'KeyE', n: 'ำ', s: 'ฎ', cls: 'f-middle' }, { code: 'KeyR', n: 'พ', s: 'ฑ', cls: 'f-index' }, { code: 'KeyT', n: 'ะ', s: 'ธ', cls: 'f-index' }, { code: 'KeyY', n: 'ั', s: 'ํ', cls: 'f-index' }, { code: 'KeyU', n: 'ี', s: '๊', cls: 'f-index' }, { code: 'KeyI', n: 'ร', s: 'ณ', cls: 'f-middle' }, { code: 'KeyO', n: 'น', s: 'ฯ', cls: 'f-ring' }, { code: 'KeyP', n: 'ย', s: 'ญ', cls: 'f-pinky' }, { code: 'BracketLeft', n: 'บ', s: 'ฐ', cls: 'f-pinky' }, { code: 'BracketRight', n: 'ล', s: ',', cls: 'f-pinky' }, { code: 'Backslash', n: 'ฃ', s: 'ฅ', cls: 'f-pinky' }],
    // Row 3
    [{ code: 'CapsLock', label: 'Caps', cls: 'w-caps f-special' }, { code: 'KeyA', n: 'ฟ', s: 'ฤ', cls: 'f-pinky' }, { code: 'KeyS', n: 'ห', s: 'ฆ', cls: 'f-ring' }, { code: 'KeyD', n: 'ก', s: 'ฏ', cls: 'f-middle' }, { code: 'KeyF', n: 'ด', s: 'โ', cls: 'f-index' }, { code: 'KeyG', n: 'เ', s: 'ฌ', cls: 'f-index' }, { code: 'KeyH', n: '้', s: '็', cls: 'f-index' }, { code: 'KeyJ', n: '่', s: '๋', cls: 'f-index' }, { code: 'KeyK', n: 'า', s: 'ษ', cls: 'f-middle' }, { code: 'KeyL', n: 'ส', s: 'ศ', cls: 'f-ring' }, { code: 'Semicolon', n: 'ว', s: 'ซ', cls: 'f-pinky' }, { code: 'Quote', n: 'ง', s: '.', cls: 'f-pinky' }, { code: 'Enter', label: 'Enter', cls: 'w-enter f-special' }],
    // Row 4
    [{ code: 'ShiftLeft', label: 'Shift', cls: 'w-shift f-special' }, { code: 'KeyZ', n: 'ผ', s: '(', cls: 'f-pinky' }, { code: 'KeyX', n: 'ป', s: ')', cls: 'f-ring' }, { code: 'KeyC', n: 'แ', s: 'ฉ', cls: 'f-middle' }, { code: 'KeyV', n: 'อ', s: 'ฮ', cls: 'f-index' }, { code: 'KeyB', n: 'ิ', s: 'ฺ', cls: 'f-index' }, { code: 'KeyN', n: 'ื', s: '์', cls: 'f-index' }, { code: 'KeyM', n: 'ท', s: '?', cls: 'f-index' }, { code: 'Comma', n: 'ม', s: 'ฒ', cls: 'f-middle' }, { code: 'Period', n: 'ใ', s: 'ฬ', cls: 'f-ring' }, { code: 'Slash', n: 'ฝ', s: 'ฦ', cls: 'f-pinky' }, { code: 'ShiftRight', label: 'Shift', cls: 'w-shift f-special' }],
    // Row 5
    [{ code: 'Space', n: ' ', label: 'Space', cls: 'w-space f-special' }]
];

// 泰文標準鍵盤佈局 (加入 cls 以區分控制手指顏色)
const KEYBOARD_LAYOUT_MOBILE = [
    // Row 1
    [{ code: 'Digit1', n: 'ๅ', s: '+', cls: 'f-pinky' }, { code: 'Digit2', n: '/', s: '๑', cls: 'f-ring' }, { code: 'Digit3', n: '-', s: '๒', cls: 'f-middle' }, { code: 'Digit4', n: 'ภ', s: '๓', cls: 'f-index' }, { code: 'Digit5', n: 'ถ', s: '๔', cls: 'f-index' }, { code: 'Digit6', n: 'ุ', s: 'ู', cls: 'f-index' }, { code: 'Digit7', n: 'ึ', s: '฿', cls: 'f-index' }, { code: 'Digit8', n: 'ค', s: '๕', cls: 'f-middle' }, { code: 'Digit9', n: 'ต', s: '๖', cls: 'f-ring' }, { code: 'Digit0', n: 'จ', s: '๗', cls: 'f-pinky' }, { code: 'Minus', n: 'ข', s: '๘', cls: 'f-pinky' }, { code: 'Equal', n: 'ช', s: '๙', cls: 'f-pinky' }],
    // Row 2
    [{ code: 'KeyQ', n: 'ๆ', s: '๐', cls: 'f-pinky' }, { code: 'KeyW', n: 'ไ', s: '"', cls: 'f-ring' }, { code: 'KeyE', n: 'ำ', s: 'ฎ', cls: 'f-middle' }, { code: 'KeyR', n: 'พ', s: 'ฑ', cls: 'f-index' }, { code: 'KeyT', n: 'ะ', s: 'ธ', cls: 'f-index' }, { code: 'KeyY', n: 'ั', s: 'ํ', cls: 'f-index' }, { code: 'KeyU', n: 'ี', s: '๊', cls: 'f-index' }, { code: 'KeyI', n: 'ร', s: 'ณ', cls: 'f-middle' }, { code: 'KeyO', n: 'น', s: 'ฯ', cls: 'f-ring' }, { code: 'KeyP', n: 'ย', s: 'ญ', cls: 'f-pinky' }, { code: 'BracketLeft', n: 'บ', s: 'ฐ', cls: 'f-pinky' }, { code: 'BracketRight', n: 'ล', s: ',', cls: 'f-pinky' }],
    // Row 3
    [{ code: 'KeyA', n: 'ฟ', s: 'ฤ', cls: 'f-pinky' }, { code: 'KeyS', n: 'ห', s: 'ฆ', cls: 'f-ring' }, { code: 'KeyD', n: 'ก', s: 'ฏ', cls: 'f-middle' }, { code: 'KeyF', n: 'ด', s: 'โ', cls: 'f-index' }, { code: 'KeyG', n: 'เ', s: 'ฌ', cls: 'f-index' }, { code: 'KeyH', n: '้', s: '็', cls: 'f-index' }, { code: 'KeyJ', n: '่', s: '๋', cls: 'f-index' }, { code: 'KeyK', n: 'า', s: 'ษ', cls: 'f-middle' }, { code: 'KeyL', n: 'ส', s: 'ศ', cls: 'f-ring' }, { code: 'Semicolon', n: 'ว', s: 'ซ', cls: 'f-pinky' }, { code: 'Quote', n: 'ง', s: '.', cls: 'f-pinky' }, { code: 'Backslash', n: 'ฃ', s: 'ฅ', cls: 'f-pinky' }],
    // Row 4
    [{ code: 'ShiftLeft', n: '⇧', s: '⇧', cls: 'f-special' }, { code: 'KeyZ', n: 'ผ', s: '(', cls: 'f-pinky' }, { code: 'KeyX', n: 'ป', s: ')', cls: 'f-ring' }, { code: 'KeyC', n: 'แ', s: 'ฉ', cls: 'f-middle' }, { code: 'KeyV', n: 'อ', s: 'ฮ', cls: 'f-index' }, { code: 'KeyB', n: 'ิ', s: 'ฺ', cls: 'f-index' }, { code: 'KeyN', n: 'ื', s: '์', cls: 'f-index' }, { code: 'KeyM', n: 'ท', s: '?', cls: 'f-index' }, { code: 'Comma', n: 'ม', s: 'ฒ', cls: 'f-middle' }, { code: 'Period', n: 'ใ', s: 'ฬ', cls: 'f-ring' }, { code: 'Slash', n: 'ฝ', s: 'ฦ', cls: 'f-pinky' }, { code: 'Backspace', n: '←', s: '←', cls: 'w-backspace f-special' }],
];

// 建立對應字典
const codeMap = {};
const charToHintMap = {};

// DOM 元素
const keyboardEl = document.getElementById('keyboard');

let targetTextArray = [];
let typedTextArray = [];

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

function initKeyboardMobile() {
    keyboardEl.innerHTML = '';
    KEYBOARD_LAYOUT_MOBILE.forEach(row => {
        const rowEl = document.createElement('div');
        rowEl.className = 'keyboard-row keyboard-row-mobile';

        row.forEach(key => {
            const keyEl = document.createElement('div');
            keyEl.className = `key key-mobile`;// ${key.cls || ''}
            keyEl.id = `key-${key.code}`;

            if (key.label) {
                keyEl.innerHTML = `<span>${key.label}</span>`;
            } else {
                keyEl.innerHTML = `
                    <span class="key-shift-char-mobile hide">${key.s}</span>
                    <span class="key-normal-char-mobile">${key.n}</span>
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

// 檢查目前螢幕寬度是否小於等於 1024px
const isMobile = window.matchMedia('(max-width: 1024px)').matches;

if (isMobile) {
    initKeyboardMobile();
} else {
    initKeyboard();
}
