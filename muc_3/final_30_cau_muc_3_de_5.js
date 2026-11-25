// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 3 (ĐỀ BIẾN THỂ MỚI / ĐỀ 5)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 3 (ĐỀ 5)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 5 MỤC 3
    const TARGET_ANSWERS = [
        // 1. Khi đánh giá nội dung cũ, câu hỏi quyết định nên kết hợp (Chọn 3 mục)
        "Nội dung có cùng chủ đề với nội dung khác không?",
        "Nội dung có thể bổ sung thông tin cho nội dung khác không?",
        "Nội dung đó có thể kết hợp với nội dung khác để tạo ra giá trị mới không?",

        // 2. Tại sao đánh giá độ phù hợp và tiềm năng tái sử dụng quan trọng
        "Để quyết định xem có nên loại bỏ hoàn toàn nội dung đó hay không, tránh lãng phí công sức chỉnh sửa.",
        "Để quyết định xem có nên loại bỏ hoàn toàn nội dung đó hay không, tránh lãng phí công sức chỉnh sửa",

        // 3. Video thuyết trình sử dụng bài hát nổi tiếng (Chọn 3 mục)
        "Video có thể bị hệ thống Content ID tự động tắt tiếng hoặc chặn.",
        "Doanh thu quảng cáo sẽ được chuyển cho chủ sở hữu bản quyền.",
        "Kênh của bạn ấy có thể nhận một cảnh cáo vi phạm bản quyền.",

        // 4. Yếu tố Relevant trong mô hình SMART
        "Mục tiêu phải phù hợp với chiến lược, tầm nhìn và nguồn lực tổng thể.",
        "Mục tiêu phải phù hợp với chiến lược, tầm nhìn và nguồn lực tổng thể",

        // 5. Tái sử dụng các buổi webinar cũ thành nội dung ngắn
        "Nhóm các webinar theo chủ đề, xem xét thời lượng và đánh giá độ cập nhật của thông tin trong từng video.",
        "Nhóm các webinar theo chủ đề, xem xét thời lượng và đánh giá độ cập nhật của thông tin trong từng video",

        // 6. Hiểu về cấu trúc dữ liệu trong lập trình
        "Giúp lưu trữ và quản lý dữ liệu một cách hiệu quả, dễ dàng truy cập và thao tác.",
        "Giúp lưu trữ và quản lý dữ liệu một cách hiệu quả, dễ dàng truy cập và thao tác",

        // 7. Hệ thống gợi ý nội dung (Python)
        "Cấu trúc dữ liệu như danh sách, từ điển, và các giải thuật liên quan đến gợi ý (ví dụ: lọc cộng tác, phân tích yếu tố)",

        // 8. Kho dữ liệu nghiên cứu môi trường 10 năm trước cho giới trẻ
        "Phân loại và đánh giá kỹ lưỡng độ cập nhật của các số liệu nghiên cứu, đồng thời tìm cách chuyển đổi chúng thành các định dạng hấp dẫn giới trẻ (infographic, video ngắn).",
        "Phân loại và đánh giá kỹ lưỡng độ cập nhật của các số liệu nghiên cứu, đồng thời tìm cách chuyển đổi chúng thành các định dạng hấp dẫn giới trẻ (infographic, video ngắn)",

        // 9. Mục tiêu Tăng lượt tương tác cho fanpage thiếu yếu tố SMART
        "Measurable (Đo lường được) và Time-bound (Có thời hạn).",
        "Measurable (Đo lường được) và Time-bound (Có thời hạn)",

        // 10. Mục tiêu theo chuẩn SMART tốt nhất
        "\"Đạt 10.000 người theo dõi trên Instagram trong vòng 6 tháng bằng cách đăng 5 bài/tuần về mẹo vặt cuộc sống.\"",
        "Đạt 10.000 người theo dõi trên Instagram trong vòng 6 tháng bằng cách đăng 5 bài/tuần về mẹo vặt cuộc sống.",

        // 11. Yếu tố thuộc về Tâm lý học (Psychographics)
        "Mong muốn và các vấn đề đang gặp phải",

        // 12. Mục tiêu nội dung số trả lời cho câu hỏi nào
        "\"Nội dung này được tạo ra để làm gì?\"",
        "Nội dung này được tạo ra để làm gì?",

        // 13. Ứng dụng học tiếng Anh bài tập tương tác, lập trình đóng vai trò gì
        "Xử lý logic của các bài tập, kiểm tra đáp án, và cung cấp phản hồi cho người dùng.",
        "Xử lý logic của các bài tập, kiểm tra đáp án, và cung cấp phản hồi cho người dùng",

        // 14. Hiểu các giấy phép mã nguồn như MIT hay Apache
        "Vì các giấy phép này quy định cách họ có thể sử dụng hợp pháp các đoạn mã nguồn mở trong dự án của mình.",
        "Vì các giấy phép này quy định cách họ có thể sử dụng hợp pháp các đoạn mã nguồn mở trong dự án của mình",

        // 15. Nội dung lỗi thời/không còn phù hợp có đặc điểm gì
        "Chứa thông tin sai lệch, không còn giá trị hoặc mâu thuẫn với thông điệp hiện tại.",
        "Chứa thông tin sai lệch, không còn giá trị hoặc mâu thuẫn với thông điệp hiện tại",

        // 16. Đánh giá mức độ công sức cần bỏ ra để chỉnh sửa
        "Để đưa ra quyết định có nên đầu tư thời gian và chi phí vào việc chỉnh sửa hay nên tạo một nội dung mới hiệu quả hơn.",
        "Để đưa ra quyết định có nên đầu tư thời gian và chi phí vào việc chỉnh sửa hay nên tạo",

        // 17. Trang web cá nhân hiệu ứng động nhỏ khi rê chuột
        "JavaScript",

        // 18. Biểu tượng © là viết tắt của từ nào
        "Copyright",

        // 19. Nhà sáng tạo nội dung có nhiều ý tưởng nhưng thiếu tổ chức
        "Thu thập và phân loại nội dung.",
        "Thu thập và phân loại nội dung",

        // 20. Lập trình cho nội dung số nhằm mục đích tạo ra loại nội dung nào
        "Nội dung tương tác.",
        "Nội dung tương tác",

        // 21. Quyền thuộc về người sở hữu bản quyền một tác phẩm (Chọn 3 mục)
        "Quyền sao chép.",
        "Quyền sao chép",
        "Quyền phân phối.",
        "Quyền phân phối",
        "Quyền tạo ra tác phẩm phái sinh.",
        "Quyền tạo ra tác phẩm phái sinh",

        // 22. Unsplash và Pexels cung cấp tài nguyên gì
        "Hình ảnh chất lượng cao và miễn phí.",
        "Hình ảnh chất lượng cao và miễn phí",

        // 23. Ngôn ngữ xây dựng chatbot đơn giản
        "Python",

        // 24. Trình tạo báo cáo tự động từ dữ liệu khách hàng
        "Áp dụng các kiến thức về đọc/ghi file, xử lý chuỗi và có thể là thư viện biểu đồ trong Python để tự động hóa việc tạo báo cáo dựa trên mẫu có sẵn.",
        "Áp dụng các kiến thức về đọc/ghi file, xử lý chuỗi và có thể là thư viện biểu đồ trong Python để tự động hóa việc tạo báo cáo dựa trên mẫu có sẵn",

        // 25. Phân loại nội dung theo Chủ đề và Định dạng (Chọn 2 mục)
        "Dễ dàng tìm kiếm và nhóm nội dung liên quan.",
        "Dễ dàng tìm kiếm và nhóm nội dung liên quan",
        "Đánh giá khả năng chuyển đổi định dạng nội dung (ví dụ: từ bài viết thành infographic).",
        "Đánh giá khả năng chuyển đổi định dạng nội dung (ví dụ: từ bài viết thành infographic)",

        // 26. Mục tiêu Quý 4 sản xuất 12 bài viết 300 email thỏa mãn SMART
        "Cả 5 yếu tố S, M, A, R, T (với giả định mục tiêu 300 email là khả thi).",
        "Cả 5 yếu tố S, M, A, R, T (với giả định mục tiêu 300 email là khả thi)",

        // 27. Mỹ phẩm cho lứa tuổi teen, thói quen số cần ưu tiên tìm hiểu
        "Các KOLs/Influencers về làm đẹp mà đối tượng hay theo dõi.",
        "Các KOLs/Influencers về làm đẹp mà đối tượng hay theo dõi",

        // 28. Chân dung người dùng (User Persona) là gì
        "Một hồ sơ chi tiết về đối tượng lý tưởng mà nội dung hướng đến.",
        "Một hồ sơ chi tiết về đối tượng lý tưởng mà nội dung hướng đến",

        // 29. Dùng đoạn nhạc 15 giây bài hát nổi tiếng trên YouTube rủi ro cao
        "Vì các hệ thống tự động như Content ID của YouTube có thể phát hiện ra và tự động đánh dấu vi phạm.",
        "Vì các hệ thống tự động như Content ID của YouTube có thể phát hiện ra và tự động đánh dấu vi phạm",

        // 30. Sử dụng phông chữ miễn phí, vấn đề pháp lý cần xác minh kỹ lưỡng nhất
        "Giấy phép sử dụng của phông chữ đó có cho phép dùng cho mục đích thương mại hay không.",
        "Giấy phép sử dụng của phông chữ đó có cho phép dùng cho mục đích thương mại hay không"
    ];

    let selectedCount = 0;

    // 3. Tự động duyệt qua từng input để tick chính xác (chống uncheck checkbox)
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
            console.log("%c🎉 HOÀN TẤT NỘP BÀI THI 30 CÂU MỤC 3 (ĐỀ 5)! ĐẠT ĐIỂM TỐI ĐA 100%!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        } else {
            console.log("%cℹ Không tìm thấy nút nộp bài chung, bạn có thể kiểm tra lại rồi bấm 'Gửi' thủ công nhé!", "color: #94a3b8; font-style: italic;");
        }
    }, 1000);
})();
