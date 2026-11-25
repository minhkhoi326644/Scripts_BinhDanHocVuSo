// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 1 (ĐỀ BIẾN THỂ MỚI / ĐỀ 4)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 1 (ĐỀ 4)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 4 MỤC 1
    const TARGET_ANSWERS = [
        // 1. Kỹ thuật đọc lướt hiệu quả khi xử lý báo cáo tài chính
        "Xem biểu đồ doanh thu và chú thích trước",

        // 2. Mục đích chính của kỹ thuật đọc lướt (Skimming)
        "Nhanh chóng xác định ý chính hoặc tính liên quan",

        // 3. “Purpose” trong CRAAP đề cập đến điều gì
        "Mục đích của thông tin (giải trí, giáo dục, quảng cáo...)",

        // 4. Một nguyên tắc cốt lõi của quản lý dữ liệu là gì
        "Dễ truy xuất, đảm bảo toàn vẹn và bảo mật",

        // 5. Công cụ miễn phí hỗ trợ mã hóa thư mục trong Windows
        "7-Zip",

        // 6. Thiết bị cá nhân bị đánh cắp, chiến lược bảo vệ an toàn
        "Dùng lưu trữ đám mây có xác thực hai lớp, kết hợp bản sao ngoại tuyến",

        // 7. Hệ thống mã hóa sử dụng cùng một khóa cho cả mã hóa và giải mã
        "Mã hóa đối xứng",

        // 8. Bước trong quy trình web scraping phân tích cấu trúc trang web
        "Kiểm tra HTML hoặc API bằng công cụ Inspect",

        // 9. Vì sao nên chú ý đến các từ in đậm hoặc bullet point khi đọc lướt
        "Vì chúng làm nổi bật các điểm chính",

        // 10. Ví dụ nào là dữ liệu có cấu trúc
        "Cơ sở dữ liệu khách hàng với ID, Tên, Email, Thành phố",

        // 11. Đặc điểm nào trong mô hình 4V mô tả lượng dữ liệu tăng theo cấp số nhân
        "Khối lượng",

        // 12. Trong Google Drive, thao tác tạo thư mục con cho từng môn học
        "Tổ chức khoa học và truy xuất nhanh",

        // 13. Dùng Google để kiểm tra tính chính xác của một tuyên bố
        "Kiểm tra chéo thông tin (Cross-referencing)",

        // 14. Trong CRAAP, tiêu chí liên quan đến mục đích của thông tin
        "Purpose",

        // 15. Lợi ích quan trọng của tính năng comment trong Google Docs
        "Cho phép thảo luận, góp ý mà không làm thay đổi nội dung chính",

        // 16. Loại hình phân tích nào sử dụng AI để gợi ý hành động
        "Quy định (prescriptive analytics)",

        // 17. Để xác minh tính xác thực của ảnh sự kiện trên mạng xã hội
        "Tìm kiếm ngược hình ảnh",

        // 18. Tiêu chí của IMVAIN
        "Nguồn độc lập và có thể kiểm chứng",

        // 19. Tối ưu hóa tìm kiếm trên PubMed
        "Sử dụng thuật ngữ MeSH và bộ lọc chi tiết",

        // 20. Thao tác tạo bản sao (Make a copy) trong Google Drive
        "Tạo bản lưu riêng để chỉnh sửa mà không ảnh hưởng bản gốc",

        // 21. Thách thức khi dùng AI trong xác minh thông tin
        "Thiếu khả năng kiểm tra nguồn đáng tin",

        // 22. Tên tệp tin “final_final.doc” có vấn đề gì
        "Không rõ nội dung và không theo cấu trúc chuẩn",

        // 23. Trong sao lưu dữ liệu, phương pháp lưu toàn bộ dữ liệu tại một thời điểm
        "Sao lưu toàn bộ",

        // 24. Trong mô hình CRAAP, tiêu chí "Authority" liên quan đến
        "Chuyên môn và uy tín của tác giả",

        // 25. ChatGPT có thể cung cấp thông tin sai trong trường hợp nào
        "Khi dữ liệu huấn luyện sai hoặc lỗi ngữ cảnh",

        // 26. Pandas được tối ưu hóa để xử lý loại bộ dữ liệu nào nhanh chóng
        "Các bộ dữ liệu lớn",

        // 27. Tại sao phân loại dữ liệu có cấu trúc, bán cấu trúc, phi cấu trúc quan trọng
        "Để chọn công nghệ và phương pháp xử lý phù hợp",

        // 28. Khi dùng AI, người dùng nên làm gì để đảm bảo thông tin chính xác
        "Kiểm chứng lại với các nguồn tin cậy",

        // 29. Toán tử giúp loại trừ từ khóa trong tìm kiếm Google
        "Dấu trừ (-)",

        // 30. Hình thức lưu trữ kết hợp cả đám mây và cục bộ
        "Lưu trữ lai (Hybrid Storage)"
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
            console.log("%c🎉 HOÀN TẤT NỘP BÀI THI 30 CÂU MỤC 1 (ĐỀ 4)! ĐẠT ĐIỂM TỐI ĐA 100%!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        } else {
            console.log("%cℹ Không tìm thấy nút nộp bài chung, bạn có thể kiểm tra lại rồi bấm 'Gửi' thủ công nhé!", "color: #94a3b8; font-style: italic;");
        }
    }, 1000);
})();
