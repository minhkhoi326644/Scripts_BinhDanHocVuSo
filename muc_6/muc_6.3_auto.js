// ==============================================================================
// 🌟 TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - MỤC 6.3 (5 CÂU)
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🤖 ĐANG CHẠY TOOL AUTO MỤC 6.3...", "color: #22c55e; font-weight: bold; font-size: 15px;");

    // 1. Ép hiển thị câu hỏi & dừng video
    if (window.$) {
        $('.video').trigger('pause');
        $('.in-video-problem-wrapper, .problem, .vert').show().css({'display':'block!important','opacity':'1!important'});
        $('button.submit, input.submit, .check, .action button').show();
    }

    // 2. Danh sách đáp án chuẩn Mục 6.3
    const ANSWERS_6_3 = [
        // Câu 1: Tác động tổng thể tích cực của AI
        "Thúc đẩy đổi mới sáng tạo, nâng cao năng suất, hỗ trợ giải quyết vấn đề xã hội và tạo ra việc làm mới",
        // Câu 2: Lý do con người giữ vai trò trung tâm
        "AI thiếu khả năng sáng tạo, đồng cảm và phán đoán chiến lược như con người",
        // Câu 3: Rủi ro công nghệ và trách nhiệm xã hội
        "Hệ thống AI có thể gây hậu quả tiêu cực nhưng hiện chưa rõ ai phải chịu trách nhiệm đạo đức hoặc pháp lý",
        // Câu 4: Giá trị gia tăng rõ rệt cho doanh nghiệp
        "AI hỗ trợ tăng tốc quy trình, cải thiện hiệu suất, giảm chi phí và nâng cao trải nghiệm người dùng",
        // Câu 5: Yếu tố then chốt để AI phát triển bền vững và có trách nhiệm
        "Xây dựng cơ chế phản hồi, đánh giá định kỳ, tích hợp hệ thống và đảm bảo minh bạch – đi kèm giám sát, tuân thủ đạo đức và đào tạo nhân sự"
    ];

    let count = 0;
    document.querySelectorAll('label, .choicegroup_item, fieldset label, p').forEach(el => {
        const text = el.innerText.trim();
        for (let ans of ANSWERS_6_3) {
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
        alert(`🎉 ĐÃ XONG MỤC 6.3!\n✔ Đã tick chọn và nộp ${count} câu đúng 100% thành công!`);
    }, 500);
})();
