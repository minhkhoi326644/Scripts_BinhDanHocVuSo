// ==============================================================================
// 🌟 TOOL KIỂM TRA CHI TIẾT TRẠNG THÁI TẤT CẢ CÂU HỎI MỤC 6.2
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🔍 ĐANG KIỂM TRA TOÀN BỘ CÂU HỎI MỤC 6.2...", "color: #38bdf8; font-weight: bold; font-size: 16px;");

    // Lọc lấy chính xác từng khối problem (tránh bị trùng lặp)
    let problems = Array.from(document.querySelectorAll('.problem'));
    if (problems.length === 0) problems = Array.from(document.querySelectorAll('.wrapper-problem-response'));

    console.log(`%cTổng số câu hỏi phát hiện: ${problems.length}`, "font-weight: bold;");

    let completedCount = 0;
    let pendingCount = 0;

    problems.forEach((p, idx) => {
        // Tìm tiêu đề câu hỏi
        const qElem = p.querySelector('legend, .problem-question, p strong') || p;
        const qText = (qElem.innerText || '').split('\n').filter(l => l.trim().length > 10)[0] || `Câu hỏi ${idx + 1}`;
        
        // Tìm phương án đang được tick chọn
        const checkedInput = p.querySelector('input:checked');
        let selectedText = '❌ CHƯA CHỌN';
        if (checkedInput) {
            const label = p.querySelector(`label[for="${checkedInput.id}"]`) || checkedInput.closest('label') || checkedInput.parentElement;
            selectedText = (label?.innerText || checkedInput.value || '').trim();
        }

        // Kiểm tra trạng thái nộp
        const pText = (p.innerText || '').toLowerCase();
        const isUnanswered = pText.includes('unanswered') || pText.includes('chưa trả lời');
        const hasSubmitted = checkedInput && !isUnanswered;

        console.log(`%c--------------------------------------------------`, "color: #94a3b8;");
        if (hasSubmitted) {
            completedCount++;
            console.log(`%c[CÂU ${idx + 1}] ✔ ĐÃ NỘP XONG:`, "color: #22c55e; font-weight: bold;");
        } else {
            pendingCount++;
            console.log(`%c[CÂU ${idx + 1}] ❌ CHƯA HOÀN THÀNH:`, "color: #ef4444; font-weight: bold;");
        }
        console.log(`   📝 Đề bài: ${qText.trim().slice(0, 90)}...`);
        console.log(`   👉 Đang chọn: %c${selectedText.slice(0, 80)}`, "color: #3b82f6; font-weight: bold;");
    });

    console.log(`%c==================================================`, "color: #38bdf8; font-weight: bold;");
    console.log(`%cKẾT QUẢ: Đã nộp thành công ${completedCount}/${problems.length} câu. (Chưa xong: ${pendingCount})`, 
        completedCount === problems.length ? "color: #22c55e; font-weight: bold; font-size: 14px;" : "color: #ef4444; font-weight: bold; font-size: 14px;");

    if (completedCount === problems.length) {
        alert(`🎉 TẤT CẢ ${completedCount}/${problems.length} CÂU MỤC 6.2 ĐỀU ĐÃ ĐƯỢC NỘP XONG 100%!`);
    } else {
        alert(`⚠️ Còn ${pendingCount} câu chưa nộp xong. Bạn kiểm tra lại log Console nhé!`);
    }
})();
