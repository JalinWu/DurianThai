// // source/js/thai-speak.js

// function playThai(text) {
//   // 檢查瀏覽器是否支援
//   if (!('speechSynthesis' in window)) {
//     alert("您的瀏覽器不支援語音發音功能");
//     return;
//   }

//   // 停止目前正在播放的聲音 (避免連點時聲音重疊)
//   window.speechSynthesis.cancel();

//   const utterance = new SpeechSynthesisUtterance(text);
//   utterance.lang = 'th-TH'; // 設定為泰語
//   utterance.rate = 0.8;     // 語速稍微放慢適合學習
  
//   // 解決部分瀏覽器語音被 garbage collected 的 bug
//   window.speechSynthesis.speak(utterance);
// }

// 在你的全域 JS 文件中

function playThai(text, gender = 'female') {
  // 1. 取消正在播放的聲音 (避免重疊)
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'th-TH'; // 設定語言為泰文
  utterance.rate = 0.8;     // 語速 (可選)

  // 2. 取得所有可用聲音
  const voices = window.speechSynthesis.getVoices();
  
  // 3. 過濾出泰文聲音
  const thaiVoices = voices.filter(voice => voice.lang === 'th-TH');

  if (thaiVoices.length > 0) {
    let selectedVoice = thaiVoices[0]; // 預設使用第一個聲音

    // 4. 嘗試根據性別選擇聲音
    if (gender === 'male') {
      // 嘗試尋找名稱中包含 'Male' 的聲音 (有些瀏覽器會標示)
      const maleVoice = thaiVoices.find(v => v.name.includes('Male') || v.name.includes('Narisa') === false); 
      // 備註：Narisa 是常見的微軟泰文女聲，如果不是 Narisa 有可能是男聲
      
      if (maleVoice) {
        selectedVoice = maleVoice;
      } else if (thaiVoices.length > 1) {
        // 如果找不到明確標示 Male 的，但有多個泰文聲音，通常第二個可能是不同的性別
        // 這是一個猜測策略 (例如 iOS 上可能只有一個 Siri 女聲，這招就沒效)
        selectedVoice = thaiVoices[1]; 
      }
    } else {
      // 如果要女聲 (female)
      const femaleVoice = thaiVoices.find(v => v.name.includes('Female') || v.name.includes('Narisa'));
      if (femaleVoice) selectedVoice = femaleVoice;
    }

    utterance.voice = selectedVoice;
    console.log(`使用聲音: ${selectedVoice.name}, 性別需求: ${gender}`);
  }

  window.speechSynthesis.speak(utterance);
}