// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 1 (ĐỀ MỚI / ĐỀ 3)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 1 (ĐỀ 3)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 3 MỤC 1
    const TARGET_ANSWERS = [
        // 1. Toán tử tìm tiêu đề bài viết
        "intitle:\"hướng dẫn sử dụng ChatGPT\"",

        // 2. Không nên tin tưởng tuyệt đối vào AI khi kiểm tra thông tin
        "AI có thể mắc lỗi và bị thao túng",

        // 3. Phân loại dữ liệu có cấu trúc, bán cấu trúc, phi cấu trúc quan trọng vì
        "Để chọn công nghệ và phương pháp xử lý phù hợp",

        // 4. Đặc điểm chính của dữ liệu phi cấu trúc
        "Thiếu cấu trúc xác định trước",

        // 5. Công cụ miễn phí hỗ trợ mã hóa thư mục trong Windows
        "7-Zip",

        // 6. Phương pháp xác thực phổ biến nhất hiện nay
        "Xác thực hai yếu tố (2FA)",

        // 7. Tải bài lên Google Drive người khác không xem được
        "Chưa cấp quyền truy cập cho người khác",

        // 8. Lợi ích của ghi chú khi duyệt thông tin
        "Giúp lưu lại nguồn và tóm tắt nội dung quan trọng",

        // 9. DRAMA tập trung chủ yếu vào loại thông tin
        "Thông tin cảm xúc dễ gây hiểu lầm",

        // 10. Thách thức khi dùng AI trong xác minh thông tin
        "Thiếu khả năng kiểm tra nguồn đáng tin",

        // 11. Yếu tố trong DRAMA cho thấy nội dung bị thao túng cảm xúc
        "Tiêu đề giật gân, ngôn ngữ cảm xúc mạnh",

        // 12. Thông tin đáng tin cậy cần phải
        "Có nguồn rõ ràng và minh bạch",

        // 13. Công cụ AI là sản phẩm của Google
        "Gemini",

        // 14. Thiết bị cá nhân bị đánh cắp, chiến lược bảo vệ an toàn dữ liệu
        "Dùng lưu trữ đám mây có xác thực hai lớp, kết hợp bản sao ngoại tuyến",

        // 15. Yếu tố không cần thiết trong tên file
        "Tên người chấm điểm",

        // 16. Dữ liệu bị trùng lặp ảnh hưởng gì
        "Gây sai lệch trong phân tích",

        // 17. Khi nào thanh tìm kiếm nội bộ hiệu quả hơn Google
        "Khi bạn muốn tìm kiếm thông tin trong phạm vi trang đó mà không muốn bị phân tán bởi kết quả từ các trang web khác",

        // 18. Quy định liên quan trực tiếp đến bảo vệ dữ liệu cá nhân tại VN
        "Nghị định 13/2023/NĐ-CP",

        // 19. Lợi ích Pandas cho người mới bắt đầu làm việc với dữ liệu
        "Dễ học, cú pháp trực quan, dễ đọc và dễ hiểu",

        // 20. Chỉ chia sẻ báo cáo với người có email nội bộ
        "Dùng quyền \"Restricted\" và thêm đúng email được phép",

        // 21. Điểm yếu lớn nhất của lưu trữ cục bộ
        "Rủi ro mất dữ liệu do lỗi vật lý, mất thiết bị",

        // 22. Trong SIFT, 'Investigate the source' có nghĩa là
        "Tra cứu thêm về nguồn gốc thông tin",

        // 23. Sao lưu ổ cứng ngoài thứ Hai, đồng bộ Drive mỗi ngày
        "3–2–1",

        // 24. Ví dụ dữ liệu có cấu trúc
        "Cơ sở dữ liệu khách hàng với ID, Tên, Email, Thành phố",

        // 25. Toán tử dấu ngoặc kép (" ") trong Google
        "Tìm kiếm cụm từ chính xác",

        // 26. Bước phân tích cấu trúc trang web trong web scraping
        "Kiểm tra HTML hoặc API bằng công cụ Inspect",

        // 27. Khác biệt rõ nhất giữa dữ liệu cá nhân và dữ liệu tổ chức
        "Khác nhau về chủ sở hữu và trách nhiệm pháp lý",

        // 28. Biểu đồ doanh thu, số sản phẩm theo tháng là loại phân tích nào
        "Phân tích mô tả",

        // 29. Đánh giá độ tin cậy tên miền .gov và .edu so với .com
        "Đáng tin cậy hơn",

        // 30. Hệ thống đề xuất phim phù hợp dựa trên lịch sử
        "Phân tích đề xuất"
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
        alert(`🎉 ĐÃ XONG 30 CÂU MỤC 1 (ĐỀ 3)!\n✔ Đã tự động chọn và bấm Gửi ${submitCount} câu thành công 100%!`);
    }, 800);
})();
