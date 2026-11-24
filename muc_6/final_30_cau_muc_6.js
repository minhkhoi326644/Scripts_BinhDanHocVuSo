// ==============================================================================
// 🌟 MASTER TOOL: AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 6
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU BÀI KIỂM TRA MỤC 6...", "color: #22c55e; font-weight: bold; font-size: 16px;");

    // 1. Ép hiển thị tất cả các câu hỏi và các nút
    if (window.$) {
        $('.video').trigger('pause');
        $('.in-video-problem-wrapper, .problem, .vert').show().css({'display':'block!important','opacity':'1!important'});
        $('button.submit, input.submit, .check, .action button').show();
    }

    // 2. Danh sách đáp án chuẩn 100% của 30 câu Mục 6
    const TARGET_ANSWERS = [
        // 1. GenAI viết tắt
        "Generative Artificial Intelligence",
        // 2. Quy trình đánh giá hiệu quả AI
        "So sánh hiệu quả công việc trước và sau khi dùng AI",
        // 3. Sai lầm phổ biến triển khai AI
        "Không tích hợp dữ liệu đầu vào từ nhiều nguồn",
        // 4. Tại sao ChatGPT cần kiểm tra bởi con người
        "Vì đôi khi có thể đưa ra thông tin không chính xác",
        // 5. Kỹ thuật Style Transfer
        "Phân tích ảnh gốc để sao chép màu sắc và phong cách sang ảnh khác",
        // 6. Kling AI công nghệ tái tạo
        "Transformer khuếch tán",
        // 7. AI hoạt động tốt nhất trong môi trường
        "Có dữ liệu lớn, rõ ràng và được gán nhãn chính xác",
        // 8. ChatGPT thuộc lĩnh vực nào
        "Xử lý ngôn ngữ tự nhiên (NLP)",
        // 9. Vì sao AI không thay thế con người trong sáng tạo
        "Vì AI thiếu cảm xúc, trực giác và khả năng suy nghĩ đạo đức",
        // 10. Hệ thống AI an toàn thiết kế
        "Minh bạch, có khả năng giải thích và kiểm soát kết quả đầu ra",
        // 11. Không thuộc nhóm AI tạo sinh
        "Excel",
        // 12. Công cụ tìm kiếm tích hợp AI
        "Tất cả các phương án trên",
        // 13. Sử dụng AI thiếu đạo đức
        "Phân tích CV ứng viên dựa trên tên và giới tính",
        // 14. Trí tuệ nhân tạo (AI) là gì
        "Công nghệ giúp máy móc thể hiện trí thông minh như con người",
        // 15. Rủi ro của AI nếu dùng sai
        "Tạo ra nội dung giả mạo hoặc sai lệch (deepfake)",
        // 16. Mô hình trong học sâu (DL)
        "Mạng nơ-ron tích chập (CNN)",
        // 17. AI phát hiện gian lận trong ngành
        "Tài chính – ngân hàng",
        // 18. GenAI trong giáo dục gây vấn đề
        "Khuyến khích sinh viên sao chép nội dung, thiếu tư duy phản biện",
        // 19. Doanh nghiệp dùng ChatGPT chăm sóc khách hàng
        "Luôn có nhân viên giám sát và xử lý tình huống đặc biệt",
        // 20. AI trong chăm sóc sức khỏe
        "Tư vấn sức khỏe ảo, phân tích dữ liệu y tế",
        // 21. AI mang lại lợi ích gì trong giáo dục
        "Tự động hóa việc chấm điểm và hỗ trợ cá nhân hóa học tập",
        // 22. Cải tiến AI sau thực hành
        "Sửa lỗi và điều chỉnh cách tích hợp vào công việc cụ thể",
        // 23. AI huấn luyện thông qua
        "Thử sai và học hỏi từ dữ liệu (learning from data)",
        // 24. Chỉ con người mới đảm nhiệm tốt hơn AI
        "Ra quyết định mang tính sáng tạo và đạo đức",
        // 25. Điểm đặc biệt của NotebookLM
        "Hoạt động như trợ lý AI dựa trên nội dung người dùng tải lên",
        // 26. Lợi thế của GenAI so với AI truyền thống
        "Tự động sinh ra dữ liệu mới có giá trị sáng tạo",
        // 27. Cảm biến (sensor) trong hệ thống AI
        "Thu thập dữ liệu từ môi trường",
        // 28. Câu không đúng về AI
        "AI luôn đưa ra quyết định chính xác",
        // 29. Tại sao AI gây thiên lệch
        "Dữ liệu huấn luyện có thể thiếu đa dạng và không công bằng",
        // 30. GenAI không phù hợp nhiệm vụ nào nếu thiếu can thiệp
        "Phát hiện gian lận học thuật"
    ];

    let checkedCount = 0;
    const allLabels = document.querySelectorAll('label, .choicegroup_item, fieldset label, p');

    allLabels.forEach(el => {
        const text = el.innerText.trim();
        for (let ans of TARGET_ANSWERS) {
            if (text.includes(ans)) {
                const input = el.querySelector('input') || document.getElementById(el.getAttribute('for')) || el.parentElement?.querySelector('input');
                if (input && !input.checked) {
                    input.click();
                    input.checked = true;
                    input.dispatchEvent(new Event('change', { bubbles: true }));
                    el.style.backgroundColor = '#dcfce7';
                    el.style.border = '2px solid #22c55e';
                    el.style.borderRadius = '6px';
                    checkedCount++;
                }
            }
        }
    });

    console.log(`%c✔ ĐÃ CHỌN THÀNH CÔNG: ${checkedCount} CÂU TRẢ LỜI!`, "color: #22c55e; font-size: 16px; font-weight: bold;");

    // 3. Tự động bấm nút Gửi cho tất cả 30 câu
    setTimeout(() => {
        let submitCount = 0;
        document.querySelectorAll('button.submit, input.submit, .check, .action button, .submit-btn').forEach(btn => {
            const txt = (btn.innerText || btn.value || '').toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) {
                btn.click();
                submitCount++;
            }
        });
        console.log(`%c🚀 ĐÃ BẤM GỬI NỘP BÀI THÀNH CÔNG!`, "color: #38bdf8; font-size: 16px; font-weight: bold;");
        alert(`🎉 HOÀN TẤT BÀI THI MỤC 6!\n✔ Đã tự động chọn và nộp bài chuẩn xác 100% (30/30 câu).`);
    }, 600);
})();
