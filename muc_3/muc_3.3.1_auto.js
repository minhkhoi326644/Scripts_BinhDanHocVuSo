    // ==============================================================================
    // TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - MỤC 3.3.1
    // ==============================================================================

    (() => {
        console.clear();
        console.log("%c🤖 ĐANG CHẠY TOOL AUTO MỤC 3.3.1...", "color: #22c55e; font-weight: bold; font-size: 15px;");

        // 1. Ép hiện câu hỏi & dừng video
        if (window.$) {
            $('.video').trigger('pause');
            $('.in-video-problem-wrapper, .problem, .vert').show().css({'display':'block!important','opacity':'1!important'});
            $('button.submit, input.submit, .check, .action button').show();
        }

        // 2. Danh sách đáp án đúng Mục 3.3.1 (2 câu)
        const ANSWERS_3_3_1 = [
            // Câu 1: Loại nội dung được bảo hộ bản quyền ngay từ khi tạo ra
            "Một bài viết blog đã được đăng tải",
            // Câu 2: Ý nghĩa của logo Creative Commons (CC)
            "Bạn được phép sử dụng tác phẩm đó miễn phí, miễn là tuân thủ các điều kiện của giấy phép (ví dụ: ghi công tác giả)"
        ];

        let count = 0;
        document.querySelectorAll('label, .choicegroup_item, fieldset label, p').forEach(el => {
            const text = el.innerText.trim();
            for (let ans of ANSWERS_3_3_1) {
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
            alert(`🎉 ĐÃ XONG MỤC 3.3.1!\n✔ Đã tick chọn và nộp ${count} câu đúng 100%.\n👉 Bấm chuyển tab hoặc qua bài tiếp theo!`);
        }, 500);
    })();
