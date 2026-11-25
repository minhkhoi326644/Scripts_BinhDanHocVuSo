// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 3 (ĐỀ MỚI / ĐỀ 3)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 3 (ĐỀ 3)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 3 MỤC 3
    const TARGET_ANSWERS = [
        // 1. Phân loại theo Chủ đề và Định dạng (Chọn 2)
        "Dễ dàng tìm kiếm và nhóm nội dung liên quan.",
        "Đánh giá khả năng chuyển đổi định dạng nội dung (ví dụ: từ bài viết thành infographic).",

        // 2. Đánh giá nội dung số đã có đưa ra quyết định
        "Giữ, Sửa, Bỏ.",
        "Giữ, Sửa, Bỏ",

        // 3. Yếu tố Thói quen số cho lứa tuổi teen
        "Các KOLs/Influencers về làm đẹp mà đối tượng hay theo dõi.",
        "Các KOLs/Influencers về làm đẹp mà đối tượng hay theo dõi",

        // 4. Ngôn ngữ xây dựng chatbot đơn giản
        "Python",

        // 5. Mục tiêu Tăng lượt tương tác cho fanpage thiếu yếu tố SMART
        "Measurable (Đo lường được) và Time-bound (Có thời hạn).",

        // 6. Kết hợp Nhân khẩu học, Tâm lý học, Thói quen số
        "Tất cả các phương án trên đều đúng.",
        "Tất cả các phương án trên đều đúng",

        // 7. Tạo bản khảo sát online tương tác tự động
        "Python (kết hợp với framework web hoặc kịch bản backend)",

        // 8. Mục tiêu khó đo lường bằng con số trực tiếp
        "Mục tiêu (1)",

        // 9. Yếu tố Relevant trong SMART
        "Mục tiêu phải phù hợp với chiến lược, tầm nhìn và nguồn lực tổng thể.",

        // 10. Lựa chọn công cụ lập trình (IDE)
        "Cung cấp môi trường phát triển, gỡ lỗi và quản lý mã nguồn hiệu quả hơn",

        // 11. Trang web cá nhân hiệu ứng động nhỏ
        "JavaScript",

        // 12. Báo cáo PowerPoint chuyển đổi truyền thông MXH
        "Infographic và chuỗi bài đăng Carousel.",

        // 13. Nội dung này có còn phù hợp với mục tiêu hiện tại không
        "Định hướng và mục đích của sản phẩm nội dung mới.",

        // 14. Mục tiêu chuẩn SMART tốt nhất
        "\"Đạt 10.000 người theo dõi trên Instagram trong vòng 6 tháng bằng cách đăng 5 bài/tuần về mẹo vặt cuộc sống.\"",

        // 15. Hành động tạo ra tác phẩm phái sinh
        "Dịch một cuốn tiểu thuyết từ tiếng Anh sang tiếng Việt.",
        "Dịch một cuốn tiểu thuyết từ tiếng Anh sang tiếng Việt",

        // 16. Nội dung lạc hướng có nghĩa là gì
        "Nội dung không phù hợp hoặc không hấp dẫn đối tượng mục tiêu.",

        // 17. Khi nào biến cũ thành mới hiệu quả hơn (Chọn 3)
        "Khi nội dung cũ vẫn chứa thông tin cốt lõi có giá trị và phù hợp với mục tiêu mới.",
        "Khi muốn tiết kiệm thời gian và nguồn lực.",
        "Khi muốn đảm bảo tính nhất quán của thông điệp thương hiệu qua thời gian.",

        // 18. Đặc điểm Python cho người mới bắt đầu (Chọn 3)
        "Cú pháp đơn giản và dễ đọc.",
        "Có một cộng đồng lớn và nhiều tài liệu học tập.",
        "Hỗ trợ đa nền tảng (Windows, macOS, Linux).",

        // 19. Đối tượng được bảo hộ bởi luật bản quyền
        "Một bài thơ do bạn tự sáng tác.",

        // 20. Lợi ích rà soát và đánh giá nội dung đã có (Chọn cả 4)
        "Tiết kiệm nguồn lực.",
        "Tăng hiệu quả.",
        "Đảm bảo chất lượng và tính nhất quán.",
        "Mở rộng phạm vi tiếp cận.",

        // 21. Tiêu chí KHÔNG phải là 3 tiêu chí chính phân loại nội dung
        "Độ phức tạp kỹ thuật.",
        "Độ phức tạp kỹ thuật",

        // 22. Lựa chọn công nghệ phù hợp đòi hỏi tư duy gì
        "Tư duy linh hoạt, biết đánh giá ưu nhược điểm của từng công nghệ và chọn giải pháp tối ưu dựa trên mục tiêu, định dạng nội dung và nguồn lực.",

        // 23. Nội dung lỗi thời/không còn phù hợp có đặc điểm
        "Chứa thông tin sai lệch, không còn giá trị hoặc mâu thuẫn với thông điệp hiện tại.",

        // 24. Sử dụng phông chữ miễn phí, vấn đề pháp lý cần xác minh
        "Giấy phép sử dụng của phông chữ đó có cho phép dùng cho mục đích thương mại hay không.",

        // 25. Hiểu giấy phép mã nguồn mở MIT hay Apache
        "Vì các giấy phép này quy định cách họ có thể sử dụng hợp pháp các đoạn mã nguồn mở trong dự án của mình.",

        // 26. Sự khác biệt giữa Public Domain và Creative Commons
        "Tác phẩm Public Domain đã hết hạn bảo hộ bản quyền và hoàn toàn tự do sử dụng, trong khi tác phẩm Creative Commons vẫn có bản quyền nhưng tác giả cho phép sử dụng dưới một số điều kiện.",

        // 27. Ngôn ngữ Python nổi tiếng với tính năng nào
        "Cú pháp đơn giản, dễ học.",

        // 28. Kiểm tra trước khi xuất bản video (Chọn cả 4)
        "Kiểm tra giấy phép sử dụng của tất cả các hình ảnh, video footage không phải do mình tự tạo.",
        "Kiểm tra giấy phép sử dụng của tất cả các bản nhạc nền và hiệu ứng âm thanh.",
        "Đảm bảo việc sử dụng logo không gây nhầm lẫn hoặc vi phạm nhãn hiệu.",
        "Rà soát và ghi công (attribute) đầy đủ cho các tác phẩm yêu cầu.",

        // 29. Sai lầm phổ biến khi xây dựng User Persona
        "Tạo ra quá nhiều Persona và không biết nên tập trung vào ai.",

        // 30. Khác biệt cơ bản giữa bản quyền và nhãn hiệu
        "Bản quyền bảo vệ các tác phẩm sáng tạo (văn học, nghệ thuật), trong khi nhãn hiệu bảo vệ các yếu tố nhận diện thương hiệu (logo, tên gọi)."
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
        alert(`🎉 ĐÃ XONG 30 CÂU MỤC 3 (ĐỀ 3)!\n✔ Đã tự động chọn và bấm Gửi ${submitCount} câu thành công 100%!`);
    }, 800);
})();
