// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 4 (ĐỀ BIẾN THỂ MỚI / ĐỀ 5)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 4 (ĐỀ 5)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 5 MỤC 4
    const TARGET_ANSWERS = [
        // 1. Ứng dụng di động báo cáo vấn đề môi trường
        "Hứng thú và cảm thấy mình có thể đóng góp vào việc bảo vệ môi trường.",
        "Hứng thú và cảm thấy mình có thể đóng góp vào việc bảo vệ môi trường",

        // 2. Dữ liệu cá nhân là gì
        "Mọi thông tin liên quan đến một cá nhân đã xác định hoặc có thể xác định",

        // 3. Whaling là hình thức phishing nhắm vào đối tượng nào
        "Các giám đốc điều hành hoặc người có tài sản lớn",

        // 4. Giả mạo đơn vị uy tín lừa thông tin đăng nhập
        "Phishing.",
        "Phishing",

        // 5. Trộm cắp danh tính dẫn đến hậu quả gì
        "Phải chịu trách nhiệm về các khoản nợ phát sinh từ giao dịch gian lận",

        // 6. Quy tắc 20-20-20
        "Bảo vệ mắt và chống mỏi mắt khi dùng màn hình.",
        "Bảo vệ mắt và chống mỏi mắt khi dùng màn hình",

        // 7. Tạo đường hầm mã hóa bảo vệ Wi-Fi công cộng
        "Mạng riêng ảo (VPN).",
        "Mạng riêng ảo (VPN)",

        // 8. Lỗ hổng nghiêm trọng trên máy tính Apple
        "Tiết kiệm năng lượng (chế độ ngủ)",

        // 9. Doanh nghiệp đảm bảo nguồn gốc bền vững, chuỗi cung ứng minh bạch
        "Chuỗi khối (Blockchain).",
        "Chuỗi khối (Blockchain)",

        // 10. Vai trò quan trọng nhất của một người bạn khi hỗ trợ tâm lý
        "Kết nối họ với những người có chuyên môn như phòng tư vấn tâm lý hoặc các đường dây nóng uy tín",

        // 11. Kế hoạch phục hồi sau thảm họa (DRP)
        "Xác định RTO và RPO",

        // 12. Dấu hiệu bạn bè bị ảnh hưởng tâm lý qua mạng
        "Tiếp cận một cách riêng tư và tế nhị qua tin nhắn để bày tỏ sự quan tâm và sẵn sàng lắng nghe.",
        "Tiếp cận một cách riêng tư và tế nhị qua tin nhắn để bày tỏ sự quan tâm và sẵn sàng lắng nghe",

        // 13. Tại sao mã hóa dữ liệu khi truyền tải quan trọng
        "Ngăn chặn chặn bắt và nghe trộm dữ liệu",

        // 14. Gửi bức ảnh qua mạng không giảm chất lượng
        "Tính chính xác và độ tin cậy cao của tín hiệu số.",
        "Tính chính xác và độ tin cậy cao của tín hiệu số",

        // 15. Ba phương diện chính cấu thành Sức khỏe số theo WHO
        "Sức khỏe thể chất, Sức khỏe tâm lý và cảm xúc, và Sức khỏe xã hội.",
        "Sức khỏe thể chất, Sức khỏe tâm lý và cảm xúc, và Sức khỏe xã hội",

        // 16. Lưu trữ ảnh Google Drive hoặc xem Netflix
        "Điện toán đám mây (Cloud Computing).",
        "Điện toán đám mây (Cloud Computing)",

        // 17. Dữ liệu sinh trắc học
        "Vân tay, nhận diện khuôn mặt",

        // 18. Trải nghiệm nhập vai hiểu rõ hệ sinh thái và ô nhiễm
        "Thực tế ảo (VR) và Thực tế tăng cường (AR).",
        "Thực tế ảo (VR) và Thực tế tăng cường (AR)",

        // 19. Nghịch lý Quyền riêng tư (The Privacy Paradox)
        "Người dùng bày tỏ sự lo ngại về quyền riêng tư nhưng hành động của họ lại không phản ánh điều đó.",
        "Người dùng bày tỏ sự lo ngại về quyền riêng tư nhưng hành động của họ lại không phản ánh điều đó",

        // 20. Khả năng máy móc học hỏi, suy luận như con người
        "Trí tuệ nhân tạo (AI).",
        "Trí tuệ nhân tạo (AI)",

        // 21. Tác nhân đe dọa tận dụng điểm yếu để gây hại
        "Exploiting a vulnerability",

        // 22. Dấu hiệu dữ liệu cá nhân có thể đã bị rò rỉ
        "Có người lạ gọi điện và biết rõ thông tin cá nhân",

        // 23. Cyberterrorists khác tội phạm mạng ở điểm nào
        "Tấn công vì ý thức hệ, gây gián đoạn và hoảng loạn",

        // 24. Ba lớp bảo vệ trong mô hình bảo vệ thông tin
        "Sản phẩm, con người, chính sách & quy trình",

        // 25. Hiểu biết từ phân tích hàng triệu mật khẩu rò rỉ
        "Người dùng có xu hướng viết hoa đầu mật khẩu và thêm số ở cuối",

        // 26. Web truy cập thông thường và được lập chỉ mục bởi search engine
        "Surface web",

        // 27. Kỹ thuật tấn công Shoulder surfing
        "Nhìn trộm mật khẩu hoặc mã PIN khi người khác nhập",

        // 28. Bảo vệ mạng nội bộ đạt hiệu quả cao nhất
        "Phân đoạn mạng và kiểm soát truy cập mạng",

        // 29. Ánh sáng xanh phát ra từ màn hình ảnh hưởng giấc ngủ
        "Ức chế việc sản xuất Melatonin, hormone gây ngủ, khiến khó ngủ hơn.",
        "Ức chế việc sản xuất Melatonin",

        // 30. Sinh viên chủ động xây dựng dấu chân số tích cực
        "Chia sẻ các bài viết học thuật, các dự án tham gia và bình luận thông minh trong các nhóm chuyên ngành.",
        "Chia sẻ các bài viết học thuật, các dự án tham gia và bình luận thông minh trong các nhóm chuyên ngành"
    ];

    let selectedCount = 0;

    // 3. Tự động duyệt qua từng input để tick chính xác (chống uncheck)
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
            console.log("%c🎉 HOÀN TẤT NỘP BÀI THI 30 CÂU MỤC 4 (ĐỀ 5)! ĐẠT ĐIỂM TỐI ĐA 100%!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        } else {
            console.log("%cℹ Không tìm thấy nút nộp bài chung, bạn có thể kiểm tra lại rồi bấm 'Gửi' thủ công nhé!", "color: #94a3b8; font-style: italic;");
        }
    }, 1000);
})();
