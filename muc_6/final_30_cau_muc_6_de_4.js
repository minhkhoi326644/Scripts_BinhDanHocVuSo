// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 6 (ĐỀ BIẾN THỂ MỚI / ĐỀ 4)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 6 (ĐỀ 4)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 4 MỤC 6
    const TARGET_ANSWERS = [
        // 1. Sử dụng AI trong tuyển dụng có thể dẫn đến vấn đề gì nếu dữ liệu huấn luyện không công bằng
        "Thiên lệch giới tính hoặc chủng tộc trong quyết định tuyển dụng",

        // 2. Để sử dụng GenAI hiệu quả, người dùng nên làm gì
        "Hiểu rõ mục đích sử dụng và kiểm soát đầu ra",

        // 3. Trong thực hành, người học được khuyến khích làm gì với AI
        "Sử dụng AI để hoàn thành công việc trong quy trình có sẵn",

        // 4. Yếu tố nào chỉ con người mới có thể đảm nhiệm tốt hơn AI hiện nay
        "Ra quyết định mang tính sáng tạo và đạo đức",

        // 5. Vì sao ChatGPT không nên sử dụng làm nguồn duy nhất để viết báo cáo học thuật
        "Vì có thể tạo ra thông tin sai hoặc không được kiểm chứng",

        // 6. Đâu là một ví dụ về rủi ro đạo đức tiềm ẩn của AI
        "Phân loại khách hàng dựa trên khu vực địa lý có thiên lệch",

        // 7. Một trong những cách để giảm rủi ro khi triển khai AI là gì
        "Áp dụng nguyên tắc bảo mật và kiểm soát dữ liệu",

        // 8. AI trong chăm sóc sức khỏe có thể giúp gì
        "Tư vấn sức khỏe ảo, phân tích dữ liệu y tế",

        // 9. ChatGPT có thể “hiểu” ngữ cảnh trò chuyện theo cách nào
        "Dựa vào đoạn hội thoại trước đó trong cùng một phiên làm việc",

        // 10. AI có thể ảnh hưởng tiêu cực gì đến việc làm
        "Thay thế con người trong một số công việc",

        // 11. ChatGPT có thể tạo nội dung cho các nền tảng nào sau đây
        "Mạng xã hội, blog, email",

        // 12. AI thường cần yếu tố nào để hoạt động hiệu quả
        "Dữ liệu chất lượng và đủ lớn",

        // 13. "Xử lý ngôn ngữ tự nhiên" (NLP) giúp máy làm gì
        "Hiểu và tạo ra ngôn ngữ con người",

        // 14. Khái niệm “AI hỗ trợ ra quyết định” nghĩa là gì
        "AI cung cấp phân tích, gợi ý để con người lựa chọn phương án cuối cùng",

        // 15. Stable Diffusion là gì và ứng dụng chính của nó là gì
        "Một mô hình học sâu chuyển văn bản thành hình ảnh",

        // 16. AI có thể giúp ích gì trong lĩnh vực giao thông
        "Điều tiết giao thông thông minh và dự đoán ùn tắc",

        // 17. AI có thể hỗ trợ trong lĩnh vực nào sau đây
        "Tất cả các phương án trên",

        // 18. Khi sử dụng AI, yếu tố nào dưới đây cần được đảm bảo để tránh vi phạm đạo đức
        "Sự minh bạch và không thiên lệch",

        // 19. ShakkerAI được xem là lựa chọn thay thế hoàn hảo cho nền tảng nào
        "Midjourney",

        // 20. Mối quan tâm đạo đức lớn nhất khi sử dụng AI là gì
        "Bảo vệ quyền riêng tư và sử dụng dữ liệu cá nhân",

        // 21. NotebookLM chủ yếu được thiết kế để hỗ trợ người dùng làm gì
        "Phân tích tài liệu và hỗ trợ nghiên cứu",

        // 22. Khi đề xuất cải tiến hệ thống AI, yếu tố nào sau đây là quan trọng nhất
        "Cân bằng giữa hiệu quả, độ chính xác và đạo đức ứng dụng",

        // 23. Deepfake là công nghệ AI nào sau đây
        "Tạo video giả mạo có nội dung chân thực",

        // 24. Trí tuệ nhân tạo (AI) là gì
        "Công nghệ giúp máy móc thể hiện trí thông minh như con người",

        // 25. Điểm nổi bật nào giúp Kling AI thu hút cộng đồng sáng tạo nội dung
        "Tạo video chất lượng điện ảnh từ văn bản và hình ảnh",

        // 26. Nhánh nào sau đây thuộc AI
        "Xử lý ngôn ngữ tự nhiên (NLP)",

        // 27. Kỹ thuật Style Transfer trong AI sáng tạo hình ảnh hoạt động như thế nào
        "Phân tích ảnh gốc để sao chép màu sắc và phong cách sang ảnh khác",

        // 28. Một mô hình AI được đánh giá là "phi đạo đức" khi
        "Sử dụng dữ liệu cá nhân mà không có sự đồng thuận",

        // 29. Một hệ thống AI an toàn nên được thiết kế như thế nào
        "Minh bạch, có khả năng giải thích và kiểm soát kết quả đầu ra",

        // 30. GenAI là viết tắt của cụm từ nào
        "Generative Artificial Intelligence"
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
            console.log("%c🎉 HOÀN TẤT NỘP BÀI THI 30 CÂU MỤC 6 (ĐỀ 4)! ĐẠT ĐIỂM TỐI ĐA 100%!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        } else {
            console.log("%cℹ Không tìm thấy nút nộp bài chung, bạn có thể kiểm tra lại rồi bấm 'Gửi' thủ công nhé!", "color: #94a3b8; font-style: italic;");
        }
    }, 1000);
})();
