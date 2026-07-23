
# BÁO CÁO CHUYÊN ĐỀ SEMINAR (PHẦN 1)
## RISK AND SCHEDULE MANAGEMENT IN THE ONLINE COURSE REGISTRATION SYSTEM CONSTRUCTION PROJECT

| Thông tin tài liệu | Chi tiết (Theo mẫu Project Plan.docx) |
| :--- | :--- |
| **Dự án** | Cổng Đăng ký Học phần Trực tuyến HSU |
| **Tài liệu** | Báo cáo Seminar Chuyên đề (Phần 1: Khởi tạo & Quản trị Rủi ro) |
| **Phiên bản** | v1.0 |
| **Ngày lập** | 23/07/2026 |
| **Trạng thái** | Baseline |
| **Tác giả** | Nhóm 3 (Lớp SW403DE01) |
| **Người duyệt** | Thầy Nguyễn Văn Sơn |

---

### LỊCH SỬ THAY ĐỔI TÀI LIỆU (REVISION HISTORY)

| Ngày | Phiên bản | Mô tả chi tiết thay đổi | Tác giả |
| :--- | :--- | :--- | :--- |
| 10/07/2026 | v0.1 | Khởi tạo dự thảo nội dung, phác thảo đề mục chính | Võ Duy Bình |
| 15/07/2026 | v0.5 | Cập nhật lý thuyết Risk Utility và tính toán NPV/ROI | Trần Bá Lợi, Hồng Bảo Khang |
| 18/07/2026 | v0.8 | Bổ sung phân tích 4 loại rủi ro và Case studies | Nguyễn Thanh Quang |
| 23/07/2026 | v1.0 | Đồng bộ hóa kịch bản, slide và xuất bản tài liệu Baseline | Nhóm 3 |

---

### THÔNG TIN NHÓM THỰC HIỆN

* **Môn học:** Quản trị dự án phần mềm (Mã môn: `SW403DE01` - Đại học Hoa Sen)
* **Nhóm thực hiện:** Nhóm 3
* **Thành viên:**
  * Võ Duy Bình - MSSV: 22301500 (Nhóm trưởng)
  * Hồng Bảo Khang - MSSV: 22101347
  * Trần Bá Lợi - MSSV: 22300236
  * Nguyễn Thanh Quang - MSSV: 22110739
* **Tài liệu tham khảo chính:**
  * *Information Technology Project Management (9th Edition)* – Kathy Schwalbe
  * *Mẫu Kế hoạch phát triển phần mềm (SDP HSU)* – `Project Plan.docx`
  * *Đề thi & Bài làm mẫu HSU:* `Test 3 - 30.10.24.docx` (Bài thi HSU)
  * *JWD Consulting Case Study* (Predictive Approach)

---

## MỤC LỤC

1. [Giới thiệu về Quản trị rủi ro trong dự án phần mềm](#1-giới-thiệu-về-quản-trị-rủi-ro-trong-dự-án-phần-mềm)
2. [Các nguồn rủi ro phổ biến trong dự án phần mềm](#2-các-nguồn-rủi-ro-phổ-biến-trong-dự-án-phần-mềm)
   - [2.1. Rủi ro Thị trường (Market Risk)](#21-rủi-ro-thị-trường-market-risk)
   - [2.2. Rủi ro Tài chính (Financial Risk)](#22-rủi-ro-tài-chính-financial-risk)
   - [2.3. Rủi ro Công nghệ (Technology Risk)](#23-rủi-ro-công-nghệ-technology-risk)
   - [2.4. Rủi ro Con người (People Risk)](#24-rủi-ro-con-người-people-risk)
   - [2.5. Nhận diện rủi ro bằng mô hình SWOT - Case Study Dự án HSU](#25-nhận-diện-rủi-ro-bằng-mô-hình-swot---case-study-dự-án-hsu)
3. [Lý thuyết hữu dụng của rủi ro (Risk Utility Theory)](#3-lý-thuyết-hữu-dụng-của-rủi-ro-risk-utility-theory)
   - [3.1. Khái niệm về Hữu dụng của rủi ro (Risk Utility)](#31-khái-niệm-về-hữu-dụng-của-rủi-ro-risk-utility)
   - [3.2. Hàm hữu dụng và 3 nhóm thái độ đối với rủi ro](#32-hàm-hữu-dụng-và-3-nhóm-thái-độ-đối-với-rủi-ro)
   - [3.3. Ứng dụng toán học trong ra quyết định dự án (EMV so với Expected Utility)](#33-ứng-dụng-toán-học-trong-ra-quyết-định-dự-án-emv-so-với-expected-utility)
   - [3.4. Phân tích định lượng rủi ro tài chính bằng NPV và ROI - Case Study Đề thi HSU](#34-phân-tích-định-lượng-rủi-ro-tài-chính-bằng-npv-và-roi---case-study-đề-thi-hsu)
4. [Hoạch định phản hồi rủi ro (Risk Response Planning)](#4-hoạch-định-phản-hồi-rủi-ro-risk-response-planning)
   - [4.1. Các chiến lược ứng phó rủi ro tiêu cực (Threats)](#41-các-chiến-lược-ứng-phó-rủi-ro-tiêu-cực-threats)
   - [4.2. Các chiến lược ứng phó rủi ro tích cực (Opportunities)](#42-các-chiến-lược-ứng-phó-rủi-ro-tích-cực-opportunities)
   - [4.3. Bảng đăng ký rủi ro (Risk Register)](#43-bảng-đăng-ký-rủi-ro-risk-register)
   - [4.4. Tích hợp Quản trị rủi ro vào Kế hoạch Phát triển Phần mềm (SDP HSU)](#44-tích-hợp-quản-trị-rủi-ro-vào-kế-hoạch-phát-triển-phần-mềm-sdp-hsu)
5. [Phân tích thực tế: Case Study JWD Consulting](#5-phân-tích-thực-tế-case-study-jwd-consulting)
   - [5.1. Bối cảnh dự án & Bài toán tài chính](#51-bối-cảnh-dự-án--bài-toán-tài-chính-table-3-2--table-3-17)
   - [5.2. Danh sách 10 rủi ro ưu tiên của JWD Consulting](#52-danh-sách-10-rủi-ro-ưu-tiên-của-jwd-consulting-table-3-10)
   - [5.3. Sổ Theo Dõi Bên Liên Quan & Chiến Lược Quản Lý](#53-sổ-theo-dõi-bên-liên-quan--chiến-lược-quản-lý-table-3-4--table-3-5-jwd)
   - [5.4. Chương Trình Họp Khởi Động Dự Án](#54-chương-trình-họp-khởi-động-dự-án-kick-off-meeting-agenda---figure-3-2)
   - [5.5. Các Bài Học Ứng Phó Rủi Ro Thực Tế](#55-các-bài-học-ứng-phó-rủi-ro-thực-tế-prioritized-risk-list---table-3-10)
   - [5.6. Cấu trúc WBS & Phân định Phạm vi giữa Seminar và Project](#56-cấu-trúc-wbs-figure-3-3--phân-định-phạm-vi-giữa-seminar-và-project)
6. [Kết luận và Bài học kinh nghiệm](#6-kết-luận-và-bài-học-kinh-nghiệm)

---

## 1. Giới thiệu về Quản trị rủi ro trong dự án phần mềm

Quản trị rủi ro (Risk Management) là quá trình xác định, phân tích, đánh giá, lập kế hoạch ứng phó và giám sát các rủi ro có thể xảy ra trong suốt vòng đời dự án. Theo PMBOK (Project Management Body of Knowledge), quản trị rủi ro là một trong những lĩnh vực quan trọng nhất của quản lý dự án nhằm giảm khả năng xảy ra rủi ro, giảm mức độ thiệt hại nếu rủi ro xảy ra, và tăng khả năng hoàn thành dự án đúng thời gian, đúng chi phí và đạt chất lượng mong muốn.

Dự án phần mềm có đặc thù là tính vô hình của sản phẩm, tính biến động cao của yêu cầu công nghệ và sự phụ thuộc lớn vào yếu tố con người. Khác với xây dựng hay sản xuất, dự án phần mềm dễ gặp rủi ro hơn vì:

* **Yêu cầu thay đổi liên tục:** Khách hàng khó hình dung sản phẩm hoàn chỉnh cho đến khi thấy giao diện thực tế.
* **Công nghệ phát triển rất nhanh:** Framework, ngôn ngữ, và công cụ liên tục thay đổi.
* **Phụ thuộc nhiều vào con người:** Trí tuệ và năng lực cá nhân của lập trình viên là cốt lõi.
* **Khó ước lượng chính xác:** Việc ước lượng thời gian và chi phí thường thiếu dữ liệu lịch sử chuẩn hóa.

Theo Standish Group Chaos Report và các nghiên cứu của PMI, tỷ lệ dự án phần mềm trễ tiến độ, vượt ngân sách hoặc thất bại hoàn toàn vẫn ở mức cao (thường trên 50%). Do đó, quản trị rủi ro phải được thực hiện chủ động (proactive) ngay từ khi bắt đầu dự án, thay vì chỉ phản ứng thụ động (reactive) khi sự cố xảy ra.

---

## 2. Các nguồn rủi ro phổ biến trong dự án phần mềm

Trong phát triển phần mềm, các rủi ro được phân loại thành bốn nhóm nguồn chính: Thị trường, Tài chính, Công nghệ và Con người.

### 2.1. Rủi ro Thị trường (Market Risk)

Rủi ro xuất phát từ những biến động bên ngoài tổ chức phát triển nhưng ảnh hưởng trực tiếp đến mục tiêu hoặc hiệu quả của dự án phần mềm sau khi hoàn thành.

* **Thay đổi nhu cầu khách hàng:** Đây là rủi ro phổ biến nhất. Ban đầu khách hàng chỉ yêu cầu một ứng dụng web bán hàng cơ bản, nhưng sau đó liên tục yêu cầu thêm AI chatbot, thanh toán QR, livestream hoặc tích điểm. Hệ quả là làm kéo dài thời gian, tăng chi phí và buộc phải chỉnh sửa lại kiến trúc hệ thống cốt lõi.
* **Đối thủ cạnh tranh:** Đối thủ tung sản phẩm mới nhanh hơn và hấp dẫn hơn. Ví dụ, khi dự án ứng dụng giao đồ ăn của bạn đang phát triển, đối thủ bất ngờ ra mắt tính năng AI gợi ý món ăn và giao hàng trong 15 phút, khiến sản phẩm của bạn trở nên lỗi thời ngay khi chưa kịp ra mắt.
* **Sự lỗi thời công nghệ trên thị trường:** Sự dịch chuyển xu hướng công nghệ quá nhanh (ví dụ, React 18 nâng cấp lên React 20, hoặc các mô hình AI Agent xuất hiện thay thế các chatbot truyền thống) khiến sản phẩm của dự án có nguy cơ mất lợi thế cạnh tranh.
* **Ứng phó:** Áp dụng phương pháp Agile/Scrum, thiết kế Prototype sớm, họp lấy ý kiến người dùng định kỳ, phát triển phiên bản khả dụng tối thiểu (MVP) để thử nghiệm thị trường nhanh nhất và quản lý chặt chẽ các yêu cầu thay đổi (Change Request).

### 2.2. Rủi ro Tài chính (Financial Risk)

Rủi ro liên quan trực tiếp đến dòng tiền, ngân sách phát triển và khả năng hoàn thành dự án về mặt tài chính.

* **Thiếu hụt ngân sách:** Xuất phát từ việc nhà đầu tư cắt giảm dòng vốn, khách hàng chậm thanh toán, hoặc do dự án kéo dài làm cạn kiệt tài chính. Hệ quả buộc dự án phải cắt giảm nhân sự, giảm chất lượng hoặc dừng dự án giữa chừng.
* **Vượt chi phí (Cost Overrun):** Rất thường xuyên xảy ra do thay đổi yêu cầu liên tục, phát sinh chi phí mua thiết bị, làm lại (rework) nhiều lần do lỗi thiết kế hoặc chậm tiến độ. Ví dụ: Dự án dự toán ban đầu là 2 tỷ VND nhưng thực tế chi phí đội lên đến 3 tỷ VND (vượt 50%).
* **Biến động tỷ giá và lạm phát:** Rủi ro này đặc biệt nghiêm trọng đối với các dự án outsource quốc tế hoặc dự án phụ thuộc mạnh vào dịch vụ bên thứ ba. Ví dụ: Chi phí thuê máy chủ Cloud (AWS, Azure) hoặc OpenAI API phải thanh toán bằng USD; nếu tỷ giá USD tăng mạnh hoặc lạm phát đẩy lương lập trình viên lên cao, ngân sách dự án sẽ bị thâm hụt nghiêm trọng.
* **Ứng phó:** Lập ngân sách dự phòng rủi ro (Contingency Reserve) từ 10-15%, theo dõi chặt chẽ dòng tiền qua kỹ thuật quản lý giá trị thu được (Earned Value Management - EVM), ký hợp đồng cung cấp dịch vụ dài hạn cố định giá, và chia nhỏ thanh toán theo từng mốc bàn giao (Milestone).

### 2.3. Rủi ro Công nghệ (Technology Risk)

Rủi ro liên quan đến sự thất bại trong thiết kế kỹ thuật, hiệu năng, bảo mật và khả năng tương thích của các công cụ phát triển phần mềm.

* **Chọn sai công nghệ:** Quyết định ngôn ngữ, framework, cơ sở dữ liệu không phù hợp. Theo David Hillson (PMI.org), việc sử dụng công nghệ mới chưa được kiểm chứng (unproven technology) là nguyên nhân gốc rễ gây ra sự bất định rất cao. Tom Kendrick và cơ sở dữ liệu PERIL (Project Experience Risk Information Library) chỉ ra rằng: defect phần mềm và công nghệ mới chưa thử nghiệm hoạt động không như kỳ vọng (proved unsuitable) là nguyên nhân hàng đầu khiến dự án thất bại, buộc phải làm lại từ đầu, làm tăng vọt chi phí và trễ tiến độ nghiêm trọng.
* **Lỗi bảo mật (Security Flaws):** Theo báo cáo OWASP Top 10:2025 (tổng hợp từ 2,8 triệu ứng dụng thực tế), lỗi kiểm soát truy cập (Broken Access Control) chiếm tới 3.73% số ứng dụng và cấu hình sai bảo mật (Security Misconfiguration) chiếm 3.00%. Điểm mới đáng chú ý của OWASP 2025 là sự gia tăng lỗi ở chuỗi cung ứng phần mềm (Software Supply Chain Failures) do các thư viện dependency bên thứ ba và hệ thống CI/CD bị tấn công. Ứng phó đòi hỏi áp dụng nguyên tắc "shift-left security" - đưa threat modeling và quét mã độc bảo mật vào sớm ngay từ đầu vòng đời phát triển (SDLC).
* **Hệ thống không mở rộng được (Scalability Failure):** Theo IBM Well-Architected Framework (Performance pillar), khả năng mở rộng phải được thiết kế ngay từ đầu kiến trúc. Nếu để đến cuối dự án mới tối ưu hiệu năng, việc khắc phục sẽ cực kỳ tốn kém và tốn thời gian. Nguyên lý đúng là áp dụng các thành phần phi trạng thái (stateless), loose coupling (ví dụ Microservices), và ưu tiên mở rộng theo chiều ngang (scale out - thêm máy chủ) thay vì chiều dọc (scale up - nâng cấp phần cứng duy nhất).
* **Nợ kỹ thuật (Technical Debt):** Theo SEI (Software Engineering Institute - Carnegie Mellon), nợ kỹ thuật là việc thỏa hiệp thiết kế ngắn hạn để đạt tiến độ, khiến việc bảo trì sau này tốn kém hơn nhiều. Nếu không kiểm soát, nợ kỹ thuật cấp doanh nghiệp (enterprise technical debt) tích lũy sẽ làm tê liệt khả năng nâng cấp hệ thống. Biện pháp ứng phó là làm nợ kỹ thuật trở nên "nhìn thấy được" (visible), phân loại và đưa việc trả nợ vào kế hoạch Sprint định kỳ.

### 2.4. Rủi ro Con người (People Risk)

Yếu tố tác động trực tiếp nhất đến năng suất và sự thành bại của dự án phần mềm.

* **Thiếu hụt nhân lực:** Theo báo cáo Global Project Management Talent Gap của PMI (2025), thế giới thiếu hụt gần 30 triệu chuyên gia dự án đến năm 2035 (nhu cầu cần 65 triệu nhưng nguồn cung chỉ đạt 40 triệu). Việc khởi động dự án mà không kiểm tra tính khả dụng của nguồn lực sẵn có trong tổ chức là nguyên nhân gây thiếu nhân sự trầm trọng.
* **Thành viên nghỉ việc:** Cơ sở dữ liệu PERIL ghi nhận mất nhân sự chủ chốt (Key-person risk) khiến thời gian thực hiện công việc tăng gấp ba lần, gây chậm tiến độ nghiêm trọng do mất thời gian tuyển dụng và bàn giao công việc. PMI xếp rủi ro nhân sự là nhóm gây tác động nguy hiểm nhất trong các rủi ro nguồn lực.
* **Thiếu hụt kỹ năng (Skill Gaps):** Sự thiếu hụt lập trình viên có kỹ năng chuyên môn sâu hoặc thiếu kỹ năng mềm (tương tác nhóm, tự quản lý) dẫn đến chất lượng code kém, phát sinh lỗi và làm chậm tiến trình phát triển. Chiến lược ứng phó tối ưu là đào tạo nâng cao năng lực nội bộ (upskilling/reskilling) thay vì chỉ trông chờ vào việc tuyển mới.
* **Giao tiếp kém:** Theo báo cáo Pulse of the Profession của PMI, giao tiếp kém là nguyên nhân gây thất bại chính ở 1/3 số dự án. Cứ mỗi 1 tỷ USD đầu tư, có 135 triệu USD gặp rủi ro thì trong đó 75 triệu USD (56%) là do giao tiếp kém hiệu quả giữa các bên liên quan.
* **Ứng phó:** Lập kế hoạch nguồn lực gắn với dữ liệu thực tế, duy trì sự ủng hộ vững chắc của cấp quản lý (Sponsorship), xây dựng khung giao tiếp rõ ràng (chỉ rõ ai giao tiếp gì, khi nào, bằng cách nào), và áp dụng văn hóa làm việc chéo (cross-training, pair programming) để giảm thiểu phụ thuộc cá nhân.

---

### 2.5. Nhận diện rủi ro bằng mô hình SWOT - Case Study Dự án HSU

Để nhận diện rủi ro một cách toàn diện khi bắt đầu dự án, nhà quản trị dự án thường sử dụng mô hình **SWOT (Strengths - Weaknesses - Opportunities - Threats)**. Dưới đây là phân tích SWOT thực tế lấy từ Đề thi số 3 của HSU đối với dự án: **Xây dựng ứng dụng di động Đăng ký môn học tại Đại học Hoa Sen để thay thế hệ thống đăng ký cũ chạy trên laptop.**

#### 1. Điểm mạnh (Strengths)

* **Tính tiện dụng & Cơ động (Accessibility):** Cho phép sinh viên đăng ký môn học mọi lúc, mọi nơi trực tiếp trên điện thoại di động mà không cần máy tính xách tay.
* **Trải nghiệm người dùng tốt (User Experience):** Thiết kế UI/UX hiện đại, giao diện trực quan và thao tác nhanh chóng hơn giúp nâng cao mức độ hài lòng của sinh viên.
* **Tốc độ & Hiệu năng (Speed):** Ứng dụng di động tối ưu hóa các API tốt hơn, giúp tải trang nhanh hơn và xử lý luồng đăng ký mượt mà hơn trong giờ cao điểm.
* **Vị thế công nghệ (Innovation):** Khẳng định HSU là trường đại học năng động, tiên phong chuyển đổi số và nâng cao uy tín học đường.

#### 2. Điểm yếu (Weaknesses)

* **Chi phí phát triển & Bảo trì (Development Costs):** Đòi hỏi ngân sách lớn để xây dựng, vận hành và liên tục cập nhật phiên bản chạy trên cả hai nền tảng phổ biến là iOS và Android.
* **Giới hạn thiết bị phần cứng (Tech Limitations):** Một số sinh viên sử dụng dòng điện thoại quá cũ hoặc hệ điều hành lỗi thời sẽ không tương thích, gây ra sự bất bình đẳng trong việc tiếp cận đăng ký môn.
* **Rào cản học hỏi (Learning Curve):** Sinh viên và cán bộ quản lý đã quen thuộc với giao diện web cũ sẽ gặp khó khăn và phản đối trong giai đoạn đầu chuyển đổi hệ thống.
* **Rủi ro an ninh mạng (Security Risks):** Nền tảng di động dễ bị khai thác các lỗ hổng bảo mật API, rò rỉ dữ liệu cá nhân qua mạng Wi-Fi công cộng không an toàn.

#### 3. Cơ hội (Opportunities)

* **Tích hợp thông báo đẩy (Push Notifications):** Gửi cảnh báo tức thời về lịch mở lớp, hạn chót đóng học phí, kết quả xếp lớp và các thông tin học vụ khẩn cấp.
* **Hệ sinh thái dịch vụ số:** Dễ dàng kết nối với các tiện ích khác của HSU như ví điện tử đóng học phí, tra cứu điểm thi, thẻ sinh viên tích hợp số.
* **Thu thập phản hồi nhanh chóng (Feedback Loop):** Tích hợp tính năng đánh giá ứng dụng và báo lỗi trực tiếp giúp đội ngũ IT liên tục nâng cấp hệ thống.
* **Hợp tác công nghệ:** Hợp tác với các doanh nghiệp công nghệ lớn để xin tài trợ hạ tầng Cloud, cổng thanh toán hoặc giải pháp bảo mật di động.

#### 4. Thách thức (Threats)

* **Rủi ro sập hệ thống (System Crash):** Lỗi nghẽn mạng hoặc ứng dụng bị crash khi hàng chục ngàn sinh viên truy cập đăng ký môn học đồng thời trong những phút đầu tiên mở cổng, gây khủng hoảng truyền thông.
* **Tốc độ thay đổi của HĐH di động:** Sự cập nhật liên tục của iOS/Android đòi hỏi đội IT của trường phải liên tục kiểm thử tương thích, nếu không sẽ phát sinh lỗi vận hành.
* **Rào cản tuân thủ pháp lý:** Phải tuân thủ nghiêm ngặt các quy định về an toàn thông tin cá nhân và các quy chế học vụ nội bộ của nhà trường.
* **Tỷ lệ chấp nhận thấp (Adoption Resistance):** Sinh viên e ngại lỗi hệ thống di động có thể tiếp tục sử dụng phương pháp đăng ký truyền thống, làm giảm hiệu quả đầu tư dự án.

### 2.6. Đánh giá mức độ ảnh hưởng và Ví dụ thực tế

#### 1. Bảng phân loại mức độ và tần suất rủi ro

##### A. Rủi ro về Công nghệ (Technical Risks)

| Loại rủi ro                      | Tần suất xảy ra | Mức độ ảnh hưởng | Đặc điểm kỹ thuật & Nghiên cứu liên quan                                                                                             |
| :--------------------------------- | :----------------- | :--------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **Lỗi bảo mật**           | Rất cao           | Rất nghiêm trọng    | OWASP Top 10:2025 chỉ ra Broken Access Control xuất hiện ở 3.73% ứng dụng; rủi ro chuỗi cung ứng phần mềm tăng mạnh.             |
| **Không mở rộng được** | Cao                | Nghiêm trọng         | Thường ẩn giấu dưới tải nhẹ, chỉ bộc phát thành thảm họa sập hệ thống (Crash) khi lượng truy cập thực tế tăng cao.     |
| **Nợ kỹ thuật**           | Rất cao           | Trung bình - Cao      | Gần như mọi dự án đều tích lũy nợ kỹ thuật ở các mức độ khác nhau; cản trở nghiêm trọng năng lực bảo trì lâu dài. |

##### B. Rủi ro về Con người (Human Risks)

| Loại rủi ro                      | Tần suất xảy ra | Mức độ ảnh hưởng | Số liệu thực tế & Nghiên cứu liên quan                                                                                                             |
| :--------------------------------- | :----------------- | :--------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Thiếu nhân lực**        | Rất cao           | Cao                    | Báo cáo PMI Talent Gap 2025 dự báo thiếu hụt 30 triệu chuyên gia dự án đến 2035 do thiếu quy hoạch lực lượng.                            |
| **Thành viên nghỉ việc** | Cao                | Rất nghiêm trọng    | Cơ sở dữ liệu PERIL ghi nhận việc mất một nhân sự chủ chốt (key-person) có thể kéo dài thời gian hoàn thành task lên**3 lần**. |
| **Thiếu kỹ năng**         | Cao                | Trung bình - Cao      | Sự chênh lệch kỹ năng (Skill Gap) là vấn đề cơ cấu kéo dài, trực tiếp gây ra nợ kỹ thuật và lỗi sản phẩm.                          |
| **Giao tiếp kém**          | Rất cao           | Nghiêm trọng         | Pulse of the Profession của PMI chỉ ra giao tiếp kém gây thất bại ở**1/3 dự án**; 56% chi phí rủi ro do giao tiếp lỗi.                |

---

#### 2. Các nghiên cứu điển hình thực tế (Case Studies)

##### Case Study 1: Lỗi bảo mật công nghệ - Sự cố rò rỉ dữ liệu của Equifax (2017)

* **Bối cảnh:** Equifax là một trong ba cơ quan báo cáo tín dụng tiêu dùng lớn nhất Hoa Kỳ.
* **Nguyên nhân rủi ro:** Tin tặc đã khai thác một lỗ hổng bảo mật đã biết trong framework **Apache Struts (CVE-2017-5638)**. Lỗ hổng này đã được tổ chức Apache vá và công bố từ tháng 3/2017, nhưng đội ngũ kỹ thuật của Equifax đã chậm trễ và bỏ quên việc cập nhật bản vá bảo mật trên các hệ thống nội bộ của họ trong suốt nhiều tháng.
* **Hậu quả:** Dữ liệu cá nhân nhạy cảm (bao gồm số An sinh xã hội, ngày sinh, địa chỉ) của khoảng **147 triệu người tiêu dùng** bị rò rỉ. Cổ phiếu công ty sụt sụt giảm nghiêm trọng, CEO và Giám đốc thông tin (CIO) phải từ chức lập tức, công ty chịu mức phạt và chi phí dàn xếp pháp lý lên tới **hơn 1.38 tỷ USD**.
* **Bài học:** Áp dụng nguyên lý "Shift-left security", chủ động giám sát và cập nhật bản vá lỗ hổng phụ thuộc bên thứ ba (Software Supply Chain) ngay khi có thông báo.

##### Case Study 2: Lỗi hiệu năng và Khả năng mở rộng - Healthcare.gov (2013)

* **Bối cảnh:** Trang web đăng ký bảo hiểm y tế quốc gia do Chính phủ Mỹ phát triển với ngân sách đầu tư hàng trăm triệu USD.
* **Nguyên nhân rủi ro:** Hệ thống sập hoàn toàn chỉ trong vòng **2 giờ đầu tiên** sau khi chính thức mở cổng kết nối. Lượng truy cập thực tế đạt 250,000 người dùng cùng lúc (gấp 5 lần dự báo tối đa). Hơn thế nữa, hệ thống đăng nhập tài khoản gặp lỗi thắt cổ chai kiến trúc (bottleneck), không thể xử lý tải của trang chính. Thiết kế kiến trúc ban đầu không tách biệt trạng thái (stateless) và không có khả năng tự động mở rộng theo chiều ngang (scale out).
* **Hậu quả:** Tỷ lệ đăng ký thành công trong tuần đầu tiên đạt mức thảm hại (dưới 1%). Dự án bị khủng hoảng truyền thông nặng nề, buộc chính phủ phải thuê một đội đặc nhiệm công nghệ bên ngoài vào sửa chữa khẩn cấp, làm chi phí dự án đội lên gấp nhiều lần.
* **Bài học:** Khả năng mở rộng phải được thiết kế ngay từ đầu trong kiến trúc (IBM Well-Architected). Cần tiến hành kiểm thử tải (Load Test) và kiểm thử hiệu năng (Performance Test) kỹ lưỡng trước khi phát hành.

##### Case Study 3: Nợ kỹ thuật nghiêm trọng - Knight Capital Group (2012)

* **Bối cảnh:** Knight Capital là một trong những nhà tạo lập thị trường và giao dịch chứng khoán hàng đầu thế giới.
* **Nguyên nhân rủi ro:** Khi triển khai bản cập nhật phần mềm giao dịch mới lên hệ thống, đội ngũ vận hành đã để sót một máy chủ cũ không được cập nhật đồng bộ. Khi chạy phần mềm mới, một đoạn mã code cũ (tính năng "Power Peg" đã ngừng sử dụng từ 8 năm trước nhưng chưa bao giờ được xóa bỏ khỏi codebase - nợ kỹ thuật tồn đọng) đã bị kích hoạt nhầm trên máy chủ chưa cập nhật này.
* **Hậu quả:** Hệ thống giao dịch tự động liên tục mua và bán hàng triệu cổ phiếu bị lỗi định giá trong suốt **45 phút**. Knight Capital bị lỗ ròng **440 triệu USD** chỉ trong chưa đầy một giờ, khiến công ty mất sạch vốn điều lệ, suýt phá sản và buộc phải sáp nhập vào tập đoàn Getco ngay sau đó.
* **Bài học:** Nợ kỹ thuật tích lũy không được dọn dẹp (Refactoring) và quy trình quản lý cấu hình (Configuration Management) lỏng lẻo có thể phá hủy hoàn toàn một doanh nghiệp chỉ trong vài phút.

##### Case Study 4: Thất bại nhân sự và Giao tiếp kém - FBI Virtual Case File (2000–2005)

* **Bối cảnh:** FBI triển khai dự án Trilogy nhằm hiện đại hóa hạ tầng IT, bao gồm ứng dụng quản lý hồ sơ vụ án Virtual Case File (VCF).
* **Nguyên nhân rủi ro:** Dự án trị giá **170 triệu USD** bị hủy bỏ hoàn toàn sau 5 năm phát triển mà không bàn giao được sản phẩm nào dùng được. Báo cáo điều tra của Bộ Tư pháp Mỹ chỉ ra nguyên nhân cốt lõi là rủi ro con người:
  * Yêu cầu thiết kế không rõ ràng và liên tục thay đổi vô tội vạ từ phía các lãnh đạo FBI (thiếu chuyên môn quản lý IT).
  * Sự thay đổi liên tục của các giám đốc quản lý dự án phía FBI (mất ổn định lãnh đạo).
  * Giao tiếp cực kỳ kém và thiếu minh bạch giữa ban dự án FBI và nhà thầu phát triển SAIC, dẫn đến việc nhà thầu viết code sai lệch hoàn toàn so với nhu cầu sử dụng thực tế của đặc vụ.
* **Hậu quả:** Toàn bộ 170 triệu USD tiền thuế bị mất trắng, FBI phải làm lại một dự án mới hoàn toàn từ đầu (Sentinel).
* **Bài học:** Thiết lập khung giao tiếp chặt chẽ, duy trì sự ủng hộ và định hướng ổn định của nhà tài trợ (Sponsor), đồng thời đào tạo chuyên môn kỹ thuật tối thiểu cho đội ngũ quản trị dự án phía khách hàng.

---

## 3. Lý thuyết hữu dụng của rủi ro (Risk Utility Theory)

Để đưa ra các quyết định quản trị rủi ro hợp lý, nhà quản trị dự án cần hiểu rõ hành vi và thái độ đối với rủi ro của các bên liên quan. **Lý thuyết hữu dụng của rủi ro (Risk Utility Theory)** cung cấp một khung sườn khoa học để phân tích điều này.

### 3.1. Khái niệm về Hữu dụng của rủi ro (Risk Utility)

* **Hữu dụng (Utility):** Là mức độ thỏa mãn hay giá trị nhận thức (perceived value) mà một cá nhân nhận được từ một kết quả cụ thể (thường là kết quả tài chính hoặc sự thành công của dự án).
* Giá trị tiền tệ danh nghĩa (Nominal monetary value) và giá trị hữu dụng thực tế không phải lúc nào cũng tỷ lệ thuận tuyến tính với nhau.

### 3.2. Hàm hữu dụng và 3 nhóm thái độ đối với rủi ro

Thái độ đối với rủi ro của một tổ chức hoặc cá nhân được biểu diễn thông qua độ dốc và hình dạng của đường cong **Hàm hữu dụng $U(x)$** (với $x$ là giá trị tiền tệ hoặc kết quả đạt được):

* **Né tránh rủi ro (Risk-Averse):** Ưu tiên sự an toàn, ổn định hơn là lợi nhuận cao. Sẵn sàng đánh đổi một phần lợi nhuận kỳ vọng để giảm rủi ro. Đường cong hữu dụng có dạng lõm (**Concave** - độ hữu dụng cận biên giảm dần khi giá trị tăng).
* **Trung lập với rủi ro (Risk-Neutral):** Ra quyết định hoàn toàn dựa trên giá trị kỳ vọng (Expected Value), không quan tâm đến mức độ bất định. Đường cong hữu dụng gần như là đường thẳng (**Linear** - độ dốc không đổi).
* **Thích rủi ro (Risk-Seeking):** Sẵn sàng chấp nhận rủi ro rất lớn để đổi lấy cơ hội đạt được phần thưởng cực cao và tạo ra đột phá. Đường cong hữu dụng có dạng lồi (**Convex** - độ hữu dụng cận biên tăng dần khi giá trị tăng).

#### Bảng so sánh nhanh 3 nhóm thái độ đối với rủi ro

| Loại thái độ       | Thái độ với rủi ro                          | Dạng đường cong Utility | Ví dụ điển hình                                        |
| :--------------------- | :----------------------------------------------- | :-------------------------- | :---------------------------------------------------------- |
| **Risk Averse**  | Né tránh, ưu tiên an toàn                   | Lõm (Concave)              | Ngân hàng, tổ chức tài chính, dự án y tế/an toàn  |
| **Risk Neutral** | Trung lập, dựa vào EMV                        | Đường thẳng (Linear)    | Tập đoàn công nghệ lớn có tiềm lực tài chính     |
| **Risk Seeking** | Chấp nhận rủi ro cao để đổi cơ hội lớn | Lồi (Convex)               | Startup công nghệ mới, dự án R&D đổi mới sáng tạo |

### 3.3. Ứng dụng toán học trong ra quyết định dự án (EMV so với Expected Utility)

Giả sử một công ty phần mềm đang cân nhắc lựa chọn giữa hai dự án A và B:

* **Dự án A (Phương án an toàn):** Có 100% cơ hội kiếm được lợi nhuận **$50,000**.
* **Dự án B (Phương án mạo hiểm):** Có 50% cơ hội kiếm được **$120,000** và 50% cơ hội thất bại hoàn toàn và mất trắng (**$0**).

#### Phân tích theo Giá trị Tiền tệ Kỳ vọng (EMV):

* $EMV(A) = 1.0 \times \$50,000 = \$50,000$
* $EMV(B) = 0.5 \times \$120,000 + 0.5 \times \$0 = \$60,000$
* Nếu nhà quản trị dự án là người **Trung lập với rủi ro (Risk-Neutral)**, họ sẽ chọn **Dự án B** vì $EMV(B) > EMV(A)$ ($60k > 50k$).

#### Phân tích theo Giá trị Hữu dụng Kỳ vọng (Expected Utility - EU):

Giả sử nhà quản trị dự án là người **Né tránh rủi ro (Risk-Averse)** với hàm hữu dụng được xác định dưới dạng hàm căn thức: $U(x) = \sqrt{x}$ (phản ánh mức độ thỏa mãn tăng chậm dần):

* $EU(A) = U(\$50,000) = \sqrt{50,000} \approx 223.6$
* $EU(B) = 0.5 \times U(\$120,000) + 0.5 \times U(\$0) = 0.5 \times \sqrt{120,000} + 0.5 \times 0 \approx 0.5 \times 346.4 = 173.2$
* Vì $EU(A) > EU(B)$ ($223.6 > 173.2$), nhà quản trị **Risk-Averse** sẽ chọn **Dự án A**. Họ chấp nhận bỏ qua mức lợi nhuận kỳ vọng cao hơn của dự án B để đổi lấy sự an toàn chắc chắn của dự án A.

### 3.4. Phân tích định lượng rủi ro tài chính bằng NPV và ROI - Case Study Đề thi HSU

Để lượng hóa rủi ro tài chính của các phương án đầu tư dự án phần mềm khác nhau, nhà quản trị sử dụng phương pháp chiết khấu dòng tiền để tính **NPV (Net Present Value)** và **ROI (Return on Investment)**. Dưới đây là lời giải chi tiết cho bài toán so sánh 3 dự án A, B, C từ đề thi HSU với **Tỷ suất chiết khấu $r = 5\%$** trong thời gian 4 năm.

#### Công thức áp dụng (Phương pháp chuẩn HSU):

* **Hệ số chiết khấu từng năm (Discount Factor):** $DF_t = \frac{1}{(1+r)^t}$
* **Tổng giá trị hiện tại của Lợi ích (PV_B):** $PV_B = \sum_{t=1}^n \frac{\text{Lợi ích}_t}{(1+r)^t}$
* **Tổng giá trị hiện tại của Chi phí (PV_C):** $PV_C = \sum_{t=1}^n \frac{\text{Chi phí}_t}{(1+r)^t}$
* **Giá trị hiện tại ròng (NPV):** $NPV = PV_B - PV_C$
* **Tỷ suất sinh lợi chiết khấu (ROI):** $ROI = \frac{NPV}{PV_C} \times 100\%$

#### Bảng thông số dòng tiền gốc:

* **Dự án A:**
  * Lợi ích: [Y1: 500, Y2: 1000, Y3: 1000, Y4: 2000]
  * Chi phí: [Y1: 2000, Y2: 500, Y3: 500, Y4: 0]
* **Dự án B:**
  * Lợi ích: [Y1: 0, Y2: 1000, Y3: 3000, Y4: 5000]
  * Chi phí: [Y1: 3000, Y2: 1000, Y3: 1000, Y4: 1000]
* **Dự án C:**
  * Lợi ích: [Y1: 1000, Y2: 1000, Y3: 3000, Y4: 3000]
  * Chi phí: [Y1: 5000, Y2: 2000, Y3: 1000, Y4: 1000]

#### Chi tiết tính toán từng dự án:

##### 1. Dự án A:

* $PV_B = \frac{500}{1.05^1} + \frac{1000}{1.05^2} + \frac{1000}{1.05^3} + \frac{2000}{1.05^4} = 476.19 + 907.03 + 863.84 + 1645.40 = 3892.46$
* $PV_C = \frac{2000}{1.05^1} + \frac{500}{1.05^2} + \frac{500}{1.05^3} + \frac{0}{1.05^4} = 1904.76 + 453.51 + 431.92 + 0 = 2790.20$
* $NPV_A = 3892.46 - 2790.20 = 1102.27$
* $ROI_A = \frac{1102.27}{2790.20} \times 100\% = 39.51\%$

##### 2. Dự án B:

* $PV_B = \frac{0}{1.05^1} + \frac{1000}{1.05^2} + \frac{3000}{1.05^3} + \frac{5000}{1.05^4} = 0 + 907.03 + 2591.51 + 4113.51 = 7612.05$
* $PV_C = \frac{3000}{1.05^1} + \frac{1000}{1.05^2} + \frac{1000}{1.05^3} + \frac{1000}{1.05^4} = 2857.14 + 907.03 + 863.84 + 822.70 = 5450.71$
* $NPV_B = 7612.05 - 5450.71 = 2161.34$
* $ROI_B = \frac{2161.34}{5450.71} \times 100\% = 39.65\%$
  *(Lưu ý: Nếu tính theo tỷ lệ ROI danh nghĩa không chiết khấu, dự án B đạt mức ROI là $\frac{9000 - 6000}{6000} = 50\%$. Lựa chọn Dự án B là phương án tối ưu nhất).*

##### 3. Dự án C:

* $PV_B = \frac{1000}{1.05^1} + \frac{1000}{1.05^2} + \frac{3000}{1.05^3} + \frac{3000}{1.05^4} = 952.38 + 907.03 + 2591.51 + 2468.10 = 6919.03$
* $PV_C = \frac{5000}{1.05^1} + \frac{2000}{1.05^2} + \frac{1000}{1.05^3} + \frac{1000}{1.05^4} = 4761.90 + 1814.06 + 863.84 + 822.70 = 8262.50$
* $NPV_C = 6919.03 - 8262.50 = -1343.47$
* $ROI_C = \frac{-1343.47}{8262.50} \times 100\% = -16.26\%$

#### Kết luận lựa chọn đầu tư tối ưu:

**Dự án B** là phương án tốt nhất vì:

1. **Hiệu quả tài chính vượt trội:** NPV của dự án B ($2161.34) cao gần gấp đôi dự án A ($1102.27) và dự án C bị lỗ nặng với NPV âm ($-1343.47$).
2. **Khả năng sinh lời tối ưu:** Tỷ suất ROI chiết khấu của dự án B (39.65%) cao hơn dự án A (39.51%).
3. **Quản trị rủi ro dòng tiền:** Mặc dù chi phí ban đầu của Dự án B ở năm thứ nhất cao hơn Dự án A ($3000 so với $2000), nhưng các năm sau đó chi phí vận hành rất ổn định ở mức $1000 và mang lại dòng lợi ích khổng lồ ở năm cuối ($5000). Dự án C là rủi ro nhất do chi phí đầu tư ban đầu quá lớn ($5000 ở Y1) vượt quá khả năng bù đắp của lợi ích mang lại.

---

## 4. Hoạch định phản hồi rủi ro (Risk Response Planning)

Sau khi nhận diện và phân tích thứ tự ưu tiên của rủi ro, dự án cần thiết lập các chiến lược phản hồi cụ thể.

### 4.1. Các chiến lược ứng phó rủi ro tiêu cực (Threats)

Khi đối mặt với rủi ro có hại cho dự án, ta áp dụng 4 chiến lược kinh điển:

1. **Tránh (Avoid):** Thay đổi kế hoạch dự án để loại bỏ hoàn toàn khả năng xảy ra rủi ro hoặc bảo vệ dự án khỏi tác động của nó.
2. **Giảm thiểu (Mitigate):** Thực hiện các hành động chủ động nhằm giảm xác suất xảy ra hoặc giảm bớt tác động tiêu cực của rủi ro xuống dưới ngưỡng chấp nhận được.
3. **Chuyển giao (Transfer):** Dịch chuyển toàn bộ hoặc một phần trách nhiệm và hậu quả của rủi ro sang một bên thứ ba.
4. **Chấp nhận (Accept):** Quyết định không thay đổi kế hoạch dự án. Thường áp dụng cho các rủi ro có độ ưu tiên thấp hoặc chi phí ứng phó lớn hơn giá trị tác hại của rủi ro.

### 4.2. Các chiến lược ứng phó rủi ro tích cực (Opportunities)

Đối với các rủi ro mang tính cơ hội mang lại lợi ích tốt hơn cho dự án:

1. **Khai thác (Exploit):** Đảm bảo cơ hội chắc chắn sẽ xảy ra.
2. **Chia sẻ (Share):** Phân bổ quyền sở hữu cơ hội cho một bên thứ ba có khả năng tốt nhất để nắm bắt cơ hội đó vì lợi ích chung.
3. **Nâng cao (Enhance):** Thực hiện các hành động nhằm tăng xác suất hoặc tác động tích cực của cơ hội.
4. **Chấp nhận (Accept):** Sẵn sàng tận dụng cơ hội nếu nó tự xảy ra nhưng không chủ động bỏ tài nguyên để theo đuổi.

### 4.3. Bảng đăng ký rủi ro (Risk Register)

Tất cả các rủi ro được theo dõi trong một tài liệu sống gọi là Bảng đăng ký rủi ro. Cấu trúc cơ bản của Risk Register gồm:

* Mã rủi ro (ID)
* Mô tả rủi ro (Description)
* Nguồn gốc rủi ro (Category)
* Xác suất xảy ra (P) & Tác động (I) -> Điểm số rủi ro ($P \times I$)
* Dấu hiệu cảnh báo sớm (Warning signs/Triggers)
* Chiến lược ứng phó đề xuất (Response Strategy)
* Người chịu trách nhiệm theo dõi (Risk Owner)
* Ngân sách dự phòng (Contingency budget)

##### Bảng ví dụ đăng ký và ứng phó rủi ro (Risk Response Register) - Dự án HSU Nhóm 3

| Mô tả rủi ro (Risk) | Phân loại | Xác suất (P) | Ảnh hưởng (I) | Chiến lược (Strategy) | Hành động cụ thể (Action Plan) & Người chịu trách nhiệm (Owner) |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Hệ thống sập tải (High Traffic)** | Công nghệ | Cao | Rất cao | **Mitigate** (Giảm thiểu) | Sử dụng cơ chế Redis Caching để giảm truy vấn cơ sở dữ liệu trực tiếp, thiết lập máy chủ Load Balancer. <br>**Owner: Hồng Bảo Khang** |
| **Lỗi nghiệp vụ đăng ký (UI/UX Bugs)** | Công nghệ | Trung bình | Cao | **Mitigate** (Giảm thiểu) | Viết Unit Test tự động cho các ràng buộc (môn tiên quyết, trùng lịch), kiểm thử chéo trên nhiều kích cỡ màn hình di động. <br>**Owner: Trần Bá Lợi** |
| **Rò rỉ dữ liệu học vụ (Broken Access)** | Bảo mật | Thấp | Rất cao | **Transfer** (Chuyển giao) | Tích hợp xác thực phân quyền Token JWT ở Backend, thực hiện rà quét bảo mật Shift-left security định kỳ. <br>**Owner: Nguyễn Thanh Quang** |
| **Thành viên nghỉ việc / Quá tải** | Con người | Trung bình | Cao | **Mitigate** (Giảm thiểu) | Áp dụng chia sẻ tài liệu đặc tả WBS/SDP rõ ràng, lập trình viên hỗ trợ chéo nhau (Bình hỗ trợ backend/frontend khi cần). <br>**Owner: Võ Duy Bình** |

### 4.4. Tích hợp Quản trị rủi ro vào Kế hoạch Phát triển Phần mềm (SDP HSU)

Theo mẫu tài liệu chuẩn của Đại học Hoa Sen `Project Plan.docx`, phần **Risk Management Plan (Kế hoạch quản trị rủi ro)** là một chương bắt buộc nằm trong Kế hoạch Phát triển Phần mềm (Software Development Plan - SDP). Để tích hợp quản trị rủi ro hiệu quả vào SDP, nhóm dự án phải mô tả rõ ràng 3 phần chính sau:

1. **Quy trình quản trị rủi ro (Tasks):**
   * Mô tả cách thức nhóm dự án nhận diện rủi ro (Ví dụ: thông qua các buổi họp brainstorm, phân tích SWOT, tham khảo dữ liệu lịch sử các dự án trước).
   * Phương pháp đánh giá định tính và định lượng để xếp hạng mức độ ưu tiên của rủi ro.
   * Các chiến lược ứng phó cụ thể được áp dụng khi rủi ro vượt ngưỡng cảnh báo (Mitigation, Avoidance, Prevention).
   * Cơ chế giám sát định kỳ các rủi ro quan trọng trong suốt vòng đời phát triển.
2. **Phân định Trách nhiệm (Responsibilities):**
   * Thiết lập ma trận phân công trách nhiệm (RACI Matrix) giữa các thành viên: Ai là người phát hiện rủi ro, ai chịu trách nhiệm triển khai kế hoạch ứng phó (Risk Owner) và ai phê duyệt ngân sách dự phòng.
3. **Công cụ & Kỹ thuật (Tools & Techniques):**
   * Công cụ lưu trữ thông tin rủi ro (Risk Register) bằng Excel hoặc tích hợp trực tiếp trên Jira/Microsoft Project.
   * Kế hoạch quản lý cấu hình (Configuration Management Plan) và Bản đăng ký rủi ro hoạt động (Risk Item List) liên tục được cập nhật làm cơ sở báo cáo mốc bàn giao dự án.

---

## 5. Phân tích thực tế triển khai: Khởi tạo và Quản trị Rủi ro dự án HSU (Nhóm 3)

Để hiểu rõ cách thức hoạch định khởi tạo và áp dụng quy trình quản trị rủi ro trên thực tế, báo cáo này trình bày chi tiết hồ sơ khởi tạo và các bài học ứng phó rủi ro thực tế của dự án **"Hệ thống Đăng ký Học phần Trực tuyến HSU"** (do Nhóm 3 thực hiện) dưới góc độ quản lý rủi ro và các chỉ số tài chính.

### 5.1. Bối cảnh dự án & Bài toán tài chính (Business Case)

Dự án được khởi xướng nhằm xây dựng một cổng đăng ký học phần trực tuyến tối ưu cho trường Đại học Hoa Sen (HSU), giải quyết bài toán nghẽn sập mạng hệ thống cũ vào mỗi đợt đăng ký tín chỉ và cung cấp công cụ quản trị tiến độ trực quan.

* **Nhà tài trợ dự án (Sponsor / Chủ quản đầu tư):** Võ Duy Bình (CEO / Chủ tịch Hội đồng Quản trị).
* **Quản lý dự án (Project Manager):** Trần Bá Lợi.
* **Đội ngũ thực hiện:** Hồng Bảo Khang (Trưởng nhóm Lập trình Backend & Tài chính), Nguyễn Thanh Quang (Trưởng nhóm UI/UX & Phân tích viên Rủi ro).
* **Thời gian thực hiện:** 1 tháng (từ 12/07/2026 đến 15/08/2026).
* **Bài toán tài chính ban đầu (Business Case - Phân tích đầu tư hệ thống):**
  * **Dự toán chi phí ban đầu (Baseline Budget):** $140,000 (bao gồm chi phí thiết kế, bản quyền hạ tầng Cloud, cơ sở dữ liệu mẫu và tiền lương nhân sự).
  * **Chi phí vận hành & bảo trì hàng năm:** $40,000/năm (trong vòng 3 năm vòng đời hệ thống).
  * **Lợi ích dự kiến hàng năm:** $200,000/năm (giảm thiểu 90% chi phí xử lý lỗi học vụ thủ công, tối ưu hóa băng thông hạ tầng server và tăng tốc độ đăng ký môn học của sinh viên, tiết kiệm chi phí vận hành cho nhà trường).
  * **Tỷ suất chiết khấu (Discount Rate):** **8%**.
  * **Các chỉ số hiệu quả tài chính:** $NPV = \$272,336$, $ROI = 112\%$, Thời gian hoàn vốn (Payback) = **Dưới 1 năm** (ngay trong năm đầu tiên vận hành).
* **Chi phí thực tế khi hoàn thành:** **$150,000** (vượt ngân sách dự toán ban đầu $10,000 do quyết định của CEO Võ Duy Bình phê duyệt bổ sung ngân sách để mua giải pháp thư viện ngoài check trùng lịch học tối ưu nhằm rút ngắn thời gian phát triển).

### 5.2. Danh sách 10 rủi ro ưu tiên của Dự án HSU

Trong giai đoạn lập kế hoạch, PM Trần Bá Lợi đã tổ chức họp brainstorm cùng toàn đội phát triển, thực hiện phân tích định tính rủi ro thông qua Ma trận Xác suất - Tác động (P-I Matrix) để xếp hạng mức độ ưu tiên:

| Thứ hạng | Mô tả rủi ro (Potential Risk) | Phân loại rủi ro |
| :---: | :--- | :--- |
| **1** | Hệ thống bị sập tải do lượng sinh viên truy cập đồng thời quá lớn (High Traffic) | Công nghệ / Hạ tầng |
| **2** | Thiếu tài liệu nghiệp vụ chi tiết và phản hồi chậm từ Phòng Đào tạo (Lack of inputs) | Con người / Khách hàng |
| **3** | Lỗi logic nghiệp vụ đăng ký (trùng lịch học, môn tiên quyết, quá số tín chỉ quy định) | Công nghệ / Quy trình |
| **4** | Phát sinh lỗi bảo mật rò rỉ dữ liệu điểm số, thông tin học vụ (Security breach) | Công nghệ / Bảo mật |
| **5** | Trễ hạn tiến độ bàn giao mockup giao diện UI/UX của Designer | Con người / Tiến độ |
| **6** | Lập trình viên Backend và Frontend gặp khó khăn khi tích hợp API | Công nghệ / Tích hợp |
| **7** | Giao diện di động khó sử dụng, gây ức chế cho sinh viên khi đăng ký nhanh | Công nghệ / UX |
| **8** | Trễ hạn tích hợp thuật toán phân tích đường găng tiến độ CPM trên dashboard | Công nghệ / Thuật toán |
| **9** | Không đo lường và hiện thực hóa được các lợi ích tài chính cam kết của dự án | Tài chính / Vận hành |
| **10** | Thành viên nhóm gặp sự cố cá nhân đột xuất gây gián đoạn công việc | Con người / Quản lý |

### 5.3. Mẫu Điều Lệ Dự Án HSU (Project Charter)

Trong nhóm quy trình **1.0 Initiating (Khởi tạo dự án)**, tài liệu trung tâm chính là **Project Charter (Điều lệ dự án)** do CEO Võ Duy Bình ký duyệt ban hành:

| Thành phần mẫu (Charter Element) | Nội dung áp dụng thực tế tại Dự án HSU (Nhóm 3) |
| :--- | :--- |
| **1. Tên dự án & Ngày lập (Project Title & Date)** | HSU Online Course Registration System Project | Ngày lập: 12/07/2026 |
| **2. Thời gian thực hiện (Project Dates)** | Ngày bắt đầu: 12/07/2026 | Ngày hoàn thành dự kiến: 15/08/2026 (Thời lượng: ~1 tháng) |
| **3. Thông tin Ngân sách (Budget Info)** | Ngân sách dự toán ban đầu: **$140,000** (Phê duyệt bổ sung tối đa: **$150,000**) |
| **4. Giám đốc dự án (Project Manager)** | Trần Bá Lợi (Email: `loi.tb2230@sinhvien.hoasen.edu.vn`) - PM chịu trách nhiệm quản lý tiến độ & QA |
| **5. Mục tiêu dự án (Project Objectives)** | Xây dựng hệ thống đăng ký học phần tối ưu chạy trên Web, tích hợp dashboard quản trị tiến độ CPM/Gantt chính xác nhằm hỗ trợ công tác học vụ HSU. |
| **6. Phương pháp tiếp cận (Approach)** | Thu thập nghiệp vụ học vụ HSU ➔ Thiết kế Figma (SWOT) ➔ Xây dựng DB & RESTful API Backend ➔ Lập trình Frontend Web SPA ➔ Tích hợp & Kiểm thử tải. |
| **7. Vai trò & Chữ ký (Roles & Signatures)** | Võ Duy Bình (CEO / Sponsor), Trần Bá Lợi (PM), Hồng Bảo Khang (Backend Dev), Nguyễn Thanh Quang (UI/UX & Security). |

### 5.4. Sổ Theo Dõi Bên Liên Quan & Chiến Lược Quản Lý (Stakeholder Register & Strategy)

Để thực hiện công việc thuộc bước **1.1 Identify key stakeholders (Nhận diện các bên liên quan)**, PM Trần Bá Lợi đã lập tài liệu theo dõi và quản lý quan hệ:

#### A. Sổ theo dõi bên liên quan (Stakeholder Register)
Tài liệu này được công khai rộng rãi cho toàn đội ngũ dự án để nắm thông tin liên hệ:

| Họ và Tên (Name) | Vị trí công tác (Position) | Phân loại (Internal/External) | Vai trò dự án (Project Role) | Thông tin liên hệ (Contact Information) |
| :--- | :--- | :--- | :--- | :--- |
| **Võ Duy Bình** | CEO | Internal | Sponsor | `binh.vdb2230@sinhvien.hoasen.edu.vn` |
| **Trần Bá Lợi** | PM / Lead Dev | Internal | Project Manager | `loi.tb2230@sinhvien.hoasen.edu.vn` |
| **Hồng Bảo Khang** | Backend Dev | Internal | Team Member | `khang.hb2210@sinhvien.hoasen.edu.vn` |
| **Nguyễn Thanh Quang** | Designer / Analyst | Internal | Team Member | `quang.nt2211@sinhvien.hoasen.edu.vn` |
| **Đại diện Phòng Đào tạo** | Cán bộ quản lý học vụ | External | Client | `pdt@hoasen.edu.vn` |
| **Sinh viên HSU** | Người dùng cuối | External | End User | `sinhvien@hoasen.edu.vn` |

#### B. Chiến lược quản lý bên liên quan (Stakeholder Management Strategy)
Tài liệu bảo mật nội bộ hỗ trợ PM Trần Bá Lợi quản lý kỳ vọng và tranh thủ sự ủng hộ:

| Họ và Tên | Mức độ quan tâm (Interest) | Tầm ảnh hưởng (Influence) | Chiến lược quản lý đề xuất (Potential Management Strategies) |
| :--- | :---: | :---: | :--- |
| **Võ Duy Bình** | Cao (High) | Cao (High) | Thường xuyên cập nhật tiến độ theo các mốc bàn giao lớn. Tập trung báo cáo hiệu quả tài chính và tính chính xác của thuật toán CPM để duy trì niềm tin và phê duyệt ngân sách. |
| **Đại diện Phòng Đào tạo** | Cao (High) | Cao (High) | Tổ chức họp lấy yêu cầu nghiệp vụ chi tiết. Thiết kế cơ chế phân quyền (Admin Portal) thân thiện để cán bộ đào tạo dễ dàng giám sát sĩ số, danh sách sinh viên mở lớp. |
| **Nguyễn Thanh Quang** | Cao (High) | Trung bình (Medium) | Tạo điều kiện làm việc linh hoạt, giao quyền tự quyết thiết kế sáng tạo Figma Dashboard, hỗ trợ tháo gỡ khó khăn về tài liệu bảo mật OWASP. |
| **Sinh viên HSU** | Cao (High) | Thấp (Low) | Tập trung phát triển giao diện tối ưu hóa cho di động, giảm thời gian load trang dưới 1.5 giây để đảm bảo trải nghiệm đăng ký mượt mà, không giật lag. |

### 5.5. Các Bài Học Ứng Phó Rủi Ro Thực Tế Trong Quá Trình Thi Công

Dưới đây là phân tích chi tiết 5 tình huống rủi ro thực tế phát sinh trong quá trình Nhóm 3 thực hiện dự án HSU và cách ứng phó linh hoạt của PM Trần Bá Lợi:

#### Case 1: Ứng phó rủi ro thiếu thông tin nghiệp vụ từ Phòng Đào tạo
* **Sự kiện:** Đội phát triển gặp bế tắc khi thiết lập logic ràng buộc học phần tiên quyết do tài liệu học vụ cũ không rõ ràng, cán bộ Phòng Đào tạo bận rộn không thể họp trực tiếp.
* **Giải pháp ứng phó:** PM Trần Bá Lợi báo cáo khẩn cấp lên **CEO Võ Duy Bình**. CEO Bình đã sử dụng tầm ảnh hưởng của mình để liên hệ trực tiếp với Lãnh đạo Phòng Đào tạo, thỏa thuận cung cấp quyền truy cập cơ sở dữ liệu syllabus mẫu để đội phát triển tự khai thác thông tin nhanh chóng.
* **Kết quả:** Đội phát triển tự chủ thông tin, hoàn thành module kiểm tra điều kiện đăng ký đúng hạn.

#### Case 2: Ứng phó rủi ro thiếu sự tham gia thử nghiệm của sinh viên
* **Sự kiện:** Khi hệ thống hoàn thành bản Beta, tỷ lệ sinh viên HSU tham gia đăng ký thử nghiệm (Stress Test) rất thấp do tâm lý e ngại mất thời gian.
* **Giải pháp ứng phó:** CEO Võ Duy Bình phê duyệt chính sách tặng voucher giảm 10% học phí hoặc quà tặng thương hiệu HSU cho 100 sinh viên tham gia stress test và gửi phản hồi trải nghiệm sớm nhất.
* **Kết quả:** Hơn 500 sinh viên tham gia thử nghiệm, giúp đội phát triển thu thập dữ liệu tải thực tế quan trọng để tối ưu hóa server.

#### Case 3: Rủi ro thuật toán check trùng lịch & Quyết định mua thư viện ngoài
* **Sự kiện:** Lập trình viên Backend Hồng Bảo Khang muốn tự viết thuật toán kiểm tra trùng lịch học phức tạp. Tuy nhiên, thuật toán tự viết gặp lỗi thắt nút cổ chai (bottleneck) khi xử lý đồng thời 500 yêu cầu/giây. Trong khi đó, nhóm tìm thấy một thư viện xử lý tối ưu của đối tác với chi phí $20,000 (vượt ngân sách dự toán $10,000).
* **Giải pháp ứng phó:** PM Trần Bá Lợi thuyết phục Khang sử dụng thư viện thương mại để đảm bảo tiến độ bàn giao, đồng thời trình bày báo cáo NPV hiệu chỉnh lên CEO Võ Duy Bình để phê duyệt cấp bổ sung $10,000.
* **Kết quả:** CEO Võ Duy Bình ký duyệt cấp ngân sách, hệ thống tích hợp thành công module check lịch và vận hành ổn định dưới tải cao.

#### Case 4: Rủi ro trễ hạn thiết kế giao diện của Nguyễn Thanh Quang
* **Sự kiện:** Thiết kế viên Nguyễn Thanh Quang quá tải với công việc thiết kế ngoài, dẫn đến chậm bàn giao thiết kế Figma trang Dashboard cho lập trình viên.
* **Giải pháp ứng phó:** PM Trần Bá Lợi không áp dụng hình thức kỷ luật cứng nhắc. PM cho phép Quang làm việc bất đồng bộ (asynchronous), giảm các cuộc họp không cần thiết và giao toàn quyền sở hữu thiết kế module quản trị tiến độ CPM cho Quang.
* **Kết quả:** Quang thoải mái tinh thần, nhanh chóng bàn giao giao diện Dashboard tuyệt đẹp và tối ưu UX.

#### Case 5: Đo lường & Hiện thực hóa lợi ích kinh tế thực tế
* **Sự kiện:** Ban quản trị lo ngại dự án không mang lại hiệu quả thực tế sau khi chi tiêu $150,000.
* **Giải pháp ứng phó:** PM Trần Bá Lợi xây dựng bộ chỉ số đo lường hiệu năng (Benefit Realization Dashboard). Ghi nhận thực tế cho thấy thời gian đăng ký học phần trung bình của mỗi sinh viên giảm từ 15 phút xuống còn 1.5 phút; tự động hóa 98% công tác kiểm tra ràng buộc giúp Phòng Đào tạo tiết kiệm tương đương $40,000 chi phí nhân công vận hành mỗi năm.
* **Kết quả:** Dự án chứng minh được ROI 112% và hoàn vốn đúng cam kết trong năm đầu tiên.

### 5.6. Cấu trúc WBS (Figure 3-3) & Phân định Phạm vi giữa Seminar và Project

Dựa trên tài liệu chuẩn **Figure 3-3 JWD Consulting Intranet Project Work Breakdown Structure (WBS)** trong `jwd_case_study.pdf` (trang 107), toàn bộ vòng đời phát triển dự án được chia thành 5 nhóm quy trình công việc chính:

```text
1.0 Initiating (Khởi tạo dự án)
   ├── 1.1 Identify key stakeholders (Xác định các bên liên quan)
   ├── 1.2 Prepare project charter (Lập điều lệ dự án & Bài toán tài chính)
   └── 1.3 Hold project kick-off meeting (Họp khởi động dự án)
2.0 Planning (Lập kế hoạch)
   ├── 2.1 Hold team planning meeting
   ├── 2.2 Prepare team contract
   ├── 2.3 Prepare scope statement
   ├── 2.4 Prepare WBS
   ├── 2.5 Prepare schedule and cost baseline (Tasks, Resources, Gantt chart)
   └── 2.6 Identify, discuss, and prioritize risks (Nhận diện & Ưu tiên rủi ro)
3.0 Executing (Thực hiện dự án & Thi công phần mềm)
   ├── 3.1 Survey & 3.2 User inputs
   ├── 3.3 Intranet content (Templates, Articles, Links, Ask the Expert)
   ├── 3.4 Design & 3.5 Construction & 3.6 Testing
   └── 3.7 Promotion, 3.8 Roll-out & 3.9 Benefits measurement
4.0 Monitoring and Controlling (Giám sát & Kiểm soát)
   └── 4.1 Progress reports (Báo cáo tiến độ hàng tuần)
5.0 Closing (Kết thúc dự án)
   ├── 5.1 Prepare final project report
   ├── 5.2 Prepare final project presentation
   └── 5.3 Lessons learned (Báo cáo bài học kinh nghiệm)
```

#### Phân định vai trò và phạm vi theo chỉ đạo của Giảng viên:

* **Phạm vi Bài báo cáo Seminar (Phần 1 - 1.0 Initiating & Khung Quản trị Rủi ro):**
  * Tập trung nghiên cứu cơ sở lý thuyết **Quản trị Rủi ro phần mềm (Risk Management Framework)** và **Lý thuyết hữu dụng của rủi ro (Risk Utility Theory)**.
  * Thực hiện các nội dung thuộc **Phần 1.0 Initiating**: Nhận diện Stakeholders và phân tích thái độ đối với rủi ro ($1.1$), nghiên cứu Bài toán kinh tế NPV/ROI và Điều lệ dự án ($1.2$), cùng với việc lập Danh mục rủi ro ưu tiên ($2.6$) và các Case Study ứng phó thực tế.
* **Phạm vi Đồ án môn học / Project (Phần 2.0 đến 5.0 - Xây dựng Hệ thống Đăng ký Học phần Trực tuyến):**
  * Toàn bộ quy trình triển khai chi tiết từ **Phần 2.0 (Planning)**, **3.0 (Executing - Lập trình HTML/CSS/JS, Cơ sở dữ liệu, Kiểm thử)**, **4.0 (Controlling - Giám sát tiến độ)** đến **5.0 (Closing - Báo cáo tổng kết đồ án)** sẽ được triển khai thực tiễn trong dự án phần mềm **"Hệ thống đăng ký học phần trực tuyến"** tại thư mục `Project/`.

#### Bảng tổng hợp 12 tài liệu chuẩn PMBOK áp dụng tại JWD Consulting:

| Nhóm quy trình (Process Group)                                           | Tài liệu sản phẩm PMBOK áp dụng tại JWD                                                                                                                                                                                                                                                               |
| :------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Khởi tạo (Initiating - Trọng tâm Seminar)**                 | • Business Case (Tài liệu bài toán kinh tế)• Stakeholder Register & Management Strategy (Sổ theo dõi bên liên quan)• Project Charter (Điều lệ dự án)• Kick-off Meeting Agenda & Minutes (Biên bản họp khởi động)                                                                     |
| **2. Lập kế hoạch (Planning - Áp dụng ở Project)**             | • Team Contract (Hợp đồng nguyên tắc làm việc nhóm)• Project Scope Statement (Tài liệu phạm vi dự án)• Work Breakdown Structure - WBS (Cấu trúc phân chia công việc)• Baseline Gantt Chart (Tiến độ cơ sở trên MS Project)• Prioritized Risk List (Danh mục rủi ro ưu tiên) |
| **3. Thực hiện (Executing - Áp dụng ở Project)**                | • Milestone Reports (Báo cáo mốc bàn giao)• Survey & User Inputs (Kết quả khảo sát người dùng)                                                                                                                                                                                                  |
| **4. Giám sát & Kiểm soát (Controlling - Áp dụng ở Project)** | • Weekly Progress Reports (Báo cáo tiến độ hàng tuần của từng thành viên)• Earned Value Management - EVM (Đo lường giá trị thu được)                                                                                                                                                    |
| **5. Kết thúc (Closing - Áp dụng ở Project)**                   | • Final Project Report & Presentation (Báo cáo tổng kết & Trình bày dự án)• Lessons-Learned Report (Báo cáo bài học kinh nghiệm)• Client Acceptance Form (Biên bản nghiệm thu dự án)                                                                                                    |

---

## 6. Kết luận và Bài học kinh nghiệm

Quản trị rủi ro không phải là hoạt động diễn ra một lần duy nhất lúc khởi đầu dự án, mà là một quy trình liên tục trong suốt vòng đời phát triển phần mềm. Việc áp dụng thành công **Lý thuyết hữu dụng của rủi ro (Risk Utility Theory)** giúp nhà quản trị dự án hiểu rõ giới hạn chịu đựng rủi ro của tổ chức để phân bổ nguồn lực ứng phó hiệu quả nhất.

**5 Bài học kinh nghiệm cốt lõi từ Lessons-Learned Report của JWD Consulting (Table 3-16):**

1. **Sự đồng hành trực tiếp từ Ban lãnh đạo (Top Management Support):** Sự hỗ trợ quyết liệt của Sponsor (CEO Joe Fleming) là chìa khóa tháo gỡ các nút thắt ngân sách, chính sách nghỉ phép thưởng và thúc đẩy sự hợp tác của toàn công ty.
2. **Xây dựng văn hóa làm việc nhóm (Team Contract & Kick-off):** Tổ chức họp Kick-off phá băng hiệu quả và thiết lập Hợp đồng nguyên tắc nhóm (Team Contract) tạo sự cam kết và minh bạch ngay từ ngày đầu.
3. **Sử dụng linh hoạt các chiến lược ứng phó:** Không cố chấp tự code tất cả (in-house), biết khi nào cần chuyển giao (mua giải pháp thương mại ngoài) để đảm bảo tiến độ bàn giao (Time-to-market).
4. **Điều hòa nhân sự & Thấu hiểu thái độ rủi ro:** Thay đổi phong cách giao tiếp linh hoạt dựa trên mức độ quan tâm và ảnh hưởng của từng Stakeholder (như trường hợp điều chỉnh lịch làm việc phù hợp với tư vấn viên cấp cao Michael Chen).
5. **Kế hoạch lập bài bản tạo nên sự thực thi hiệu quả:** Việc dành thời gian đầu tư cho Project Charter, WBS, Baseline Schedule và Risk Register giúp đội ngũ kiểm soát tốt biến động chi phí ($140k -> $150k) mà vẫn đạt 100% mục tiêu chất lượng và thời gian.
