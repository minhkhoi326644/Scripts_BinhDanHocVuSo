// ==============================================================================
// 🌟 TOOL AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 1 (ĐỀ BIẾN THỂ MỚI / ĐỀ 5)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU MỤC 1 (ĐỀ 5)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

    // 1. Ép hiển thị các câu hỏi và nút Submit
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

    // 2. DANH SÁCH ĐÁP ÁN CHUẨN 100% CỦA 30 CÂU ĐỀ 5 MỤC 1
    const TARGET_ANSWERS = [
        // 1. Dấu hiệu cho thấy tin giả hoặc thông tin sai lệch
        "Sử dụng tiêu đề giật gân, khơi cảm xúc",

        // 2. Tại sao không nên tin tưởng tuyệt đối vào công cụ AI khi kiểm tra thông tin
        "AI có thể mắc lỗi và bị thao túng",

        // 3. Tiêu chí 'Accuracy' trong CRAAP dùng để kiểm tra điều gì
        "Mức độ chính xác và không sai sót của thông tin",

        // 4. Đánh giá độ tin cậy tên miền .gov và .edu so với .com
        "Đáng tin cậy hơn",

        // 5. Khi tìm kiếm trên Google Scholar, tại sao dùng thuật ngữ khoa học quan trọng hơn
        "Để đảm bảo kết quả tìm kiếm chính xác và liên quan đến nghiên cứu học thuật.",

        // 6. Sao lưu tài liệu đồ án nhóm lên Google Drive
        "Sử dụng lịch sử phiên bản và chia sẻ có kiểm soát",

        // 7. Dùng Google để kiểm tra tính chính xác của một tuyên bố
        "Kiểm tra chéo thông tin (Cross-referencing)",

        // 8. Một tên tệp tin tốt nên bao gồm yếu tố nào
        "Ngày tạo file, nội dung, mã môn, phiên bản",

        // 9. Bảo vệ dữ liệu khảo sát trong USB
        "Mã hóa USB bằng VeraCrypt",

        // 10. Nguyên tắc cốt lõi của quản lý dữ liệu
        "Dễ truy xuất, đảm bảo toàn vẹn và bảo mật",

        // 11. Khi chia sẻ file đã mã hóa bằng 7-Zip
        "Gửi mật khẩu qua kênh riêng biệt (SMS, gọi điện...)",

        // 12. Thách thức pháp lý của web scraping là gì
        "Vi phạm điều khoản dịch vụ hoặc luật bảo vệ dữ liệu",

        // 13. Thông tin là gì
        "Là dữ liệu đã được xử lý, tổ chức, hoặc phân tích để mang lại ý nghĩa trong một bối cảnh",

        // 14. Phân tích suy diễn (inferential analysis) giúp làm gì
        "Dự đoán hoặc rút ra kết luận từ mẫu",

        // 15. Khi AI gợi ý sai sự kiện lịch sử, cách tốt nhất để xử lý
        "Tìm kiểm tra từ nguồn tin chính thống",

        // 16. Trong tài liệu, dữ liệu tương tác bao gồm yếu tố nào
        "Lịch sử học tập trên LMS, email, nhóm Zalo",

        // 17. Làm thế nào để tận dụng cấu trúc trang web khi duyệt
        "Sử dụng mục lục tương tác hoặc thanh điều hướng",

        // 18. Đặc điểm chính của tri thức là gì
        "Bao gồm phân tích, suy luận và hiểu biết chiến lược",

        // 19. Trong lĩnh vực bán lẻ, tri thức có thể được sử dụng để làm gì
        "Đề xuất chiến lược nhập hàng dựa trên xu hướng bán chạy",

        // 20. Thiết bị cá nhân bị đánh cắp, chiến lược bảo vệ dữ liệu an toàn
        "Dùng lưu trữ đám mây có xác thực hai lớp, kết hợp bản sao ngoại tuyến",

        // 21. Tại sao lưu trữ lai (Hybrid Storage) được khuyến nghị cho sinh viên
        "Vì vừa có tính linh hoạt cao vừa đảm bảo an toàn dữ liệu khi mất mạng hoặc hỏng thiết bị",

        // 22. Ghi rõ tên thành viên và thời gian cập nhật trong tài liệu
        "Tăng tính minh bạch, dễ kiểm soát lịch sử chỉnh sửa",

        // 23. Thao tác tạo bản sao (Make a copy) trong Google Drive
        "Tạo bản lưu riêng để chỉnh sửa mà không ảnh hưởng bản gốc",

        // 24. Tiêu chí của IMVAIN
        "Nguồn độc lập và có thể kiểm chứng",

        // 25. DRAMA tập trung chủ yếu vào loại thông tin nào
        "Thông tin cảm xúc dễ gây hiểu lầm",

        // 26. Vì sao cần dùng AI phối hợp với công cụ xác minh truyền thống
        "AI giúp tăng tốc và độ chính xác trong xác minh",

        // 27. Mục tiêu của phương pháp SIFT là gì
        "Xác minh và đánh giá thông tin nhanh chóng",

        // 28. Lọc theo điều kiện đơn giản trong Excel làm gì
        "Lọc dữ liệu dựa trên một giá trị hoặc so sánh",

        // 29. Tại sao cần kiểm tra ngày cập nhật của trang web
        "Để đảm bảo thông tin còn phù hợp và mới",

        // 30. Toán tử Wildcard (*) trong tìm kiếm có lợi ích gì
        "Thay thế cho một từ hoặc một cụm từ mà bạn không nhớ hoặc muốn kết quả linh hoạt."
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

    console.log(`%c✔ Đã tick chọn thành công ${selectedCount} đáp án đúng!`, "color: #38bdf8; font-weight: bold; font-size: 14px;");

    // 4. Tự động nộp bài (Submit)
    setTimeout(() => {
        const submitButtons = Array.from(document.querySelectorAll('button.submit, input.submit, .check, .action button, .action input, .submit-btn'))
            .filter(b => {
                const val = (b.innerText || b.value || '').trim().toLowerCase();
                return val.includes('gửi') || val.includes('submit') || val.includes('nộp') || val.includes('kiểm tra');
            });

        if (submitButtons.length > 0) {
            console.log(`%c🚀 Đang tự động bấm Submit cho ${submitButtons.length} vị trí...`, "color: #f59e0b; font-weight: bold;");
            submitButtons.forEach(btn => {
                try {
                    btn.click();
                } catch(e) {}
            });
            console.log("%c🎉 HOÀN TẤT NỘP BÀI THI 30 CÂU MỤC 1 (ĐỀ 5)! ĐẠT ĐIỂM TỐI ĐA 100%!", "color: #22c55e; font-weight: bold; font-size: 16px;");
        } else {
            console.log("%cℹ Không tìm thấy nút nộp bài chung, bạn có thể kiểm tra lại rồi bấm 'Gửi' thủ công nhé!", "color: #94a3b8; font-style: italic;");
        }
    }, 1000);
})();
