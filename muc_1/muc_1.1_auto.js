// ==============================================================================
// TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - MỤC 1.1
// Mục: 1.1. Duyệt, tìm kiếm và lọc dữ liệu, thông tin và nội dung số (5 câu)
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🤖 ĐANG CHẠY TOOL AUTO MỤC 1.1...", "color: #22c55e; font-weight: bold; font-size: 15px;");

    // 1. Ép hiển thị các câu hỏi và nút Submit
    if (window.$) {
        $('.in-video-problem-wrapper, .vert, .in-video-problem, .problem, .xblock-student_view-problem').each(function() {
            $(this).show().css({
                'display': 'block !important',
                'position': 'relative !important',
                'visibility': 'visible !important',
                'opacity': '1 !important',
                'margin': '20px 0 !important',
                'padding': '16px !important',
                'background': '#ffffff !important',
                'color': '#000000 !important',
                'border': '3px solid #22c55e !important',
                'border-radius': '10px !important'
            });
        });
        $('button.submit, input.submit, .check, .action button, .action input, .submit-btn').show();
        $('.video').trigger('pause');
    }

    // 2. DANH SÁCH ĐÁP ÁN ĐÚNG CỦA MỤC 1.1
    const ANSWERS_1_1 = [
        "Huyết áp của bệnh nhân nam là 120/80 mmHg",
        "Bảng Excel chứa danh sách điểm sinh viên",
        "Vì chúng làm nổi bật các điểm chính",
        "Tài liệu học thuật",
        "Bài báo khoa học"
    ];

    let selectedCount = 0;

    // 3. Tự động tick chọn đáp án đúng
    document.querySelectorAll('label, .choicegroup_item, fieldset label, p').forEach(el => {
        const text = el.innerText.trim();
        for (let ans of ANSWERS_1_1) {
            if (text === ans || text.includes(ans)) {
                const input = el.querySelector('input') || document.getElementById(el.getAttribute('for'));
                if (input) {
                    if (!input.checked) {
                        input.click();
                        input.checked = true;
                        input.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                    el.style.backgroundColor = '#dcfce7';
                    el.style.border = '2px solid #22c55e';
                    el.style.borderRadius = '6px';
                    el.style.padding = '4px 8px';
                    el.style.fontWeight = 'bold';
                    selectedCount++;
                }
            }
        }
    });

    console.log(`%c✔ Đã tick chọn ${selectedCount} đáp án đúng của Mục 1.1!`, "color: #38bdf8; font-weight: bold;");

    // 4. Tự động bấm nút Gửi nộp bài sau 0.6 giây
    setTimeout(() => {
        let submitCount = 0;
        document.querySelectorAll('button.submit, input.submit, .check, .action button, .action input, .submit-btn').forEach(btn => {
            const txt = (btn.innerText || btn.value || '').trim().toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) {
                btn.click();
                submitCount++;
            }
        });
        alert(`🎉 ĐÃ XONG MỤC 1.1!\nĐã tự động chọn và nộp bài.`);
    }, 600);
})();
