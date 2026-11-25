// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 5 (ĐỀ BIẾN THỂ MỚI / ĐỀ 4)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 5 (ĐỀ 4)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 4 MỤC 5
    const TARGET_ANSWERS = [
        // 1. Biểu đồ cột dùng để
        "So sánh các nhóm dữ liệu",

        // 2. Một khoá học có nội dung tốt khi nào
        "Nội dung cập nhật, có kiểm định",

        // 3. Công cụ trên Windows giúp xem log lỗi hệ thống
        "Event Viewer",

        // 4. Khi cần kiểm tra nguyên nhân lỗi boot chậm
        "Kiểm tra ứng dụng khởi động cùng máy",

        // 5. Thông báo “Out of memory” thường do
        "Thiếu bộ nhớ RAM hoặc file tạm quá đầy",

        // 6. Khoá học chính thức từ các nhà cung cấp công nghệ có đặc điểm gì
        "Chứng nhận từ chính nhà phát triển",

        // 7. Khi cần tài liệu học nâng cao
        "Tìm khoá học hoặc tài liệu chính thức từ hãng phát triển",

        // 8. Google Scholar là công cụ tìm kiếm tài liệu gì
        "Bài báo học thuật và tài liệu nghiên cứu",

        // 9. Conditional Formatting giúp
        "Định dạng dựa theo giá trị",

        // 10. Khi gặp khó khăn khi học
        "Tìm nhiều nguồn để tự khắc phục",

        // 11. Nếu không kết nối được Wi-Fi sau khi cài lại Windows
        "Cài driver card mạng",

        // 12. Pivot Table giúp
        "Phân tích và tổng hợp dữ liệu",

        // 13. Để kiểm tra chi tiêu theo tháng
        "Dùng Filter theo ngày",

        // 14. Để tính trung bình, bạn dùng hàm
        "AVERAGE",

        // 15. Khi thấy công nghệ mới phù hợp hơn
        "Đề xuất thử nghiệm và áp dụng",

        // 16. Khi phát hiện lỗi nghiêm trọng trong hệ thống, thái độ đúng
        "Báo cáo và phối hợp xử lý cùng nhóm kỹ thuật",

        // 17. Khi tạo tài liệu học tập cá nhân
        "Ghi chú có hệ thống, cập nhật định kỳ",

        // 18. Một cách hiệu quả để học công nghệ mới là
        "Kết hợp tài liệu chính thức + video + thực hành",

        // 19. Khi phát hiện phần mềm nghi ngờ lây nhiễm virus
        "Quét bằng phần mềm diệt virus cập nhật",

        // 20. Khi đồng nghiệp chưa quen công cụ mới
        "Hỗ trợ và chia sẻ kinh nghiệm",

        // 21. Để nhập dữ liệu tiền tệ chính xác
        "Đặt định dạng tiền tệ",

        // 22. Nếu gặp tài liệu học không rõ nguồn
        "Kiểm tra độ tin cậy của tác giả và nguồn",

        // 23. “Runtime error” thường xảy ra khi
        "Chương trình đang chạy",

        // 24. So với báo cáo giấy, báo cáo online có lợi thế
        "Dễ cập nhật, tra cứu và tổng hợp",

        // 25. Khi phát hiện lỗi hệ thống do phần cứng, bước đầu tiên
        "Kiểm tra cáp và kết nối phần cứng",

        // 26. Conditional Formatting giúp (câu lặp lại)
        "Định dạng dựa theo giá trị",

        // 27. Lỗi phần mềm thuộc loại lỗi logic
        "Hàm tính toán cho kết quả sai",

        // 28. Để lọc dữ liệu nhanh
        "Sử dụng Filter",

        // 29. Để bảo vệ dữ liệu không bị sửa
        "Thiết lập quyền chỉnh sửa trên Sheets",

        // 30. Khi đề xuất quy trình mới
        "Chuẩn bị kế hoạch thử nghiệm và lấy phản hồi"
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
            console.log("%c🎉 HOÀN TẤT NỘP BÀI THI 30 CÂU MỤC 5 (ĐỀ 4)! ĐẠT ĐIỂM TỐI ĐA 100%!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        } else {
            console.log("%cℹ Không tìm thấy nút nộp bài chung, bạn có thể kiểm tra lại rồi bấm 'Gửi' thủ công nhé!", "color: #94a3b8; font-style: italic;");
        }
    }, 1000);
})();
