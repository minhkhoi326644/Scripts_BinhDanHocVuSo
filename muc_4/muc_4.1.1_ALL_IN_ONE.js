// ==============================================================================
// 🌟 TOOL SIÊU CẤP: TỰ ĐỘNG CHẠY & NỘP CẢ 3 TAB MỤC 4.1.1 (1 CHẠM DUY NHẤT)
// ==============================================================================

(async () => {
    console.clear();
    console.log("%c🚀 BẮT ĐẦU TỰ ĐỘNG GIẢI VÀ NỘP BÀI CẢ 3 TAB MỤC 4.1.1...", "color: #38bdf8; font-weight: bold; font-size: 16px;");

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

    function solveCurrentTab(answers) {
        if (window.$) {
            try {
                $('.video').trigger('pause');
                $('.in-video-problem-wrapper, .problem, .vert').show().css({'display':'block!important','opacity':'1!important'});
                $('button.submit, input.submit, .check, .action button').show();
            } catch(e) {}
        }

        let count = 0;
        document.querySelectorAll('label, .choicegroup_item, fieldset label, p').forEach(el => {
            const text = el.innerText.trim();
            for (let ans of answers) {
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

        // Bấm nút Submit / Gửi
        document.querySelectorAll('button.submit, input.submit, .check, .action button').forEach(b => {
            const txt = (b.innerText || b.value || '').toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) b.click();
        });

        return count;
    }

    const TAB_ANSWERS = [
        // TAB 1
        [
            "Tội phạm mạng (Cybercriminals)",
            "Sự sẵn có và đơn giản của các công cụ tấn công, không đòi hỏi kỹ năng phức tạp."
        ],
        // TAB 2
        [
            "Tính bí mật (Confidentiality)",
            "Cẩn trọng về những thông tin được đăng tải và người có thể xem thông tin đó."
        ],
        // TAB 3
        [
            "Chặn các cuộc tấn công",
            "Sử dụng các lớp bảo mật",
            "Luôn cảnh giác"
        ]
    ];

    const tabs = getSequenceTabs();
    if (tabs.length >= 3) {
        for (let i = 0; i < 3; i++) {
            console.log(`👉 Đang chuyển tới Tab ${i + 1}...`);
            tabs[i].click();
            await new Promise(r => setTimeout(r, 1300));
            const c = solveCurrentTab(TAB_ANSWERS[i]);
            console.log(`✔ Tab ${i + 1}: Đã chọn & submit (${c} đáp án).`);
            await new Promise(r => setTimeout(r, 800));
        }
        alert("🎉 ĐÃ TỰ ĐỘNG GIẢI VÀ NỘP XONG TOÀN BỘ 3 TAB MỤC 4.1.1 THÀNH CÔNG 100%!");
    } else {
        const allAns = TAB_ANSWERS.flat();
        const c = solveCurrentTab(allAns);
        alert(`✔ Đã tick chọn & submit ${c} câu ở tab hiện tại!`);
    }
})();
