// ==============================================================================
// 🌟 TOOL QUÉT ĐỀ ĐA NĂNG (TỰ ĐỘNG QUÉT CẢ TRANG 1 TAB LẪN NHIỀU TAB)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(async () => {
    console.clear();
    console.log("%c🚀 ĐANG QUÉT CÂU HỎI ẨN TRÊN TRANG...", "color: #38bdf8; font-weight: bold; font-size: 15px;");

    function getSequenceTabs() {
        let tabs = Array.from(document.querySelectorAll('.sequence-nav button, .sequence-nav-button, #sequence-list button, nav.sequence-nav ol li button, ol#sequence-list li button'));
        if (tabs.length === 0) {
            const nav = document.querySelector('.sequence-nav, nav[aria-label="Unit Navigation"], #sequence-list');
            if (nav) tabs = Array.from(nav.querySelectorAll('button, a'));
        }
        return tabs.filter(b => {
            const t = (b.innerText || '').trim();
            return !t.includes('Trang trước') && !t.includes('Trang sau');
        });
    }

    function extractQuestionsFromDOM() {
        if (window.$) {
            try {
                $('.video').trigger('pause');
                $('.in-video-problem-wrapper, .problem, .vert, .xblock-student_view-problem').each(function() {
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
                $('button.submit, input.submit, .check, .action button, .submit-btn').show();
            } catch (e) {}
        }

        let questions = [];
        document.querySelectorAll('.problem, .wrapper-problem-response, fieldset').forEach(p => {
            const t = p.innerText.trim();
            if (t.length > 15 && !questions.includes(t)) {
                questions.push(t);
            }
        });
        return questions;
    }

    function safeCopy(text) {
        try {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.left = '-9999px';
            document.body.appendChild(ta);
            ta.focus();
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        } catch (err) {}
    }

    const tabs = getSequenceTabs();
    let allResults = [];

    if (tabs.length >= 2) {
        for (let i = 0; i < tabs.length; i++) {
            console.log(`👉 Đang duyệt Tab/Bài ${i + 1}/${tabs.length}...`);
            tabs[i].click();
            await new Promise(r => setTimeout(r, 1500));

            const qList = extractQuestionsFromDOM();
            if (qList.length > 0) {
                qList.forEach((q, idx) => {
                    allResults.push(`=== [TAB/BÀI ${i + 1} - CÂU ${idx + 1}] ===\n` + q);
                });
            } else {
                allResults.push(`=== [TAB/BÀI ${i + 1}] ===\n(Không có câu hỏi ẩn - video lý thuyết)`);
            }
        }
        tabs[0].click();
    } else {
        const qList = extractQuestionsFromDOM();
        if (qList.length > 0) {
            qList.forEach((q, idx) => {
                allResults.push(`[CÂU ${idx + 1}]\n` + q);
            });
        } else {
            allResults.push(`(Không có câu hỏi ẩn trên trang này)`);
        }
    }

    const fullText = allResults.join('\n\n----------------------------------------\n\n');
    console.log(fullText);
    safeCopy(fullText);

    alert(`🎉 ĐÃ QUÉT XONG TOÀN BỘ CÂU HỎI!\n✔ Đã tự động gom hết câu hỏi và COPY VÀO BỘ NHỚ TẠM.\n👉 Bạn chỉ cần bấm Ctrl + V gửi vào chat nhé!`);
})();
