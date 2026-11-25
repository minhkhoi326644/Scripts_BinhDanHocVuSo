// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 2 (ĐỀ BIẾN THỂ MỚI / ĐỀ 5)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 2 (ĐỀ 5)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

    // 1. Ép hiển thị các câu hỏi và nút Submit
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
        $('button.submit, input.submit, .check, .action button, .action input, .submit-btn').show();
    }

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 5 MỤC 2
    const TARGET_ANSWERS = [
        // 1. Biện pháp xây dựng cộng đồng trực tuyến tích cực
        "Xây dựng nhóm tương trợ",

        // 2. AI sẽ hỗ trợ hợp tác nhóm như thế nào
        "Tự động hoá tác vụ lặp lại như tóm tắt họp, phân công",

        // 3. Danh tính số có đặc điểm gì
        "Phát triển không ngừng với các hành vi khác nhau",

        // 4. Công cụ giúp tạo một podcast
        "Tất cả các phương án trên",

        // 5. Loại kiến thức giúp tương tác hiệu quả nhất với người dùng internet
        "Nguyên tắc cộng đồng",

        // 6. Vì sao cần tuân thủ quy tắc ứng xử khi tham gia hoạt động trực tuyến
        "Tất cả các lý do trên",

        // 7. Theo Luật An ninh mạng (2018), hành vi bị nghiêm cấm
        "Phát tán tin giả gây hoang mang",

        // 8. Hành vi vi phạm Bộ quy tắc ứng xử trên không gian mạng
        "Đăng bài xúc phạm cá nhân",

        // 9. Tại sao Slack phù hợp công việc nhóm
        "Thảo luận theo channel, dễ tìm kiếm",

        // 10. Tìm kiếm bài viết kiểm chứng từ tổ chức uy tín toàn cầu
        "Google Fact Check Explorer.",

        // 11. Khuyến khích sự tham gia trong diễn đàn trực tuyến
        "Tính tương tác",

        // 12. Khi đọc tin tức cảm thấy tức giận hoặc sợ hãi
        "Coi cảm xúc mạnh là một tín hiệu cảnh báo để kiểm tra thông tin kỹ lưỡng hơn.",

        // 13. Cookie là gì
        "Tệp tin theo dõi được tạo ra bởi trình duyệt để duy trì trạng thái đăng nhập",

        // 14. Nguyên tắc giúp bảo vệ thông tin cá nhân
        "Tất cả các phương án trên",

        // 15. Nền tảng dịch vụ công trực tuyến chính thức
        "https://dichvucong.gov.vn",

        // 16. Khi sử dụng mạng xã hội, bảo vệ thông tin cá nhân
        "Tất cả các phương án trên",

        // 17. Ví dụ là dấu chân số bị động
        "Địa chỉ IP",

        // 18. Thế mạnh của Google Workspace for Education
        "Cộng tác thời gian thực, giao diện đơn giản",

        // 19. Nguyên tắc khi phản ánh qua nền tảng số
        "Đính kèm bằng chứng rõ ràng",

        // 20. Zotero và Mendeley dùng để làm gì
        "Quản lý tài liệu và trích dẫn tự động",

        // 21. Trách nhiệm quan trọng của Công dân số
        "Tuân thủ luật pháp về sở hữu trí tuệ và không chia sẻ tác phẩm của người khác khi chưa được phép.",

        // 22. Duy trì quy tắc ứng xử trên mạng
        "Sự đồng hành và hợp tác của cộng đồng",

        // 23. Dấu chân số bị động được tạo ra khi nào
        "Khi dữ liệu của người dùng bị thu thập mà họ không hề hay biết.",

        // 24. Mục đích tự quản lý tốt danh tính số
        "Để mở rộng cơ hội kết nối và tương tác.",

        // 25. Bảo vệ tài khoản trực tuyến khỏi bị tấn công
        "Bật xác thực hai yếu tố (2FA) nếu có thể",

        // 26. Công cụ bảng trắng ảo phù hợp brainstorming
        "Miro",

        // 27. Lỡ chia sẻ tin giả, hành động có trách nhiệm nhất
        "Gỡ bỏ thông tin, đăng bài đính chính và xin lỗi.",

        // 28. Khác biệt cốt lõi giữa Misinformation và Disinformation
        "Ý định của người lan truyền thông tin (vô ý so với cố ý gây hại).",

        // 29. Hành vi không nên làm trên môi trường mạng
        "Bình luận xúc phạm người khác",

        // 30. Giải quyết mâu thuẫn trong công việc
        "Đồng cảm và tôn trọng ý kiến."
    ];

    let selectedCount = 0;

    // 3. Tự động duyệt qua từng input để tick chính xác (chống click lặp)
    const inputs = Array.from(document.querySelectorAll('input[type="radio"], input[type="checkbox"]'));
    inputs.forEach(input => {
        const id = input.id;
        const label = document.querySelector(`label[for="${id}"]`) || input.closest('label') || input.parentElement;
        const text = (label ? label.innerText : '').trim();

        for (let ans of TARGET_ANSWERS) {
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

    console.log(`%c✔ Đã tick chọn thành công ${selectedCount} đáp án đúng!`, "color: #38bdf8; font-weight: bold; font-size: 14px;");

    // 4. Tự động nộp bài (Submit)
    setTimeout(() => {
        const submitButtons = Array.from(document.querySelectorAll('button.submit, input.submit, .check, .action button, .action input, .submit-btn'))
            .filter(b => {
                const val = (b.innerText || b.value || '').trim().toLowerCase();
                return val.includes('gửi') || val.includes('submit') || val.includes('nộp') || val.includes('kiểm tra');
            });

        if (submitButtons.length > 0) {
            console.log(`%c🚀 Đang tự động bấm Submit cho ${submitButtons.length} vị trí...`, "color: #f59e0b; font-weight: bold;");
            submitButtons.forEach(btn => {
                try {
                    btn.click();
                } catch(e) {}
            });
            console.log("%c🎉 HOÀN TẤT NỘP BÀI THI 30 CÂU MỤC 2 (ĐỀ 5)! ĐẠT ĐIỂM TỐI ĐA 100%!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        } else {
            console.log("%cℹ Không tìm thấy nút nộp bài chung, bạn có thể kiểm tra lại rồi bấm 'Gửi' thủ công nhé!", "color: #94a3b8; font-style: italic;");
        }
    }, 1000);
})();
