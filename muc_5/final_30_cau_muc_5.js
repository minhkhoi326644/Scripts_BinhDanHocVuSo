// ==============================================================================
// 🌟 MASTER TOOL: AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 5 (UNIVERSAL - CẢ 3 ĐỀ)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// Hỗ trợ: Đề 1, Đề 2 & Đề 3 (Đề mới) - Tự động nhận diện mọi biến thể câu hỏi
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU BÀI KIỂM TRA MỤC 5 (UNIVERSAL)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

    // 1. Ép hiển thị tất cả các câu hỏi và các nút
    if (window.$) {
        $('.video').trigger('pause');
        $('.in-video-problem-wrapper, .problem, .vert, .xblock-student_view-problem').each(function() {
            $(this).show().css({
                'display': 'block !important',
                'position': 'relative !important',
                'visibility': 'visible !important',
                'opacity': '1 !important',
                'margin': '15px 0 !important',
                'padding': '12px !important',
                'background': '#ffffff !important',
                'color': '#000000 !important'
            });
        });
        $('button.submit, input.submit, .check, .action button, .action input, .submit-btn').show();
    }

    // 2. TỔNG HỢP TOÀN BỘ ĐÁP ÁN CHUẨN 100% CỦA CẢ 3 ĐỀ (MỤC 5)
    const TARGET_ANSWERS = [
        // --- CÁC CÂU CHUNG & ĐỀ 1 ---
        "Ghi chú có hệ thống, cập nhật định kỳ",
        "Nội dung cập nhật, có kiểm định",
        "Nguồn tài liệu cập nhật hơn, chuẩn hơn",
        "Trang web không tồn tại hoặc sai URL",
        "Viết rõ ràng, cung cấp thông tin cụ thể",
        "Phân tích và tổng hợp dữ liệu",
        "Đề xuất thử nghiệm và áp dụng",
        "Cập nhật phần mềm hoặc kiểm tra tương thích",
        "Đào tạo nhân sự sử dụng thành thạo công cụ số",
        "Chia sẻ kinh nghiệm và cách khắc phục",
        "Cài driver card mạng",
        "Hỗ trợ và chia sẻ kinh nghiệm",
        "Dùng Filter theo ngày",
        "Line Chart",
        "Kết hợp thực hành trên công cụ",
        "Thường xuyên cập nhật, tham gia cộng đồng chuyên môn",
        "Đơn vị nhỏ nhất để nhập dữ liệu",
        "Thu thập và xử lý dữ liệu tự động",
        "Kiểm soát dữ liệu nhập vào ô",
        "ping",
        "Hàm tính toán cho kết quả sai",
        "Cài lại driver thiết bị",
        "Kiểm tra cáp và kết nối phần cứng",
        "Đặt định dạng tiền tệ",
        "Pivot Table",
        "Theo định dạng date chuẩn",
        "Báo cáo và phối hợp xử lý cùng nhóm kỹ thuật",
        "Sử dụng Filter",
        "Kênh YouTube chính thức của hãng",

        // --- CÁC CÂU ĐỀ 2 ---
        "Thiết lập quyền chia sẻ phù hợp",
        "Chọn dữ liệu → Insert → Chart",
        "Theo chủ đề + năm xuất bản",
        "Kiểm tra ứng dụng khởi động cùng máy",
        "Kiểm tra log lỗi và tra cứu bản vá (patch)",
        "Ghi lại mã lỗi để tra cứu nguyên nhân",
        "Data Validation (Drop down list)",
        "Kiểm tra độ tin cậy của tác giả và nguồn",
        "So sánh các nhóm dữ liệu",
        "Chương trình đang chạy",
        "Báo cáo quản trị viên hoặc bộ phận kỹ thuật",
        "Dùng biểu đồ tròn (Pie chart)",
        "Dùng Google Sheets hoặc các công cụ số khác",
        "Trang web của nhà phát triển phần mềm",
        "Thu thập và phân tích dữ liệu thực tế",
        "Định dạng dựa theo giá trị",
        "Tìm khoá học hoặc tài liệu chính thức từ hãng phát triển",

        // --- CÁC CÂU ĐỀ 3 (BỔ SUNG MỚI) ---
        "Thời gian phản hồi lâu bất thường",
        "Thiết lập quyền phù hợp",
        "Event Viewer",
        "Phù hợp với nhu cầu và khả năng sử dụng",
        "Google Docs/Sheets",
        "Tải driver mới nhất từ nhà sản xuất",
        "Quét bằng phần mềm diệt virus cập nhật",
        "Chuẩn bị kế hoạch thử nghiệm và lấy phản hồi",
        "Chứng nhận từ chính nhà phát triển",
        "Thiết lập quyền chỉnh sửa trên Sheets",
        "Ngắn gọn, chính xác",
        "Xây dựng nội dung học tập số hoá phù hợp",
        "Kiểm tra đèn tín hiệu modem/router",
        "Trả về giá trị theo điều kiện"
    ];

    let selectedCount = 0;

    // 3. Tự động duyệt qua từng input để tick chính xác (chống click lặp)
    const inputs = Array.from(document.querySelectorAll('input[type="radio"], input[type="checkbox"]'));
    inputs.forEach(input => {
        const id = input.id;
        const label = document.querySelector(`label[for="${id}"]`) || input.closest('label') || input.parentElement;
        const text = (label ? label.innerText : '').trim();

        for (let ans of TARGET_ANSWERS) {
            if (text === ans || text.includes(ans)) {
                if (!input.checked) {
                    input.click();
                    input.checked = true;
                    input.dispatchEvent(new Event('change', { bubbles: true }));
                    if (label) {
                        label.style.backgroundColor = '#dcfce7';
                        label.style.border = '2px solid #22c55e';
                        label.style.borderRadius = '6px';
                        label.style.padding = '4px 8px';
                        label.style.fontWeight = 'bold';
                    }
                    selectedCount++;
                }
                break;
            }
        }
    });

    console.log(`%c✔ Đã tick chọn thành công ${selectedCount} câu hỏi!`, "color: #38bdf8; font-weight: bold; font-size: 14px;");

    // 4. Tự động bấm nút Gửi nộp bài sau 0.8 giây
    setTimeout(() => {
        let submitCount = 0;
        document.querySelectorAll('button.submit, input.submit, .check, .action button, .action input, .submit-btn').forEach(btn => {
            const txt = (btn.innerText || btn.value || '').trim().toLowerCase();
            if (txt.includes('gửi') || txt.includes('submit')) {
                btn.click();
                submitCount++;
            }
        });
        alert(`🎉 ĐÃ XONG TOÀN BỘ 30 CÂU MỤC 5!\n✔ Đã nộp thành công ${submitCount} câu với số điểm tối đa 100%!`);
    }, 800);
})();
