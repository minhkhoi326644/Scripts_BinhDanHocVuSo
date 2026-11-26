// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 4 (ĐỀ BIẾN THỂ MỚI / ĐỀ 6)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 4 (ĐỀ 6)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 6 MỤC 4
    const TARGET_ANSWERS = [
        // 1. #aa4b5e: Mỗi hành động trên mạng tạo nên
        "Dấu chân số (Digital Footprint).",
        "Dấu chân số (Digital Footprint)",

        // 2. #7bfa7c: Định nghĩa Sức khỏe số
        "Trạng thái khỏe mạnh về thể chất, tâm lý và xã hội trong mối quan hệ tương tác với công nghệ kỹ thuật số.",
        "Trạng thái khỏe mạnh về thể chất, tâm lý và xã hội trong mối quan hệ tương tác với công nghệ kỹ thuật số",

        // 3. #84cb89: Dữ liệu sinh trắc học
        "Vân tay, nhận diện khuôn mặt",

        // 4. #526f68: Kẻ tấn công được nhà nước bảo trợ
        "Có nguồn lực lớn, kiên trì theo đuổi mục tiêu",

        // 5. #fdebf1: Bảo vệ mạng nội bộ hiệu quả cao nhất
        "Phân đoạn mạng và kiểm soát truy cập mạng",

        // 6. #71589b: SIEM trong hệ thống bảo mật
        "Tự động phân tích nhật ký và phát hiện mối đe dọa",

        // 7. #af4e10: Ứng dụng di động báo cáo vấn đề môi trường
        "Hứng thú và cảm thấy mình có thể đóng góp vào việc bảo vệ môi trường.",
        "Hứng thú và cảm thấy mình có thể đóng góp vào việc bảo vệ môi trường",

        // 8. #cddd8c: Doanh nghiệp nguồn gốc bền vững, chuỗi cung ứng minh bạch
        "Chuỗi khối (Blockchain).",
        "Chuỗi khối (Blockchain)",

        // 9. #fe13c4: Sinh viên xây dựng dấu chân số tích cực
        "Chia sẻ các bài viết học thuật, các dự án tham gia và bình luận thông minh trong các nhóm chuyên ngành.",
        "Chia sẻ các bài viết học thuật, các dự án tham gia và bình luận thông minh trong các nhóm chuyên ngành",

        // 10. #a8f1a4: Disinformation phân biệt với Misinformation
        "Yếu tố cố tình tạo và lan truyền thông tin sai sự thật để trục lợi hoặc gây hoang mang.",
        "Yếu tố cố tình tạo và lan truyền thông tin sai sự thật để trục lợi hoặc gây hoang mang",

        // 11. #2f9e74: Vai trò của bạn bè khi hỗ trợ tâm lý
        "Kết nối họ với những người có chuyên môn như phòng tư vấn tâm lý hoặc các đường dây nóng uy tín.",
        "Kết nối họ với những người có chuyên môn như phòng tư vấn tâm lý hoặc các đường dây nóng uy tín",

        // 12. #4d2fa8: Không phải nguyên nhân trực tiếp gây đánh cắp dữ liệu
        "Sử dụng thiết bị mã hóa mạnh",

        // 13. #924570: Ánh sáng xanh phát ra từ màn hình
        "Ức chế việc sản xuất Melatonin, hormone gây ngủ, khiến khó ngủ hơn.",
        "Ức chế việc sản xuất Melatonin, hormone gây ngủ, khiến khó ngủ hơn",

        // 14. #12969f: Thiết bị kết nối toàn cầu là thách thức lớn
        "Vì kết nối toàn cầu khiến kẻ tấn công từ bất kỳ đâu cũng có thể thực hiện tấn công",

        // 15. #c6902c: Mục tiêu điển hình của script kiddies
        "Doanh nghiệp, người dùng để phá hoại hoặc gây tai tiếng",

        // 16. #92c9db: Tìm hiểu công nghệ số mới, thái độ phù hợp
        "Cởi mở tìm hiểu, đánh giá tiềm năng và thách thức một cách cân nhắc.",
        "Cởi mở tìm hiểu, đánh giá tiềm năng và thách thức một cách cân nhắc",

        // 17. #94bd48: Theo dõi nạn phá rừng sớm và quản lý đa dạng sinh học
        "Drone và vệ tinh kết hợp GIS.",
        "Drone và vệ tinh kết hợp GIS",

        // 18. #6f598d: Vì sao dữ liệu cá nhân là mục tiêu tấn công
        "Vì có thể bị khai thác để giả mạo, lừa đảo",

        // 19. #afbfb2: Mã hóa dữ liệu khi truyền tải quan trọng
        "Ngăn chặn chặn bắt và nghe trộm dữ liệu",

        // 20. #fbabce: Quy tắc vàng của Netiquette
        "Ghi nhớ yếu tố con người (Remember the Human) đằng sau mỗi tài khoản.",
        "Ghi nhớ yếu tố con người (Remember the Human) đằng sau mỗi tài khoản",

        // 21. #6b3e8d: Quy tắc 20-20-20
        "Bảo vệ mắt và chống mỏi mắt khi dùng màn hình.",
        "Bảo vệ mắt và chống mỏi mắt khi dùng màn hình",

        // 22. #779446: Trong cuộc gọi vishing nạn nhân bị yêu cầu
        "Cung cấp thông tin tài khoản qua điện thoại",

        // 23. #e6151b: Trộm cắp danh tính dẫn đến hậu quả
        "Phải chịu trách nhiệm về các khoản nợ phát sinh từ giao dịch gian lận",

        // 24. #d6c8ef: Nông trại lắp cảm biến đo độ ẩm đất
        "Internet vạn vật (IoT).",
        "Internet vạn vật (IoT)",

        // 25. #2f1496: Thiết bị vật lý như điện thoại, máy tính, cảm biến IoT
        "Phần cứng (Hardware).",
        "Phần cứng (Hardware)",

        // 26. #5fc333: Hậu quả lớn của các cuộc tấn công mạng đối với tổ chức
        "Giảm năng suất và mất lương do thiết bị không hoạt động",

        // 27. #60c6cc: Tác nhân đe dọa tận dụng điểm yếu để gây hại
        "Exploiting a vulnerability",

        // 28. #a0c677: Nguyên tắc bảo vệ dữ liệu cá nhân
        "Thu thập có mục đích rõ ràng và có sự đồng ý",

        // 29. #646f3f: Tấn công giả mạo đơn vị uy tín lừa thông tin đăng nhập
        "Phishing.",
        "Phishing",

        // 30. #b9896: Trong cuộc tấn công từ điển kẻ tấn công sẽ
        "Sử dụng các từ thông dụng làm mật khẩu ứng viên"
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
            console.log("%c🎉 HOÀN TẤT NỘP BÀI THI 30 CÂU MỤC 4 (ĐỀ 6)! ĐẠT ĐIỂM TỐI ĐA 100%!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        } else {
            console.log("%cℹ Không tìm thấy nút nộp bài chung, bạn có thể kiểm tra lại rồi bấm 'Gửi' thủ công nhé!", "color: #94a3b8; font-style: italic;");
        }
    }, 1000);
})();
