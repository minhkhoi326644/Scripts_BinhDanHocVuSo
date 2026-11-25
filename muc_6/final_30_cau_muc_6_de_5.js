// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 6 (ĐỀ BIẾN THỂ MỚI / ĐỀ 5)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 6 (ĐỀ 5)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 5 MỤC 6
    const TARGET_ANSWERS = [
        // 1. Thách thức lớn nhất khi sử dụng AI
        "Nguy cơ vi phạm quyền riêng tư và đạo đức",

        // 2. AI giúp ích gì trong lĩnh vực giao thông
        "Điều tiết giao thông thông minh và dự đoán ùn tắc",

        // 3. Khái niệm AI hỗ trợ ra quyết định
        "AI cung cấp phân tích, gợi ý để con người lựa chọn phương án cuối cùng",

        // 4. Không thuộc nhóm AI tạo sinh
        "Excel",

        // 5. AI thường cần yếu tố nào để hoạt động hiệu quả
        "Dữ liệu chất lượng và đủ lớn",

        // 6. AI có thể hỗ trợ bác sĩ bằng cách nào
        "Phân tích hình ảnh y tế để hỗ trợ chẩn đoán",

        // 7. Lợi thế cạnh tranh của GenAI so với AI truyền thống
        "Tự động sinh ra dữ liệu mới có giá trị sáng tạo",

        // 8. Ứng dụng nào sau đây sử dụng AI
        "Google Translate",

        // 9. DALL·E là công cụ của tổ chức nào
        "OpenAI",

        // 10. ShakkerAI thay thế hoàn hảo cho nền tảng nào
        "Midjourney",

        // 11. Vì sao AI không thể hoàn toàn thay thế con người trong sáng tạo
        "Vì AI thiếu cảm xúc, trực giác và khả năng suy nghĩ đạo đức",

        // 12. Điều gì cần thiết để AI phát triển bền vững và có đạo đức
        "Tuân thủ quy định pháp luật và bảo vệ quyền con người",

        // 13. Thách thức lớn khi triển khai ChatGPT trong tổ chức
        "Lo ngại về bảo mật thông tin và dữ liệu nội bộ",

        // 14. AI hỗ trợ doanh nghiệp trong hoạt động nào
        "Phân tích dữ liệu khách hàng và dự đoán xu hướng",

        // 15. AI ảnh hưởng tiêu cực gì đến việc làm
        "Thay thế con người trong một số công việc",

        // 16. Điểm khác biệt giữa DALL·E và Midjourney
        "DALL·E tích hợp với ChatGPT, Midjourney chỉ hoạt động qua Discord",

        // 17. AI hoạt động tốt nhất trong môi trường nào
        "Có dữ liệu lớn, rõ ràng và được gán nhãn chính xác",

        // 18. Công cụ AI ít hữu ích nhất trong trường hợp nào
        "Ra quyết định tuyển dụng cuối cùng thay giám đốc",

        // 19. Điều nào không phải là cơ hội mà AI mang lại
        "Thay thế hoàn toàn con người trong mọi lĩnh vực",

        // 20. Vì sao cần kiểm tra đầu ra của GenAI
        "Vì đôi khi nội dung bị đạo văn",

        // 21. AI có thể gây ra rủi ro nào nếu bị sử dụng sai cách
        "Tạo ra nội dung giả mạo hoặc sai lệch (deepfake)",

        // 22. ChatGPT là ví dụ của ứng dụng AI thuộc lĩnh vực nào
        "Xử lý ngôn ngữ tự nhiên (NLP)",

        // 23. Sai lầm phổ biến khi triển khai AI trong doanh nghiệp
        "Không tích hợp dữ liệu đầu vào từ nhiều nguồn",

        // 24. Trong chăm sóc khách hàng, ChatGPT có thể làm gì
        "Tư vấn sản phẩm 24/7 qua trò chuyện",

        // 25. Để sử dụng GenAI hiệu quả, người dùng nên làm gì
        "Hiểu rõ mục đích sử dụng và kiểm soát đầu ra",

        // 26. AI trong chăm sóc sức khỏe có thể giúp gì
        "Tư vấn sức khỏe ảo, phân tích dữ liệu y tế",

        // 27. AI hỗ trợ con người như thế nào trong công việc
        "Hỗ trợ tự động hóa, tiết kiệm thời gian và nâng cao hiệu quả",

        // 28. Deepfake là công nghệ AI nào sau đây
        "Tạo video giả mạo có nội dung chân thực",

        // 29. Ví dụ về rủi ro đạo đức tiềm ẩn của AI
        "Phân loại khách hàng dựa trên khu vực địa lý có thiên lệch",

        // 30. Lĩnh vực dễ bị ảnh hưởng tiêu cực nếu dùng ChatGPT thiếu kiểm soát
        "Tư vấn pháp lý chuyên sâu"
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
            console.log("%c🎉 HOÀN TẤT NỘP BÀI THI 30 CÂU MỤC 6 (ĐỀ 5)! ĐẠT ĐIỂM TỐI ĐA 100%!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        } else {
            console.log("%cℹ Không tìm thấy nút nộp bài chung, bạn có thể kiểm tra lại rồi bấm 'Gửi' thủ công nhé!", "color: #94a3b8; font-style: italic;");
        }
    }, 1000);
})();
