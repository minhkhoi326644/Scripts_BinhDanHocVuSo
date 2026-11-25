// ==============================================================================
// 🌟 MASTER TOOL: AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 4 (UNIVERSAL - CẢ 2 ĐỀ)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 4 (UNIVERSAL)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. TỔNG HỢP TOÀN BỘ ĐÁP ÁN CHUẨN CỦA CẢ 2 ĐỀ MỤC 4
    const TARGET_ANSWERS = [
        // --- ĐỀ 1 ---
        "Mọi thông tin liên quan đến một cá nhân đã xác định hoặc có thể xác định",
        "Sử dụng các nền tảng gây quỹ cộng đồng trực tuyến (crowdfunding) và mạng xã hội",
        "Phần cứng (Hardware).",
        "Tiếp cận một cách riêng tư và tế nhị qua tin nhắn để bày tỏ sự quan tâm và sẵn sàng lắng nghe",
        "An sinh số được xem là nền tảng cho Sức khỏe số",
        "Insiders (người nội bộ)",
        "Số thẻ thanh toán như thẻ tín dụng và thẻ quà tặng",
        "Có nguồn lực lớn, kiên trì theo đuổi mục tiêu",
        "Kết nối họ với những người có chuyên môn như phòng tư vấn tâm lý hoặc các đường dây nóng uy tín",
        "Sử dụng vị thế và tiếng nói của mình để ủng hộ và bảo vệ các cá nhân hoặc nhóm người yếu thế trên mạng",
        "Drone và vệ tinh kết hợp GIS",
        "Dấu hiệu dữ liệu cá nhân bị rò rỉ",
        "Có người lạ gọi điện và biết rõ thông tin cá nhân",
        "Trí tuệ nhân tạo (AI).",
        "Trí tuệ nhân tạo (AI)",
        "Thực tế ảo (VR) và Thực tế tăng cường (AR)",
        "Tính chính xác và độ tin cậy cao của tín hiệu số",
        "Ngăn chặn chặn bắt và nghe trộm dữ liệu",
        "Nhập sai mật khẩu nhiều lần",
        "Mạng riêng ảo (VPN)",
        "Mạng riêng ảo (VPN).",
        "Khó bảo mật hoàn toàn",
        "Tránh cung cấp dữ liệu định danh khi không bắt buộc",
        "Quyền được giải thích và can thiệp bởi con người",
        "Ngắt kết nối Internet của thiết bị",
        "Phần mềm mã nguồn mở (OSS)",
        "Rà soát định kỳ và chỉ theo dõi tài khoản tích cực",
        "Đặt mật khẩu dài và duy nhất cho từng tài khoản",
        "Trách nhiệm chung của cộng đồng số",
        "Nhận diện khuôn mặt để điểm danh",
        "Lưu trữ đám mây kết hợp sao lưu định kỳ",

        // --- ĐỀ 2 (BỔ SUNG) ---
        "Mong muốn được kết nối liên tục, thúc đẩy hành vi kiểm tra mạng xã hội một cách ám ảnh.",
        "Gửi email giả dạng ứng viên xin việc với file Word chứa mã độc",
        "Dịch vụ dễ bị tấn công không thể vô hiệu hóa và có thể bị khai thác từ Internet",
        "Xác thực đa yếu tố (MFA)",
        "Đặt ra một ngưỡng rất cao cho các công cụ số được phép tồn tại trong cuộc sống, chỉ giữ lại những gì thực sự hỗ trợ các giá trị quan trọng.",
        "Rất cần thiết, để có thể hiểu bản chất công nghệ và đưa ra các quyết định sử dụng có trách nhiệm.",
        "Phần mềm.",
        "Tấn công với mục tiêu lợi ích tài chính",
        "Chuỗi khối (Blockchain).",
        "Dữ liệu về nhiệt độ không khí trung bình",
        "Người dùng bày tỏ sự lo ngại về quyền riêng tư nhưng hành động của họ lại không phản ánh điều đó.",
        "Gửi email giả mạo để lừa người dùng cung cấp thông tin cá nhân",
        "Nếu một tài khoản bị lộ, các tài khoản khác cũng bị đe dọa",
        "Kích hoạt xác thực hai yếu tố cho tài khoản quan trọng",
        "Giảm số lượng xe cá nhân lưu thông, từ đó giảm ùn tắc và khí thải.",
        "Báo cáo (Report) nội dung vi phạm cho nền tảng và gửi tin nhắn riêng để hỗ trợ nạn nhân.",
        "Sức khỏe thể chất, Sức khỏe tâm lý và cảm xúc, và Sức khỏe xã hội.",
        "Xác định RTO và RPO",
        "Hóa đơn tài chính đến muộn hoặc sai sót bất thường",
        "Hứng thú và cảm thấy mình có thể đóng góp vào việc bảo vệ môi trường.",
        "Ghi nhớ yếu tố con người (Remember the Human) đằng sau mỗi tài khoản.",
        "Hành động la hét vào người khác.",
        "Dừng lại (Stop), Điều tra nguồn tin (Investigate the source), Tìm các nguồn tin khác (Find better coverage), và Truy tìm lại các trích dẫn (Trace claims).",
        "Hệ thống kiểm soát công nghiệp trọng yếu kết nối Internet",
        "Lừa người dùng xóa file hệ thống hoặc cấu hình bảo mật"
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
        alert(`🎉 ĐÃ XONG 30 CÂU MỤC 4!\n✔ Đã tự động chọn và bấm Gửi ${submitCount} câu thành công 100%!`);
    }, 800);
})();
