# KỊCH BẢN THUYẾT TRÌNH SEMINAR (LẦN 1) - SONG NGỮ ANH - VIỆT
## Đề tài: Risk and Schedule Management in the Online Course Registration System Construction Project
**Thực hiện:** Nhóm 3 HSU (Môn: Quản trị Dự án Phần mềm - SW403DE01)

---

### 🖥️ Slide 1: Tiêu đề & Giới thiệu thành viên
*   **Nội dung trên slide / Slide Content:** Tên đề tài bằng tiếng Anh, Thông tin lớp học, Danh sách thành viên nhóm 3.
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Lời đầu tiên, em xin đại diện nhóm 3 gửi lời chào đến thầy và toàn thể các bạn lớp Quản trị dự án phần mềm. Hôm nay, nhóm chúng em xin trình bày chuyên đề Seminar phần 1 với đề tài: **'Risk and Schedule Management in the Online Course Registration System Construction Project'**.
    > 
    > Dự án nghiên cứu của nhóm tập trung vào thiết kế hệ thống đăng ký học phần trực tuyến thế hệ mới cho trường Đại học Hoa Sen. Trong phần Seminar 1 này, chúng em sẽ đi sâu vào giai đoạn Khởi tạo dự án (Initiating), Quản trị rủi ro toàn diện và ứng dụng Lý thuyết Hữu dụng Rủi ro (Risk Utility Theory) để làm rõ khẩu vị rủi ro của các tổ chức.
    > 
    > Nhóm 3 gồm có em - Võ Duy Bình là nhóm trưởng phụ trách phần Tổng quan và Rủi ro tài chính, thị trường; bạn Nguyễn Thanh Quang phụ trách Rủi ro công nghệ và con người; bạn Trần Bá Lợi phụ trách Lập kế hoạch ứng phó & Phân tích tài chính NPV; và bạn Hồng Bảo Khang phụ trách Lý thuyết Hữu dụng rủi ro & Case study."
    > 
    > **[EN]** "First of all, on behalf of Team 3, I would like to send my warmest greetings to our instructor and all classmates in this Software Project Management course. Today, our team will present Part 1 of our Seminar topic: **'Risk and Schedule Management in the Online Course Registration System Construction Project'**.
    > 
    > Our research focuses on designing a next-generation online course registration system for Hoa Sen University. In this first seminar, we will dive deep into the Project Initiating phase, comprehensive risk management, and the application of Risk Utility Theory to clarify the risk appetites of different organizations.
    > 
    > Our team consists of myself - Vo Duy Binh as the team leader in charge of the Project Overview, Market, and Financial risks; Nguyen Thanh Quang in charge of Technology and Human risks; Tran Ba Loi covering Risk Response Planning and NPV financial analysis; and Hong Bao Khang in charge of Risk Utility Theory and the JWD Case Study."

---

### 🖥️ Slide 2: Tổng quan & Quy trình Quản trị Rủi ro
*   **Nội dung trên slide / Slide Content:** Định nghĩa rủi ro theo PMBOK, 6 bước quy trình quản trị rủi ro, bảng so sánh đặc thù dự án xây dựng với dự án phần mềm.
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Để bắt đầu, chúng ta cần thống nhất định nghĩa về rủi ro theo chuẩn PMBOK. Rủi ro dự án là một sự kiện hoặc điều kiện chưa chắc chắn, nếu xảy ra sẽ tác động tiêu cực hoặc tích cực đến các mục tiêu cốt lõi như tiến độ, ngân sách hoặc chất lượng.
    > 
    > Quy trình quản trị rủi ro chuẩn gồm 6 bước khép kín từ Lập kế hoạch, Nhận diện, Phân tích định tính/định lượng, lên Kế hoạch ứng phó, Thực thi và Theo dõi.
    > 
    > Các bạn có thể quan sát bảng so sánh đặc thù ở slide. Khác với một dự án xây dựng vốn có tính hữu hình và quy trình tuyến tính cố định; dự án phần mềm mang tính vô hình, yêu cầu thay đổi liên tục (Scope Creep) và công nghệ biến động rất nhanh. Do đó, việc quản trị rủi ro phần mềm phải là một quá trình chủ động (proactive), diễn ra liên tục chứ không phải đợi đến khi sự cố xảy ra mới giải quyết."
    > 
    > **[EN]** "To start, we should align on the definition of risk according to the PMBOK standard. A project risk is an uncertain event or condition that, if it occurs, has a positive (opportunities) or negative (threats) effect on core project objectives such as schedule, budget, or quality.
    > 
    > The standard risk management process consists of 6 closed-loop steps: Planning, Identification, Qualitative and Quantitative analysis, Response planning, Implementation, and Monitoring.
    > 
    > You can observe the project comparison table on the slide. Unlike a construction project, which has tangible outputs and a fixed linear process, software projects are intangible, have continuously changing requirements (Scope Creep), and experience rapid technological volatility. Therefore, software risk management must be a proactive and continuous process throughout the project lifecycle, rather than waiting for issues to occur before reacting."

---

### 🖥️ Slide 3: Rủi ro Thị trường & Rủi ro Tài chính (Tab-based)
*   **Nội dung trên slide / Slide Content:** Giao diện tab tương tác hiển thị hai nhóm rủi ro: Biến động thị trường bên ngoài và Hiệu quả dòng tiền bên trong.
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Tiếp theo, em xin đi sâu vào hai nhóm rủi ro đầu tiên của dự án: Rủi ro thị trường và Rủi ro tài chính.
    > 
    > Về **Rủi ro thị trường**: Đây là các tác nhân bên ngoài tổ chức. Phổ biến nhất là rủi ro thay đổi nhu cầu khách hàng (Scope creep). Ban đầu, đối tác chỉ yêu cầu một cổng đăng ký môn học cơ bản, nhưng giữa dự án lại yêu cầu tích hợp thêm AI gợi ý môn học hoặc thanh toán QR. Đối thủ cạnh tranh tung sản phẩm nhanh hơn hoặc công nghệ lõi bị lỗi thời cũng là các mối đe dọa lớn. Chúng ta ứng phó bằng cách chạy theo mô hình Agile/Scrum và phát hành nhanh bản thử nghiệm MVP.
    > 
    > Về **Rủi ro tài chính**: Đây là rủi ro liên quan trực tiếp đến dòng ngân sách. Dấu hiệu cảnh báo là chi phí nhân sự tăng nhanh qua từng Sprint, hoặc nhà đầu tư chậm giải ngân ngân sách do tiến độ trễ.
    > 
    > Để ứng phó, theo chuẩn PMBOK, dự án của chúng ta thiết lập cơ chế phân bổ quỹ dự phòng tài chính rất rõ ràng như bảng ở góc dưới slide: Quỹ dự phòng sự vụ (Contingency Reserve) chiếm từ 10% đến 15% tổng ngân sách nhằm xử lý các rủi ro đã nhận diện (Known-unknowns). Song song đó là Quỹ dự phòng quản lý (Management Reserve) chiếm 5% dành riêng cho các tình huống bất ngờ chưa lường trước (Unknown-unknowns).
    > 
    > Sau đây, em xin nhường phần thuyết trình lại để tiếp tục với mô hình SWOT và rủi ro công nghệ, con người."
    > 
    > **[EN]** "Next, I will go deeper into the first two risk categories: Market risks and Financial risks.
    > 
    > Regarding **Market Risks**, these are factors external to the organization. The most common is the change in customer requirements, also known as Scope Creep. Initially, the partner only requested a basic course registration portal, but mid-project they demanded integrating an AI recommendation system or QR payments. Competitors releasing products faster or core technology becoming obsolete are also major threats. We mitigate these by adopting an Agile/Scrum framework and quickly releasing a Minimum Viable Product (MVP) for verification.
    > 
    > Regarding **Financial Risks**, these are directly related to the project budget. Warning signs include rapidly increasing labor costs per sprint, or funding disbursement delays due to schedule slippage.
    > 
    > To address this, based on PMBOK, we establish a clear reserve allocation strategy as shown at the bottom of the slide: the Contingency Reserve (10%-15% of budget) is managed by the PM to handle identified risks (Known-unknowns), while the Management Reserve (5% of budget) is managed by the Sponsor/CEO for unforeseen situations (Unknown-unknowns).
    > 
    > Now, the presentation will continue with the SWOT model and technical and human risks."

---

### 🖥️ Slide 4: Mô hình SWOT Nhận Diện Rủi Ro - Dự Án HSU
*   **Nội dung trên slide / Slide Content:** Ma trận SWOT phân tích dự án Cổng đăng ký môn học trên di động HSU.
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Tiếp theo phần trình bày trước, em xin giới thiệu về mô hình SWOT mà nhóm đã xây dựng riêng cho dự án Đăng ký học phần di động của sinh viên HSU.
    > 
    > *   **Điểm mạnh (Strengths):** Ứng dụng mang tính di động cao, giúp sinh viên đăng ký mọi lúc mọi nơi trên điện thoại, đồng thời giao diện hiện đại và tối ưu hóa API giúp giảm nghẽn mạng hơn hẳn hệ thống web cũ.
    > *   **Điểm yếu (Weaknesses):** Đội ngũ nhân sự nội bộ chưa có nhiều kinh nghiệm lập trình ứng dụng di động thời gian thực và thời gian phát triển ngắn (chỉ 12 tuần).
    > *   **Cơ hội (Opportunities):** Nhận được sự ủng hộ lớn từ sinh viên và Ban Giám hiệu HSU sẵn sàng đầu tư hạ tầng đám mây mạnh mẽ.
    > *   **Thách thức (Threats):** Lượng truy cập đồng thời cực lớn vào giờ G mở cổng (đạt từ 5,000 đến 10,000 sinh viên cùng lúc) dễ gây sập API nếu cấu hình database không tốt.
    > 
    > Phân tích SWOT này giúp chúng em định vị rõ các mối đe dọa kỹ thuật để xây dựng Risk Register tiếp theo."
    > 
    > **[EN]** "Following the previous part, I will introduce the SWOT model that our team developed specifically for HSU's Mobile Course Registration project.
    > 
    > *   **Strengths:** The application offers high mobility, allowing students to register anytime and anywhere on smartphones, while the modern UI/UX and optimized APIs minimize network congestion compared to the legacy laptop portal.
    > *   **Weaknesses:** The development team lacks extensive experience in large-scale real-time mobile app development, and the timeline is very tight (only 12 weeks).
    > *   **Opportunities:** Strong support from HSU administration ready to invest in robust cloud infrastructure, along with high expectations from HSU students.
    > *   **Threats:** Extreme concurrent traffic at opening hour (5,000 to 10,000 simultaneous users) could crash the API and database without proper optimization.
    > 
    > This SWOT analysis helps us pinpoint technical threats to establish the subsequent Risk Register."

---

### 🖥️ Slide 5: Rủi Ro Công Nghệ (Technology Risk)
*   **Nội dung trên slide / Slide Content:** Lưới 4 thẻ rủi ro kỹ thuật: Chọn sai công nghệ, Lỗi bảo mật (OWASP 2025), Không mở rộng được hệ thống (Scalability), Nợ kỹ thuật (Technical Debt).
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Đối với một dự án phần mềm, rủi ro công nghệ luôn là rủi ro cốt lõi. Chúng em nhận diện 4 rủi ro lớn nhất:
    > 
    > 1.  **Chọn sai công nghệ:** Do chạy theo xu hướng hoặc đội ngũ thiếu kinh nghiệm làm ứng dụng real-time. Nếu chọn sai, hậu quả là phải đập đi viết lại API, gây trễ hạn và vượt chi phí.
    > 2.  **Lỗi bảo mật:** Theo tiêu chuẩn bảo mật OWASP Top 10 bản cập nhật mới nhất năm 2025, lỗi kiểm soát truy cập (Broken Access Control) và cấu hình sai bảo mật đang đứng đầu bảng. Một lỗ hổng bảo mật sẽ làm lộ thông tin sinh viên HSU và gây hậu quả pháp lý nghiêm trọng.
    > 3.  **Hệ thống không mở rộng được (Scalability):** Hệ thống đăng ký thường sập do nghẽn cổ chai database. Chúng em áp dụng thiết kế phi trạng thái (stateless) và mở rộng ngang (scale-out) thay vì chỉ nâng cấp server đơn lẻ.
    > 4.  **Nợ kỹ thuật (Technical Debt):** Việc viết code ẩu để kịp tiến độ bàn giao sẽ tích lũy nợ kỹ thuật, khiến việc bảo trì hệ thống ở các học kỳ sau cực kỳ tốn kém."
    > 
    > **[EN]** "For a software project, technology risk is always a core concern. We have identified four major technical risks:
    > 
    > 1.  **Technology Selection:** Rushing after trends or lacking experience in real-time systems can force us to rewrite entire APIs, causing delays and budget overruns.
    > 2.  **Security Vulnerabilities:** According to the latest OWASP Top 10 security standards, Broken Access Control and Security Misconfigurations lead the list. A vulnerability could leak HSU student data and lead to severe legal consequences.
    > 3.  **Scalability Failure:** Course registration systems frequently crash due to database bottlenecks. We address this by using stateless architectures and horizontal scaling (scale-out) rather than just upgrading a single physical server.
    > 4.  **Technical Debt:** Writing sloppy code to meet tight delivery schedules accumulates technical debt, making maintenance in future semesters extremely expensive."

---

### 🖥️ Slide 6: Rủi Ro Con Người (Human Risk)
*   **Nội dung trên slide / Slide Content:** Lưới 4 thẻ rủi ro nhân sự: Thiếu nhân lực, Thành viên nghỉ việc, Thiếu kỹ năng chuyên môn, Giao tiếp kém trong nhóm.
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Song song với công nghệ, con người là nhân tố quyết định thành bại của dự án.
    > 
    > 1.  **Thiếu hụt nhân lực:** Báo cáo Talent Gap năm 2025 của PMI chỉ ra ngành quản lý dự án công nghệ đang thiếu hụt gần 30 triệu nhân sự chất lượng cao. Dự án HSU của chúng ta chỉ có 4 thành viên thực thi chính nên rủi ro quá tải công việc là rất cao.
    > 2.  **Thành viên nghỉ việc đột ngột:** Có thể khiến thời gian thực hiện tác vụ tăng gấp ba lần theo thống kê cơ sở dữ liệu PERIL của PMI.
    > 3.  **Thiếu hụt kỹ năng:** Nhóm phát triển thiếu kỹ năng tối ưu truy vấn database thời gian thực dẫn đến hệ thống chạy chậm.
    > 4.  **Giao tiếp kém:** Báo cáo Pulse of the Profession chỉ ra giao tiếp kém hiệu quả là nguyên nhân của hơn 56% tổn thất ngân sách dự án phần mềm. Chúng em ứng phó bằng cách tổ chức họp Daily Standup 15 phút mỗi ngày và cập nhật tài liệu API rõ ràng."
    > 
    > **[EN]** "Alongside technology, human resources are a decisive factor in project success.
    > 
    > 1.  **Resource Scarcity:** The PMI Talent Gap report projects a global shortage of nearly 30 million project professionals by 2035. Our HSU project team only has 4 members, leading to a high risk of workload burnout.
    > 2.  **Key Developer Resignation:** Losing a key developer mid-project can triple task duration according to PMI's PERIL database.
    > 3.  **Skill Gaps:** Lacking deep SQL query optimization skills causes performance bottlenecks even on powerful hardware.
    > 4.  **Ineffective Communication:** The Pulse of the Profession report shows that poor communication contributes to over 56% of software project budget waste. We mitigate this by holding daily 15-minute standup meetings and maintaining clear API documentation."

---

### 🖥️ Slide 7: Đánh Giá Rủi Ro & Case Studies Thực Tế
*   **Nội dung trên slide / Slide Content:** Phân tích 4 vụ bê bối IT lịch sử: Equifax (2017), Healthcare.gov (2013), Knight Capital (2012), FBI Trilogy (2005).
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Để chứng minh cho các rủi ro trên không chỉ là lý thuyết, em xin trình bày 4 case study xương máu trong lịch sử CNTT thế giới:
    > 
    > *   **Vụ Equifax (2017):** Rò rỉ dữ liệu của 147 triệu người do trì hoãn cập nhật bản vá Apache Struts suốt 2 tháng. Bài học rút ra là phải tự động hóa quét bảo mật.
    > *   **Vụ Healthcare.gov (2013):** Trang web chính phủ Mỹ sập ngay sau 2 giờ go-live vì lượng tải đồng thời vượt 5 lần dự kiến. Bài học là bắt buộc phải thực hiện kiểm thử tải (Stress Test) trước khi mở cổng.
    > *   **Vụ Knight Capital (2012):** Lỗ 440 triệu USD chỉ trong 45 phút và phá sản do kích hoạt nhầm đoạn code cũ (nợ kỹ thuật) chưa được dọn dẹp. Bài học là phải loại bỏ nợ kỹ thuật và tự động hóa quy trình deploy (CI/CD).
    > *   **Vụ FBI Trilogy (2005):** Dự án Virtual Case File trị giá 170 triệu USD bị hủy hoàn toàn do Scope creep và giao tiếp kém giữa FBI và nhà thầu SAIC. Bài học là cần thiết lập quy trình kiểm soát thay đổi (Change Control Board) nghiêm ngặt.
    > 
    > Tiếp theo, phần trình bày sẽ tiếp tục với Lập kế hoạch ứng phó rủi ro."
    > 
    > **[EN]** "To prove that these risks are not just theoretical, I will present four critical case studies in IT history:
    > 
    > *   **The Equifax breach (2017):** A data leak affecting 147 million people due to a 2-month delay in patching a known Apache Struts vulnerability. The lesson is that we must automate security scanning and configuration checks (Shift-left security).
    > *   **The Healthcare.gov crash (2013):** The US government portal crashed 2 hours post-launch because concurrent traffic was 5 times higher than expected. The lesson is that load and stress testing are mandatory before launch.
    > *   **The Knight Capital failure (2012):** A loss of $440 million in just 45 minutes leading to bankruptcy due to manual deployment activating legacy code (technical debt). The lesson is to eliminate technical debt and automate deployment with CI/CD.
    > *   **The FBI Trilogy project (2005):** The $170 million Virtual Case File project was canceled after 4 years of development due to continuous scope creep and poor communication between the FBI and the vendor. The lesson is to enforce a strict Change Control Board (CCB) process.
    > 
    > Next, the presentation will continue with Risk Response Planning."

---

### 🖥️ Slide 8: Lập Kế Hoạch Ứng Phó Rủi Ro & Tích Hợp SDP
*   **Nội dung trên slide / Slide Content:** 4 chiến lược ứng phó rủi ro PMBOK (Avoid, Mitigate, Transfer, Accept), Bản đăng ký rủi ro (Risk Response Register) và tích hợp vào tài liệu kế hoạch phần mềm SDP.
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Sau khi đã nhận diện các rủi ro kỹ thuật và nhân sự ở trên, em xin trình bày các phương án lập kế hoạch ứng phó cụ thể.
    > 
    > Theo PMBOK, chúng ta có 4 chiến lược phản hồi rủi ro chính:
    > 
    > 1.  **Né tránh (Avoidance):** Thay đổi hẳn thiết kế để loại bỏ rủi ro. Ví dụ: chúng em dời phân hệ thanh toán học phí sang cổng liên kết ngân hàng ngoài thay vì tự xây dựng để tránh rủi ro bảo mật giao dịch.
    > 2.  **Giảm thiểu (Mitigation):** Giảm xác suất xảy ra. Ví dụ: chúng em thiết lập mock API ngay từ tuần 4 để Frontend và Backend có thể code độc lập, giảm thiểu lỗi tích hợp ở tuần 8.
    > 3.  **Chuyển giao (Transfer):** Chuyển rủi ro cho bên thứ ba. Ví dụ: Thuê máy chủ đám mây Cloud có cam kết SLA 99.9% để tránh rủi ro mất điện, hỏng phần cứng server vật lý tại trường.
    > 4.  **Chấp nhận (Acceptance):** Sống chung với rủi ro nhỏ. Ví dụ: Chấp nhận việc khách hàng có thể thay đổi nhẹ giao diện và xử lý bằng quỹ thời gian đệm bàn giao ở tuần 12.
    > 
    > Tiếp theo, phần trình bày sẽ chuyển sang về phần Lý thuyết Hữu dụng rủi ro."
    > 
    > **[EN]** "Having identified the technical and human risks, I will outline our specific response plans.
    > 
    > According to PMBOK, we have four primary risk response strategies:
    > 
    > 1.  **Avoidance:** Changing the design to eliminate the risk. For example, we offload the tuition payment gateway to an external bank API instead of developing it ourselves, avoiding transaction security risks.
    > 2.  **Mitigation:** Reducing probability or impact. For instance, we establish mock APIs by week 4 so frontend and backend developers can code independently, minimizing integration issues in week 8.
    > 3.  **Transfer:** Shifting risk ownership. For example, outsourcing cloud server hosting with a 99.9% SLA to avoid power cuts or hardware failures at school.
    > 4.  **Acceptance:** Accepting minor risks with buffers. For instance, accepting that clients might request minor UI tweaks and managing them using a timeline buffer in week 12.
    > 
    > Next, the presentation will move to Risk Utility Theory."

---

### 🖥️ Slide 9: Lý Thuyết Hữu Dụng Của Rủi Ro (Risk Utility Theory)
*   **Nội dung trên slide / Slide Content:** Khái niệm Utility (Hữu dụng), 3 nhóm thái độ rủi ro (Risk-averse, Risk-neutral, Risk-seeking) và hình học hàm thỏa dụng (Lõm, Tuyến tính, Lồi).
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Em xin trình bày phần nội dung mang tính học thuật của Seminar chuyên đề lần này: **Lý thuyết Hữu dụng Rủi ro (Risk Utility Theory)**.
    > 
    > Trong quản trị rủi ro thực tế, Utility (độ hữu dụng) không đơn thuần đo bằng giá trị tiền tệ khô khan, mà đo bằng mức độ hài lòng hoặc giá trị chủ quan mà một cá nhân hay tổ chức cảm nhận được trước các kết quả không chắc chắn. Lý thuyết này chia khẩu vị rủi ro (risk appetite) của con người thành 3 nhóm thái độ:
    > 
    > 1.  **Risk Averse (Né tránh rủi ro):** Nhóm này ưu tiên sự an toàn tuyệt đối. Đường cong hữu dụng có dạng lõm (concave) với đạo hàm bậc hai $U''(x) < 0$, biểu thị độ hữu dụng tăng chậm dần. Các ngân hàng hoặc dự án học vụ trường học thường thuộc nhóm này.
    > 2.  **Risk Neutral (Trung lập với rủi ro):** Ra quyết định thuần túy dựa trên giá trị kỳ vọng (Expected Value). Đường cong hữu dụng là đường thẳng tuyến tính ($U''(x) = 0$). Các tập đoàn phần mềm lớn có tiềm lực tài chính mạnh thường ở trạng thái này.
    > 3.  **Risk Seeking (Ưa thích rủi ro):** Chấp nhận mạo hiểm cao để đổi lấy lợi ích đột phá. Đường cong hữu dụng có dạng lồi (convex) với đạo hàm bậc hai $U''(x) > 0$. Các công ty khởi nghiệp (Startup) thường có khẩu vị ưa mạo hiểm này."
    > 
    > **[EN]** "I will present the academic focus of our seminar: **Risk Utility Theory**.
    > 
    > In real-world project management, utility is not measured strictly in monetary terms, but rather by the level of satisfaction or subjective value that an individual or organization feels when facing uncertain outcomes. This theory divides human risk appetite into three main categories:
    > 
    > 1.  **Risk-Averse:** Prioritizes safety. The utility curve is concave with a negative second derivative ($U''(x) < 0$), meaning satisfaction increases at a decreasing rate. Banks or university administrative systems usually fall here.
    > 2.  **Risk-Neutral:** Decisions are made purely based on Expected Monetary Value (EMV). The utility curve is a linear line ($U''(x) = 0$). Large, financially stable software corporations are typically risk-neutral.
    > 3.  **Risk-Seeking:** Willing to take high risks for potentially massive payoffs. The utility curve is convex with a positive second derivative ($U''(x) > 0$). Technology startups typically have this risk appetite."

---

### 🖥️ Slide 10: Trình Mô Phỏng Hàm Hữu Dụng Tương Tác
*   **Nội dung trên slide / Slide Content:** Đồ thị SVG tương tác thực tế hiển thị 3 đường cong hữu dụng (Lõm hồng, Tuyến tính xanh, Lồi tím) và thanh trượt thay đổi giá trị tài sản $x$.
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Mời thầy và các bạn theo dõi phần biểu diễn mô phỏng đồ thị tương tác thời gian thực trên màn hình.
    > 
    > Khi em thay đổi giá trị tài sản $x$ trên thanh trượt từ $0 lên $100,000, các bạn có thể thấy tọa độ các điểm hữu dụng tương ứng di chuyển trên 3 đường cong:
    > *   Đường màu hồng (Né tránh) tăng rất nhanh ở giai đoạn đầu nhưng đi ngang dốc ở giai đoạn sau.
    > *   Đường màu xanh (Trung lập) đi thẳng góc 45 độ, phản ánh mỗi đồng tiền tăng thêm mang lại mức thỏa mãn như nhau.
    > *   Đường màu tím (Ưa rủi ro) tăng vọt dốc đứng ở giai đoạn sau, cho thấy mức độ thỏa mãn tăng cực kỳ nhanh khi giá trị phần thưởng đạt ngưỡng lớn.
    > 
    > Ứng dụng lý thuyết này giúp Project Manager hiểu rõ 'khẩu vị rủi ro' của khách hàng trước khi chọn chiến lược ứng phó. Ví dụ, đối với một khách hàng mang thái độ né tránh rủi ro (Risk-averse) như Phòng Đào tạo HSU, PM không nên đề xuất các công nghệ quá mới mẻ, chưa được kiểm chứng, mà phải ưu tiên giải pháp an toàn, ổn định.
    > 
    > Tiếp theo, phần trình bày sẽ quay lại phần Phân tích hiệu quả tài chính và rủi ro đầu tư."
    > 
    > **[EN]** "I invite you to observe the real-time interactive simulation on the screen.
    > 
    > As I move the asset slider from $0 to $100,000, you can watch the utility coordinates travel along the three curves:
    > *   The pink curve (Risk-Averse) rises rapidly at first but flattens out.
    > *   The blue line (Risk-Neutral) moves at a straight 45-degree angle, indicating each dollar brings equal marginal utility.
    > *   The purple curve (Risk-Seeking) curves sharply upwards at higher values, showing that satisfaction spikes when rewards are large.
    > 
    > Applying this theory helps project managers understand a client's risk appetite before recommending a technology. For example, with a risk-averse client like the HSU Academic Affairs department, the PM should avoid untested frameworks and prioritize safe, stable technologies.
    > 
    > Next, the presentation will return to financial analysis and investment risks."

---

### 🖥️ Slide 11: Tính Toán Tài Chính Dự Án (NPV/ROI) & Quản Trị Rủi Ro Đầu Tư
*   **Nội dung trên slide / Slide Content:** Trình giả lập tính toán NPV, ROI, thời gian hoàn vốn dựa trên các dự án mẫu (Dự án A, B, C từ bài tập thực hành môn học).
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Em xin quay lại để trình bày khía cạnh phân tích tài chính dự án và cách chúng ta lượng hóa rủi ro tài chính trước khi đưa ra quyết định đầu tư.
    > 
    > Mời thầy và các bạn nhìn vào bảng tính toán tài chính tương tác trên slide. Đây là mô hình dòng tiền của **Dự án B (Dự án được khuyên dùng trong bài tập đánh giá)** với thời gian phân tích là 4 năm:
    > *   **Năm 1:** Chi phí đầu tư ban đầu được phân bổ là **$3,000**, chưa thu về lợi ích.
    > *   **Năm 2 đến năm 4:** Lợi ích thu về tăng dần từ **$1,000**, **$3,000** đến **$5,000**; trong khi chi phí vận hành bảo trì cố định ở mức **$1,000/năm**.
    > 
    > Với tỷ suất chiết khấu tiêu chuẩn được đặt là **5%** (các bạn có thể tự do kéo thanh trượt r trên màn hình để kiểm chứng các kịch bản lãi suất khác nhau), hệ thống tự động tính toán ra kết quả:
    > *   **Tổng giá trị hiện tại của Lợi ích (PV_B):** Đạt **$7,612.05**.
    > *   **Tổng giá trị hiện tại của Chi phí (PV_C):** Đạt **$5,450.71**.
    > *   **Giá trị hiện tại ròng (NPV):** Đạt giá trị dương **$2,161.34**. (NPV > 0 chứng minh dự án có lợi nhuận kinh tế sau khi đã chiết khấu).
    > *   **Tỷ suất sinh lời (ROI):** Đạt **39.65%**, phản ánh hiệu quả sử dụng vốn rất tốt.
    > 
    > Khi chúng em bấm chọn các dự án khác trên menu: Dự án A chỉ đạt NPV là **$1,102.27**, còn Dự án C bị âm **-$1,343.47** (thể hiện bằng cột màu đỏ báo động rủi ro thua lỗ). Do đó, việc lựa chọn Dự án B là quyết định đầu tư thông minh và ít rủi ro nhất.
    > 
    > Cuối cùng, phần trình bày sẽ đúc kết case study JWD và kết luận."
    > 
    > **[EN]** "I am back to discuss project financial analysis and how we quantify financial risks before making investment decisions.
    > 
    > Please look at the interactive financial sheet on the slide. This shows the cash flow model of **Project B (the recommended project from our exam)** analyzed over 4 years:
    > *   **Year 1:** Initial investment cost of **$3,000**, with no benefits.
    > *   **Years 2 to 4:** Benefits grow from **$1,000** to **$3,000** and then **$5,000**; while operating costs remain flat at **$1,000/year**.
    > 
    > With the standard discount rate set at **5%** (you can adjust slider r on the screen to test other rates), the system calculates:
    > *   **Present Value of Benefits (PV_B):** $7,612.05.
    > *   **Present Value of Costs (PV_C):** $5,450.71.
    > *   **Net Present Value (NPV):** A positive **$2,161.34** (NPV > 0 proves economic profitability).
    > *   **Return on Investment (ROI):** A solid **39.65%**.
    > 
    > If we select other options from the menu, Project A only yields an NPV of **$1,102.27**, while Project C is in the red at **-$1,343.47** (highlighted in alert red). Therefore, choosing Project B is the most sound and least risky decision.
    > 
    > Finally, the presentation will conclude with the JWD case study."

---

### 🖥️ Slide 12: Thực Tế JWD Consulting, Kết Luận & Q&A
*   **Nội dung trên slide / Slide Content:** Các thông số thực tế của dự án mẫu JWD Consulting, 5 bài học kinh nghiệm cốt lõi và slide mở đầu Q&A.
*   **Lời thoại nói / Presentation Speech:**
    > **[VI]** "Để đúc kết lại toàn bộ chuyên đề Seminar 1, chúng em đối chiếu với dự án thực tế của JWD Consulting (Chương 3 sách Kathy Schwalbe):
    > *   Dự án có ngân sách dự toán $140,000, thực chi thực tế là $150,000 (vượt $10,000 nằm trong ngân sách dự phòng).
    > *   Thu về lợi ích to lớn $200,000/năm và đạt tỷ suất ROI ấn tượng 112%, hoàn vốn dưới 1 năm.
    > 
    > Các bạn có thể nhấp chọn nút 'Xem Chương trình họp Kick-off (Fig 3-2)' ở góc dưới cùng bên trái màn hình slide này để xem biên bản chương trình họp khởi động chi tiết của dự án HSU mà nhóm đã Việt hóa chuẩn hóa.
    > 
    > 5 bài học cốt lõi nhóm rút ra từ chuyên đề Seminar này là:
    > 1.  Sự hỗ trợ quyết liệt của Sponsor (Ban giám hiệu/CEO) là chìa khóa.
    > 2.  Thiết lập quy chế làm việc nhóm (Team Contract) rõ ràng ngay từ đầu.
    > 3.  Ứng phó rủi ro linh hoạt, sẵn sàng mua ngoài module thay vì tự code khi thiếu thời gian.
    > 4.  Thấu hiểu khẩu vị rủi ro của tổ chức để đề xuất công nghệ thích hợp.
    > 5.  Xây dựng và cập nhật Risk Register thường xuyên trong suốt vòng đời dự án.
    > 
    > Phần trình bày Seminar 1 của Nhóm 3 đến đây là kết thúc. Chúng em xin cảm ơn thầy và các bạn đã chú ý lắng nghe. Sau đây, nhóm chúng em rất mong nhận được các câu hỏi phản hồi từ thầy và các bạn trong phần Q&A!"
    > 
    > **[EN]** "To conclude our first seminar, we cross-reference our findings with the real-world JWD Consulting project (Chapter 3, Kathy Schwalbe):
    > *   The project had a budget of $140,000 and actual spending of $150,000 (a $10,000 variance covered by the reserve).
    > *   It returned huge benefits of $200,000/year, achieving a 112% ROI and payback in under 1 year.
    > 
    > The 5 core lessons we learned are:
    > 1.  Strong Sponsor support (like CEO Joe Fleming) is key.
    > 2.  Establish a clear Team Contract early on.
    > 3.  Be flexible in risk response (purchasing third-party modules over coding when short on time).
    > 4.  Align technical solutions with the organization's risk appetite.
    > 5.  Maintain and update the Risk Register throughout the project lifecycle.
    > 
    > This concludes Team 3's presentation. Thank you for your time, and we look forward to your questions in the Q&A session!"
