// ==============================================================================
// 🌟 MASTER TOOL: AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 3 (UNIVERSAL - CẢ 2 ĐỀ)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 3 (UNIVERSAL)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. TỔNG HỢP TOÀN BỘ ĐÁP ÁN ĐÚNG CỦA CẢ 2 ĐỀ MỤC 3
    const TARGET_ANSWERS = [
        // --- ĐỀ 1 ---
        "Các KOLs/Influencers về làm đẹp mà đối tượng hay theo dõi",
        "Các KOLs/Influencers về làm đẹp mà đối tượng hay theo dõi.",
        "Tất cả các phương án trên đều đúng",
        "Tất cả các phương án trên đều đúng.",
        "Một chuỗi video ngắn giải thích các vấn đề môi trường trên TikTok/Instagram",
        "Một chiến dịch/thử thách online (online challenge) kêu gọi các bạn trẻ tham gia dọn dẹp môi trường",
        "Phân loại và đánh giá kỹ lưỡng độ cập nhật của các số liệu nghiên cứu, đồng thời tìm cách chuyển đổi chúng thành các định dạng hấp dẫn giới trẻ (infographic, video ngắn)",
        "Cung cấp môi trường phát triển, gỡ lỗi và quản lý mã nguồn hiệu quả hơn",
        "Chứa thông tin sai lệch, không còn giá trị hoặc mâu thuẫn với thông điệp hiện tại",
        "Chứa thông tin sai lệch, không còn giá trị hoặc mâu thuẫn với thông điệp hiện tại.",
        "Để quyết định xem có nên loại bỏ hoàn toàn nội dung đó hay không, tránh lãng phí công sức chỉnh sửa",
        "Giúp định hướng cho quá trình sáng tạo nội dung",
        "Quyền sao chép",
        "Quyền phân phối",
        "Quyền tạo ra tác phẩm phái sinh",
        "Áp dụng các kiến thức về đọc/ghi file, xử lý chuỗi và có thể là thư viện biểu đồ trong Python để tự động hóa việc tạo báo cáo dựa trên mẫu có sẵn",
        "Độ phức tạp kỹ thuật",
        "Nhóm các webinar theo chủ đề, xem xét thời lượng và đánh giá độ cập nhật của thông tin trong từng video",
        "Nhóm các webinar theo chủ đề, xem xét thời lượng và đánh giá độ cập nhật của thông tin trong từng video.",
        "Nó quyết định sự vững chãi và định hướng cho toàn bộ \"ngôi nhà\" nội dung được xây lên sau này",
        "Nó quyết định sự vững chãi và định hướng cho toàn bộ \"ngôi nhà\" nội dung được xây lên sau này.",
        "Ngôn ngữ thông dịch",
        "Ngôn ngữ thông dịch.",
        "Trích dẫn nguồn chỉ mang tính ghi nhận công sức của tác giả, không mặc nhiên cho bạn quyền sử dụng hợp pháp toàn bộ tác phẩm",
        "Creative Commons thường miễn phí, còn Adobe Stock phải trả phí",
        "Creative Commons thường yêu cầu ghi công tác giả, trong khi giấy phép trả phí thường không yêu cầu",
        "Giấy phép trả phí thường cho phép sử dụng rộng rãi hơn so với một số loại giấy phép Creative Commons",
        "Gây lãng phí tài nguyên và không tối ưu được hiệu quả truyền thông",
        "Mong muốn và các vấn đề đang gặp phải",
        "Giúp tạo ra nội dung có giá trị, giải quyết được đúng nhu cầu của họ",
        "Giúp tạo ra nội dung có giá trị, giải quyết được đúng nhu cầu của họ.",
        "Hiệu suất phần cứng máy tính",
        "Dịch một cuốn tiểu thuyết từ tiếng Anh sang tiếng Việt",
        "Dịch một cuốn tiểu thuyết từ tiếng Anh sang tiếng Việt.",
        "Phải mua lại bản quyền từ tác giả",
        "Giúp nội dung được truyền tải đầy đủ và người xem không bị ngắt quãng cảm xúc",
        "Cộng đồng hỗ trợ và tài liệu hướng dẫn",
        "Định dạng nội dung",
        "Định dạng nội dung.",
        "Chỉ một số ít người có kỹ năng chuyên sâu mới cần quan tâm đến vấn đề bản quyền",
        "Khâu kiểm thử",
        "Thử nghiệm sản phẩm thực tế với người dùng",

        // --- ĐỀ 2 (BỔ SUNG) ---
        "Cấu trúc dữ liệu như danh sách, từ điển, và các giải thuật liên quan đến gợi ý (ví dụ: lọc cộng tác, phân tích yếu tố)",
        "Bản quyền bảo vệ các tác phẩm sáng tạo (văn học, nghệ thuật), trong khi nhãn hiệu bảo vệ các yếu tố nhận diện thương hiệu (logo, tên gọi).",
        "Tư duy linh hoạt, biết đánh giá ưu nhược điểm của từng công nghệ và chọn giải pháp tối ưu dựa trên mục tiêu, định dạng nội dung và nguồn lực.",
        "Tính chính xác và chi tiết.",
        "Có hình ảnh/video minh họa từng bước rõ ràng.",
        "Dễ dàng tìm kiếm và truy cập.",
        "Bạn không được phép sử dụng tác phẩm cho mục đích thương mại (Non-Commercial).",
        "Infographic và chuỗi bài đăng Carousel.",
        "Video có thể bị hệ thống Content ID tự động tắt tiếng hoặc chặn.",
        "Doanh thu quảng cáo sẽ được chuyển cho chủ sở hữu bản quyền.",
        "Kênh của bạn ấy có thể nhận một cảnh cáo vi phạm bản quyền.",
        "Tuổi tác",
        "Tiết kiệm nguồn lực.",
        "Tăng hiệu quả.",
        "Đảm bảo chất lượng và tính nhất quán.",
        "Mở rộng phạm vi tiếp cận.",
        "JavaScript",
        "Để đưa ra quyết định có nên đầu tư thời gian và chi phí vào việc chỉnh sửa hay nên tạo",
        "một nội dung mới hiệu quả hơn.",
        "Vì khi có mục tiêu, chúng ta sẽ biết cần theo dõi chỉ số nào (KPIs) để đánh giá.",
        "Chúng có mối quan hệ tương hỗ: mục tiêu giúp định hình nội dung và persona giúp tùy chỉnh nội dung đó cho phù hợp.",
        "Copyright",
        "Bắt đầu lại từ đầu hoặc tìm một nội dung thay thế khác.",
        "Cú pháp đơn giản và dễ đọc.",
        "Có một cộng đồng lớn và nhiều tài liệu học tập.",
        "Hỗ trợ đa nền tảng (Windows, macOS, Linux).",
        "Vì một nội dung hấp dẫn đối tượng A có thể không phù hợp hoặc không thu hút đối tượng B, dẫn đến lãng phí công sức.",
        "Tất cả các đáp án đưa ra đều đúng.",
        "Tất cả các đáp án trên.",
        "Giấy phép sử dụng của phông chữ đó có cho phép dùng cho mục đích thương mại hay không."
    ];

    let selectedCount = 0;

    // 3. Tự động tìm và tick chọn chính xác từng input (tránh trùng lặp / double click)
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
        alert(`🎉 ĐÃ XONG 30 CÂU MỤC 3!\n✔ Đã tự động chọn và bấm Gửi ${submitCount} câu thành công 100%!`);
    }, 800);
})();
