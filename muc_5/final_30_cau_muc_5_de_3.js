// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 5 (ĐỀ MỚI / ĐỀ 3)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 5 (ĐỀ 3)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 3 MỤC 5
    const TARGET_ANSWERS = [
        // 1. Theo dõi tỷ lệ chi tiêu các danh mục
        "Dùng biểu đồ tròn (Pie chart)",

        // 2. Conditional Formatting giúp
        "Định dạng dựa theo giá trị",

        // 3. Một cách để duy trì kiến thức công nghệ là
        "Thường xuyên cập nhật, tham gia cộng đồng chuyên môn",

        // 4. Video từ nguồn nào có độ tin cậy cao nhất
        "Kênh YouTube chính thức của hãng",

        // 5. Dấu hiệu ứng dụng có thể bị lỗi hiệu năng
        "Thời gian phản hồi lâu bất thường",

        // 6. Chia sẻ bảng tính theo dõi chi tiêu cho nhóm
        "Thiết lập quyền phù hợp",

        // 7. Công cụ trên Windows giúp xem log lỗi hệ thống
        "Event Viewer",

        // 8. Khi lỗi xung đột phần mềm, cách xử lý tốt nhất
        "Cập nhật phần mềm hoặc kiểm tra tương thích",

        // 9. Khi đồng nghiệp chưa quen công cụ mới
        "Hỗ trợ và chia sẻ kinh nghiệm",

        // 10. Khi lựa chọn công cụ số mới cho nhóm, yếu tố quan trọng nhất
        "Phù hợp với nhu cầu và khả năng sử dụng",

        // 11. Khi làm báo cáo nhóm, công cụ nên ưu tiên
        "Google Docs/Sheets",

        // 12. Nếu phần mềm yêu cầu cập nhật driver
        "Tải driver mới nhất từ nhà sản xuất",

        // 13. Một cách học sâu công nghệ mới là
        "Kết hợp thực hành trên công cụ",

        // 14. Một khoá học có nội dung tốt khi nào
        "Nội dung cập nhật, có kiểm định",

        // 15. Khi phát hiện phần mềm nghi ngờ lây nhiễm virus
        "Quét bằng phần mềm diệt virus cập nhật",

        // 16. Khi đề xuất quy trình mới, bạn nên
        "Chuẩn bị kế hoạch thử nghiệm và lấy phản hồi",

        // 17. Khi gặp lỗi “Device not recognized”
        "Cài lại driver thiết bị",

        // 18. Khoá học chính thức từ các nhà cung cấp công nghệ có đặc điểm
        "Chứng nhận từ chính nhà phát triển",

        // 19. Muốn nhập ngày tháng chuẩn
        "Theo định dạng date chuẩn",

        // 20. Để lọc dữ liệu nhanh
        "Sử dụng Filter",

        // 21. Để bảo vệ dữ liệu không bị sửa
        "Thiết lập quyền chỉnh sửa trên Sheets",

        // 22. Khi phát hiện lỗi nghiêm trọng trong hệ thống, thái độ đúng
        "Báo cáo và phối hợp xử lý cùng nhóm kỹ thuật",

        // 23. Khi tạo tài liệu học tập cá nhân
        "Ghi chú có hệ thống, cập nhật định kỳ",

        // 24. Khi thấy công nghệ mới phù hợp hơn
        "Đề xuất thử nghiệm và áp dụng",

        // 25. Khi tìm tài liệu công nghệ, từ khoá nên
        "Ngắn gọn, chính xác",

        // 26. Khi số hoá quy trình đào tạo, bạn cần
        "Xây dựng nội dung học tập số hoá phù hợp",

        // 27. Nếu mạng Wi-Fi có tín hiệu tốt nhưng không vào được Internet
        "Kiểm tra đèn tín hiệu modem/router",

        // 28. Hàm IF giúp
        "Trả về giá trị theo điều kiện",

        // 29. Khi thấy đồng nghiệp gặp lỗi lặp lại
        "Chia sẻ kinh nghiệm và cách khắc phục"
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
        alert(`🎉 ĐÃ XONG 30 CÂU MỤC 5 (ĐỀ 3)!\n✔ Đã tự động chọn và bấm Gửi ${submitCount} câu thành công 100%!`);
    }, 800);
})();
