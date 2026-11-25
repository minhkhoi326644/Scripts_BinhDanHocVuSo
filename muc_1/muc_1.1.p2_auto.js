// ==============================================================================
// 🌟 TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - MỤC 1.1 PHẦN 2 (1.1 p2)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🤖 ĐANG CHẠY TOOL AUTO MỤC 1.1 PHẦN 2 (1.1 p2)...", "color: #22c55e; font-weight: bold; font-size: 15px;");

    // 1. Ép hiển thị các câu hỏi và dừng video
    if (window.$) {
        $('.video').trigger('pause');
        $('.in-video-problem-wrapper, .vert, .in-video-problem, .problem, .xblock-student_view-problem').each(function() {
            $(this).show().css({
                'display': 'block !important',
                'position': 'relative !important',
                'visibility': 'visible !important',
                'opacity': '1 !important',
                'margin': '20px 0 !important',
                'padding': '16px !important',
                'background': '#ffffff !important',
                'color': '#000000 !important',
                'border': '3px solid #22c55e !important',
                'border-radius': '10px !important'
            });
        });
        $('button.submit, input.submit, .check, .action button, .action input, .submit-btn').show();
    }

    // 2. DANH SÁCH ĐÁP ÁN ĐÚNG CỦA MỤC 1.1 PHẦN 2
    const ANSWERS_1_1_P2 = [
        // Phân loại dữ liệu quan trọng vì
        "Để lựa chọn công nghệ và phương pháp phù hợp cho việc thu thập, lưu trữ, xử lý và phân tích dữ liệu",
        // Ví dụ dữ liệu bán cấu trúc
        "Tệp JSON chứa thông tin sinh viên và khóa học",
        // Toán tử filetype:
        "Tìm kiếm loại tệp cụ thể như PDF",
        // Mục đích đọc lướt (Skimming)
        "Nhanh chóng xác định ý chính hoặc tính liên quan",
        // Lọc theo điều kiện đơn giản trong Excel
        "Lọc dữ liệu dựa trên một giá trị hoặc so sánh",
        // Mục đích của lọc dữ liệu
        "Loại bỏ nhiễu và giữ thông tin cần thiết",
        // Phân tích dữ liệu là gì
        "Quá trình thu thập, xử lý và diễn giải dữ liệu",
        // Xác định rõ mục tiêu duyệt trước khi tìm kiếm
        "Để giúp bạn tập trung hơn và tránh bị phân tán bởi các thông tin không liên quan",
        "Để tránh bị phân tán bởi thông tin không liên quan",
        // Google Scholar
        "Các tài liệu học thuật từ các nhà xuất bản khoa học, kho lưu trữ mở, trường đại học"
    ];

    let selectedCount = 0;

    // 3. Tự động tick chọn đáp án đúng
    document.querySelectorAll('label, .choicegroup_item, fieldset label, li, p').forEach(el => {
        const text = (el.innerText || '').trim();
        for (let ans of ANSWERS_1_1_P2) {
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

    console.log(`%c✔ Đã tick chọn ${selectedCount} đáp án đúng của Mục 1.1 p2!`, "color: #38bdf8; font-weight: bold;");

    // 4. Tự động bấm nút Gửi nộp bài sau 0.6 giây
    setTimeout(() => {
        let submitCount = 0;
        document.querySelectorAll('button.submit, input.submit, .check, .action button, .action input, .submit-btn').forEach(btn => {
            const txt = (btn.innerText || btn.value || '').trim().toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) {
                btn.click();
                submitCount++;
            }
        });
        alert(`🎉 ĐÃ XONG MỤC 1.1 PHẦN 2!\n✔ Đã tự động chọn và nộp bài thành công!`);
    }, 600);
})();
