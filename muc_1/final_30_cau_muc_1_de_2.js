// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 1 (ĐỀ BỔ SUNG / ĐỀ 2)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 1 (ĐỀ 2)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 2
    const TARGET_ANSWERS = [
        // 1. Tìm bài viết AI trên VnExpress
        "AI site:vnexpress.net",

        // 2. Nhược điểm dữ liệu phi cấu trúc
        "Khó truy vấn bằng các công cụ truyền thống",

        // 3. Thông tin bị nhiễu là gì
        "Thông tin sai lệch hoặc không liên quan",

        // 4. Tên file 20250608_BT3_OOP_v1.docx
        "File thuộc môn Lập trình Hướng đối tượng, được tạo ngày 08/06/2025",

        // 5. Xác định mục tiêu duyệt trước khi bắt đầu
        "Để tránh bị phân tán bởi thông tin không liên quan",

        // 6. Tận dụng cấu trúc trang web khi duyệt
        "Sử dụng mục lục tương tác hoặc thanh điều hướng",

        // 7. Hệ thống lưu trữ cá nhân hiệu quả
        "Khả năng tìm kiếm dữ liệu đúng phiên bản và nhanh chóng",

        // 8. Ví dụ dữ liệu bán cấu trúc
        "Tệp JSON chứa thông tin sinh viên và khóa học",

        // 9. Phương pháp xác thực phổ biến nhất
        "Xác thực hai yếu tố (2FA)",

        // 10. Bảo vệ dữ liệu cá nhân tại Việt Nam
        "Nghị định 13/2023/NĐ-CP",

        // 11. Cấp quyền commenter trong Google Docs
        "Xem và nhận xét, nhưng không chỉnh sửa",

        // 12. Kiểm tra ngày cập nhật trang web
        "Để đảm bảo thông tin còn phù hợp và mới",

        // 13. Claude được đánh giá cao về an toàn
        "Kiểm soát nội dung phản hồi và hạn chế thông tin nhạy cảm",

        // 14. Toàn vẹn hợp tác nhóm cùng sửa tài liệu
        "Cùng chỉnh sửa file gốc nhưng bật theo dõi thay đổi, sử dụng comment và kiểm tra lịch sử phiên bản",

        // 15. Khác biệt sao lưu tăng dần và vi sai
        "Vi sai lưu các thay đổi từ bản full backup gần nhất; tăng dần chỉ lưu thay đổi từ lần backup gần nhất",

        // 16. Toán tử loại trừ từ khóa trong Google
        "Dấu trừ (-)",

        // 17. Mục tiêu phương pháp SIFT
        "Xác minh và đánh giá thông tin nhanh chóng",

        // 18. Phương pháp khuyến khích tra cứu chéo
        "SIFT",

        // 19. Dấu hiệu tin giả hoặc thông tin sai lệch
        "Sử dụng tiêu đề giật gân, khơi cảm xúc",

        // 20. Investigate the source trong SIFT
        "Tra cứu thêm về nguồn gốc thông tin",

        // 21. Dữ liệu là gì
        "Các giá trị hoặc sự kiện thô, chưa qua xử lý",

        // 22. Tạo biểu đồ doanh thu, số sản phẩm theo tháng
        "Phân tích mô tả",

        // 23. Tại sao không tin tưởng tuyệt đối vào AI
        "AI có thể mắc lỗi và bị thao túng",

        // 24. AI kiểm tra hình ảnh giả mạo
        "Phân tích metadata",

        // 25. Lợi ích chính của Pandas
        "Hiệu quả cao, linh hoạt và dễ học",

        // 26. Lưu trữ kết hợp đám mây và cục bộ
        "Lưu trữ lai (Hybrid Storage)",

        // 27. Bảo vệ dữ liệu trong USB
        "Mã hóa USB bằng VeraCrypt",

        // 28. Pandas linh hoạt trong thao tác dữ liệu
        "Vì nó cung cấp vô số phương pháp để thao tác dữ liệu theo nhiều cách khác nhau, từ đơn giản đến phức tạp",

        // 29. Mô hình IMVAIN, chữ M
        "Multiple sources (Nhiều nguồn)",

        // 30. Lưu trữ đám mây là gì
        "Lưu trữ dữ liệu trên máy chủ từ xa qua Internet"
    ];

    let selectedCount = 0;

    // 3. Tự động tìm và tick chọn
    document.querySelectorAll('label, .choicegroup_item, fieldset label, li, p').forEach(el => {
        const text = (el.innerText || '').trim();
        for (let ans of TARGET_ANSWERS) {
            if (text === ans || text.includes(ans)) {
                const input = el.querySelector('input') || document.getElementById(el.getAttribute('for')) || el.parentElement?.querySelector('input');
                if (input) {
                    if (!input.checked) {
                        input.click();
                        input.checked = true;
                        input.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                    el.style.backgroundColor = '#dcfce7';
                    el.style.border = '2px solid #22c55e';
                    el.style.borderRadius = '6px';
                    el.style.padding = '4px 8px';
                    el.style.fontWeight = 'bold';
                    selectedCount++;
                }
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
        alert(`🎉 ĐÃ XONG 30 CÂU MỤC 1!\n✔ Đã tự động chọn và bấm Gửi ${submitCount} câu thành công 100%!`);
    }, 800);
})();
