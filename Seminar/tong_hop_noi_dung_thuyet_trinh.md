# 📘 HƯỚNG DẪN TỔNG HỢP & ĐỀ CƯƠNG THUYẾT TRÌNH SEMINAR (PHẦN 1)
> **Dành cho buổi báo cáo chuyên đề:** *Quản trị Tiến độ & Rủi ro Dự án xây dựng Hệ thống Đăng ký Học phần HSU*
> 
> *Tài liệu này tổng hợp toàn bộ cốt lõi nội dung 12 slide, các từ khóa học thuật quan trọng, các công thức toán học và dự phòng câu hỏi phản biện (Q&A) từ hội đồng để bạn nắm chắc nội dung trong tối nay.*

---

## 📌 PHẦN 1: THÔNG TIN CHUNG & KỊCH BẢN PHÂN VAI (DỰ KIẾN)
Buổi báo cáo được chia làm 4 nội dung lớn tương ứng với 4 thành viên nhóm 3:
1.  **Võ Duy Bình (Trưởng nhóm):** Thuyết trình **Slide 1 ➔ Slide 3** (Tổng quan rủi ro phần mềm, Quy trình rủi ro, phân biệt Xây dựng vs Phần mềm, Rủi ro Tài chính & Thị trường, Quy tắc dự phòng 10-15% và 5%).
2.  **Nguyễn Thanh Quang:** Thuyết trình **Slide 4 ➔ Slide 7** (Phân tích SWOT dự án HSU, 4 rủi ro công nghệ cốt lõi & OWASP 2025, 4 rủi ro nhân sự & PMI Talent Gap, và 4 Case studies thảm họa IT thế giới).
3.  **Trần Bá Lợi:** Thuyết trình **Slide 8 & Slide 9 & Slide 11** (4 Chiến lược phản hồi rủi ro PMBOK, Tích hợp SDP, Bảng Risk Register dự án di động HSU, và Phần trình diễn tính toán NPV/ROI dự án mẫu).
4.  **Hồng Bảo Khang:** Thuyết trình **Slide 10 & Slide 12** (Lý thuyết Hữu dụng Rủi ro Risk Utility Theory, Trình mô phỏng SVG tương tác, Bài toán so sánh Dự án A vs B, Đúc kết JWD Consulting & 5 bài học).

---

## 📊 PHẦN 2: ĐỀ CƯƠNG CHI TIẾT 12 SLIDE (CỐT LÕI NÓI & MẸO GHI ĐIỂM)

### 🖥️ Slide 1: Giới thiệu chuyên đề & Thành viên nhóm
*   **Điểm cốt lõi:** Chào hỏi hội đồng, nêu rõ đề tài bằng tiếng Anh: *"Risk and Schedule Management in the Online Course Registration System Construction Project"* và giới thiệu nhiệm vụ từng thành viên.
*   **Từ khóa tiếng Anh cần nhớ:** *Project Initiating* (Khởi tạo dự án), *Comprehensive Risk Management* (Quản trị rủi ro toàn diện), *Risk Utility Theory* (Lý thuyết hữu dụng rủi ro).
*   **💡 Mẹo ghi điểm:** Thể hiện phong thái tự tin, nhấn mạnh dự án nhóm nghiên cứu là hệ thống đăng ký học phần thế hệ mới cho HSU, kết hợp lý thuyết hàn lâm với đồ án thực hành Web/Mobile App của nhóm.

---

### 🖥️ Slide 2: Định nghĩa & 6 bước Quy trình Rủi ro (PMBOK)
*   **Điểm cốt lõi:**
    1.  **Định nghĩa rủi ro:** Sự kiện chưa chắc chắn, nếu xảy ra sẽ tác động tích cực (cơ hội) hoặc tiêu cực (đe dọa) tới mục tiêu dự án.
    2.  **Quy trình 6 bước:** Hoạch định ➔ Nhận diện ➔ Phân tích định tính ➔ Phân tích định lượng ➔ Lập kế hoạch ứng phó ➔ Giám sát rủi ro.
    3.  **Đặc thù phần mềm:** Khác với xây dựng (hữu hình, dễ đo đạc), dự án phần mềm là vô hình, công nghệ thay đổi liên tục, phụ thuộc nặng vào năng lực con người và dễ bị phình to phạm vi (**Scope Creep**).
*   **💡 Mẹo ghi điểm:** Nhấn mạnh rằng quản trị rủi ro phần mềm là **Proactive** (chủ động phòng ngừa trước) chứ không phải **Reactive** (chờ sự cố xảy ra mới sửa lỗi).

---

### 🖥️ Slide 3: Rủi ro Thị trường (Bên ngoài) & Rủi ro Tài chính (Bên trong)
*   **Điểm cốt lõi:**
    1.  **Rủi ro Thị trường:** Biến động ngoài tầm kiểm soát. Nguy hiểm nhất là việc đối tác thay đổi yêu cầu liên tục (Scope creep) đòi thêm AI chatbot, thanh toán QR... Ứng phó bằng cách chạy theo **Agile/Scrum** phát hành bản thử nghiệm **MVP** sớm.
    2.  **Rủi ro Tài chính:** Liên quan trực tiếp dòng ngân sách. 
    3.  **Quy tắc Quỹ dự phòng tài chính chuẩn PMBOK (RẤT QUAN TRỌNG):**
        *   **Contingency Reserve (Dự phòng sự vụ):** Chiếm **10% - 15%** ngân sách, nằm trong quyền kiểm soát của Project Manager (PM), dùng để giải quyết các rủi ro đã nhận diện trước (**Known-unknowns** - ví dụ: biết trước là server có thể quá tải nên chuẩn bị sẵn tiền thuê thêm server).
        *   **Management Reserve (Dự phòng quản lý):** Chiếm **5%** ngân sách, do Sponsor/Ban Giám hiệu nắm giữ, dùng để giải quyết các sự cố hoàn toàn bất ngờ chưa biết trước (**Unknown-unknowns** - ví dụ: thiên tai hoành hành làm cháy toàn bộ ổ cứng server vật lý).
*   **💡 Mẹo ghi điểm:** Hội đồng rất hay hỏi phân biệt hai loại Quỹ dự phòng này, bạn cần nêu rõ định nghĩa và thẩm quyền sử dụng (PM quản lý Contingency, Sponsor quản lý Management).

---

### 🖥️ Slide 4: Ma trận SWOT Dự án Đăng ký Học phần HSU
*   **Điểm cốt lõi:** Phân tích SWOT khi chuyển từ hệ thống đăng ký cũ trên Laptop sang ứng dụng di động mới:
    *   **S (Strengths - Điểm mạnh):** Cơ động, sinh viên đăng ký mọi lúc mọi nơi trên điện thoại, giao diện hiện đại, tối ưu API giảm nghẽn mạng hơn web cũ.
    *   **W (Weaknesses - Điểm yếu):** Thành viên nhóm chưa có nhiều kinh nghiệm viết mobile app real-time, thời gian làm quá ngắn (12 tuần).
    *   **O (Opportunities - Cơ hội):** Ban giám hiệu HSU hỗ trợ tài chính nâng hạ tầng Cloud, sinh viên đặt nhiều kỳ vọng.
    *   **T (Threats - Thách thức):** Lượng truy cập đồng thời cực lớn tại giờ G mở cổng dễ gây sập API và Database.
*   **💡 Mẹo ghi điểm:** Giải thích rằng ma trận SWOT là công cụ trực quan hóa thế mạnh nội tại và cơ hội bên ngoài để xác định các lỗ hổng kỹ thuật cần đưa vào bản đăng ký rủi ro (Risk Register).

---

### 🖥️ Slide 5: Bốn nhóm Rủi ro Công nghệ (Technology Risk)
*   **Điểm cốt lõi:**
    1.  **Chọn sai công nghệ (Tech Hype):** Chạy theo framework quá mới chưa được kiểm chứng làm trễ hạn bàn giao.
    2.  **Lỗi bảo mật (OWASP Top 10:2025):** Nguy cơ lỗi Broken Access Control (sinh viên can thiệp sửa kết quả của người khác) và Software Supply Chain (lỗi thư viện ngoài).
    3.  **Khả năng mở rộng (Scalability):** Hệ thống sập do nghẽn cổ chai database khi 5,000 - 10,000 sinh viên truy cập cùng lúc. Giải pháp là thiết kế Stateless (phi trạng thái) và Scale-out (mở rộng ngang).
    4.  **Nợ kỹ thuật (Technical Debt):** Viết code cẩu thả để kịp tiến độ làm tăng gấp nhiều lần chi phí bảo trì học kỳ sau.
*   **💡 Mẹo ghi điểm:** Dẫn chứng các tài liệu chuẩn như **OWASP 2025** và **IBM Well-Architected Framework** để tăng tính thuyết phục của rủi ro công nghệ.

---

### 🖥️ Slide 6: Bốn nhóm Rủi ro Con người (Human Risk)
*   **Điểm cốt lõi:**
    1.  **Thiếu hụt nhân lực toàn cầu (Talent Gap):** PMI dự báo toàn cầu thiếu 30 triệu PM công nghệ. Nhóm làm đồ án HSU chỉ có 4 thành viên nên rủi ro quá tải là cực cao.
    2.  **Thành viên nghỉ việc đột ngột (Key-person risk):** Làm thời gian task tăng gấp 3 lần (PMI PERIL database).
    3.  **Thiếu kỹ năng chuyên môn (Skill Gaps):** Thiếu kỹ năng tối ưu truy vấn SQL làm chậm nghẽn hệ thống.
    4.  **Giao tiếp kém:** PMI thống kê giao tiếp kém làm mất 56% ngân sách rủi ro của dự án.
*   **💡 Mẹo ghi điểm:** Chỉ ra giải pháp thực tế nhóm áp dụng: Tổ chức họp Daily Standup 15 phút hàng ngày để giải quyết xung đột sớm và bàn giao chéo tài liệu code.

---

### 🖥️ Slide 7: Bốn Case Studies Thảm họa IT thực tế trong lịch sử
*   **Điểm cốt lõi:** Dùng các thảm họa thực tế để chứng minh rủi ro phần mềm là cực kỳ nguy hiểm:
    1.  **Equifax (2017) - Bảo mật:** Lộ 147 triệu người do trì hoãn cập nhật bản vá bảo mật 2 tháng. ➔ Bài học: Cần quét bảo mật tự động và vá lỗi sớm.
    2.  **Healthcare.gov (2013) - Hiệu năng:** Web sập sau 2 giờ mở cổng do lượng truy cập gấp 5 lần dự kiến. ➔ Bài học: Phải chạy Load/Stress Test giả lập tải trước khi go-live.
    3.  **Knight Capital (2012) - Nợ kỹ thuật:** Lỗ 440 triệu USD trong 45 phút do kích hoạt nhầm đoạn code cũ bị bỏ quên 8 năm. ➔ Bài học: Tự động deploy (CI/CD) và định kỳ dọn dẹp mã nguồn rác.
    4.  **FBI Trilogy (2005) - Quản trị:** Dự án 170 triệu USD bị hủy hoàn toàn do Scope creep và giao tiếp kém giữa FBI với nhà thầu. ➔ Bài học: Phải lập ban kiểm soát thay đổi (Change Control Board).

---

### 🖥️ Slide 8: Kế hoạch Ứng phó & Tích hợp Kế hoạch Phát triển Phần mềm (SDP)
*   **Điểm cốt lõi:**
    1.  **4 chiến lược ứng phó PMBOK:**
        *   **Avoid (Né tránh):** Ví dụ dời mô-đun thanh toán học phí sang cổng ngân hàng ngoài để loại bỏ rủi ro bảo mật giao dịch.
        *   **Mitigate (Giảm thiểu):** Thiết lập Mock API từ tuần 4 để Frontend/Backend phát triển song song, giảm lỗi tích hợp ở tuần 8.
        *   **Transfer (Chuyển giao):** Thuê Cloud hosting có cam kết SLA 99.9% chuyển giao rủi ro hạ tầng.
        *   **Accept (Chấp nhận):** Thiết lập ngân sách/thời gian đệm (buffer) để xử lý các thay đổi giao diện nhỏ.
    2.  **Tích hợp SDP:** Kế hoạch quản trị rủi ro bắt buộc phải là một chương nằm trong tài liệu Kế hoạch phát triển phần mềm (Software Development Plan - SDP) theo chuẩn HSU.

---

### 🖥️ Slide 9: Bảng đăng ký rủi ro (Risk Register) Dự án HSU
*   **Nội dung cốt lõi:** Bảng ma trận ưu tiên xếp hạng các rủi ro của dự án Đăng ký học phần HSU:
    *   **Rủi ro R1 (Sập mạng giờ G):** Probability = 4, Impact = 5 ➔ Score = 20 (Rủi ro Đỏ - Nghiêm trọng nhất). Biện pháp: Mở rộng ngang (Scale-out) server, chạy Load Test trước.
    *   **Rủi ro R2 (Sửa điểm/bảo mật):** Probability = 2, Impact = 5 ➔ Score = 10. Biện pháp: Quét bảo mật OWASP, mã hóa dữ liệu.
    *   **Rủi ro R3 (Trễ hạn tiến độ):** Probability = 3, Impact = 4 ➔ Score = 12. Biện pháp: Dùng phương pháp CPM (đường găng), thêm 15% thời gian đệm.
*   **💡 Mẹo ghi điểm:** Giải thích công thức xếp hạng: $\text{Score} = \text{Probability (Xác suất)} \times \text{Impact (Tác động)}$.

---

### 🖥️ Slide 10: Lý thuyết Hữu dụng Rủi ro (Risk Utility Theory)
*   **Điểm cốt lõi:** Thái độ của con người đối với rủi ro được định nghĩa qua Hàm Hữu dụng $U(x)$:
    1.  **Risk-Averse (Né tránh rủi ro):** Đường cong lõm (Concave), đạo hàm bậc hai $U''(x) < 0$. Mức độ thỏa mãn tăng chậm dần khi rủi ro tăng. Thích sự chắc chắn tuyệt đối.
    2.  **Risk-Neutral (Trung lập):** Đường thẳng tuyến tính ($U''(x) = 0$). Chỉ quan tâm đến giá trị toán học EMV.
    3.  **Risk-Seeking (Mạo hiểm):** Đường cong lồi (Convex), đạo hàm bậc hai $U''(x) > 0$. Thích mạo hiểm lớn để đạt lợi ích tối đa.
    4.  **Bài toán đầu tư:** Dự án A (An toàn 100% ăn $50k) vs Dự án B (Mạo hiểm 50% ăn $120k & 50% ăn $0). Người trung lập sẽ chọn B vì $EMV_B = \$60k > EMV_A = \$50k$. Người né tránh rủi ro (Risk-Averse) sẽ chọn A mặc dù EMV của A thấp hơn, vì giá trị hữu dụng của sự chắc chắn lớn hơn nhiều.
*   **💡 Mẹo ghi điểm:** Đây là slide lý thuyết rất sâu, bạn hãy tự tin chỉ tay vào biểu thức toán học đạo hàm bậc hai $U''(x)$ để chứng minh tính học thuật cao của bài thuyết trình.

---

### 🖥️ Slide 11: Trình mô phỏng tính toán NPV & ROI dự án mẫu
*   **Điểm cốt lõi:** Chứng minh tính toán tài chính của **Dự án B** (Đề thi yêu cầu):
    *   **Chi phí Năm 1 (Năm 0):** Chi phí ban đầu là **$3,000**.
    *   **Dòng tiền Năm 2 - Năm 4:** Lợi ích ròng chiết khấu theo tỷ suất **5%** ($DF_t = 1 / (1.05)^t$).
    *   **Kết quả:** $PV_B = \$7,612.05$, $PV_C = \$5,450.71$, $NPV = \$2,161.34$, $ROI = 39.65\%$.
    *   Vì $NPV > 0$ và ROI rất cao nên đây là dự án tối ưu nhất so với Dự án A (NPV thấp) và Dự án C (NPV âm).
*   **💡 Mẹo ghi điểm:** Thể hiện bằng cách **kéo thanh trượt r trên slide trực tiếp** để hội đồng thấy biểu đồ thay đổi thời gian thực.

---

### 🖥️ Slide 12: Đúc kết JWD Consulting & 5 Bài học kinh nghiệm
*   **Điểm cốt lõi:**
    1.  **Dự án JWD:** Ngân sách thực tế chi $150k so với dự toán $140k (vượt $10k nằm trong quỹ dự phòng). Payback dưới 1 năm, ROI 112%, NPV đạt $272,336.
    2.  **5 Bài học:** (1) Hỗ trợ quyết liệt của Sponsor; (2) Thiết lập Team Contract rõ ràng; (3) Linh hoạt ứng phó (mua module ngoài); (4) Thấu hiểu khẩu vị rủi ro tổ chức; (5) Giám sát Risk Register liên tục.

---

## ❓ PHẦN 3: BỘ CÂU HỎI PHẢN BIỆN Q&A THƯỜNG GẶP (CỦA GIẢNG VIÊN HSU)

#### 💬 Câu hỏi 1: Tại sao dự án đăng ký học phần HSU lại chọn chiến lược "Chuyển giao rủi ro (Transfer)" cho hạ tầng máy chủ bằng cách thuê Cloud? Tại sao không dùng máy chủ vật lý của trường?
*   **Trả lời:** Dạ thưa thầy/cô, việc sử dụng máy chủ vật lý tại trường đòi hỏi nhóm dự án phải chịu trách nhiệm hoàn toàn về bảo trì phần cứng, rủi ro mất điện cục bộ hoặc hỏng hóc thiết bị vật lý. Khi chuyển sang thuê hạ tầng Cloud (như AWS hoặc Azure), chúng em đã chuyển rủi ro vận hành vật lý này cho nhà cung cấp điện toán đám mây với cam kết SLA (Service Level Agreement) đạt 99.9%, giúp giảm thiểu tối đa xác suất sập nguồn điện và tối ưu chi phí vận hành ban đầu.

#### 💬 Câu hỏi 2: Sự khác biệt bản chất giữa Quỹ dự phòng sự vụ (Contingency Reserve) và Quỹ dự phòng quản lý (Management Reserve) là gì?
*   **Trả lời:** Dạ thưa thầy/cô, sự khác biệt nằm ở **đối tượng rủi ro** và **thẩm quyền phê duyệt**:
    *   **Contingency Reserve** dành cho rủi ro đã nhận diện trước (**Known-unknowns**). Nó nằm trong đường cơ sở chi phí (Cost Baseline) và thuộc thẩm quyền trực tiếp của Project Manager (PM) sử dụng khi xuất hiện dấu hiệu kích hoạt rủi ro.
    *   **Management Reserve** dành cho rủi ro chưa nhận diện được (**Unknown-unknowns**). Nó không thuộc đường cơ sở chi phí mà thuộc tổng ngân sách dự án (Project Budget). PM muốn sử dụng quỹ này phải làm tờ trình xin phê duyệt từ phía Sponsor/CEO dự án.

#### 💬 Câu hỏi 3: Giải thích tại sao đường cong Hàm hữu dụng U(x) của nhóm Né tránh rủi ro (Risk-Averse) lại có dạng lõm (đạo hàm bậc hai < 0)?
*   **Trả lời:** Đạo hàm bậc hai $U''(x) < 0$ thể hiện tốc độ tăng của độ hài lòng (Utility) giảm dần khi của cải hoặc mức rủi ro tăng lên (Marginal utility of wealth is decreasing). Đối với người né tránh rủi ro, sự an toàn của việc chắc chắn có được $50,000 mang lại độ hữu dụng cao hơn rất nhiều so với trò chơi may rủi 50/50 để nhận $120,000 hoặc không có gì (mặc dù EMV của trò chơi mạo hiểm cao hơn). Họ sẵn sàng trả phí bảo hiểm hoặc chấp nhận dự án NPV thấp hơn để đổi lấy sự chắc chắn.
