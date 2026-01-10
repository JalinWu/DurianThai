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