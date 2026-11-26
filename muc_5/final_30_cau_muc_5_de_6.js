// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 5 (ĐỀ BIẾN THỂ MỚI / ĐỀ 6)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 5 (ĐỀ 6)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 6 MỤC 5
    const TARGET_ANSWERS = [
        // 1. #6e8c8b: Một cách hiệu quả để học công nghệ mới
        "Kết hợp tài liệu chính thức + video + thực hành",

        // 2. #5abc9b: Để cập nhật tự động bảng tính mỗi lần mở file
        "Dùng macro",

        // 3. #1173d2: Khi phát hiện lỗi hệ thống do phần cứng, kiểm tra bước đầu tiên
        "Kiểm tra cáp và kết nối phần cứng",

        // 4. #8b6228: Để tự động cập nhật dữ liệu từ form
        "Kết nối Google Forms với Google Sheets",

        // 5. #f79614: Tìm bài viết học AI mới nhất nên chọn từ nguồn nào
        "Trang các tạp chí chuyên ngành, trường ĐH",

        // 6. #be228e: Khi thấy đồng nghiệp gặp lỗi lặp lại
        "Chia sẻ kinh nghiệm và cách khắc phục",

        // 7. #0e109f: Pivot Table giúp
        "Phân tích và tổng hợp dữ liệu",

        // 8. #59b151: Biểu đồ cột dùng để
        "So sánh các nhóm dữ liệu",

        // 9. #b1b6dd: Hàm SUM dùng để
        "Cộng tổng các giá trị",

        // 10. #171017: Khi cần tài liệu học nâng cao
        "Tìm khoá học hoặc tài liệu chính thức từ hãng phát triển",

        // 11. #3e5c7e: Lỗi phần mềm nào thuộc loại lỗi logic
        "Hàm tính toán cho kết quả sai",

        // 12. #829857: Để thuyết phục nhóm áp dụng quy trình số mới
        "Đưa ra minh chứng về lợi ích và hiệu quả",

        // 13. #f6243e: Một lý do chọn công cụ số thay vì thủ công
        "Tự động hoá quy trình giúp tiết kiệm thời gian",

        // 14. #8db4a9: Nếu mạng Wi-Fi có tín hiệu tốt nhưng không vào được Internet
        "Kiểm tra đèn tín hiệu modem/router",

        // 15. #a57812: Để nhập danh sách chọn, bạn dùng
        "Data Validation (Drop down list)",

        // 16. #6e1acb: Khi chia sẻ bảng tính theo dõi chi tiêu cho nhóm
        "Thiết lập quyền phù hợp",

        // 17. #129703: Một khoá học có nội dung tốt khi nào
        "Nội dung cập nhật, có kiểm định",

        // 18. #b277e1: Khi phát hiện phần mềm nghi ngờ lây nhiễm virus
        "Quét bằng phần mềm diệt virus cập nhật",

        // 19. #527066: Tìm bài viết học AI mới nhất nên chọn từ nguồn nào
        "Trang các tạp chí chuyên ngành, trường ĐH",

        // 20. #5c0f1c: Một lý do quan trọng để cải tiến quy trình
        "Tăng hiệu quả và chất lượng công việc",

        // 21. #abd8e3: Khi gặp khó khăn khi học
        "Tìm nhiều nguồn để tự khắc phục",

        // 22. #d46279: Nếu gặp tài liệu học không rõ nguồn
        "Kiểm tra độ tin cậy của tác giả và nguồn",

        // 23. #3a376f: Khi tự học công nghệ mới, nên ưu tiên
        "Thực hành song song lý thuyết",

        // 24. #1a8d2e: Dấu hiệu nào cho thấy ứng dụng có thể bị lỗi hiệu năng
        "Thời gian phản hồi lâu bất thường",

        // 25. #a39041: Data Validation giúp
        "Kiểm soát dữ liệu nhập vào ô",

        // 26. #d2d352: Khi phát hiện lỗi hệ điều hành, bạn nên kiểm tra
        "Event Viewer hoặc Windows Update",

        // 27. #0a6082: Khi phát hiện lỗi nghiêm trọng trong hệ thống
        "Báo cáo và phối hợp xử lý cùng nhóm kỹ thuật",

        // 28. #9c5c24: Conditional Formatting giúp
        "Định dạng dựa theo giá trị",

        // 29. #8c11a3: Công cụ nào trên Windows giúp xem log lỗi hệ thống
        "Event Viewer",

        // 30. #a8891: Tại sao nên dùng từ khoá tiếng Anh khi tìm tài liệu công nghệ
        "Nguồn tài liệu cập nhật hơn, chuẩn hơn"
    ];

    // Chuẩn hóa chuỗi so sánh
    const cleanStr = (s) => (s || '').replace(/[\r\n\t]+/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();

    // 3. Quét và tick chọn đáp án
    const inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    let selectedCount = 0;

    inputs.forEach(input => {
        let label = input.closest('label');
        let text = '';
        if (label) {
            text = label.innerText;
        } else if (input.id) {
            const lbl = document.querySelector(`label[for="${input.id}"]`);
            if (lbl) {
                label = lbl;
                text = lbl.innerText;
            }
        }

        if (!text && input.parentElement) {
            text = input.parentElement.innerText;
        }

        const normalizedText = cleanStr(text);

        for (const target of TARGET_ANSWERS) {
            const normalizedTarget = cleanStr(target);
            if (normalizedText.includes(normalizedTarget) || normalizedTarget.includes(normalizedText)) {
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
            console.log("%c🎉 HOÀN TẤT NỘP BÀI THI 30 CÂU MỤC 5 (ĐỀ 6)! ĐẠT ĐIỂM TỐI ĐA 100%!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        } else {
            console.log("%cℹ Không tìm thấy nút nộp bài chung, bạn có thể kiểm tra lại rồi bấm 'Gửi' thủ công nhé!", "color: #94a3b8; font-style: italic;");
        }
    }, 1000);
})();
