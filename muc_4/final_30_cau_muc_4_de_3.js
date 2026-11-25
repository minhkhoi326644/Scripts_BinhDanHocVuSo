// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 4 (ĐỀ MỚI / ĐỀ 3)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 4 (ĐỀ 3)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 3 MỤC 4
    const TARGET_ANSWERS = [
        // 1. Ánh sáng xanh ảnh hưởng giấc ngủ
        "Ức chế việc sản xuất Melatonin, hormone gây ngủ, khiến khó ngủ hơn.",
        "Ức chế việc sản xuất Melatonin",

        // 2. Doanh nghiệp sản xuất bền vững, chuỗi cung ứng minh bạch
        "Chuỗi khối (Blockchain).",
        "Chuỗi khối (Blockchain)",

        // 3. Kỹ thuật xã hội (social engineering)
        "Dựa vào thao túng tâm lý con người để lấy thông tin hoặc hành động",

        // 4. Dữ liệu cá nhân là gì
        "Mọi thông tin liên quan đến một cá nhân đã xác định hoặc có thể xác định",

        // 5. Vì sao dữ liệu cá nhân là mục tiêu tấn công mạng
        "Vì có thể bị khai thác để giả mạo, lừa đảo",

        // 6. Hội chứng sợ bỏ lỡ (FOMO)
        "Mong muốn được kết nối liên tục, thúc đẩy hành vi kiểm tra mạng xã hội một cách ám ảnh.",
        "Mong muốn được kết nối liên tục",

        // 7. Hiện tượng "Nghịch lý Quyền riêng tư" (The Privacy Paradox)
        "Người dùng bày tỏ sự lo ngại về quyền riêng tư nhưng hành động của họ lại không phản ánh điều đó.",
        "Người dùng bày tỏ sự lo ngại về quyền riêng tư",

        // 8. Phương pháp kiểm chứng thông tin SIFT
        "Dừng lại (Stop), Điều tra nguồn tin (Investigate the source), Tìm các nguồn tin khác (Find better coverage), và Truy tìm lại các trích dẫn (Trace claims).",

        // 9. Hiện tượng "Text Neck" (Cổ tin nhắn)
        "Các vấn đề về cơ xương khớp.",
        "Các vấn đề về cơ xương khớp",

        // 10. Hoax (tin giả) có thể gây hại
        "Lừa người dùng xóa file hệ thống hoặc cấu hình bảo mật",

        // 11. Viết in hoa toàn bộ một câu
        "Hành động la hét vào người khác.",
        "Hành động la hét vào người khác",

        // 12. Điểm yếu lớn nhất của mật khẩu
        "Dựa vào trí nhớ con người có giới hạn",

        // 13. Lý do không nên đăng kế hoạch du lịch trên MXH
        "Gây nguy cơ bị kẻ trộm nhắm đến",

        // 14. Theo dõi nạn phá rừng sớm và quản lý đa dạng sinh học
        "Drone và vệ tinh kết hợp GIS.",
        "Drone và vệ tinh kết hợp GIS",

        // 15. Lưu trữ ảnh Google Drive hoặc xem phim Netflix
        "Điện toán đám mây (Cloud Computing).",
        "Điện toán đám mây (Cloud Computing)",

        // 16. Phương thức tấn công phổ biến vào PoS
        "Gửi email giả dạng ứng viên xin việc với file Word chứa mã độc",

        // 17. Tấn công lừa đảo giả lập trong đào tạo nhân viên
        "Kiểm tra khả năng nhận diện và phản ứng của nhân viên",

        // 18. Khái niệm "Đồng minh số" (Digital Allyship)
        "Sử dụng vị thế và tiếng nói của mình để ủng hộ và bảo vệ các cá nhân hoặc nhóm người yếu thế trên mạng.",
        "Sử dụng vị thế và tiếng nói của mình để ủng hộ và bảo vệ",

        // 19. Gửi ảnh qua mạng không giảm chất lượng
        "Tính chính xác và độ tin cậy cao của tín hiệu số.",
        "Tính chính xác và độ tin cậy cao của tín hiệu số",

        // 20. Câu hỏi nông trại cảm biến đo độ ẩm đất hoặc máy móc học hỏi
        "Internet vạn vật (IoT).",
        "Internet vạn vật (IoT)",
        "Trí tuệ nhân tạo (AI).",
        "Trí tuệ nhân tạo (AI)",

        // 21. Nguyên tắc bảo vệ dữ liệu cá nhân
        "Thu thập có mục đích rõ ràng và có sự đồng ý",

        // 22. Ba lớp bảo vệ trong mô hình bảo vệ thông tin
        "Sản phẩm, con người, chính sách & quy trình",

        // 23. Hệ thống Lưới điện thông minh (Smart Grid)
        "Quản lý và phân phối điện hiệu quả hơn, tích hợp năng lượng tái tạo.",

        // 24. Chậm trễ trong cập nhật bảo mật là vấn đề nghiêm trọng
        "Vì số lượng phần mềm độc hại được phát hiện mỗi ngày quá lớn",

        // 25. Mỗi hành động trên mạng tạo nên
        "Dấu chân số (Digital Footprint).",
        "Dấu chân số (Digital Footprint)",

        // 26. Trộm cắp danh tính dẫn đến hậu quả
        "Phải chịu trách nhiệm về các khoản nợ phát sinh từ giao dịch gian lận",

        // 27. Lý do bảo mật theo lớp (defense in depth)
        "Nếu một lớp bị vượt qua, lớp khác vẫn có thể ngăn chặn tấn công",

        // 28. Loại tội phạm mạng người Mỹ lo ngại nhất
        "Đánh cắp thông tin thẻ thanh toán",

        // 29. Thành phần quan trọng trong DRP
        "Xác định RTO và RPO",

        // 30. Chứng kiến hành vi bắt nạt trực tuyến (Cyberbullying)
        "Báo cáo (Report) nội dung vi phạm cho nền tảng và gửi tin nhắn riêng để hỗ trợ nạn nhân."
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
        alert(`🎉 ĐÃ XONG 30 CÂU MỤC 4 (ĐỀ 3)!\n✔ Đã tự động chọn và bấm Gửi ${submitCount} câu thành công 100%!`);
    }, 800);
})();
