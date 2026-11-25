// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 5 (ĐỀ BỔ SUNG / ĐỀ 2)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 5 (ĐỀ 2)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 2 MỤC 5
    const TARGET_ANSWERS = [
        // 1. Thấy công nghệ mới phù hợp hơn
        "Đề xuất thử nghiệm và áp dụng",

        // 2. Phân quyền chỉnh sửa file online
        "Thiết lập quyền chia sẻ phù hợp",

        // 3. Biểu đồ thể hiện xu hướng tốt nhất
        "Line Chart",

        // 4. Tạo biểu đồ nhanh
        "Chọn dữ liệu → Insert → Chart",

        // 5. Đồng nghiệp gặp lỗi lặp lại
        "Chia sẻ kinh nghiệm và cách khắc phục",

        // 6. Lỗi Device not recognized
        "Cài lại driver thiết bị",

        // 7. Lọc tài liệu AI hiệu quả
        "Theo chủ đề + năm xuất bản",

        // 8. Tạo tài liệu học tập cá nhân
        "Ghi chú có hệ thống, cập nhật định kỳ",

        // 9. Lỗi boot chậm
        "Kiểm tra ứng dụng khởi động cùng máy",

        // 10. Lỗi phần mềm lặp lại sau khi sửa
        "Kiểm tra log lỗi và tra cứu bản vá (patch)",

        // 11. Lỗi blue screen
        "Ghi lại mã lỗi để tra cứu nguyên nhân",

        // 12. Khóa học có nội dung tốt khi
        "Nội dung cập nhật, có kiểm định",

        // 13. Lỗi logic
        "Hàm tính toán cho kết quả sai",

        // 14. Nhập danh sách chọn
        "Data Validation (Drop down list)",

        // 15. Mở rộng quy trình số hóa thành công
        "Đào tạo nhân sự sử dụng thành thạo công cụ số",

        // 16. Tài liệu học không rõ nguồn
        "Kiểm tra độ tin cậy của tác giả và nguồn",

        // 17. Học sâu công nghệ mới
        "Kết hợp thực hành trên công cụ",

        // 18. Biểu đồ cột dùng để
        "So sánh các nhóm dữ liệu",

        // 19. Runtime error xảy ra khi
        "Chương trình đang chạy",

        // 20. Thái độ khi gặp lỗi bảo mật
        "Báo cáo quản trị viên hoặc bộ phận kỹ thuật",

        // 21. Theo dõi tỷ lệ chi tiêu các danh mục
        "Dùng biểu đồ tròn (Pie chart)",

        // 22. Số hóa quy trình báo cáo
        "Dùng Google Sheets hoặc các công cụ số khác",

        // 23. Nguồn tài liệu chính thức học công nghệ mới
        "Trang web của nhà phát triển phần mềm",

        // 24. Phân tích hiệu quả quy trình mới
        "Thu thập và phân tích dữ liệu thực tế",

        // 25. Đồng nghiệp chưa quen công cụ mới
        "Hỗ trợ và chia sẻ kinh nghiệm",

        // 26. Conditional Formatting giúp
        "Định dạng dựa theo giá trị",

        // 27. Ô (cell) trong Google Sheets
        "Đơn vị nhỏ nhất để nhập dữ liệu",

        // 28. Không kết nối được Wi-Fi sau khi cài lại Windows
        "Cài driver card mạng",

        // 29. Nhập dữ liệu tiền tệ chính xác
        "Đặt định dạng tiền tệ",

        // 30. Cần tài liệu học nâng cao
        "Tìm khoá học hoặc tài liệu chính thức từ hãng phát triển"
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
        alert(`🎉 ĐÃ XONG 30 CÂU MỤC 5 (ĐỀ 2)!\n✔ Đã tự động chọn và bấm Gửi ${submitCount} câu thành công 100%!`);
    }, 800);
})();
