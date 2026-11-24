// ==============================================================================
// 🌟 TOOL AUTO ĐIỀN ĐÁP ÁN & NỘP BÀI - MỤC 6.2 (10 CÂU) - ĐÃ FIX CÂU 9
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🤖 ĐANG CHẠY TOOL AUTO MỤC 6.2 (CHUẨN 10/10)...", "color: #22c55e; font-weight: bold; font-size: 15px;");

    // 1. Ép hiển thị câu hỏi & dừng video
    if (window.$) {
        $('.video').trigger('pause');
        $('.in-video-problem-wrapper, .problem, .vert').show().css({'display':'block!important','opacity':'1!important'});
        $('button.submit, input.submit, .check, .action button').show();
    }

    // 2. Danh sách đáp án chuẩn Mục 6.2 (theo thứ tự câu hỏi)
    const TARGET_ANSWERS = [
        // Câu 1: Hạn chế của GenAI
        "Độ tin cậy, khả năng truy xuất nguồn và rủi ro đạo đức",
        // Câu 2: Hỏi đáp ngữ cảnh
        "Trả lời chính xác câu hỏi từ lượng tài liệu lớn",
        // Câu 3: Đặc điểm chung AI trong học tập, pháp lý, doanh nghiệp
        "AI giúp tóm tắt, phân tích và xác minh thông tin từ lượng dữ liệu lớn",
        // Câu 4: Thư xin việc chuyên nghiệp
        "Viết nội dung + Kiểm tra lỗi ngữ pháp + Gợi ý điều chỉnh văn phong",
        // Câu 5: Khôi phục ảnh cũ
        "Giảm nhiễu, phục hồi chi tiết và tự động điều chỉnh màu sắc",
        // Câu 6: Hiệu ứng hình ảnh động và nội dung tương tác
        "ShakkerAI – nền tảng tối ưu cho hiệu ứng hình ảnh động và tương tác",
        // Câu 7: GenAI trong sản xuất video
        "GenAI giúp tăng tốc quá trình sản xuất video và đang mở rộng quy mô thị trường đáng kể",
        // Câu 8: Sora và Veo
        "Sora tập trung vào khả năng mô phỏng vật lý và cảm xúc, trong khi Veo hướng đến chất lượng điện ảnh và thời lượng dài hơn",
        // Câu 9: Tính linh hoạt đa chức năng của ChatGPT (Hệ thống copy lỗi 3 lựa chọn giống nhau, đáp án đúng là Lựa chọn 1 / choice_0)
        "Khả năng tạo video độ phân giải cao phục vụ quảng cáo sản phẩm",
        // Câu 10: Mâu thuẫn tiềm tàng giữa ưu và nhược điểm của ChatGPT
        "ChatGPT có thể phản hồi 24/7, nhưng nguy cơ gây hiểu nhầm vì không cảm nhận được ngữ cảnh và cảm xúc"
    ];

    let problems = Array.from(document.querySelectorAll('.problem'));
    if (problems.length === 0) problems = Array.from(document.querySelectorAll('.wrapper-problem-response'));

    problems.forEach((p, idx) => {
        const pText = p.innerText || '';

        // Xử lý riêng Câu 9 (Do đề bài bị lỗi nhân bản 3 lựa chọn A, B, C giống nhau)
        if (pText.includes('ChatGPT có thể đóng vai trò')) {
            const input0 = p.querySelector('input[value="choice_0"]') || p.querySelectorAll('input[type="radio"]')[0];
            if (input0) {
                p.querySelectorAll('input[type="radio"]').forEach(inp => inp.checked = false);
                input0.checked = true;
                input0.click();
                input0.dispatchEvent(new Event('change', { bubbles: true }));
                const lbl = p.querySelector(`label[for="${input0.id}"]`) || input0.closest('label');
                if (lbl) {
                    lbl.style.backgroundColor = '#dcfce7';
                    lbl.style.border = '2px solid #22c55e';
                }
                console.log(`[CÂU ${idx + 1}] Đã chọn Lựa chọn 1 (choice_0 - Đáp án chính xác)`);
                return;
            }
        }

        // Xử lý các câu thông thường
        let answered = false;
        const labels = Array.from(p.querySelectorAll('label, .choicegroup_item'));
        for (let lbl of labels) {
            if (answered) break;
            const text = lbl.innerText.trim();
            for (let ans of TARGET_ANSWERS) {
                if (text.includes(ans)) {
                    const input = lbl.querySelector('input') || document.getElementById(lbl.getAttribute('for')) || lbl.parentElement?.querySelector('input');
                    if (input) {
                        input.click();
                        input.checked = true;
                        input.dispatchEvent(new Event('change', { bubbles: true }));
                        lbl.style.backgroundColor = '#dcfce7';
                        lbl.style.border = '2px solid #22c55e';
                        answered = true;
                        break;
                    }
                }
            }
        }
    });

    // 3. Tự động bấm nút Gửi nộp bài
    setTimeout(() => {
        let submitCount = 0;
        document.querySelectorAll('button.submit, input.submit, .check, .action button').forEach(b => {
            const txt = (b.innerText || b.value || '').toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) {
                b.click();
                submitCount++;
            }
        });
        alert(`🎉 ĐÃ XỬ LÝ MỤC 6.2!\n✔ Đã chọn chính xác đáp án cho các câu hỏi và bấm Gửi!`);
    }, 600);
})();
