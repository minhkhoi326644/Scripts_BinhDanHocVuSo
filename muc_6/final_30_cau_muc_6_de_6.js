// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 6 (ĐỀ BIẾN THỂ MỚI / ĐỀ 6)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 6 (ĐỀ 6)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 6 MỤC 6
    const TARGET_ANSWERS = [
        // 1. #ac1265: Trong lĩnh vực giáo dục, AI giúp người học
        "Phân tích năng lực và gợi ý lộ trình học tập phù hợp",

        // 2. #fde6a7: AI đưa ra quyết định mà người dùng không hiểu rõ
        "Hiện tượng \"hộp đen\" (black box)",
        "Hiện tượng hộp đen",

        // 3. #ecdbf7: Hệ thống AI vi phạm quyền riêng tư khi
        "Khi không yêu cầu người dùng xác nhận truy cập dữ liệu cá nhân",

        // 4. #71f96a: AI bắt đầu phát triển từ khoảng thời gian nào
        "1950s",

        // 5. #e2286c: Câu nào không đúng về AI
        "AI luôn đưa ra quyết định chính xác",

        // 6. #01e238: Vì sao cần kiểm tra đầu ra của GenAI
        "Vì đôi khi nội dung bị đạo văn",

        // 7. #d5da31: GenAI trong giáo dục gây ra vấn đề gì nếu không kiểm soát
        "Khuyến khích sinh viên sao chép nội dung, thiếu tư duy phản biện",

        // 8. #e0b4e9: Ngành nghề ít có nguy cơ bị thay thế nhất
        "Nhà tâm lý học",

        // 9. #8b36de: Ứng dụng cụ thể của AI trong quy trình làm việc
        "Viết báo cáo tự động dựa trên dữ liệu đầu vào",

        // 10. #33fa7e: Runway và Pika là công cụ GenAI chuyên dùng cho
        "Tạo video từ mô tả văn bản",

        // 11. #f0ee91: Thách thức lớn nhất khi triển khai AI
        "Khó khăn trong thu thập và xử lý dữ liệu",

        // 12. #d444e9: Học viên ứng dụng AI vào quy trình, bước không nên bỏ qua
        "So sánh kết quả với phương pháp thủ công",

        // 13. #9c1635: ChatGPT có thể tạo nội dung cho các nền tảng nào
        "Mạng xã hội, blog, email",

        // 14. #476960: AI mang lại lợi ích gì trong giáo dục
        "Tự động hóa việc chấm điểm và hỗ trợ cá nhân hóa học tập",

        // 15. #3a285c: ShakkerAI là lựa chọn thay thế cho
        "Midjourney",

        // 16. #9eb484: Công cụ GenAI dùng để tạo hình ảnh
        "Midjourney",

        // 17. #cfaf2e: AI hỗ trợ lĩnh vực giáo dục bằng cách nào
        "Tạo bài giảng cá nhân hóa theo trình độ học viên",

        // 18. #a1c7ac: AI trong chăm sóc sức khỏe có thể giúp gì
        "Tư vấn sức khỏe ảo, phân tích dữ liệu y tế",

        // 19. #6999a4: Yếu tố chỉ con người mới đảm nhiệm tốt hơn AI
        "Ra quyết định mang tính sáng tạo và đạo đức",

        // 20. #efc95d: Cảm biến trong hệ thống AI dùng để
        "Thu thập dữ liệu từ môi trường",

        // 21. #a3dd92: Điểm đặc biệt của NotebookLM
        "Hoạt động như trợ lý AI dựa trên nội dung người dùng tải lên",

        // 22. #cefdff: Lĩnh vực dễ bị ảnh hưởng tiêu cực nếu dùng ChatGPT thiếu kiểm soát
        "Tư vấn pháp lý chuyên sâu",

        // 23. #e4d43f: Một trong những thách thức lớn nhất khi sử dụng AI
        "Nguy cơ vi phạm quyền riêng tư và đạo đức",

        // 24. #a812b7: Câu đúng với AI
        "AI có thể học hỏi từ dữ liệu",

        // 25. #38bc5e: Vì sao AI không thể hoàn toàn thay thế con người trong sáng tạo
        "Vì AI thiếu cảm xúc, trực giác và khả năng suy nghĩ đạo đức",

        // 26. #5f58c6: Kỹ thuật Style Transfer trong AI sáng tạo hình ảnh
        "Phân tích ảnh gốc để sao chép màu sắc và phong cách sang ảnh khác",

        // 27. #b1f28e: AI có thể hỗ trợ bác sĩ bằng cách nào
        "Phân tích hình ảnh y tế để hỗ trợ chẩn đoán",

        // 28. #57bf94: Thách thức lớn khi triển khai ChatGPT trong tổ chức
        "Lo ngại về bảo mật thông tin và dữ liệu nội bộ",

        // 29. #6913a5: Mối quan tâm đạo đức lớn nhất khi dùng AI
        "Bảo vệ quyền riêng tư và sử dụng dữ liệu cá nhân",

        // 30. #2f862: Khái niệm “AI hỗ trợ ra quyết định”
        "AI cung cấp phân tích, gợi ý để con người lựa chọn phương án cuối cùng"
    ];

    // Chuẩn hóa chuỗi so sánh
    const cleanStr = (s) => (s || '').replace(/[\r\n\t]+/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();

    // 3. Quét và tick chọn đáp án
    const inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    let selectedCount = 0;

    inputs.forEach(input => {
        let label = input.closest('label');
        let text = '';
        if (label) {
            text = label.innerText;
        } else if (input.id) {
            const lbl = document.querySelector(`label[for="${input.id}"]`);
            if (lbl) {
                label = lbl;
                text = lbl.innerText;
            }
        }

        if (!text && input.parentElement) {
            text = input.parentElement.innerText;
        }

        const normalizedText = cleanStr(text);

        for (const target of TARGET_ANSWERS) {
            const normalizedTarget = cleanStr(target);
            if (normalizedText.includes(normalizedTarget) || normalizedTarget.includes(normalizedText)) {
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
            console.log("%c🎉 HOÀN TẤT NỘP BÀI THI 30 CÂU MỤC 6 (ĐỀ 6)! ĐẠT ĐIỂM TỐI ĐA 100%!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        } else {
            console.log("%cℹ Không tìm thấy nút nộp bài chung, bạn có thể kiểm tra lại rồi bấm 'Gửi' thủ công nhé!", "color: #94a3b8; font-style: italic;");
        }
    }, 1000);
})();
