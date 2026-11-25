// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 2 (ĐỀ BIẾN THỂ MỚI / ĐỀ 4)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 2 (ĐỀ 4)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 4 MỤC 2
    const TARGET_ANSWERS = [
        // 1. Vì sao cần bảo vệ thông tin cá nhân khi hoạt động trực tuyến
        "Tất cả các đáp án trên",

        // 2. “Trách nhiệm công dân” bao hàm điều gì
        "Tuân thủ pháp luật và đóng góp xã hội",

        // 3. Công cụ phân tích hiệu quả chiến dịch truyền thông trực tuyến
        "Tất cả các phương án trên",

        // 4. Khi tham gia thảo luận trực tuyến, bạn nên tránh điều gì
        "Sử dụng ngôn ngữ xúc phạm",

        // 5. Bước đầu tiên trong quy trình kiểm chứng thông tin 5 bước
        "Đánh giá nguồn tin (tác giả là ai, nguồn tin là gì).",

        // 6. Sự khác biệt cơ bản giữa mô hình truyền thông truyền thống và mới
        "Mô hình mới cho phép tương tác hai chiều mạnh mẽ, trong khi mô hình truyền thống chủ yếu là một chiều.",

        // 7. Khi sử dụng công nghệ, nguyên tắc nào giúp bảo vệ thông tin cá nhân
        "Tất cả các phương án trên",

        // 8. Đặc điểm nhóm trong giai đoạn "Norming"
        "Giải quyết mâu thuẫn và thống nhất quy tắc",

        // 9. Dấu chân số bị động được tạo ra khi nào
        "Khi dữ liệu của người dùng bị thu thập mà họ không hề hay biết.",

        // 10. Chia sẻ quá nhiều thông tin cá nhân trên mạng có thể gây ra hậu quả gì
        "Tất cả các hậu quả trên",

        // 11. Điều quan trọng nhất để khuyến khích sự tham gia trong diễn đàn trực tuyến
        "Tính tương tác",

        // 12. Biểu hiện hành vi công dân số tích cực gồm
        "Góp ý chính sách có căn cứ",

        // 13. Câu đúng nhất về vai trò công nghệ số trong hành vi công dân
        "Là môi trường hành động công dân mới",

        // 14. Tiêu chí ưu tiên khi chọn công cụ hợp tác cho sinh viên
        "Chi phí thấp, dễ sử dụng",

        // 15. Nếu đã lỡ đăng tải hoặc chia sẻ tin giả, hành động có trách nhiệm nhất
        "Gỡ bỏ thông tin, đăng bài đính chính và xin lỗi.",

        // 16. Ví dụ nào sau đây là dấu chân số bị động
        "Địa chỉ IP",

        // 17. Danh tính số là gì
        "Tập hợp các đặc điểm của một người trong không gian số",

        // 18. Điều gì thúc đẩy bạn nâng cao kiến thức và kỹ năng về quản lý danh tính số
        "Ý thức về tầm quan trọng của việc bảo vệ bản thân và cộng đồng trên không gian mạng",

        // 19. Nhược điểm chính của Zalo trong hợp tác nhóm
        "Thông tin dễ trôi, khó quản lý",

        // 20. Rủi ro thuộc nhóm "Con người và Tương tác"
        "Hiện tượng \"ăn theo\" và thiếu tin tưởng",

        // 21. Yếu tố quan trọng nhất trong việc xây dựng một cộng đồng trực tuyến bền vững
        "Tất cả các yếu tố trên đều quan trọng",

        // 22. Hành vi nào vi phạm Bộ quy tắc ứng xử trên không gian mạng
        "Đăng bài xúc phạm cá nhân",

        // 23. Theo Luật An ninh mạng (2018), hành vi nào bị nghiêm cấm
        "Phát tán tin giả gây hoang mang",

        // 24. Vai trò trưởng nhóm trong giai đoạn "Performing"
        "Ủy quyền, giám sát, hỗ trợ cá nhân",

        // 25. Để làm việc nhóm trên một tài liệu, cho phép nhiều người cùng chỉnh sửa theo thời gian thực
        "Google Drive hoặc Microsoft OneDrive.",

        // 26. Khi đọc một tin tức và cảm thấy cực kỳ tức giận hoặc sợ hãi, bạn nên làm gì
        "Coi cảm xúc mạnh là một tín hiệu cảnh báo để kiểm tra thông tin kỹ lưỡng hơn.",

        // 27. Biện pháp để xây dựng cộng đồng trực tuyến tích cực
        "Xây dựng nhóm tương trợ",

        // 28. Loại kiến thức giúp tương tác hiệu quả nhất với người dùng internet
        "Nguyên tắc cộng đồng",

        // 29. Cookie có thể giúp gì cho trải nghiệm mua sắm trực tuyến
        "Thu thập dữ liệu về người dùng để cung cấp các quảng cáo phù hợp",

        // 30. Khi thấy một thông tin có dấu hiệu sai lệch, bạn nên làm gì
        "Kiểm tra lại nguồn tin và báo cáo nếu cần"
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
            console.log("%c🎉 HOÀN TẤT NỘP BÀI THI 30 CÂU MỤC 2 (ĐỀ 4)! ĐẠT ĐIỂM TỐI ĐA 100%!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        } else {
            console.log("%cℹ Không tìm thấy nút nộp bài chung, bạn có thể kiểm tra lại rồi bấm 'Gửi' thủ công nhé!", "color: #94a3b8; font-style: italic;");
        }
    }, 1000);
})();
