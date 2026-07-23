# QUẢN TRỊ DỰ ÁN PHẦN MỀM (SW403DE01) - ĐẠI HỌC HOA SEN (HSU)

Chào mừng bạn đến với kho lưu trữ mã nguồn và tài liệu học tập môn **Quản trị Dự án Phần mềm** của **Nhóm 3**. Đây là nơi tổng hợp toàn bộ các báo cáo chuyên đề, slide trình chiếu tương tác và ứng dụng đồ án thực tế được xây dựng và phát triển trong suốt học kỳ.

---

## 👥 THÀNH VIÊN NHÓM THỰC HIỆN (NHÓM 3)

| STT | Họ và Tên | Mã số Sinh viên | Vai trò trong Nhóm |
| :---: | :--- | :---: | :--- |
| **1** | **Võ Duy Bình** | **22301500** | **Nhóm trưởng**, BA, PM, Full-stack Dev |
| **2** | Hồng Bảo Khang | 22101347 | Lập trình viên Backend, Chuyên gia tài chính |
| **3** | Trần Bá Lợi | 22300236 | Lập trình viên Frontend, Chuyên gia QA |
| **4** | Nguyễn Thanh Quang | 22110739 | Phân tích viên, UI/UX Designer, Chuyên gia Rủi ro |

* **Giảng viên hướng dẫn:** Thầy Lê Thanh Tùng / Thầy Nguyễn Ngọc Tú
* **Lớp học phần:** SW403DE01 - HK23.1A HSU

---

## 🗺️ BẢN ĐỒ THƯ MỤC REPOSITORY (DIRECTORY MAP)

Dưới đây là sơ đồ tổ chức thư mục của kho lưu trữ này:

```text
📁 HSU_QT_DA_PM (Thư mục gốc)
├── 📄 index.html                      <- [Cổng thông tin Root Portal] kết nối Seminar và Project
├── 📁 Seminar                         <- [Chuyên đề Seminar lần 1 - Tuần 9]
│   ├── 📄 index.html                  <- Slide thuyết trình Seminar tương tác
│   ├── 📄 styles.css                  <- CSS định dạng slides (hỗ trợ in PDF)
│   ├── 📄 script.js                  <- Logic giả lập Hàm hữu dụng & Trình tính NPV
│   ├── 📄 report.md                   <- Báo cáo Chuyên đề chi tiết (Metadata & Lịch sử đầy đủ)
│   ├── 📄 kich_ban_thuyet_trinh.md    <- Kịch bản phân chia thoại nói chi tiết của nhóm
│   └── 📄 nội dung.md                 <- Dự thảo nội dung thô ban đầu của nhóm
├── 📁 Project                         <- [Đồ án Thực hành lần 2 - Tuần 12]
│   ├── 📄 index.html                  <- Cổng thông tin 3 Portal (Student, Admin, PM Gantt)
│   ├── 📄 styles.css                  <- CSS của ứng dụng và biểu đồ Gantt
│   ├── 📄 script.js                  <- Logic đăng ký môn học & Thuật toán CPM Đường găng
│   ├── 📄 project_plan.md             <- Báo cáo SDP 13 mục chuẩn đầu ra môn học
│   └── 📄 slides.html                 <- Slide báo cáo Đồ án Thực hành
└── 📁 Ebooks                          <- [Tài liệu tham khảo & Biểu mẫu HSU]
```

---

## 🎯 1. TỔNG QUAN MÔN HỌC (COURSE OVERVIEW)

Môn học **Quản trị Dự án Phần mềm (Software Project Management)** tại HSU trang bị cho sinh viên kiến thức, kỹ thuật và công cụ cần thiết để quản lý toàn bộ vòng đời của một dự án công nghệ. Nội dung cốt lõi của môn học bao gồm:
*   **Quy trình quản trị dự án:** Khởi tạo (Initiating), Lập kế hoạch (Planning), Thực thi (Executing), Giám sát & Kiểm soát (Monitoring & Controlling) và Đóng dự án (Closing) theo chuẩn **PMBOK**.
*   **Lập kế hoạch & Ước lượng:** Kỹ thuật ước lượng quy mô (Size), nỗ lực (Effort) và lập kế hoạch tiến độ (Schedule Baseline), phân bổ ngân sách (Cost).
*   **Quản trị rủi ro & Tiến độ:** Phân tích rủi ro định tính/định lượng, áp dụng **Lý thuyết hữu dụng (Risk Utility Theory)**, bài toán tài chính (**NPV, ROI, Payback Period**) và phân tích tiến độ qua phương pháp **Đường găng (Critical Path Method - CPM)**.

Môn học được chia làm 2 cột mốc nộp bài và đánh giá chính:

---

## 🎤 2. PHẦN 1: SEMINAR CHUYÊN ĐỀ (NỘP TUẦN 9)

Seminar tập trung vào nghiên cứu lý thuyết chuyên sâu về quản lý rủi ro và các bước khởi động dự án.

### Đề tài Seminar
> **"Risk and Schedule Management & Risk Utility Theory"** (Ứng dụng thực tế vào dự án Cổng Đăng ký Môn học HSU và Case Study JWD Consulting).

### Nội dung khoa học chính
1.  **Nhận diện & Đánh giá Rủi ro:** Phân tích 4 nguồn rủi ro cốt lõi trong ngành phần mềm: **Thị trường** (Market), **Tài chính** (Financial), **Công nghệ** (Technology - theo chuẩn bảo mật *OWASP Top 10:2025* và *Technical Debt SEI*), và **Con người** (People - *PMI Talent Gap 2025* và *Key-person risk*).
2.  **Toán học Lý thuyết Hữu dụng (Risk Utility Theory):**
    *   3 nhóm thái độ rủi ro: Né tránh (**Risk-Averse** - Hàm lõm), Trung lập (**Risk-Neutral** - Hàm tuyến tính), và Mạo hiểm (**Risk-Seeking** - Hàm lồi).
    *   Ứng dụng toán học trong ra quyết định: Giá trị tiền tệ kỳ vọng (EMV) so với Giá trị hữu dụng kỳ vọng (Expected Utility).
3.  **Phân tích Tài chính Đầu tư:** Lập công thức toán học và bảng tính toán chỉ số khả thi của dự án (**NPV, ROI, Payback Period**).
4.  **Case Study JWD Consulting:** Phân tích cách khởi tạo dự án của Erica Bell và lập tài liệu **Project Charter** (Điều lệ dự án), Sổ theo dõi các bên liên quan (**Stakeholders Register**).

### Danh sách sản phẩm nộp (Deliverables Checklist - Seminar)
*   **[Báo cáo chi tiết (Bản Word/MD)](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Seminar/report.md):** Tệp Markdown đầy đủ tiêu đề bìa, mục lục, bảng lịch sử thay đổi phiên bản (Revision History) theo chuẩn IEEE/HSU.
*   **[Slide Trình chiếu tương tác](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Seminar/index.html):** Thiết kế slide phong cách Glassmorphism chuyên nghiệp, tích hợp bộ giả lập SVG Hàm hữu dụng tương tác thời gian thực và máy tính tài chính NPV tự động.
*   **[Kịch bản Thuyết trình](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Seminar/kich_ban_thuyet_trinh.md):** Phân chia chi tiết thời gian, người trình bày và lời thoại nói của từng thành viên trong nhóm.

---

## 💻 3. PHẦN 2: ĐỒ ÁN THỰC HÀNH (NỘP TUẦN 12)

Đồ án là sự kết hợp giữa tài liệu quản trị dự án chuẩn chỉnh và ứng dụng phần mềm thực tế mô phỏng quy trình nghiệp vụ.

### Đề tài Đồ án
> **"Online Course Registration System & Project Management Dashboard"** (Hệ thống Đăng ký Học phần HSU và Trình Giả lập Quản trị Tiến độ Dự án).

### Các tính năng công nghệ nổi bật trong ứng dụng
1.  **Cổng Sinh viên (Student Portal):**
    *   Đăng ký môn học thời gian thực với hệ thống tự động kiểm tra quy chế học vụ HSU: Báo lỗi nếu vượt quá **20 tín chỉ/học kỳ**, kiểm tra **môn tiên quyết** (Prerequisite checks), phát hiện **trùng lịch học** (Clash detection), và kiểm soát **sĩ số tối đa**.
    *   Tự động vẽ thời khóa biểu cá nhân trực quan dạng Grid 7 ngày trong tuần dựa trên các môn đã đăng ký thành công.
2.  **Cổng Phòng Đào tạo (Admin Portal):**
    *   Bật/Đóng cổng đăng ký môn học toàn trường.
    *   Điều chỉnh tăng/giảm sĩ số tối đa của từng lớp (tác động tức thời đến cổng sinh viên).
    *   Thống kê doanh thu học phí dự kiến và tỷ lệ lấp đầy lớp học phần dưới dạng báo cáo Excel.
3.  **Cổng Quản lý Dự án (PM Portal):**
    *   Biểu diễn trực quan biểu đồ Gantt tiến độ 12 tuần của nhóm phát triển.
    *   Tích hợp bộ công cụ giả lập trễ tiến độ: Áp dụng thuật toán **Đường găng (Critical Path Method - CPM)**. Khi thay đổi thời lượng của các task nằm trên đường găng (màu đỏ), hệ thống tự động tính toán đẩy lùi ngày nghiệm thu cuối cùng và hiển thị thời gian đệm (Slack time) của các task ngoài đường găng (màu xanh).

### Danh sách sản phẩm nộp (Deliverables Checklist - Project)
*   **[Kế hoạch Phát triển Phần mềm (SDP HSU)](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Project/project_plan.md):** Báo cáo đầy đủ 13 đề mục quản trị dự án, bao gồm Phạm vi, Stakeholders, Phân rã WBS, Gantt Chart, CPM, RACI Matrix, Kế hoạch rủi ro tiến độ, và Công cụ quản lý chất lượng.
*   **[Ứng dụng Phần mềm Web (SPA)](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Project/index.html):** Mã nguồn xây dựng ứng dụng chạy trực tiếp trên trình duyệt bằng HTML5, CSS3 và Vanilla Javascript.
*   **[Slide Báo cáo Đồ án](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Project/slides.html):** Hệ thống slide thuyết trình tổng kết đồ án cho lần thuyết trình thứ 2.

---

## 🚀 HƯỚNG DẪN CHẠY THỬ NGHIỆM TRÊN TRÌNH DUYỆT (HOW TO RUN)

Tất cả các sản phẩm web của nhóm được thiết kế chạy trực tiếp dưới dạng **Single Page Application (SPA)** mà không cần cấu hình cài đặt server phức tạp:

1.  Tải mã nguồn dự án về máy tính cá nhân.
2.  Mở tệp cổng thông tin gốc [index.html](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/index.html) bằng cách nhấp đúp chuột.
3.  Tại đây, bạn có thể dễ dàng chuyển hướng nhanh đến:
    *   Slide thuyết trình Seminar (Phần 1)
    *   Slide thuyết trình Đồ án (Phần 2)
    *   Hệ thống ứng dụng Đăng ký môn học & Dashboard CPM tiến độ.
4.  Để tải xuống slide dưới dạng **PDF**, chỉ cần bấm vào biểu tượng **Tải xuống PDF** (hình mũi tên trỏ xuống ổ đĩa) ở góc trên cùng bên phải thanh công cụ của mỗi slide, hệ thống sẽ tự động gọi trình in của trình duyệt được căn chỉnh sẵn kích thước khổ ngang (Landscape) rất đẹp mắt.
