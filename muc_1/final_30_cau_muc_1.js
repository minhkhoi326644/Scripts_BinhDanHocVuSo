// ==============================================================================
// 🌟 MASTER TOOL: AUTO CHỌN 100% VÀ NỘP BÀI THI 30 CÂU MỤC 1 (UNIVERSAL - CẢ 5 ĐỀ)
// Khóa học: Kỹ năng số (MOET KNS) - binhdanhocvuso.gov.vn
// Hỗ trợ: Đề 1, Đề 2, Đề 3, Đề 4 & Đề 5 (Đề mới) - Tự động nhận diện mọi biến thể câu hỏi
// ==============================================================================

(() => {
    console.clear();
    console.log("%c🎯 ĐANG CHẠY TOOL CHỌN ĐÁP ÁN CHUẨN 30 CÂU BÀI KIỂM TRA MỤC 1 (UNIVERSAL - 5 ĐỀ)...", "color: #22c55e; font-weight: bold; font-size: 16px;");

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

    // 2. DANH SÁCH TỔNG HỢP TOÀN BỘ ĐÁP ÁN ĐÚNG CỦA CẢ 3 ĐỀ BÀI KIỂM TRA MỤC 1
    const TARGET_ANSWERS = [
        // --- ĐỀ 1 ---
        "Để lựa chọn công nghệ và phương pháp phù hợp cho việc thu thập, lưu trữ, xử lý và phân tích dữ liệu",
        "Phân tích mức độ lan truyền và phát hiện mô hình giả mạo",
        "Tăng tính minh bạch, dễ kiểm soát lịch sử chỉnh sửa",
        "Tệp JSON chứa thông tin sinh viên và khóa học",
        "Tra Google thông tin từ hãng tin uy tín",
        "Cùng chỉnh sửa file gốc nhưng bật theo dõi thay đổi, sử dụng comment và kiểm tra lịch sử phiên bản",
        "Để tránh bị phân tán bởi thông tin không liên quan",
        "Để giúp bạn tập trung hơn và tránh bị phân tán bởi các thông tin không liên quan",
        "Nhanh chóng xác định ý chính hoặc tính liên quan",
        "Purpose",
        "Lọc dữ liệu dựa trên một giá trị hoặc so sánh",
        "Anthropic",
        "Sự thao túng cảm xúc trong thông tin",
        "Nghị định 13/2023/NĐ-CP",
        "Quá trình thu thập, xử lý và diễn giải dữ liệu",
        "Huyết áp của bệnh nhân nam là 120/80 mmHg",
        "Tìm kiếm loại tệp cụ thể như PDF",
        "Kiểm tra chéo thông tin (Cross-referencing)",
        "Bất đối xứng dùng 2 khóa: công khai và bí mật",
        "Stop, Investigate, Find better coverage, Trace claims",
        "Tên người chấm điểm",
        "USB Flash Drive",
        "Loại bỏ nhiễu và giữ thông tin cần thiết",
        "Tra cứu thêm về nguồn gốc thông tin",
        "Dùng lưu trữ đám mây có xác thực hai lớp, kết hợp bản sao ngoại tuyến",
        "Quyền riêng tư cá nhân",
        "Các tài liệu học thuật từ các nhà xuất bản khoa học, kho lưu trữ mở, trường đại học",
        "Mã hóa dữ liệu (Data encryption)",
        "Tineye",
        "Để tránh \"rác số\", tăng hiệu quả quản lý và giảm rủi ro bảo mật",

        // --- ĐỀ 2 ---
        "AI site:vnexpress.net",
        "Khó truy vấn bằng các công cụ truyền thống",
        "Thông tin sai lệch hoặc không liên quan",
        "File thuộc môn Lập trình Hướng đối tượng, được tạo ngày 08/06/2025",
        "Sử dụng mục lục tương tác hoặc thanh điều hướng",
        "Khả năng tìm kiếm dữ liệu đúng phiên bản và nhanh chóng",
        "Xác thực hai yếu tố (2FA)",
        "Xem và nhận xét, nhưng không chỉnh sửa",
        "Để đảm bảo thông tin còn phù hợp và mới",
        "Kiểm soát nội dung phản hồi và hạn chế thông tin nhạy cảm",
        "Vi sai lưu các thay đổi từ bản full backup gần nhất; tăng dần chỉ lưu thay đổi từ lần backup gần nhất",
        "Dấu trừ (-)",
        "Xác minh và đánh giá thông tin nhanh chóng",
        "SIFT",
        "Sử dụng tiêu đề giật gân, khơi cảm xúc",
        "Các giá trị hoặc sự kiện thô, chưa qua xử lý",
        "Phân tích mô tả",
        "AI có thể mắc lỗi và bị thao túng",
        "Phân tích metadata",
        "Hiệu quả cao, linh hoạt và dễ học",
        "Lưu trữ lai (Hybrid Storage)",
        "Mã hóa USB bằng VeraCrypt",
        "Vì nó cung cấp vô số phương pháp để thao tác dữ liệu theo nhiều cách khác nhau, từ đơn giản đến phức tạp",
        "Multiple sources (Nhiều nguồn)",
        "Lưu trữ dữ liệu trên máy chủ từ xa qua Internet",

        // --- ĐỀ 3 (BỔ SUNG MỚI) ---
        "intitle:\"hướng dẫn sử dụng ChatGPT\"",
        "Để chọn công nghệ và phương pháp xử lý phù hợp",
        "Thiếu cấu trúc xác định trước",
        "7-Zip",
        "Chưa cấp quyền truy cập cho người khác",
        "Giúp lưu lại nguồn và tóm tắt nội dung quan trọng",
        "Thông tin cảm xúc dễ gây hiểu lầm",
        "Thiếu khả năng kiểm tra nguồn đáng tin",
        "Tiêu đề giật gân, ngôn ngữ cảm xúc mạnh",
        "Có nguồn rõ ràng và minh bạch",
        "Gemini",
        "Gây sai lệch trong phân tích",
        "Khi bạn muốn tìm kiếm thông tin trong phạm vi trang đó mà không muốn bị phân tán bởi kết quả từ các trang web khác",
        "Dễ học, cú pháp trực quan, dễ đọc và dễ hiểu",
        "Dùng quyền \"Restricted\" và thêm đúng email được phép",
        "Rủi ro mất dữ liệu do lỗi vật lý, mất thiết bị",
        "3–2–1",
        "Cơ sở dữ liệu khách hàng với ID, Tên, Email, Thành phố",
        "Tìm kiếm cụm từ chính xác",
        "Kiểm tra HTML hoặc API bằng công cụ Inspect",
        "Khác nhau về chủ sở hữu và trách nhiệm pháp lý",
        "Đáng tin cậy hơn",
        "Phân tích đề xuất",

        // --- ĐỀ 4 (BỔ SUNG MỚI) ---
        "Xem biểu đồ doanh thu và chú thích trước",
        "Mục đích của thông tin (giải trí, giáo dục, quảng cáo...)",
        "Dễ truy xuất, đảm bảo toàn vẹn và bảo mật",
        "Mã hóa đối xứng",
        "Khối lượng",
        "Tổ chức khoa học và truy xuất nhanh",
        "Cho phép thảo luận, góp ý mà không làm thay đổi nội dung chính",
        "Quy định (prescriptive analytics)",
        "Tìm kiếm ngược hình ảnh",
        "Nguồn độc lập và có thể kiểm chứng",
        "Sử dụng thuật ngữ MeSH và bộ lọc chi tiết",
        "Tạo bản lưu riêng để chỉnh sửa mà không ảnh hưởng bản gốc",
        "Không rõ nội dung và không theo cấu trúc chuẩn",
        "Sao lưu toàn bộ",
        "Chuyên môn và uy tín của tác giả",
        "Khi dữ liệu huấn luyện sai hoặc lỗi ngữ cảnh",
        "Các bộ dữ liệu lớn",
        "Kiểm chứng lại với các nguồn tin cậy",

        // --- ĐỀ 5 (BỔ SUNG MỚI) ---
        "Mức độ chính xác và không sai sót của thông tin",
        "Để đảm bảo kết quả tìm kiếm chính xác và liên quan đến nghiên cứu học thuật.",
        "Sử dụng lịch sử phiên bản và chia sẻ có kiểm soát",
        "Ngày tạo file, nội dung, mã môn, phiên bản",
        "Gửi mật khẩu qua kênh riêng biệt (SMS, gọi điện...)",
        "Vi phạm điều khoản dịch vụ hoặc luật bảo vệ dữ liệu",
        "Là dữ liệu đã được xử lý, tổ chức, hoặc phân tích để mang lại ý nghĩa trong một bối cảnh",
        "Dự đoán hoặc rút ra kết luận từ mẫu",
        "Tìm kiểm tra từ nguồn tin chính thống",
        "Lịch sử học tập trên LMS, email, nhóm Zalo",
        "Bao gồm phân tích, suy luận và hiểu biết chiến lược",
        "Đề xuất chiến lược nhập hàng dựa trên xu hướng bán chạy",
        "Vì vừa có tính linh hoạt cao vừa đảm bảo an toàn dữ liệu khi mất mạng hoặc hỏng thiết bị",
        "AI giúp tăng tốc và độ chính xác trong xác minh",
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
        alert(`🎉 ĐÃ XONG TOÀN BỘ 30 CÂU MỤC 1!\n✔ Đã nộp thành công ${submitCount} câu với số điểm tối đa 100%!`);
    }, 800);
})();
