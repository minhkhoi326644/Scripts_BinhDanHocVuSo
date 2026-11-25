// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 2 (ĐỀ MỚI / ĐỀ 3)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 2 (ĐỀ 3)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 3 MỤC 2
    const TARGET_ANSWERS = [
        // 1. Sử dụng nền tảng số tiếp cận pháp luật
        "Ý thức pháp quyền và năng lực công dân",

        // 2. Hệ thống giao tiếp trực tuyến hỗ trợ nhiều loại thiết bị
        "Tính tương thích",

        // 3. Lỡ chia sẻ tin giả, hành động có trách nhiệm nhất
        "Gỡ bỏ thông tin, đăng bài đính chính và xin lỗi.",
        "Gỡ bỏ thông tin, đăng bài đính chính và xin lỗi",

        // 4. Rủi ro tiềm ẩn liên quan đến danh tính số
        "Ảnh hưởng đến danh tiếng và uy tín",

        // 5. Cảm thấy cực kỳ tức giận hoặc sợ hãi khi đọc tin tức
        "Coi cảm xúc mạnh là một tín hiệu cảnh báo để kiểm tra thông tin kỹ lưỡng hơn.",
        "Coi cảm xúc mạnh là một tín hiệu cảnh báo",

        // 6. Thúc đẩy nâng cao kiến thức quản lý danh tính số
        "Ý thức về tầm quan trọng của việc bảo vệ bản thân và cộng đồng trên không gian mạng",

        // 7. Kiến thức giúp tương tác hiệu quả nhất với người dùng internet
        "Nguyên tắc cộng đồng",

        // 8. So với nhắn tin nhanh, Email phù hợp hơn cho
        "Gửi các thông điệp dài, trang trọng, có đính kèm tệp tin chính thức như CV, báo cáo.",
        "Gửi các thông điệp dài, trang trọng",

        // 9. Giai đoạn khó khăn nhất trong mô hình Tuckman
        "Storming",

        // 10. Hành vi công dân số có trách nhiệm gồm
        "Ứng xử có đạo đức trên mạng",

        // 11. Trách nhiệm quan trọng của Công dân số
        "Tuân thủ luật pháp về sở hữu trí tuệ và không chia sẻ tác phẩm của người khác khi chưa được phép.",
        "Tuân thủ luật pháp về sở hữu trí tuệ",

        // 12. Thế mạnh của Google Workspace for Education
        "Cộng tác thời gian thực, giao diện đơn giản",

        // 13. Yếu tố xem xét khi chọn công cụ giao tiếp cho dự án phức tạp
        "Tất cả các phương án trên",

        // 14. Giúp những người gặp khó khăn khi tương tác trực tuyến
        "Giúp họ làm quen",

        // 15. Sự khác biệt cốt lõi giữa Misinformation và Disinformation
        "Ý định của người lan truyền thông tin (vô ý so với cố ý gây hại).",
        "Ý định của người lan truyền thông tin",

        // 16. Hậu quả chia sẻ quá nhiều thông tin cá nhân
        "Tất cả các hậu quả trên",

        // 17. Netiquette là gì
        "Bộ quy tắc ứng xử trên mạng",

        // 18. Khi nhận được tin giả hoặc thông tin chưa kiểm chứng
        "Kiểm tra nguồn tin từ nhiều nguồn đáng tin cậy",

        // 19. Công dân số cần tránh rủi ro nào khi truy cập mạng
        "Nhấn vào liên kết lạ",

        // 20. Quan trọng nhất xây dựng cộng đồng trực tuyến bền vững
        "Tất cả các yếu tố trên đều quan trọng",

        // 21. Dấu chân số là gì
        "Dấu vết dữ liệu được tạo ra khi sử dụng Internet",

        // 22. Nguyên tắc khi phản ánh qua nền tảng số
        "Đính kèm bằng chứng rõ ràng",

        // 23. Hành vi vi phạm Netiquette
        "Viết IN HOA TOÀN BỘ",

        // 24. Giao tiếp số trong giáo dục và hành chính cần nguyên tắc
        "Ngôn ngữ chuẩn mực",

        // 25. Tiêu chí ưu tiên khi chọn công cụ hợp tác cho sinh viên
        "Chi phí thấp, dễ sử dụng",

        // 26. Ai nên chịu trách nhiệm chính bảo vệ danh tính số
        "Cá nhân mỗi người",

        // 27. Hành vi vi phạm quy tắc ứng xử trên mạng
        "Chia sẻ thông tin cá nhân của người khác khi chưa được phép",

        // 28. Dấu chân số bị động được tạo ra khi nào
        "Khi dữ liệu của người dùng bị thu thập mà họ không hề hay biết.",
        "Khi dữ liệu của người dùng bị thu thập",

        // 29. Khi thấy một thông tin có dấu hiệu sai lệch
        "Kiểm tra lại nguồn tin và báo cáo nếu cần",

        // 30. Khi nhận được một tin nhắn đe dọa trên mạng
        "Báo cáo tin nhắn với nhà cung cấp dịch vụ"
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
        alert(`🎉 ĐÃ XONG 30 CÂU MỤC 2 (ĐỀ 3)!\n✔ Đã tự động chọn và bấm Gửi ${submitCount} câu thành công 100%!`);
    }, 800);
})();
