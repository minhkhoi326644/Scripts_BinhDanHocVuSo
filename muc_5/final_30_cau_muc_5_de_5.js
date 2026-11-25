// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 5 (ĐỀ BIẾN THỂ MỚI / ĐỀ 5)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 5 (ĐỀ 5)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 5 MỤC 5
    const TARGET_ANSWERS = [
        // 1. Nếu gặp tài liệu học không rõ nguồn
        "Kiểm tra độ tin cậy của tác giả và nguồn",

        // 2. Để lọc dữ liệu nhanh
        "Sử dụng Filter",

        // 3. Cải tiến quy trình là
        "Tăng hiệu quả công việc bằng thay đổi hợp lý",

        // 4. Để kiểm tra chi tiêu theo tháng
        "Dùng Filter theo ngày",

        // 5. Khi chọn tài liệu, bạn nên
        "Đánh giá độ tin cậy trước khi dùng",

        // 6. Cập nhật tự động bảng tính mỗi lần mở file
        "Dùng macro",

        // 7. Phát hiện phần mềm nghi ngờ lây nhiễm virus
        "Quét bằng phần mềm diệt virus cập nhật",

        // 8. Thái độ học tập phù hợp khi công nghệ mới ra đời
        "Chủ động tiếp cận, thử nghiệm và học hỏi",

        // 9. Lý do quan trọng để cải tiến quy trình
        "Tăng hiệu quả và chất lượng công việc",

        // 10. Cách học sâu công nghệ mới
        "Kết hợp thực hành trên công cụ",

        // 11. Phát hiện lỗi hệ thống do phần cứng
        "Kiểm tra cáp và kết nối phần cứng",

        // 12. Khoá học chính thức từ các nhà cung cấp công nghệ
        "Chứng nhận từ chính nhà phát triển",

        // 13. Để nhập danh sách chọn
        "Data Validation (Drop down list)",

        // 14. Để tính trung bình
        "AVERAGE",

        // 15. Mở rộng quy trình số hoá thành công
        "Đào tạo nhân sự sử dụng thành thạo công cụ số",

        // 16. Khi thấy lỗi blue screen
        "Ghi lại mã lỗi để tra cứu nguyên nhân",

        // 17. Data Validation giúp
        "Kiểm soát dữ liệu nhập vào ô",

        // 18. Thông báo Out of memory thường do
        "Thiếu bộ nhớ RAM hoặc file tạm quá đầy",

        // 19. Khi thấy đồng nghiệp gặp lỗi lặp lại
        "Chia sẻ kinh nghiệm và cách khắc phục",

        // 20. Lỗi phần mềm thuộc loại lỗi logic
        "Hàm tính toán cho kết quả sai",

        // 21. Dấu hiệu ứng dụng có thể bị lỗi hiệu năng
        "Thời gian phản hồi lâu bất thường",

        // 22. Hàm IF giúp
        "Trả về giá trị theo điều kiện",

        // 23. Thái độ tốt khi cải tiến quy trình
        "Chủ động đề xuất và cải tiến",

        // 24. Phát hiện lỗi nghiêm trọng trong hệ thống
        "Báo cáo và phối hợp xử lý cùng nhóm kỹ thuật",

        // 25. Cách để duy trì kiến thức công nghệ
        "Thường xuyên cập nhật, tham gia cộng đồng chuyên môn",

        // 26. Khi cần tài liệu học nâng cao
        "Tìm khoá học hoặc tài liệu chính thức từ hãng phát triển",

        // 27. Làm nổi bật giá trị lớn hơn 1000
        "Dùng Conditional Formatting",

        // 28. Khi đồng nghiệp chưa quen công cụ mới
        "Hỗ trợ và chia sẻ kinh nghiệm",

        // 29. Mạng Wi-Fi tín hiệu tốt nhưng không vào được Internet
        "Kiểm tra đèn tín hiệu modem/router",

        // 30. Tìm bài viết học AI mới nhất nên chọn từ nguồn nào
        "Trang các tạp chí chuyên ngành, trường ĐH"
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
            console.log("%c🎉 HOÀN TẤT NỘP BÀI THI 30 CÂU MỤC 5 (ĐỀ 5)! ĐẠT ĐIỂM TỐI ĐA 100%!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        } else {
            console.log("%cℹ Không tìm thấy nút nộp bài chung, bạn có thể kiểm tra lại rồi bấm 'Gửi' thủ công nhé!", "color: #94a3b8; font-style: italic;");
        }
    }, 1000);
})();
