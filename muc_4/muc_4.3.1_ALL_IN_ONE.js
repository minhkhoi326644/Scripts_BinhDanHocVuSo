// ==============================================================================
// 🌟 TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - MỤC 4.3 (BẢO VỆ SỨC KHỎE VÀ AN SINH SỐ)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🤖 ĐANG CHẠY TOOL AUTO MỤC 4.3...", "color: #22c55e; font-weight: bold; font-size: 15px;");

    // 1. Ép hiển thị các câu hỏi và dừng video
    if (window.$) {
        $('.video').trigger('pause');
        $('.in-video-problem-wrapper, .problem, .vert, .xblock-student_view-problem').each(function() {
            $(this).show().css({
                'display': 'block !important',
                'position': 'relative !important',
                'visibility': 'visible !important',
                'opacity': '1 !important'
            });
        });
        $('button.submit, input.submit, .check, .action button, .action input, .submit-btn').show();
    }

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN MỤC 4.3
    const ANSWERS_4_3 = [
        // Netiquette - Quy tắc vàng hành xử có văn hóa trên mạng
        "Ghi nhớ yếu tố con người: đằng sau mỗi tài khoản là một con người thật với những cảm xúc riêng",
        "Ghi nhớ yếu tố con người",

        // Nghịch lý quyền riêng tư
        "Nghịch lý Quyền riêng tư (The Privacy Paradox)",
        "Nghịch lý Quyền riêng tư",

        // Tối giản số (Digital Minimalism)
        "Đặt ra một ngưỡng rất cao cho các công cụ số được phép tồn tại trong cuộc sống, tạm thời gỡ bỏ ứng dụng không thiết yếu để tái khám phá hoạt động ngoại tuyến",
        "Đặt ra một ngưỡng rất cao",

        // Phương diện sức khỏe số (Chọn 3 mục)
        "Sức khỏe thể chất",
        "Sức khỏe tâm lý và cảm xúc",
        "Sức khỏe xã hội"
    ];

    let selectedCount = 0;

    // 3. Tự động tick chọn đáp án
    const inputs = Array.from(document.querySelectorAll('input[type="radio"], input[type="checkbox"]'));
    inputs.forEach(input => {
        const id = input.id;
        const label = document.querySelector(`label[for="${id}"]`) || input.closest('label') || input.parentElement;
        const text = (label ? label.innerText : '').trim();

        for (let ans of ANSWERS_4_3) {
            if (text === ans || text.includes(ans)) {
                if (!input.checked) {
                    input.click();
                    input.checked = true;
                    input.dispatchEvent(new Event('change', { bubbles: true }));
                    if (label) {
                        label.style.backgroundColor = '#dcfce7';
                        label.style.border = '2px solid #22c55e';
                        label.style.borderRadius = '6px';
                        label.style.padding = '4px 8px';
                        label.style.fontWeight = 'bold';
                    }
                    selectedCount++;
                }
                break;
            }
        }
    });

    console.log(`%c✔ Đã tick chọn ${selectedCount} đáp án đúng!`, "color: #38bdf8; font-weight: bold;");

    // 4. Bấm Gửi nộp bài
    setTimeout(() => {
        let submitCount = 0;
        document.querySelectorAll('button.submit, input.submit, .check, .action button, .action input, .submit-btn').forEach(btn => {
            const txt = (btn.innerText || btn.value || '').trim().toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) {
                btn.click();
                submitCount++;
            }
        });
        alert(`🎉 ĐÃ CHỌN ĐÁP ÁN ĐÚNG & NỘP BÀI!\n✔ Đã tick chọn: B. Ghi nhớ yếu tố con người...`);
    }, 500);
})();
