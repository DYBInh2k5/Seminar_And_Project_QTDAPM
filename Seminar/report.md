# BÁO CÁO SEMINAR: QUẢN TRỊ RỦI RO TRONG CÁC DỰ ÁN PHẦN MỀM
## Đề tài: Nghiên cứu các nguồn rủi ro phổ biến, lập kế hoạch ứng phó và ứng dụng Lý thuyết hữu dụng của rủi ro (Risk Utility Theory)

* **Môn học:** Quản trị dự án phần mềm (Mã môn: `SW403DE01` - Đại học Hoa Sen)
* **Nhóm thực hiện:** Nhóm 3
* **Sinh viên thực hiện:**
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
   - [5.1. Bối cảnh dự án](#51-bối-cảnh-dự-án)
   - [5.2. Danh sách rủi ro ưu tiên của JWD Consulting](#52-danh-sách-rủi-ro-ưu-tiên-của-jwd-consulting)
   - [5.3. Phân tích cách ứng phó thực tế của Erica Bell](#53-phân-tích-cách-ứng-phó-thực-tế-của-erica-bell)
6. [Kết luận và Bài học kinh nghiệm](#6-kết-luận-và-bài-học-kinh-nghiệm)

---

## 1. Giới thiệu về Quản trị rủi ro trong dự án phần mềm

Dự án phần mềm có đặc thù là tính vô hình của sản phẩm, tính biến động cao của yêu cầu công nghệ và sự phụ thuộc lớn vào yếu tố con người. Theo Standish Group Chaos Report, tỷ lệ dự án phần mềm thất bại hoặc gặp trục trặc (chậm tiến độ, vượt ngân sách, thiếu tính năng) luôn ở mức cao (thường trên 50-60%). Nguyên nhân cốt lõi phần lớn xuất phát từ việc thiếu chủ động quản trị rủi ro.

**Rủi ro dự án (Project Risk)** là một sự kiện hoặc điều kiện không chắc chắn mà nếu xảy ra, sẽ có tác động tích cực hoặc tiêu cực đến ít nhất một mục tiêu của dự án (phạm vi, tiến độ, chi phí, chất lượng).

**Quản trị rủi ro (Risk Management)** là quá trình hệ thống hóa việc nhận diện, phân tích và phản hồi các rủi ro trong suốt vòng đời dự án nhằm tối đa hóa xác suất và tác động của các sự kiện tích cực, đồng thời tối thiểu hóa xác suất và tác động của các sự kiện tiêu cực. Quy trình quản trị rủi ro theo chuẩn PMBOK gồm các bước:
1. **Lập kế hoạch quản trị rủi ro (Plan Risk Management):** Xác định cách thức tiếp cận và thực hiện các hoạt động quản trị rủi ro.
2. **Nhận diện rủi ro (Identify Risks):** Xác định những rủi ro nào có thể ảnh hưởng đến dự án và ghi nhận các đặc tính của chúng.
3. **Phân tích định tính (Perform Qualitative Risk Analysis):** Đánh giá mức độ ưu tiên của rủi ro bằng cách kết hợp xác suất xảy ra (Probability) và tác động (Impact) của chúng.
4. **Phân tích định lượng (Perform Quantitative Risk Analysis):** Ước lượng bằng số liệu toán học ảnh hưởng của rủi ro lên toàn bộ mục tiêu dự án (ví dụ: dùng cây quyết định, mô phỏng Monte Carlo).
5. **Hoạch định ứng phó (Plan Risk Responses):** Xây dựng các phương án và hành động nhằm nâng cao cơ hội và giảm thiểu mối đe dọa.
6. **Kiểm soát rủi ro (Control Risks):** Theo dõi các rủi ro đã nhận diện, giám sát rủi ro còn lại, nhận diện rủi ro mới và đánh giá hiệu quả của quy trình ứng phó.

---

## 2. Các nguồn rủi ro phổ biến trong dự án phần mềm

Trong phát triển phần mềm, các rủi ro thường được phân loại theo bốn nhóm nguồn chính: Thị trường, Tài chính, Công nghệ và Con người.

### 2.1. Rủi ro Thị trường (Market Risk)
Rủi ro xuất phát từ những biến động bên ngoài hệ sinh thái trực tiếp của dự án nhưng ảnh hưởng trực tiếp đến giá trị thương mại của sản phẩm phần mềm.
*   **Nguyên nhân:** Thay đổi nhu cầu người dùng, đối thủ cạnh tranh ra mắt trước, sản phẩm không phù hợp với thị trường.
*   **Ví dụ:** Một công ty phát triển ứng dụng đặt xe công nghệ mất 2 năm để hoàn thiện hệ thống, nhưng khi ra mắt thì thị trường đã bị bão hòa bởi các đối thủ lớn và hành vi người tiêu dùng đã chuyển dịch sang tích hợp đa dịch vụ (Super App).

### 2.2. Rủi ro Tài chính (Financial Risk)
Rủi ro liên quan đến dòng tiền, ngân sách phát triển và khả năng sinh lời của dự án.
*   **Nguyên nhân:** Ước lượng chi phí ban đầu quá thấp, khách hàng trì hoãn thanh toán, biến động tỷ giá hối đoái hoặc lạm phát.
*   **Ví dụ:** Dự án phần mềm quản lý kho ERP ban đầu dự kiến ngân sách $100,000, nhưng do phát sinh yêu cầu tùy biến sâu từ phía khách hàng, thời gian kéo dài gấp đôi khiến chi phí nhân sự vượt ngưỡng $180,000, dẫn đến dự án bị lỗ hoặc cạn kiệt dòng tiền duy trì.

### 2.3. Rủi ro Công nghệ (Technology Risk)
Rủi ro liên quan đến công cụ kỹ thuật, kiến trúc hệ thống, phần cứng, phần mềm bên thứ ba và khả năng hiện thực hóa kỹ thuật.
*   **Nguyên nhân:** Áp dụng các công nghệ quá mới, vấn đề tích hợp hệ thống phức tạp, lỗ hổng bảo mật hoặc lỗi hiệu năng.
*   **Ví dụ:** Quyết định chọn kiến trúc Microservices phức tạp cho một hệ thống Web đơn giản dẫn đến việc đội ngũ phát triển tốn quá nhiều thời gian cấu hình hạ tầng mạng và giám sát dịch vụ thay vì tập trung phát triển tính năng cốt lõi.

### 2.4. Rủi ro Con người (People Risk)
Yếu tố quan trọng nhất nhưng cũng khó kiểm soát nhất trong quản trị dự án phần mềm.
*   **Nguyên nhân:** Mất mát nhân sự chủ chốt, kỹ năng đội ngũ phát triển yếu, xung đột nội bộ, áp lực công việc dẫn đến tình trạng kiệt sức (Burnout).
*   **Ví dụ:** Trong một dự án phát triển game di động, lập trình viên đồ họa duy nhất xin nghỉ việc ngay trước giai đoạn bàn giao phiên bản Alpha 1 tháng, khiến toàn bộ tiến độ mỹ thuật bị đóng băng do không tìm được người thay thế kịp thời.

### 2.5. Nhận diện rủi ro bằng mô hình SWOT - Case Study Dự án HSU
Để nhận diện rủi ro một cách toàn diện khi bắt đầu dự án, nhà quản trị dự án thường sử dụng mô hình **SWOT (Strengths - Weaknesses - Opportunities - Threats)**. Dưới đây là phân tích SWOT thực tế lấy từ Đề thi số 3 của HSU đối với dự án: **Xây dựng ứng dụng di động Đăng ký môn học tại Đại học Hoa Sen để thay thế hệ thống đăng ký cũ chạy trên laptop.**

#### 1. Điểm mạnh (Strengths)
*   **Tính tiện dụng & Cơ động (Accessibility):** Cho phép sinh viên đăng ký môn học mọi lúc, mọi nơi trực tiếp trên điện thoại di động mà không cần máy tính xách tay.
*   **Trải nghiệm người dùng tốt (User Experience):** Thiết kế UI/UX hiện đại, giao diện trực quan và thao tác nhanh chóng hơn giúp nâng cao mức độ hài lòng của sinh viên.
*   **Tốc độ & Hiệu năng (Speed):** Ứng dụng di động tối ưu hóa các API tốt hơn, giúp tải trang nhanh hơn và xử lý luồng đăng ký mượt mà hơn trong giờ cao điểm.
*   **Vị thế công nghệ (Innovation):** Khẳng định HSU là trường đại học năng động, tiên phong chuyển đổi số và nâng cao uy tín học đường.

#### 2. Điểm yếu (Weaknesses)
*   **Chi phí phát triển & Bảo trì (Development Costs):** Đòi hỏi ngân sách lớn để xây dựng, vận hành và liên tục cập nhật phiên bản chạy trên cả hai nền tảng phổ biến là iOS và Android.
*   **Giới hạn thiết bị phần cứng (Tech Limitations):** Một số sinh viên sử dụng dòng điện thoại quá cũ hoặc hệ điều hành lỗi thời sẽ không tương thích, gây ra sự bất bình đẳng trong việc tiếp cận đăng ký môn.
*   **Rào cản học hỏi (Learning Curve):** Sinh viên và cán bộ quản lý đã quen thuộc với giao diện web cũ sẽ gặp khó khăn và phản đối trong giai đoạn đầu chuyển đổi hệ thống.
*   **Rủi ro an ninh mạng (Security Risks):** Nền tảng di động dễ bị khai thác các lỗ hổng bảo mật API, rò rỉ dữ liệu cá nhân qua mạng Wi-Fi công cộng không an toàn.

#### 3. Cơ hội (Opportunities)
*   **Tích hợp thông báo đẩy (Push Notifications):** Gửi cảnh báo tức thời về lịch mở lớp, hạn chót đóng học phí, kết quả xếp lớp và các thông tin học vụ khẩn cấp.
*   **Hệ sinh thái dịch vụ số:** Dễ dàng kết nối với các tiện ích khác của HSU như ví điện tử đóng học phí, tra cứu điểm thi, thẻ sinh viên tích hợp số.
*   **Thu thập phản hồi nhanh chóng (Feedback Loop):** Tích hợp tính năng đánh giá ứng dụng và báo lỗi trực tiếp giúp đội ngũ IT liên tục nâng cấp hệ thống.
*   **Hợp tác công nghệ:** Hợp tác với các doanh nghiệp công nghệ lớn để xin tài trợ hạ tầng Cloud, cổng thanh toán hoặc giải pháp bảo mật di động.

#### 4. Thách thức (Threats)
*   **Rủi ro sập hệ thống (System Crash):** Lỗi nghẽn mạng hoặc ứng dụng bị crash khi hàng chục ngàn sinh viên truy cập đăng ký môn học đồng thời trong những phút đầu tiên mở cổng, gây khủng hoảng truyền thông.
*   **Tốc độ thay đổi của HĐH di động:** Sự cập nhật liên tục của iOS/Android đòi hỏi đội IT của trường phải liên tục kiểm thử tương thích, nếu không sẽ phát sinh lỗi vận hành.
*   **Rào cản tuân thủ pháp lý:** Phải tuân thủ nghiêm ngặt các quy định về an toàn thông tin cá nhân và các quy chế học vụ nội bộ của nhà trường.
*   **Tỷ lệ chấp nhận thấp (Adoption Resistance):** Sinh viên e ngại lỗi hệ thống di động có thể tiếp tục sử dụng phương pháp đăng ký truyền thống, làm giảm hiệu quả đầu tư dự án.

---

## 3. Lý thuyết hữu dụng của rủi ro (Risk Utility Theory)

Để đưa ra các quyết định quản trị rủi ro hợp lý, nhà quản trị dự án cần hiểu rõ hành vi và thái độ đối với rủi ro của các bên liên quan. **Lý thuyết hữu dụng của rủi ro (Risk Utility Theory)** cung cấp một khung sườn khoa học để phân tích điều này.

### 3.1. Khái niệm về Hữu dụng của rủi ro (Risk Utility)
*   **Hữu dụng (Utility):** Là mức độ thỏa mãn hay giá trị nhận thức (perceived value) mà một cá nhân nhận được từ một kết quả cụ thể (thường là kết quả tài chính hoặc sự thành công của dự án).
*   Giá trị tiền tệ danh nghĩa (Nominal monetary value) và giá trị hữu dụng thực tế không phải lúc nào cũng tỷ lệ thuận tuyến tính với nhau.

### 3.2. Hàm hữu dụng và 3 nhóm thái độ đối với rủi ro
Thái độ đối với rủi ro của một tổ chức hoặc cá nhân được biểu diễn thông qua độ dốc và hình dạng của đường cong **Hàm hữu dụng $U(x)$** (với $x$ là giá trị tiền tệ hoặc kết quả đạt được):

*   **Né tránh rủi ro (Risk-Averse):** Đường cong hữu dụng có dạng lồi (**Concave** - độ dốc giảm dần). Họ thà chọn một kết quả chắc chắn có giá trị trung bình thấp hơn là mạo hiểm với một kết quả có giá trị kỳ vọng cao nhưng đi kèm rủi ro lớn.
*   **Thích rủi ro (Risk-Seeking):** Đường cong hữu dụng có dạng lõm (**Convex** - độ dốc tăng dần). Họ sẵn sàng chấp nhận rủi ro rất lớn để đổi lấy cơ hội đạt được phần thưởng cực cao, bất chấp xác suất thành công thấp.
*   **Trung lập với rủi ro (Risk-Neutral):** Đường thẳng (**Linear** - độ dốc không đổi). Quyết định của họ hoàn toàn phụ thuộc vào việc tính toán Giá trị tiền tệ kỳ vọng (EMV).

### 3.3. Ứng dụng toán học trong ra quyết định dự án (EMV so với Expected Utility)
Giả sử một công ty phần mềm đang cân nhắc lựa chọn giữa hai dự án A và B:
*   **Dự án A (Phương án an toàn):** Có 100% cơ hội kiếm được lợi nhuận **$50,000**.
*   **Dự án B (Phương án mạo hiểm):** Có 50% cơ hội kiếm được **$120,000** và 50% cơ hội thất bại hoàn toàn và mất trắng (**$0**).

#### Phân tích theo Giá trị Tiền tệ Kỳ vọng (EMV):
*   $EMV(A) = 1.0 \times \$50,000 = \$50,000$
*   $EMV(B) = 0.5 \times \$120,000 + 0.5 \times \$0 = \$60,000$
*   Nếu nhà quản trị dự án là người **Trung lập với rủi ro (Risk-Neutral)**, họ sẽ chọn **Dự án B** vì $EMV(B) > EMV(A)$ ($60k > 50k$).

#### Phân tích theo Giá trị Hữu dụng Kỳ vọng (Expected Utility - EU):
Giả sử nhà quản trị dự án là người **Né tránh rủi ro (Risk-Averse)** với hàm hữu dụng được xác định dưới dạng hàm căn thức: $U(x) = \sqrt{x}$ (phản ánh mức độ thỏa mãn tăng chậm dần):
*   $EU(A) = U(\$50,000) = \sqrt{50,000} \approx 223.6$
*   $EU(B) = 0.5 \times U(\$120,000) + 0.5 \times U(\$0) = 0.5 \times \sqrt{120,000} + 0.5 \times 0 \approx 0.5 \times 346.4 = 173.2$
*   Vì $EU(A) > EU(B)$ ($223.6 > 173.2$), nhà quản trị **Risk-Averse** sẽ chọn **Dự án A**. Họ chấp nhận bỏ qua mức lợi nhuận kỳ vọng cao hơn của dự án B để đổi lấy sự an toàn chắc chắn của dự án A.

### 3.4. Phân tích định lượng rủi ro tài chính bằng NPV và ROI - Case Study Đề thi HSU
Để lượng hóa rủi ro tài chính của các phương án đầu tư dự án phần mềm khác nhau, nhà quản trị sử dụng phương pháp chiết khấu dòng tiền để tính **NPV (Net Present Value)** và **ROI (Return on Investment)**. Dưới đây là lời giải chi tiết cho bài toán so sánh 3 dự án A, B, C từ đề thi HSU với **Tỷ suất chiết khấu $r = 5\%$** trong thời gian 4 năm.

#### Công thức áp dụng (Phương pháp chuẩn HSU):
*   **Hệ số chiết khấu từng năm (Discount Factor):** $DF_t = \frac{1}{(1+r)^t}$
*   **Tổng giá trị hiện tại của Lợi ích (PV_B):** $PV_B = \sum_{t=1}^n \frac{\text{Lợi ích}_t}{(1+r)^t}$
*   **Tổng giá trị hiện tại của Chi phí (PV_C):** $PV_C = \sum_{t=1}^n \frac{\text{Chi phí}_t}{(1+r)^t}$
*   **Giá trị hiện tại ròng (NPV):** $NPV = PV_B - PV_C$
*   **Tỷ suất sinh lợi chiết khấu (ROI):** $ROI = \frac{NPV}{PV_C} \times 100\%$

#### Bảng thông số dòng tiền gốc:
*   **Dự án A:** 
    *   Lợi ích: [Y1: 500, Y2: 1000, Y3: 1000, Y4: 2000]
    *   Chi phí: [Y1: 2000, Y2: 500, Y3: 500, Y4: 0]
*   **Dự án B:**
    *   Lợi ích: [Y1: 0, Y2: 1000, Y3: 3000, Y4: 5000]
    *   Chi phí: [Y1: 3000, Y2: 1000, Y3: 1000, Y4: 1000]
*   **Dự án C:**
    *   Lợi ích: [Y1: 1000, Y2: 1000, Y3: 3000, Y4: 3000]
    *   Chi phí: [Y1: 5000, Y2: 2000, Y3: 1000, Y4: 1000]

#### Chi tiết tính toán từng dự án:

##### 1. Dự án A:
*   $PV_B = \frac{500}{1.05^1} + \frac{1000}{1.05^2} + \frac{1000}{1.05^3} + \frac{2000}{1.05^4} = 476.19 + 907.03 + 863.84 + 1645.40 = 3892.46$
*   $PV_C = \frac{2000}{1.05^1} + \frac{500}{1.05^2} + \frac{500}{1.05^3} + \frac{0}{1.05^4} = 1904.76 + 453.51 + 431.92 + 0 = 2790.20$
*   $NPV_A = 3892.46 - 2790.20 = 1102.27$
*   $ROI_A = \frac{1102.27}{2790.20} \times 100\% = 39.51\%$

##### 2. Dự án B:
*   $PV_B = \frac{0}{1.05^1} + \frac{1000}{1.05^2} + \frac{3000}{1.05^3} + \frac{5000}{1.05^4} = 0 + 907.03 + 2591.51 + 4113.51 = 7612.05$
*   $PV_C = \frac{3000}{1.05^1} + \frac{1000}{1.05^2} + \frac{1000}{1.05^3} + \frac{1000}{1.05^4} = 2857.14 + 907.03 + 863.84 + 822.70 = 5450.71$
*   $NPV_B = 7612.05 - 5450.71 = 2161.34$
*   $ROI_B = \frac{2161.34}{5450.71} \times 100\% = 39.65\%$
*(Lưu ý: Nếu tính theo tỷ lệ ROI danh nghĩa không chiết khấu, dự án B đạt mức ROI là $\frac{9000 - 6000}{6000} = 50\%$. Lựa chọn Dự án B là phương án tối ưu nhất).*

##### 3. Dự án C:
*   $PV_B = \frac{1000}{1.05^1} + \frac{1000}{1.05^2} + \frac{3000}{1.05^3} + \frac{3000}{1.05^4} = 952.38 + 907.03 + 2591.51 + 2468.10 = 6919.03$
*   $PV_C = \frac{5000}{1.05^1} + \frac{2000}{1.05^2} + \frac{1000}{1.05^3} + \frac{1000}{1.05^4} = 4761.90 + 1814.06 + 863.84 + 822.70 = 8262.50$
*   $NPV_C = 6919.03 - 8262.50 = -1343.47$
*   $ROI_C = \frac{-1343.47}{8262.50} \times 100\% = -16.26\%$

#### Kết luận lựa chọn đầu tư tối ưu:
**Dự án B** là phương án tốt nhất vì:
1.  **Hiệu quả tài chính vượt trội:** NPV của dự án B ($2161.34) cao gần gấp đôi dự án A ($1102.27) và dự án C bị lỗ nặng với NPV âm ($-1343.47$).
2.  **Khả năng sinh lời tối ưu:** Tỷ suất ROI chiết khấu của dự án B (39.65%) cao hơn dự án A (39.51%).
3.  **Quản trị rủi ro dòng tiền:** Mặc dù chi phí ban đầu của Dự án B ở năm thứ nhất cao hơn Dự án A ($3000 so với $2000), nhưng các năm sau đó chi phí vận hành rất ổn định ở mức $1000 và mang lại dòng lợi ích khổng lồ ở năm cuối ($5000). Dự án C là rủi ro nhất do chi phí đầu tư ban đầu quá lớn ($5000 ở Y1) vượt quá khả năng bù đắp của lợi ích mang lại.

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
*   Mã rủi ro (ID)
*   Mô tả rủi ro (Description)
*   Nguồn gốc rủi ro (Category)
*   Xác suất xảy ra (P) & Tác động (I) -> Điểm số rủi ro ($P \times I$)
*   Dấu hiệu cảnh báo sớm (Warning signs/Triggers)
*   Chiến lược ứng phó đề xuất (Response Strategy)
*   Người chịu trách nhiệm theo dõi (Risk Owner)
*   Ngân sách dự phòng (Contingency budget)

### 4.4. Tích hợp Quản trị rủi ro vào Kế hoạch Phát triển Phần mềm (SDP HSU)
Theo mẫu tài liệu chuẩn của Đại học Hoa Sen `Project Plan.docx`, phần **Risk Management Plan (Kế hoạch quản trị rủi ro)** là một chương bắt buộc nằm trong Kế hoạch Phát triển Phần mềm (Software Development Plan - SDP). Để tích hợp quản trị rủi ro hiệu quả vào SDP, nhóm dự án phải mô tả rõ ràng 3 phần chính sau:

1.  **Quy trình quản trị rủi ro (Tasks):**
    *   Mô tả cách thức nhóm dự án nhận diện rủi ro (Ví dụ: thông qua các buổi họp brainstorm, phân tích SWOT, tham khảo dữ liệu lịch sử các dự án trước).
    *   Phương pháp đánh giá định tính và định lượng để xếp hạng mức độ ưu tiên của rủi ro.
    *   Các chiến lược ứng phó cụ thể được áp dụng khi rủi ro vượt ngưỡng cảnh báo (Mitigation, Avoidance, Prevention).
    *   Cơ chế giám sát định kỳ các rủi ro quan trọng trong suốt vòng đời phát triển.
2.  **Phân định Trách nhiệm (Responsibilities):**
    *   Thiết lập ma trận phân công trách nhiệm (RACI Matrix) giữa các thành viên: Ai là người phát hiện rủi ro, ai chịu trách nhiệm triển khai kế hoạch ứng phó (Risk Owner) và ai phê duyệt ngân sách dự phòng.
3.  **Công cụ & Kỹ thuật (Tools & Techniques):**
    *   Công cụ lưu trữ thông tin rủi ro (Risk Register) bằng Excel hoặc tích hợp trực tiếp trên Jira/Microsoft Project.
    *   Kế hoạch quản lý cấu hình (Configuration Management Plan) và Bản đăng ký rủi ro hoạt động (Risk Item List) liên tục được cập nhật làm cơ sở báo cáo mốc bàn giao dự án.

---

## 5. Phân tích thực tế: Case Study JWD Consulting

Để hiểu cách thức áp dụng quản trị rủi ro trên thực tế, chúng ta cùng phân tích Case Study dự án **"Project Management Intranet Site"** của công ty **JWD Consulting** dưới góc độ quản lý rủi ro.

### 5.1. Bối cảnh dự án
Dự án được khởi xướng bởi CEO Joe Fleming nhằm thiết kế và xây dựng một trang Intranet chia sẻ kiến thức quản trị dự án, cung cấp các biểu mẫu và tính năng hữu ích cho cả chuyên viên tư vấn nội bộ và khách hàng bên ngoài.
*   **Ngân sách ban đầu:** $140,000
*   **Thời gian thực hiện:** 6 tháng (từ 2/5 đến 4/11)
*   **Quản lý dự án:** Erica Bell (Giám đốc PMO)

### 5.2. Danh sách rủi ro ưu tiên của JWD Consulting
Trong giai đoạn lập kế hoạch, Erica Bell đã tổ chức họp brainstorm với đội ngũ dự án, đánh giá rủi ro thông qua Ma trận Xác suất - Tác động (Probability/Impact Matrix) và đưa ra danh sách 10 rủi ro ưu tiên hàng đầu (theo Table 3-10 của tài liệu case study):

| Thứ hạng | Mô tả rủi ro (Potential Risk) | Nguồn rủi ro |
| :---: | :--- | :--- |
| **1** | Thiếu sự đóng góp tài liệu từ các tư vấn viên nội bộ (Lack of inputs from internal consultants) | Con người / Thị trường |
| **2** | Thiếu sự đóng góp ý kiến từ các đại diện khách hàng (Lack of inputs from client representatives) | Con người / Thị trường |
| **3** | Vấn đề bảo mật thông tin của hệ thống mới (Security of new system) | Công nghệ |
| **4** | Rủi ro trong việc thuê ngoài/mua phần mềm cho tính năng tra cứu bài báo và "Hỏi chuyên gia" | Công nghệ / Tài chính |
| **5** | Rủi ro trong việc thuê ngoài/mua phần mềm xử lý giao dịch thanh toán trực tuyến | Công nghệ / Tài chính |
| **6** | Tổ chức, sắp xếp các biểu mẫu và ví dụ mẫu sao cho khoa học và dễ sử dụng | Công nghệ |
| **7** | Cung cấp một tính năng tìm kiếm hiệu quả và chính xác | Công nghệ |
| **8** | Không nhận được phản hồi chất lượng từ Michael Chen và các tư vấn viên cấp cao khác | Con người |
| **9** | Việc quảng bá hệ thống mới không đạt hiệu quả | Thị trường |
| **10** | Không hiện thực hóa được các lợi ích tài chính của hệ thống trong vòng một năm | Tài chính |

### 5.3. Phân tích cách ứng phó thực tế của Erica Bell
Trong quá trình triển khai dự án, nhiều rủi ro trong danh sách trên đã thực sự xảy ra. Erica Bell đã có những phản hồi rất xuất sắc thể hiện kỹ năng quản trị dự án thực chiến:

#### Case 1: Ứng phó với rủi ro thứ nhất (Thiếu sự đóng góp tài liệu từ tư vấn viên nội bộ)
*   **Sự kiện:** Dự án nhận được tỷ lệ phản hồi khảo sát rất thấp từ các tư vấn viên trong công ty. Nếu không có dữ liệu đầu vào này, trang Intranet sẽ trống rỗng và không mang lại giá trị thực tế.
*   **Giải pháp ứng phó:** Erica đã chuyển hướng lên cấp cao hơn nhờ sự can thiệp từ **Nhà tài trợ dự án (Sponsor - CEO Joe Fleming)**. Joe đã gửi một email chỉ thị trực tiếp đến toàn công ty nhấn mạnh tầm quan trọng của dự án, đồng thời áp dụng một **chiến lược tạo động lực tích cực**: Tặng thêm **5 ngày phép** cho người cung cấp các ví dụ biểu mẫu tốt nhất.
*   **Kết quả:** Số lượng tư vấn viên nhiệt tình đóng góp tài liệu tăng vọt, giải quyết dứt điểm rủi ro cốt lõi này.

#### Case 2: Ứng phó với rủi ro thứ 4 và 5 (Mua phần mềm bên ngoài & Vấn đề ngân sách phát sinh)
*   **Sự kiện:** Khi thiết lập các tính năng "Hỏi chuyên gia" và thanh toán trực tuyến, lập trình viên Kevin Dodge muốn tự code toàn bộ hệ thống từ đầu (một dạng rủi ro công nghệ do thiên kiến cá nhân). Trong khi đó, chuyên viên Cindy Dawson nhận định rằng việc thuê ngoài/mua giải pháp có sẵn sẽ an sau hơn nhưng chi phí thực tế phát sinh lên đến $20,000 (gấp đôi dự kiến ban đầu là $10,000).
*   **Giải pháp ứng phó:** Erica Bell đã thuyết phục Kevin chấp nhận phương án mua giải pháp ngoài để giảm thiểu rủi ro trễ tiến độ. Đồng thời, cô trình bày rõ ràng bài toán kinh tế với CEO Joe Fleming để xin phê duyệt thêm khoản ngân sách $10,000 vượt trội, cam kết đảm bảo mục tiêu thu hồi vốn.
*   **Kết quả:** Dự án được cấp thêm $10,000 (nâng tổng ngân sách thực tế lên $150,000) nhưng hoàn thành đúng tiến độ nhờ tích hợp các module thanh toán và diễn đàn chuyên gia có sẵn, đảm bảo hệ thống bảo mật và vận hành trơn tru.

#### Case 3: Ứng phó với rủi ro thứ 8 (Rủi ro về thái độ của Michael Chen)
*   **Sự kiện:** Michael Chen là một tư vấn viên cấp cao rất bận rộn. Trong các cuộc họp dự án, anh tỏ ra nhàm chán và liên tục ra ngoài nghe điện thoại xử lý công việc riêng với khách hàng, đe dọa đến tinh thần làm việc chung của đội ngũ và làm giảm chất lượng đóng góp ý kiến.
*   **Giải pháp ứng phó:** Erica Bell thay vì chỉ trích gay gắt, đã áp dụng chiến thuật quản trị con người linh hoạt. Cô hiểu rằng thời gian của Michael là tiền bạc đối với công ty và anh là người có xu hướng ưu tiên khách hàng thực tế hơn công việc nội bộ. Cô đã **giảm thiểu số lượng cuộc họp** Michael bắt buộc phải tham gia, thay vào đó giao trực tiếp quyền làm chủ (Owner) tính năng "Hỏi chuyên gia" cho anh và cho phép anh đóng góp ý kiến gián tiếp thông qua trợ lý Jill Anderson.
*   **Kết quả:** Michael Chen cảm thấy thoải mái hơn, hoàn thành xuất sắc vai trò dẫn dắt tính năng diễn đàn chuyên gia, đảm bảo dự án vẫn tận dụng được kiến thức chuyên môn của anh mà không gây xung đột nội bộ.

---

## 6. Kết luận và Bài học kinh nghiệm

Quản trị rủi ro không phải là hoạt động diễn ra một lần duy nhất lúc khởi đầu dự án, mà là một quy trình liên tục trong suốt vòng đời phát triển phần mềm. Việc áp dụng thành công **Lý thuyết hữu dụng của rủi ro (Risk Utility Theory)** giúp nhà quản trị dự án hiểu rõ giới hạn chịu đựng rủi ro của tổ chức để phân bổ nguồn lực ứng phó hiệu quả nhất.

**Bài học cốt lõi từ Case Study JWD Consulting:**
1.  **Sự đồng hành của Ban lãnh đạo (Top Management Support):** Sự hỗ trợ kịp thời từ CEO Joe Fleming là chìa khóa tháo gỡ các nút thắt về ngân sách và sự hợp tác của nhân sự.
2.  **Sử dụng linh hoạt các chiến lược ứng phó:** Không cố chấp tự làm tất cả (tự code), biết khi nào cần chuyển giao (mua giải pháp ngoài) để đảm bảo mục tiêu tối thượng là thời gian hoàn thành dự án (Time-to-market).
3.  **Tầm quan trọng của giao tiếp và thấu hiểu nhân sự:** Thay đổi phong cách giao tiếp với từng Stakeholder dựa trên mức độ quan tâm và ảnh hưởng của họ (như trường hợp của Michael Chen) là nhân tố quyết định sự thành bại về mặt quản lý con người trong dự án.
