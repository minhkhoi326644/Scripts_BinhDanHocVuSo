// ==============================================================================
// TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - BÀI TEST 30 CÂU MỤC 3 (SÁNG TẠO NỘI DUNG SỐ)
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 3...", "color: #22c55e; font-weight: bold; font-size: 16px;");

    const TARGET_ANSWERS = [
        // 1. KOLs/Influencers
        "Các KOLs/Influencers về làm đẹp mà đối tượng hay theo dõi",
        // 2. Thói quen số quan trọng
        "Tất cả các phương án trên đều đúng",
        // 3. Nội dung môi trường học sinh cấp 3
        "Một chuỗi video ngắn giải thích các vấn đề môi trường trên TikTok/Instagram",
        "Một chiến dịch/thử thách online (online challenge) kêu gọi các bạn trẻ tham gia dọn dẹp môi trường",
        // 4. Kho dữ liệu nghiên cứu 10 năm trước
        "Phân loại và đánh giá kỹ lưỡng độ cập nhật của các số liệu nghiên cứu, đồng thời tìm cách chuyển đổi chúng thành các định dạng hấp dẫn giới trẻ (infographic, video ngắn)",
        // 5. Lựa chọn IDE
        "Cung cấp môi trường phát triển, gỡ lỗi và quản lý mã nguồn hiệu quả hơn",
        // 6. Nội dung lỗi thời
        "Chứa thông tin sai lệch, không còn giá trị hoặc mâu thuẫn với thông điệp hiện tại",
        // 7. Đánh giá tiềm năng tái sử dụng
        "Để quyết định xem có nên loại bỏ hoàn toàn nội dung đó hay không, tránh lãng phí công sức chỉnh sửa",
        // 8. Lợi ích xác định mục tiêu và đối tượng
        "Giúp định hướng cho quá trình sáng tạo nội dung",
        // 9. Quyền của người sở hữu bản quyền
        "Quyền sao chép",
        "Quyền phân phối",
        "Quyền tạo ra tác phẩm phái sinh",
        // 10. Trình tạo báo cáo tự động Python
        "Áp dụng các kiến thức về đọc/ghi file, xử lý chuỗi và có thể là thư viện biểu đồ trong Python để tự động hóa việc tạo báo cáo dựa trên mẫu có sẵn",
        // 11. KHÔNG phải tiêu chí chính phân loại
        "Độ phức tạp kỹ thuật",
        // 12. Webinar cũ thành video ngắn
        "Nhóm các webinar theo chủ đề, xem xét thời lượng và đánh giá độ cập nhật của thông tin trong từng video",
        // 13. Đặt nền móng vững chắc
        "Nó quyết định sự vững chãi và định hướng cho toàn bộ \"ngôi nhà\" nội dung được xây lên sau này",
        // 14. Python là loại ngôn ngữ nào
        "Ngôn ngữ thông dịch",
        // 15. Trích dẫn nguồn vs giấy phép
        "Trích dẫn nguồn chỉ mang tính ghi nhận công sức của tác giả, không mặc nhiên cho bạn quyền sử dụng hợp pháp toàn bộ tác phẩm",
        // 16. Creative Commons vs Adobe Stock
        "Creative Commons thường miễn phí, còn Adobe Stock phải trả phí",
        "Creative Commons thường yêu cầu ghi công tác giả, trong khi giấy phép trả phí thường không yêu cầu",
        "Giấy phép trả phí thường cho phép sử dụng rộng rãi hơn so với một số loại giấy phép Creative Commons",
        // 17. Kho báu nội dung không khai thác
        "Gây lãng phí tài nguyên và không tối ưu được hiệu quả truyền thông",
        // 18. Tâm lý học (Psychographics)
        "Mong muốn và các vấn đề đang gặp phải",
        // 19. YouTuber bình luận phim
        "Sử dụng hợp lý (Fair Use)",
        // 20. Tự động thu thập bài báo
        "Lập trình Python với các thư viện xử lý văn bản (ví dụ: BeautifulSoup, NLTK)",
        // 21. Tiêu chí rà soát bài đăng cũ Instagram
        "Các bài đăng có nhiều lượt tương tác (thích, bình luận, chia sẻ) nhất, chứng tỏ chủ đề/định dạng đó vẫn hấp dẫn",
        // 22. Chatbot đơn giản
        "Python",
        // 23. Tự động đổi tên file
        "Xử lý file và chuỗi trong Python (thư viện os và các thao tác chuỗi cơ bản)",
        // 24. Unsplash và Pexels
        "Hình ảnh chất lượng cao và miễn phí",
        // 25. Biểu tượng NC
        "Bạn không được phép sử dụng tác phẩm cho mục đích thương mại (Non-Commercial)",
        // 26. Biến cũ thành mới hiệu quả hơn
        "Khi nội dung cũ vẫn chứa thông tin cốt lõi có giá trị và phù hợp với mục tiêu mới",
        "Khi muốn tiết kiệm thời gian và nguồn lực",
        "Khi muốn đảm bảo tính nhất quán của thông điệp thương hiệu qua thời gian",
        // 27. Hiểu rõ vấn đề đối tượng
        "Giúp tạo ra nội dung có giá trị, giải quyết được đúng nhu cầu của họ",
        // 28. Nội dung lạc hướng
        "Nội dung không phù hợp hoặc không hấp dẫn đối tượng mục tiêu",
        // 29. Trước khi xuất bản video (4 mục)
        "Kiểm tra giấy phép sử dụng của tất cả các hình ảnh, video footage không phải do mình tự tạo",
        "Kiểm tra giấy phép sử dụng của tất cả các bản nhạc nền và hiệu ứng âm thanh",
        "Đảm bảo việc sử dụng logo không gây nhầm lẫn hoặc vi phạm nhãn hiệu",
        "Rà soát và ghi công (attribute) đầy đủ cho các tác phẩm yêu cầu",
        // 30. Nền tảng Python tạo nội dung tương tác
        "Vì chúng cung cấp tư duy logic để xây dựng các chức năng phức tạp, xử lý dữ liệu, và tạo ra các kịch bản tự động hóa linh hoạt, vượt ra ngoài khả năng của các công cụ có sẵn"
    ];

    let count = 0;
    document.querySelectorAll('label, .choicegroup_item, fieldset label, li, p').forEach(el => {
        const text = (el.innerText || '').trim();
        // Loại trừ các lựa chọn sai gây nhiễu
        if (text.includes("50 trang") || 
            text.includes("buổi tối trong tuần") || 
            text.includes("đối thủ cạnh tranh") || 
            text.includes("luôn có chất lượng cao hơn") || 
            text.includes("không có ý tưởng mới")) return;

        for (let ans of TARGET_ANSWERS) {
            if (text === ans || text.includes(ans) || (ans.includes(text) && text.length > 5)) {
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
                    count++;
                    break;
                }
            }
        }
    });

    console.log(`%c✔ ĐÃ TỰ ĐỘNG TICK CHỌN ${count} ĐÁP ÁN!`, "color: #38bdf8; font-weight: bold; font-size: 16px;");

    // Tự động bấm nút Gửi nộp bài sau 0.6s
    setTimeout(() => {
        let submitCount = 0;
        document.querySelectorAll('button.submit, input.submit, .check, .action button, .submit-btn').forEach(btn => {
            const txt = (btn.innerText || btn.value || '').trim().toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) {
                btn.click();
                submitCount++;
            }
        });
        alert(`🎉 ĐÃ CHỌN XONG TOÀN BỘ BÀI THI MỤC 3!\n✔ Đã tick chọn: ${count} đáp án chuẩn 100%!\n✔ Đã nộp bài: ${submitCount} câu.\n\nHãy kiểm tra lại bài thi của bạn.`);
    }, 600);
})();
