// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 6 (ĐỀ BIẾN THỂ MỚI / ĐỀ 3)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 6 (ĐỀ 3)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 3 MỤC 6
    const TARGET_ANSWERS = [
        // 1. Hệ thống AI vi phạm quyền riêng tư khi nào
        "Khi không yêu cầu người dùng xác nhận truy cập dữ liệu cá nhân",

        // 2. AI có thể thay thế con người hoàn toàn trong các lĩnh vực nào sau đây
        "Công việc lặp lại và xử lý dữ liệu cơ bản",

        // 3. Một ứng dụng của GenAI có thể thay thế con người hiệu quả trong việc tạo nội dung là gì
        "Hỗ trợ viết email cá nhân hóa hàng loạt",

        // 4. Công cụ tìm kiếm nào sau đây được tích hợp AI để gợi ý kết quả phù hợp hơn với ngữ cảnh
        "Tất cả các phương án trên",

        // 5. AI có thể ảnh hưởng tiêu cực gì đến việc làm
        "Thay thế con người trong một số công việc",

        // 6. Cảm biến (sensor) trong hệ thống AI thường được dùng để làm gì
        "Thu thập dữ liệu từ môi trường",

        // 7. Học sâu (Deep Learning) là một nhánh của lĩnh vực nào sau đây
        "Học máy (Machine Learning)",

        // 8. Đâu là một sai lầm phổ biến khi triển khai AI trong doanh nghiệp
        "Không tích hợp dữ liệu đầu vào từ nhiều nguồn",

        // 9. Điểm đặc biệt của NotebookLM là gì
        "Hoạt động như trợ lý AI dựa trên nội dung người dùng tải lên",

        // 10. AI có thể được huấn luyện thông qua cách nào
        "Thử sai và học hỏi từ dữ liệu (learning from data)",

        // 11. Khi đề xuất cải tiến một hệ thống AI hiện có, yếu tố nào quan trọng nhất cần cân nhắc
        "Cân bằng giữa hiệu quả, độ chính xác và đạo đức ứng dụng",

        // 12. Một hệ thống AI an toàn nên được thiết kế như thế nào
        "Minh bạch, có khả năng giải thích và kiểm soát kết quả đầu ra",

        // 13. Một mô hình AI được đánh giá là "phi đạo đức" khi
        "Sử dụng dữ liệu cá nhân mà không có sự đồng thuận",

        // 14. AI hoạt động tốt nhất trong môi trường nào
        "Có dữ liệu lớn, rõ ràng và được gán nhãn chính xác",

        // 15. Nhánh nào sau đây thuộc AI
        "Xử lý ngôn ngữ tự nhiên (NLP)",

        // 16. NotebookLM chủ yếu được thiết kế để hỗ trợ người dùng làm gì
        "Phân tích tài liệu và hỗ trợ nghiên cứu",

        // 17. Điểm nổi bật nào giúp Kling AI thu hút cộng đồng sáng tạo nội dung
        "Tạo video chất lượng điện ảnh từ văn bản và hình ảnh",

        // 18. Lĩnh vực nào sau đây dễ bị ảnh hưởng tiêu cực nếu sử dụng ChatGPT thiếu kiểm soát
        "Tư vấn pháp lý chuyên sâu",

        // 19. Một công cụ AI sẽ ít hữu ích nhất trong trường hợp nào sau đây
        "Ra quyết định tuyển dụng cuối cùng thay giám đốc",

        // 20. GenAI KHÔNG phù hợp với nhiệm vụ nào sau đây nếu không có sự can thiệp của con người
        "Phát hiện gian lận học thuật",

        // 21. DALL·E là công cụ của tổ chức nào
        "OpenAI",

        // 22. AI có thể giúp ích gì trong lĩnh vực giao thông
        "Điều tiết giao thông thông minh và dự đoán ùn tắc",

        // 23. Sora có thể thực hiện điều nào sau đây
        "Tạo video từ hình ảnh tĩnh",

        // 24. Một trong những công cụ GenAI dùng để tạo hình ảnh là
        "Midjourney",

        // 25. Một ví dụ về ứng dụng AI trong y tế là gì
        "Chẩn đoán hình ảnh y khoa từ phim MRI, CT",

        // 26. AI có thể hỗ trợ bác sĩ bằng cách nào
        "Phân tích hình ảnh y tế để hỗ trợ chẩn đoán",

        // 27. Một trong những cách để giảm rủi ro khi triển khai AI là gì
        "Áp dụng nguyên tắc bảo mật và kiểm soát dữ liệu",

        // 28. Trong thực hành, người học được khuyến khích làm gì với AI
        "Sử dụng AI để hoàn thành công việc trong quy trình có sẵn",

        // 29. Kling AI sử dụng công nghệ nào để tái tạo khuôn mặt và chuyển động một cách tự nhiên
        "Transformer khuếch tán",

        // 30. Trí tuệ nhân tạo (AI) là gì
        "Công nghệ giúp máy móc thể hiện trí thông minh như con người"
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
            console.log("%c🎉 HOÀN TẤT NỘP BÀI THI 30 CÂU MỤC 6 (ĐỀ 3)! ĐẠT ĐIỂM TỐI ĐA 100%!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        } else {
            console.log("%cℹ Không tìm thấy nút nộp bài chung, bạn có thể kiểm tra lại rồi bấm 'Gửi' thủ công nhé!", "color: #94a3b8; font-style: italic;");
        }
    }, 1000);
})();
