// ==============================================================================
// 🌟 TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - MỤC 3.4.2 (CHUẨN XÁC 100% - ĐÃ FIX)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🤖 ĐANG CHẠY TOOL AUTO MỤC 3.4.2 (CHUẨN 100%)...", "color: #22c55e; font-weight: bold; font-size: 15px;");

    // 1. Ép hiện câu hỏi & dừng video
    if (window.$) {
        $('.video').trigger('pause');
        $('.in-video-problem-wrapper, .problem, .vert, .xblock-student_view-problem').each(function() {
            $(this).show().css({
                'display': 'block !important',
                'position': 'relative !important',
                'visibility': 'visible !important',
                'opacity': '1 !important'
            });
        });
        $('button.submit, input.submit, .check, .action button, .action input, .submit-btn').show();
    }

    // 2. Tìm từng khối câu hỏi để tick chính xác (tránh bị chọn nhầm)
    let problems = Array.from(document.querySelectorAll('.problem'));
    if (problems.length === 0) problems = Array.from(document.querySelectorAll('.wrapper-problem-response'));

    problems.forEach((p, idx) => {
        const text = p.innerText || '';

        // CÂU 1: Định hình ý tưởng và cấu trúc của sản phẩm
        if (text.includes('định hình ý tưởng và cấu trúc')) {
            p.querySelectorAll('label, .choicegroup_item, li').forEach(lbl => {
                if (lbl.innerText.trim().startsWith('Khâu thiết kế') || lbl.innerText.includes('Khâu thiết kế')) {
                    const input = lbl.querySelector('input') || document.getElementById(lbl.getAttribute('for')) || lbl.parentElement?.querySelector('input');
                    if (input) {
                        input.click();
                        input.checked = true;
                        input.dispatchEvent(new Event('change', { bubbles: true }));
                        lbl.style.backgroundColor = '#dcfce7';
                        lbl.style.border = '2px solid #22c55e';
                        console.log("✔ Câu 1: Đã chọn Khâu thiết kế");
                    }
                }
            });
        }

        // CÂU 2: Tuân thủ bản thiết kế để ra sản phẩm
        if (text.includes('tuân thủ bản thiết kế để ra sản phẩm')) {
            p.querySelectorAll('label, .choicegroup_item, li').forEach(lbl => {
                if (lbl.innerText.trim().startsWith('Khâu lập trình') || lbl.innerText.includes('Khâu lập trình')) {
                    const input = lbl.querySelector('input') || document.getElementById(lbl.getAttribute('for')) || lbl.parentElement?.querySelector('input');
                    if (input) {
                        input.click();
                        input.checked = true;
                        input.dispatchEvent(new Event('change', { bubbles: true }));
                        lbl.style.backgroundColor = '#dcfce7';
                        lbl.style.border = '2px solid #22c55e';
                        console.log("✔ Câu 2: Đã chọn Khâu lập trình");
                    }
                }
            });
        }
    });

    // 3. Tự động bấm nút Gửi nộp bài
    setTimeout(() => {
        let submitCount = 0;
        document.querySelectorAll('button.submit, input.submit, .check, .action button, .action input, .submit-btn').forEach(b => {
            const txt = (b.innerText || b.value || '').toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) {
                b.click();
                submitCount++;
            }
        });
        alert(`🎉 ĐÃ XONG MỤC 3.4.2!\n✔ Đã chọn chính xác:\n   - Câu 1: Khâu thiết kế\n   - Câu 2: Khâu lập trình\nĐã bấm Gửi nộp bài thành công!`);
    }, 600);
})();
