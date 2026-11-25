// ==============================================================================
// 🌟 TOOL QUÉT & IN RA TẤT CẢ CÂU HỎI MỤC 6.2 (TỰ ĐỘNG COPY VÀO CLIPBOARD)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🔍 ĐANG QUÉT VÀ TRÍCH XUẤT TOÀN BỘ CÂU HỎI MỤC 6.2...", "color: #38bdf8; font-weight: bold; font-size: 16px;");

    // 1. Dừng video và ép hiển thị tất cả các câu hỏi bị ẩn
    if (window.$) {
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
        $('button.submit, input.submit, .check, .action button, .action input').show();
    }

    // 2. Tìm tất cả các khối câu hỏi
    let problems = Array.from(document.querySelectorAll('.problem'));
    if (problems.length === 0) problems = Array.from(document.querySelectorAll('.wrapper-problem-response'));
    if (problems.length === 0) problems = Array.from(document.querySelectorAll('.xblock-student_view-problem'));

    if (problems.length === 0) {
        alert("⚠️ Không tìm thấy câu hỏi nào trên trang! Bạn hãy kiểm tra xem đang ở đúng trang/tab Mục 6.2 chưa nhé.");
        return;
    }

    let results = [];

    problems.forEach((p, idx) => {
        // Lấy mã câu hỏi hoặc tiêu đề
        let qHeader = '';
        const headerMatch = p.innerText.match(/Câu hỏi\s*#[a-zA-Z0-9]+/i);
        if (headerMatch) {
            qHeader = headerMatch[0];
        } else {
            qHeader = `Câu hỏi ${idx + 1}`;
        }

        // Trích xuất nội dung đề bài
        let qText = '';
        const legend = p.querySelector('legend');
        const pDesc = p.querySelector('.problem-question, p strong, p');
        if (legend && legend.innerText.trim().length > 5) {
            qText = legend.innerText.trim();
        } else if (pDesc && pDesc.innerText.trim().length > 5) {
            qText = pDesc.innerText.trim();
        } else {
            const lines = p.innerText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
            // Lọc bỏ dòng "Câu hỏi #...", điểm số, unanswered
            const filtered = lines.filter(l => !l.toLowerCase().includes('câu hỏi') && !l.includes('điểm') && !l.toLowerCase().includes('unanswered') && !l.toLowerCase().includes('gửi'));
            qText = filtered[0] || `Câu hỏi ${idx + 1}`;
        }
        qText = qText.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ").trim();

        // Trích xuất danh sách các lựa chọn đáp án
        let choices = [];
        const labels = Array.from(p.querySelectorAll('label, .choicegroup_item'));
        labels.forEach((lbl, cIdx) => {
            const inp = lbl.querySelector('input') || document.getElementById(lbl.getAttribute('for')) || lbl.parentElement?.querySelector('input');
            const isChecked = inp ? inp.checked : false;
            let choiceText = lbl.innerText.trim().replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ");
            if (choiceText.length > 0) {
                choices.push(`   ${String.fromCharCode(65 + cIdx)}. ${choiceText} ${isChecked ? '👈 [ĐANG CHỌN]' : ''}`);
            }
        });

        // Trạng thái điểm số
        let status = '⏳ CHƯA LÀM / CHƯA NỘP';
        const pText = p.innerText.toLowerCase();
        if (p.innerText.includes('1/1') || (pText.includes('correct') && !pText.includes('incorrect'))) {
            status = '✔ ĐÚNG (1/1 điểm)';
        } else if (p.innerText.includes('0/1') || pText.includes('incorrect') || pText.includes('sai')) {
            status = '❌ SAI (0/1 điểm)';
        } else if (pText.includes('unanswered') || pText.includes('chưa trả lời')) {
            status = '⏳ CHƯA TRẢ LỜI';
        }

        const block = `[${qHeader.toUpperCase()}] - Trạng thái: ${status}\nĐề bài: ${qText}\nCác lựa chọn:\n${choices.join('\n')}`;
        results.push(block);
    });

    const fullOutput = `=== TỔNG HỢP ${problems.length} CÂU HỎI MỤC 6.2 ===\n\n` + results.join('\n\n----------------------------------------\n\n');

    // In toàn bộ ra Console
    console.log(fullOutput);

    // Tự động Copy vào Clipboard
    try {
        const ta = document.createElement('textarea');
        ta.value = fullOutput;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        alert(`🎉 ĐÃ QUÉT THÀNH CÔNG ${problems.length} CÂU HỎI MỤC 6.2!\n\n✔ Đã tự động COPY VÀO CLIPBOARD.\n👉 Bạn chỉ cần bấm Ctrl + V để dán nhé!`);
    } catch(e) {
        alert(`🎉 ĐÃ QUÉT THÀNH CÔNG ${problems.length} CÂU HỎI MỤC 6.2!\n\n👉 Kết quả đã in ra tab Console, bạn hãy mở Console (F12) để copy nhé.`);
    }
})();
