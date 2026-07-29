# KỊCH BẢN THUYẾT TRÌNH BÁO CÁO ĐỒ ÁN PROJECT (BILINGUAL)
## Đề tài: Risk and Schedule Management in the HSU Online Course Registration System Project
*(Lưu ý: Kịch bản được phân chia theo phân công vai trò của các thành viên ghi nhận trên Slide)*

---

### 🖥️ Slide 1: Giới Thiệu Chung (Title Slide)
*   **Người trình bày / Speaker:** Võ Duy Bình (Nhóm trưởng)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Kính chào thầy và các bạn. Em tên là Võ Duy Bình, trưởng nhóm 3 lớp Quản trị dự án phần mềm. Hôm nay, nhóm em xin phép đại diện để báo cáo đồ án thực hành môn học với đề tài: **'Risk and Schedule Management in the HSU Online Course Registration System Project'** - tập trung vào giai đoạn từ Lập kế hoạch (Planning), Thực thi (Executing), Giám sát (Monitoring & Controlling) cho tới Đóng dự án (Closing).
    > 
    > Nhóm 3 của chúng em gồm có 4 thành viên: Em - Võ Duy Bình phụ trách vai trò Sponsor & CEO; bạn Trần Bá Lợi phụ trách Project Manager; bạn Hồng Bảo Khang phụ trách Backend API; và bạn Nguyễn Thanh Quang phụ trách UI/UX & Security.
    > 
    > Sau đây, em xin phép bắt đầu buổi thuyết trình."
    > 
    > **[EN]** "Good afternoon, professor and classmates. My name is Vo Duy Binh, the leader of Team 3 in the Software Project Management course. Today, on behalf of my team, I would like to present our practical course project: **'Risk and Schedule Management in the HSU Online Course Registration System Project'**, focusing on the phases from Planning, Executing, Monitoring/Controlling to Project Closing.
    > 
    > Team 3 consists of 4 members: Myself - Vo Duy Binh as Sponsor/CEO; Tran Ba Loi as Project Manager; Hong Bao Khang as Backend API Developer; and Nguyen Thanh Quang as UI/UX & Security Developer.
    > 
    > Now, let us begin the presentation."

---

### 🖥️ Slide 2: Bối Cảnh & Bài Toán Đặt Ra
*   **Người trình bày / Speaker:** Võ Duy Bình
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Đầu tiên, em xin giới thiệu về bối cảnh dự án. Hiện nay, cổng đăng ký học phần cũ của trường HSU thường xuyên xảy ra tình trạng nghẽn mạng nghiêm trọng mỗi khi mở cổng, khiến sinh viên mất rất nhiều thời gian đăng ký. Ngoài ra, việc kiểm tra các ràng buộc nghiệp vụ như môn học tiên quyết, trùng lịch học, hay giới hạn sĩ số lớp học vẫn còn nhiều bất cập và độ trễ lớn.
    > 
    > Nhìn vào bảng so sánh hiệu năng trên slide, các bạn có thể thấy hệ thống cũ chỉ chịu tải tối đa khoảng 1,500 kết nối đồng thời và độ trễ phản hồi lên tới vài giây khi nghẽn. Giải pháp mới của chúng em hướng tới xử lý thời gian thực, nâng sức chịu tải lên **hơn 15,000 kết nối đồng thời**, giảm độ trễ phản hồi xuống **dưới 100ms** và tránh hoàn toàn việc đăng ký vượt chỉ tiêu lớp học nhờ kiến trúc Event-driven và bộ nhớ đệm Caching Redis."
    > 
    > **[EN]** "First, let's look at the project background. Currently, HSU's legacy course registration portal frequently suffers from severe network congestion during peak hours, causing students to experience long loading times. Furthermore, business rule checks such as prerequisites, schedule clashes, and class size limits are slow and prone to errors.
    > 
    > Looking at the comparison table on the slide, the old system only supports around 1,500 concurrent connections with response latency climbing up to several seconds under stress. Our new solution targets real-time processing, scaling active capacity to **over 15,000 concurrent users**, reducing response latency to **under 100ms**, and completely eliminating over-enrollment issues through an Event-driven architecture and Redis caching."

---

### 🖥️ Slide 3: Cấu Trúc WBS & Phạm Vi Dự Án (Scope)
*   **Người trình bày / Speaker:** Hồng Bảo Khang
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Xin chào thầy và các bạn, em là Hồng Bảo Khang. Tiếp theo phần của bạn Bình, em xin trình bày về cấu trúc phân rã công việc WBS và phạm vi của đồ án trong các phần 2 đến phần 5.
    > 
    > Để kiểm soát chặt chẽ dự án trong vòng 12 tuần, chúng em phân chia công việc thành 4 khối WBS cốt lõi:
    > *   **WBS 2.0 Planning:** Xây dựng quy chế làm việc nhóm (Team Contract), lập bản mô tả phạm vi (Scope Statement) và thiết lập Baseline tiến độ 12 tuần.
    > *   **WBS 3.0 Executing:** Khảo sát nghiệp vụ HSU, thiết kế UI/UX trên Figma, phát triển API Backend và lập trình giao diện Frontend cho cả cổng sinh viên và quản trị đào tạo.
    > *   **WBS 4.0 Monitoring & Controlling:** Theo dõi tiến độ thực tế dựa trên đường găng (Critical Path) và kiểm soát rủi ro bằng Risk Register.
    > *   **WBS 5.0 Closing:** Nghiệm thu hệ thống, viết tài liệu hướng dẫn vận hành và đúc kết Lessons Learned.
    > 
    > Các chức năng ngoài phạm vi (Out-of-Scope) như thanh toán học phí trực tiếp hoặc thi trực tuyến đã được tách biệt rõ để tránh phình to phạm vi dự án."
    > 
    > **[EN]** "Hello professor and classmates, my name is Hong Bao Khang. Following Binh's part, I will present our Work Breakdown Structure (WBS) and the scope of our project spanning Phases 2 to 5.
    > 
    > To maintain strict control over our 12-week schedule, we partitioned the project into 4 core WBS blocks:
    > *   **WBS 2.0 Planning:** Formulating the Team Contract, defining the Scope Statement, and establishing our 12-week schedule baseline.
    > *   **WBS 3.0 Executing:** Gathering HSU business requirements, designing UI/UX prototypes in Figma, and coding the Backend API and Frontend portals for both students and admins.
    > *   **WBS 4.0 Monitoring & Controlling:** Monitoring actual progress against the Critical Path and managing risks using our Risk Register.
    > *   **WBS 5.0 Closing:** Handing over the system, writing operator documentation, and summarizing lessons learned.
    > 
    > Out-of-scope features like tuition fee processing or online examination have been clearly separated to prevent scope creep."

---

### 🖥️ Slide 4: Kiến Trúc & Giải Pháp Công Nghệ
*   **Người trình bày / Speaker:** Nguyễn Thanh Quang
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Em xin chào thầy và các bạn, em là Nguyễn Thanh Quang, phụ trách kỹ thuật frontend và bảo mật cho dự án. Để hiện thực hóa mục tiêu chịu tải cao và xử lý thời gian thực, chúng em đã lựa chọn giải pháp kiến trúc 3 thành phần chính:
    > 1.  **Frontend Dynamic UI:** Được xây dựng bằng HTML5/CSS3 và JavaScript thuần (Vanilla JS) tối ưu dung lượng tải trang cực nhẹ, thiết kế responsive tương thích hoàn hảo trên cả máy tính và di động.
    > 2.  **Real-time Engine:** Sử dụng các kết nối API tối ưu để đồng bộ số lượng chỗ trống còn lại tức thời. Khi một lớp đạt sĩ số tối đa, nút đăng ký sẽ tự động chuyển sang màu xám và khóa lại trong vòng 50ms.
    > 3.  **Security & Validation (Shift-left Security):** Tích hợp kiểm tra ràng buộc tự động (trùng lịch học, môn tiên quyết, giới hạn 24 tín chỉ) ngay tại client và API Gateway, ngăn chặn các truy cập bất hợp pháp hoặc gian lận đăng ký môn."
    > 
    > **[EN]** "Hello professor and classmates, I am Nguyen Thanh Quang, responsible for frontend development and security. To achieve our goals of high concurrency and real-time responsiveness, we designed an architecture based on three key pillars:
    > 1.  **Frontend Dynamic UI:** Built with HTML5/CSS3 and Vanilla JS for ultra-lightweight page loading and a fully responsive layout.
    > 2.  **Real-time Engine:** Utilizes optimized API calls to sync remaining slots instantly. Once a class is full, the registration button disables and turns gray within 50ms.
    > 3.  **Security & Validation (Shift-left Security):** Auto-validates business rules (schedule clashes, prerequisites, 24-credit limits) at both the client and API Gateway level, preventing illegal access or course registration manipulation."

---

### 🖥️ Slide 5: Chức Năng Cổng Sinh Viên (Student Portal)
*   **Người trình bày / Speaker:** Võ Duy Bình
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Em xin quay lại để trình bày chi tiết về giao diện Cổng Sinh viên. Hệ thống được thiết kế với tiêu chí tối giản hóa luồng thao tác. Sinh viên chỉ cần thực hiện 3 bước: Tìm kiếm môn học theo bộ lọc khoa/viện ➔ Kiểm tra lịch học trực quan ➔ Nhấp nút đăng ký nhanh 1-Click.
    > 
    > Bộ quy tắc học vụ (Business Rules) được chúng em lập trình chạy tự động:
    > *   *Giới hạn tín chỉ:* Cho phép đăng ký tối đa 24 tín chỉ.
    > *   *Môn tiên quyết:* Hệ thống tự động so khớp lịch sử học tập xem sinh viên đã đạt điểm tích lũy môn tiên quyết chưa.
    > *   *Xung đột thời khóa biểu:* Hệ thống tự động chặn đăng ký các lớp học trùng lịch và báo lỗi chi tiết."
    > 
    > **[EN]** "I will now present the details of the Student Portal. The interface is optimized to minimize user clicks. Students only need to follow 3 simple steps: Search for courses using department filters ➔ Review the visual weekly schedule ➔ Click to register.
    > 
    > Our system validates the HSU academic rules automatically:
    > *   *Credit Limits:* Standard semesters allow a maximum of 24 credits.
    > *   *Prerequisite Check:* The engine queries student academic history to ensure prerequisite classes are passed.
    > *   *Schedule Conflict:* The system automatically blocks registration for classes overlapping in day or time."

---

### 🖥️ Slide 6: Chức Năng Cổng Phòng Đào Tạo (Admin Portal)
*   **Người trình bày / Speaker:** Trần Bá Lợi (Project Manager)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Kính chào thầy và các bạn, em tên là Trần Bá Lợi. Em xin phép trình bày cổng chức năng dành cho Phòng Đào tạo (Admin Portal). 
    > 
    > Đối với cán bộ quản trị học vụ, hệ thống cung cấp 4 công cụ đắc lực:
    > 1.  **Quản lý danh mục môn học:** Thêm/sửa thông tin môn học, số tín chỉ, chỉ định giảng viên nhanh chóng.
    > 2.  **Điều chỉnh sĩ số & phòng học:** Cho phép tăng/giảm chỉ tiêu tối đa của lớp học phần theo thời gian thực để đáp ứng nhanh nhu cầu sinh viên.
    > 3.  **Mở / Đóng cổng đăng ký:** Quản lý lịch đóng/mở đăng ký môn học theo đúng kế hoạch của từng khóa.
    > 4.  **Thống kê & Xuất báo cáo:** Cho phép xuất danh sách sinh viên đăng ký của từng lớp học ra file Excel phục vụ lưu trữ."
    > 
    > **[EN]** "Good afternoon, professor and classmates, my name is Tran Ba Loi. I will walk you through the Admin Portal, designed specifically for the HSU Academic Affairs Office.
    > 
    > The portal provides administrative staff with 4 powerful management tools:
    > 1.  **Course Catalog Management:** Add/edit course information, credit values, and assign lecturers quickly.
    > 2.  **Class Capacity & Room Adjustments:** Increase or decrease maximum class sizes in real-time to respond to student demand.
    > 3.  **Portal Open/Close Schedule:** Dynamically open or close registration portals based on specific academic timelines.
    > 4.  **Statistics & Reporting:** Export official student enrollment lists to Excel files for archive and scheduling."

---

### 🖥️ Slide 7: Dashboard Quản Trị Tiến Độ Dự Án (PM Portal)
*   **Người trình bày / Speaker:** Trần Bá Lợi
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Bên cạnh cổng chức năng của người dùng HSU, một điểm đặc biệt trong đồ án của chúng em là xây dựng **Dashboard Quản trị Tiến độ dành riêng cho Project Manager**. 
    > 
    > Dashboard này tích hợp sơ đồ WBS tiến độ 12 tuần giúp PM:
    > *   Theo dõi thời gian thực tiến độ hoàn thành của từng mốc công việc (như Khởi tạo đạt 100%, Lập trình đạt 80-95%, Kiểm thử đạt 10%).
    > *   Trực quan hóa tỷ lệ hoàn thành dự án tổng thể (hiện tại đạt 85%).
    > *   Cảnh báo sớm các đầu việc có nguy cơ chậm tiến độ và kiểm soát ngày nghiệm thu bàn giao chính thức."
    > 
    > **[EN]** "In addition to HSU user portals, a unique highlight of our project is the integration of a **Project Manager (PM) Dashboard** to monitor the 12-week schedule.
    > 
    > This dashboard visualizes WBS tasks over the 12-week timeline, helping the PM:
    > *   Track the real-time completion status of each milestone (e.g., Initiating at 100%, Coding at 80-95%, Testing at 10%).
    > *   Display the overall project completion percentage (currently at 85%).
    > *   Provide early alerts for tasks lagging behind schedule and control the planned handover date."

---

### 🖥️ Slide 8: Báo Cáo Hiệu Suất EVM & Quản Lý Chi Phí
*   **Người trình bày / Speaker:** Trần Bá Lợi
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Để kiểm soát chặt chẽ khía cạnh tài chính và tiến độ dự án tại thời điểm báo cáo ngày 16/09/2026, chúng em đã áp dụng phương pháp **Quản lý giá trị thu được EVM (Earned Value Management)**.
    > 
    > Dựa trên bảng số liệu trên slide:
    > *   **BAC (Tổng ngân sách dự án):** $39.15 triệu VND.
    > *   **PV (Giá trị kế hoạch):** $28.9 triệu VND; **EV (Giá trị thu được):** $28 triệu VND; **AC (Chi phí thực tế chi ra):** $28.328 triệu VND.
    > 
    > Hệ thống đo lường được các chỉ số hiệu suất:
    > *   **SV (Độ lệch tiến độ):** -$900,000 VND, tương ứng **SPI = 0.97** (Dự án đang chậm tiến độ nhẹ so với kế hoạch).
    > *   **CV (Độ lệch chi phí):** -$328,500 VND, tương ứng **CPI = 0.99** (Dự án đang vượt chi phí thực tế nhẹ).
    > *   **Dự báo EAC:** Khoảng $39.6 triệu VND, dự kiến vượt ngân sách chỉ 1.2% khi hoàn thành.
    > 
    > Để xử lý việc chậm tiến độ này, nhóm đã áp dụng biện pháp **Crashing (tăng ca)** bổ sung nhân sự viết API Backend và **Fast-tracking (chồng chéo)** viết trước các kịch bản kiểm thử UAT song song với coding."
    > 
    > **[EN]** "To control the project's financial and schedule health, we applied **Earned Value Management (EVM)** metrics as of the status date on September 16, 2026.
    > 
    > Based on the data displayed on this slide:
    > *   **BAC (Budget at Completion):** 39.15 million VND.
    > *   **PV (Planned Value):** 28.9M VND; **EV (Earned Value):** 28.0M VND; **AC (Actual Cost):** 28.328M VND.
    > 
    > Our calculated performance variances are:
    > *   **SV (Schedule Variance):** -900,000 VND, with an **SPI of 0.97** (indicating a slight schedule delay).
    > *   **CV (Cost Variance):** -328,500 VND, with a **CPI of 0.99** (indicating a minor budget overrun).
    > *   **EAC Forecast:** Approx 39.6M VND, meaning a minimal 1.2% overrun at completion.
    > 
    > To address this delay, we applied **Crashing** by adding resources to backend API coding, and **Fast-tracking** by writing UAT test cases in parallel with coding."

---

### 🖥️ Slide 9: Trình Giả Lập Đường Găng (Critical Path Simulator)
*   **Người trình bày / Speaker:** Võ Duy Bình
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Để giúp mọi người hiểu rõ cách quản lý tiến độ dự án khoa học hơn, em xin phép trình bày phần **Mô phỏng đường găng dự án (Critical Path Simulator)**.
    > 
    > **[Hành động: Click kéo thanh trượt '2. Lập trình Backend' tăng từ 0 lên 2 tuần trên slide]**
    > 
    > Như thầy và các bạn thấy, khi em kéo tăng mức độ trễ của tác vụ Backend (là công việc nằm trên Đường găng màu đỏ), ngày hoàn thành dự án lập tức bị đẩy lùi sang tuần 14, hiển thị hộp cảnh báo màu đỏ báo động trễ hạn 2 tuần.
    > 
    > **[Hành động: Trả slider Backend về 0, sau đó kéo thanh trượt '3. Lập trình Frontend' lên trễ 1 tuần]**
    > 
    > Tuy nhiên, khi em kéo trễ tác vụ Frontend (là công việc ngoài đường găng màu xanh lá) trễ 1 tuần, các bạn có thể thấy ngày hoàn thành dự án vẫn giữ nguyên ở tuần 12. Điều này là do tác vụ Frontend có thời gian dự phòng (Float time) là 1 tuần, cho phép chậm trễ trong phạm vi này mà không ảnh hưởng đến tiến độ chung.
    > 
    > Nếu em kéo Frontend trễ quá 1 tuần (ví dụ trễ 2 tuần), nó sẽ lập tức biến thành **Đường găng mới (Critical Task)** và làm trễ dự án. Công cụ mô phỏng này giúp PM đưa ra quyết định điều phối tài nguyên thông minh nhất."
    > 
    > **[EN]** "To illustrate schedule management clearly, I will demonstrate the **Critical Path Simulator** on this slide.
    > 
    > **[Action: Click and drag the '2. Lập trình Backend' slider from 0 to 2 weeks of delay]**
    > 
    > As you can see, when I delay the Backend coding task (which lies on the red Critical Path), the project completion date immediately shifts to Week 14, and the alert box turns red, warning of a 2-week project delay.
    > 
    > **[Action: Reset Backend slider to 0, then drag the '3. Lập trình Frontend' slider to 1 week of delay]**
    > 
    > However, if I delay the Frontend task (a non-critical task in green) by 1 week, the project completion remains at Week 12. This is because Frontend has a float time of 1 week, allowing it to slip without impacting the overall project finish.
    > 
    > If the Frontend delay exceeds 1 week, it immediately becomes a **Critical Task** and delays the project. This simulation shows how project managers allocate resources effectively to protect the schedule."

---

### 🖥️ Slide 10: Quản Lý Rủi Ro Tiến Độ & Bảng Đăng Ký Rủi Ro (Risk Register)
*   **Người trình bày / Speaker:** Hồng Bảo Khang
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Em là Hồng Bảo Khang. Để bảo vệ dự án khỏi các tác động tiêu cực, nhóm em đã xây dựng **Bảng đăng ký theo dõi rủi ro (Risk Register)** chi tiết bao gồm 4 bước nghiệp vụ chuẩn PMBOK:
    > 1.  **Nhận diện rủi ro:** Phân tích các rủi ro tiến độ, kỹ thuật, phạm vi và nhân sự.
    > 2.  **Đánh giá định tính (P & I):** Phân loại rủi ro theo ma trận xác suất và tác động (như R1 quá tải máy chủ có mức rủi ro Đỏ - Rất cao; R2 trễ Backend có mức rủi ro Cam - Cao).
    > 3.  **Lập kế hoạch phản hồi:** Áp dụng các chiến lược ứng phó cụ thể: Giảm thiểu R1 bằng Auto-scaling/Redis, giảm thiểu R2 bằng cách chuyển nhân lực/tăng ca, áp dụng Change Control Board cho rủi ro R3 thay đổi yêu cầu.
    > 4.  **Giám sát & Kiểm soát:** Cập nhật Risk Register định kỳ mỗi tuần để phát hiện rủi ro mới phát sinh."
    > 
    > **[EN]** "I am Hong Bao Khang. To protect our project from negative events, we established a detailed **Project Risk Register** utilizing the 4 standard PMBOK steps:
    > 1.  **Risk Identification:** Analyzing schedule, technical, scope, and resource risks.
    > 2.  **Qualitative Analysis (P & I):** Evaluating risks using a probability and impact matrix (e.g., R1 Server Overload classified as Red - Very High; R2 Backend Delay as Orange - High).
    > 3.  **Risk Response Planning:** Applying specific strategies: mitigating R1 via Auto-scaling/Redis, mitigating R2 via crashing/extra shifts, and using a Change Control Board for R3 Scope Creep.
    > 4.  **Monitoring & Controlling:** Weekly updates to the Risk Register to identify new or emerging risks."

---

### 🖥️ Slide 11: Tổng Kết Đồ Án & Bài Học Kinh Nghiệm (Conclusion)
*   **Người trình bày / Speaker:** Cả Nhóm / Võ Duy Bình kết luận
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Để kết luận cho buổi báo cáo đồ án hôm nay, nhóm em xin tóm tắt các kết quả đạt được:
    > *   Chúng em đã hoàn thành xây dựng Cổng đăng ký học phần trực tuyến HSU chạy ổn định, chịu tải cao.
    > *   Kiểm soát dự án hoàn thành đúng thời hạn tuần 12 nhờ kiểm soát chặt chẽ đường găng và dòng tiền EVM.
    > *   Kiểm soát rủi ro chủ động suốt vòng đời dự án.
    > 
    > **Bài học kinh nghiệm cốt lõi:** Một là luôn giám sát chặt chẽ đường găng; hai là tích hợp Unit Test tự động để phát hiện lỗi sớm; ba là giao tiếp nhóm minh bạch qua GitHub/Zalo là chìa khóa thành công.
    > 
    > Nhóm 3 xin chân thành cảm ơn thầy và các bạn đã chú ý lắng nghe. Chúng em rất mong nhận được câu hỏi và đóng góp ý kiến từ thầy."
    > 
    > **[EN]** "To conclude our presentation today, I would like to summarize our achievements:
    > *   We built a high-performance HSU Online Course Registration portal that runs stably under heavy loads.
    > *   We kept the project on track for a Week 12 completion using Critical Path controls and EVM financial metrics.
    > *   We managed project risks proactively throughout the software life cycle.
    > 
    > **Core lessons learned:** First, monitor the Critical Path continuously; second, integrate automated unit testing early to reduce defect costs; third, maintain transparent team communication via GitHub/Zalo.
    > 
    > Team 3 would like to thank you, professor and classmates, for your attention. We welcome any questions and feedback you may have."
