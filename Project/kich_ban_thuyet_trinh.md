# KỊCH BẢN THUYẾT TRÌNH BÁO CÁO ĐỒ ÁN PROJECT (BILINGUAL)
## Đề tài: Risk and Schedule Management in the HSU Online Course Registration System Project
*(Lưu ý: Kịch bản thuyết trình được chia theo vai trò dự án: Sponsor - Võ Duy Bình, Project Manager - Trần Bá Lợi, Backend Developer - Hồng Bảo Khang, UI/UX Developer & Tester - Nguyễn Thanh Quang)*

---

### 🖥️ Slide 1: Giới Thiệu Chung (Title Slide)
*   **Người trình bày / Speaker:** Sponsor (Võ Duy Bình)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Kính chào thầy cô và các bạn. Em là Võ Duy Bình, đại diện nhóm 3 lớp Quản trị dự án phần mềm HSU xin phép báo cáo đồ án môn học với đề tài: **'Risk and Schedule Management in the Online Course Registration System Construction Project'**. 
    > 
    > Đồ án này mô phỏng toàn bộ vòng đời quản lý dự án xây dựng hệ thống đăng ký học phần real-time tải cao của trường Đại học Hoa Sen. Nhóm em phân chia thành 4 vai trò cốt lõi: Em là Sponsor chịu trách nhiệm ngân sách; bạn Trần Bá Lợi là Project Manager chịu trách nhiệm tiến độ và điều phối; bạn Hồng Bảo Khang là Backend Developer phụ trách Database & API; và bạn Nguyễn Thanh Quang là UI/UX Developer kiêm Tester phụ trách thiết kế và đảm bảo chất lượng.
    > 
    > Sau đây, em xin đại diện nhóm bắt đầu phần thuyết trình bối cảnh dự án."
    > 
    > **[EN]** "Good afternoon, professor and classmates. I am Vo Duy Binh, representing Team 3 in the HSU Software Project Management course. Today, we are proud to present our project: **'Risk and Schedule Management in the Online Course Registration System Construction Project'**.
    > 
    > This project simulates the full management lifecycle of building a high-concurrency, real-time course registration portal for Hoa Sen University. Our team is divided into 4 key roles: myself as the Sponsor managing budget; Tran Ba Loi as the Project Manager overseeing schedule and coordination; Hong Bao Khang as the Backend Developer in charge of Database & APIs; and Nguyen Thanh Quang as the UI/UX Developer and Tester managing interface design and quality assurance.
    > 
    > Now, I will start by presenting the project background."

---

### 🖥️ Slide 2: Bối Cảnh & Bài Toán Đặt Ra (Project Background)
*   **Người trình bày / Speaker:** Sponsor (Võ Duy Bình)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Hiện nay, cổng đăng ký học phần cũ của trường HSU thường xuyên gặp tình trạng nghẽn mạng nghiêm trọng mỗi khi mở đợt đăng ký, khiến sinh viên mất rất nhiều thời gian chờ đợi. Để giải quyết triệt để, chúng em đề xuất xây dựng Cổng đăng ký mới chịu tải cao với khả năng hỗ trợ **hơn 15,000 kết nối đồng thời** và độ trễ phản hồi **dưới 100ms** thông qua bộ nhớ đệm Redis và kiến trúc Real-time.
    > 
    > **[Hành động: Nhấp chuột vào nút 'Xem Phân Tích Tài Chính & NPV Dự Án']**
    > 
    > Thầy cô và các bạn có thể thấy bảng phân tích kinh tế so sánh giữa phương án Cổng mới và Nâng cấp hệ thống cũ (ở mức chiết khấu 8% trong chu kỳ 5 năm):
    > * Phương án Cổng mới có mức đầu tư ban đầu cao hơn (150,000 USD) nhưng mang lại giá trị hiện tại ròng **NPV vượt trội đạt 351,797 USD** và tỷ suất hoàn vốn **ROI lên tới 134.50%** (so với NPV 113,118 USD và ROI 85.55% của phương án nâng cấp cũ). Do đó, việc xây dựng mới là tối ưu nhất về tài chính dài hạn."
    > 
    > **[EN]** "Currently, HSU's legacy course registration portal frequently suffers from severe network congestion during peak hours, causing long waiting times for students. To solve this, we propose building a new high-concurrency portal supporting **over 15,000 concurrent users** with latency **under 100ms** through Redis caching and real-time architecture.
    > 
    > **[Action: Click on the button 'Xem Phân Tích Tài Chính & NPV Dự Án']**
    > 
    > As displayed on the modal table, comparing the New Portal and the Legacy Upgrade at an 8% discount rate over a 5-year cycle:
    > * The New Portal option requires a higher initial investment (150,000 USD) but delivers a superior Net Present Value **(NPV) of 351,797 USD** and a Return on Investment **(ROI) of 134.50%** (compared to NPV of 113,118 USD and ROI of 85.55% for the legacy upgrade). Thus, building a new portal is the most economically optimal decision in the long term."

---

### 🖥️ Slide 3: Khởi Tạo Dự Án & Xác Định Stakeholders (Initiation)
*   **Người trình bày / Speaker:** Sponsor (Võ Duy Bình)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Dự án chính thức được khởi tạo bằng Điều lệ dự án (Project Charter) ký ngày 12/07/2026. Ngân sách tối đa được phê duyệt là 150,000 USD, trong đó ngân sách cơ sở là 140,000 USD và dự phòng rủi ro là 10,000 USD.
    > 
    > Đồng thời, chúng em thiết lập Bản đăng ký Stakeholders để phân tích vai trò của các bên liên quan chính: Phòng Đào tạo (có mức độ ảnh hưởng rất cao vì họ là chủ thể quản trị học vụ), Phòng IT (phối hợp hạ tầng), và Sinh viên HSU (đối tượng trực tiếp sử dụng). Chiến lược quản lý bên liên quan của chúng em là họp giao ban và báo cáo mốc tiến độ định kỳ mỗi 2 tuần để giữ sự đồng thuận cao nhất."
    > 
    > **[EN]** "The project was officially initiated with the Project Charter signed on July 12, 2026. The maximum approved budget is 150,000 USD, consisting of a 140,000 USD baseline budget and a 10,000 USD risk contingency reserve.
    > 
    > Concurrently, we formulated a Stakeholder Register to analyze key participants: the Academic Affairs Office (having very high impact as the main administrative unit), the IT Department (coordinating infrastructure), and HSU Students (the end-users). Our stakeholder management strategy involves bi-weekly status meetings and milestone reports to maintain alignment."

---

### 🖥️ Slide 4: Phạm Vi Dự Án (Scope Statement) & Ràng Buộc
*   **Người trình bày / Speaker:** Backend Developer (Hồng Bảo Khang)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Kính chào thầy cô và các bạn, em phụ trách phần lập trình Backend. Tiếp theo, em xin trình bày về phạm vi của dự án. 
    > 
    > Nhằm tránh hiện tượng phình to phạm vi (Scope Creep), chúng em đã xác định ranh giới rõ ràng:
    > *   **Trong phạm vi (In-Scope):** Phát triển 3 phân hệ gồm Cổng Sinh viên, Cổng Phòng Đào tạo và Dashboard quản trị PM.
    > *   **Ngoài phạm vi (Out-of-Scope):** Chúng em không tích hợp thanh toán học phí trực tiếp hoặc công cụ thi trực tuyến vào cổng này.
    > 
    > Các ràng buộc dự án bao gồm thời gian hoàn thành bắt buộc trong vòng 6 tháng (tương đương 12 tuần làm việc thực tế trên đường cơ sở) và giới hạn ngân sách không vượt quá 150,000 USD."
    > 
    > **[EN]** "Hello professor and classmates, I am the Backend Developer. Next, I will present the project scope.
    > 
    > To avoid scope creep, we have established clear boundaries:
    > *   **In-Scope:** Developing 3 main portals: Student Portal, Academic Admin Portal, and PM Dashboard.
    > *   **Out-of-Scope:** We exclude direct tuition fee payments and online exam tools from this portal.
    > 
    > Key constraints include a strict 6-month completion schedule (equivalent to 12 working weeks on the baseline) and a budget limit of 150,000 USD."

---

### 🖥️ Slide 5: Cấu Trúc WBS & Scope Dự Án (WBS Structure)
*   **Người trình bày / Speaker:** Backend Developer (Hồng Bảo Khang)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Để quản lý tiến độ hiệu quả, chúng em phân rã công việc thành cấu trúc WBS 5 giai đoạn:
    > *   **WBS 1.0 Initiating:** Soạn thảo điều lệ dự án, phân tích Stakeholder.
    > *   **WBS 2.0 Planning:** Team contract, scope statement, lập baseline tiến độ và phân tích NPV.
    > *   **WBS 3.0 Executing:** Khảo sát người dùng, đặc tả SRS, thiết kế Figma, lập trình API Backend và giao diện Frontend.
    > *   **WBS 4.0 Monitoring:** Báo cáo tiến độ tuần theo CPM và cập nhật rủi ro.
    > *   **WBS 5.0 Closing:** Kiểm thử UAT, bàn giao mã nguồn và đúc kết bài học.
    > 
    > Cách phân rã này giúp chúng em gán trách nhiệm rõ ràng cho từng cá nhân trên bảng ma trận RACI."
    > 
    > **[EN]** "To manage the schedule effectively, we broke down the project into a 5-phase Work Breakdown Structure (WBS):
    > *   **WBS 1.0 Initiating:** Project Charter and Stakeholder analysis.
    > *   **WBS 2.0 Planning:** Team contract, scope statement, schedule baseline, and NPV analysis.
    > *   **WBS 3.0 Executing:** User survey, SRS specification, Figma UI/UX, Backend API development, and Frontend coding.
    > *   **WBS 4.0 Monitoring & Controlling:** CPM-based weekly status reporting and risk register updates.
    > *   **WBS 5.0 Closing:** UAT testing, source code handover, and summarizing lessons learned.
    > 
    > This breakdown allows us to assign clear responsibilities using a RACI matrix."

---

### 🖥️ Slide 6: Khảo Sát Người Dùng & Đặc Tả Yêu Cầu (SRS)
*   **Người trình bày / Speaker:** Backend Developer (Hồng Bảo Khang)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Trước khi bắt đầu thiết kế, chúng em đã khảo sát trực tuyến ý kiến của 500 sinh viên HSU. Hơn 85% cho biết họ gặp sự cố sập mạng, 92% muốn sử dụng trên di động, và 78% mong muốn có cơ chế cảnh báo khi trùng lịch học.
    > 
    > Từ số liệu này, chúng em đặc tả bộ luật nghiệp vụ tự động trong tài liệu SRS để máy chủ kiểm tra thời gian thực: số tín chỉ tối đa đăng ký (12 - 24 tín chỉ), tự động khóa nút đăng ký khi sĩ số lớp về 0, và tự động đối chiếu cơ sở dữ liệu môn tiên quyết của từng sinh viên."
    > 
    > **[EN]** "Before drafting the design, we surveyed 500 HSU students online. Over 85% reported experiencing system crashes, 92% demanded mobile-friendly layouts, and 78% wanted schedule clash alerts.
    > 
    > Based on these results, we specified automated academic business rules in the SRS document for real-time server checks: verifying prerequisite course history, limiting credits (12 to 24), and disabling the registration button within 50ms once class capacity drops to 0."

---

### 🖥️ Slide 7: Kiến Trúc & Giải Pháp Công Nghệ (Architecture)
*   **Người trình bày / Speaker:** UI/UX Developer (Nguyễn Thanh Quang)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Xin chào thầy cô và các bạn, em là UI/UX Developer phụ trách thiết kế giao diện và kiểm thử dự án. Em xin trình bày về giải pháp công nghệ chịu tải cao.
    > 
    > Chúng em lựa chọn kiến trúc 3 lớp hiện đại:
    > 1.  **Client (React SPA):** Xây dựng giao diện web phản hồi nhanh bằng HTML5/CSS3 và JavaScript thuần tối ưu hóa dung lượng truyền tải, tương thích hoàn toàn trên di động.
    > 2.  **Node.js Web API:** Sử dụng Express xử lý bất đồng bộ (Asynchronous execution) để giải phóng CPU khi có hàng ngàn kết nối cùng lúc.
    > 3.  **Redis Cache & SQL Database:** Redis lưu trữ tạm sĩ số lớp học đang mở để kiểm tra tức thì, ngăn chặn tối đa việc truy vấn trực tiếp vào database SQL, giảm 90% tải cho hệ quản trị cơ sở dữ liệu."
    > 
    > **[EN]** "Hello professor and classmates, I am the UI/UX Developer. I will present our high-performance technical architecture.
    > 
    > We selected a modern 3-tier architecture:
    > 1.  **Client (React SPA):** A responsive interface built with HTML5/CSS3 and Vanilla JS to optimize bundle sizes for rapid page load.
    > 2.  **Node.js Web API:** Uses Express with asynchronous execution to handle thousands of requests without blocking the CPU.
    > 3.  **Redis Cache & SQL Database:** Redis caches real-time class availability to enable instant slot verification, bypassing direct SQL database queries and reducing DB server load by 90%."

---

### 🖥️ Slide 8: Chức Năng Cổng Sinh Viên (Student Portal)
*   **Người trình bày / Speaker:** Sponsor (Võ Duy Bình)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Em xin giới thiệu chi tiết giao diện Cổng Sinh viên mà chúng em đã hoàn thiện. Giao diện được tối ưu hóa cho trải nghiệm di động. Sinh viên chỉ cần thực hiện 3 bước đơn giản: Tìm môn học theo bộ lọc khoa/viện ➔ Đối chiếu thời khóa biểu trực quan dạng lưới ➔ Nhấp nút đăng ký nhanh 1-Click.
    > 
    > Hệ thống sẽ xử lý và báo lỗi tức thì nếu sinh viên đăng ký môn học trùng lịch học có sẵn, vượt quá 24 tín chỉ hoặc chưa hoàn thành môn tiên quyết."
    > 
    > **[EN]** "I will walk you through the completed Student Portal interface. Designed with a mobile-first approach, it simplifies registration into 3 easy steps: Search for courses using filters ➔ View schedules on a visual calendar grid ➔ 1-Click register.
    > 
    > The system handles validations immediately, providing instant warnings for schedule conflicts, credit overruns (over 24), or unmet prerequisite requirements."

---

### 🖥️ Slide 9: Chức Năng Cổng Phòng Đào Tạo (Admin Portal)
*   **Người trình bày / Speaker:** Project Manager (Trần Bá Lợi)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Xin chào thầy cô và các bạn, em là Trần Bá Lợi, Project Manager của dự án. Em xin phép trình bày Cổng Phòng Đào tạo dành cho cán bộ quản lý học vụ trường HSU.
    > 
    > Hệ thống cung cấp các chức năng quản trị trực quan:
    > 1.  **Quản lý danh mục học phần:** Thêm mới, cập nhật thông tin môn, phân bổ số tín chỉ.
    > 2.  **Điều chỉnh sĩ số thời gian thực:** Tăng/giảm chỉ tiêu lớp học phần linh hoạt khi số lượng sinh viên đăng ký tăng cao.
    > 3.  **Đợt đăng ký tự động:** Thiết lập lịch tự động đóng/mở đợt đăng ký theo khóa học.
    > 4.  **Xuất báo cáo:** Cho phép xuất danh sách sinh viên đăng ký lớp học phần trực tiếp ra file Excel chỉ với 1 click."
    > 
    > **[EN]** "Hello professor and classmates, I am Tran Ba Loi, the Project Manager. I will present the Admin Portal designed for HSU Academic Affairs staff.
    > 
    > The portal provides administrative functions:
    > 1.  **Course Catalog Management:** Add, update, and manage credit allocations for academic courses.
    > 2.  **Real-time Capacity Adjustments:** Dynamically increase or decrease maximum class enrollment sizes.
    > 3.  **Registration Schedules:** Automate the opening and closing times of registration windows.
    > 4.  **Export Reporting:** Export student enrollment lists to Excel files with a single click."

---

### 🖥️ Slide 10: Dashboard Quản Trị Tiến Độ Dự Án (PM Portal)
*   **Người trình bày / Speaker:** Project Manager (Trần Bá Lợi)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Một điểm đặc biệt trong dự án là chúng em đã tích hợp **Dashboard quản trị tiến độ CPM dành riêng cho Project Manager**. 
    > 
    > Dashboard này tích hợp sơ đồ WBS tiến độ 12 tuần của dự án. Hệ thống sẽ thống kê tỷ lệ hoàn thành công việc ở từng mốc giai đoạn (Khởi tạo: 100%, Phân tích: 100%, Backend: 95%, Frontend: 80% và Tích hợp kiểm thử: 10%). Tiến độ tổng thể của toàn dự án đang đạt **85%** và hệ thống sẽ đưa ra cảnh báo sớm nếu phát hiện mốc công việc nào có nguy cơ bị trễ hạn so với đường cơ sở."
    > 
    > **[EN]** "A unique feature in our project is the **Project Manager (PM) Schedule Dashboard** based on Critical Path Method tracking.
    > 
    > The dashboard visualizes the 12-week WBS timeline. It displays completion percentages for each phase (Initiating: 100%, Analysis: 100%, Backend: 95%, Frontend: 80%, Integration & Testing: 10%). The overall project progress stands at **85%**, and the system flags early warning alerts if any task threatens to delay the baseline finish date."

---

### 🖥️ Slide 11: Báo Cáo Hiệu Suất EVM & Quản Lý Chi Phí
*   **Người trình bày / Speaker:** Project Manager (Trần Bá Lợi)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Để quản lý chi phí và tiến độ chuyên nghiệp, chúng em áp dụng mô hình báo cáo EVM tại thời điểm mốc báo cáo ngày 16/09/2026:
    > *   Ngân sách nhân sự dự kiến ban đầu (BAC) là **39.150.000 VND**.
    > *   Các chỉ số thực tế tại mốc báo cáo: PV đạt 28.9M VND, EV đạt 28.0M VND, AC đạt 28.328M VND.
    > *   Các chỉ số đo lường độ lệch: SV âm 900.000 VND (chậm tiến độ nhẹ), CV âm 328.500 VND (vượt chi phí nhẹ). Hiệu suất chi phí CPI đạt 0.99 và hiệu suất tiến độ SPI đạt 0.97.
    > 
    > **[Hành động: Click vào nút 'Xem Chi Tiết Phân Bổ Nhân Lực & Chi Phí']**
    > 
    > Như thầy cô và các bạn thấy trên modal phân bổ nhân lực chi phí thực tế, 74 ngày công làm việc được phân công chi tiết cho từng thành viên nhóm HSU. Để xử lý việc chậm tiến độ nhẹ, nhóm đã áp dụng biện pháp tăng ca (Crashing) nhân sự Backend."
    > 
    > **[EN]** "To manage costs and schedules professionally, we utilize the Earned Value Management (EVM) model as of September 16, 2026:
    > *   Our baseline staffing budget (BAC) is **39,150,000 VND**.
    > *   EVM metrics: PV is 28.9M VND, EV is 28.0M VND, and AC is 28.328M VND.
    > *   Variance indicators: SV is -900,000 VND (minor schedule delay) and CV is -328,500 VND (minor cost overrun). Our SPI is 0.97 and CPI is 0.99.
    > 
    > **[Action: Click on the button 'Xem Chi Tiết Phân Bổ Nhân Lực & Chi Phí']**
    > 
    > As displayed on the resource allocation modal, 74 working days are distributed among the HSU project team members. To address the schedule lag, we authorized Crashing for backend tasks."

---

### 🖥️ Slide 12: Kế Hoạch Quản Lý Chất Lượng & Mua Sắm
*   **Người trình bày / Speaker:** UI/UX Developer (Nguyễn Thanh Quang)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Kế hoạch quản lý chất lượng (QMP) quy định bộ tiêu chí Definition of Done (DoD) nghiêm ngặt trước khi nghiệm thu: độ bao phủ Unit Test của mã nguồn API đạt trên 80%, hệ thống phải vượt qua kiểm thử tải cao giả lập 15,000 kết nối, và mã nguồn sạch lỗi bảo mật SQL Injection theo chuẩn OWASP.
    > 
    > Về mua sắm (Procurement), ngân sách cơ sở hạ tầng thực tế được phân bổ hợp lý gồm: 1.500.000 VND/tháng cho Cloud DB Server, 800.000 VND/tháng cho App Host API và 600.000 VND/năm cho SSL bảo mật. Tổng cộng chi phí cơ sở hạ tầng ban đầu để cấu hình hệ thống cloud là 2.900.000 VND."
    > 
    > **[EN]** "Our Quality Management Plan (QMP) defines strict Definition of Done (DoD) criteria: core API unit test coverage above 80%, passing load tests simulating 15,000 concurrent requests, and zero SQL Injection vulnerabilities as per OWASP guidelines.
    > 
    > For procurement, our infrastructure budget is optimized at: 1.500.000 VND/month for the Cloud DB Server, 800.000 VND/month for the App Host, and 600.000 VND/year for the SSL certificate. Total setup cost is 2,900,000 VND."

---

### 🖥️ Slide 13: Trình Giả Lập Đường Găng (Simulator)
*   **Người trình bày / Speaker:** Sponsor (Võ Duy Bình)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Để hiểu rõ tác động của các sự cố tiến độ đối với dự án, em xin trình diễn công cụ Giả lập đường găng CPM.
    > 
    > **[Hành động: Kéo thanh trượt '2. Lập trình Backend' tăng trễ thêm 2 tuần]**
    > 
    > Khi tác vụ Backend (nằm trên đường găng) bị trễ 2 tuần, thời gian hoàn thành dự án lập tức bị đẩy lùi từ tuần 12 sang tuần 14, và hộp cảnh báo chuyển sang màu đỏ báo động.
    > 
    > **[Hành động: Kéo trả Backend về 0, kéo thanh trượt '3. Lập trình Frontend' trễ 1 tuần]**
    > 
    > Ngược lại, khi em kéo trễ tác vụ Frontend trễ 1 tuần, ngày hoàn thành dự án vẫn giữ nguyên ở tuần 12. Điều này là do tác vụ Frontend có thời gian dự phòng (Float time) là 1 tuần, việc trễ hạn dưới 1 tuần không ảnh hưởng đến ngày hoàn thành dự án."
    > 
    > **[EN]** "To illustrate the impact of schedule delays, I will demonstrate our CPM Critical Path Simulator.
    > 
    > **[Action: Drag the '2. Lập trình Backend' slider to represent a 2-week delay]**
    > 
    > Since the Backend task is on the critical path, this delay immediately shifts the project finish date from Week 12 to Week 14, and the alert status turns red.
    > 
    > **[Action: Reset Backend to 0, then drag the '3. Lập trình Frontend' slider to a 1-week delay]**
    > 
    > Conversely, delaying the Frontend task by 1 week does not alter the Week 12 completion date. This demonstrates that the Frontend task has 1 week of float time, meaning minor delays within this range will not affect the final deadline."

---

### 🖥️ Slide 14: Kiểm Thử Hệ Thống & Đo Lường Lợi Ích
*   **Người trình bày / Speaker:** UI/UX Developer (Nguyễn Thanh Quang)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Hệ thống đã hoàn thành kiểm thử chức năng đạt tỷ lệ vượt qua 100% (45/45 test cases). Đặc biệt, bài kiểm thử tải mô phỏng 15,000 kết nối truy cập đồng thời trong 30 phút đạt tỷ lệ phản hồi lỗi cực thấp, chỉ 0.04% (thấp hơn nhiều so với chỉ tiêu 0.1% đặt ra trong QMP).
    > 
    > Kết quả đo lường lợi ích thực tế cho thấy thời gian đăng ký trung bình của sinh viên giảm mạnh từ 15 phút xuống còn **1.5 phút** (tiết kiệm 90% thời gian chờ đợi). Đồng thời, hệ thống hoạt động ổn định giúp tiết kiệm khoảng **40,000 USD/năm** chi phí nhân sự hỗ trợ học vụ thủ công."
    > 
    > **[EN]** "The system successfully passed 100% of its functional test cases (45/45). Furthermore, our load testing simulating 15,000 concurrent users over 30 minutes achieved a low error rate of 0.04%, well below our QMP target of 0.1%.
    > 
    > Benefits realization metrics show that average student registration time was cut from 15 minutes to **1.5 minutes** (a 90% reduction). Additionally, stable system performance saves approximately **40,000 USD/year** in manual support and course adjustment costs."

---

### 🖥️ Slide 15: Quản Lý Rủi Ro Tiến Độ & Bảng Đăng Ký Rủi Ro
*   **Người trình bày / Speaker:** Backend Developer (Hồng Bảo Khang)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Trong suốt dự án, chúng em duy trì quy trình quản lý rủi ro 4 bước theo tiêu chuẩn PMBOK: Nhận diện ➔ Phân tích định tính ➔ Lập kế hoạch ứng phó ➔ Giám sát cập nhật hàng tuần.
    > 
    > Bảng đăng ký rủi ro (Risk Register) theo dõi sát sao 8 rủi ro chính. Rủi ro có mức độ nghiêm trọng cao nhất là **R1: Nghẽn mạng / Quá tải hệ thống** (đánh giá mức Red - Rất cao), được giảm thiểu bằng giải pháp kỹ thuật bộ đệm Redis và Auto-scaling. Rủi ro **R2: Trễ tiến độ API Backend** (đánh giá mức Orange - Cảnh báo), được giảm thiểu bằng cách thiết lập Unit Test sớm và phân công nhân lực dự phòng."
    > 
    > **[EN]** "Throughout the project, we applied the standard 4-step PMBOK risk management process: Identify ➔ Analyze ➔ Plan Responses ➔ Monitor weekly.
    > 
    > Our Risk Register tracks 8 key risks. The highest risk is **R1: Server Overload / Network Congestion** (classified as Red - Very High), mitigated through Redis caching and auto-scaling. The second critical risk is **R2: Backend API Schedule Delay** (classified as Orange - Warning), mitigated by writing automated unit tests early and cross-training team members."

---

### 🖥️ Slide 16: Tổng Kết Đồ Án & Bài Học Kinh Nghiệm
*   **Người trình bày / Speaker:** All / Sponsor kết luận (Võ Duy Bình)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Để tổng kết lại, dự án nhóm 3 đã đạt được 3 kết quả cốt lõi: Hoàn thiện cổng đăng ký Real-time tải cao; hoàn thành đúng mốc tiến độ tuần 12 nhờ kiểm soát chặt chẽ đường găng CPM; và quản trị tài chính minh bạch bằng EVM.
    > 
    > Bài học kinh nghiệm lớn nhất chúng em rút ra là: luôn giám sát chặt chẽ đường găng; viết unit test sớm giúp giảm 80% lỗi tích hợp; và duy trì giao tiếp nhóm minh bạch qua các báo cáo hàng tuần.
    > 
    > Nhóm 3 xin chân thành cảm ơn thầy cô và các bạn đã lắng nghe. Chúng em sẵn sàng nhận câu hỏi đóng góp từ Hội đồng."
    > 
    > **[EN]** "In conclusion, our project successfully delivered on three core objectives: building a high-concurrency real-time portal; meeting our Week 12 baseline schedule using CPM; and maintaining strict cost control using EVM.
    > 
    > Our main lessons learned are: monitor the Critical Path continuously; write unit tests early to reduce integration bugs by 80%; and ensure transparent team communication.
    > 
    > We thank the committee and our classmates for your time. We are now ready for the Q&A session."
