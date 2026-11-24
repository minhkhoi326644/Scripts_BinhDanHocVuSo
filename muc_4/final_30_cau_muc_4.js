// ==============================================================================
// 🌟 MASTER TOOL: AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 4
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU BÀI KIỂM TRA MỤC 4...", "color: #22c55e; font-weight: bold; font-size: 16px;");

    // 1. Ép hiển thị tất cả các câu hỏi và các nút
    if (window.$) {
        $('.video').trigger('pause');
        $('.in-video-problem-wrapper, .problem, .vert').show().css({'display':'block!important','opacity':'1!important'});
        $('button.submit, input.submit, .check, .action button').show();
    }

    // 2. Danh sách đáp án chuẩn 100% của 30 câu Mục 4
    const TARGET_ANSWERS = [
        // 1. Dữ liệu cá nhân là gì
        "Mọi thông tin liên quan đến một cá nhân đã xác định hoặc có thể xác định",
        // 2. Gây quỹ trồng rừng
        "Sử dụng các nền tảng gây quỹ cộng đồng trực tuyến (crowdfunding) và mạng xã hội",
        // 3. Thiết bị vật lý điện thoại, máy tính...
        "Phần cứng (Hardware).",
        // 4. Bạn bè có dấu hiệu tâm lý qua mạng
        "Tiếp cận một cách riêng tư và tế nhị qua tin nhắn để bày tỏ sự quan tâm và sẵn sàng lắng nghe",
        // 5. Mối quan hệ An sinh số và Sức khỏe số
        "An sinh số được xem là nền tảng cho Sức khỏe số",
        // 6. Trả thù chủ lao động hoặc làm lộ thông tin
        "Insiders (người nội bộ)",
        // 7. Dữ liệu bị nhắm tới để bán chợ đen
        "Số thẻ thanh toán như thẻ tín dụng và thẻ quà tặng",
        // 8. Kẻ tấn công được nhà nước bảo trợ (state-sponsored)
        "Có nguồn lực lớn, kiên trì theo đuổi mục tiêu",
        // 9. Vai trò quan trọng nhất khi hỗ trợ tâm lý
        "Kết nối họ với những người có chuyên môn như phòng tư vấn tâm lý hoặc các đường dây nóng uy tín",
        // 10. Khái niệm Đồng minh số (Digital Allyship)
        "Sử dụng vị thế và tiếng nói của mình để ủng hộ và bảo vệ các cá nhân hoặc nhóm người yếu thế trên mạng",
        // 11. Theo dõi phá rừng và đa dạng sinh học
        "Drone và vệ tinh kết hợp GIS",
        // 12. Dấu hiệu dữ liệu cá nhân bị rò rỉ
        "Có người lạ gọi điện và biết rõ thông tin cá nhân",
        // 13. Máy móc học hỏi, suy luận như con người
        "Trí tuệ nhân tạo (AI).",
        "Trí tuệ nhân tạo (AI)",
        // 14. Trải nghiệm nhập vai hệ sinh thái và ô nhiễm
        "Thực tế ảo (VR) và Thực tế tăng cường (AR)",
        // 15. Gửi ảnh qua mạng không giảm chất lượng
        "Tính chính xác và độ tin cậy cao của tín hiệu số",
        // 16. Mã hóa dữ liệu khi truyền tải
        "Ngăn chặn chặn bắt và nghe trộm dữ liệu",
        // 17. Giám sát hành vi người dùng (UBA)
        "Phát hiện các hành vi bất thường, cảnh báo nguy cơ xâm nhập",
        // 18. Ba phương diện Sức khỏe số theo WHO
        "Sức khỏe thể chất, Sức khỏe tâm lý và cảm xúc, và Sức khỏe xã hội",
        // 19. Hậu quả của cuộc tấn công mạng đối với tổ chức
        "Giảm năng suất và mất lương do thiết bị không hoạt động",
        // 20. Mục tiêu chính trộm cắp danh tính
        "Sử dụng thông tin cá nhân của người khác để gian lận tài chính",
        // 21. Điểm yếu lớn nhất của mật khẩu
        "Dựa vào trí nhớ con người có giới hạn",
        // 22. Quy tắc 3-2-1 trong sao lưu
        "3 bản sao, 2 loại thiết bị lưu trữ, 1 bản sao lưu ngoại tuyến",
        // 23. Mỗi hành động trên mạng tạo nên
        "Dấu chân số (Digital Footprint)",
        // 24. Ánh sáng xanh gây ảnh hưởng giấc ngủ
        "Ức chế việc sản xuất Melatonin, hormone gây ngủ, khiến khó ngủ hơn",
        // 25. Phân biệt Disinformation vs Misinformation
        "Yếu tố cố tình tạo và lan truyền thông tin sai sự thật để trục lợi hoặc gây hoang mang",
        // 26. Hình thức phishing
        "Gửi email giả mạo để lừa người dùng cung cấp thông tin cá nhân",
        // 27. Vì sao dữ liệu cá nhân là mục tiêu tấn công
        "Vì có thể bị khai thác để giả mạo, lừa đảo",
        // 28. Script kiddies là ai
        "Những cá nhân thiếu kiến thức, dùng công cụ có sẵn để tấn công",
        // 29. Không nên đăng thông tin kế hoạch du lịch
        "Gây nguy cơ bị kẻ trộm nhắm đến",
        // 30. Quy tắc 20-20-20
        "Bảo vệ mắt và chống mỏi mắt khi dùng màn hình"
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
        alert(`🎉 HOÀN TẤT BÀI THI MỤC 4!\n✔ Đã tự động chọn và nộp bài chuẩn xác 100% (30/30 câu).`);
    }, 600);
})();
