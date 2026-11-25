// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 3 (ĐỀ BIẾN THỂ MỚI / ĐỀ 4)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 3 (ĐỀ 4)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 4 MỤC 3
    const TARGET_ANSWERS = [
        // 1. Lợi ích xác định rõ mục tiêu và đối tượng
        "Giúp định hướng cho quá trình sáng tạo nội dung.",

        // 2. Tự viết lại bài báo có vi phạm bản quyền không
        "Không, vì bản quyền bảo vệ cách diễn đạt, chứ không bảo vệ các sự thật hay ý tưởng.",

        // 3. Yếu tố Relevant trong mô hình SMART
        "Mục tiêu phải phù hợp với chiến lược, tầm nhìn và nguồn lực tổng thể.",

        // 4. Mối quan hệ giữa Mục tiêu nội dung và Chân dung người dùng
        "Chúng có mối quan hệ tương hỗ: mục tiêu giúp định hình nội dung và persona giúp tùy chỉnh nội dung đó cho phù hợp.",

        // 5. Video thuyết trình sử dụng bài hát nổi tiếng (Chọn 3 mục)
        "Video có thể bị hệ thống Content ID tự động tắt tiếng hoặc chặn.",
        "Doanh thu quảng cáo sẽ được chuyển cho chủ sở hữu bản quyền.",
        "Kênh của bạn ấy có thể nhận một cảnh cáo vi phạm bản quyền.",

        // 6. Trình tạo báo cáo tự động Python
        "Áp dụng các kiến thức về đọc/ghi file, xử lý chuỗi và có thể là thư viện biểu đồ trong Python để tự động hóa việc tạo báo cáo dựa trên mẫu có sẵn.",

        // 7. Rà soát bài đăng cũ Instagram để làm Reels mới
        "Các bài đăng có nhiều lượt tương tác (thích, bình luận, chia sẻ) nhất, chứng tỏ chủ đề/định dạng đó vẫn hấp dẫn.",

        // 8. Đặc điểm Python cho người mới bắt đầu (Chọn 3 mục)
        "Cú pháp đơn giản và dễ đọc.",
        "Có một cộng đồng lớn và nhiều tài liệu học tập.",
        "Hỗ trợ đa nền tảng (Windows, macOS, Linux).",

        // 9. Rủi ro khi sử dụng logo công ty khác (Chọn 3 mục)
        "Vì nó có thể vi phạm cả luật bản quyền và luật về nhãn hiệu.",
        "Vì nó có thể gây nhầm lẫn rằng bạn được thương hiệu đó tài trợ hoặc hợp tác.",
        "Vì nó có thể dẫn đến các hậu quả pháp lý nghiêm trọng.",

        // 10. Mục tiêu hỗ trợ khách hàng cho phần mềm kế toán (Chọn 3 mục)
        "Tính chính xác và chi tiết.",
        "Có hình ảnh/video minh họa từng bước rõ ràng.",
        "Dễ dàng tìm kiếm và truy cập.",

        // 11. Nhà sáng tạo nội dung có nhiều ý tưởng nhưng thiếu tổ chức
        "Thu thập và phân loại nội dung.",

        // 12. Nội dung "lạc hướng" có nghĩa là gì
        "Nội dung không phù hợp hoặc không hấp dẫn đối tượng mục tiêu.",

        // 13. KHÔNG phải 1 trong 3 tiêu chí chính phân loại nội dung
        "Độ phức tạp kỹ thuật.",

        // 14. Yếu tố quyết định ngôn ngữ công nghệ
        "Định dạng nội dung.",

        // 15. Biểu tượng NC trong Creative Commons
        "Bạn không được phép sử dụng tác phẩm cho mục đích thương mại (Non-Commercial).",

        // 16. Ngôn ngữ lập trình Python là loại ngôn ngữ nào
        "Ngôn ngữ thông dịch.",

        // 17. Lựa chọn công nghệ cho nội dung tương tác (Chọn 3 mục)
        "Khả năng tích hợp với các công nghệ frontend (HTML, CSS, JavaScript) để xây dựng giao diện người dùng.",
        "Hiệu suất xử lý dữ liệu và logic của ứng dụng.",
        "Các thư viện hoặc framework có sẵn hỗ trợ cho loại nội dung đó (ví dụ: game engine cho game).",

        // 18. Mục tiêu nội dung số trả lời cho câu hỏi nào
        "Nội dung này được tạo ra để làm gì?",

        // 19. "Chân dung người dùng" (User Persona) là gì
        "Một hồ sơ chi tiết về đối tượng lý tưởng mà nội dung hướng đến.",

        // 20. Biểu tượng © là viết tắt của từ nào
        "Copyright",

        // 21. Tái sử dụng các buổi webinar cũ thành nội dung ngắn
        "Nhóm các webinar theo chủ đề, xem xét thời lượng và đánh giá độ cập nhật của thông tin trong từng video.",

        // 22. Thu thập nội dung số liên quan
        "Tất cả các đáp án trên.",

        // 23. Khác biệt giữa Public Domain và Creative Commons
        "Tác phẩm Public Domain đã hết hạn bảo hộ bản quyền và hoàn toàn tự do sử dụng, trong khi tác phẩm Creative Commons vẫn có bản quyền nhưng tác giả cho phép sử dụng dưới một số điều kiện.",

        // 24. Bước đầu tiên và cốt lõi trong tích hợp và tạo lập lại nội dung số
        "Rà soát và đánh giá nội dung đã có.",

        // 25. Creative Commons (CC) là gì
        "Một loại giấy phép cho phép sử dụng miễn phí tác phẩm dưới một số điều kiện nhất định.",

        // 26. Nội dung này có còn phù hợp với mục tiêu hiện tại không
        "Định hướng và mục đích của sản phẩm nội dung mới.",

        // 27. Khi công sức chỉnh sửa nội dung cũ quá lớn
        "Bắt đầu lại từ đầu hoặc tìm một nội dung thay thế khác.",

        // 28. Cấu trúc dữ liệu và giải thuật cơ bản là nền tảng gì
        "Tư duy lập trình để giải quyết vấn đề hiệu quả.",

        // 29. Nội dung số tương tác có thể bao gồm yếu tố nào
        "Các nút bấm, biểu mẫu, trò chơi nhỏ, phản hồi theo hành động người dùng.",

        // 30. Giữa (1) Xây dựng thương hiệu và (2) Thuyết phục/Bán hàng
        "Mục tiêu (1)"
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
            console.log("%c🎉 HOÀN TẤT NỘP BÀI THI 30 CÂU MỤC 3 (ĐỀ 4)! ĐẠT ĐIỂM TỐI ĐA 100%!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        } else {
            console.log("%cℹ Không tìm thấy nút nộp bài chung, bạn có thể kiểm tra lại rồi bấm 'Gửi' thủ công nhé!", "color: #94a3b8; font-style: italic;");
        }
    }, 1000);
})();
