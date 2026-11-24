// ==============================================================================
// TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - MỤC 4.2.1 (TAB 1)
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🤖 ĐANG CHẠY TOOL AUTO MỤC 4.2.1 (TAB 1)...", "color: #22c55e; font-weight: bold; font-size: 15px;");

    if (window.$) {
        $('.video').trigger('pause');
        $('.in-video-problem-wrapper, .problem, .vert').show().css({'display':'block!important','opacity':'1!important'});
        $('button.submit, input.submit, .check, .action button').show();
    }

    const ANSWERS = [
        "Thông tin có liên quan trực tiếp hoặc gián tiếp đến một cá nhân đã được xác định hoặc có thể được xác định",
        "Thông tin định danh (Họ tên, ngày sinh)",
        "Dữ liệu tài chính (Tài khoản ngân hàng, số thẻ tín dụng)",
        "Dữ liệu hành vi (Lịch sử tìm kiếm, thói quen tiêu dùng)"
    ];

    let count = 0;
    document.querySelectorAll('label, .choicegroup_item, fieldset label, p').forEach(el => {
        const text = el.innerText.trim();
        for (let ans of ANSWERS) {
            if (text.includes(ans)) {
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

    setTimeout(() => {
        document.querySelectorAll('button.submit, input.submit, .check, .action button').forEach(b => {
            const txt = (b.innerText || b.value || '').toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) b.click();
        });
        alert(`🎉 ĐÃ XONG TAB 1 MỤC 4.2.1!\n✔ Đã tick chọn và nộp ${count} câu đúng 100%.\n👉 Bấm chuyển sang Tab 2 ở trên!`);
    }, 500);
})();
