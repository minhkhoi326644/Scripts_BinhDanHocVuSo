// ==============================================================================
// 🌟 TOOL QUÉT CHI TIẾT TẤT CẢ CÂU HỎI MỤC 3.4.2 (TỰ ĐỘNG COPY VÀO CLIPBOARD)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🔍 ĐANG TRÍCH XUẤT CHI TIẾT CÂU HỎI MỤC 3.4.2 TRÊN TRANG...", "color: #38bdf8; font-weight: bold; font-size: 16px;");

    // 1. Dừng video và ép hiển thị tất cả các câu hỏi bị ẩn
    if (window.$) {
        try {
            $('.video').trigger('pause');
            $('.in-video-problem-wrapper, .problem, .vert, .xblock-student_view-problem').each(function() {
                $(this).show().css({
                    'display': 'block !important',
                    'position': 'relative !important',
                    'visibility': 'visible !important',
                    'opacity': '1 !important',
                    'margin': '15px 0 !important',
                    'padding': '12px !important',
                    'background': '#ffffff !important',
                    'color': '#000000 !important'
                });
            });
            $('button.submit, input.submit, .check, .action button, .action input, .submit-btn').show();
        } catch(e) {}
    }

    // 2. Tìm tất cả các khối problem
    let problems = Array.from(document.querySelectorAll('.problem'));
    if (problems.length === 0) problems = Array.from(document.querySelectorAll('.wrapper-problem-response'));
    if (problems.length === 0) problems = Array.from(document.querySelectorAll('fieldset.choicegroup'));

    if (problems.length === 0) {
        alert("⚠️ Không tìm thấy câu hỏi nào trên trang hiện tại! Bạn kiểm tra xem đã mở đúng tab Mục 3.4.2 chưa nhé.");
        return;
    }

    let results = [];

    problems.forEach((p, idx) => {
        // Trích xuất tiêu đề câu hỏi
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

        // Làm sạch khoảng trắng thừa
        qText = qText.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ").trim();

        // Trích xuất danh sách các lựa chọn
        let choices = [];
        const labels = Array.from(p.querySelectorAll('label, .choicegroup_item, li'));
        labels.forEach((lbl, cIdx) => {
            const inp = lbl.querySelector('input') || document.getElementById(lbl.getAttribute('for')) || lbl.parentElement?.querySelector('input');
            const isChecked = inp ? inp.checked : false;
            let choiceText = lbl.innerText.trim().replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ");
            if (choiceText.length > 0) {
                choices.push(`   ${String.fromCharCode(65 + cIdx)}. ${choiceText} ${isChecked ? '👈 [ĐANG CHỌN]' : ''}`);
            }
        });

        // Xác định trạng thái điểm số
        let status = '⏳ CHƯA NỘP / CHƯA XÁC ĐỊNH';
        const pText = p.innerText.toLowerCase();
        if (p.innerText.includes('1/1') || (pText.includes('correct') && !pText.includes('incorrect'))) {
            status = '✔ ĐÚNG (1/1 điểm)';
        } else if (p.innerText.includes('0/1') || pText.includes('incorrect') || pText.includes('sai')) {
            status = '❌ SAI (0/1 điểm)';
        } else if (pText.includes('unanswered') || pText.includes('chưa trả lời')) {
            status = '⏳ CHƯA TRẢ LỜI';
        }

        const block = `[CÂU ${idx + 1}] - Trạng thái: ${status}\nĐề bài: ${qText}\nCác lựa chọn:\n${choices.join('\n')}`;
        results.push(block);
    });

    const fullOutput = `=== TỔNG HỢP ${problems.length} CÂU HỎI MỤC 3.4.2 ===\n\n` + results.join('\n\n----------------------------------------\n\n');
    console.log(fullOutput);

    // 3. Tự động Copy vào Clipboard
    try {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(fullOutput).then(() => {
                alert(`🎉 ĐÃ QUÉT THÀNH CÔNG ${problems.length} CÂU HỎI MỤC 3.4.2!\n✔ Đã tự động COPY VÀO CLIPBOARD.\n👉 Bạn chỉ cần bấm Ctrl + V gửi vào chat nhé!`);
            }).catch(() => fallbackCopy(fullOutput, problems.length));
        } else {
            fallbackCopy(fullOutput, problems.length);
        }
    } catch(e) {
        fallbackCopy(fullOutput, problems.length);
    }

    function fallbackCopy(text, count) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        alert(`🎉 ĐÃ QUÉT THÀNH CÔNG ${count} CÂU HỎI MỤC 3.4.2!\n✔ Đã tự động COPY VÀO CLIPBOARD.\n👉 Bạn chỉ cần bấm Ctrl + V gửi vào chat nhé!`);
    }
})();
