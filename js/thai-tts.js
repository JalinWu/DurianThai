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

    // const audio = new Audio();
    // audio.src = audioUrl;

    // audio.play().catch(e => {
    //     console.error("播放失敗：", e);
    //     // 如果還是報 NotSupportedError，嘗試在分頁直接打開 URL 看看 Google 是否跳出驗證碼
    //     window.open(audioUrl, '_blank'); 
    // });
}