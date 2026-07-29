
Tôi đã tổng hợp toàn bộ nội dung từ các file Word và Excel bạn gửi, bao gồm cả công thức EVM, WBS, Risk Register, Schedule Baseline… để tạo thành một bản tổng hợp chi tiết, không thiếu gì. Đây là bản “full package” để bạn có thể dùng cho seminar hoặc báo cáo cuối cùng:

📚 Tổng hợp nội dung dự án: Hệ thống đăng ký học phần trực tuyến

1. Giới thiệu & Phạm vi
   Mục tiêu: Xây dựng hệ thống web cho sinh viên đăng ký học phần theo thời gian thực, kiểm tra tiên quyết, trùng lịch, giới hạn sĩ số, giảm tải cho phòng đào tạo.

Phạm vi trong dự án: Đăng ký/hủy học phần, quản lý lớp học phần, quản lý lịch học, kiểm tra tiên quyết/trùng lịch, báo cáo thống kê, phân quyền người dùng.

Ngoài phạm vi: Thanh toán học phí, quản lý điểm số, mobile app độc lập, tích hợp bên thứ ba.

Ràng buộc: Deadline cố định trước ngày mở đăng ký học kỳ; ngân sách hạn chế; nhân sự nhỏ; công nghệ phải tương thích hạ tầng trường.

2. Stakeholders
   Sinh viên: Quan tâm tốc độ, chính xác, minh bạch sĩ số.

Giảng viên: Lịch giảng dạy không trùng, dữ liệu lớp chính xác.

Phòng Đào tạo: Chủ sở hữu nghiệp vụ, chịu trách nhiệm deadline.

Ban Giám hiệu: Sponsor, quan tâm hiệu quả đầu tư và uy tín.

Phòng CNTT: Vận hành hạ tầng, bảo mật, chịu tải.

Nhóm phát triển: Thực thi kỹ thuật, cần yêu cầu rõ ràng.

PM: Điều phối tiến độ, phạm vi, rủi ro.

3. Quản lý tiến độ (Schedule Management)
   3.1. WBS & Gantt Chart
   7 giai đoạn chính: Khởi tạo → Phân tích yêu cầu → Thiết kế → Phát triển → Kiểm thử → Triển khai & Đào tạo → Nghiệm thu & Đóng dự án.

Tổng thời gian: 48 ngày làm việc (03/08–07/10/2026).

Đường găng (Critical Path): 19 công việc, gồm các task quan trọng như 4.1, 4.3, 4.5, 4.6 (Phát triển) và 5.2, 5.3, 5.4 (Kiểm thử).

3.2. Resource Allocation
Tổng nhân lực: 74 ngày công, chi phí 39,15 triệu VND.

Chi phí chi tiết:

PM: 8 ngày, 4,8 triệu

BA: 13 ngày, 6,5 triệu

Dev Backend: 27 ngày, 14,85 triệu

Dev Frontend: 13 ngày, 7,15 triệu

DBA: 3 ngày, 1,5 triệu

Tester: 11 ngày, 4,95 triệu

3.3. Schedule Baseline
Milestones: Charter (07/08), SRS (19/08), Thiết kế (25/08), Code complete (14/09), Kiểm thử (28/09), Go-live (30/09), Đóng dự án (07/10).

3.4. Theo dõi tiến độ & EVM
Status date: 16/09/2026.

Chỉ số:

BAC = 39.150.000 VND

PV = 28.900.000 VND

EV = 28.000.000 VND

AC = 28.328.500 VND

SV = −900.000 VND → chậm tiến độ nhẹ

CV = −328.500 VND → vượt chi phí nhẹ

SPI = 0,97 (<1) → chậm tiến độ

CPI = 0,99 (<1) → vượt chi phí

EAC ≈ 39.609.313 VND → vượt ngân sách ~1,2%

VAC ≈ −459.313 VND

3.5. Biện pháp xử lý chậm tiến độ
Module 4.6: Bổ sung nhân sự (crashing), ưu tiên API lõi.

Module 5.2: Fast-tracking giữa 5.1 và 4.6, viết test case trước.

Dự phòng toàn dự án: Schedule reserve 3–5 ngày cuối giai đoạn kiểm thử, họp status review hàng tuần.

4. Quản lý rủi ro (Risk Management)
   4.1. Quy trình 4 bước
   Nhận diện → Phân tích & đánh giá → Lập kế hoạch ứng phó → Giám sát & kiểm soát.

4.2. Risk Register (8 rủi ro chính)
R1: Quá tải hệ thống (XS cao, AH cao, điểm 9).

R2: Sai logic nghiệp vụ (điểm 6).

R3: Rò rỉ dữ liệu (điểm 3).

R4: Thành viên rời nhóm (điểm 4).

R5: Scope creep (điểm 4).

R6: Trễ tiến độ do ước lượng sai (điểm 6).

R7: Thiếu kinh nghiệm công nghệ (điểm 2).

R8: Hạ tầng không mở rộng (điểm 2).

4.3. Risk Matrix
Vùng đỏ (6–9): R1.

Vùng cam (6): R2, R6.

Vùng vàng (3–4): R3, R4, R5.

Vùng xanh (≤2): R7, R8.

4.4. Risk Response Plan
R1: Giảm thiểu (load balancing, cache, hàng đợi, load test).

R2: Giảm thiểu (test case đầy đủ, kiểm thử dữ liệu thật).

R3: Né tránh + giảm thiểu (mã hóa, phân quyền, xác thực).

R4: Chấp nhận + giảm thiểu (backup nhân sự, cập nhật tiến độ).

R5: Giảm thiểu (chốt phạm vi, quy trình change request).

R6: Giảm thiểu (buffer thời gian, theo dõi Gantt Chart).

R7: Giảm thiểu (training nội bộ, hỗ trợ giảng viên).

R8: Chấp nhận hiện tại, nâng cấp sau.

5. Công cụ quản lý dự án
   Tiến độ: MS Project, GanttProject.

Công việc nhóm: Trello, Notion.

Rủi ro: Google Sheets.

Giao tiếp: Zalo, Discord, Google Meet.

Mã nguồn: GitHub/GitLab.

Tài liệu: Google Drive, Docs.

Thiết kế: Figma, draw.io, Lucidchart.

6. Kết quả mong đợi
   Hệ thống hoàn chỉnh, ổn định, đúng hạn.

Sinh viên đăng ký nhanh, chính xác, theo dõi sĩ số real-time.

Phòng đào tạo giảm tải công việc thủ công.

Dữ liệu tập trung, an toàn, dễ báo cáo.

Rủi ro trọng yếu được kiểm soát chủ động.

7. Kết luận
   Quản lý rủi ro và tiến độ song hành xuyên suốt vòng đời dự án.

Kết hợp Risk Register + Risk Matrix + Risk Response Plan với Gantt Chart + Baseline + EVM.

Dự án khả thi hoàn thành đúng hạn 07/10/2026, đạt mục tiêu ban đầu.
