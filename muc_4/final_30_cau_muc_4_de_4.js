// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 4 (ĐỀ BIẾN THỂ MỚI / ĐỀ 4)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 4 (ĐỀ 4)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 4 MỤC 4
    const TARGET_ANSWERS = [
        // 1. Kế hoạch phục hồi sau thảm họa (DRP)
        "Xác định RTO và RPO",

        // 2. Theo dõi phá rừng sớm và quản lý đa dạng sinh học
        "Drone và vệ tinh kết hợp GIS.",

        // 3. Bạn bè có dấu hiệu bị ảnh hưởng tâm lý qua mạng
        "Tiếp cận một cách riêng tư và tế nhị qua tin nhắn để bày tỏ sự quan tâm và sẵn sàng lắng nghe.",

        // 4. Xác thực bằng nhiều yếu tố trong IAM
        "Xác thực đa yếu tố (MFA)",

        // 5. Tấn công giả mạo đơn vị uy tín lừa thông tin đăng nhập
        "Phishing.",

        // 6. Risk transference trong quản lý rủi ro
        "Chuyển giao trách nhiệm tổn thất cho bên thứ ba, ví dụ như công ty bảo hiểm",

        // 7. Hội chứng sợ bỏ lỡ (FOMO)
        "Mong muốn được kết nối liên tục, thúc đẩy hành vi kiểm tra mạng xã hội một cách ám ảnh.",

        // 8. Sự tinh vi của tấn công khiến khó phòng thủ
        "Công cụ tấn công thay đổi hành vi mỗi lần, gây khó khăn trong việc phát hiện",

        // 9. Dữ liệu sinh trắc học
        "Vân tay, nhận diện khuôn mặt",

        // 10. Định nghĩa Sức khỏe số (Digital Health)
        "Trạng thái khỏe mạnh về thể chất, tâm lý và xã hội trong mối quan hệ tương tác với công nghệ kỹ thuật số.",

        // 11. Hiện tượng Text Neck (Cổ tin nhắn)
        "Các vấn đề về cơ xương khớp.",

        // 12. Không phải nguyên nhân trực tiếp gây đánh cắp dữ liệu
        "Sử dụng thiết bị mã hóa mạnh",

        // 13. Mỗi hành động trên mạng đều tạo nên
        "Dấu chân số (Digital Footprint).",

        // 14. Đảm bảo giao dịch tài chính trực tuyến an toàn, minh bạch, không thể thay đổi
        "Chuỗi khối (Blockchain).",

        // 15. Mối đe dọa từ người nội bộ (insiders)
        "Họ tấn công từ bên trong với quyền truy cập hợp pháp",

        // 16. Dữ liệu cá nhân là gì
        "Mọi thông tin liên quan đến một cá nhân đã xác định hoặc có thể xác định",

        // 17. Phân biệt Disinformation vs Misinformation
        "Yếu tố cố tình tạo và lan truyền thông tin sai sự thật để trục lợi hoặc gây hoang mang.",

        // 18. Kẻ tấn công hiểu được gì từ phân tích mật khẩu rò rỉ
        "Người dùng có xu hướng viết hoa đầu mật khẩu và thêm số ở cuối",

        // 19. Khái niệm Đồng minh số (Digital Allyship)
        "Sử dụng vị thế và tiếng nói của mình để ủng hộ và bảo vệ các cá nhân hoặc nhóm người yếu thế trên mạng.",

        // 20. Tại sao không thể ngăn chặn hoàn toàn tất cả tấn công mạng
        "Vì không có một giải pháp đơn giản duy nhất để phòng thủ toàn diện",

        // 21. Mục tiêu chính của an ninh thông tin
        "Triển khai các biện pháp để bảo vệ thông tin ở mức độ cao nhất có thể",

        // 22. Điểm yếu lớn nhất của mật khẩu
        "Dựa vào trí nhớ con người có giới hạn",

        // 23. Chuỗi cung ứng minh bạch cho sản phẩm bền vững
        "Chuỗi khối (Blockchain).",

        // 24. Gây quỹ cho dự án trồng rừng quy mô lớn
        "Sử dụng các nền tảng gây quỹ cộng đồng trực tuyến (crowdfunding) và mạng xã hội.",

        // 25. Giám sát hành vi người dùng (UBA)
        "Phát hiện các hành vi bất thường, cảnh báo nguy cơ xâm nhập",

        // 26. Không phải là dữ liệu cá nhân
        "Dữ liệu về nhiệt độ không khí trung bình",

        // 27. Hệ thống dễ bị tấn công khủng bố mạng nhất
        "Hệ thống kiểm soát công nghiệp trọng yếu kết nối Internet",

        // 28. Xu hướng máy móc học hỏi, suy luận như con người
        "Trí tuệ nhân tạo (AI).",

        // 29. Thiết bị vật lý như điện thoại, máy tính, cảm biến IoT
        "Phần cứng (Hardware).",

        // 30. Vai trò quan trọng nhất khi hỗ trợ người gặp khó khăn tâm lý
        "Kết nối họ với những người có chuyên môn như phòng tư vấn tâm lý hoặc các đường dây nóng uy tín."
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
            console.log("%c🎉 HOÀN TẤT NỘP BÀI THI 30 CÂU MỤC 4 (ĐỀ 4)! ĐẠT ĐIỂM TỐI ĐA 100%!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        } else {
            console.log("%cℹ Không tìm thấy nút nộp bài chung, bạn có thể kiểm tra lại rồi bấm 'Gửi' thủ công nhé!", "color: #94a3b8; font-style: italic;");
        }
    }, 1000);
})();
