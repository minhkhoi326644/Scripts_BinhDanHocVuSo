// ==============================================================================
// TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - MỤC 1.2
// Mục: 1.2. Đánh giá dữ liệu, thông tin và nội dung số (7 câu)
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🤖 ĐANG CHẠY TOOL AUTO MỤC 1.2...", "color: #22c55e; font-weight: bold; font-size: 15px;");

    // 1. Ép hiển thị các câu hỏi và nút Submit
    if (window.$) {
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
        $('.video').trigger('pause');
    }

    // 2. DANH SÁCH ĐÁP ÁN ĐÚNG CỦA MỤC 1.2
    const ANSWERS_1_2 = [
        "Thông tin sai lệch là thông tin không chính xác được chia sẻ một cách không có chủ đích, thường là do hiểu sai, lỗi chính tả hoặc không soát lại thông tin",
        "Thời gian và tính cập nhật của thông tin",
        "Tác giả và nguồn có đáng tin không",
        "Mục đích chính của trang web là để bán sản phẩm và kiếm lợi nhuận",
        "Gây sai lệch trong phân tích",
        "Tiêu đề giật gân",
        "Trích dẫn không rõ ràng",
        "Mâu thuẫn trong nội dung",
        "Tăng tốc độ và hiệu quả",
        "Phát hiện mẫu phức tạp",
        "Tự động hóa quy trình phức tạp"
    ];

    let selectedCount = 0;

    // 3. Tự động tick chọn đáp án đúng
    document.querySelectorAll('label, .choicegroup_item, fieldset label, p').forEach(el => {
        const text = el.innerText.trim();
        for (let ans of ANSWERS_1_2) {
            if (text === ans || text.includes(ans)) {
                const input = el.querySelector('input') || document.getElementById(el.getAttribute('for'));
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

    console.log(`%c✔ Đã tick chọn ${selectedCount} đáp án đúng của Mục 1.2!`, "color: #38bdf8; font-weight: bold;");

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
        alert(`🎉 ĐÃ XONG MỤC 1.2!\nĐã tự động chọn và nộp bài.`);
    }, 600);
})();
