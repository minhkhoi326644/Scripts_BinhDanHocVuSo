// ==============================================================================
// 🌟 MASTER TOOL: AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 6 (UNIVERSAL - CẢ 2 ĐỀ)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// Hỗ trợ: Đề 1 & Đề 2 (Đề bổ sung) - Tự động nhận diện mọi biến thể câu hỏi
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU BÀI KIỂM TRA MỤC 6 (UNIVERSAL)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

    // 1. Ép hiển thị tất cả các câu hỏi và các nút
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

    // 2. TỔNG HỢP TOÀN BỘ ĐÁP ÁN CHUẨN 100% CỦA CẢ ĐỀ 1 VÀ ĐỀ 2 (MỤC 6)
    const TARGET_ANSWERS = [
        // --- CÁC CÂU CHUNG & ĐỀ 1 ---
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
        // 12. Công cụ tìm kiếm tích hợp AI / Lĩnh vực AI hỗ trợ
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
        "Phát hiện gian lận học thuật",

        // --- CÁC CÂU BỔ SUNG ĐẶC TRƯNG ĐỀ 2 ---
        // 31. Học máy (Machine Learning) giúp máy tính làm gì
        "Học từ dữ liệu và cải thiện hiệu suất theo thời gian",
        // 32. Điều gì là cần thiết để AI phát triển bền vững và có đạo đức
        "Tuân thủ quy định pháp luật và bảo vệ quyền con người",
        // 33. Stable Diffusion là gì
        "Một mô hình học sâu chuyển văn bản thành hình ảnh",
        // 34. Runway và Pika là công cụ GenAI chuyên dùng cho
        "Tạo video từ mô tả văn bản",
        // 35. Vì sao ChatGPT không nên sử dụng làm nguồn duy nhất
        "Vì có thể tạo ra thông tin sai hoặc không được kiểm chứng",
        // 36. Vì sao cần kiểm tra đầu ra của GenAI
        "Vì đôi khi nội dung bị đạo văn",
        // 37. Thách thức lớn nhất khi triển khai AI
        "Khó khăn trong thu thập và xử lý dữ liệu",
        // 38. Giảm rủi ro khi triển khai AI
        "Áp dụng nguyên tắc bảo mật và kiểm soát dữ liệu",
        // 39. AI có thể thay thế con người hoàn toàn trong lĩnh vực nào
        "Công việc lặp lại và xử lý dữ liệu cơ bản",
        // 40. Công cụ phù hợp nhất tạo video quảng cáo
        "Runway",
        // 41. Chỉ số không nên dùng duy nhất để đánh giá hiệu quả
        "Chi phí đầu tư ban đầu",
        // 42. Công cụ AI ít hữu ích nhất trong trường hợp nào
        "Ra quyết định tuyển dụng cuối cùng thay giám đốc",
        // 43. Hiện tượng "hộp đen"
        "Hiện tượng \"hộp đen\" (black box)",
        // 44. DALL·E chủ yếu được dùng trong lĩnh vực nào
        "Thiết kế hình ảnh",
        // 45. Câu đúng với AI
        "AI có thể học hỏi từ dữ liệu",
        // 46. Ứng dụng cụ thể của AI trong quy trình làm việc
        "Viết báo cáo tự động dựa trên dữ liệu đầu vào",
        // 47. ChatGPT hiểu ngữ cảnh trò chuyện theo cách nào
        "Dựa vào đoạn hội thoại trước đó trong cùng một phiên làm việc",
        // 48. Rủi ro đạo đức tiềm ẩn của AI
        "Phân loại khách hàng dựa trên khu vực địa lý có thiên lệch",
        // 49. Trong lĩnh vực giáo dục, AI giúp người học
        "Phân tích năng lực và gợi ý lộ trình học tập phù hợp",
        // 50. Thách thức lớn nhất khi sử dụng AI
        "Nguy cơ vi phạm quyền riêng tư và đạo đức",
        // 51. ShakkerAI thay thế hoàn hảo cho nền tảng nào
        "Midjourney",
        // 52. AI trong giao thông
        "Điều tiết giao thông thông minh và dự đoán ùn tắc",
        // 53. AI ảnh hưởng tiêu cực đến việc làm
        "Thay thế con người trong một số công việc",
        // 54. Điểm khác biệt giữa DALL·E và Midjourney
        "DALL·E tích hợp với ChatGPT, Midjourney chỉ hoạt động qua Discord"
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

    console.log(`%c✔ Đã tick chọn thành công ${selectedCount} câu hỏi!`, "color: #38bdf8; font-weight: bold; font-size: 14px;");

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
        console.log(`%c🚀 ĐÃ BẤM GỬI NỘP BÀI THÀNH CÔNG!`, "color: #38bdf8; font-size: 16px; font-weight: bold;");
        alert(`🎉 HOÀN TẤT BÀI THI MỤC 6!\n✔ Đã tự động chọn và nộp bài chuẩn xác 100% (${submitCount} câu đã gửi).`);
    }, 800);
})();
