# Hệ thống Đăng ký Học phần Trực tuyến HSU & Dashboard Quản trị Tiến độ

Đây là sản phẩm dự án (Project) cho môn học **Quản trị dự án phần mềm (SW403DE01)** tại trường Đại học Hoa Sen (HSU).

* **Nhóm thực hiện:** Nhóm 3
* **Sinh viên thực hiện:**
  * Võ Duy Bình - MSSV: 22301500 (Nhóm trưởng)
  * Hồng Bảo Khang - MSSV: 22101347
  * Trần Bá Lợi - MSSV: 22300236
  * Nguyễn Thanh Quang - MSSV: 22110739
* **Lớp:** SW403DE01

---

## 1. Cấu trúc thư mục dự án
* [index.html](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Project/index.html): Layout HTML Single Page Application gồm 3 phân hệ chính.
* [styles.css](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Project/styles.css): CSS định hình giao diện Dark/Light mode, Responsive Grid, thời khóa biểu và biểu đồ Gantt.
* [script.js](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Project/script.js): Logic nghiệp vụ đăng ký học phần (kiểm tra điều kiện) và thuật toán phân tích tiến độ Đường găng (Critical Path).
* [project_plan.md](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Project/project_plan.md): Báo cáo Kế hoạch Phát triển Phần mềm (SDP) chi tiết 13 mục chuẩn môn học.

---

## 2. Các phân hệ tương tác của ứng dụng

### Phân hệ 1: Cổng Sinh viên (Student Portal)
Mô phỏng trải nghiệm đăng ký môn học trực tuyến của sinh viên HSU:
* **Xác thực:** Đăng nhập thử nghiệm bằng MSSV: `22301500` (Võ Duy Bình - Nhóm trưởng) hoặc bất kỳ MSSV nào của thành viên nhóm.
* **Đăng ký / Hủy học phần:** Chọn đăng ký nhanh các môn học đang mở lớp. Hệ thống tự động kiểm tra:
  * *Số tín chỉ tối đa:* Báo lỗi nếu đăng ký quá 20 tín chỉ trong học kỳ.
  * *Môn tiên quyết:* Ngăn cấm đăng ký lớp nếu chưa hoàn thành môn học tiên quyết.
  * *Trùng lịch học:* Phát hiện trùng lịch học giữa các lớp đăng ký.
  * *Sĩ số lớp:* Ngăn chặn đăng ký khi lớp học phần đã đầy.
* **Thời khóa biểu cá nhân:** Tự động vẽ lịch học các môn đã đăng ký thành công lên bảng lịch tuần trực quan.
* **Chương trình đào tạo:** Tra cứu tiến độ học tập cá nhân.
* **Lịch sử giao dịch:** Ghi lại vết giao dịch đăng ký/hủy môn thời gian thực.

### Phân hệ 2: Cổng Phòng Đào tạo (Admin Portal)
Mô phỏng chức năng quản lý học vụ:
* **Mở/Đóng đăng ký:** Bấm nút điều khiển cổng đăng ký học phần toàn trường.
* **Điều chỉnh sĩ số lớp học phần:** Cho phép tăng/giảm sĩ số tối đa của từng lớp (sẽ cập nhật ngay lập tức sang cổng sinh viên).
* **Báo cáo doanh thu & Thống kê:** Báo cáo tỷ lệ lấp đầy lớp học và doanh thu dự kiến dưới dạng Excel.

### Phân hệ 3: Dashboard Quản lý Dự án (PM Portal)
Trình giả lập quản trị tiến độ dự án 12 tuần của nhóm phát triển:
* **Biểu đồ Gantt tương tác:** Biểu diễn các đầu việc WBS theo tuần.
* **Trình giả lập trễ tiến độ:** Kéo các thanh trượt giả lập trễ tiến độ cho từng Task:
  * Khi lùi các Task thuộc **Đường găng** (màu đỏ như *Thu thập yêu cầu*, *Backend*), toàn bộ các mốc phía sau tự động trượt theo và dời ngày bàn giao dự án sang tuần 13, 14, 15...
  * Khi lùi các Task ngoài đường găng (màu xanh lá như *Frontend*, *Database*), tiến độ dự án sẽ **không bị ảnh hưởng** chừng nào độ trễ chưa vượt quá thời gian đệm (Slack time).

---

## 3. Hướng dẫn chạy ứng dụng
1. Mở thư mục dự án [Project/](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Project).
2. Nhấp đúp chuột vào file [index.html](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Project/index.html) để chạy trực tiếp trên bất kỳ trình duyệt web nào. Không cần cài đặt máy chủ hay cơ sở dữ liệu cồng kềnh.
3. Chuyển đổi giữa các Cổng thông qua menu tab ở header trên cùng.
