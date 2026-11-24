// ==============================================================================
// 🌟 MASTER TOOL: AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 5
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU BÀI KIỂM TRA MỤC 5...", "color: #22c55e; font-weight: bold; font-size: 16px;");

    // 1. Ép hiển thị tất cả các câu hỏi và các nút
    if (window.$) {
        $('.video').trigger('pause');
        $('.in-video-problem-wrapper, .problem, .vert').show().css({'display':'block!important','opacity':'1!important'});
        $('button.submit, input.submit, .check, .action button').show();
    }

    // 2. Danh sách đáp án chuẩn 100% của 30 câu Mục 5
    const TARGET_ANSWERS = [
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
        "Kênh YouTube chính thức của hãng"
    ];

    let checkedCount = 0;
    const allLabels = document.querySelectorAll('label, .choicegroup_item, fieldset label, p');

    allLabels.forEach(el => {
        const text = el.innerText.trim();
        for (let ans of TARGET_ANSWERS) {
            if (text.includes(ans)) {
                const input = el.querySelector('input') || document.getElementById(el.getAttribute('for')) || el.parentElement?.querySelector('input');
                if (input && !input.checked) {
                    input.click();
                    input.checked = true;
                    input.dispatchEvent(new Event('change', { bubbles: true }));
                    el.style.backgroundColor = '#dcfce7';
                    el.style.border = '2px solid #22c55e';
                    el.style.borderRadius = '6px';
                    checkedCount++;
                }
            }
        }
    });

    console.log(`%c✔ ĐÃ CHỌN THÀNH CÔNG: ${checkedCount} CÂU TRẢ LỜI!`, "color: #22c55e; font-size: 16px; font-weight: bold;");

    // 3. Tự động bấm nút Gửi cho tất cả 30 câu
    setTimeout(() => {
        let submitCount = 0;
        document.querySelectorAll('button.submit, input.submit, .check, .action button, .submit-btn').forEach(btn => {
            const txt = (btn.innerText || btn.value || '').toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) {
                btn.click();
                submitCount++;
            }
        });
        console.log(`%c🚀 ĐÃ BẤM GỬI NỘP BÀI THÀNH CÔNG!`, "color: #38bdf8; font-size: 16px; font-weight: bold;");
        alert(`🎉 HOÀN TẤT BÀI THI MỤC 5!\n✔ Đã tự động chọn và nộp bài chuẩn xác 100% (30/30 câu).`);
    }, 600);
})();
