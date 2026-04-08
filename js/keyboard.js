const Keyboard = window.SimpleKeyboard.default;

    const myKeyboard = new Keyboard({
        onChange: input => onChange(input),
        onKeyPress: button => onKeyPress(button),
        physicalKeyboardHighlight: true,
        // 定義泰文 Kedmanee 佈局
        layout: {
            'default': [
                "\- \u0e45 \/ \_ \u0e20 \u0e16 \u0e38 \u0e36 \u0e04 \u0e15 \u0e08 \u0e02 \u0e0A {bksp}",
                "{tab} \u0e46 \u0e44 \u0e33 \u0e1e \u0e30 \u0e31 \u0e35 \u0e23 \u0e19 \u0e22 \u0e1A \u0e25 \u0e03",
                "{lock} \u0e1f \u0e2b \u0e01 \u0e14 \u0e40 \u0e49 \u0e48 \u0e32 \u0e2a \u0e27 \u0e07 {enter}",
                "{shift_} \u0e1c \u0e1b \u0e41 \u0e2d \u0e34 \u0e37 \u0e17 \u0e21 \u0e43 \u0e1d {_shift}",
                "{space}"
            ],
            'shift': [
                "\u0025 \u002b \u0e51 \u0e52 \u0e53 \u0e54 \u0e39 \u0e3f \u0e55 \u0e56 \u0e57 \u0e58 \u0e59 {bksp}",
                "{tab} \u0e50 \u0022 \u0e0e \u0e11 \u0e18 \u0e4d \u0e4a \u0e13 \u0e2f \u0e0d \u0e10 \u002c \u0e05",
                "{lock} \u0e24 \u0e06 \u0e0f \u0e42 \u0e0c \u0e47 \u0e4b \u0e29 \u0e28 \u0e0b \u002e {enter}",
                "{shift_} \u0028 \u0029 \u0e09 \u0e2e \u0e3a \u0e4c \u003f \u0e12 \u0e2c \u0e26 {_shift}",
                "{space}"
            ]
        },
        display: {
            '{bksp}': '退格',
            '{enter}': '換行',
            '{shift_}': 'Shift ⇧',
            '{_shift}': '⇧ Shift',
            '{tab}': 'Tab',
            '{lock}': 'Caps',
            '{space}': '空格'
        },
        buttonTheme: [
            {
                class: "hg-index",
                buttons: "ภ พ ด อ ถ ะ เ  ิ"
            },
            {
                class: "hg-index",
                buttons: " ุ  ั  ้  ื  ึ  ี  ่ ท"
            },
            {
                class: "hg-index",
                buttons: "๓ ฑ โ ฮ ๔ ธ ฌ  ฺ"
            },
            {
                class: "hg-index",
                buttons: " ู  ํ  ็  ์ ฿  ๊  ๋ ?"
            },
            {
                class: "hg-middle",
                buttons: "_ ำ ก แ ค ร า ม"
            },
            {
                class: "hg-middle",
                buttons: "๒ ฎ ฏ ฉ ๕ ณ ษ ฒ"
            },
            {
                class: "hg-ring",
                buttons: "/ ไ ห ป ต น ส ใ"
            },
            {
                class: "hg-ring",
                buttons: "๑ \" ฆ ) ๖ ฯ ศ ฬ"
            },
            {
                class: "hg-little",
                buttons: "ๅ ๆ ฟ ผ จ ย ว ฝ ข ช บ ล ฃ ง"
            },
            {
                class: "hg-little",
                buttons: "+ ๐ ฤ ( ๗ ญ ซ ฦ ๘ ๙ ฐ , ฅ ."
            },
            {
                class: "hg-highlight",
                buttons: "ฟ"
            }
        ]
    });

    function onChange(input) {
        document.querySelector("#input").value = input;
    }

    function onKeyPress(button) {
        // 切換 Shift 狀態
        if (button === "{shift}" || button === "{lock}") {
            let currentLayout = myKeyboard.options.layoutName;
            let shiftToggle = currentLayout === "default" ? "shift" : "default";
            myKeyboard.setOptions({ layoutName: shiftToggle });
        }
    }

    // --- 新增：實體鍵盤監聽邏輯 ---

    window.addEventListener("keydown", event => {
        // 當按下實體 Shift 鍵
        if (event.key === "Shift") {
            myKeyboard.setOptions({ layoutName: "shift" });
        }
    });

    window.addEventListener("keyup", event => {
        // 當放開實體 Shift 鍵
        if (event.key === "Shift") {
            myKeyboard.setOptions({ layoutName: "default" });
        }
    });

    // -------------------------

    // 當使用者在 input 手動輸入時，同步鍵盤狀態
    document.querySelector("#input").addEventListener("input", event => {
        console.log(event);
        myKeyboard.setInput(event.target.value);
    });