# CHUYÊN ĐỀ BÁO CÁO (SEMINAR) - QUẢN TRỊ RỦI RO DỰ ÁN PHẦN MỀM

Tài liệu này cung cấp cái nhìn tổng quan về nội dung Chuyên đề báo cáo (Seminar) và hướng dẫn chi tiết các sản phẩm cần phải nộp cho môn học **Quản trị dự án phần mềm (SW403DE01)** tại trường Đại học Hoa Sen (HSU).

---

## 1. Tổng quan đề tài Chuyên đề (Seminar Overview)
* **Tên đề tài:** Quản trị rủi ro trong các dự án phần mềm: Nghiên cứu các nguồn rủi ro phổ biến, lập kế hoạch ứng phó và ứng dụng Lý thuyết hữu dụng của rủi ro (Risk Utility Theory).
* **Nhóm thực hiện:** Nhóm 3 (Quản lý dự án phần mềm)
* **Sinh viên thực hiện:** 
  * Võ Duy Bình - MSSV: 22301500 (Nhóm trưởng)
  * Hồng Bảo Khang - MSSV: 22101347
  * Trần Bá Lợi - MSSV: 22300236
  * Nguyễn Thanh Quang - MSSV: 22110739
* **Lớp:** SW403DE01.
* **Mục tiêu đề tài:** 
  1. Phân tích 4 nguồn rủi ro phần mềm cốt lõi (Thị trường, Tài chính, Công nghệ, Con người).
  2. Áp dụng ma trận phân tích SWOT vào dự án thực tế tại HSU: *Xây dựng ứng dụng di động Đăng ký môn học*.
  3. Nghiên cứu sâu về Lý thuyết hữu dụng của rủi ro (Risk Utility Theory) với 3 nhóm thái độ (Né tránh, Trung lập, Mạo hiểm).
  4. Giải quyết bài toán tài chính định lượng so sánh 3 phương án đầu tư Dự án A, B, C tại mức chiết khấu 5% (theo đề thi thực tế HSU).
  5. Tích hợp quản trị rủi ro vào Kế hoạch phát triển phần mềm (SDP HSU).
  6. Phân tích case study thực tế từ sách giáo trình: *JWD Consulting*.

---

## 2. Các sản phẩm cần nộp (Deliverables to Submit)
Theo đề cương môn học (Syllabus) tại mục **Group Case-study Presentation**, sinh viên cần chuẩn bị và nộp đầy đủ các tài liệu sau:

| STT | Tài liệu yêu cầu (Syllabus) | File tương ứng trong thư mục | Định dạng & Hướng dẫn |
| :--- | :--- | :--- | :--- |
| **1** | **Báo cáo chuyên đề (Reporting Word file)** | [report.md](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Seminar/report.md) | File Markdown chứa toàn bộ nội dung lý thuyết chi tiết, ma trận SWOT, công thức và lời giải toán học NPV/ROI. *Mẹo:* Bạn có thể dùng tiện ích mở rộng Markdown PDF của VS Code hoặc các trang web chuyển đổi để xuất file này sang Word/PDF cực kỳ chuyên nghiệp trước khi nộp. |
| **2** | **Slide trình chiếu (Presentation file)** | [index.html](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Seminar/index.html) | Bộ slide thuyết trình tương tác cao HTML5/CSS3/JS, chạy mượt mà trực tiếp trên mọi trình duyệt. Tích hợp **2 bộ giả lập tương tác trực quan (Interactive Tools)** ở slide 6 và slide 7. |
| **3** | **Bảng tiến độ & Tài chính tính toán (Worked schedule / calculation file)** | Tích hợp trong [index.html](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Seminar/index.html) | Công cụ tính toán tài chính so sánh NPV/ROI live (ở Slide 7) cho phép kéo trượt thay đổi tỷ lệ chiết khấu $r$ từ 0% đến 20% và tự động vẽ lại biểu đồ cột SVG động. |
| **4** | **Tài liệu tham khảo (Topic materials)** | [jwd_case_study.txt](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Seminar/jwd_case_study.txt) và thư mục `Ebooks/` | Tài liệu nghiên cứu về Case study JWD Consulting và các giáo trình chính (Kathy Schwalbe). |

---

## 3. Hướng dẫn sử dụng Bộ Slide thuyết trình tương tác
Bộ slide thuyết trình nằm ở các file:
* Cấu trúc Layout: [index.html](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Seminar/index.html)
* Phong cách giao diện: [styles.css](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Seminar/styles.css)
* Logic & Đồ họa SVG: [script.js](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Seminar/script.js)

### Cách chạy slide trình diễn:
1. Nhấp đúp chuột vào file [index.html](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Seminar/index.html) để mở bằng bất kỳ trình duyệt nào (Chrome, Edge, Firefox).
2. Dùng phím **Mũi tên sang phải / Phím cách (Space)** để tiến tới slide tiếp theo; dùng **Mũi tên sang trái** để lùi lại slide trước.
3. Bật chế độ **Sáng/Tối (Light/Dark Mode)** bằng nút tròn ở góc phải phía trên của màn hình để phù hợp với môi trường ánh sáng phòng học.
4. **Slide 6 (Risk Utility Simulator):** Kéo thanh trượt thay đổi số tiền $x$ để xem sự dịch chuyển các giá trị hữu dụng và thái độ tương ứng trực tiếp trên đồ thị hàm hữu dụng dạng SVG.
5. **Slide 7 (NPV/ROI Calculator):** Click chọn các Dự án A, B, C hoặc kéo thanh trượt tỷ suất chiết khấu $r$ để trình diễn trực tiếp với giảng viên về cách thay đổi của NPV và ROI tương ứng, hệ thống sẽ đưa ra khuyến nghị đầu tư tự động.
