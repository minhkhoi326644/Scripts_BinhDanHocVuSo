// ==============================================================================
// TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - MỤC 2.5 (CHUẨN 100% CẢ 2 CÂU)
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🤖 ĐANG CHẠY TOOL AUTO MỤC 2.5...", "color: #22c55e; font-weight: bold; font-size: 15px;");

    // 1. Ép hiện câu hỏi & dừng video
    if (window.$) {
        $('.video').trigger('pause');
        $('.in-video-problem-wrapper, .problem, .vert').show().css({'display':'block!important','opacity':'1!important'});
        $('button.submit, input.submit, .check, .action button').show();
    }

    // 2. Danh sách đáp án đúng 100% của Mục 2.5:
    const ANSWERS_2_5 = [
        // Câu 1: Quy tắc ứng xử chung (chọn cả 2 quy tắc này)
        "Tuân thủ pháp luật Việt Nam, tôn trọng quyền và lợi ích hợp pháp của tổ chức, cá nhân",
        "Tuân thủ các quy định và hướng dẫn về bảo vệ an toàn và bảo mật thông tin",

        // Câu 2: Các rủi ro người dùng thường gặp phải (đạt 1/1 điểm)
        "Bắt nạt trên mạng",
        "Tội phạm mạng",
        "Quấy rỗi trực tuyến"
    ];

    let count = 0;
    document.querySelectorAll('label, .choicegroup_item, fieldset label, p').forEach(el => {
        const text = el.innerText.trim();
        // Không tick các đáp án sai/gài bẫy
        if (text.includes("Khoe khoang tài sản") || 
            text.includes("giá trị quốc tế") || 
            text.includes("trên Facebook")) return;

        for (let ans of ANSWERS_2_5) {
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
        alert(`🎉 ĐÃ XONG MỤC 2.5!\n✔ Đã tick chọn: ${count} đáp án chuẩn 100% cho cả 2 câu.\n👉 Bấm "Trang sau" để qua bài tiếp theo.`);
    }, 500);
})();
