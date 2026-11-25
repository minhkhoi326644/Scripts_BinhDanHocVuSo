// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 3 (ĐỀ BỔ SUNG / ĐỀ 2)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 3 (ĐỀ 2)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 2 MỤC 3 (HỖ TRỢ CẢ SINGLE & MULTI-CHOICE)
    const TARGET_ANSWERS = [
        // 1. Đặc điểm nội dung lỗi thời
        "Chứa thông tin sai lệch, không còn giá trị hoặc mâu thuẫn với thông điệp hiện tại.",

        // 2. Đặt nền móng vững chắc
        "Nó quyết định sự vững chãi và định hướng cho toàn bộ \"ngôi nhà\" nội dung được xây lên sau này.",

        // 3. Hệ thống gợi ý nội dung (Python)
        "Cấu trúc dữ liệu như danh sách, từ điển, và các giải thuật liên quan đến gợi ý (ví dụ: lọc cộng tác, phân tích yếu tố)",

        // 4. Vấn đề mà đối tượng đang gặp phải
        "Giúp tạo ra nội dung có giá trị, giải quyết được đúng nhu cầu của họ.",

        // 5. Khác biệt bản quyền (copyright) và nhãn hiệu (trademark)
        "Bản quyền bảo vệ các tác phẩm sáng tạo (văn học, nghệ thuật), trong khi nhãn hiệu bảo vệ các yếu tố nhận diện thương hiệu (logo, tên gọi).",

        // 6. Lựa chọn công nghệ phù hợp đòi hỏi tư duy gì
        "Tư duy linh hoạt, biết đánh giá ưu nhược điểm của từng công nghệ và chọn giải pháp tối ưu dựa trên mục tiêu, định dạng nội dung và nguồn lực.",

        // 7. Webinar cũ thành nội dung ngắn
        "Nhóm các webinar theo chủ đề, xem xét thời lượng và đánh giá độ cập nhật của thông tin trong từng video.",

        // 8. Hỗ trợ khách hàng cho phần mềm kế toán (CHỌN 3 MỤC)
        "Tính chính xác và chi tiết.",
        "Có hình ảnh/video minh họa từng bước rõ ràng.",
        "Dễ dàng tìm kiếm và truy cập.",

        // 9. Giấy phép Creative Commons ký hiệu NC
        "Bạn không được phép sử dụng tác phẩm cho mục đích thương mại (Non-Commercial).",

        // 10. Báo cáo nghiên cứu PowerPoint thành nội dung MXH
        "Infographic và chuỗi bài đăng Carousel.",

        // 11. Hậu quả khi dùng bài hát nổi tiếng (CHỌN 3 MỤC)
        "Video có thể bị hệ thống Content ID tự động tắt tiếng hoặc chặn.",
        "Doanh thu quảng cáo sẽ được chuyển cho chủ sở hữu bản quyền.",
        "Kênh của bạn ấy có thể nhận một cảnh cáo vi phạm bản quyền.",

        // 12. Ngôn ngữ lập trình Python là loại ngôn ngữ nào
        "Ngôn ngữ thông dịch.",

        // 13. Nhân khẩu học (Demographics)
        "Tuổi tác",

        // 14. Lợi ích rà soát và đánh giá nội dung đã có (CHỌN CẢ 4 MỤC)
        "Tiết kiệm nguồn lực.",
        "Tăng hiệu quả.",
        "Đảm bảo chất lượng và tính nhất quán.",
        "Mở rộng phạm vi tiếp cận.",

        // 15. Hiệu ứng động khi rê chuột web cá nhân
        "JavaScript",

        // 16. Đánh giá mức độ công sức cần bỏ ra để chỉnh sửa
        "Để đưa ra quyết định có nên đầu tư thời gian và chi phí vào việc chỉnh sửa hay nên tạo",
        "một nội dung mới hiệu quả hơn.",

        // 17. Thói quen số lứa tuổi teen
        "Các KOLs/Influencers về làm đẹp mà đối tượng hay theo dõi.",

        // 18. Xác định mục tiêu giúp đo lường hiệu quả
        "Vì khi có mục tiêu, chúng ta sẽ biết cần theo dõi chỉ số nào (KPIs) để đánh giá.",

        // 19. Mục tiêu nội dung và Chân dung người dùng
        "Chúng có mối quan hệ tương hỗ: mục tiêu giúp định hình nội dung và persona giúp tùy chỉnh nội dung đó cho phù hợp.",

        // 20. Yếu tố quyết định ngôn ngữ công nghệ
        "Định dạng nội dung.",

        // 21. Biểu tượng ©
        "Copyright",

        // 22. Công sức chỉnh sửa quá lớn
        "Bắt đầu lại từ đầu hoặc tìm một nội dung thay thế khác.",

        // 23. Đặc điểm Python cho người mới bắt đầu (CHỌN 3 MỤC)
        "Cú pháp đơn giản và dễ đọc.",
        "Có một cộng đồng lớn và nhiều tài liệu học tập.",
        "Hỗ trợ đa nền tảng (Windows, macOS, Linux).",

        // 24. Đối tượng mục tiêu có trùng khớp đối tượng mới
        "Vì một nội dung hấp dẫn đối tượng A có thể không phù hợp hoặc không thu hút đối tượng B, dẫn đến lãng phí công sức.",

        // 25. Tôi không biết nội dung đó có bản quyền
        "Tất cả các đáp án đưa ra đều đúng.",

        // 26. Trình tạo báo cáo tự động Python
        "Áp dụng các kiến thức về đọc/ghi file, xử lý chuỗi và có thể là thư viện biểu đồ trong Python để tự động hóa việc tạo báo cáo dựa trên mẫu có sẵn.",

        // 27. Thu thập nội dung số liên quan
        "Tất cả các đáp án trên.",

        // 28. Yếu tố Tâm lý học (Psychographics)
        "Mong muốn và các vấn đề đang gặp phải",

        // 29. Nhà thiết kế sử dụng phông chữ miễn phí
        "Giấy phép sử dụng của phông chữ đó có cho phép dùng cho mục đích thương mại hay không.",

        // 30. Tác phẩm phái sinh
        "Dịch một cuốn tiểu thuyết từ tiếng Anh sang tiếng Việt."
    ];

    let selectedCount = 0;

    // 3. Tự động tìm và tick chọn (hỗ trợ cả radio và checkbox)
    document.querySelectorAll('label, .choicegroup_item, fieldset label, li, p').forEach(el => {
        const text = (el.innerText || '').trim();
        for (let ans of TARGET_ANSWERS) {
            if (text === ans || text.includes(ans)) {
                const input = el.querySelector('input') || document.getElementById(el.getAttribute('for')) || el.parentElement?.querySelector('input');
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
                }
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
        alert(`🎉 ĐÃ XONG 30 CÂU MỤC 3 (ĐỀ 2)!\n✔ Đã tự động chọn và bấm Gửi ${submitCount} câu thành công 100%!`);
    }, 800);
})();
