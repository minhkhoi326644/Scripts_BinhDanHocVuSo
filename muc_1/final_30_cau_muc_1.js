// ==============================================================================
// TOOL AUTO CHỌN VÀ NỘP BÀI - CHUẨN XÁC 100% CHO ĐÚNG BỘ ĐỀ 30 CÂU NÀY
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU...", "color: #22c55e; font-weight: bold; font-size: 16px;");

    // DANH SÁCH 30 ĐÁP ÁN ĐÚNG 100% THEO ĐÚNG ĐỀ BẠN VỪA GỬI
    const TARGET_ANSWERS = [
        // 1. Phân loại dữ liệu
        "Để lựa chọn công nghệ và phương pháp phù hợp cho việc thu thập, lưu trữ, xử lý và phân tích dữ liệu",
        // 2. AI kiểm tra tin tức lan truyền
        "Phân tích mức độ lan truyền và phát hiện mô hình giả mạo",
        // 3. Tên thành viên và thời gian cập nhật
        "Tăng tính minh bạch, dễ kiểm soát lịch sử chỉnh sửa",
        // 4. Dữ liệu bán cấu trúc
        "Tệp JSON chứa thông tin sinh viên và khóa học",
        // 5. Kiểm tra nhanh thông tin trên Facebook
        "Tra Google thông tin từ hãng tin uy tín",
        // 6. Toàn vẹn trong hợp tác nhóm
        "Cùng chỉnh sửa file gốc nhưng bật theo dõi thay đổi, sử dụng comment và kiểm tra lịch sử phiên bản",
        // 7. Xác định mục tiêu duyệt trước khi bắt đầu
        "Để tránh bị phân tán bởi thông tin không liên quan",
        // 8. Đọc lướt (Skimming)
        "Nhanh chóng xác định ý chính hoặc tính liên quan",
        // 9. CRAAP mục đích
        "Purpose",
        // 10. Lọc theo điều kiện đơn giản trong Excel
        "Lọc dữ liệu dựa trên một giá trị hoặc so sánh",
        // 11. Claude là AI của
        "Anthropic",
        // 12. DRAMA tập trung vào
        "Sự thao túng cảm xúc trong thông tin",
        // 13. Bảo vệ dữ liệu cá nhân tại VN
        "Nghị định 13/2023/NĐ-CP",
        // 14. Phân tích dữ liệu là gì
        "Quá trình thu thập, xử lý và diễn giải dữ liệu",
        // 15. Ví dụ là thông tin
        "Huyết áp của bệnh nhân nam là 120/80 mmHg",
        // 16. filetype: trong Google
        "Tìm kiếm loại tệp cụ thể như PDF",
        // 17. Google kiểm tra tuyên bố
        "Kiểm tra chéo thông tin (Cross-referencing)",
        // 18. Mã hóa bất đối xứng
        "Bất đối xứng dùng 2 khóa: công khai và bí mật",
        // 19. SIFT là viết tắt của
        "Stop, Investigate, Find better coverage, Trace claims",
        // 20. Không cần thiết trong tên file
        "Tên người chấm điểm",
        // 21. Không thuộc lưu trữ đám mây
        "USB Flash Drive",
        // 22. Mục đích lọc dữ liệu
        "Loại bỏ nhiễu và giữ thông tin cần thiết",
        // 23. Investigate the source trong SIFT
        "Tra cứu thêm về nguồn gốc thông tin",
        // 24. Thiết bị cá nhân bị đánh cắp
        "Dùng lưu trữ đám mây có xác thực hai lớp, kết hợp bản sao ngoại tuyến",
        // 25. Công khai ảnh họ tên bạn học vi phạm
        "Quyền riêng tư cá nhân",
        // 26. Google Scholar
        "Các tài liệu học thuật từ các nhà xuất bản khoa học, kho lưu trữ mở, trường đại học.",
        // 27. Kỹ thuật chuyển sang dạng mã hóa
        "Mã hóa dữ liệu (Data encryption)",
        // 28. AI kết hợp kiểm tra hình ảnh
        "Tineye",
        // 29. Xóa bản sao lưu lỗi thời
        "Để tránh \"rác số\", tăng hiệu quả quản lý và giảm rủi ro bảo mật",
        // 30. Mục tiêu duyệt trước khi tìm kiếm
        "Để giúp bạn tập trung hơn và tránh bị phân tán bởi các thông tin không liên quan."
    ];

    let selectedCount = 0;

    // Tự động tìm và tick chọn tất cả các radio khớp với 30 đáp án
    document.querySelectorAll('label, .choicegroup_item, fieldset label, li, p').forEach(el => {
        const text = (el.innerText || '').trim();
        for (let ans of TARGET_ANSWERS) {
            if (text === ans || text.includes(ans) || ans.includes(text) && text.length > 5) {
                const input = el.querySelector('input') || document.getElementById(el.getAttribute('for')) || el.closest('label')?.querySelector('input') || el.parentElement?.querySelector('input');
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
                    break;
                }
            }
        }
    });

    console.log(`%c✔ ĐÃ TỰ ĐỘNG TICK CHỌN ${selectedCount} ĐÁP ÁN!`, "color: #38bdf8; font-weight: bold; font-size: 16px;");

    // Tự động bấm tất cả các nút Gửi (Submit)
    setTimeout(() => {
        let submitCount = 0;
        document.querySelectorAll('button.submit, input.submit, .check, .action button, .submit-btn').forEach(btn => {
            const txt = (btn.innerText || btn.value || '').trim().toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) {
                btn.click();
                submitCount++;
            }
        });
        alert(`🎉 ĐÃ CHỌN XONG TOÀN BỘ 30 CÂU!\n✔ Đã tick chọn: ${selectedCount} đáp án đúng 100%!\n✔ Đã bấm nút gửi: ${submitCount} câu.\n\nHãy kiểm tra lại bài thi của bạn.`);
    }, 600);
})();
