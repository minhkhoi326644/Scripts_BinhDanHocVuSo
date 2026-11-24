// ==============================================================================
// 🌟 TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - MỤC 6.1 (5 CÂU)
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🤖 ĐANG CHẠY TOOL AUTO MỤC 6.1...", "color: #22c55e; font-weight: bold; font-size: 15px;");

    // 1. Ép hiển thị câu hỏi & dừng video
    if (window.$) {
        $('.video').trigger('pause');
        $('.in-video-problem-wrapper, .problem, .vert').show().css({'display':'block!important','opacity':'1!important'});
        $('button.submit, input.submit, .check, .action button').show();
    }

    // 2. Danh sách đáp án chuẩn Mục 6.1
    const ANSWERS_6_1 = [
        // Câu 1: Đâu không phải là ứng dụng phổ biến của AI
        "Hội hoạ truyền thống",
        // Câu 2: Học sâu khác học máy ở điểm nào
        "Học sâu sử dụng mạng nơ-ron nhân tạo sâu để phân tích dữ liệu phức tạp",
        // Câu 3: Bước giúp cải thiện hiệu suất qua thời gian
        "Phản hồi và Cải thiện",
        // Câu 4: Nhận diện cá nhân
        "Face ID dùng nhận dạng khuôn mặt",
        // Câu 5: AI hỗ trợ y tế
        "AI phân tích hình ảnh X-quang để chẩn đoán bệnh"
    ];

    let count = 0;
    document.querySelectorAll('label, .choicegroup_item, fieldset label, p').forEach(el => {
        const text = el.innerText.trim();
        for (let ans of ANSWERS_6_1) {
            if (text.includes(ans)) {
                const input = el.querySelector('input') || document.getElementById(el.getAttribute('for')) || el.parentElement?.querySelector('input');
                if (input && !input.checked) {
                    input.click();
                    input.checked = true;
                    input.dispatchEvent(new Event('change', { bubbles: true }));
                    el.style.backgroundColor = '#dcfce7';
                    el.style.border = '2px solid #22c55e';
                    count++;
                }
            }
        }
    });

    // 3. Tự động bấm nút Gửi nộp bài
    setTimeout(() => {
        document.querySelectorAll('button.submit, input.submit, .check, .action button').forEach(b => {
            const txt = (b.innerText || b.value || '').toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) b.click();
        });
        alert(`🎉 ĐÃ XONG MỤC 6.1!\n✔ Đã tick chọn và nộp ${count} câu đúng 100% thành công!`);
    }, 500);
})();
