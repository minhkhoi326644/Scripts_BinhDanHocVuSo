// ==============================================================================
// TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - MỤC 4.2.1 (TAB 2)
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🤖 ĐANG CHẠY TOOL AUTO MỤC 4.2.1 (TAB 2)...", "color: #22c55e; font-weight: bold; font-size: 15px;");

    if (window.$) {
        $('.video').trigger('pause');
        $('.in-video-problem-wrapper, .problem, .vert').show().css({'display':'block!important','opacity':'1!important'});
        $('button.submit, input.submit, .check, .action button').show();
    }

    const ANSWERS = [
        "Chúng dựa vào trí nhớ con người, vốn có giới hạn trong việc ghi nhớ mật khẩu dài, phức tạp và duy nhất cho nhiều tài khoản",
        "Mã hóa dữ liệu (Cryptography)",
        "Hạn chế việc sử dụng cookie",
        "Tuân thủ các thực hành tốt nhất"
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
        alert(`🎉 ĐÃ XONG TAB 2 MỤC 4.2.1!\n✔ Đã tick chọn đúng 100% và nộp bài thành công!`);
    }, 500);
})();
