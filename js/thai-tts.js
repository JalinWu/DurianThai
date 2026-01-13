function playThaiTTS(txt) {
    // 獲取文章正文內容（根據主題調整選擇器，例如 .article-entry 或 .post-content）
    // const content = document.querySelector('.article-entry').innerText;
    console.log(txt);
    const content = txt;
    
    // 過濾掉過長的字串（Google TTS 單次請求上限約 200 字）
    const shortContent = content.substring(0, 200); 
    
    const encodeText = encodeURIComponent(shortContent);
    const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeText}&tl=th&client=tw-ob`;
    
    const audio = document.getElementById('thaiAudio');
    audio.src = audioUrl;
    audio.play();
}

// function playThaiTTS(txt) {
//     console.log(txt);
//     window.speechSynthesis.cancel();
//     // const content = "เจ็บ"; // 測試文字
//     const content = txt;
//     const msg = new SpeechSynthesisUtterance(content);
    
//     // 關鍵：獲取所有可用語音
//     const voices = window.speechSynthesis.getVoices();
    
//     // 優先尋找 Google 的泰語語音，因為它最自然
//     const thaiVoice = voices.find(v => v.lang === 'th-TH' && v.name.includes('Google')) 
//                      || voices.find(v => v.lang === 'th-TH');

//     if (thaiVoice) {
//         msg.voice = thaiVoice;
//         console.log("正在使用語音：", thaiVoice.name);
//     }

//     msg.lang = 'th-TH';
//     msg.rate = 0.9; // 稍微放慢一點，聽起來會比較清楚
//     window.speechSynthesis.speak(msg);
// }

// // 注意： getVoices 是非同步加載的，第一次執行可能會空，需要監聽
// window.speechSynthesis.onvoiceschanged = () => {
//     console.log("語音包已加載");
// };