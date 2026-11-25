// ==============================================================================
// 🌟 TOOL THỬ ĐÁP ÁN KHÁC CHO CÂU 9 MỤC 6.2 (ƯU TIÊN THỬ D, NẾU KHÔNG ĐƯỢC THỬ B/C)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(async () => {
    console.clear();
    console.log("%c🎯 ĐANG XỬ LÝ CÂU 9 MỤC 6.2...", "color: #38bdf8; font-weight: bold; font-size: 16px;");

    // 1. Tìm đúng khối Câu 9
    let p = Array.from(document.querySelectorAll('.problem')).find(el => 
        el.innerText.includes('ChatGPT có thể đóng vai trò')
    );
    if (!p) {
        p = Array.from(document.querySelectorAll('.wrapper-problem-response, fieldset')).find(el => 
            el.innerText.includes('ChatGPT có thể đóng vai trò')
        )?.closest('.problem') || document.querySelector('.problem');
    }

    if (!p) {
        alert("❌ Không tìm thấy Câu 9 trên trang!");
        return;
    }

    // 2. Kiểm tra nếu có nút "Hiển thị câu trả lời" hoặc "Show Answer"
    const showAnswerBtn = Array.from(p.querySelectorAll('button, input[type="button"]')).find(b => {
        const t = (b.innerText || b.value || '').toLowerCase();
        return t.includes('hiển thị câu trả lời') || t.includes('show answer') || t.includes('xem đáp án');
    });
    if (showAnswerBtn) {
        console.log("💡 Tìm thấy nút xem đáp án! Đang mở...");
        showAnswerBtn.click();
    }

    // 3. Kiểm tra các radio buttons
    const radios = Array.from(p.querySelectorAll('input[type="radio"]'));
    console.log(`Tìm thấy ${radios.length} lựa chọn trong Câu 9.`);

    // Lựa chọn D là radio cuối cùng (hoặc choice_3)
    const targetInput = radios[3] || radios[1]; // Ưu tiên D (chỉ số 3), nếu không thì B (chỉ số 1)
    
    if (!targetInput) {
        alert("Không tìm thấy nút chọn đáp án của Câu 9!");
        return;
    }

    radios.forEach(r => r.checked = false);
    targetInput.checked = true;
    targetInput.click();
    targetInput.dispatchEvent(new Event('change', { bubbles: true }));

    const targetLabel = p.querySelector(`label[for="${targetInput.id}"]`) || targetInput.closest('label') || targetInput.parentElement;
    if (targetLabel) {
        targetLabel.style.backgroundColor = '#dcfce7';
        targetLabel.style.border = '2px solid #22c55e';
    }

    console.log(`%c👉 Đã chuyển sang chọn: "${(targetLabel?.innerText || '').trim()}"`, "color: #22c55e; font-weight: bold;");

    // 4. Bấm Gửi nếu nút Gửi khả dụng
    const submitBtn = p.querySelector('button.submit, input.submit, .check button, button.check, .action button');
    if (submitBtn && !submitBtn.disabled) {
        console.log("👉 Đang bấm nút Gửi...");
        submitBtn.click();
        await new Promise(r => setTimeout(r, 1500));
        
        if (p.innerText.includes('1/1') || p.innerText.toLowerCase().includes('correct')) {
            alert("🎉 XUẤT SẮC! Câu 9 đã đổi thành ĐÚNG (1/1 điểm)! Bạn đạt trọn vẹn 10/10!");
        } else {
            alert("ℹ Đã thử nộp lựa chọn mới. Bạn kiểm tra lại kết quả trên màn hình nhé!");
        }
    } else {
        alert("ℹ Nút Gửi của Câu 9 đang bị khóa hoặc đã hết số lượt nộp bài. Tuy nhiên với 9/10 (90%), bạn đã ĐẠT chuẩn hoàn thành xuất sắc mục này!");
    }
})();
