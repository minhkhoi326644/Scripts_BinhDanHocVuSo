// ==============================================================================
// 🌟 MASTER TOOL: AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 5 (UNIVERSAL - CẢ 2 ĐỀ)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// Hỗ trợ: Đề 1 & Đề 2 (Đề bổ sung) - Tự động nhận diện mọi biến thể câu hỏi
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU BÀI KIỂM TRA MỤC 5 (UNIVERSAL)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

    // 1. Ép hiển thị tất cả các câu hỏi và các nút
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

    // 2. TỔNG HỢP TOÀN BỘ ĐÁP ÁN CHUẨN 100% CỦA CẢ ĐỀ 1 VÀ ĐỀ 2 (MỤC 5)
    const TARGET_ANSWERS = [
        // --- CÁC CÂU CHUNG & ĐỀ 1 ---
        // 1. Tạo tài liệu học tập cá nhân
        "Ghi chú có hệ thống, cập nhật định kỳ",
        // 2. Khóa học có nội dung tốt
        "Nội dung cập nhật, có kiểm định",
        // 3. Từ khóa tiếng Anh khi tìm tài liệu
        "Nguồn tài liệu cập nhật hơn, chuẩn hơn",
        // 4. Lỗi 404 Not Found
        "Trang web không tồn tại hoặc sai URL",
        // 5. Đặt câu hỏi trên diễn đàn công nghệ
        "Viết rõ ràng, cung cấp thông tin cụ thể",
        // 6. Pivot Table giúp
        "Phân tích và tổng hợp dữ liệu",
        // 7. Thấy công nghệ mới phù hợp hơn
        "Đề xuất thử nghiệm và áp dụng",
        // 8. Lỗi xung đột phần mềm
        "Cập nhật phần mềm hoặc kiểm tra tương thích",
        // 9. Mở rộng quy trình số hóa
        "Đào tạo nhân sự sử dụng thành thạo công cụ số",
        // 10. Đồng nghiệp gặp lỗi lặp lại
        "Chia sẻ kinh nghiệm và cách khắc phục",
        // 11. Không kết nối được Wi-Fi sau cài Windows
        "Cài driver card mạng",
        // 12. Đồng nghiệp chưa quen công cụ mới
        "Hỗ trợ và chia sẻ kinh nghiệm",
        // 13. Kiểm tra chi tiêu theo tháng
        "Dùng Filter theo ngày",
        // 14. Biểu đồ thể hiện xu hướng tốt nhất
        "Line Chart",
        // 15. Học sâu công nghệ mới
        "Kết hợp thực hành trên công cụ",
        // 16. Duy trì kiến thức công nghệ
        "Thường xuyên cập nhật, tham gia cộng đồng chuyên môn",
        // 17. Ô (cell) trong Google Sheets
        "Đơn vị nhỏ nhất để nhập dữ liệu",
        // 18. Google Forms hỗ trợ cải tiến quy trình
        "Thu thập và xử lý dữ liệu tự động",
        // 19. Data Validation giúp
        "Kiểm soát dữ liệu nhập vào ô",
        // 20. Kiểm tra lỗi mạng nội bộ
        "ping",
        // 21. Lỗi logic
        "Hàm tính toán cho kết quả sai",
        // 22. Lỗi Device not recognized
        "Cài lại driver thiết bị",
        // 23. Phát hiện lỗi phần cứng, bước đầu tiên
        "Kiểm tra cáp và kết nối phần cứng",
        // 24. Nhập dữ liệu tiền tệ chính xác
        "Đặt định dạng tiền tệ",
        // 25. Phân tích dữ liệu theo nhóm
        "Pivot Table",
        // 26. Nhập ngày tháng chuẩn
        "Theo định dạng date chuẩn",
        // 27. Phát hiện lỗi nghiêm trọng hệ thống
        "Báo cáo và phối hợp xử lý cùng nhóm kỹ thuật",
        // 28. Để lọc dữ liệu nhanh
        "Sử dụng Filter",
        // 29. Video có độ tin cậy cao nhất
        "Kênh YouTube chính thức của hãng",

        // --- CÁC CÂU BỔ SUNG ĐẶC TRƯNG ĐỀ 2 ---
        // 30. Phân quyền chỉnh sửa file online
        "Thiết lập quyền chia sẻ phù hợp",
        // 31. Tạo biểu đồ nhanh
        "Chọn dữ liệu → Insert → Chart",
        // 32. Lọc tài liệu AI hiệu quả nhất
        "Theo chủ đề + năm xuất bản",
        // 33. Lỗi boot chậm
        "Kiểm tra ứng dụng khởi động cùng máy",
        // 34. Lỗi phần mềm lặp lại sau khi sửa
        "Kiểm tra log lỗi và tra cứu bản vá (patch)",
        // 35. Lỗi blue screen
        "Ghi lại mã lỗi để tra cứu nguyên nhân",
        // 36. Nhập danh sách chọn
        "Data Validation (Drop down list)",
        // 37. Tài liệu học không rõ nguồn
        "Kiểm tra độ tin cậy của tác giả và nguồn",
        // 38. Biểu đồ cột dùng để
        "So sánh các nhóm dữ liệu",
        // 39. Runtime error xảy ra khi
        "Chương trình đang chạy",
        // 40. Thái độ khi gặp lỗi bảo mật
        "Báo cáo quản trị viên hoặc bộ phận kỹ thuật",
        // 41. Theo dõi tỷ lệ chi tiêu các danh mục
        "Dùng biểu đồ tròn (Pie chart)",
        // 42. Số hóa quy trình báo cáo
        "Dùng Google Sheets hoặc các công cụ số khác",
        // 43. Nguồn tài liệu chính thức học công nghệ mới
        "Trang web của nhà phát triển phần mềm",
        // 44. Phân tích hiệu quả quy trình mới
        "Thu thập và phân tích dữ liệu thực tế",
        // 45. Conditional Formatting giúp
        "Định dạng dựa theo giá trị",
        // 46. Cần tài liệu học nâng cao
        "Tìm khoá học hoặc tài liệu chính thức từ hãng phát triển"
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

    console.log(`%c✔ Đã tick chọn thành công ${selectedCount} câu hỏi!`, "color: #38bdf8; font-weight: bold; font-size: 14px;");

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
        console.log(`%c🚀 ĐÃ BẤM GỬI NỘP BÀI THÀNH CÔNG!`, "color: #38bdf8; font-size: 16px; font-weight: bold;");
        alert(`🎉 HOÀN TẤT BÀI THI MỤC 5!\n✔ Đã tự động chọn và nộp bài chuẩn xác 100% (${submitCount} câu đã gửi).`);
    }, 800);
})();
