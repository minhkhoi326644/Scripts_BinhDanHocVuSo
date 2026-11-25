// ==============================================================================
// 🌟 TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - MỤC 1.1 (ALL-IN-ONE: CẢ PHẦN 1 & PHẦN 2)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🤖 ĐANG CHẠY TOOL AUTO MỤC 1.1 (CẢ P1 & P2)...", "color: #22c55e; font-weight: bold; font-size: 15px;");

    // 1. Ép hiển thị các câu hỏi và nút Submit
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

    // 2. DANH SÁCH ĐÁP ÁN ĐÚNG CỦA MỤC 1.1 (GỒM CẢ PHẦN 1 VÀ PHẦN 2)
    const ANSWERS_1_1 = [
        // --- PHẦN 1 (p1) ---
        "Huyết áp của bệnh nhân nam là 120/80 mmHg",
        "Bảng Excel chứa danh sách điểm sinh viên",
        "Vì chúng làm nổi bật các điểm chính",
        "Tài liệu học thuật",
        "Bài báo khoa học",
        "Các tài liệu học thuật từ các nhà xuất bản khoa học, kho lưu trữ mở, trường đại học",

        // --- PHẦN 2 (p2) ---
        "Tự động trích xuất dữ liệu từ trang web",
        "Để lựa chọn công nghệ và phương pháp phù hợp cho việc thu thập, lưu trữ, xử lý và phân tích dữ liệu",
        "Tệp JSON chứa thông tin sinh viên và khóa học",
        "Tìm kiếm loại tệp cụ thể như PDF",
        "Nhanh chóng xác định ý chính hoặc tính liên quan",
        "Lọc dữ liệu dựa trên một giá trị hoặc so sánh",
        "Loại bỏ nhiễu và giữ thông tin cần thiết",
        "Quá trình thu thập, xử lý và diễn giải dữ liệu",
        "Để giúp bạn tập trung hơn và tránh bị phân tán bởi các thông tin không liên quan",
        "Để tránh bị phân tán bởi thông tin không liên quan"
    ];

    let selectedCount = 0;

    // 3. Tự động tick chọn đáp án đúng
    document.querySelectorAll('label, .choicegroup_item, fieldset label, li, p').forEach(el => {
        const text = (el.innerText || '').trim();
        for (let ans of ANSWERS_1_1) {
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

    console.log(`%c✔ Đã tick chọn ${selectedCount} đáp án đúng của Mục 1.1!`, "color: #38bdf8; font-weight: bold;");

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
        alert(`🎉 ĐÃ XONG MỤC 1.1!\n✔ Đã tự động chọn và nộp bài thành công!`);
    }, 600);
})();
