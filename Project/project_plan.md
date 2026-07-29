# KẾ HOẠCH PHÁT TRIỂN PHẦN MỀM (SDP)
## RISK AND SCHEDULE MANAGEMENT IN THE ONLINE COURSE REGISTRATION SYSTEM CONSTRUCTION PROJECT

| Thông tin tài liệu | Chi tiết (Theo mẫu Project Plan.docx / HSU SDP) |
| :--- | :--- |
| **Dự án** | Cổng Đăng ký Học phần Trực tuyến HSU |
| **Tài liệu** | Kế hoạch Phát triển Phần mềm (Software Development Plan - SDP) |
| **Phiên bản** | v1.1 |
| **Ngày lập** | 29/07/2026 |
| **Trạng thái** | Approved / Baseline |
| **Tác giả** | Nhóm 3 (Lớp SW403DE01) |
| **Người duyệt** | Thầy Nguyễn Văn Sơn |

---

### LỊCH SỬ THAY ĐỔI TÀI LIỆU (REVISION HISTORY)

| Ngày | Phiên bản | Mô tả chi tiết thay đổi | Tác giả |
| :--- | :--- | :--- | :--- |
| 12/07/2026 | v0.1 | Khởi tạo cấu trúc SDP, mục tiêu và phạm vi | Võ Duy Bình |
| 16/07/2026 | v0.5 | Xây dựng WBS, Gantt Chart tiến độ và tài liệu thiết kế hệ thống | Trần Bá Lợi, Nguyễn Thanh Quang |
| 20/07/2026 | v0.8 | Tích hợp thuật toán CPM đường găng, kế hoạch rủi ro và QA | Hồng Bảo Khang |
| 23/07/2026 | v1.0 | Đồng bộ hóa code thực tế, giao diện dashboard và hoàn tất Baseline | Nhóm 3 |
| 29/07/2026 | v1.1 | Cấu trúc lại toàn bộ tài liệu theo quy trình PMBOK (Planning to Closing) | Nhóm 3 |

---

### THÔNG TIN NHÓM THỰC HIỆN

* **Môn học:** Quản trị dự án phần mềm (SW403DE01)
* **Trường:** Đại học Hoa Sen (HSU)
* **Nhóm thực hiện:** Nhóm 3
* **Thành viên:**
  * Võ Duy Bình - MSSV: 22301500 (Nhóm trưởng)
  * Hồng Bảo Khang - MSSV: 22101347
  * Trần Bá Lợi - MSSV: 22300236
  * Nguyễn Thanh Quang - MSSV: 22110739
* **Giảng viên hướng dẫn:** Thầy Nguyễn Văn Sơn

---

## MỤC LỤC
* [1. INITIATING (KHỞI TẠO DỰ ÁN)](#1-initiating-khởi-tạo-dự-án)
  * [1.1. Project Background & Business Case](#11-project-background--business-case)
  * [1.2. Stakeholder Identification & Strategy](#12-stakeholder-identification--strategy)
  * [1.3. Project Charter](#13-project-charter)
  * [1.4. Kick-off Meeting Summary](#14-kick-off-meeting-summary)
* [2. PLANNING (LẬP KẾ HOẠCH DỰ ÁN)](#2-planning-lập-kế-hoạch-dự-án)
  * [2.1. Team Planning Meeting](#21-team-planning-meeting)
  * [2.2. Team Charter (Team Contract)](#22-team-charter-team-contract)
  * [2.3. Project Scope Statement](#23-project-scope-statement)
  * [2.4. Work Breakdown Structure (WBS)](#24-work-breakdown-structure-wbs)
  * [2.5. Schedule and Cost Baseline](#25-schedule-and-cost-baseline)
  * [2.6. Risk Management Plan](#26-risk-management-plan)
  * [2.7. Communication Management Plan](#27-communication-management-plan)
  * [2.8. Quality Management Plan](#28-quality-management-plan)
  * [2.9. Procurement Management Plan](#29-procurement-management-plan)
* [3. EXECUTING (THỰC THI DỰ ÁN)](#3-executing-thực-thi-dự-án)
  * [3.1. Requirements Gathering](#31-requirements-gathering-survey-interviews)
  * [3.2. User Inputs Documentation](#32-user-inputs-documentation)
  * [3.3. Website Content Development](#33-website-content-development)
  * [3.4. Website Design (UI/UX)](#34-website-design-uiux)
  * [3.5. Website Construction](#35-website-construction-development--database-setup)
  * [3.6. Website Testing](#36-website-testing-functional-performance-security)
  * [3.7. Website Promotion](#37-website-promotion-marketing-campaigns)
  * [3.8. Website Roll-out (Go-live)](#38-website-roll-out-go-live)
  * [3.9. Benefits Realization Measurement](#39-benefits-realization-measurement)
* [4. MONITORING AND CONTROLLING (GIÁM SÁT & KIỂM SOÁT)](#4-monitoring-and-controlling-giám-sát--kiểm-soát)
  * [4.1. Progress Reports (Báo cáo EVM)](#41-progress-reports-báo-cáo-evm)
  * [4.2. Change Request & Control Process](#42-change-request--control-process)
* [5. CLOSING (ĐÓNG DỰ ÁN)](#5-closing-đóng-dự-án)
  * [5.1. Final Project Report](#51-final-project-report)
  * [5.2. Final Project Presentation](#52-final-project-presentation)
  * [5.3. Lessons Learned](#53-lessons-learned)
* [6. REFERENCES (TÀI LIỆU THAM KHẢO)](#6-references-tài-liệu-tham-khảo)
* [7. APPENDICES (PHỤ LỤC)](#7-appendices-phụ-lục)

---

## 1. INITIATING (KHỞI TẠO DỰ ÁN)

### 1.1. Project Background & Business Case
Cổng thông tin đăng ký học phần cũ của Đại học Hoa Sen (HSU) được xây dựng trên hạ tầng cũ, thường xuyên xảy ra tình trạng nghẽn mạng, sập server vật lý khi số lượng sinh viên truy cập đồng thời vượt quá 1,500 kết nối. Quá trình xử lý các ràng buộc học vụ (môn tiên quyết, trùng lịch) tốn nhiều thời gian xử lý thủ công của Phòng Đào tạo, dẫn đến chậm trễ kỳ học. 
**Business Case:** Xây dựng hệ thống đăng ký học phần trực tuyến mới dạng Web API và Mobile App thời gian thực, có khả năng chịu tải trên 15,000 người dùng đồng thời, thời gian phản hồi dưới 100ms. Lợi ích tài chính kỳ vọng giúp nhà trường tiết kiệm 40,000 USD/năm chi phí vận hành học vụ thủ công và tăng tính trải nghiệm, uy tín của nhà trường.

### 1.2. Stakeholder Identification & Strategy
Nhóm tiến hành lập danh sách các bên liên quan cốt lõi (Stakeholder Register) và chiến lược quản lý rủi ro giao tiếp:
*   **Võ Duy Bình (Sponsor / CEO):** Quyết định ngân sách và mốc bàn giao. Chiến lược: Báo cáo tiến độ theo mốc quan trọng, làm rõ hiệu quả NPV/ROI.
*   **Trần Bá Lợi (Project Manager):** Điều phối chung. Chiến lược: Họp giao ban tiến độ hàng tuần, quản lý đường găng.
*   **Hồng Bảo Khang & Nguyễn Thanh Quang (Dev Team):** Thiết kế database, lập trình API và UI/UX. Chiến lược: Kiểm soát code thông qua Git commit mỗi ngày.
*   **Phòng Đào tạo HSU (Client):** Chủ sở hữu nghiệp vụ. Chiến lược: Khảo sát quy chế học vụ chi tiết, bàn giao thử nghiệm UAT sớm.
*   **Sinh viên HSU (End User):** Chiến lược: Tối ưu UI/UX di động, tải trang nhanh để tránh nghẽn.

### 1.3. Project Charter
Tài liệu Điều lệ dự án đã được ký duyệt chính thức ngày **12/07/2026** với các nội dung cốt lõi:
*   **Tên dự án:** Cổng Đăng ký Học phần Trực tuyến HSU.
*   **Ngày khởi động:** 12/07/2026. Ngày kết thúc dự kiến: 15/08/2026.
*   **Ngân sách tối đa:** 150,000 USD (Chi phí cơ sở: 140,000 USD).
*   **Mục tiêu:** Xây dựng hệ thống đăng ký môn học mượt mà, phản hồi real-time, kiểm tra tự động 100% ràng buộc học vụ.

### 1.4. Kick-off Meeting Summary
Họp khởi động diễn ra vào ngày **13/07/2026** dưới hình thức trực tuyến qua Google Meet. Tham gia cuộc họp gồm toàn bộ thành viên nhóm 3 và đại diện Phòng Đào tạo HSU.
*   **Nội dung chính:** Giới thiệu nhân sự, công bố Project Charter, thống nhất quy chế làm việc nhóm, thiết lập kênh giao tiếp chính thức (Zalo/GitHub) và lập danh sách hành động ban đầu (Action Items).

---

## 2. PLANNING (LẬP KẾ HOẠCH DỰ ÁN)

### 2.1. Team Planning Meeting
Nhóm họp tuần để phân chia công việc chi tiết. Sử dụng mô hình RACI để xác định rõ vai trò chịu trách nhiệm (Responsible), phê duyệt (Accountable), tham vấn (Consulted), và nhận thông tin (Informed) đối với từng gói công việc trong WBS.

### 2.2. Team Charter (Team Contract)
Bản hợp đồng làm việc nhóm được ký kết giữa 4 thành viên, quy định rõ:
*   **Kênh truyền thông:** Họp định kỳ lúc 20:00 tối thứ Hai hàng tuần qua Google Meet. Trao đổi hàng ngày qua nhóm Zalo.
*   **Quy định phân phối mã nguồn:** Code phải được đẩy lên GitHub trước 23:00 mỗi ngày, bắt buộc viết Unit Test đi kèm.
*   **Quy trình giải quyết xung đột:** Quyết định cuối cùng thuộc về PM (Trần Bá Lợi), dựa trên sự tham vấn của các thành viên.

### 2.3. Project Scope Statement
*   **Phạm vi bao gồm (In-Scope):** Đăng nhập/Xác thực MSSV; Giao diện tìm kiếm, đăng ký/hủy học phần; Cập nhật sĩ số lớp real-time; Bộ kiểm tra ràng buộc tự động (Trùng lịch, môn tiên quyết, giới hạn tín chỉ); Cổng quản trị lớp và xuất báo cáo Excel dành cho Phòng Đào tạo.
*   **Ngoài phạm vi (Out-of-Scope):** Thanh toán học phí (sẽ chuyển hướng sang cổng ngân hàng); Quản lý điểm số sinh viên; Tích hợp LMS Moodle.
*   **Ràng buộc (Constraints):** Phải hoàn thành toàn bộ kiểm thử UAT trước ngày mở cổng đăng ký học kỳ mới; Ngân sách nhóm phát triển nhỏ.

### 2.4. Work Breakdown Structure (WBS)
Cấu trúc phân rã công việc chi tiết cho đồ án gồm 5 giai đoạn:
*   **1.0 Initiating (Khởi tạo):** 1.1 Khảo sát nghiệp vụ; 1.2 Soạn thảo Project Charter; 1.3 Họp Kick-off.
*   **2.0 Planning (Lập kế hoạch):** 2.1 Team Contract; 2.2 Scope Statement; 2.3 Thiết lập WBS & Gantt Chart; 2.4 Lập Kế hoạch Quản lý rủi ro và giao tiếp.
*   **3.0 Executing (Thực thi):** 3.1 Khảo sát người dùng; 3.2 Soạn thảo SRS; 3.3 Thiết kế Figma UI/UX; 3.4 Lập trình Database & API Backend; 3.5 Lập trình giao diện Frontend; 3.6 Tích hợp hệ thống.
*   **4.0 Monitoring & Controlling (Giám sát):** 4.1 Họp giao ban và báo cáo tiến độ tuần; 4.2 Theo dõi đường găng; 4.3 Cập nhật EVM & Risk Register.
*   **5.0 Closing (Đóng dự án):** 5.1 Kiểm thử chấp nhận UAT; 5.2 Tập huấn vận hành; 5.3 Bàn giao mã nguồn; 5.4 Lập báo cáo tổng kết dự án.

### 2.5. Schedule and Cost Baseline

#### Task Resources
Ngân sách nhân sự của dự án (BAC = 39.150.000 VND) được phân bổ chi tiết cho 74 ngày công làm việc thực tế:
1.  **Project Manager (PM - Trần Bá Lợi):** 8 ngày công (Đơn giá 600k/ngày) = 4.800.000 VND.
2.  **Business Analyst (BA - Nguyễn Thanh Quang hỗ trợ):** 13 ngày công (Đơn giá 500k/ngày) = 6.500.000 VND.
3.  **Developer Backend (Hồng Bảo Khang):** 27 ngày công (Đơn giá 550k/ngày) = 14.850.000 VND.
4.  **Developer Frontend (Võ Duy Bình):** 13 ngày công (Đơn giá 550k/ngày) = 7.150.000 VND.
5.  **Database Administrator (DBA - Hồng Bảo Khang kiêm nhiệm):** 3 ngày công (Đơn giá 500k/ngày) = 1.500.000 VND.
6.  **Kiểm thử viên (Tester - Nguyễn Thanh Quang):** 11 ngày công (Đơn giá 450k/ngày) = 4.950.000 VND.

#### Task Durations & Task Dependencies
Dự án kéo dài trong **12 tuần** (từ ngày 03/08/2026 đến ngày 07/10/2026). Các tác vụ lập trình Backend (3.1) và Frontend (3.2) chạy song song từ Tuần 5 đến Tuần 7. Tác vụ tích hợp hệ thống (3.3) bắt đầu ngay sau khi code Backend và Frontend hoàn thành.

#### Gantt Chart
Biểu đồ Gantt tiến độ cơ sở (Schedule Baseline) được thiết lập chi tiết trên MS Project, quy định mốc hoàn thành code complete ở Tuần 9 và chạy Go-live chính thức ở Tuần 11.

### 2.6. Risk Management Plan
Quy trình quản lý rủi ro tiến độ được chia làm 4 bước: Nhận diện ➔ Phân tích định tính ➔ Lập phương án ứng phó ➔ Giám sát. 
Nhóm lập bản đăng ký rủi ro (Risk Register) theo dõi 8 rủi ro chính. Rủi ro nghiêm trọng nhất là **R1: Quá tải hệ thống khi mở cổng đăng ký** (Xác suất: Trung bình, Ảnh hưởng: Rất cao, Điểm: 9) và **R2: Trễ tiến độ API Backend** (Xác suất: Cao, Ảnh hưởng: Cao, Điểm: 6).

### 2.7. Communication Management Plan
Quy định luồng giao tiếp thông tin trong dự án để tránh xung đột:
*   **Báo cáo tuần (Weekly Status Report):** PM gửi báo cáo tiến độ bằng file PDF qua email cho Sponsor (Bình) trước 17:00 chiều thứ Sáu hàng tuần.
*   **Kênh lưu trữ:** Tài liệu dự án được lưu trữ tập trung trên Google Drive, mã nguồn lưu trữ trên GitHub.

### 2.8. Quality Management Plan
Định nghĩa các tiêu chuẩn nghiệm thu chất lượng phần mềm (Definition of Done - DoD):
*   **Chức năng:** Đăng ký thành công lớp học phần phải cập nhật sĩ số thời gian thực và tự động khóa nút khi số chỗ trống về 0.
*   **Hiệu năng:** Hệ thống phải vượt qua bài kiểm thử tải (Load Test) mô phỏng 10,000 người dùng truy cập đồng thời, tỷ lệ phản hồi lỗi (Error Rate) dưới 0.1%.
*   **Bảo mật:** Đạt chứng nhận quét an toàn lỗ hổng bảo mật OWASP Top 10 năm 2025.

### 2.9. Procurement Management Plan
Do dự án có quy mô nhỏ, nhóm thống nhất không thuê ngoài nhân sự phát triển. Các hạng mục cần mua sắm bao gồm: 
*   Mua gói lưu trữ cơ sở dữ liệu và host API trên nền tảng đám mây Cloud với mức phí tối ưu.
*   Trang bị chứng chỉ bảo mật SSL/Domain chính thức cho máy chủ trường HSU.

---

## 3. EXECUTING (THỰC THI DỰ ÁN)

### 3.1. Requirements Gathering (Survey, Interviews)
Nhóm thực hiện khảo sát ý kiến trực tuyến từ hơn 500 sinh viên HSU để thu thập hành vi đăng ký môn học và tiến hành phỏng vấn trực tiếp cán bộ Phòng Đào tạo để nắm rõ quy chế học vụ (số tín chỉ tối thiểu 12, tối đa 24, cơ chế lọc môn học tiên quyết).

### 3.2. User Inputs Documentation
Chuyển dịch các yêu cầu thu thập được thành tài liệu Đặc tả yêu cầu phần mềm (SRS). Tài liệu định rõ luồng xử lý dữ liệu đầu vào (User Inputs) từ sinh viên (MSSV, mã lớp học phần đăng ký) và đầu ra (thời khóa biểu cá nhân cập nhật tức thời).

### 3.3. Website Content Development

#### 3.3.1. Templates and Tools
Xây dựng hệ thống UI Components thống nhất cho dự án (nút bấm responsive, bảng hiển thị lớp học phần, thông tin cảnh báo rủi ro). Sử dụng Figma làm công cụ thiết kế giao diện chính.

#### 3.3.2. Articles and Pages
Phát triển nội dung các trang giao diện cốt lõi: Trang thông tin sinh viên, Trang danh sách lớp học phần đang mở (lọc theo ngành học), và Trang Dashboard tổng quan dành cho Admin Phòng Đào tạo.

#### 3.3.3. Links and Resources
Tích hợp các liên kết nhanh dẫn tới Quy chế học vụ HSU và tài liệu hướng dẫn đăng ký học phần bằng video/PDF để hỗ trợ sinh viên thao tác dễ dàng.

#### 3.3.4. FAQ / Ask the Expert Section
Xây dựng mục Hỏi đáp nhanh (FAQ) tự động trả lời các câu hỏi thường gặp của sinh viên (Ví dụ: "Làm thế nào khi bị trùng lịch học?", "Khi nào được phép đăng ký môn học vượt tín chỉ giới hạn?").

#### 3.3.5. User Requests Feature
Xây dựng tính năng cho phép sinh viên gửi yêu cầu trực tuyến xin mở thêm sĩ số lớp học phần bị đầy. Yêu cầu này sẽ tự động chuyển đến tài khoản Admin của Phòng Đào tạo để xét duyệt.

### 3.4. Website Design (UI/UX)
Thiết kế giao diện portal tương thích đa nền tảng (Responsive). Tối ưu hóa luồng trải nghiệm (UX) để sinh viên có thể hoàn tất việc đăng ký học phần chỉ trong vòng 3 cú click chuột, giúp giảm lưu lượng tải phiên làm việc trên server.

### 3.5. Website Construction (Development & Database Setup)
*   **Database:** Thiết kế cơ sở dữ liệu trên hệ quản trị SQL tối ưu, viết các Trigger và Stored Procedure kiểm tra trùng lịch và môn tiên quyết trực tiếp ở tầng dữ liệu nhằm tăng tốc độ phản hồi.
*   **Backend:** Lập trình RESTful API bằng Node.js/Express, tích hợp Redis Caching để lưu trữ tạm thời sĩ số lớp đang mở, giảm tải tối đa cho database.

### 3.6. Website Testing (Functional, Performance, Security)
*   **Functional Testing:** Viết Unit Test tự động cho các hàm kiểm tra ràng buộc nghiệp vụ.
*   **Performance Testing:** Sử dụng công cụ kiểm thử tải mô phỏng tăng dần traffic lên 15,000 request đồng thời để theo dõi tài nguyên máy chủ (CPU, RAM).
*   **Security Testing:** Rà soát mã nguồn chống lại các lỗi SQL Injection và Cross-Site Scripting (XSS).

### 3.7. Website Promotion (Marketing Campaigns)
Thực hiện chiến dịch truyền thông nội bộ tại trường HSU bằng cách gửi email hướng dẫn đăng ký học phần trên hệ thống mới đến toàn bộ sinh viên trước ngày chạy chính thức 1 tuần.

### 3.8. Website Roll-out (Go-live)
Deploy chính thức mã nguồn lên server đám mây của trường HSU vào ngày **30/09/2026**. Thiết lập cơ chế dự phòng tự động (Auto-scaling) để tăng tài nguyên máy chủ khi tải tăng đột ngột.

### 3.9. Benefits Realization Measurement
Sau khi hệ thống vận hành thực tế, nhóm tiến hành đo lường hiệu quả: thời gian đăng ký trung bình của một sinh viên giảm từ **15 phút** xuống chỉ còn **1.5 phút**, không xảy ra bất kỳ sự cố nghẽn mạng hay sập server nào trong suốt kỳ đăng ký học phần.

---

## 4. MONITORING AND CONTROLLING (GIÁM SÁT & KIỂM SOÁT)

### 4.1. Progress Reports (Báo cáo EVM)
Tại mốc báo cáo ngày **16/09/2026** (Status Date), PM thực hiện tính toán các chỉ số EVM để giám sát sức khỏe dự án:
*   **BAC (Tổng ngân sách):** 39.150.000 VND
*   **PV (Giá trị kế hoạch):** 28.900.000 VND
*   **EV (Giá trị thu được):** 28.000.000 VND
*   **AC (Chi phí thực tế):** 28.328.500 VND
*   **SV (Độ lệch tiến độ):** EV - PV = -900.000 VND (Chậm tiến độ nhẹ).
*   **CV (Độ lệch chi phí):** EV - AC = -328.500 VND (Vượt chi phí nhẹ).
*   **SPI (Hiệu suất tiến độ):** EV / PV = 0.97 < 1 (Trễ hạn).
*   **CPI (Hiệu suất chi phí):** EV / AC = 0.99 < 1 (Vượt ngân sách).
*   **EAC (Dự báo chi phí khi hoàn thành):** BAC / CPI = 39.609.313 VND (Vượt ngân sách cơ sở khoảng 1.2%).
*   **Biện pháp xử lý:** Tiến hành Crashing (tăng ca) lập trình viên Backend để hoàn thành API đúng hạn và Fast-tracking các kịch bản kiểm thử UAT.

### 4.2. Change Request & Control Process
Mọi yêu cầu thay đổi (Change Request) phát sinh từ Phòng Đào tạo (Ví dụ: Thêm cơ chế lọc nâng cao cho sinh viên diện học bổng) bắt buộc phải điền vào Biểu mẫu yêu cầu thay đổi tiêu chuẩn. Yêu cầu sẽ được họp phê duyệt bởi Ban kiểm soát thay đổi (Change Control Board) để đánh giá tác động chi phí/tiến độ trước khi đưa vào WBS.

---

## 5. CLOSING (ĐÓNG DỰ ÁN)

### 5.1. Final Project Report
Báo cáo tổng kết dự án được hoàn thành, nghiệm thu và bàn giao đầy đủ mã nguồn sạch cùng tài liệu hướng dẫn vận hành hệ thống cho Phòng Đào tạo HSU.

### 5.2. Final Project Presentation
Nhóm tổ chức buổi báo cáo thuyết trình đồ án cuối cùng trước Hội đồng chấm thi trường HSU, trình bày các chỉ số tiến độ, mô hình quản lý rủi ro và biểu diễn trực quan đồ thị giả lập CPM/EVM tương tác.

### 5.3. Lessons Learned
*   Luôn xác định và giám sát chặt chẽ Đường găng (Critical Path) để kịp thời điều chuyển tài nguyên nhân sự.
*   Viết Unit Test tự động ngay từ giai đoạn lập trình giúp giảm thiểu chi phí sửa lỗi ở giai đoạn tích hợp.
*   Giao tiếp nhóm rõ ràng và cập nhật tiến độ liên tục thông qua GitHub Projects là chìa khóa giữ đúng tiến độ dự án.

---

## 6. REFERENCES (TÀI LIỆU THAM KHẢO)
1.  Kathy Schwalbe, *Information Technology Project Management*, 9th Edition.
2.  Project Management Institute, *A Guide to the Project Management Body of Knowledge (PMBOK Guide)*, 7th Edition.
3.  Quy chế đào tạo học vụ theo hệ thống tín chỉ của Đại học Hoa Sen (HSU).

---

## 7. APPENDICES (PHỤ LỤC)
*   **Phụ lục A:** Sơ đồ Use Case và sơ đồ cơ sở dữ liệu chi tiết (ERD) của hệ thống.
*   **Phụ lục B:** Bảng chi tiết kết quả chạy thử nghiệm kiểm thử tải cao (Load Test Performance Log).
*   **Phụ lục C:** Bản mẫu Hợp đồng nhóm (Team Contract) và Biên bản nghiệm thu dự án.
