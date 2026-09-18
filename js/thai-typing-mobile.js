(function () {
    if (!isMobile) throw new Error("It's desktop");

    // 泰文句子庫
    const QUOTES = [
        // 交通與出行 (Traffic & Transportation)
        { thai: "บันได", ch: "樓梯" },
        { thai: "ขึ้นบันได", ch: "上樓梯" },
        { thai: "ลงบันได", ch: "下樓梯" },
        { thai: "ลิฟต์", ch: "電梯" },
        { thai: "ทางเท้า", ch: "人行道" },
        { thai: "ทางม้าลาย", ch: "斑馬線" },
        { thai: "ไฟจราจร", ch: "紅綠燈" },
        { thai: "รถติด", ch: "塞車" },
        { thai: "ฝ่าไฟแดง", ch: "闖紅燈" },
        { thai: "ถอยรถ", ch: "倒車" },
        { thai: "เบรกรถ", ch: "煞車" },
        { thai: "แซงรถ", ch: "超車" },
        { thai: "ทางลัด", ch: "捷徑" },
        { thai: "ทางอ้อม", ch: "繞道" },
        { thai: "ใบขับขี่", ch: "駕照" },
        { thai: "ใบสั่ง", ch: "罰單" },
        { thai: "รถกู้ภัย", ch: "救護車" },
        { thai: "ชานชาลา", ch: "月台" },
        { thai: "ต่อรถ", ch: "轉乘" },
        { thai: "คาดเข็มขัดนิรภัย", ch: "繫安全帶" },

        // 職場與辦公 (Work & Office)
        { thai: "ประชุม", ch: "開會" },
        { thai: "วาระการประชุม", ch: "會議議程" },
        { thai: "นำเสนองาน", ch: "簡報/簡報展示" },
        { thai: "สัญญา", ch: "合約" },
        { thai: "เซ็นชื่อ", ch: "簽名" },
        { thai: "ลาป่วย", ch: "病假" },
        { thai: "ลากิจ", ch: "事假" },
        { thai: "ลาพักร้อน", ch: "特休" },
        { thai: "ทำงานล่วงเวลา", ch: "加班" },
        { thai: "เงินเดือน", ch: "薪水" },
        { thai: "ขึ้นเงินเดือน", ch: "加薪" },
        { thai: "เลื่อนตำแหน่ง", ch: "升職" },
        { thai: "ลาออก", ch: "離職" },
        { thai: "ยื่นใบลา", ch: "遞交假單" },
        { thai: "สัมภาษณ์งาน", ch: "求職面試" },
        { thai: "ประวัติการทำงาน", ch: "履歷" },
        { thai: "ระยะทดลองงาน", ch: "試用期" },
        { thai: "เพื่อนร่วมงาน", ch: "同事" },
        { thai: "หัวหน้างาน", ch: "主管" },
        { thai: "ประสิทธิภาพ", ch: "效率" },

        // 金融與商業 (Finance & Business)
        { thai: "งบประมาณ", ch: "預算" },
        { thai: "ใบเสร็จ", ch: "收據" },
        { thai: "ใบกำกับภาษี", ch: "發票" },
        { thai: "ภาษี", ch: "稅金" },
        { thai: "โอนเงิน", ch: "轉帳" },
        { thai: "ถอนเงิน", ch: "提款" },
        { thai: "ฝากเงิน", ch: "存款" },
        { thai: "สมุดบัญชี", ch: "存摺" },
        { thai: "บัญชีธนาคาร", ch: "銀行帳戶" },
        { thai: "ยอดเงินคงเหลือ", ch: "帳戶餘額" },
        { thai: "ดอกเบี้ย", ch: "利息" },
        { thai: "อัตราแลกเปลี่ยน", ch: "匯率" },
        { thai: "เงินกู้", ch: "貸款" },
        { thai: "ผ่อนชำระ", ch: "分期付款" },
        { thai: "เงินมัดจำ", ch: "押金/訂金" },
        { thai: "กำไร", ch: "利潤" },
        { thai: "ขาดทุน", ch: "虧損" },
        { thai: "ตลาดหุ้น", ch: "股市" },
        { thai: "การลงทุน", ch: "投資" },
        { thai: "คืนเงิน", ch: "退款" },

        // 醫療與健康 (Medical & Health)
        { thai: "อาการป่วย", ch: "生病症狀" },
        { thai: "ตัวร้อน", ch: "發燒" },
        { thai: "อาการไอ", ch: "咳嗽" },
        { thai: "น้ำมูกไหล", ch: "流鼻水" },
        { thai: "ปวดหัว", ch: "頭痛" },
        { thai: "เจ็บคอ", ch: "喉嚨痛" },
        { thai: "ท้องเสีย", ch: "拉肚子" },
        { thai: "อาเจียน", ch: "嘔吐" },
        { thai: "เวียนหัว", ch: "頭暈" },
        { thai: "แพ้ยา", ch: "藥物過敏" },
        { thai: "แผลสด", ch: "傷口" },
        { thai: "เลือดออก", ch: "流血" },
        { thai: "ใบสั่งยา", ch: "處方籤" },
        { thai: "ยาแก้ปวด", ch: "止痛藥" },
        { thai: "ยาลดไข้", ch: "退燒藥" },
        { thai: "ยาแก้อักเสบ", ch: "消炎藥" },
        { thai: "ฉีดวัคซีน", ch: "打疫苗" },
        { thai: "ห้องฉุกเฉิน", ch: "急診室" },
        { thai: "นอนโรงพยาบาล", ch: "住院" },
        { thai: "วัดไข้", ch: "量體溫" },

        // 居家與居住 (Housing & Life)
        { thai: "เพดาน", ch: "天花板" },
        { thai: "พื้นห้อง", ch: "地板" },
        { thai: "กำแพง", ch: "牆壁" },
        { thai: "ผ้าม่าน", ch: "窗簾" },
        { thai: "ระเบียง", ch: "陽台" },
        { thai: "ทางเดิน", ch: "走廊" },
        { thai: "ท่อน้ำ", ch: "水管" },
        { thai: "น้ำรั่ว", ch: "漏水" },
        { thai: "ไฟดับ", ch: "停電" },
        { thai: "น้ำไม่ไหล", ch: "停水" },
        { thai: "ปลั๊กไฟ", ch: "插頭" },
        { thai: "เต้ารับ", ch: "插座" },
        { thai: "รีโมท", ch: "遙控器" },
        { thai: "ถังขยะ", ch: "垃圾桶" },
        { thai: "แยกขยะ", ch: "垃圾分類" },
        { thai: "เจ้าของบ้าน", ch: "房東" },
        { thai: "ผู้เช่า", ch: "租客" },
        { thai: "ค่าเช่า", ch: "房租" },
        { thai: "ค่าส่วนกลาง", ch: "管理費" },
        { thai: "ย้ายบ้าน", ch: "搬家" },

        // 科技與數位 (Technology & Digital)
        { thai: "รหัสผ่าน", ch: "密碼" },
        { thai: "บัญชีผู้ใช้", ch: "帳號" },
        { thai: "ดาวน์โหลด", ch: "下載" },
        { thai: "อัปโหลด", ch: "上傳" },
        { thai: "สำรองข้อมูล", ch: "備份資料" },
        { thai: "ลบข้อมูล", ch: "刪除資料" },
        { thai: "อัปเดต", ch: "更新" },
        { thai: "สัญญาณเน็ต", ch: "網路訊號" },
        { thai: "เชื่อมต่อ", ch: "連接" },
        { thai: "สายชาร์จ", ch: "充電線" },
        { thai: "พาวเวอร์แบงก์", ch: "行動電源" },
        { thai: "แป้นพิมพ์", ch: "鍵盤" },
        { thai: "หน้าจอ", ch: "螢幕" },
        { thai: "ค้นหา", ch: "搜尋" },
        { thai: "เว็บไซต์", ch: "網站" },
        { thai: "ลิงก์", ch: "連結" },
        { thai: "ข้อความ", ch: "訊息/簡訊" },
        { thai: "สแกนคิวอาร์โค้ด", ch: "掃描QR碼" },
        { thai: "ตั้งค่า", ch: "設定" },
        { thai: "ปิดเครื่อง", ch: "關機" },

        // 情緒與性格 (Emotions & Personality)
        { thai: "กังวล", ch: "焦慮/擔憂" },
        { thai: "ตื่นเต้น", ch: "興奮/緊張" },
        { thai: "อิจฉา", ch: "嫉妒" },
        { thai: "เขิน", ch: "害羞" },
        { thai: "ผิดหวัง", ch: "失望" },
        { thai: "สิ้นหวัง", ch: "絕望" },
        { thai: "ลังเล", ch: "猶豫" },
        { thai: "สงสัย", ch: "懷疑/疑問" },
        { thai: "ไว้ใจ", ch: "信任" },
        { thai: "เกรงใจ", ch: "客氣/顧慮" },
        { thai: "ดื้อ", ch: "固執/淘氣" },
        { thai: "สุภาพ", ch: "禮貌" },
        { thai: "ใจเย็น", ch: "冷靜/脾氣好" },
        { thai: "ใจร้อน", ch: "急躁" },
        { thai: "สะเพร่า", ch: "粗心" },
        { thai: "รอบคอบ", ch: "細心/周到" },
        { thai: "ซื่อสัตย์", ch: "誠實" },
        { thai: "วู่วาม", ch: "衝動" },
        { thai: "ซึมเศร้า", ch: "憂鬱" },
        { thai: "ซาบซึ้ง", ch: "感動" },

        // 環境與社會 (Environment & Society)
        { thai: "สิ่งแวดล้อม", ch: "環境" },
        { thai: "มลพิษ", ch: "污染" },
        { thai: "ฝุ่น PM2.5", ch: "PM2.5懸浮微粒" },
        { thai: "แผ่นดินไหว", ch: "地震" },
        { thai: "น้ำท่วม", ch: "水災" },
        { thai: "ภัยแล้ง", ch: "乾旱" },
        { thai: "พายุ", ch: "颱風/暴風雨" },
        { thai: "กฎหมาย", ch: "法律" },
        { thai: "อาชญากรรม", ch: "犯罪" },
        { thai: "สถานีตำรวจ", ch: "警察局" },
        { thai: "ศาล", ch: "法院" },
        { thai: "ทนาย", ch: "律師" },
        { thai: "หลักฐาน", ch: "證據" },
        { thai: "พยาน", ch: "證人" },
        { thai: "เลือกตั้ง", ch: "選舉" },
        { thai: "รัฐบาล", ch: "政府" },
        { thai: "ประชาชน", ch: "民眾/公民" },
        { thai: "ชุมชน", ch: "社區" },
        { thai: "ขยะพิษ", ch: "有害廢棄物" },
        { thai: "สภาพอากาศ", ch: "天氣/氣候" },

        // 行為與日常互動 (Actions & Interactions)
        { thai: "หลงทาง", ch: "迷路" },
        { thai: "พลาดโอกาส", ch: "錯過機會" },
        { thai: "จองล่วงหน้า", ch: "預約" },
        { thai: "ยกเลิก", ch: "取消" },
        { thai: "ยืนยัน", ch: "確認" },
        { thai: "เลื่อนนัด", ch: "改期/推遲約會" },
        { thai: "ตรงเวลา", ch: "準時" },
        { thai: "มาสาย", ch: "遲到" },
        { thai: "ลืมตัว", ch: "一時疏忽" },
        { thai: "เตือนความจำ", ch: "提醒" },
        { thai: "อธิบาย", ch: "解釋" },
        { thai: "เข้าใจผิด", ch: "誤會" },
        { thai: "ขอโทษ", ch: "道歉" },
        { thai: "ให้อภัย", ch: "原諒" },
        { thai: "บ่น", ch: "抱怨" },
        { thai: "วิจารณ์", ch: "批評" },
        { thai: "ชมเชย", ch: "稱讚" },
        { thai: "ปรับปรุง", ch: "改善" },
        { thai: "ยอมรับ", ch: "接受/承認" },
        { thai: "ปฏิเสธ", ch: "拒絕" },

        // 購物與飲食 (Shopping & Dining)
        { thai: "ของสด", ch: "生鮮食材" },
        { thai: "วันหมดอายุ", ch: "有效期限" },
        { thai: "ใบเสร็จรับเงิน", ch: "收據/發票" },
        { thai: "ส่วนลด", ch: "折扣" },
        { thai: "ของแถม", ch: "贈品" },
        { thai: "สินค้าชำรุด", ch: "瑕疵品" },
        { thai: "เปลี่ยนสินค้า", ch: "退換貨" },
        { thai: "รถเข็น", ch: "購物車/推車" },
        { thai: "ตะกร้า", ch: "購物籃" },
        { thai: "เครื่องปรุง", ch: "調味料" },
        { thai: "รสเผ็ดจัด", ch: "重辣" },
        { thai: "ห่อกลับบ้าน", ch: "外帶" },
        { thai: "ทานที่ร้าน", ch: "內用" },
        { thai: "จานชาม", ch: "碗盤" },
        { thai: "เช็ดโต๊ะ", ch: "擦桌子" },
        { thai: "ล้างจาน", ch: "洗碗" },
        { thai: "ห้องครัว", ch: "廚房" },
        { thai: "วัตถุดิบ", ch: "食材/原料" },
        { thai: "เมนูแนะนำ", ch: "推薦菜單" },
        { thai: "ชำระเงิน", ch: "結帳/付款" }
    ];

    const keyMobileEl = document.getElementsByClassName('key-mobile');
    const textDisplayEl = document.getElementById('text-display');
    const shiftKey = document.getElementById('key-ShiftLeft');
    let isShiftClicked = false;
    var targetTextCH = "";

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
                console.log(content);

                if(content) {
                    if (content == '⇧') {
                        isShiftClicked = !isShiftClicked;
                    } else {
                        typedTextArray.push(content);
                        updateTextDisplay();
                        updateHint();
                        if (isShiftClicked) {
                            setTimeout(() => switchNormalAndShiftKey(), 100);
                            isShiftClicked = !isShiftClicked;
                        }

                        if (typedTextArray.length === targetTextArray.length) {
                            setTimeout(() => startNewQuote(), 300);
                        }
                    }
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

    function startNewQuote() {
        typedTextArray = [];

        var quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
        targetTextArray = Array.from(quote.thai);
        targetTextCH = quote.ch;

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
                    // console.log(char);
                    // console.log(isThaiCombiningChar(char));
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

        const spans = Array.from(textDisplayEl.querySelectorAll('.char'));

        // 泰文結合符號 Unicode 範圍
        const thaiCombiningRegex = /[\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E33]/;

        spans.forEach((span) => {
            // 判斷當前 span 是否為結合符號
            const isCombining = thaiCombiningRegex.test(span.textContent);

            if (isCombining) {
                let preSpan = span.previousElementSibling;

                // 將文字合併到目標子音，並移除當前 span
                if (preSpan) {
                    preSpan.textContent += span.textContent;
                    span.remove();
                }
            }
        });

        // 中文的部分
        const ch = document.createElement('div');
        ch.innerText = targetTextCH;
        ch.className = 'ch';
        textDisplayEl.appendChild(ch);
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