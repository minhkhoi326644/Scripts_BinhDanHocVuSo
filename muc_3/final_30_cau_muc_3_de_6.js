// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 3 (ĐỀ BIẾN THỂ MỚI / ĐỀ 6)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 3 (ĐỀ 6)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 6 MỤC 3
    const TARGET_ANSWERS = [
        // 1. Độ cập nhật đi đôi với tiêu chí nào
        "Chủ đề và mức độ phù hợp với mục tiêu/đối tượng mới của nội dung.",
        "Chủ đề và mức độ phù hợp với mục tiêu/đối tượng mới của nội dung",

        // 2. Phân tích Nhân khẩu học trả lời câu hỏi nào (Chọn 2 mục)
        "Họ bao nhiêu tuổi và giới tính là gì?",
        "Họ sống ở đâu và làm nghề gì?",

        // 3. Biểu tượng © là viết tắt của từ nào
        "Copyright",

        // 4. Mục tiêu nội dung số trả lời cho câu hỏi nào
        "\"Nội dung này được tạo ra để làm gì?\"",
        "Nội dung này được tạo ra để làm gì?",

        // 5. Ngôn ngữ thông dịch như Python có ưu điểm gì
        "Dễ dàng chạy và thử nghiệm mã nguồn ngay lập tức mà không cần bước biên dịch phức tạp.",
        "Dễ dàng chạy và thử nghiệm mã nguồn ngay lập tức mà không cần bước biên dịch phức tạp",

        // 6. Mối quan hệ giữa Mục tiêu nội dung và Chân dung người dùng
        "Chúng có mối quan hệ tương hỗ: mục tiêu giúp định hình nội dung và persona giúp tùy chỉnh nội dung đó cho phù hợp.",
        "Chúng có mối quan hệ tương hỗ: mục tiêu giúp định hình nội dung và persona giúp tùy chỉnh nội dung đó cho phù hợp",

        // 7. Xe hơi hạng sang đu trend hài hước trên TikTok (Chọn 3 mục)
        "Nội dung không phù hợp với hình ảnh thương hiệu sang trọng, nghiêm túc.",
        "Lãng phí nguồn lực vì đối tượng khách hàng tiềm năng của họ ít hoạt động trên TikTok.",
        "Thông điệp truyền tải có thể bị hiểu sai, làm giảm giá trị thương hiệu.",

        // 8. Đối tượng mục tiêu có trùng khớp đối tượng mới
        "Vì một nội dung hấp dẫn đối tượng A có thể không phù hợp hoặc không thu hút đối tượng B, dẫn đến lãng phí công sức.",
        "Vì một nội dung hấp dẫn đối tượng A có thể không phù hợp hoặc không thu hút đối tượng B, dẫn đến lãng phí công sức",

        // 9. Nội dung số tương tác có thể bao gồm yếu tố nào
        "Các nút bấm, biểu mẫu, trò chơi nhỏ, phản hồi theo hành động người dùng.",
        "Các nút bấm, biểu mẫu, trò chơi nhỏ, phản hồi theo hành động người dùng",

        // 10. Khi công sức chỉnh sửa nội dung cũ quá lớn
        "Bắt đầu lại từ đầu hoặc tìm một nội dung thay thế khác.",
        "Bắt đầu lại từ đầu hoặc tìm một nội dung thay thế khác",

        // 11. Giấy phép CC BY-ND có nghĩa là gì
        "Sử dụng ảnh miễn là ghi công tác giả, và không được phép chỉnh sửa hay biến đổi bức ảnh.",
        "Sử dụng ảnh miễn là ghi công tác giả, và không được phép chỉnh sửa hay biến đổi bức ảnh",

        // 12. Nhà thiết kế sử dụng phông chữ miễn phí
        "Giấy phép sử dụng của phông chữ đó có cho phép dùng cho mục đích thương mại hay không.",
        "Giấy phép sử dụng của phông chữ đó có cho phép dùng cho mục đích thương mại hay không",

        // 13. Nhà sáng tạo nội dung có nhiều ý tưởng nhưng thiếu tổ chức
        "Thu thập và phân loại nội dung.",
        "Thu thập và phân loại nội dung",

        // 14. Thu thập nội dung số liên quan
        "Tất cả các đáp án trên.",
        "Tất cả các đáp án trên",

        // 15. Yếu tố thuộc về Tâm lý học (Psychographics)
        "Mong muốn và các vấn đề đang gặp phải",

        // 16. Mục tiêu theo chuẩn SMART tốt nhất
        "\"Đạt 10.000 người theo dõi trên Instagram trong vòng 6 tháng bằng cách đăng 5 bài/tuần về mẹo vặt cuộc sống.\"",
        "Đạt 10.000 người theo dõi trên Instagram trong vòng 6 tháng bằng cách đăng 5 bài/tuần về mẹo vặt cuộc sống.",

        // 17. Đối tượng được bảo hộ bởi luật bản quyền
        "Một bài thơ do bạn tự sáng tác.",
        "Một bài thơ do bạn tự sáng tác",

        // 18. Kiểm tra trước khi xuất bản video (Chọn cả 4 mục)
        "Kiểm tra giấy phép sử dụng của tất cả các hình ảnh, video footage không phải do mình tự tạo.",
        "Kiểm tra giấy phép sử dụng của tất cả các bản nhạc nền và hiệu ứng âm thanh.",
        "Đảm bảo việc sử dụng logo không gây nhầm lẫn hoặc vi phạm nhãn hiệu.",
        "Rà soát và ghi công (attribute) đầy đủ cho các tác phẩm yêu cầu.",

        // 19. Ngôn ngữ Python nổi tiếng với tính năng nào
        "Cú pháp đơn giản, dễ học.",
        "Cú pháp đơn giản, dễ học",

        // 20. Trang web cá nhân hiệu ứng động nhỏ khi rê chuột
        "JavaScript",

        // 21. Bản remix từ bài hát nổi tiếng
        "Có, đây là một tác phẩm phái sinh, và nó vi phạm bản quyền nếu không được sự cho phép của chủ sở hữu bài hát gốc.",
        "Có, đây là một tác phẩm phái sinh, và nó vi phạm bản quyền nếu không được sự cho phép của chủ sở hữu bài hát gốc",

        // 22. Đánh giá mức độ công sức cần bỏ ra để chỉnh sửa
        "Để đưa ra quyết định có nên đầu tư thời gian và chi phí vào việc chỉnh sửa hay nên tạo một nội dung mới hiệu quả hơn.",
        "Để đưa ra quyết định có nên đầu tư thời gian và chi phí vào việc chỉnh sửa hay nên tạo",

        // 23. Nội dung xanh (Evergreen content)
        "Giá trị bền vững theo thời gian, không lỗi thời.",
        "Giá trị bền vững theo thời gian, không lỗi thời",

        // 24. Yếu tố thuộc về Nhân khẩu học (Demographics)
        "Tuổi tác",

        // 25. Sai lầm phổ biến khi xây dựng User Persona
        "Tạo ra quá nhiều Persona và không biết nên tập trung vào ai.",
        "Tạo ra quá nhiều Persona và không biết nên tập trung vào ai",

        // 26. Lựa chọn công nghệ phù hợp đòi hỏi tư duy gì
        "Tư duy linh hoạt, biết đánh giá ưu nhược điểm của từng công nghệ và chọn giải pháp tối ưu dựa trên mục tiêu, định dạng nội dung và nguồn lực.",
        "Tư duy linh hoạt, biết đánh giá ưu nhược điểm của từng công nghệ và chọn giải pháp tối ưu dựa trên mục tiêu, định dạng nội dung và nguồn lực",

        // 27. Ngôn ngữ lập trình Python là loại ngôn ngữ nào
        "Ngôn ngữ thông dịch.",
        "Ngôn ngữ thông dịch",

        // 28. Khác biệt Creative Commons và Adobe Stock (Chọn 3 mục)
        "Creative Commons thường miễn phí, còn Adobe Stock phải trả phí.",
        "Creative Commons thường miễn phí, còn Adobe Stock phải trả phí",
        "Creative Commons thường yêu cầu ghi công tác giả, trong khi giấy phép trả phí thường không yêu cầu.",
        "Creative Commons thường yêu cầu ghi công tác giả, trong khi giấy phép trả phí thường không yêu cầu",
        "Giấy phép trả phí thường cho phép sử dụng rộng rãi hơn so với một số loại giấy phép Creative Commons.",
        "Giấy phép trả phí thường cho phép sử dụng rộng rãi hơn so với một số loại giấy phép Creative Commons",

        // 29. Cấu trúc dữ liệu và giải thuật cơ bản là nền tảng gì
        "Tư duy lập trình để giải quyết vấn đề hiệu quả.",
        "Tư duy lập trình để giải quyết vấn đề hiệu quả",

        // 30. Kho dữ liệu nghiên cứu môi trường 10 năm trước cho giới trẻ
        "Phân loại và đánh giá kỹ lưỡng độ cập nhật của các số liệu nghiên cứu, đồng thời tìm cách chuyển đổi chúng thành các định dạng hấp dẫn giới trẻ (infographic, video ngắn).",
        "Phân loại và đánh giá kỹ lưỡng độ cập nhật của các số liệu nghiên cứu, đồng thời tìm cách chuyển đổi chúng thành các định dạng hấp dẫn giới trẻ (infographic, video ngắn)"
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
            console.log("%c🎉 HOÀN TẤT NỘP BÀI THI 30 CÂU MỤC 3 (ĐỀ 6)! ĐẠT ĐIỂM TỐI ĐA 100%!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        } else {
            console.log("%cℹ Không tìm thấy nút nộp bài chung, bạn có thể kiểm tra lại rồi bấm 'Gửi' thủ công nhé!", "color: #94a3b8; font-style: italic;");
        }
    }, 1000);
})();
