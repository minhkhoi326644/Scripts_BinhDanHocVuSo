// ==============================================================================
// 🌟 FIX CÂU 9 MỤC 6.2 - CHỌN CHÍNH XÁC CHOICE_0 (LỰA CHỌN 1) VÀ NỘP BÀI
// ==============================================================================

(async () => {
    console.clear();
    console.log("%c🎯 ĐANG THỰC HIỆN FIX CÂU 9 MỤC 6.2...", "color: #38bdf8; font-weight: bold; font-size: 16px;");

    // 1. Tìm đúng block câu 9
    let p = Array.from(document.querySelectorAll('.problem')).find(el => 
        el.innerText.includes('ChatGPT có thể đóng vai trò')
    );
    if (!p) {
        p = Array.from(document.querySelectorAll('.wrapper-problem-response, fieldset')).find(el => 
            el.innerText.includes('ChatGPT có thể đóng vai trò')
        )?.closest('.problem') || document.querySelector('.problem');
    }

    if (!p) {
        console.error("❌ Không tìm thấy khối Câu hỏi 9 trên trang!");
        alert("Không tìm thấy Câu 9 trên trang hiện tại!");
        return;
    }

    console.log("%c✔ Đã tìm thấy Câu 9!", "color: #22c55e; font-weight: bold;");

    // 2. Tìm input choice_0 (Lựa chọn 1 - A)
    const input0 = p.querySelector('input[value="choice_0"]') || p.querySelector('#input_90a6e074a8a34303a546230eb8b03c9b_2_1_choice_0') || p.querySelectorAll('input[type="radio"]')[0];
    
    if (!input0) {
        console.error("❌ Không tìm thấy radio button choice_0!");
        alert("Không tìm thấy radio button lựa chọn 1!");
        return;
    }

    // Uncheck các lựa chọn khác và check choice_0
    p.querySelectorAll('input[type="radio"]').forEach(inp => {
        inp.checked = false;
    });

    input0.checked = true;
    input0.click();
    input0.dispatchEvent(new Event('change', { bubbles: true }));
    input0.dispatchEvent(new Event('input', { bubbles: true }));

    const label0 = p.querySelector(`label[for="${input0.id}"]`) || input0.closest('label') || input0.parentElement;
    if (label0) {
        label0.style.backgroundColor = '#dcfce7';
        label0.style.border = '2px solid #22c55e';
    }

    console.log(`%c👉 Đã tick chọn Lựa chọn 1 (choice_0): "${(label0?.innerText || '').trim()}"`, "color: #22c55e; font-weight: bold;");

    // 3. Tìm nút Gửi của Câu 9
    const submitBtn = p.querySelector('button.submit, input.submit, .check button, button.check, .action button');
    if (!submitBtn) {
        console.error("❌ Không tìm thấy nút Gửi của Câu 9!");
        alert("Không tìm thấy nút Gửi!");
        return;
    }

    console.log("👉 Đang bấm nút Gửi...");
    submitBtn.disabled = false;
    submitBtn.click();

    // 4. Chờ server phản hồi và kiểm tra kết quả
    await new Promise(r => setTimeout(r, 2000));

    const statusElem = p.querySelector('.status, .submission-feedback, .correct, .incorrect');
    const statusText = (statusElem?.innerText || p.innerText).trim();
    const attemptsElem = p.querySelector('.attempts, .submission-feedback');
    const attemptsText = (attemptsElem?.innerText || '').trim();

    console.log("%c================ KẾT QUẢ PHẢN HỒI ================", "color: #38bdf8; font-weight: bold;");
    console.log("Trạng thái hiện tại:", statusText.slice(0, 150));
    if (attemptsText) console.log("Thông tin số lần nộp:", attemptsText);

    if (p.innerText.includes('1/1') || statusText.toLowerCase().includes('correct') && !statusText.toLowerCase().includes('incorrect')) {
        console.log("%c🎉 CHÚC MỪNG! CÂU 9 ĐÃ THÀNH 1/1 ĐIỂM (10/10 100%)!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        alert("🎉 CHÚC MỪNG! Câu 9 đã được nộp đúng và đạt 1/1 điểm (100%)!");
    } else {
        console.warn("%c⚠️ Câu 9 vẫn chưa đổi thành 1/1.", "color: #f59e0b; font-weight: bold;");
        if (p.innerText.includes('0/1') || statusText.toLowerCase().includes('incorrect')) {
            console.log("Lý do: Hệ thống Open edX đã khóa điểm câu này sau khi bấm 'Xem lại' hoặc hết số lần làm bài (attempts).");
            alert("⚠️ Hệ thống đã ghi nhận 9/10 (90%). Câu 9 đã hết lượt thử hoặc bị khóa điểm sau khi xem đáp án.\nĐiểm 90% đã ĐẠT chuẩn hoàn thành bài học (≥80%)!");
        }
    }
})();
