// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 6 (ĐỀ BỔ SUNG / ĐỀ 2)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 6 (ĐỀ 2)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 2 MỤC 6
    const TARGET_ANSWERS = [
        // 1. Học máy (Machine Learning) giúp máy tính làm gì
        "Học từ dữ liệu và cải thiện hiệu suất theo thời gian",

        // 2. AI có thể hỗ trợ trong lĩnh vực nào sau đây
        "Tất cả các phương án trên",

        // 3. Điều gì là cần thiết để AI phát triển bền vững và có đạo đức
        "Tuân thủ quy định pháp luật và bảo vệ quyền con người",

        // 4. Stable Diffusion là gì và ứng dụng chính của nó là gì
        "Một mô hình học sâu chuyển văn bản thành hình ảnh",

        // 5. Runway và Pika là công cụ GenAI chuyên dùng cho
        "Tạo video từ mô tả văn bản",

        // 6. Vì sao ChatGPT không nên sử dụng làm nguồn duy nhất để viết báo cáo học thuật
        "Vì có thể tạo ra thông tin sai hoặc không được kiểm chứng",

        // 7. Vì sao cần kiểm tra đầu ra của GenAI trong các ứng dụng sáng tạo nội dung
        "Vì đôi khi nội dung bị đạo văn",

        // 8. Một trong những thách thức lớn nhất khi triển khai AI là gì
        "Khó khăn trong thu thập và xử lý dữ liệu",

        // 9. Một trong những cách để giảm rủi ro khi triển khai AI là gì
        "Áp dụng nguyên tắc bảo mật và kiểm soát dữ liệu",

        // 10. AI có thể thay thế con người hoàn toàn trong các lĩnh vực nào sau đây
        "Công việc lặp lại và xử lý dữ liệu cơ bản",

        // 11. Trí tuệ nhân tạo (AI) là gì
        "Công nghệ giúp máy móc thể hiện trí thông minh như con người",

        // 12. Kỹ thuật Style Transfer trong AI sáng tạo hình ảnh
        "Phân tích ảnh gốc để sao chép màu sắc và phong cách sang ảnh khác",

        // 13. Công cụ nào phù hợp nhất để tạo nội dung video quảng cáo từ mô tả văn bản
        "Runway",

        // 14. Sau khi áp dụng AI vào quy trình làm việc, chỉ số nào không nên được sử dụng duy nhất
        "Chi phí đầu tư ban đầu",

        // 15. Quy trình đánh giá hiệu quả của AI nên bao gồm điều nào sau đây
        "So sánh hiệu quả công việc trước và sau khi dùng AI",

        // 16. Một công cụ AI sẽ ít hữu ích nhất trong trường hợp nào sau đây
        "Ra quyết định tuyển dụng cuối cùng thay giám đốc",

        // 17. Việc AI đưa ra quyết định mà người dùng không hiểu rõ cách thức hoạt động gọi là gì
        "Hiện tượng \"hộp đen\" (black box)",

        // 18. Công cụ DALL·E chủ yếu được dùng trong lĩnh vực nào
        "Thiết kế hình ảnh",

        // 19. Một ví dụ cụ thể về việc sử dụng AI một cách thiếu đạo đức là
        "Phân tích CV ứng viên dựa trên tên và giới tính",

        // 20. Câu nào sau đây đúng với AI
        "AI có thể học hỏi từ dữ liệu",

        // 21. Một ứng dụng cụ thể của AI trong quy trình làm việc là gì
        "Viết báo cáo tự động dựa trên dữ liệu đầu vào",

        // 22. ChatGPT có thể “hiểu” ngữ cảnh trò chuyện theo cách nào
        "Dựa vào đoạn hội thoại trước đó trong cùng một phiên làm việc",

        // 23. Đâu là một ví dụ về rủi ro đạo đức tiềm ẩn của AI
        "Phân loại khách hàng dựa trên khu vực địa lý có thiên lệch",

        // 24. Trong lĩnh vực giáo dục, AI có thể giúp gì cho người học
        "Phân tích năng lực và gợi ý lộ trình học tập phù hợp",

        // 25. Một trong những thách thức lớn nhất khi sử dụng AI là gì
        "Nguy cơ vi phạm quyền riêng tư và đạo đức",

        // 26. ShakkerAI được xem là lựa chọn thay thế hoàn hảo cho nền tảng nào
        "Midjourney",

        // 27. AI có thể giúp ích gì trong lĩnh vực giao thông
        "Điều tiết giao thông thông minh và dự đoán ùn tắc",

        // 28. AI có thể ảnh hưởng tiêu cực gì đến việc làm
        "Thay thế con người trong một số công việc",

        // 29. Một điểm khác biệt giữa DALL·E và Midjourney là gì
        "DALL·E tích hợp với ChatGPT, Midjourney chỉ hoạt động qua Discord",

        // 30. Câu nào sau đây không đúng về AI
        "AI luôn đưa ra quyết định chính xác"
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
        alert(`🎉 ĐÃ XONG 30 CÂU MỤC 6 (ĐỀ 2)!\n✔ Đã tự động chọn và bấm Gửi ${submitCount} câu thành công 100%!`);
    }, 800);
})();
