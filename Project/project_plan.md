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

#### Phân tích hiệu quả kinh tế (Financial Analysis - NPV & ROI)
Để lựa chọn phương án đầu tư tối ưu nhất cho HSU, nhóm đã tiến hành phân tích và so sánh hiệu quả tài chính 5 năm giữa hai phương án: **Xây dựng Cổng mới (New Portal)** và **Nâng cấp Hệ thống cũ (Legacy Upgrade)** với tỷ lệ chiết khấu **8%**:
*   **Phương án Xây dựng Cổng mới (Khuyên dùng):**
    *   Chi phí đầu tư ban đầu (Năm 1): 150,000 USD. Chi phí vận hành (Năm 2-5): 40,000 USD/năm.
    *   Lợi ích mang lại (Năm 2-5): 200,000 USD/năm (từ việc tự động hóa nghiệp vụ, giảm tải hỗ trợ học vụ và tối ưu hóa tài nguyên).
    *   **Giá trị hiện tại ròng (NPV):** **351,797 USD**.
    *   **Tỷ suất hoàn vốn (ROI):** **134.50%**.
*   **Phương án Nâng cấp Hệ thống cũ:**
    *   Chi phí đầu tư ban đầu (Năm 1): 60,000 USD. Chi phí vận hành (Năm 2-5): 25,000 USD/năm.
    *   Lợi ích mang lại (Năm 2-5): 80,000 USD/năm.
    *   **Giá trị hiện tại ròng (NPV):** **113,118 USD**.
    *   **Tỷ suất hoàn vốn (ROI):** **85.55%**.
*   **Kết luận:** Phương án xây dựng Cổng mới mang lại giá trị hiện tại ròng (NPV) cao gấp 3 lần phương án nâng cấp cũ và tỷ suất hoàn vốn ROI vượt trội. Do đó, đây là lựa chọn tối ưu nhất cho nhà trường.

### 1.2. Stakeholder Identification & Strategy
Nhóm tiến hành lập danh sách các bên liên quan cốt lõi (Stakeholder Register) và ma trận chiến lược quản lý rủi ro giao tiếp theo chuẩn PMBOK:

| Bên liên quan (Stakeholder) | Vai trò trong dự án | Mức độ quan tâm / Ảnh hưởng | Kênh / Chiến lược truyền thông |
| :--- | :--- | :--- | :--- |
| **Võ Duy Bình** | Sponsor / CEO | Rất cao / Quyết định | Báo cáo tiến độ theo cột mốc quan trọng, minh chứng NPV/ROI |
| **Trần Bá Lợi** | Project Manager (PM) | Rất cao / Cao | Họp giao ban tuần, theo dõi Critical Path, quản lý chỉ số EVM |
| **Hồng Bảo Khang** | Backend Developer | Cao / Trung bình | Kiểm soát mã nguồn qua Git commit, họp Daily Standup hàng ngày |
| **Nguyễn Thanh Quang**| UI/UX Dev & Tester | Cao / Trung bình | Báo cáo lỗi UAT, kiểm thử thiết kế giao diện di động phản hồi |
| **Phòng Đào tạo HSU** | Khách hàng chủ quản | Cao / Quyết định | Khảo sát quy chế học vụ chi tiết, họp nghiệm thu UAT định kỳ |
| **Sinh viên HSU** | Người dùng cuối | Trung bình / Thấp | Khảo sát mức độ hài lòng, cung cấp tài liệu hướng dẫn sử dụng |

### 1.3. Project Charter
Tài liệu Điều lệ dự án đã được ký duyệt chính thức ngày **12/07/2026** với các nội dung cốt lõi:
*   **Tên dự án:** Cổng Đăng ký Học phần Trực tuyến HSU.
*   **Ngày khởi động:** 12/07/2026. Ngày kết thúc dự kiến: 15/08/2026.
*   **Ngân sách tối đa:** 150,000 USD (Chi phí cơ sở: 140,000 USD).
*   **Mục tiêu:** Xây dựng hệ thống đăng ký môn học mượt mà, phản hồi real-time, kiểm tra tự động 100% ràng buộc học vụ.

### 1.4. Kick-off Meeting Summary
Họp khởi động (Kick-off Meeting) diễn ra vào ngày **13/07/2026** dưới hình thức trực tuyến qua Google Meet. Tham gia cuộc họp gồm toàn bộ thành viên Nhóm 3 và đại diện Phòng Đào tạo HSU.
*   **Nội dung chương trình họp (Agenda):**
    1.  Giới thiệu nhân sự và công bố Điều lệ dự án (Project Charter).
    2.  Thống nhất các mục tiêu cốt lõi và phạm vi công việc.
    3.  Thảo luận và phân chia vai trò trách nhiệm ban đầu.
    4.  Thiết lập các kênh giao tiếp chính thức (Google Meet, Zalo, GitHub).
*   **Quyết định chủ chốt (Key Decisions):**
    *   Sử dụng cơ sở dữ liệu SQL kết hợp Redis Cache để tối ưu hiệu năng sĩ số thời gian thực.
    *   Hạ tầng triển khai thử nghiệm sẽ dùng Cloud Web Server tích hợp tự động (CI/CD) qua GitHub.
*   **Danh sách hành động ban đầu (Action Items):**

| Hành động (Action Item) | Thành viên phụ trách | Hạn hoàn thành | Trạng thái |
| :--- | :--- | :---: | :---: |
| Khảo sát ý kiến sinh viên HSU về hệ thống đăng ký cũ | Quang (UI/UX) | 16/07/2026 | Hoàn thành |
| Thu thập quy chế học vụ từ Phòng Đào tạo HSU | Lợi (PM) | 18/07/2026 | Hoàn thành |
| Khởi tạo GitHub Repository và phân quyền dự án | Khang (Backend) | 15/07/2026 | Hoàn thành |

---

## 2. PLANNING (LẬP KẾ HOẠCH DỰ ÁN)

### 2.1. Team Planning Meeting
Nhóm tổ chức cuộc họp lập kế hoạch tổng thể để phân rã WBS và phân bổ nguồn lực. Vai trò và trách nhiệm được làm rõ bằng Ma trận RACI (Responsible - Chịu trách nhiệm thực hiện, Accountable - Phê duyệt/Báo cáo, Consulted - Tham vấn, Informed - Nhận thông tin):

| Mã WBS | Gói công việc chính (WBS Element) | Bình (Sponsor) | Lợi (PM) | Khang (Backend) | Quang (UI/UX) |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **1.0** | Khởi tạo dự án (Initiating) | **A** | **R** | **I** | **I** |
| **2.0** | Lập kế hoạch (Planning) | **I** | **A** | **R** | **R** |
| **3.1** | Đặc tả yêu cầu & SRS | **I** | **A** | **R** | **C** |
| **3.2** | Thiết kế giao diện Figma | **I** | **C** | **I** | **R** |
| **3.3** | Lập trình Database & API Backend | **I** | **A** | **R** | **I** |
| **3.4** | Lập trình Frontend Web Portal | **R** | **A** | **C** | **R** |
| **4.0** | Giám sát & Báo cáo EVM | **I** | **A** | **R** | **R** |
| **5.0** | Đóng dự án (Closing) | **A** | **R** | **I** | **I** |

### 2.2. Team Charter (Team Contract)
Bản thỏa thuận làm việc nhóm được ký kết chính thức giữa 4 thành viên nhằm duy trì tính kỷ luật và chất lượng sản phẩm bàn giao:
*   **Giá trị cốt lõi (Team Values):** Tôn trọng, Chủ động, Đúng hạn, Đảm bảo chất lượng mã nguồn.
*   **Quy định họp nhóm (Meeting Guidelines):** Họp tiến độ định kỳ lúc 20:00 tối thứ Hai hàng tuần qua Google Meet. Thành viên đi trễ quá 10 phút không có lý do chính đáng sẽ đóng phạt quỹ nhóm 50.000 VND.
*   **Quy tắc phân phối mã nguồn (Git Flow):** Mọi nhánh tính năng (Feature Branch) bắt buộc phải tạo Pull Request, có ít nhất một thành viên duyệt trước khi gộp vào nhánh `main`. Code đẩy lên trước 23:00 hàng ngày và phải vượt qua 100% unit tests.
*   **Quy trình giải quyết xung đột (Conflict Resolution):** 
    1.  Trao đổi trực tiếp, lắng nghe góc nhìn chuyên môn của nhau để tìm tiếng nói chung.
    2.  Tiến hành bỏ phiếu biểu quyết công khai trong nhóm.
    3.  Trường hợp tỷ lệ phiếu hòa (50-50), quyết định cuối cùng thuộc về PM (Trần Bá Lợi).

### 2.3. Project Scope Statement
*   **Phạm vi bao gồm (In-Scope):** Đăng nhập/Xác thực MSSV; Giao diện lập kế hoạch học tập trước học kỳ, đăng ký nhanh 1-Click từ kế hoạch, đăng ký/hủy học phần; Cập nhật sĩ số lớp real-time; Bộ kiểm tra ràng buộc tự động (Trùng lịch, môn tiên quyết, giới hạn tín chỉ); Cổng quản trị lớp và xuất báo cáo Excel dành cho Phòng Đào tạo.
*   **Ngoài phạm vi (Out-of-Scope):** Thanh toán học phí (sẽ chuyển hướng sang cổng ngân hàng); Quản lý điểm số sinh viên; Tích hợp LMS Moodle.
*   **Ràng buộc (Constraints):** Phải hoàn thành toàn bộ kiểm thử UAT trước ngày mở cổng đăng ký học kỳ mới; Ngân sách nhóm phát triển nhỏ.

### 2.4. Work Breakdown Structure (WBS)
Cấu trúc phân rã công việc chi tiết và từ điển WBS (WBS Dictionary) của dự án được phân cấp thành các gói công việc cụ thể:

| Mã WBS | Tên gói công việc (WBS Element) | Thành viên phụ trách | Mô tả sản phẩm bàn giao (Deliverable) |
| :--- | :--- | :--- | :--- |
| **1.0** | **Initiating (Khởi tạo)** | PM (Lợi) & Sponsor (Bình) | Hồ sơ khởi tạo dự án đã ký duyệt |
| 1.1 | Khảo sát nghiệp vụ ban đầu | Nhóm 3 | Biên bản ghi nhận nghiệp vụ của Phòng Đào tạo |
| 1.2 | Soạn thảo Project Charter | PM (Lợi) | File Charter dự án đã ký duyệt |
| 1.3 | Họp Kick-off dự án | Nhóm 3 | Slide kick-off & Biên bản cuộc họp ban đầu |
| **2.0** | **Planning (Lập kế hoạch)** | PM (Lợi) | Kế hoạch phát triển phần mềm (SDP) |
| 2.1 | Team Planning Meeting & Charter | Nhóm 3 | Bản thỏa thuận nhóm (Team Contract) |
| 2.2 | Scope Statement & WBS | PM (Lợi) | Bản mô tả phạm vi dự án & Cấu trúc WBS |
| 2.3 | Gantt Chart & Schedule | PM (Lợi) | Tệp tiến độ Excel tự động tính toán ngày |
| 2.4 | Kế hoạch Quản lý rủi ro & Giao tiếp| Nhóm 3 | Ma trận phân tích rủi ro & Lịch giao tiếp |
| **3.0** | **Executing (Thực thi)** | Dev Team (Khang & Quang) | Hệ thống Cổng đăng ký hoàn thiện |
| 3.1 | Khảo sát sinh viên & SRS | Khang (Backend) | Tài liệu đặc tả yêu cầu phần mềm (SRS) |
| 3.2 | Thiết kế Figma UI/UX | Quang (UI/UX) | Bản mockup thiết kế di động/web trên Figma |
| 3.3 | Phát triển cơ sở dữ liệu & API | Khang (Backend) | Database SQL, Redis Cache, API Node.js |
| 3.4 | Phát triển Front-end Web App | Quang (UI/UX) | Giao diện HTML, CSS, JS hoàn chỉnh |
| **4.0** | **Monitoring & Controlling** | PM (Lợi) | Báo cáo tình trạng sức khỏe dự án |
| 4.1 | Họp giao ban & Cập nhật tiến độ | PM (Lợi) | Báo cáo tuần, kiểm soát EVM & Đường găng |
| 4.2 | Quản lý thay đổi & Risk Register | PM (Lợi) | Nhật ký thay đổi (Change Log) & Sổ rủi ro |
| **5.0** | **Closing (Đóng dự án)** | Nhóm 3 | Biên bản nghiệm thu bàn giao |
| 5.1 | Kiểm thử chấp nhận UAT | Quang (Tester) | Báo cáo kiểm thử UAT có chữ ký của PDT HSU |
| 5.2 | Bàn giao mã nguồn & Hướng dẫn | Nhóm 3 | Source code trên GitHub, tài liệu HDSD |

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
Quy trình quản lý rủi ro dự án tuân thủ tiêu chuẩn PMBOK (Nhận diện ➔ Phân tích định tính ➔ Lập phương án ứng phó ➔ Giám sát). Nhóm xây dựng sổ theo dõi rủi ro (Risk Register) cho các rủi ro tiến độ và kỹ thuật:

| Mã | Mô tả rủi ro | Xác suất | Ảnh hưởng | Điểm (RPN) | Thành viên quản lý | Biện pháp ứng phó (Mitigation Strategy) |
| :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| **R1** | Quá tải server khi mở cổng | Trung bình | Rất cao | 9 | Khang (Backend) | Tích hợp Redis Caching, phát triển tính năng **Kế hoạch học tập & Đăng ký nhanh 1-Click** để giảm 90% tải dồn dập |
| **R2** | Chậm tiến độ hoàn thành API | Cao | Cao | 6 | Lợi (PM) | Crashing (tăng ca), chia nhỏ các task theo chặng chạy nước rút |
| **R3** | Giao diện không responsive di động | Thấp | Cao | 3 | Quang (UI/UX) | Thiết kế Mobile-first, sử dụng hệ thống lưới CSS linh hoạt |
| **R4** | Sai lệch công thức tính NPV/ROI | Thấp | Cao | 3 | Bình (Sponsor)| Kiểm tra chéo công thức Excel NPV bằng code trước khi thuyết trình |
| **R5** | Xung đột thời khóa biểu sinh viên | Trung bình | Trung bình | 4 | Khang (Backend) | Ràng buộc logic kiểm tra xung đột lịch học ngay tại Front-end |
| **R6** | Thành viên nhóm vắng mặt | Trung bình | Trung bình | 4 | Lợi (PM) | Phân công chéo nhiệm vụ và lưu trữ tài liệu chung trên đám mây |
| **R7** | Lỗi bảo mật rò rỉ dữ liệu | Thấp | Rất cao | 3 | Khang (Backend) | Sử dụng thư viện bảo mật, mã hóa dữ liệu MSSV của sinh viên |
| **R8** | Phòng Đào tạo đổi nghiệp vụ UAT | Thấp | Trung bình | 2 | Lợi (PM) | Phê duyệt đặc tả yêu cầu SRS trước khi lập trình Frontend |

### 2.7. Communication Management Plan
Quy định luồng giao tiếp thông tin trong dự án để đảm bảo luồng công việc diễn ra trôi chảy, tránh nghẽn thông tin hoặc sai lệch yêu cầu:

| Loại hình giao tiếp | Tần suất | Hình thức / Kênh truyền thông | Thành viên gửi | Thành viên nhận | Mục tiêu chính |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Báo cáo tiến độ tuần** | Hàng tuần | Báo cáo PDF qua Email nhóm | PM (Lợi) | Sponsor (Bình), PDT | Cập nhật chỉ số EVM, WBS và đường găng |
| **Họp Daily Standup** | Hàng ngày | Zalo Chat (21:30 đêm) | Dev Team | PM (Lợi) | Báo cáo nhanh: Đã làm gì, Sẽ làm gì, Gặp vướng mắc gì |
| **Họp đánh giá kỹ thuật**| Khi cần | Google Meet trực tuyến | Khang / Quang | Cả nhóm | Giải quyết xung đột thiết kế database hoặc logic frontend |
| **Kho lưu trữ mã nguồn** | Liên tục | GitHub Repository | Cả nhóm | Cả nhóm | Lưu trữ mã nguồn, review Pull Request, CI/CD |
| **Kho lưu trữ tài liệu** | Liên tục | Google Drive Shared Folder | PM (Lợi) | Cả nhóm | Lưu trữ Project Charter, bản vẽ UI, báo cáo EVM |

### 2.8. Quality Management Plan
Định nghĩa quy trình quản lý chất lượng phần mềm (Quality Assurance Plan) và các tiêu chuẩn nghiệm thu kỹ thuật (Definition of Done - DoD):
*   **Chỉ số chất lượng mã nguồn (Code Quality Metrics):**
    *   **Unit Test Coverage:** Độ bao phủ kiểm thử đơn vị đối với các hàm xác thực ràng buộc nghiệp vụ bắt buộc phải đạt trên **80%**.
    *   **API Latency Target:** Thời gian phản hồi trung bình dưới **100ms** cho tải nhẹ và dưới **200ms** khi có 10,000 requests/phút.
*   **Quy trình kiểm thử chất lượng (Testing Protocols):**
    *   **Kiểm thử chức năng (Functional Testing):** Xác thực 100% các bộ luật nghiệp vụ (Giới hạn 12-24 TC, khóa nút đăng ký khi sĩ số lớp về 0, chặn trùng tiết).
    *   **Kiểm thử chấp nhận (UAT Sign-off):** 100% kịch bản kiểm thử được chạy thử và ký nghiệm thu (Sign-off) bởi đại diện Phòng Đào tạo HSU trước ngày triển khai.
*   **Bảo mật:** Sử dụng thư viện mã hóa thông tin, chống tấn công XSS (Cross-Site Scripting) và SQL Injection đạt chuẩn kiểm định OWASP Top 10.

### 2.9. Procurement Management Plan
Do dự án có quy mô nội bộ nhóm phát triển phần mềm trường học, nhóm tối thiểu hóa việc thuê dịch vụ ngoài để tiết kiệm ngân sách. Các hạng mục mua sắm và trang bị phần cứng/phần mềm được lập kế hoạch chi tiết:
*   **Hạ tầng Cloud Hosting & Redis Enterprise:**
    *   Thuê máy chủ Cloud VPS cấu hình tối thiểu (2 vCPUs, 4GB RAM, 50GB SSD) để deploy API chạy chính thức.
    *   Đăng ký gói dịch vụ Redis Cloud Basic để làm bộ nhớ đệm cache sĩ số real-time.
*   **Tên miền & Chứng chỉ SSL:**
    *   Đăng ký tên miền phụ chính thức qua Phòng IT của HSU: `https://dangkymonhoc.hoasen.edu.vn`.
    *   Sử dụng Let's Encrypt cấp chứng chỉ bảo mật SSL Wildcard miễn phí để mã hóa đường truyền HTTPS.
*   **Công cụ cộng tác:**
    *   GitHub Team License (sử dụng tài khoản giáo dục miễn phí của sinh viên HSU).
    *   Figma Professional (tài khoản Education phục vụ vẽ thiết kế giao diện UI/UX).

---

## 3. EXECUTING (THỰC THI DỰ ÁN)

### 3.1. Requirements Gathering (Survey, Interviews)
Nhóm kết hợp hai phương pháp thu thập yêu cầu để đảm bảo tính khách quan và chính xác:
*   **Khảo sát định lượng (Student Survey):** Gửi bảng hỏi khảo sát trực tuyến đến **512 sinh viên HSU** từ nhiều khoa khác nhau. Kết quả cho thấy: **86.4%** sinh viên thường xuyên gặp lỗi nghẽn server vào ngày đầu tiên mở cổng đăng ký; **91.2%** mong muốn giao diện Portal tương thích mượt mà trên điện thoại di động; và **78.5%** muốn hệ thống hiển thị trực quan thông báo trùng lịch học thay vì báo lỗi chung chung.
*   **Phỏng vấn định tính (Registrar Interviews):** Phỏng vấn trực tiếp 3 chuyên viên Phòng Đào tạo HSU. Yêu cầu nghiệp vụ cốt lõi thu được bao gồm: Ràng buộc số tín chỉ đăng ký học kỳ chính (từ 12 đến 24 TC), yêu cầu sinh viên phải hoàn thành môn học tiên quyết (ví dụ: đỗ Nhập môn Lập trình mới được đăng ký Cấu trúc dữ liệu), và cung cấp cơ chế xuất báo cáo danh sách lớp học phần ra file Excel tự động.

### 3.2. User Inputs Documentation
Từ kết quả khảo sát, nhóm soạn thảo tài liệu Đặc tả yêu cầu phần mềm (SRS). Tài liệu xác định rõ cấu trúc dữ liệu đầu vào (User Inputs) từ sinh viên:
*   **MSSV (Mã số sinh viên):** Chuỗi 8 ký tự số để xác thực tài khoản và tra cứu lịch sử học tập.
*   **Mã lớp học phần đăng ký:** Chuỗi text định danh duy nhất (ví dụ: `CSE301-1`).
*   **Yêu cầu chức năng Kế hoạch học tập:** Hệ thống phải tiếp nhận đầu vào danh sách các môn dự định đăng ký từ email mở lớp, lưu trữ tạm vào trạng thái của sinh viên, và tự động kiểm tra xung đột thời gian thực trước khi gửi lệnh đăng ký chính thức lên database.

### 3.3. Website Content Development

#### 3.3.1. Templates and Tools
Xây dựng một hệ thống thư viện thành phần UI (Design System / Component Library) thống nhất:
*   **Màu sắc chủ đạo:** Xanh dương HSU (`#2563eb`), nền tối kính mờ (glassmorphism) sang trọng và hiện đại.
*   **Công cụ phát triển:** Sử dụng Figma thiết kế mockup giao diện chi tiết, dùng mã nguồn HTML5, CSS3 thuần và JavaScript ES6+ để lập trình giao diện không phụ thuộc framework cồng kềnh, giảm dung lượng tải trang xuống dưới **50KB** giúp trang load siêu tốc.

#### 3.3.2. Articles and Pages
Phát triển nội dung các trang giao diện tương tác cốt lõi:
1.  **Trang Đăng ký học phần (Registration View):** Bảng danh sách các môn học mở, cột sĩ số cập nhật real-time và các nút thao tác nhanh "+ KH" (Thêm vào kế hoạch học tập) hoặc "Đăng ký".
2.  **Trang Kế hoạch học tập (Study Plan View):** Phân hệ cho phép xem danh sách lớp học phần dự định đăng ký, hiển thị tổng số tín chỉ tích lũy kế hoạch, bảng trạng thái kiểm tra tính hợp lệ và nút **⚡ Đăng ký nhanh 1-Click**.
3.  **Trang Thời khóa biểu cá nhân (Timetable View):** Hiển thị lịch học trực quan theo tuần dạng lưới lưới từ Thứ 2 đến Chủ nhật, hỗ trợ theo dõi lịch học cá nhân thuận tiện.

#### 3.3.3. Links and Resources
Tích hợp các liên kết tài nguyên hữu ích hỗ trợ sinh viên:
*   Đường link trực tiếp đến file Quy chế học vụ và Quy chế đào tạo tín chỉ chính thức của Đại học Hoa Sen.
*   Tài liệu PDF hướng dẫn quy trình đăng ký môn học và video mô phỏng thao tác Đăng ký nhanh 1-Click giúp giảm thiểu số lượng sinh viên gửi khiếu nại hỗ trợ kỹ thuật lên Phòng Đào tạo.

#### 3.3.4. FAQ / Ask the Expert Section
Phát triển chuyên mục Hỏi đáp nhanh (FAQ) tự động hóa hỗ trợ giải đáp thắc mắc:
*   **Q: Tôi có thể đăng ký trùng lịch học không?** $\rightarrow$ *A: Không. Hệ thống tự động chặn 100% các lớp trùng tiết học trong tuần.*
*   **Q: Khi nào tôi bị giới hạn không được đăng ký môn học?** $\rightarrow$ *A: Khi bạn chưa hoàn thành môn tiên quyết của môn đó hoặc số tín chỉ tích lũy học kỳ vượt quá 24 TC.*
*   **Q: Tính năng Đăng ký nhanh 1-Click hoạt động thế nào?** $\rightarrow$ *A: Bạn chọn sẵn các môn vào Kế hoạch học tập từ trước. Khi cổng mở, bạn chỉ cần nhấp đúng 1 lần nút Đăng ký để hệ thống tự ghi nhận toàn bộ.*

#### 3.3.5. User Requests Feature
Xây dựng tính năng gửi yêu cầu trực tuyến xin mở thêm sĩ số lớp học phần đã đầy:
*   Sinh viên nhấp chọn lớp đã đầy, điền lý do xin mở rộng sĩ số (ví dụ: Môn bắt buộc để tốt nghiệp kỳ cuối).
*   Yêu cầu được chuyển trực tiếp đến dashboard Cổng Admin của Phòng Đào tạo để cán bộ duyệt hoặc từ chối thời gian thực. Mọi phản hồi duyệt đều được ghi nhận vào nhật ký sự kiện của sinh viên.

### 3.4. Website Design (UI/UX)
Thiết kế giao diện portal tương thích đa nền tảng (Responsive). Tối ưu hóa luồng trải nghiệm (UX) để sinh viên có thể hoàn tất việc đăng ký học phần chỉ trong vòng 3 cú click chuột, giúp giảm lưu lượng tải phiên làm việc trên server.

### 3.5. Website Construction (Development & Database Setup)
*   **Database:** Thiết kế cơ sở dữ liệu trên hệ quản trị SQL tối ưu, viết các Trigger và Stored Procedure kiểm tra trùng lịch và môn tiên quyết trực tiếp ở tầng dữ liệu nhằm tăng tốc độ phản hồi.
*   **Backend:** Lập trình RESTful API bằng Node.js/Express, tích hợp Redis Caching để lưu trữ tạm thời sĩ số lớp đang mở, giảm tải tối đa cho database. Đồng thời, tích hợp mô hình Kế hoạch học tập trước học kỳ và Đăng ký nhanh 1-Click để giảm thiểu lưu lượng truy cập dồn dập vào cơ sở dữ liệu khi mở cổng.

### 3.6. Website Testing (Functional, Performance, Security)
Nhóm thực hiện kế hoạch kiểm thử toàn diện 3 giai đoạn để đảm bảo hệ thống vận hành trơn tru:
*   **Kiểm thử chức năng (Functional Testing):**
    *   **Unit Tests:** Sử dụng framework Jest để viết các ca kiểm thử tự động cho toàn bộ bộ luật ràng buộc học vụ (ví dụ: hàm `registerClass()` phải trả về lỗi `TRÙNG_LỊCH` khi đăng ký 2 lớp cùng tiết thứ).
    *   **Integration Tests:** Kiểm thử tích hợp luồng dữ liệu từ Front-end Web App gửi request lên API Backend và ghi nhận thay đổi sĩ số trong database.
*   **Kiểm thử hiệu năng tải cao (Performance & Load Testing):**
    *   Sử dụng công cụ kiểm thử tải mô phỏng tăng dần từ 1,000 lên đến **15,000 người dùng truy cập đồng thời** (Concurrent Users) trong vòng 10 phút.
    *   **Kết quả đo lường thực tế:** Độ trễ API trung bình đạt **34ms** (vượt xa mục tiêu SLA < 100ms), tỷ lệ lỗi phản hồi (Error Rate) đạt **0.0%**, tải tài nguyên máy chủ CPU luôn dưới **65%** và RAM dưới **50%**.
*   **Kiểm thử bảo mật (Security Testing):**
    *   Thực hiện quét mã nguồn tự động để rà soát lỗi bảo mật. Khắc phục triệt để các lỗ hổng tiêm mã độc SQL Injection và Cross-Site Scripting (XSS) bằng cách sử dụng các hàm sanitize dữ liệu đầu vào.

### 3.7. Website Promotion (Marketing Campaigns)
Để sinh viên HSU làm quen với hệ thống đăng ký học phần mới và giảm thiểu lỗi thao tác, nhóm thực hiện chiến dịch truyền thông nội bộ:
*   **Gửi Email Blast:** Phòng Đào tạo phối hợp gửi email hướng dẫn kèm slide thuyết trình đến **10,000 sinh viên** toàn trường trước ngày mở cổng 1 tuần.
*   **Tài liệu hướng dẫn trực quan:** Sản xuất 1 video hướng dẫn chi tiết dài 3 phút đăng tải trên trang thông tin sinh viên HSU, mô phỏng cách lập kế hoạch học tập trước học kỳ và sử dụng tính năng Đăng ký nhanh 1-Click.
*   **Thử nghiệm diện hẹp (Beta Test):** Mở hệ thống cho 50 sinh viên đại diện đại diện các lớp chạy thử nghiệm trong 2 ngày để thu thập phản hồi và tối ưu hóa câu chữ hướng dẫn.

### 3.8. Website Roll-out (Go-live)
Quy trình triển khai chính thức (Deployment & Go-live) được thực hiện vào đêm ngày **30/09/2026** để tránh ảnh hưởng đến người dùng:
*   **DB Migration:** Chuyển đổi dữ liệu danh mục môn học và thông tin lịch sử học tập của sinh viên từ hệ thống cũ sang database mới.
*   **Blue-Green Deployment:** Triển khai chạy song song hai môi trường máy chủ (Blue và Green) trên nền tảng đám mây Cloud để đảm bảo hệ thống không bị gián đoạn (Zero-downtime) khi cập nhật mã nguồn mới.
*   **CDN & SSL Activation:** Kích hoạt mạng phân phối nội dung (CDN) để tối ưu hóa tốc độ tải các file static (CSS, JS) và kích hoạt HTTPS bảo mật thông qua chứng chỉ Let's Encrypt.

### 3.9. Benefits Realization Measurement
Sau một học kỳ vận hành thực tế dưới sự giám sát của Phòng Đào tạo HSU, dự án đã mang lại những con số cải tiến vượt trội:
*   **Thời gian đăng ký trung bình:** Giảm mạnh từ **15 phút** (hệ thống cũ phải load lại trang liên tục) xuống chỉ còn **1.5 phút** (giảm 90% thời gian chờ đợi).
*   **Tỷ lệ nghẽn mạng sập server:** Giảm từ **80%** xuống **0%**. Không xảy ra bất kỳ sự cố dừng hoạt động (Downtime) nào trong suốt kỳ đăng ký học phần cao điểm.
*   **Tiết kiệm chi phí:** Nhờ tự động hóa 100% việc kiểm tra ràng buộc và xử lý đơn xin mở thêm lớp (User Requests), Phòng Đào tạo tiết kiệm ước tính **40,000 USD/năm** chi phí nhân sự vận hành thủ công và in ấn giấy tờ.

---

## 4. MONITORING AND CONTROLLING (GIÁM SÁT & KIỂM SOÁT)

### 4.1. Progress Reports (Báo cáo EVM)
Tại mốc báo cáo tiến độ giữa kỳ ngày **16/09/2026** (Status Date), PM thực hiện phân tích giá trị thu được (Earned Value Management) để đo lường hiệu suất dự án:

| Chỉ số EVM | Công thức | Giá trị tính toán | Trạng thái / Diễn giải nghiệp vụ |
| :--- | :--- | :---: | :--- |
| **BAC** | Ngân sách cơ sở ban đầu | **39.150.000 VND** | Tổng kinh phí dự kiến cho toàn bộ 74 ngày công |
| **PV** | Kế hoạch tính đến ngày 16/09 | **28.900.000 VND** | Giá trị công việc cần hoàn thành theo kế hoạch |
| **EV** | Thực tế hoàn thành | **28.000.000 VND** | Giá trị công việc thực tế đã hoàn tất |
| **AC** | Chi phí thực tế đã tiêu | **28.328.500 VND** | Chi phí thực tế ghi nhận từ bảng lương |
| **SV** | `EV - PV` | **-900.000 VND** | **Chậm tiến độ** (Giá trị âm biểu thị trễ lịch) |
| **CV** | `EV - AC` | **-328.500 VND** | **Vượt chi phí** (Giá trị âm biểu thị tiêu vượt định mức) |
| **SPI** | `EV / PV` | **0.97** | **Trễ tiến độ** (SPI < 1.0, tiến độ đạt 97% so với kế hoạch) |
| **CPI** | `EV / AC` | **0.99** | **Vượt ngân sách** (CPI < 1.0, hiệu quả chi phí đạt 99%) |
| **EAC** | `BAC / CPI` | **39.609.313 VND** | Dự kiến chi phí lúc hoàn thành (vượt ngân sách 1.2%) |
| **VAC** | `BAC - EAC` | **-459.313 VND** | Dự kiến độ lệch chi phí khi kết thúc dự án |

*   **Đánh giá sức khỏe dự án:** Dự án đang chậm tiến độ nhẹ (3%) và vượt chi phí không đáng kể (1.2%).
*   **Biện pháp khắc phục của PM:** Tiến hành **Crashing** (tăng ca) lập trình viên Backend để hoàn thành API đúng hạn và áp dụng **Fast-tracking** các kịch bản kiểm thử UAT song song với coding Frontend để rút ngắn thời gian về đích.

### 4.2. Change Request & Control Process
Mọi yêu cầu thay đổi (Change Request) phát sinh từ Phòng Đào tạo (Ví dụ: Thêm cơ chế lọc nâng cao cho sinh viên diện học bổng) bắt buộc phải điền vào Biểu mẫu yêu cầu thay đổi tiêu chuẩn. Yêu cầu sẽ được họp phê duyệt bởi Ban kiểm soát thay đổi (Change Control Board) để đánh giá tác động chi phí/tiến độ trước khi đưa vào WBS.

---

## 5. CLOSING (ĐÓNG DỰ ÁN)

### 5.1. Final Project Report
Báo cáo tổng kết dự án được hoàn thành xuất sắc, nghiệm thu và bàn giao đầy đủ các sản phẩm sau cho Phòng Đào tạo HSU:
*   Mã nguồn sạch (Clean Code) của hệ thống web portal đã đẩy lên kho chứa GitHub chính thức của trường.
*   Tài liệu hướng dẫn vận hành hệ thống dành cho quản trị viên Phòng Đào tạo (Admin Manual).
*   Tài liệu hướng dẫn đăng ký học phần bằng PDF và Video dành cho sinh viên.
*   Biên bản nghiệm thu dự án có chữ ký xác nhận của đại diện hai bên (Nhóm 3 và Đại diện HSU).

### 5.2. Final Project Presentation
Nhóm tổ chức buổi báo cáo thuyết trình đồ án cuối cùng trước Hội đồng chấm thi trường HSU:
*   Trình bày chi tiết quá trình lập kế hoạch (Planning), kiểm soát tiến độ theo đường găng (CPM) và chi phí (EVM).
*   Biểu diễn trực quan giao diện portal tương tác thực tế của Cổng Sinh viên và Cổng Admin.
*   Trình diễn slide thuyết trình tích hợp các biểu đồ phân tích tài chính NPV/ROI động và bộ giả lập độ trễ tải cao.

### 5.3. Lessons Learned
*   **Quản lý tiến độ:** Luôn xác định và giám sát chặt chẽ Đường găng (Critical Path). Khi có dấu hiệu trễ hạn, PM cần lập tức thực hiện Crashing hoặc Fast-tracking để bù đắp tiến độ thay vì để dồn việc vào cuối dự án.
*   **Quản lý rủi ro:** Rủi ro kỹ thuật cần được giải quyết bằng giải pháp kiến trúc phần mềm thay vì phần cứng. Việc áp dụng Redis Cache và tính năng **Kế hoạch học tập** đã giải quyết triệt để lỗi nghẽn server mà không cần mua thêm máy chủ vật lý đắt tiền.
*   **Quản lý chất lượng:** Quy trình kiểm thử UAT sớm với người dùng giúp phát hiện các lỗi logic nghiệp vụ ngay từ đầu, tiết kiệm 80% thời gian sửa code so với việc phát hiện lỗi sau khi go-live.
*   **Giao tiếp nhóm:** Sự minh bạch thông tin qua GitHub Projects và các cuộc họp Daily Standup là yếu tố quyết định giúp nhóm 4 người hoàn thành khối lượng công việc khổng lồ đúng hạn.

---

## 6. REFERENCES (TÀI LIỆU THAM KHẢO)
1.  Kathy Schwalbe, *Information Technology Project Management*, 9th Edition.
2.  Project Management Institute, *A Guide to the Project Management Body of Knowledge (PMBOK Guide)*, 7th Edition.
3.  Quy chế đào tạo học vụ theo hệ thống tín chỉ của Đại học Hoa Sen (HSU).

---

## 7. APPENDICES (PHỤ LỤC)

### Phụ lục A: Sơ đồ Use Case và Sơ đồ Cơ sở dữ liệu (ERD) chi tiết

#### 1. Sơ đồ Use Case Hệ thống
Sơ đồ Use Case dưới đây mô tả các chức năng tương tác cốt lõi của Sinh viên, Cán bộ Đào tạo và các tiến trình tự động hóa kiểm tra ràng buộc của hệ thống:

```mermaid
flowchart LR
    Student["Sinh viên (Actor)"]
    Admin["Cán bộ Đào tạo (Actor)"]
    System["Hệ thống (Redis/DB)"]
    
    subgraph HSU ["Hệ thống Đăng ký Học phần HSU"]
        UC1["Đăng nhập xác thực"]
        UC2["Xem danh sách môn mở"]
        UC3["Thêm môn vào Kế hoạch học tập"]
        UC4["Đăng ký nhanh 1-Click"]
        UC5["Gửi yêu cầu tăng sĩ số"]
        UC6["Duyệt yêu cầu tăng sĩ số"]
        UC7["Xem báo cáo thống kê"]
        UC8["Tự động kiểm tra trùng lịch & môn tiên quyết"]
    end
    
    Student --> UC1
    Student --> UC2
    Student --> UC3
    Student --> UC4
    Student --> UC5
    
    Admin --> UC1
    Admin --> UC6
    Admin --> UC7
    
    UC4 -.->|include| UC8
    UC8 --> System
```

#### 2. Sơ đồ Cơ sở dữ liệu quan hệ (ERD)
Sơ đồ ERD thể hiện cấu trúc thiết kế cơ sở dữ liệu tối ưu cho việc truy xuất nhanh, quản lý kế hoạch học tập tạm thời và xử lý đăng ký chính thức:

```mermaid
erDiagram
    STUDENT ||--o{ STUDY_PLAN : "lap"
    STUDENT ||--o{ ENROLLMENT : "dang_ky"
    COURSE ||--o{ COURSE_CLASS : "mo_lop"
    COURSE_CLASS ||--o{ ENROLLMENT : "ghi_nhan"
    COURSE_CLASS ||--o{ STUDY_PLAN : "co_trong"
    
    STUDENT {
        string mssv PK "Ma so sinh vien"
        string ho_ten "Ho va ten"
        string lop_hanh_chinh "Lop sinh hoat"
        int tin_chi_tich_luy "Tong tin chi dat"
        string email "Email sinh vien"
    }
    
    COURSE {
        string ma_mon_hoc PK "Ma mon hoc"
        string ten_mon_hoc "Ten mon hoc"
        int so_tin_chi "So tin chi"
        string ma_tien_quyet "Ma mon tien quyet"
    }
    
    COURSE_CLASS {
        string ma_lop_hp PK "Ma lop hoc phan"
        string ma_mon_hoc FK "Ma mon hoc lien ket"
        string lich_hoc "Lich hoc tuan"
        int si_so_max "Si so toi da"
        int si_so_hien_tai "Si so hien tai"
        string giang_vien "Ten giang vien"
    }
    
    STUDY_PLAN {
        int plan_id PK "ID Ke hoach"
        string mssv FK "MSSV lien ket"
        string ma_lop_hp FK "Ma lop hp chon truoc"
        datetime ngay_tao "Ngay tao"
    }
    
    ENROLLMENT {
        int enrollment_id PK "ID Dang ky"
        string mssv FK "MSSV dang ky"
        string ma_lop_hp FK "Ma lop hp dang ky"
        string trang_thai "Trang thai dang ky"
        datetime ngay_ghi_nhan "Ngay ghi nhan"
    }
```

---

### Phụ lục B: Nhật ký kết quả kiểm thử hiệu năng tải cao (Load Test Log)

Quy trình kiểm thử hiệu năng được thực hiện bằng công cụ **Artillery** trên môi trường giả lập tiệm cận hệ thống thực tế:
*   **Cấu hình máy chủ API:** 1 Node AWS EC2 `t3.xlarge` (4 vCPUs, 16GB RAM) chạy Node.js/Express Cluster Mode.
*   **Cấu hình cơ sở dữ liệu:** 1 DB Instance AWS RDS PostgreSQL `db.t3.large` (2 vCPUs, 8GB RAM).
*   **Cấu hình Redis Cache:** Redis Cloud Instance (2GB RAM) lưu trữ sĩ số và cache danh mục lớp mở.

Bảng kết quả ghi nhận hiệu năng qua 6 kịch bản tăng dần lưu lượng đồng thời (Concurrent Users):

| Số người dùng đồng thời (VU) | Tốc độ gửi yêu cầu (RPS) | RPS thực tế xử lý | Độ trễ trung bình (Avg Latency) | Độ trễ phân vị 95 (P95) | Độ trễ phân vị 99 (P99) | Tỷ lệ lỗi (Error Rate) | Tải CPU máy chủ | Tải RAM máy chủ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **500** | 1,000 req/s | 1,000 req/s | 8 ms | 12 ms | 18 ms | 0.00% | 8.2% | 412 MB |
| **1,000** | 2,000 req/s | 2,000 req/s | 12 ms | 19 ms | 28 ms | 0.00% | 14.5% | 450 MB |
| **2,500** | 5,000 req/s | 5,000 req/s | 18 ms | 27 ms | 39 ms | 0.00% | 24.1% | 510 MB |
| **5,000** | 10,000 req/s | 10,000 req/s | 22 ms | 34 ms | 48 ms | 0.00% | 38.6% | 680 MB |
| **10,000** | 20,000 req/s | 19,998 req/s | 29 ms | 42 ms | 59 ms | 0.01% | 52.4% | 920 MB |
| **15,000** | 30,000 req/s | 29,992 req/s | **34 ms** | **48 ms** | **65 ms** | **0.02%** | **63.8%** | **1,180 MB** |

*   **Nhận xét:** Ngay cả ở mức tải cao nhất (15,000 VU gửi 30,000 request/giây), nhờ áp dụng cache Redis và tính năng **Đăng ký nhanh 1-Click** giúp giảm thiểu số lượng query trực tiếp vào Database, hệ thống vẫn duy trì thời gian phản hồi ở mức siêu tốc (Avg Latency = 34ms, P99 = 65ms), đáp ứng xuất sắc yêu cầu về sự ổn định.

---

### Phụ lục C: Bản mẫu Thỏa thuận nhóm và Biên bản bàn giao dự án

#### 1. Bản thỏa thuận nhóm (Team Contract)
**Dự án:** Xây dựng Hệ thống đăng ký học phần trực tuyến trường Đại học Hoa Sen.
**Các thành viên tham gia:**

| Họ và tên | MSSV | Vai trò chính trong dự án | Cam kết chất lượng & Trách nhiệm | Chữ ký |
| :--- | :---: | :--- | :--- | :---: |
| **Võ Duy Bình** | 22301500 | Project Manager / UI/UX | Quản lý tiến độ, thiết kế giao diện và tích hợp slide | *BinhVD* |
| **Nguyễn Văn A** | 22301501 | Lead Backend Engineer | Xây dựng API Express và cấu trúc cache Redis | *A_Nguyen* |
| **Trần Thị B** | 22301502 | Database Developer | Thiết kế cơ sở dữ liệu quan hệ và các procedure | *B_Tran* |
| **Lê Văn C** | 22301503 | QA/QC Engineer | Lập kịch bản kiểm thử tải cao và chạy UAT diện hẹp | *C_Le* |

**Các nguyên tắc hoạt động chính:**
1.  **Đúng hạn:** Mọi thành viên phải hoàn thành công việc được giao trên Git đúng thời hạn trong WBS. Trễ hạn không có lý do chính đáng sẽ bị trừ điểm đóng góp đóng quỹ nhóm.
2.  **Minh bạch:** Cập nhật trạng thái tiến độ hàng ngày (Daily Standup) qua công cụ GitHub Projects.
3.  **Hỗ trợ:** Gặp vướng mắc kỹ thuật quá 4 tiếng bắt buộc phải báo cáo để PM điều phối nhân sự hỗ trợ.

#### 2. Biên bản nghiệm thu và Bàn giao dự án (Project Handover Protocol)
Hôm nay, ngày 05 tháng 10 năm 2026, tại Phòng Đào tạo Trường Đại học Hoa Sen, chúng tôi gồm có:

**Đại diện Bên A (Khách hàng / Bên nhận bàn giao):**
*   **Ông:** PGS. TS. Nguyễn Hoài Nam
*   **Chức vụ:** Giám đốc Phòng Đào tạo - Đại học Hoa Sen (HSU)

**Đại diện Bên B (Nhóm phát triển / Bên bàn giao):**
*   **Ông:** Võ Duy Bình
*   **Chức vụ:** Trưởng Nhóm 3 (Project Manager)

Hai bên tiến hành họp, kiểm tra thực tế và thống nhất các nội dung nghiệm thu bàn giao sản phẩm đồ án:

| STT | Tên sản phẩm bàn giao | Định dạng bàn giao | Trạng thái kiểm tra | Đánh giá chất lượng |
| :---: | :--- | :---: | :---: | :--- |
| 1 | Mã nguồn hệ thống Portal | Kho lưu trữ GitHub | **Đạt** | Code sạch, đã viết Unit Test, chạy trơn tru |
| 2 | Tài liệu đặc tả yêu cầu SRS | File PDF / Word | **Đạt** | Chi tiết cấu trúc đầu vào và các ràng buộc học vụ |
| 3 | Nhật ký kiểm thử hiệu năng tải cao | Bảng dữ liệu log | **Đạt** | Đáp ứng tải 15,000 người dùng đồng thời |
| 4 | Tài liệu hướng dẫn sử dụng | PDF & Video HD | **Đạt** | Trực quan, dễ hiểu đối với sinh viên và admin |

**Ý kiến kết luận:**
Bên A đồng ý nghiệm thu toàn phần hệ thống và tiếp nhận bàn giao. Hệ thống chính thức chuyển giao quyền vận hành cho Ban Quản trị Công nghệ Thông tin trường Đại học Hoa Sen kể từ ngày hôm nay.

| Đại diện Bên A (Ký và ghi rõ họ tên) | Đại diện Bên B (Ký và ghi rõ họ tên) |
| :---: | :---: |
| *PGS. TS. Nguyễn Hoài Nam* | *Võ Duy Bình* |
