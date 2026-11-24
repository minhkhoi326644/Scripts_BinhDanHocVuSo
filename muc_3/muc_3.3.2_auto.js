// ==============================================================================
// TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - MỤC 3.3.2
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🤖 ĐANG CHẠY TOOL AUTO MỤC 3.3.2...", "color: #22c55e; font-weight: bold; font-size: 15px;");

    // 1. Ép hiện câu hỏi & dừng video
    if (window.$) {
        $('.video').trigger('pause');
        $('.in-video-problem-wrapper, .problem, .vert').show().css({'display':'block!important','opacity':'1!important'});
        $('button.submit, input.submit, .check, .action button').show();
    }

    // 2. Danh sách đáp án đúng Mục 3.3.2
    const ANSWERS_3_3_2 = [
        // Câu 1: Ý nghĩa ký hiệu ND (NoDerivatives)
        "Bạn không được phép chỉnh sửa hoặc tạo ra tác phẩm phái sinh từ tác phẩm gốc",
        // Câu 2: Quản lý giấy phép tài nguyên số (Chọn 3 mục đúng)
        "Tên tác giả hoặc nguồn gốc",
        "Loại giấy phép (ví dụ: CC BY 4.0, Public Domain)",
        "Đường dẫn (Link) gốc của tài nguyên"
    ];

    let count = 0;
    document.querySelectorAll('label, .choicegroup_item, fieldset label, p').forEach(el => {
        const text = el.innerText.trim();
        // Không tick ô sai
        if (text.includes("Số lượt tải xuống")) return;

        for (let ans of ANSWERS_3_3_2) {
            if (text === ans || text.includes(ans)) {
                const input = el.querySelector('input') || document.getElementById(el.getAttribute('for')) || el.parentElement?.querySelector('input');
                if (input && !input.checked) {
                    input.click();
                    input.checked = true;
                    input.dispatchEvent(new Event('change', { bubbles: true }));
                    el.style.backgroundColor = '#dcfce7';
                    el.style.border = '2px solid #22c55e';
                    count++;
                }
            }
        }
    });

    // 3. Tự động bấm nút Gửi nộp bài
    setTimeout(() => {
        document.querySelectorAll('button.submit, input.submit, .check, .action button').forEach(b => {
            const txt = (b.innerText || b.value || '').toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) b.click();
        });
        alert(`🎉 ĐÃ XONG MỤC 3.3.2!\n✔ Đã tick chọn và nộp ${count} đáp án đúng 100%.\n👉 Bấm "Trang sau" để qua bài tiếp theo!`);
    }, 500);
})();
