# KỊCH BẢN THUYẾT TRÌNH BÁO CÁO ĐỒ ÁN PROJECT (BILINGUAL)
## Đề tài: Risk and Schedule Management in the HSU Online Course Registration System Project
*(Lưu ý: Kịch bản thuyết trình được chia theo vai trò dự án: Sponsor, Project Manager, Backend Developer, UI/UX Developer)*

---

### 🖥️ Slide 1: Giới Thiệu Chung (Title Slide)
*   **Người trình bày / Speaker:** Sponsor (Nhóm trưởng)
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Kính chào thầy và các bạn. Em đại diện nhóm 3 lớp Quản trị dự án phần mềm xin phép báo cáo đồ án thực hành môn học với đề tài: **'Risk and Schedule Management in the HSU Online Course Registration System Project'** - tập trung vào toàn bộ vòng đời dự án từ Lập kế hoạch (Planning), Thực thi (Executing), Giám sát (Monitoring & Controlling) cho tới Đóng dự án (Closing).
    > 
    > Nhóm của chúng em gồm có 4 vai trò chính: Sponsor phụ trách chỉ đạo ngân sách; Project Manager phụ trách điều phối tiến độ; Backend Developer phụ trách cơ sở dữ liệu và API; và UI/UX Developer phụ trách thiết kế giao diện và kiểm thử an toàn thông tin.
    > 
    > Sau đây, em xin phép bắt đầu buổi thuyết trình."
    > 
    > **[EN]** "Good afternoon, professor and classmates. On behalf of Team 3 in the Software Project Management course, I would like to present our project: **'Risk and Schedule Management in the HSU Online Course Registration System Project'**, focusing on the full project life cycle from Planning, Executing, Monitoring/Controlling to Project Closing.
    > 
    > Our project team is divided into 4 key roles: Sponsor for budget oversight; Project Manager for schedule coordination; Backend Developer for database and APIs; and UI/UX Developer for interface design and security testing.
    > 
    > Now, let us begin the presentation."

---

### 🖥️ Slide 2: Bối Cảnh & Bài Toán Đặt Ra
*   **Người trình bày / Speaker:** Sponsor
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Đầu tiên là bối cảnh dự án. Hiện nay, cổng đăng ký học phần cũ của trường HSU thường xuyên xảy ra tình trạng nghẽn mạng nghiêm trọng mỗi khi mở cổng, khiến sinh viên mất rất nhiều thời gian đăng ký. Ngoài ra, việc kiểm tra các ràng buộc nghiệp vụ như môn học tiên quyết, trùng lịch học, hay giới hạn sĩ số lớp học vẫn còn nhiều bất cập và độ trễ lớn.
    > 
    > Nhìn vào bảng so sánh hiệu năng trên slide, các bạn có thể thấy hệ thống cũ chỉ chịu tải tối đa khoảng 1,500 kết nối đồng thời và độ trễ phản hồi lên tới vài giây khi nghẽn. Giải pháp mới của chúng em hướng tới xử lý thời gian thực, nâng sức chịu tải lên **hơn 15,000 kết nối đồng thời**, giảm độ trễ phản hồi xuống **dưới 100ms** và tránh hoàn toàn việc đăng ký vượt chỉ tiêu lớp học nhờ kiến trúc Event-driven và bộ nhớ đệm Caching Redis."
    > 
    > **[EN]** "First, let's look at the project background. Currently, HSU's legacy course registration portal frequently suffers from severe network congestion during peak hours, causing students to experience long loading times. Furthermore, business rule checks such as prerequisites, schedule clashes, and class size limits are slow and prone to errors.
    > 
    > Looking at the comparison table on the slide, the old system only supports around 1,500 concurrent connections with response latency climbing up to several seconds under stress. Our new solution targets real-time processing, scaling active capacity to **over 15,000 concurrent users**, reducing response latency to **under 100ms**, and completely eliminating over-enrollment issues through an Event-driven architecture and Redis caching."

---

### 🖥️ Slide 3: Cấu Trúc WBS & Phạm Vi Dự Án (Scope)
*   **Người trình bày / Speaker:** Backend Developer
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Xin chào thầy và các bạn, em phụ trách lập trình Backend cho dự án. Em xin trình bày về cấu trúc phân rã công việc WBS và phạm vi của đồ án trong các phần 2 đến phần 5.
    > 
    > Để kiểm soát chặt chẽ dự án trong vòng 12 tuần, chúng em phân chia công việc thành 4 khối WBS cốt lõi:
    > *   **WBS 2.0 Planning:** Xây dựng quy chế làm việc nhóm, lập bản mô tả phạm vi và thiết lập Baseline tiến độ 12 tuần.
    > *   **WBS 3.0 Executing:** Khảo sát nghiệp vụ HSU, thiết kế UI/UX trên Figma, phát triển API Backend và lập trình giao diện Frontend cho cả cổng sinh viên và quản trị đào tạo.
    > *   **WBS 4.0 Monitoring & Controlling:** Theo dõi tiến độ thực tế dựa trên đường găng và kiểm soát rủi ro bằng Risk Register.
    > *   **WBS 5.0 Closing:** Nghiệm thu hệ thống, viết tài liệu hướng dẫn vận hành và đúc kết Lessons Learned.
    > 
    > Các chức năng ngoài phạm vi (Out-of-Scope) như thanh toán học phí trực tiếp hoặc thi trực tuyến đã được tách biệt rõ để tránh phình to phạm vi dự án."
    > 
    > **[EN]** "Hello professor and classmates, I am the Backend Developer. I will present our Work Breakdown Structure (WBS) and the scope of our project spanning Phases 2 to 5.
    > 
    > To maintain strict control over our 12-week schedule, we partitioned the project into 4 core WBS blocks:
    > *   **WBS 2.0 Planning:** Formulating the Team Contract, defining the Scope Statement, and establishing our 12-week schedule baseline.
    > *   **WBS 3.0 Executing:** Gathering HSU business requirements, designing UI/UX prototypes in Figma, and coding the Backend API and Frontend portals.
    > *   **WBS 4.0 Monitoring & Controlling:** Monitoring actual progress against the Critical Path and managing risks using our Risk Register.
    > *   **WBS 5.0 Closing:** Handing over the system, writing operator documentation, and summarizing lessons learned.
    > 
    > Out-of-scope features like tuition fee processing or online examination have been clearly separated to prevent scope creep."

---

### 🖥️ Slide 4: Khảo Sát Người Dùng & Đặc Tả Yêu Cầu (SRS)
*   **Người trình bày / Speaker:** Backend Developer
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Để đảm bảo sản phẩm bám sát thực tế, nhóm đã tiến hành khảo sát ý kiến trực tuyến từ 500 sinh viên HSU. Kết quả cho thấy 85% gặp lỗi nghẽn mạng và 92% mong muốn đăng ký môn học thuận tiện trên di động.
    > 
    > Từ đó, chúng em xây dựng bộ quy tắc học vụ tự động trong tài liệu SRS để máy chủ tự động xác thực: môn tiên quyết, giới hạn tín chỉ từ 12 đến 24, tự động chặn đăng ký trùng lịch và tự động khóa lớp khi sĩ số đạt tối đa."
    > 
    > **[EN]** "To ensure our product aligns with actual needs, we surveyed 500 HSU students. The results indicate that 85% suffer from congestion errors and 92% demand mobile-friendly registration.
    > 
    > Based on this, we codified automatic academic rules in the SRS document for server-side verification: checking prerequisite courses, keeping credits between 12 and 24, blocking schedule conflicts, and closing classes immediately when slot limits are reached."

---

### 🖥️ Slide 5: Kiến Trúc & Giải Pháp Công Nghệ
*   **Người trình bày / Speaker:** UI/UX Developer
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Em là UI/UX Developer, phụ trách giao diện và bảo mật. Để hiện thực hóa mục tiêu chịu tải cao và xử lý thời gian thực, chúng em đã lựa chọn giải pháp kiến trúc 3 thành phần chính:
    > 1.  **Frontend Dynamic UI:** Được xây dựng bằng HTML5/CSS3 và JavaScript thuần (Vanilla JS) tối ưu dung lượng tải trang cực nhẹ, tương thích hoàn hảo trên di động.
    > 2.  **Real-time Engine:** Sử dụng các kết nối API tối ưu để đồng bộ số lượng chỗ trống còn lại tức thời. Khi một lớp đạt sĩ số tối đa, nút đăng ký sẽ tự động khóa lại trong vòng 50ms.
    > 3.  **Security & Validation:** Tích hợp kiểm tra ràng buộc tự động ngay tại client và API Gateway, ngăn chặn các truy cập bất hợp pháp hoặc gian lận đăng ký môn."
    > 
    > **[EN]** "I am the UI/UX Developer, in charge of user interface and security. To achieve our goals of high concurrency and real-time responsiveness, we designed an architecture based on three key pillars:
    > 1.  **Frontend Dynamic UI:** Built with HTML5/CSS3 and Vanilla JS for ultra-lightweight page loading and responsive layout.
    > 2.  **Real-time Engine:** Utilizes optimized API calls to sync remaining slots instantly. Once a class is full, the registration button disables within 50ms.
    > 3.  **Security & Validation:** Auto-validates business rules at both the client and API Gateway level, preventing illegal access or course registration manipulation."

---

### 🖥️ Slide 6: Chức Năng Cổng Sinh Viên (Student Portal)
*   **Người trình bày / Speaker:** Sponsor
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Em xin trình bày chi tiết về giao diện Cổng Sinh viên. Hệ thống được thiết kế với tiêu chí tối giản hóa luồng thao tác. Sinh viên chỉ cần thực hiện 3 bước: Tìm kiếm môn học theo bộ lọc khoa/viện ➔ Kiểm tra lịch học trực quan ➔ Nhấp nút đăng ký nhanh 1-Click.
    > 
    > Các ràng buộc nghiệp vụ như giới hạn tín chỉ (tối đa 24), kiểm tra điểm tích lũy môn tiên quyết và chặn thời khóa biểu trùng lịch học đều được xử lý và cảnh báo tức thì ngay trên giao diện."
    > 
    > **[EN]** "I will now present the details of the Student Portal. The interface is optimized to minimize user clicks. Students only need to follow 3 simple steps: Search for courses using department filters ➔ Review the weekly schedule ➔ Click to register.
    > 
    > Academic constraints such as credit limits (max 24), prerequisite history verification, and schedule conflicts are processed and warned immediately on the interface."

---

### 🖥️ Slide 7: Chức Năng Cổng Phòng Đào Tạo (Admin Portal)
*   **Người trình bày / Speaker:** Project Manager
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Em phụ trách vai trò Project Manager. Tiếp theo, em xin phép trình bày cổng chức năng dành cho Phòng Đào tạo (Admin Portal). 
    > 
    > Đối với cán bộ quản trị học vụ, hệ thống cung cấp 4 công cụ đắc lực:
    > 1.  **Quản lý danh mục môn học:** Thêm/sửa thông tin môn học, số tín chỉ, chỉ định giảng viên.
    > 2.  **Điều chỉnh sĩ số & phòng học:** Cho phép tăng/giảm chỉ tiêu tối đa của lớp học phần theo thời gian thực.
    > 3.  **Mở / Đóng cổng đăng ký:** Quản lý lịch đóng/mở đăng ký môn học theo đúng kế hoạch của từng khóa.
    > 4.  **Thống kê & Xuất báo cáo:** Cho phép xuất danh sách sinh viên đăng ký của từng lớp học ra file Excel."
    > 
    > **[EN]** "I am the Project Manager. Next, I will walk you through the Admin Portal, designed specifically for the HSU Academic Affairs Office.
    > 
    > The portal provides administrative staff with 4 powerful management tools:
    > 1.  **Course Catalog Management:** Add/edit course information, credit values, and assign lecturers.
    > 2.  **Class Capacity & Room Adjustments:** Increase or decrease maximum class sizes in real-time.
    > 3.  **Portal Open/Close Schedule:** Dynamically open or close registration portals based on specific academic timelines.
    > 4.  **Statistics & Reporting:** Export official student enrollment lists to Excel files."

---

### 🖥️ Slide 8: Dashboard Quản Trị Tiến Độ Dự Án (PM Portal)
*   **Người trình bày / Speaker:** Project Manager
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Bên cạnh cổng chức năng của người dùng HSU, một điểm đặc biệt trong đồ án của chúng em là xây dựng **Dashboard Quản trị Tiến độ dành riêng cho Project Manager**. 
    > 
    > Dashboard này tích hợp sơ đồ WBS tiến độ 12 tuần giúp PM: theo dõi thời gian thực tiến độ hoàn thành của từng mốc công việc (như Khởi tạo đạt 100%, Lập trình đạt 80-95%, Kiểm thử đạt 10%), trực quan hóa tỷ lệ hoàn thành dự án tổng thể (hiện tại đạt 85%) và cảnh báo sớm các đầu việc có nguy cơ chậm tiến độ."
    > 
    > **[EN]** "In addition to HSU user portals, a unique highlight of our project is the integration of a **Project Manager (PM) Dashboard** to monitor the 12-week schedule.
    > 
    > This dashboard visualizes WBS tasks over the 12-week timeline, helping the PM: track the real-time completion status of each milestone (e.g., Initiating at 100%, Coding at 80-95%, Testing at 10%), display the overall project completion percentage (currently at 85%), and provide early alerts for tasks lagging behind schedule."

---

### 🖥️ Slide 9: Báo Cáo Hiệu Suất EVM & Quản Lý Chi Phí
*   **Người trình bày / Speaker:** Project Manager
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Để kiểm soát tài chính và tiến độ tại thời điểm báo cáo ngày 16/09/2026, chúng em áp dụng phương pháp **Quản lý giá trị thu được EVM**.
    > 
    > Dựa trên bảng số liệu: BAC tổng ngân sách là 39.15 triệu VND. Giá trị kế hoạch PV là 28.9 triệu VND; Giá trị thu được EV là 28 triệu VND; Chi phí thực tế AC chi ra là 28.328 triệu VND.
    > 
    > Chỉ số hiệu suất tiến độ SPI đạt 0.97 (chậm tiến độ nhẹ) và hiệu suất chi phí CPI đạt 0.99 (vượt chi phí thực tế nhẹ). Dự báo EAC chi phí khi hoàn thành khoảng 39.6 triệu VND (vượt ngân sách 1.2%).
    > 
    > **[Hành động: Click nút 'Xem Chi Tiết Phân Bổ Nhân Lực & Chi Phí' để hiển thị bảng modal]**
    > 
    > Thầy và các bạn có thể thấy chi tiết ngày công và đơn giá cấu thành ngân sách dự án hiển thị trên modal. Để bù đắp tiến độ trễ, nhóm đã áp dụng tăng ca (Crashing) nhân sự Backend và chạy song song (Fast-tracking) viết test case trước."
    > 
    > **[EN]** "To control the project's financial and schedule health, we applied **Earned Value Management (EVM)** metrics as of September 16, 2026.
    > 
    > Based on the data: BAC is 39.15 million VND. PV is 28.9M VND; EV is 28.0M VND; AC is 28.328M VND.
    > 
    > The schedule performance index SPI is 0.97 (slight delay) and the cost performance index CPI is 0.99 (minor budget overrun). The EAC forecast is approximately 39.6M VND (1.2% budget overrun).
    > 
    > **[Action: Click 'Xem Chi Tiết Phân Bổ Nhân Lực & Chi Phí' button to display the modal table]**
    > 
    > As you can see on the modal, the effort and rates constitute the project budget. To recover the schedule, we applied Crashing for backend tasks and Fast-tracking by drafting test cases in advance."

---

### 🖥️ Slide 10: Kế Hoạch Quản Lý Chất Lượng & Mua Sắm
*   **Người trình bày / Speaker:** UI/UX Developer
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Em xin trình bày kế hoạch quản lý chất lượng và mua sắm của dự án. Về mặt chất lượng (DoD), chúng em cam kết độ bao phủ Unit Test của API cốt lõi đạt trên 80% và thời gian phản hồi dưới 100ms.
    > 
    > Về mặt mua sắm, dự án sử dụng hạ tầng Cloud cơ sở dữ liệu với cam kết SLA 99.9%, trang bị chứng chỉ bảo mật SSL chính thức. Toàn bộ tài nguyên lập trình sử dụng nhân sự sẵn có trong nhóm để tiết kiệm chi phí mua ngoài."
    > 
    > **[EN]** "I will present our quality and procurement management plans. For quality (DoD), we commit to a Unit Test coverage of over 80% for core APIs and an API response time under 100ms.
    > 
    > For procurement, we host our database on Cloud servers with a 99.9% SLA commitment and configure global SSL certificates. Development efforts leverage internal team resources to save external costs."

---

### 🖥️ Slide 11: Trình Giả Lập Đường Găng (Critical Path Simulator)
*   **Người trình bày / Speaker:** Sponsor
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Để minh họa trực quan cách quản lý tiến độ dự án, em xin trình diễn công cụ giả lập đường găng.
    > 
    > **[Hành động: Kéo thanh trượt '2. Lập trình Backend' trễ lên 2 tuần]**
    > 
    > Khi tác vụ Backend nằm trên Đường găng bị trễ, ngày hoàn thành dự án lập tức bị đẩy lùi từ tuần 12 sang tuần 14 (hộp cảnh báo chuyển đỏ).
    > 
    > **[Hành động: Trả Backend về 0, kéo thanh trượt '3. Lập trình Frontend' trễ 1 tuần]**
    > 
    > Tuy nhiên, khi em kéo trễ tác vụ Frontend trễ 1 tuần, ngày hoàn thành dự án vẫn giữ nguyên ở tuần 12. Điều này là do Frontend có thời gian dự phòng (Float time) là 1 tuần. Nếu kéo trễ quá 1 tuần, nó mới biến thành đường găng mới và làm trễ hạn dự án."
    > 
    > **[EN]** "To illustrate schedule management clearly, I will demonstrate the Critical Path Simulator.
    > 
    > **[Action: Drag the '2. Lập trình Backend' slider to 2 weeks of delay]**
    > 
    > When the Backend task on the Critical Path is delayed, the project finish date shifts from Week 12 to Week 14, and the alert box turns red.
    > 
    > **[Action: Reset Backend to 0, then drag the '3. Lập trình Frontend' slider to 1 week of delay]**
    > 
    > However, delaying the Frontend task by 1 week does not change the finish date of Week 12. This is because Frontend has a float time of 1 week. If delayed by more than 1 week, it becomes critical and delays the project."

---

### 🖥️ Slide 12: Kiểm Thử Hệ Thống & Đo Lường Lợi Ích
*   **Người trình bày / Speaker:** UI/UX Developer
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Về kết quả thực tế, chúng em đã hoàn thành kiểm thử chức năng với tỷ lệ đạt 100% (45/45 test cases). Đặc biệt, bài kiểm thử tải cao Load Test giả lập 15,000 kết nối đồng thời trong 30 phút đạt tỷ lệ lỗi cực thấp là 0.04%.
    > 
    > Việc đo lường lợi ích cho thấy thời gian đăng ký trung bình của sinh viên giảm 85% (từ 15 phút xuống còn 1.5 phút). Cổng đăng ký hoạt động trơn tru, không sập mạng, giúp giảm tải tối đa các công việc thủ công hỗ trợ học vụ."
    > 
    > **[EN]** "Regarding results, we passed 100% of our functional test cases (45/45). Most importantly, the Load Test simulating 15,000 concurrent connections for 30 minutes achieved an extremely low error rate of 0.04%.
    > 
    > Benefits measurement indicates that average registration time dropped by 85% (from 15 minutes to 1.5 minutes). The portal runs stably under load, minimizing manual student support workloads."

---

### 🖥️ Slide 13: Quản Lý Rủi Ro Tiến Độ & Bảng Đăng Ký Rủi Ro (Risk Register)
*   **Người trình bày / Speaker:** Backend Developer
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Để chủ động phòng ngừa rủi ro, chúng em duy trì bảng đăng ký rủi ro Risk Register gồm 4 bước nghiệp vụ: nhận diện rủi ro, đánh giá xác suất ảnh hưởng (như R1 quá tải máy chủ ở mức Red - Rất cao), lên phương án ứng phó (giảm thiểu R1 bằng Redis/Auto-scaling) và tiến hành giám sát cập nhật rủi ro hàng tuần."
    > 
    > **[EN]** "To manage risks proactively, we maintain a project Risk Register based on 4 steps: identifying risks, evaluating probability and impact (such as R1 Server Overload classified as Red - Very High), planning responses (mitigating R1 via Redis/Auto-scaling), and monitoring risk status weekly."

---

### 🖥️ Slide 14: Tổng Kết Đồ Án & Bài Học Kinh Nghiệm (Conclusion)
*   **Người trình bày / Speaker:** All / Sponsor kết luận
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Để tổng kết lại, dự án của chúng em đạt được các kết quả chính: xây dựng cổng đăng ký HSU chịu tải cao ổn định, hoàn thành đúng mốc tiến độ tuần 12 và quản lý dòng tiền chi phí EVM minh bạch.
    > 
    > Bài học kinh nghiệm quý giá rút ra là: luôn bám sát đường găng; viết Unit Test sớm để giảm lỗi tích hợp; và duy trì giao tiếp nhóm minh bạch. Nhóm em xin chân thành cảm ơn thầy và các bạn đã chú ý lắng nghe."
    > 
    > **[EN]** "In conclusion, our project achieved its key objectives: delivering a high-performance HSU registration portal, keeping the schedule on track for Week 12, and managing cost baselines transparently.
    > 
    > Our core lessons learned are: monitor the Critical Path continuously; write Unit Tests early to reduce integration bugs; and maintain transparent team communication. Thank you, professor and classmates, for listening."
