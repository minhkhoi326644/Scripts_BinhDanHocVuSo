// ==============================================================================
// TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - MỤC 3.1.1 (TAB 1)
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🤖 ĐANG CHẠY TOOL AUTO MỤC 3.1.1 (TAB 1)...", "color: #22c55e; font-weight: bold; font-size: 15px;");

    // 1. Ép hiện câu hỏi & dừng video
    if (window.$) {
        $('.video').trigger('pause');
        $('.in-video-problem-wrapper, .problem, .vert').show().css({'display':'block!important','opacity':'1!important'});
        $('button.submit, input.submit, .check, .action button').show();
    }

    // 2. Danh sách đáp án đúng Mục 3.1.1 - Tab 1
    const ANSWERS_3_1_1_T1 = [
        // Câu 1: Mục tiêu theo chuẩn SMART tốt nhất
        "Đạt 10.000 người theo dõi trên Instagram trong vòng 6 tháng bằng cách đăng 5 bài/tuần về mẹo vặt cuộc sống",
        // Câu 2: Hiểu rõ vấn đề mà đối tượng đang gặp phải giúp ích gì
        "Giúp tạo ra nội dung có giá trị, giải quyết được đúng nhu cầu của họ"
    ];

    let count = 0;
    document.querySelectorAll('label, .choicegroup_item, fieldset label, p').forEach(el => {
        const text = el.innerText.trim();
        for (let ans of ANSWERS_3_1_1_T1) {
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

    // 3. Tự động bấm nút Gửi nộp bài
    setTimeout(() => {
        document.querySelectorAll('button.submit, input.submit, .check, .action button').forEach(b => {
            const txt = (b.innerText || b.value || '').toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) b.click();
        });
        alert(`🎉 ĐÃ XONG TAB 1 MỤC 3.1.1!\n✔ Đã tick chọn và nộp ${count} câu đúng 100%.\n👉 Bấm chuyển sang Tab 2 ở trên!`);
    }, 500);
})();
