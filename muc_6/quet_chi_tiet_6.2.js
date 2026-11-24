// ==============================================================================
// 🌟 TOOL QUÉT CHI TIẾT TẤT CẢ CÂU HỎI & ĐÁP ÁN MỤC 6.2 (GOM VÀO CLIPBOARD)
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🔍 ĐANG TRÍCH XUẤT CHI TIẾT TOÀN BỘ CÂU HỎI MỤC 6.2...", "color: #38bdf8; font-weight: bold; font-size: 16px;");

    // Ép hiện tất cả các câu hỏi
    if (window.$) {
        $('.video').trigger('pause');
        $('.in-video-problem-wrapper, .problem, .vert').show().css({'display':'block!important','opacity':'1!important'});
        $('button.submit, input.submit, .check, .action button').show();
    }

    let problems = Array.from(document.querySelectorAll('.problem'));
    if (problems.length === 0) problems = Array.from(document.querySelectorAll('.wrapper-problem-response'));

    let results = [];

    problems.forEach((p, idx) => {
        // Lấy đề bài
        let qText = '';
        const legend = p.querySelector('legend');
        const pDesc = p.querySelector('.problem-question, p strong, p');
        if (legend && legend.innerText.trim().length > 5) {
            qText = legend.innerText.trim();
        } else if (pDesc && pDesc.innerText.trim().length > 5) {
            qText = pDesc.innerText.trim();
        } else {
            const lines = p.innerText.split('\n').filter(l => l.trim().length > 0);
            qText = lines[0] || `Câu hỏi ${idx + 1}`;
        }

        // Lấy danh sách các lựa chọn
        let choices = [];
        const labels = Array.from(p.querySelectorAll('label, .choicegroup_item'));
        labels.forEach((lbl, cIdx) => {
            const inp = lbl.querySelector('input') || document.getElementById(lbl.getAttribute('for'));
            const isChecked = inp ? inp.checked : false;
            const choiceText = lbl.innerText.trim();
            choices.push(`   ${String.fromCharCode(65 + cIdx)}. ${choiceText} ${isChecked ? '👈 [ĐANG CHỌN]' : ''}`);
        });

        // Điểm số và trạng thái
        let status = 'Chưa xác định';
        const pText = p.innerText;
        if (pText.includes('1/1') || (pText.toLowerCase().includes('correct') && !pText.toLowerCase().includes('incorrect'))) {
            status = '✔ ĐÚNG (1/1 điểm)';
        } else if (pText.includes('0/1') || pText.toLowerCase().includes('incorrect')) {
            status = '❌ SAI (0/1 điểm)';
        } else if (pText.toLowerCase().includes('unanswered') || pText.includes('chưa trả lời')) {
            status = '⏳ CHƯA TRẢ LỜI / CHƯA NỘP';
        }

        const block = `[CÂU ${idx + 1}] - Trạng thái: ${status}\nĐề bài: ${qText}\nCác lựa chọn:\n${choices.join('\n')}`;
        results.push(block);
    });

    const fullOutput = results.join('\n\n----------------------------------------\n\n');
    console.log(fullOutput);

    // Copy vào Clipboard
    try {
        const ta = document.createElement('textarea');
        ta.value = fullOutput;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        alert(`🎉 ĐÃ QUÉT CHI TIẾT ${problems.length} CÂU MỤC 6.2!\n✔ Đã tự động COPY VÀO CLIPBOARD.\n👉 Bạn chỉ cần bấm Ctrl + V gửi vào chat nhé!`);
    } catch(e) {
        alert("Đã quét xong và in ra Console! Bạn copy từ Console nhé.");
    }
})();
