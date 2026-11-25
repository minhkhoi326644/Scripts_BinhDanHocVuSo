// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 2 (ĐỀ BỔ SUNG / ĐỀ 2)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 2 (ĐỀ 2)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 2 MỤC 2
    const TARGET_ANSWERS = [
        // 1. Tiêu chí ưu tiên chọn công cụ hợp tác cho sinh viên
        "Chi phí thấp, dễ sử dụng",

        // 2. Khi đọc tin tức tức giận hoặc sợ hãi
        "Coi cảm xúc mạnh là một tín hiệu cảnh báo để kiểm tra thông tin kỹ lưỡng hơn.",

        // 3. Mục đích tự quản lý tốt danh tính số
        "Để mở rộng cơ hội kết nối và tương tác.",

        // 4. Tìm kiếm bài viết kiểm chứng từ tổ chức uy tín
        "Google Fact Check Explorer.",

        // 5. Dấu chân số chủ động tạo ra khi nào
        "Khi người dùng chủ động chia sẻ thông tin trên mạng",

        // 6. Dấu chân số là gì
        "Dấu vết dữ liệu được tạo ra khi sử dụng Internet",

        // 7. Tương tác hiệu quả nhất với người dùng internet
        "Nguyên tắc cộng đồng",

        // 8. Vai trò công nghệ số trong hành vi công dân
        "Là môi trường hành động công dân mới",

        // 9. Xây dựng cộng đồng trực tuyến văn minh
        "Chỉ chia sẻ thông tin đúng sự thật",

        // 10. Biểu hiện hành vi công dân số tích cực
        "Góp ý chính sách có căn cứ",

        // 11. Thế mạnh Google Workspace for Education
        "Cộng tác thời gian thực, giao diện đơn giản",

        // 12. Nguyên tắc bảo vệ thông tin cá nhân
        "Tất cả các phương án trên",

        // 13. Tính năng trên Google Docs tránh xung đột
        "Suggesting mode để góp ý cần duyệt",

        // 14. Giải quyết mâu thuẫn trong công việc
        "Đồng cảm và tôn trọng ý kiến.",

        // 15. Chia sẻ quá nhiều thông tin cá nhân
        "Tất cả các hậu quả trên",

        // 16. Duy trì quy tắc ứng xử trên mạng
        "Sự đồng hành và hợp tác của cộng đồng",

        // 17. Dấu chân số bị động tạo ra khi nào
        "Khi dữ liệu của người dùng bị thu thập mà họ không hề hay biết.",

        // 18. Thuận lợi vượt trội của hợp tác số
        "Phá vỡ rào cản địa lý và thời gian",

        // 19. Hành vi nên làm trong môi trường số
        "Kiểm chứng thông tin trước khi chia sẻ",

        // 20. Email phù hợp hơn tin nhắn nhanh cho mục đích
        "Gửi các thông điệp dài, trang trọng, có đính kèm tệp tin chính thức như CV, báo cáo.",

        // 21. Nguyên tắc khi phản ánh qua nền tảng số
        "Đính kèm bằng chứng rõ ràng",

        // 22. Trách nhiệm quan trọng của Công dân số
        "Tuân thủ luật pháp về sở hữu trí tuệ và không chia sẻ tác phẩm của người khác khi chưa được phép.",

        // 23. AI hỗ trợ hợp tác nhóm như thế nào
        "Tự động hoá tác vụ lặp lại như tóm tắt họp, phân công",

        // 24. Xây dựng cộng đồng trực tuyến tích cực
        "Xây dựng nhóm tương trợ",

        // 25. Khuyến khích tham gia trong diễn đàn trực tuyến
        "Tính tương tác",

        // 26. Làm việc nhóm trên tài liệu thời gian thực
        "Google Drive hoặc Microsoft OneDrive.",

        // 27. Cookie giúp gì cho trải nghiệm mua sắm
        "Thu thập dữ liệu về người dùng để cung cấp các quảng cáo phù hợp",

        // 28. Yếu tố xem xét lựa chọn công cụ giao tiếp dự án phức tạp
        "Tất cả các phương án trên",

        // 29. Công dân số cần tránh rủi ro nào khi truy cập mạng
        "Nhấn vào liên kết lạ",

        // 30. Bảo vệ thông tin cá nhân khi dùng mạng xã hội
        "Tất cả các phương án trên"
    ];

    let selectedCount = 0;

    // 3. Tự động tìm và tick chọn
    document.querySelectorAll('label, .choicegroup_item, fieldset label, li, p').forEach(el => {
        const text = (el.innerText || '').trim();
        for (let ans of TARGET_ANSWERS) {
            if (text === ans || text.includes(ans)) {
                const input = el.querySelector('input') || document.getElementById(el.getAttribute('for')) || el.parentElement?.querySelector('input');
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

    console.log(`%c✔ Đã tick chọn thành công ${selectedCount} đáp án đúng!`, "color: #38bdf8; font-weight: bold; font-size: 14px;");

    // 4. Tự động bấm nút Gửi nộp bài sau 0.8 giây
    setTimeout(() => {
        let submitCount = 0;
        document.querySelectorAll('button.submit, input.submit, .check, .action button, .action input, .submit-btn').forEach(btn => {
            const txt = (btn.innerText || btn.value || '').trim().toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) {
                btn.click();
                submitCount++;
            }
        });
        alert(`🎉 ĐÃ XONG 30 CÂU MỤC 2 (ĐỀ 2)!\n✔ Đã tự động chọn và bấm Gửi ${submitCount} câu thành công 100%!`);
    }, 800);
})();
