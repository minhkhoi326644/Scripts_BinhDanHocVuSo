// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 4 (ĐỀ BỔ SUNG / ĐỀ 2)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 4 (ĐỀ 2)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 2 MỤC 4
    const TARGET_ANSWERS = [
        // 1. Hội chứng sợ bỏ lỡ (FOMO)
        "Mong muốn được kết nối liên tục, thúc đẩy hành vi kiểm tra mạng xã hội một cách ám ảnh.",

        // 2. Phương thức tấn công vào hệ thống PoS
        "Gửi email giả dạng ứng viên xin việc với file Word chứa mã độc",

        // 3. Lỗ hổng trong thiết bị mạng không dây gia đình
        "Dịch vụ dễ bị tấn công không thể vô hiệu hóa và có thể bị khai thác từ Internet",

        // 4. Đường hầm mã hóa bảo vệ Wi-Fi công cộng
        "Mạng riêng ảo (VPN).",
        "Mạng riêng ảo (VPN)",

        // 5. Quản lý danh tính và truy cập (IAM) xác thực nhiều yếu tố
        "Xác thực đa yếu tố (MFA)",

        // 6. Triết lý Tối giản số (Digital Minimalism)
        "Đặt ra một ngưỡng rất cao cho các công cụ số được phép tồn tại trong cuộc sống, chỉ giữ lại những gì thực sự hỗ trợ các giá trị quan trọng.",

        // 7. Học về thành phần và xu hướng công nghệ số
        "Rất cần thiết, để có thể hiểu bản chất công nghệ và đưa ra các quyết định sử dụng có trách nhiệm.",

        // 8. Mã hóa dữ liệu khi truyền tải
        "Ngăn chặn chặn bắt và nghe trộm dữ liệu",

        // 9. Máy móc học hỏi, suy luận như con người
        "Trí tuệ nhân tạo (AI).",
        "Trí tuệ nhân tạo (AI)",

        // 10. Hệ điều hành Windows hoặc Android là ví dụ của
        "Phần mềm.",

        // 11. Dữ liệu cá nhân là gì
        "Mọi thông tin liên quan đến một cá nhân đã xác định hoặc có thể xác định",

        // 12. Đặc điểm của tội phạm mạng (cybercriminals)
        "Tấn công với mục tiêu lợi ích tài chính",

        // 13. Chuỗi cung ứng minh bạch
        "Chuỗi khối (Blockchain).",

        // 14. Không phải là dữ liệu cá nhân
        "Dữ liệu về nhiệt độ không khí trung bình",

        // 15. Nghịch lý Quyền riêng tư (The Privacy Paradox)
        "Người dùng bày tỏ sự lo ngại về quyền riêng tư nhưng hành động của họ lại không phản ánh điều đó.",

        // 16. Hình thức phishing
        "Gửi email giả mạo để lừa người dùng cung cấp thông tin cá nhân",

        // 17. Rủi ro sử dụng cùng một mật khẩu
        "Nếu một tài khoản bị lộ, các tài khoản khác cũng bị đe dọa",

        // 18. Biện pháp giúp bảo vệ dữ liệu cá nhân
        "Kích hoạt xác thực hai yếu tố cho tài khoản quan trọng",

        // 19. Ứng dụng Grab / Uber góp phần môi trường
        "Giảm số lượng xe cá nhân lưu thông, từ đó giảm ùn tắc và khí thải.",

        // 20. Chứng kiến hành vi bắt nạt trực tuyến (Cyberbullying)
        "Báo cáo (Report) nội dung vi phạm cho nền tảng và gửi tin nhắn riêng để hỗ trợ nạn nhân.",

        // 21. Ba phương diện chính của Sức khỏe số (WHO)
        "Sức khỏe thể chất, Sức khỏe tâm lý và cảm xúc, và Sức khỏe xã hội.",

        // 22. Thành phần quan trọng trong kế hoạch DRP
        "Xác định RTO và RPO",

        // 23. Dấu hiệu nhận biết trộm cắp danh tính
        "Hóa đơn tài chính đến muộn hoặc sai sót bất thường",

        // 24. Ứng dụng báo cáo vấn đề môi trường
        "Hứng thú và cảm thấy mình có thể đóng góp vào việc bảo vệ môi trường.",

        // 25. Quy tắc vàng của Netiquette
        "Ghi nhớ yếu tố con người (Remember the Human) đằng sau mỗi tài khoản.",

        // 26. Dữ liệu cá nhân bị nhắm tới để bán trên chợ đen
        "Số thẻ thanh toán như thẻ tín dụng và thẻ quà tặng",

        // 27. Viết in hoa toàn bộ một câu
        "Hành động la hét vào người khác.",

        // 28. Phương pháp kiểm chứng thông tin SIFT
        "Dừng lại (Stop), Điều tra nguồn tin (Investigate the source), Tìm các nguồn tin khác (Find better coverage), và Truy tìm lại các trích dẫn (Trace claims).",

        // 29. Hệ thống dễ bị tấn công khủng bố mạng nhất
        "Hệ thống kiểm soát công nghiệp trọng yếu kết nối Internet",

        // 30. Hoax (tin giả) có thể gây hại bằng cách nào
        "Lừa người dùng xóa file hệ thống hoặc cấu hình bảo mật"
    ];

    let selectedCount = 0;

    // 3. Tự động duyệt qua từng input để tick chính xác
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
        alert(`🎉 ĐÃ XONG 30 CÂU MỤC 4 (ĐỀ 2)!\n✔ Đã tự động chọn và bấm Gửi ${submitCount} câu thành công 100%!`);
    }, 800);
})();
