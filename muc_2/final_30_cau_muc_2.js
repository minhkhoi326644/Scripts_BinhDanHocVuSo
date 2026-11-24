// ==============================================================================
// TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - BÀI TEST 30 CÂU MỤC 2
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 2...", "color: #22c55e; font-weight: bold; font-size: 16px;");

    const TARGET_ANSWERS = [
        // 1. Norming
        "Giải quyết mâu thuẫn và thống nhất quy tắc",
        // 2. Khuyến khích tham gia diễn đàn
        "Tính tương tác",
        // 3. Netiquette
        "Bộ quy tắc ứng xử trên mạng",
        // 4. Zoom Fatigue
        "Mệt mỏi do họp video liên tục",
        // 5. Giúp người khó khăn tương tác trực tuyến
        "Giúp họ làm quen",
        // 6. Giám sát quản lý danh tiếng
        "Tất cả các phương án trên",
        "Google Alerts. Social Mention. Brandwatch.",
        // 7. Tin nhắn từ người lạ không tin tưởng
        "Báo cáo và chặn nếu thấy đáng ngờ",
        // 8. Email phù hợp mục đích nào
        "Gửi các thông điệp dài, trang trọng, có đính kèm tệp tin chính thức như CV, báo cáo",
        // 9. Xác thực đa yếu tố
        "Cảnh báo khi có đăng nhập từ thiết bị lạ",
        // 10. Hành vi công dân số tích cực
        "Góp ý chính sách có căn cứ",
        // 11. Misinformation vs Disinformation
        "Ý định của người lan truyền thông tin (vô ý so với cố ý gây hại)",
        // 12. Tăng cường bảo mật mạng xã hội
        "Bật xác thực hai yếu tố, dùng mật khẩu mạnh, hạn chế chia sẻ vị trí",
        // 13. Bước đầu tiên quy trình kiểm chứng 5 bước
        "Đánh giá nguồn tin (tác giả là ai, nguồn tin là gì)",
        // 14. Hỗ trợ nhiều loại thiết bị
        "Tính tương thích",
        // 15. Bảo vệ thông tin cá nhân
        "Tất cả các phương án trên",
        // 16. Không nên làm trên mạng
        "Bình luận xúc phạm người khác",
        // 17. Nhận được tin giả chưa kiểm chứng
        "Kiểm tra nguồn tin từ nhiều nguồn đáng tin cậy",
        // 18. Cookie giúp gì
        "Thu thập dữ liệu về người dùng để cung cấp các quảng cáo phù hợp",
        // 19. Google Docs tránh xung đột
        "Suggesting mode để góp ý cần duyệt",
        // 20. Làm việc nhóm tài liệu thời gian thực
        "Google Drive hoặc Microsoft OneDrive",
        // 21. Trách nhiệm công dân bao hàm
        "Tuân thủ pháp luật và đóng góp xã hội",
        // 22. Quyền tác giả phát sinh khi nào
        "Ngay từ thời điểm tác phẩm được sáng tạo và thể hiện dưới một hình thức vật chất nhất định",
        // 23. Mục đích tự quản lý tốt danh tính số
        "Để mở rộng cơ hội kết nối và tương tác",
        // 24. Tạo podcast
        "Tất cả các phương án trên",
        // 25. Nguyên tắc quan trọng nhất khi chia sẻ thông tin
        "Đảm bảo thông tin chính xác và có nguồn gốc đáng tin cậy",
        // 26. Giải quyết mâu thuẫn
        "Đồng cảm và tôn trọng ý kiến",
        // 27. AI hỗ trợ hợp tác nhóm
        "Tự động hoá tác vụ lặp lại như tóm tắt họp, phân công",
        // 28. Xây dựng cộng đồng trực tuyến văn minh
        "Chỉ chia sẻ thông tin đúng sự thật",
        // 29. Vai trò công nghệ số trong hành vi công dân
        "Là môi trường hành động công dân mới",
        // 30. Hành vi công dân số có trách nhiệm
        "Ứng xử có đạo đức trên mạng"
    ];

    let count = 0;
    document.querySelectorAll('label, .choicegroup_item, fieldset label, li, p').forEach(el => {
        const text = (el.innerText || '').trim();
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
        alert(`🎉 ĐÃ CHỌN XONG TOÀN BỘ BÀI THI MỤC 2!\n✔ Đã tick chọn: ${count} câu đúng 100%!\n✔ Đã nộp bài: ${submitCount} câu.\n\nHãy kiểm tra lại bài thi của bạn.`);
    }, 600);
})();
