# HƯỚNG DẪN TỔNG QUAN SEMINAR & KỊCH BẢN THUYẾT TRÌNH (NHÓM 3)

---

## 📌 1. SEMINAR SẼ LÀM GÌ? (Nhiệm vụ & Phạm vi)

* **Tên đề tài tổng thể:** `Risk and Schedule Management in the Online Course Registration System Construction Project`
* **Phạm vi Seminar (Phần 1):** Khởi tạo dự án (PMBOK 1.0 Initiating, Project Charter) & Quản trị Rủi ro Phần mềm.
* **Mục tiêu chuyên đề:**
  1. Nghiên cứu nguyên lý **Quản trị Rủi ro trong Dự án Phần mềm** (theo chuẩn PMBOK 9th Ed của Kathy Schwalbe).
  2. Phân tích 4 nhóm rủi ro chính: Thị trường, Tài chính, Công nghệ, Con người & Mô hình SWOT cho dự án di động HSU.
  3. Áp dụng toán học trong **Lý thuyết Hữu dụng Rủi ro (Risk Utility Theory)**: 3 thái độ với rủi ro (Né tránh, Trung lập, Mạo hiểm), tính toán giá trị EMV, NPV, ROI.
  4. Phân tích thực tế **Case study JWD Consulting**: Phân định ranh giới WBS 1.0 Initiating (Phần 1 - Seminar) vs WBS 2.0-5.0 (Phần 2-5 - Project Đồ án).

---

## 📄 2. CHI TIẾT SẢN PHẨM CẦN NỘP (Deliverables Checklist)

| STT | Sản phẩm nộp | Vị trí file trong Repository | Nội dung chi tiết |
|:---:|---|---|---|
| **1** | **Báo cáo Chuyên đề (Report)** | [Seminar/report.md](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Seminar/report.md) | Báo cáo nghiên cứu chi tiết 5 phần (~500 dòng), gồm cơ sở lý thuyết, phân tích rủi ro, toán học Risk Utility, bài toán NPV/ROI đề thi HSU, case study JWD Consulting. |
| **2** | **Slide Trình chiếu (Slide Deck)** | [Seminar/index.html](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Seminar/index.html) | 12 Slide tương tác tràn màn hình full frame, tích hợp hình ảnh 3D đồ họa, bộ giả lập Risk Utility SVG & bộ tính NPV/ROI tự động. |
| **3** | **Cổng Thông tin Root & HD** | [index.html](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/index.html) | Trang Web Cổng chọn bài thuyết trình + Hướng dẫn nộp bài. |
| **4** | **Mã nguồn Repository** | GitHub `origin/main` | Kho lưu trữ mã nguồn đầy đủ được đẩy lên GitHub `https://github.com/DYBInh2k5/Seminar_And_Project_QTDAPM.git` |

---

## 🎤 3. KỊCH BẢN PHÂN CÔNG THUYẾT TRÌNH THEO SLIDE (NHÓM 3)

### 👑 **Phần 1: Mở đầu & Tổng quan Rủi ro (Slide 1 - Slide 3)** — *Võ Duy Bình (Nhóm trưởng)*
* **Slide 1:** Giới thiệu đề tài chung, thành viên Nhóm 3, phân định ranh giới Seminar (Phần 1: Khởi tạo & Rủi ro).
* **Slide 2:** Tổng quan & Quy trình 5 bước Quản trị rủi ro PMBOK (Nhận diện, Phân tích định tính, Định lượng, Ứng phó, Giám sát).
* **Slide 3:** Rủi ro Thị trường (Market Risk) & Rủi ro Tài chính (Financial Risk) trong ngành phần mềm.

### 👨‍💻 **Phần 2: SWOT & Rủi ro Kỹ thuật (Slide 4 - Slide 5)** — *Hồng Bảo Khang*
* **Slide 4:** Mô hình SWOT nhận diện rủi ro cho dự án Ứng dụng di động Đăng ký môn học HSU.
* **Slide 5:** Rủi ro Công nghệ (Technology Risk) & Lỗi bảo mật theo chuẩn **OWASP Top 10:2025** (Shift-left security).

### 👨‍💻 **Phần 3: Rủi ro Con người & Bài học Kinh nghiệm (Slide 6 - Slide 7)** — *Nguyễn Thanh Quang*
* **Slide 6:** Rủi ro Con người (People Risk) & PMI Talent Gap (Thiếu hụt 30 triệu chuyên gia, rủi ro nhân sự chủ chốt Key-person, giao tiếp trễ).
* **Slide 7:** Đánh giá rủi ro qua 4 Case study thảm họa IT kinh điển (Equifax 1.38 tỷ USD, Healthcare.gov sập tải, Knight Capital phá sản trong 45 phút, FBI VCF).

### 👨‍💻 **Phần 4: Kế hoạch Ứng phó & Lý thuyết Hữu dụng (Slide 8 - Slide 10)** — *Trần Bá Lợi*
* **Slide 8:** 4 Chiến lược phản hồi rủi ro (Avoid, Mitigate, Transfer, Accept) & Bảng Đăng ký rủi ro (Risk Register).
* **Slide 9:** Lý thuyết Hữu dụng Rủi ro (Risk Utility Theory) - 3 thái độ: Né tránh (Risk-Averse), Trung lập (Risk-Neutral), Mạo hiểm (Risk-Seeking).
* **Slide 10:** **Demo trực tiếp Trình mô phỏng SVG** đường cong hàm hữu dụng U(x) tương tác trên slide.

### 👑 **Phần 5: Tính toán Tài chính & Tổng kết JWD (Slide 11 - Slide 12)** — *Võ Duy Bình (Nhóm trưởng)*
* **Slide 11:** **Demo trực tiếp Bộ tính toán NPV/ROI** với bài toán đầu tư HSU (Dự án A vs Dự án B).
* **Slide 12:** Phân tích thực tế JWD Consulting (WBS 1.0 Initiating vs WBS 2.0-5.0 Project), 5 bài học kinh nghiệm & Tổng kết Seminar.
