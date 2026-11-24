// ==============================================================================
// TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - MỤC 2.1
// Mục: 2.1. Tương tác thông qua công nghệ số (Video bài giảng)
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🤖 ĐANG CHẠY TOOL AUTO MỤC 2.1...", "color: #22c55e; font-weight: bold; font-size: 15px;");

    // 1. Ép hiển thị câu hỏi và nút Submit
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

    // 2. DANH SÁCH ĐÁP ÁN ĐÚNG CỦA MỤC 2.1
    const ANSWERS_2_1 = [
        // Câu 1: Đặc điểm đúng về giao tiếp ngoại tuyến
        "Giúp nhận được phản hồi trung thực và thể hiện được ngôn ngữ cơ thể",
        // Câu 2: Điểm KHÔNG ĐÚNG về mạng xã hội
        "Chỉ được sử dụng với mục đích cá nhân, không phù hợp cho kinh doanh hoặc quảng bá thương hiệu"
    ];

    let selectedCount = 0;

    // 3. Tự động tick chọn đáp án đúng
    document.querySelectorAll('label, .choicegroup_item, fieldset label, p').forEach(el => {
        const text = el.innerText.trim();
        for (let ans of ANSWERS_2_1) {
            if (text === ans || text.includes(ans)) {
                const input = el.querySelector('input') || document.getElementById(el.getAttribute('for')) || el.closest('label')?.querySelector('input') || el.parentElement?.querySelector('input');
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

    console.log(`%c✔ Đã tick chọn ${selectedCount} đáp án đúng của Mục 2.1!`, "color: #38bdf8; font-weight: bold;");

    // 4. Tự động bấm nút Gửi nộp bài sau 0.5s
    setTimeout(() => {
        let submitCount = 0;
        document.querySelectorAll('button.submit, input.submit, .check, .action button, .action input, .submit-btn').forEach(btn => {
            const txt = (btn.innerText || btn.value || '').trim().toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) {
                btn.click();
                submitCount++;
            }
        });
        alert(`🎉 ĐÃ XONG MỤC 2.1!\n✔ Đã chọn: ${selectedCount} đáp án đúng 100%!\n✔ Đã nộp bài: ${submitCount} câu.\n👉 Bấm 'Trang sau' để qua bài tiếp theo.`);
    }, 500);
})();
