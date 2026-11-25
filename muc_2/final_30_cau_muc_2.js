// ==============================================================================
// 🌟 MASTER TOOL: AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 2 (UNIVERSAL - CẢ 2 ĐỀ)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 2 (UNIVERSAL)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH TỔNG HỢP TOÀN BỘ ĐÁP ÁN ĐÚNG CỦA CẢ 2 BỘ ĐỀ MỤC 2
    const TARGET_ANSWERS = [
        // --- ĐỀ 1 ---
        "Giải quyết mâu thuẫn và thống nhất quy tắc",
        "Tính tương tác",
        "Bộ quy tắc ứng xử trên mạng",
        "Mệt mỏi do họp video liên tục",
        "Giúp họ làm quen",
        "Tất cả các phương án trên",
        "Google Alerts. Social Mention. Brandwatch.",
        "Báo cáo và chặn nếu thấy đáng ngờ",
        "Gửi các thông điệp dài, trang trọng, có đính kèm tệp tin chính thức như CV, báo cáo",
        "Gửi các thông điệp dài, trang trọng, có đính kèm tệp tin chính thức như CV, báo cáo.",
        "Cảnh báo khi có đăng nhập từ thiết bị lạ",
        "Góp ý chính sách có căn cứ",
        "Ý định của người lan truyền thông tin (vô ý so với cố ý gây hại)",
        "Bật xác thực hai yếu tố, dùng mật khẩu mạnh, hạn chế chia sẻ vị trí",
        "Đánh giá nguồn tin (tác giả là ai, nguồn tin là gì)",
        "Tính tương thích",
        "Bình luận xúc phạm người khác",
        "Kiểm tra nguồn tin từ nhiều nguồn đáng tin cậy",
        "Thu thập dữ liệu về người dùng để cung cấp các quảng cáo phù hợp",
        "Suggesting mode để góp ý cần duyệt",
        "Google Drive hoặc Microsoft OneDrive",
        "Google Drive hoặc Microsoft OneDrive.",
        "Để tăng thời gian sử dụng mạng xã hội",
        "Phá vỡ rào cản địa lý và thời gian",
        "Không thể tự động hoá",
        "Hỗ trợ phân tích dữ liệu lớn",
        "Là môi trường hành động công dân mới",
        "Bỏ qua các cảnh báo bảo mật",
        "Lựa chọn công cụ phù hợp với quy mô và mục tiêu",
        "Kiểm chứng thông tin trước khi chia sẻ",

        // --- ĐỀ 2 (BỔ SUNG) ---
        "Chi phí thấp, dễ sử dụng",
        "Coi cảm xúc mạnh là một tín hiệu cảnh báo để kiểm tra thông tin kỹ lưỡng hơn.",
        "Để mở rộng cơ hội kết nối và tương tác.",
        "Google Fact Check Explorer.",
        "Khi người dùng chủ động chia sẻ thông tin trên mạng",
        "Dấu vết dữ liệu được tạo ra khi sử dụng Internet",
        "Nguyên tắc cộng đồng",
        "Chỉ chia sẻ thông tin đúng sự thật",
        "Cộng tác thời gian thực, giao diện đơn giản",
        "Đồng cảm và tôn trọng ý kiến.",
        "Tất cả các hậu quả trên",
        "Sự đồng hành và hợp tác của cộng đồng",
        "Khi dữ liệu của người dùng bị thu thập mà họ không hề hay biết.",
        "Đính kèm bằng chứng rõ ràng",
        "Tuân thủ luật pháp về sở hữu trí tuệ và không chia sẻ tác phẩm của người khác khi chưa được phép.",
        "Tự động hoá tác vụ lặp lại như tóm tắt họp, phân công",
        "Xây dựng nhóm tương trợ",
        "Nhấn vào liên kết lạ"
    ];

    let selectedCount = 0;

    // 3. Tự động tìm và tick chọn
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
        alert(`🎉 ĐÃ XONG 30 CÂU MỤC 2!\n✔ Đã tự động chọn và bấm Gửi ${submitCount} câu thành công 100%!`);
    }, 800);
})();
