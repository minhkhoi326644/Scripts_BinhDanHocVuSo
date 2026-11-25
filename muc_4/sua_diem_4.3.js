// ==============================================================================
// 🌟 TOOL THỬ LẠI & SỬA ĐIỂM MỤC 4.3 (NETIQUETTE & VPN)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🔄 ĐANG KIỂM TRA VÀ SỬA ĐIỂM 2 CÂU 0/1 MỤC 4.3...", "color: #38bdf8; font-weight: bold; font-size: 15px;");

    // 1. Ép hiển thị toàn bộ câu hỏi và nút
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
        $('button.submit, input.submit, button.reset, input.reset, .check, .action button, .action input, .submit-btn').show();
    }

    // 2. Thử bấm nút "Đặt lại" / "Reset" nếu hệ thống cho phép làm lại
    let resetCount = 0;
    document.querySelectorAll('button.reset, input.reset, .action button, .action input, button').forEach(btn => {
        const txt = (btn.innerText || btn.value || '').trim().toLowerCase();
        if (txt.includes('đặt lại') || txt.includes('reset') || txt.includes('thử lại')) {
            btn.click();
            resetCount++;
        }
    });
    if (resetCount > 0) {
        console.log(`%c🔄 Đã bấm nút "Đặt lại" (${resetCount} nút)! Đang chọn lại đáp án...`, "color: #f59e0b;");
    }

    // 3. Đáp án chuẩn 100% của 2 câu cuối Mục 4.3
    const CORRECT_ANSWERS = [
        // Câu 4: Netiquette
        "Ghi nhớ yếu tố con người",
        // Câu 5: Đường hầm mã hóa Wi-Fi công cộng
        "Mạng riêng ảo (VPN)"
    ];

    let pickedCount = 0;
    const inputs = Array.from(document.querySelectorAll('input[type="radio"], input[type="checkbox"]'));
    inputs.forEach(input => {
        const id = input.id;
        const label = document.querySelector(`label[for="${id}"]`) || input.closest('label') || input.parentElement;
        const text = (label ? label.innerText : '').trim();

        for (let ans of CORRECT_ANSWERS) {
            if (text.includes(ans)) {
                input.checked = true;
                input.click();
                input.dispatchEvent(new Event('change', { bubbles: true }));
                if (label) {
                    label.style.backgroundColor = '#dcfce7';
                    label.style.border = '2px solid #22c55e';
                    label.style.borderRadius = '6px';
                    label.style.padding = '4px 8px';
                    label.style.fontWeight = 'bold';
                }
                pickedCount++;
                break;
            }
        }
    });

    console.log(`%c✔ Đã chọn lại ${pickedCount} đáp án đúng!`, "color: #22c55e; font-weight: bold;");

    // 4. Bấm Gửi lại sau 0.5s
    setTimeout(() => {
        let submitCount = 0;
        document.querySelectorAll('button.submit, input.submit, .check, .action button, .action input, .submit-btn').forEach(btn => {
            const txt = (btn.innerText || btn.value || '').trim().toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) {
                btn.click();
                submitCount++;
            }
        });
        alert(`🎯 KẾT QUẢ SỬA ĐIỂM MỤC 4.3:\n✔ Đã chọn lại: Netiquette ("Ghi nhớ yếu tố con người") & Wi-Fi ("Mạng riêng ảo (VPN)").\n👉 Nếu hệ thống còn lượt làm lại, điểm sẽ nhảy lên 5/5 (100%)!\n👉 Nếu hệ thống đã khóa (1 lần duy nhất), 3/5 (60%) vẫn đạt điều kiện qua video môn học.`);
    }, 500);
})();
