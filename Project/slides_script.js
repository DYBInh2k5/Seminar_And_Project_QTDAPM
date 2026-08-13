document.addEventListener('DOMContentLoaded', () => {
    // Force Light Mode theme natively
    document.body.setAttribute('data-theme', 'light');

    // --- SLIDE NAVIGATION CONTROL ---
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlideIndex = 0;

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress-bar');
    const dotsContainer = document.getElementById('dots-container');

    // Create dot indicators
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot-indicator');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }
    const dots = document.querySelectorAll('.dot-indicator');

    function updateNavState() {
        // Active slide display
        slides.forEach((slide, idx) => {
            slide.classList.remove('active', 'prev-slide');
            if (idx === currentSlideIndex) {
                slide.classList.add('active');
            } else if (idx < currentSlideIndex) {
                slide.classList.add('prev-slide');
            }
        });

        // Navigation button disabling
        if (prevBtn) prevBtn.disabled = currentSlideIndex === 0;
        if (nextBtn) nextBtn.disabled = currentSlideIndex === totalSlides - 1;

        // Dot indicators
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentSlideIndex);
        });

        // Progress bar width
        if (progressBar) {
            const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;
            progressBar.style.width = `${progressPercent}%`;
        }
    }

    function goToSlide(index) {
        if (index >= 0 && index < totalSlides) {
            currentSlideIndex = index;
            updateNavState();
        }
    }

    function nextSlide() {
        if (currentSlideIndex < totalSlides - 1) {
            currentSlideIndex++;
            updateNavState();
        }
    }

    function prevSlide() {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            updateNavState();
        }
    }

    // Nav click events
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Keyboard events
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Spacebar') {
            if (e.key === ' ' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'SELECT') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // --- THEME TOGGLE CONTROLLER ---
    const themeBtn = document.getElementById('theme-toggle-btn');
    let isDark = false;

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            isDark = !isDark;
            document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
            if (isDark) {
                themeBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="sun-icon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                `;
            } else {
                themeBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="moon-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                `;
            }
        });
    }

    // --- FULLSCREEN CONTROLLER ---
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.error(`Error enabling fullscreen: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
        });
    }

    // --- DOWNLOAD PDF CONTROLLER ---
    const downloadPdfBtn = document.getElementById('download-pdf-btn');
    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // --- LAYOUT CUSTOMIZER CONTROLLER ---
    const customizerPanel = document.getElementById('customizer-panel');
    const layoutToggleBtn = document.getElementById('layout-toggle-btn');
    const closeCustomizerBtn = document.getElementById('close-customizer-btn');

    if (layoutToggleBtn && customizerPanel) {
        layoutToggleBtn.addEventListener('click', () => {
            customizerPanel.classList.toggle('active');
        });
    }

    if (closeCustomizerBtn && customizerPanel) {
        closeCustomizerBtn.addEventListener('click', () => {
            customizerPanel.classList.remove('active');
        });
    }

    const customizerChoices = document.querySelectorAll('.customizer-choice');
    customizerChoices.forEach(choice => {
        choice.addEventListener('click', (e) => {
            const prop = e.target.getAttribute('data-prop');
            const val = e.target.getAttribute('data-val');
            document.documentElement.style.setProperty(prop, val);
            const parent = e.target.closest('.radio-group');
            parent.querySelectorAll('.customizer-choice').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
        });
    });

    // --- RESOURCE ALLOCATION MODAL CONTROLLER ---
    const resourcesModal = document.getElementById('resources-modal');
    const viewResourcesBtn = document.getElementById('view-resources-btn');
    const resourcesCloseBtn = document.getElementById('resources-close-btn');

    if (resourcesModal && viewResourcesBtn) {
        viewResourcesBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            resourcesModal.style.display = 'flex';
        });

        if (resourcesCloseBtn) {
            resourcesCloseBtn.addEventListener('click', () => {
                resourcesModal.style.display = 'none';
            });
        }

        // Close on background click
        resourcesModal.addEventListener('click', (e) => {
            if (e.target === resourcesModal || e.target === resourcesCloseBtn) {
                resourcesModal.style.display = 'none';
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && resourcesModal.style.display === 'flex') {
                resourcesModal.style.display = 'none';
            }
        });
    }

    // --- SLIDE 8 INTERACTIVE SIMULATOR (CPM / GANTT) ---
    const slide8Sliders = document.querySelectorAll('.slide8-slider');
    const slide8ResetBtn = document.getElementById('reset-slide8-btn');
    
    const delayVals = { 1: 0, 2: 0, 3: 0, 4: 0 };

        let currentLang = 'vi';

    function updateSlide8() {
        slide8Sliders.forEach(slider => {
            const id = parseInt(slider.getAttribute('data-task-id'));
            const val = parseInt(slider.value);
            delayVals[id] = val;
            
            const displayEl = document.getElementById(`slide8-delay-val-${id}`);
            if (displayEl) {
                if (val > 0) {
                    displayEl.innerText = currentLang === 'en' ? (val === 1 ? 'Delay: 1 week' : `Delay: ${val} weeks`) : `Trễ: ${val} tuần`;
                    displayEl.style.color = '#f43f5e';
                } else {
                    displayEl.innerText = currentLang === 'en' ? 'Delay: 0 weeks' : 'Trễ: 0 tuần';
                    displayEl.style.color = (id === 1 || id === 2) ? '#f43f5e' : '#10b981';
                }
            }
        });

        const start1 = 1;
        const dur1 = 2 + delayVals[1];
        const end1 = start1 + dur1 - 1; 

        const start2 = end1 + 1;
        const dur2 = 4 + delayVals[2];
        const end2 = start2 + dur2 - 1;

        const start3 = end1 + 1;
        const dur3 = 3 + delayVals[3];
        const end3 = start3 + dur3 - 1;

        const start4 = end1 + 1;
        const dur4 = 2 + delayVals[4];
        const end4 = start4 + dur4 - 1;

        const maxEnd = Math.max(end2, end3, end4);
        const projectEnd = maxEnd + 6;
        
        const setBarGrid = (elId, start, end) => {
            const el = document.getElementById(elId);
            if (el) {
                el.style.gridColumn = `${start + 1} / ${end + 2}`;
            }
        };

        setBarGrid('slide8-bar-1', start1, end1);
        setBarGrid('slide8-bar-2', start2, end2);
        setBarGrid('slide8-bar-3', start3, end3);
        setBarGrid('slide8-bar-4', start4, end4);

        const bar3 = document.getElementById('slide8-bar-3');
        const card3 = document.getElementById('slide8-card-task3');
        const title3 = document.getElementById('slide8-title-task3');
        const floatText3 = document.getElementById('slide8-float-task3');
        const delayVal3Text = document.getElementById('slide8-delay-val-3');
        
        if (end3 >= end2) {
            if (bar3) bar3.style.background = 'linear-gradient(135deg, #f43f5e, #e11d48)';
            if (card3) {
                card3.style.background = 'rgba(244, 63, 94, 0.05)';
                card3.style.borderColor = '#f43f5e';
            }
            if (title3) title3.innerText = currentLang === 'en' ? '🔴 3. Frontend Coding' : '🔴 3. Lập trình Frontend';
            if (floatText3) floatText3.innerText = currentLang === 'en' ? 'Float: 0 weeks (CRITICAL!)' : 'Đệm (Float): 0 tuần (CRITICAL!)';
            if (delayVal3Text && delayVals[3] > 0) delayVal3Text.style.color = '#f43f5e';
        } else {
            if (bar3) bar3.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            if (card3) {
                card3.style.background = 'rgba(16, 185, 129, 0.05)';
                card3.style.borderColor = '#10b981';
            }
            if (title3) title3.innerText = currentLang === 'en' ? '🟢 3. Frontend Coding' : '🟢 3. Lập trình Frontend';
            const currentFloat3 = (end2 - end3);
            if (floatText3) floatText3.innerText = currentLang === 'en' ? (currentFloat3 === 1 ? 'Float: 1 week' : `Float: ${currentFloat3} weeks`) : `Đệm (Float): ${currentFloat3} tuần`;
            if (delayVal3Text) delayVal3Text.style.color = '#10b981';
        }

        const bar4 = document.getElementById('slide8-bar-4');
        const card4 = document.getElementById('slide8-card-task4');
        const title4 = document.getElementById('slide8-title-task4');
        const floatText4 = document.getElementById('slide8-float-task4');
        const delayVal4Text = document.getElementById('slide8-delay-val-4');

        if (end4 >= end2) {
            if (bar4) bar4.style.background = 'linear-gradient(135deg, #f43f5e, #e11d48)';
            if (card4) {
                card4.style.background = 'rgba(244, 63, 94, 0.05)';
                card4.style.borderColor = '#f43f5e';
            }
            if (title4) title4.innerText = currentLang === 'en' ? '🔴 4. Database Design' : '🔴 4. Thiết kế Database';
            if (floatText4) floatText4.innerText = currentLang === 'en' ? 'Float: 0 weeks (CRITICAL!)' : 'Đệm (Float): 0 tuần (CRITICAL!)';
            if (delayVal4Text && delayVals[4] > 0) delayVal4Text.style.color = '#f43f5e';
        } else {
            if (bar4) bar4.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            if (card4) {
                card4.style.background = 'rgba(16, 185, 129, 0.05)';
                card4.style.borderColor = '#10b981';
            }
            if (title4) title4.innerText = currentLang === 'en' ? '🟢 4. Database Design' : '🟢 4. Thiết kế Database';
            const currentFloat4 = (end2 - end4);
            if (floatText4) floatText4.innerText = currentLang === 'en' ? (currentFloat4 === 1 ? 'Float: 1 week' : `Float: ${currentFloat4} weeks`) : `Đệm (Float): ${currentFloat4} tuần`;
            if (delayVal4Text) delayVal4Text.style.color = '#10b981';
        }

        const summaryBox = document.getElementById('slide8-summary-box');
        const summaryTitle = document.getElementById('slide8-project-finish');
        const summaryComment = document.getElementById('slide8-summary-comment');

        if (projectEnd === 12) {
            if (summaryBox) {
                summaryBox.style.background = 'rgba(16, 185, 129, 0.08)';
                summaryBox.style.borderColor = '#10b981';
            }
            if (summaryTitle) {
                summaryTitle.innerText = currentLang === 'en' ? 'Handover at Week 12 (On Time)' : 'Bàn giao ở Tuần 12 (Đúng hạn)';
                summaryTitle.style.color = '#065f46';
            }
            if (summaryComment) {
                summaryComment.innerText = currentLang === 'en' ? 
                    'Project is running on baseline schedule. Delays in non-critical tasks do not affect the final handover date.' :
                    'Dự án đang diễn ra đúng tiến độ cơ sở (Baseline). Sự chậm trễ của các công việc ngoài đường găng không ảnh hưởng đến ngày nghiệm thu cuối cùng.';
            }
        } else {
            const delayAmt = projectEnd - 12;
            if (summaryBox) {
                summaryBox.style.background = 'rgba(244, 63, 94, 0.08)';
                summaryBox.style.borderColor = '#f43f5e';
            }
            if (summaryTitle) {
                summaryTitle.innerText = currentLang === 'en' ? 
                    (delayAmt === 1 ? `Handover at Week ${projectEnd} (Delayed by 1 week!)` : `Handover at Week ${projectEnd} (Delayed by ${delayAmt} weeks!)`) :
                    `Bàn giao ở Tuần ${projectEnd} (Trễ ${delayAmt} tuần!)`;
                summaryTitle.style.color = '#991b1b';
            }
            if (summaryComment) {
                summaryComment.innerText = currentLang === 'en' ?
                    'Warning! Delays on Critical Path tasks have a cascading impact, pushing back the project completion date. Crashing (overtime/extra resources) or Fast-tracking (parallel work) is required to recover the schedule.' :
                    'Cảnh báo! Sự chậm trễ của công việc thuộc Đường găng đã tác động dây chuyền, đẩy lùi ngày nghiệm thu dự án. Cần thực hiện các biện pháp Crashing (tăng ca) hoặc Fast-tracking (chạy song song) để cứu tiến độ.';
            }
        }
    }

    if (slide8Sliders.length > 0) {
        slide8Sliders.forEach(slider => {
            slider.addEventListener('input', updateSlide8);
        });
        updateSlide8();
    }

    if (slide8ResetBtn) {
        slide8ResetBtn.addEventListener('click', () => {
            slide8Sliders.forEach(slider => {
                slider.value = 0;
            });
            updateSlide8();
        });
    }

    // Run first navigation state update
    updateNavState();

    // --- BILINGUAL TRANSLATION DICTIONARY & ENGINE ---
    const vi_to_en = {
        "Xem Phân Tích Tài Chính & NPV Dự Án": "View Project Financial Analysis & NPV",
        "Phân Tích Tài Chính Dự Án (NPV & ROI)": "Project Financial Analysis (NPV & ROI)",
        "So sánh hiệu quả tài chính giữa phương án xây dựng Cổng đăng ký mới và nâng cấp hệ thống cũ (Discount Rate: 8%, chu kỳ 5 năm):": "Comparison of financial performance between building the new portal and upgrading the legacy system (Discount Rate: 8%, 5-year cycle):",
        "Chỉ số tài chính": "Financial Metric",
        "Phương án Cổng mới (New Portal)": "New Portal Option",
        "Phương án Nâng cấp cũ (Legacy Upgrade)": "Legacy Upgrade Option",
        "Chênh lệch (Variance)": "Variance",
        "Tổng chi phí đầu tư & vận hành (5 năm)": "Total Cost (5 Years)",
        "Tổng lợi ích mang lại (5 năm)": "Total Benefit (5 Years)",
        "Tổng chi phí quy đổi hiện giá (Discounted Costs)": "Total Discounted Costs",
        "Tổng lợi ích quy đổi hiện giá (Discounted Benefits)": "Total Discounted Benefits",
        "Giá trị hiện tại ròng (NPV)": "Net Present Value (NPV)",
        "Tỷ suất hoàn vốn (ROI)": "Return on Investment (ROI)",
        "Kết luận phân tích tài chính:": "Financial analysis conclusion:",
        "Phương án xây dựng Cổng mới có mức đầu tư ban đầu cao hơn (150,000 USD so với 60,000 USD) nhưng mang lại NPV lớn gấp 3 lần (351,797 USD so với 113,118 USD) và ROI vượt trội (134.50% so với 85.55%). Đây là phương án tối ưu về mặt kinh tế dài hạn cho trường HSU.": "The new portal option requires higher initial investment (150,000 USD vs 60,000 USD) but yields a Net Present Value (NPV) three times larger (351,797 USD vs 113,118 USD) and superior Return on Investment (ROI) (134.50% vs 85.55%). This is the economically optimal choice for HSU.",

        "Ngày ký duyệt: 12/07/2026 chính thức ký và ban hành quyết định thành lập.": "Sign-off Date: 12/07/2026 officially signed and established decision.",
        "Nhà tài trợ (Sponsor): Võ Duy Bình (CEO HSU Portal) phê duyệt và cấp ngân sách.": "Sponsor: Vo Duy Binh (CEO HSU Portal) approved and allocated budget.",
        "Quản trị dự án (PM): Trần Bá Lợi (Lead Developer / PM) chịu trách nhiệm điều phối chung.": "Project Manager (PM): Tran Ba Loi (Lead Developer / PM) overall coordinator.",
        "Ngân sách tối đa: 150,000 USD (Ngân sách cơ sở: 140,000 USD, Dự phòng: 10,000 USD).": "Maximum Budget: 150,000 USD (Base: 140,000 USD, Contingency: 10,000 USD).",
        "Mục tiêu cốt lõi: Thiết lập hệ thống tải cao hỗ trợ &gt;15,000 kết nối đồng thời, độ trễ &lt;100ms.": "Core Goal: Establish a high load system supporting >15,000 concurrent connections, latency <100ms.",
        "Hợp lý hóa quy trình học vụ toàn trường, giảm thiểu 90% thời gian đăng ký môn học và loại bỏ hoàn toàn tình trạng nghẽn sập mạng vào đầu kỳ đăng ký học phần.": "Streamline academic workflows university-wide, reduce 90% enrollment time and eliminate network crashes completely.",
        "Ảnh hưởng: R.Cao | Quan tâm: Cao. Báo cáo mốc tiến độ NPV/ROI định kỳ mỗi 2 tuần họp giao ban.": "Power: V.High | Interest: High. Report NPV/ROI milestones periodically at bi-weekly meetings.",
        "Ảnh hưởng: Cao | Quan tâm: R.Cao. Kiểm soát chặt chẽ biểu đồ Gantt & đường găng CPM hàng tuần.": "Power: High | Interest: V.High. Monitor Gantt Chart & CPM weekly.",
        "Ảnh hưởng: T.Bình | Quan tâm: Cao. Đảm bảo Git commit mỗi ngày và kiểm thử test coverage &gt;80%.": "Power: Med | Interest: High. Daily Git commit & test coverage >80%.",
        "Ảnh hưởng: R.Cao | Quan tâm: Cao. Khảo sát nghiệp vụ môn tiên quyết, phối hợp nghiệm thu UAT sớm.": "Power: V.High | Interest: High. Prerequisite business analysis, early UAT acceptance coordination.",
        "Bộ lọc thông minh: Tìm kiếm lớp học nhanh theo Khoa, Ngành và Số tín chỉ học phần mở rộng.": "Smart Filter Engine: Quick class search by Faculty, Major and extended course credit.",
        "Đăng ký Real-time: Đồng bộ sĩ số khả dụng trên Redis cache với thời gian phản hồi cực nhanh &lt;50ms.": "Real-time Registration: Synchronize available slots on Redis cache with response latency <50ms.",
        "Ràng buộc học vụ: Tự động chặn trùng lịch học, kiểm tra điều kiện môn tiên quyết và giới hạn tín chỉ 12-24.": "Academic Constraint Engine: Auto-block schedule overlap, check prerequisites and credit limits 12-24.",
        "Thảo luận vai trò trách nhiệm, xây dựng bản giao ước Team Charter, làm rõ Scope Statement phạm vi công việc, phân rã WBS và lập biểu đồ Gantt tiến độ chi tiết trong vòng 12 tuần làm việc.": "Define team roles, build Team Charter, clarify Scope Statement, WBS decomposition and Gantt chart development for 12 weeks.",
        "Khảo sát nghiệp vụ, phân tích tài liệu đặc tả SRS, thiết kế UI/UX trên Figma, lập trình API Node.js và cache Redis tải cao, kết nối CSDL SQL, tổ chức nghiệm thu kiểm thử UAT.": "Business analysis, SRS specification, UI/UX Figma design, Node.js & Redis backend coding, database SQL setup, UAT.",
        "Theo dõi chặt chẽ tiến trình thực hiện theo đường găng (Critical Path Method), thực hiện báo cáo định kỳ, đánh giá EVM hiệu suất chi phí và điều chỉnh phân phối tài nguyên.": "Monitor critical path CPM closely, perform progress reports, evaluate EVM cost efficiency and allocate resources.",
        "Nhiệm thu phần mềm chính thức từ Phòng Đào tạo, lập báo cáo tổng kết đồ án, thuyết minh trước Hội đồng HSU và đúc kết các bài học kinh nghiệm (Lessons Learned) sâu sắc.": "Official software sign-off, project closing report, HSU presentation & lessons learned log.",
        "Lọc theo Khoa/Viện, Mã môn, Thứ và số Tín chỉ học tập mở rộng.": "Filter by Department, Course Code, Day, and credits.",

        "Ngày ký duyệt: 12/07/2026 chính thức ban hành quyết định.": "Sign-off Date: 12/07/2026 officially issued decision.",
        "Nhà tài trợ (Sponsor): Võ Duy Bình (CEO HSU Portal) duyệt chi ngân sách.": "Sponsor: Vo Duy Binh (CEO HSU Portal) approved budget.",
        "Quản trị dự án (PM): Trần Bá Lợi (Lead Developer / PM) điều phối chung.": "Project Manager (PM): Tran Ba Loi (Lead Developer / PM) overall coordinator.",
        "Mục tiêu cốt lõi: Tải cao &gt;15,000 users, độ trễ phản hồi &lt;100ms.": "Core Goal: High load >15,000 users, response latency <100ms.",
        "Hợp lý hóa quy trình học vụ toàn trường, giảm tải 90% thời gian đăng ký môn học và loại bỏ hoàn toàn sự cố nghẽn mạng.": "Streamline university academic workflow, reduce 90% enrollment time and eliminate network congestion.",
        "Võ Duy Bình (Sponsor / CEO HSU)": "Vo Duy Binh (Sponsor / CEO HSU)",
        "Trần Bá Lợi (Project Manager)": "Tran Ba Loi (Project Manager)",
        "Dev & QA Team (Khang & Quang)": "Dev & QA Team (Khang & Quang)",
        "Ảnh hưởng: R.Cao | Quan tâm: Cao. Báo cáo mốc NPV/ROI định kỳ mỗi 2 tuần.": "Power: V.High | Interest: High. Periodical NPV/ROI milestones report every 2 weeks.",
        "Ảnh hưởng: Cao | Quan tâm: R.Cao. Kiểm soát Gantt Chart & CPM hàng tuần.": "Power: High | Interest: V.High. Weekly Gantt Chart & CPM monitoring.",
        "Ảnh hưởng: T.Bình | Quan tâm: Cao. Git commit & test coverage hàng ngày &gt;80%.": "Power: Med | Interest: High. Daily Git commit & test coverage >80%.",
        "Ảnh hưởng: R.Cao | Quan tâm: Cao. Khảo sát nghiệp vụ, tổ chức nghiệm thu UAT sớm.": "Power: V.High | Interest: High. Business analysis, early UAT acceptance organization.",
        "Xác thực MSSV: Đăng nhập bảo mật sử dụng tài khoản sinh viên trường HSU.": "Student ID Verification: Secure login utilizing HSU student accounts.",
        "Bộ lọc thông minh: Tìm kiếm lớp học nhanh theo Khoa, Ngành và Số tín chỉ học phần.": "Smart Filter Engine: Quick class search by Faculty, Major and Course credit.",
        "Đăng ký Real-time: Đồng bộ sĩ số khả dụng trên Redis cache với thời gian phản hồi &lt;50ms.": "Real-time Registration: Sync available slots on Redis cache with response latency <50ms.",
        "Ràng buộc học vụ: Tự động chặn trùng lịch học, kiểm tra điều kiện môn tiên quyết đầy đủ.": "Academic Constraint Engine: Auto-block schedule overlap and verify prerequisites.",
        "Cổng quản trị Admin: Cho phép Phòng Đào tạo điều chỉnh sĩ số, đóng/mở đợt đăng ký và xuất dữ liệu Excel.": "Academic Admin Portal: Adjust capacities, toggle registration, and export lists to Excel.",
        "Tích hợp cổng thanh toán học phí trực tuyến (chuyển hướng ngân hàng).": "Online tuition payment gateway integration (redirected to bank website).",
        "Quản lý chi tiết điểm số các học kỳ và học bạ chính thức của sinh viên.": "Semester grade books and official student transcripts.",
        "Tích hợp sâu hệ thống quản lý học tập LMS Moodle HSU.": "Deep integration with HSU Moodle LMS.",
        "Ứng dụng di động độc lập (Native App) - chỉ hỗ trợ giao diện Web Responsive.": "Standalone native mobile applications (iOS/Android) - only responsive mobile Web.",
        "Bắt buộc hoàn thành nghiệm thu kiểm thử UAT trước ngày mở cổng chính thức; Nhân sự phát triển giới hạn (4 thành viên); Tương thích tốt với hạ tầng máy chủ sẵn có của HSU.": "UAT testing must be accepted before opening; development team limited (4 members); high compatibility with HSU's existing server infra.",
        "Xác định Stakeholders<br>Project Charter<br>Kick-off Meeting": "Stakeholders<br>Project Charter<br>Kick-off Meeting",
        "2.0 Planning (Kế Hoạch & Đường Cơ Sở)": "2.0 Planning (Base Schedule & Planning)",
        "Thảo luận vai trò, xây dựng Team Charter, Scope Statement, phân rã WBS và lập biểu đồ Gantt tiến độ chi tiết trong vòng 12 tuần làm việc.": "Define team charter, scope, WBS, and develop Gantt chart schedule for 12 weeks.",
        "3.0 Executing (Triển Khai Xây Dựng Hệ Thống)": "3.0 Executing (Software Execution Phase)",
        "Khảo sát nghiệp vụ, phân tích SRS, thiết kế UI/UX trên Figma, lập trình API Node.js và cache Redis, kết nối CSDL SQL, tổ chức kiểm thử UAT.": "SRS analysis, UI/UX Figma design, Node.js & Redis API backend coding, database SQL setup, UAT.",
        "4.0 Monitoring & Controlling (Giám Sát & Điều Phối)": "4.0 Monitoring & Controlling (Control & Directing)",
        "Theo dõi chặt chẽ tiến trình thực hiện theo đường găng (CPM), thực hiện báo cáo định kỳ và điều chỉnh phân phối tài nguyên hợp lý.": "Monitor critical path CPM closely, perform progress reports and allocate resources.",
        "5.0 Closing (Đóng Dự Án & Bàn Giao)": "5.0 Closing (Project Closure)",
        "Nhiệm thu phần mềm chính thức, lập báo cáo tổng kết đồ án, thuyết minh trước Hội đồng HSU và đúc kết các bài học kinh nghiệm.": "Official software sign-off, project closing report, HSU presentation & lessons learned.",
        "Môn học tiên quyết (Prerequisite check)": "Prerequisite checks",
        "Chặn trùng lịch học (Schedule conflict)": "Schedule conflict detection",
        "Giới hạn số tín chỉ (12 - 24 tín chỉ)": "Credit limit (12 - 24 credits)",
        "Khóa nút khi hết chỗ trống (Sĩ số = 0)": "Lock button when capacity = 0",
        "Tính năng gửi yêu cầu xin mở thêm sĩ số": "Send requests for class capacity expansion",
        "UI & Admin CCB": "UI & Admin CCB",
        "HTML5, CSS Design System, JavaScript ES6+ xử lý giao diện tối ưu, responsive đa thiết bị.": "HTML5, CSS Design System, JavaScript ES6+ optimized interface, responsive on all devices.",
        "Đồng bộ sĩ số thời gian thực thông qua Redis, tự động khóa nút khi lớp hết chỗ trống lập tức.": "Real-time capacity sync using Redis cache, instant button lock on zero slots.",
        "Xác thực MSSV bảo mật, chống tấn công Race Condition khi hàng vạn SV click đồng thời.": "Secure Student ID check, prevent Race Condition attacks when thousands click simultaneously.",
        "Tìm kiếm & Lọc học phần:": "Search & Filters:",
        "Lọc theo Khoa/Viện, Mã môn, Thứ và số Tín chỉ.": "Filter by Department, Course Code, Day, and Credits.",
        "Đăng ký nhanh 1-Click:": "1-Click Enrollment:",
        "Nhấp nút Đăng ký, hệ thống tự động kiểm tra trùng lịch và xác nhận ngay lập tức.": "Click to enroll; the system immediately validates schedule conflicts.",
        "Rút môn học linh hoạt:": "Flexible Course Drop:",
        "Cho phép hủy/rút môn học nhanh chóng trực tiếp trong thời gian mở cổng.": "Allows students to drop courses rapidly during open windows.",
        "Tối thiểu đăng ký 12 tín chỉ, tối đa 24 tín chỉ cho học kỳ.": "Minimum 12 credits, maximum 24 credits per semester.",
        "Chặn hoàn toàn trường hợp trùng lịch học hoặc thiếu môn tiên quyết.": "100% block schedule overlap or missing prerequisites.",
        "Sĩ số lớp": "Section Capacity",
        "42 / 45": "42 / 45",
        "35 / 40": "35 / 40",
        "30 / 30": "30 / 30",
        "✓ Đăng ký thành công lớp CSE301-1 (Độ trễ phản hồi: 34ms).": "✓ Successfully enrolled in CSE301-1 (Response latency: 34ms).",
        "Quản lý danh mục môn:": "Manage Course Catalog:",
        "Điều chỉnh sĩ số lớp học:": "Capacity Adjustments:",
        "Tăng chỉ tiêu tối đa cho các lớp khi lượng sinh viên có nhu cầu lớn.": "Increase class enrollment limits based on high demand.",
        "Đợt đăng ký tự động:": "Registration Windows:",
        "Thiết lập thời gian đóng/mở đợt đăng ký tự động trên hệ thống.": "Configure system to auto open/close registration.",
        "Xuất báo cáo thống kê:": "Export Reports:",
        "Xuất file danh sách lớp học và thống kê lớp học thiếu sĩ số.": "Download course enrollments and under-enrolled sections.",
        "Mọi thao tác quản lý dữ liệu (CUD) đều yêu cầu quyền hạn Admin cấp cao và được lưu nhật ký hoạt động (Audit Trail).": "All write operations (CUD) require Admin authorization and are logged in the Audit Trail.",
        "Độ bao phủ code API đạt trên 80% đối với các nghiệp vụ.": "API test coverage reaches over 80% for all services.",
        "PDT trường HSU ký duyệt thông qua 100% kịch bản kiểm thử.": "HSU Academic Office signs off 100% of testing scenarios.",
        "Thời gian phản hồi trung bình dưới ngưỡng 100ms.": "Average response latency below 100ms.",
        "Hệ cũ: 80% sập server": "Legacy: 80% server crash",
        "Hệ cũ: Rất cao": "Legacy: Very High",
        "Hệ thống đăng ký Real-time tải cao hoàn chỉnh cả 3 phân hệ.": "High-load real-time registration system complete with 3 portals.",
        "Hoàn thành đúng hạn Tuần 12 nhờ kiểm soát chặt chẽ đường găng CPM.": "Completed on-time at Week 12 thanks to critical path monitoring.",
        "Áp dụng quản trị rủi ro kỹ thuật & tài chính theo PMBOK.": "Technical & cost risk management implemented according to PMBOK.",
        "Việc viết Unit Test sớm giúp giảm thiểu 80% lỗi logic khi code.": "Writing unit tests early helps reduce 80% of logic bugs.",
        "Phối hợp nhóm chặt chẽ thông qua Trello và Git Pull Request.": "Tight team collaboration via Trello and Git Pull Request.",

        "Trích dẫn điều lệ:": "Charter Excerpt:",
        "Hợp lý hóa quy trình học vụ, giảm tải 90% thời gian đăng ký.": "Optimize academic workflows, saving 90% of enrollment time.",
        "Võ Duy Bình (Sponsor)": "Vo Duy Binh (Sponsor)",
        "Trần Bá Lợi (PM)": "Tran Ba Loi (PM)",
        "Dev & QA Team (Khang/Quang)": "Dev & QA Team (Khang/Quang)",
        "Phòng Đào Tạo HSU (Client)": "HSU Academic Office (Client)",
        "Ảnh hưởng: R.Cao | Quan tâm: Cao. Báo cáo mốc NPV/ROI định kỳ.": "Power: V.High | Interest: High. Report NPV/ROI milestones periodically.",
        "Ảnh hưởng: Cao | Quan tâm: R.Cao. Kiểm soát Gantt & CPM hàng tuần.": "Power: High | Interest: V.High. Monitor Gantt & CPM weekly.",
        "Ảnh hưởng: T.Bình | Quan tâm: Cao. Git commit & test coverage &gt;80%.": "Power: Med | Interest: High. Daily Git commits & test coverage >80%.",
        "Ảnh hưởng: R.Cao | Quan tâm: Cao. Khảo sát nghiệp vụ, UAT sớm.": "Power: V.High | Interest: High. Business analysis, early UAT testing.",
        "Ma Trận RACI Phân Định Trách Nhiệm (Team 3 RACI Matrix)": "Responsibility Assignment Matrix (Team 3 RACI Matrix)",
        "Nhiệm vụ WBS (Task)": "WBS Task Description",
        "Sponsor (Bình)": "Sponsor (Binh)",
        "PM / Lead Dev (Lợi)": "PM / Lead Dev (Loi)",
        "Backend Dev (Khang)": "Backend Dev (Khang)",
        "Designer / QA (Quang)": "Designer / QA (Quang)",
        "Client (PDT HSU)": "Client (PDT HSU)",
        "Ràng Buộc & Mốc UAT (Constraints & UAT Milestone)": "Constraints & UAT Milestone",
        "Hạn chót UAT (Critical):": "UAT Deadline (Critical):",
        "Xác thực MSSV:": "Student ID Verification:",
        "Đăng nhập bảo mật sử dụng tài khoản sinh viên HSU.": "Secure login utilizing student HSU accounts.",
        "Tìm kiếm lớp theo Khoa, Ngành và Số tín chỉ.": "Search sections by Faculty, Major, and Credit count.",
        "Lưu trữ sĩ số khả dụng trên Redis cache, phản hồi &lt;50ms.": "Store available slots on Redis cache, response latency <50ms.",
        "Chặn trùng tiết học, kiểm tra điều kiện tiên quyết.": "Auto-block class schedule overlap and verify prerequisites.",
        "Điều chỉnh sĩ số, mở đợt và xuất Excel cho PDT.": "Adjust capacities, toggle registration, and export lists to Excel.",
        "Quản lý điểm số học kỳ và học bạ của sinh viên.": "Semester grade books and official student transcripts.",
        "Tích hợp LMS Moodle (học tập và nộp bài trực tuyến).": "Integration with LMS Moodle for online coursework.",
        "Ứng dụng di động độc lập (Native App) - chỉ hỗ trợ Web di động.": "Standalone native mobile applications (iOS/Android) - only responsive mobile Web.",
        "1.0 INITIATING": "1.0 INITIATING",
        "2.0 PLANNING": "2.0 PLANNING",
        "3.0 EXECUTING": "3.0 EXECUTING",
        "4.0 CONTROLLING": "4.0 CONTROLLING",
        "5.0 CLOSING": "5.0 CLOSING",
        "Stakeholders<br>Project Charter<br>Kick-off Meeting": "Stakeholders<br>Project Charter<br>Kick-off Meeting",
        "Scope Statement<br>WBS & Gantt Chart<br>Risk & Quality Plan": "Scope Statement<br>WBS & Gantt Chart<br>Risk & Quality Plan",
        "SRS & Figma Design<br>Node.js API & DB<br>UAT & Promotion": "SRS & Figma Design<br>Node.js API & DB<br>UAT & Promotion",
        "EVM Performance<br>Critical Path (CPM)<br>Change Requests": "EVM Performance<br>Critical Path (CPM)<br>Change Requests",
        "Final Report<br>Presentation<br>Lessons Learned": "Final Report<br>Presentation<br>Lessons Learned",
        "Gặp sự cố nghẽn/sập mạng (Hệ cũ):": "Network crashes/congestion (Legacy system):",
        "Yêu cầu giao diện Web Responsive:": "Request responsive web layout (Mobile):",
        "Cập nhật chỗ trống thời gian thực:": "Request real-time slot availability updates:",
        "Tính năng xin mở thêm sĩ số": "Submit requests for extra capacity",
        "UI & Admin Approval": "UI & Admin Approval",
        "Mở rộng": "Extended",
        "Mô Hình Luồng Dữ Liệu & Giải Pháp Công Nghệ Real-time": "Real-time Tech Architecture & Data Flow Diagram",
        "📱 Client SPA (UI/UX)": "📱 Client SPA (UI/UX)",
        "🚀 Node.js Web API": "🚀 Node.js Web API",
        "💾 Redis Cache (Sĩ số)": "💾 Redis Cache (Slots)",
        "🗄️ SQL DB (Lưu trữ)": "🗄️ SQL DB (Storage)",
        "Tìm kiếm & Lọc:": "Smart Search & Filters:",
        "Lọc theo Khoa/Viện, Mã môn, Thứ và Tín chỉ.": "Filter by Department, Course Code, Day, and Credits.",
        "Nhấp nút Đăng ký, hệ thống kiểm tra trùng lịch học và xác nhận ngay.": "Click to enroll; the system immediately validates schedule conflicts.",
        "Cho phép rút môn học nhanh trong đợt mở đăng ký.": "Allows students to drop courses rapidly during open windows.",
        "Hệ Thống Quy Tắc Đăng Ký": "Registration Rule Engine",
        "Tối thiểu 12 tín chỉ, tối đa 24 tín chỉ học kỳ.": "Minimum 12 credits, maximum 24 credits per semester.",
        "Chặn 100% trùng tiết, trùng thứ hoặc thiếu môn tiên quyết.": "100% block schedule overlap or missing prerequisites.",
        "🎓 Cổng Đăng Ký Học Phần HSU": "🎓 HSU Course Registration Portal",
        "● Live Connection": "● Live Connection",
        "Sinh viên:": "Student Name:",
        "MSSV:": "Student ID:",
        "Tín chỉ:": "Credits:",
        "Tên lớp học phần": "Class Section Name",
        "Tín chỉ": "Credits",
        "Sĩ số": "Capacity",
        "Thao tác": "Action",
        "Quản trị dự án PM": "Software Project Management",
        "Kiểm thử phần mềm": "Software Testing",
        "Cơ sở dữ liệu NoSQL": "NoSQL Database",
        "Hủy": "Drop",
        "Đầy": "Full",
        "✓ Đăng ký thành công lớp CSE301-1 (Độ trễ: 34ms).": "✓ Successfully enrolled in CSE301-1 (Latency: 34ms).",
        "Quyền Hạn Ban Quản Trị Học Vụ": "Academic Administration Capabilities",
        "Quản lý môn học:": "Manage Course Catalog:",
        "Thêm mới, sửa đổi thông tin các môn học và số tín chỉ cơ sở.": "Add or update course details, credits, and syllabus.",
        "Điều chỉnh sĩ số:": "Capacity Adjustments:",
        "Tăng chỉ tiêu tối đa cho các lớp khi lượng sinh viên có nhu cầu cao.": "Increase class enrollment limits based on demand.",
        "Đợt đăng ký:": "Registration Windows:",
        "Thiết lập đóng/mở đợt đăng ký tự động theo cấu hình hệ thống.": "Configure system to auto open/close registration.",
        "Xuất báo cáo:": "Export Reports:",
        "Xuất file danh sách lớp học và thống kê lớp thiếu sĩ số.": "Download course enrollments and under-enrolled sections.",
        "Ghi chú bảo mật:": "Security Notice:",
        "Mọi thao tác quản lý dữ liệu (CUD) đều yêu cầu quyền hạn Admin và được log vào Audit Trail.": "All write operations (CUD) require Admin authorization and are logged in the Audit Trail.",
        "🔑 Cổng Admin Phòng Đào Tạo HSU": "🔑 HSU Academic Admin Portal",
        "ADMIN MODE": "ADMIN MODE",
        "Môn mở": "Open Classes",
        "Tổng SV": "Total Students",
        "Trạng thái đợt": "Enrollment Status",
        "48 Lớp": "48 Sections",
        "14,250 lượt": "14,250 users",
        "Đang mở": "Open",
        "Sĩ số hiện tại": "Current Enrollment",
        "42/45 (Đang tăng)": "42/45 (Increasing)",
        "35/40": "35/40",
        "Sửa": "Edit",
        "📥 Xuất Excel lớp HP": "📥 Export Class List",
        "🔒 Đóng cổng Đ.Ký": "🔒 Close Enrollment",
        "Unit Test Coverage:": "Unit Test Coverage:",
        "Độ bao phủ code API đạt &gt;80%.": "API test coverage reaches >80%.",
        "UAT Sign-off:": "UAT Sign-off:",
        "PDT HSU duyệt 100% kịch bản.": "HSU Academic Office signs off 100% of scenarios.",
        "API Latency Target:": "API Latency Target:",
        "Phản hồi trung bình dưới 100ms.": "Average response latency below 100ms.",
        "Coverage Đạt": "Coverage Passed",
        "Độ trễ API": "API Latency",
        "Kế Hoạch Mua Sắm Bản Quyền & Thiết Bị": "Infrastructure Licenses & Hardware Procurement Plan",
        "Cấu hình / Thông số": "Configuration / SLA",
        "Thực hiện hạ tầng cloud HSU": "Execute cloud infrastructure for HSU",
        "Kiểm Thử Tải Cao (Load Test Report - 15,000 Users)": "High Load Performance Testing (Load Test Report - 15,000 Users)",
        "Chỉ Số": "KPI",
        "Thực Tế": "Actual",
        "SLA Đề Ra": "SLA Target",
        "Kết Quả": "Result",
        "Tải đồng thời": "Concurrent Load",
        "Độ trễ phản hồi": "Response Latency",
        "Tỷ lệ lỗi API": "API Error Rate",
        "Tải CPU / RAM": "CPU / RAM Load",
        "Đo Lường Hiệu Quả Cải Tiến (Before vs After)": "Improvement Margin Measurement (Before vs After)",
        "⏱️ Thời gian đăng ký trung bình": "⏱️ Average Enrollment Time",
        "Hệ cũ: 15 phút": "Legacy: 15 minutes",
        "Hệ mới: 1.5 phút (-90%)": "New Portal: 1.5 minutes (-90%)",
        "💥 Tỷ lệ sập mạng giờ cao điểm": "💥 Peak Hour System Crash Rate",
        "Hệ cũ: 80%": "Legacy: 80%",
        "Hệ mới: 0.0% (Trơn tru)": "New Portal: 0.0% (Smooth)",
        "💰 Chi phí vận hành phát sinh": "💰 Operational Costs Savings",
        "Hệ cũ: Cao": "Legacy: High",
        "Tiết kiệm $40k/năm": "Saved $40k/year",
        "🎯 Hệ thống đã nghiệm thu xuất sắc & bàn giao chính thức!": "🎯 System successfully accepted and officially delivered!",
        "CẢM ƠN HỘI ĐỒNG & THẦY CÔ ĐÃ LẮNG NGHE!": "THANK YOU FOR YOUR TIME AND ATTENTION!",
        "Q&A - Câu hỏi & Đóng góp ý kiến từ Hội đồng giám khảo | Nhóm 3 - HSU": "Q&A - Questions and comments from the evaluation committee | Team 3 - HSU",
        "Đúng Tiến Độ (On-Time)": "On-Time Delivery (On-Time)",
        "Đúng Ngân Sách (On-Budget)": "On-Budget Delivery (On-Budget)",
        "Hiệu Năng API Real-time": "Real-time API Performance",
        "Bảo Mật An Toàn (Secure)": "System Security (Secure)",

        "Slide Đồ Án Project | Risk & Schedule Management - HSU": "Project Slide Deck | Risk & Schedule Management - HSU",
        "Thuyết minh Đồ án (Lần 2): Risk and Schedule Management in the Online Course Registration System Construction Project": "Project Presentation (Phase 2): Risk and Schedule Management in the Online Course Registration System Construction Project",
        "THUYẾT MINH ĐỒ ÁN THỰC HÀNH (LẦN 2)": "PRACTICAL PROJECT PRESENTATION (PHASE 2)",
        "Báo cáo Đồ án Thực hành (Phần 2 - 5): Planning, Executing, Monitoring/Controlling & Closing | Hệ thống Đăng ký Học phần Trực tuyến HSU": "Practical Project Report (Phase 2 - 5): Planning, Executing, Monitoring/Controlling & Closing | HSU Online Course Registration System",
        "Môn học / Mã lớp:": "Course / Class ID:",
        "Lớp chuyên đề Quản trị Dự án Phần mềm HSU (Nhóm 3)": "HSU Software Project Management Specialization (Team 3)",
        "Nhấp chuột hoặc dùng phím": "Click or use",
        "để bắt đầu": "to start",
        "Bối Cảnh & Bài Toán Đặt Ra": "Project Background & Objectives",
        "Thực trạng quy trình đăng ký học phần tại các trường đại học và mục tiêu dự án HSU:": "Current situation of course registration at universities and HSU project goals:",
        "Hạn chế của Hệ thống Cũ": "Limitations of legacy system",
        "1. Tốc độ xử lý chậm & Nghẽn mạng": "1. Slow speed & Network congestion",
        "Thường xuyên sập server hoặc treo ứng dụng khi hàng vạn sinh viên truy cập đồng thời vào giờ mở cổng.": "Frequently experience network crashes or loading failures during peak registration hours.",
        "2. Khó theo dõi số lượng chỗ trống": "2. Difficulty tracking remaining slots",
        "Dữ liệu không cập nhật real-time khiến sinh viên đăng ký trùng lớp hoặc hết chỗ mà không biết.": "Non-real-time slot updates cause students to enroll in full or conflicting classes.",
        "3. Quản lý dữ liệu thủ công": "3. Manual data administration",
        "Phòng Đào tạo khó điều chỉnh danh sách môn học, phòng học và xử lý đơn xin mở thêm lớp.": "Academic affairs staff struggle to adjust catalogs, room schedules, and open extra sections manually.",
        "Giải Pháp Hệ Thống Mới": "Proposed new solution",
        "Kiến trúc Tải cao:": "High Load Architecture:",
        "Tối ưu API Real-time xử lý hàng ngàn request/giây với độ trễ &lt;100ms.": "Optimize real-time APIs to handle thousands of requests/sec with latency <100ms.",
        "Tự động kiểm tra điều kiện:": "Automated Constraint Checks:",
        "Kiểm tra trùng thời khóa biểu, môn tiên quyết và giới hạn tín chỉ ngay khi nhấp nút.": "Auto-validate schedule overlays, prerequisites, and credit limits upon clicking.",
        "Phân quyền đa cổng:": "Multi-portal Role Separation:",
        "Cổng Sinh viên, Cổng Phòng Đào tạo & Dashboard Quản trị Tiến độ PM.": "Dedicated Student Portal, Admin Portal, and PM Schedule Dashboard.",
        "Bảng So Sánh Chỉ Số Hiệu Năng Hệ Thống (Old vs New HSU Enrollment System)": "System Performance Metrics Comparison Table (Old vs New HSU Enrollment System)",
        "Chỉ số đánh giá": "Key Performance Indicator (KPI)",
        "Hệ thống cũ (Web portal)": "Legacy Web Portal",
        "Hệ thống mới (Real-time Mobile App & Web API)": "Real-time Mobile App & Web API",
        "Hiệu quả cải tiến": "Improvement Margin",
        "Tải tối đa (Max Concurrent Users)": "Max concurrent load (Users)",
        "~1,500 kết nối đồng thời (Sập/Treo server)": "~1,500 concurrent connections (Server crashes)",
        "&gt;15,000 kết nối đồng thời": ">15,000 concurrent connections",
        "Tăng gấp 10 lần khả năng chịu tải": "10x capacity improvement",
        "Độ trễ phản hồi (Response Latency)": "Response Latency",
        "2,500ms - 5,000ms khi nghẽn mạng": "2,500ms - 5,000ms under load",
        "Xử lý phản hồi tức thì": "Instant responses",
        "Cập nhật sĩ số lớp học": "Class capacity updates",
        "Chậm (Độ trễ 5 - 10 phút, dễ bị đăng ký vượt chỉ tiêu)": "Slow (5-10m delay, prone to over-enrollment)",
        "Real-time (Tức thì bằng Event-driven)": "Real-time (Instant Event-driven updates)",
        "Tránh 100% việc đăng ký vượt chỉ tiêu lớp học": "100% prevention of class over-enrollment",
        "Độ tương thích thiết bị": "Device compatibility",
        "Chỉ hỗ trợ tốt trên Desktop/Laptop": "Only supports Desktop/Laptop well",
        "Đa nền tảng (Responsive Web & Mobile App)": "Cross-platform (Responsive Web & Mobile App)",
        "Sinh viên đăng ký mọi lúc, mọi nơi": "Students register anytime, anywhere",
        
        // Slide 3: Initiating (Splitting keys for strong selectors)
        "Khởi Tạo Dự Án & Xác Định Stakeholders": "Project Initiation & Stakeholder Analysis",
        "Điều lệ dự án (Project Charter) chính thức và chiến lược quản lý bên liên quan (Stakeholders):": "Official Project Charter and stakeholder management strategy:",
        "Điều Lệ Dự Án (Project Charter)": "Project Charter",
        "Ngày ký duyệt:": "Approval Date:",
        "12/07/2026 chính thức ban hành.": "Official release on 12/07/2026.",
        "Nhà tài trợ (Sponsor):": "Project Sponsor:",
        "Võ Duy Bình (MSSV: 22301500) duyệt ngân sách.": "Vo Duy Binh (Student ID: 22301500) - Budget Approver.",
        "Quản trị dự án (PM):": "Project Manager (PM):",
        "Trần Bá Lợi (MSSV: 22300236) điều phối.": "Tran Ba Loi (Student ID: 22300236) - Project Coordinator.",
        "Ngân sách tối đa:": "Maximum Budget:",
        "150,000 USD (Ngân sách cơ sở: 140,000 USD).": "$150,000 USD (Baseline budget: $140,000 USD).",
        "Mục tiêu cốt lõi:": "Core Project Goal:",
        "Tối ưu khả năng chịu tải trên 15,000 kết nối đồng thời với độ trễ phản hồi dưới 100ms.": "Support over 15,000 concurrent connections with response latency under 100ms.",
        "Danh Sách & Chiến Lược Quản Lý Stakeholders": "Stakeholder Register & Strategy",
        
        "Võ Duy Bình (Sponsor / CEO):": "Vo Duy Binh (Sponsor / CEO):",
        "Báo cáo tiến độ theo mốc quan trọng, làm rõ chỉ số NPV/ROI dự án.": "Reports on key milestones and highlights project NPV/ROI.",
        "Trần Bá Lợi (Project Manager):": "Tran Ba Loi (Project Manager):",
        "Họp giao ban tiến độ hàng tuần, kiểm soát chặt chẽ WBS & đường găng CPM.": "Hosts weekly progress meetings and controls WBS CPM critical path.",
        "Hồng Bảo Khang & Nguyễn Thanh Quang (Dev Team):": "Hong Bao Khang & Nguyen Thanh Quang (Dev Team):",
        "Kiểm soát mã nguồn trên Git hàng ngày, bắt buộc đính kèm Unit Test.": "Pushes code to Git daily with mandatory Unit Tests.",
        "Phòng Đào tạo HSU & Sinh viên (Client / End User):": "HSU Academic Affairs & Students (Client / End User):",
        "Khảo sát nghiệp vụ chi tiết, tổ chức nghiệm thu thử nghiệm UAT sớm.": "Detailed requirements survey and early UAT.",
        
        // Slide 4: Scope
        "Phạm Vi Dự Án (Scope Statement) & Ràng Buộc": "Project Scope Statement & Constraints",
        "Xác định rõ các hạng mục thuộc phạm vi (In-Scope), ngoài phạm vi (Out-of-Scope) và các ràng buộc cốt lõi:": "Detailed In-Scope and Out-of-Scope boundaries along with core project constraints:",
        "Trong Phạm Vi (In-Scope)": "In-Scope Boundaries",
        "Đăng nhập & Xác thực:": "Login & Authentication:",
        "Đăng nhập hệ thống bằng tài khoản sinh viên HSU (MSSV).": "Access portal using HSU student account credentials (MSSV).",
        "Bộ lọc thông minh:": "Dynamic Search & Filters:",
        "Tìm kiếm học phần mở theo Khoa, Ngành và Số tín chỉ.": "Find open classes by Department, Major, and Credit count.",
        "Đăng ký Real-time:": "Real-time Registration:",
        "Xử lý ghi danh & hủy môn học tức thời, sĩ số cập nhật trong 50ms.": "Execute class enrollment/drop instantly with seat updates in 50ms.",
        "Ràng buộc học vụ:": "Academic Constraints Check:",
        "Tự động chặn trùng lịch học, kiểm tra môn tiên quyết và giới hạn 12 - 24 tín chỉ.": "Auto-prevent schedule conflict, check prerequisite course status, and 12-24 credit limit.",
        "Cổng Admin:": "Academic Portal (Admin):",
        "Quản lý danh mục lớp, điều chỉnh sĩ số phòng và xuất danh sách Excel cho Phòng Đào tạo.": "Manage class lists, adjust room capacities, and export rosters to Excel for affairs office.",
        "Ngoài Phạm Vi (Out-of-Scope)": "Out-of-Scope Boundaries",
        "Cổng thanh toán học phí trực tuyến (chuyển hướng ngân hàng).": "Online tuition fee payment gateway (redirected to bank integration).",
        "Quản lý điểm số học kỳ và bảng điểm sinh viên.": "Semester grades and student transcript records management.",
        "Tích hợp hệ thống quản lý học tập LMS Moodle." : "Integration with LMS Moodle learning management system.",
        "Ứng dụng di động độc lập (Native Mobile App) - chỉ hỗ trợ Web di động responsive.": "Standalone native mobile apps (only responsive mobile web is supported).",
        "Ràng Buộc Dự Án (Constraints)": "Project Constraints",
        "Hoàn thành kiểm thử UAT trước ngày mở cổng chính thức; Nhân sự phát triển nhỏ (4 người); Tương thích hạ tầng máy chủ trường HSU.": "Complete UAT before portal opens; Small dev team (4 members); Compatible with HSU server infra.",
        
        // Slide 5: WBS
        "Cấu Trúc WBS & Scope Dự Án (Phần 2 - 5)": "WBS Structure & Project Scope (Phases 2 - 5)",
        "Phân định phạm vi thực hiện Đồ án từ Phần 2 (Lập kế hoạch) đến Phần 5 (Đóng dự án):": "Scope of project execution from Phase 2 (Planning) to Phase 5 (Closing):",
        "2.0 Planning (Lập Kế Hoạch)": "2.0 Planning (Project Planning)",
        "Tổ chức họp nhóm, xây dựng Team Contract, Scope Statement, thiết lập WBS 2.0-5.0, ước tính thời lượng & lập biểu đồ Gantt tiến độ 12 tuần.": "Host meetings, draft Team Contract, Scope Statement, establish WBS 2.0-5.0, estimate durations & build 12-week Gantt schedule.",
        "3.0 Executing (Triển Khai Phần Mềm)": "3.0 Executing (Software Execution)",
        "Khảo sát yêu cầu người dùng, thiết kế giao diện UI/UX, lập trình Backend/Frontend Cổng Sinh viên & Phòng Đào tạo HSU.": "Survey user requirements, design UI/UX, program Backend/Frontend HSU Student & Admin Portals.",
        "4.0 Monitoring & Controlling (Giám Sát)": "4.0 Monitoring & Controlling (Control)",
        "Theo dõi tiến độ theo đường găng (Critical Path), đánh giá báo cáo tiến độ tuần & điều chỉnh dự phòng rủi ro.": "Track critical path schedule, assess weekly reports & adjust risk contingencies.",
        "5.0 Closing (Hoàn Thành & Đóng Dự Án)": "5.0 Closing (Project Closing)",
        "Nghiệm thu phần mềm, lập Báo cáo tổng kết dự án, thuyết minh kết quả & đúc kết bài học kinh nghiệm (Lessons Learned).": "Deliver software, compile Project Closing Report, present outcomes & document lessons learned.",
        
        // Slide 6: SRS
        "Khảo Sát Người Dùng & Đặc Tả Yêu Cầu (SRS)": "User Surveys & Requirements Specification (SRS)",
        "Kết Quả Khảo Sát (500 Sinh Viên HSU)": "Survey Results (500 HSU Students)",
        "85% Sinh viên:": "85% Students:",
        "Thường xuyên gặp lỗi sập mạng hoặc không thể truy cập vào giờ cao điểm của kỳ đăng ký cũ.": "Frequently experience network crashes or loading failures during peak registration hours.",
        "92% Sinh viên:": "92% Students:",
        "Mong muốn có giao diện di động (Responsive) để đăng ký học phần mọi lúc mọi nơi.": "Demand responsive mobile interface to register for classes anytime, anywhere.",
        "78% Sinh viên:": "78% Students:",
        "Yêu cầu tính năng hiển thị chỗ trống khả dụng theo thời gian thực (Real-time).": "Require real-time capacity and remaining slots display features.",
        "Chỉ Số Khảo Sát (Key Metrics)": "Survey Indicators (Key Metrics)",
        "Nghẽn mạng": "Congestion",
        "Cần Mobile": "Need Mobile",
        "Real-time": "Real-time",
        "Bảng Đặc Tả Nghiệp Vụ SRS (Core Requirements)": "SRS Core Requirements Specification Table",
        "Mã Yêu Cầu": "Requirement ID",
        "Mô Tả Nghiệp Vụ": "Business Description",
        "Loại Kiểm Tra": "Validation Type",
        "Mức Độ": "Priority",
        "Môn tiên quyết (Prerequisite check)": "Prerequisite course check",
        "Bắt buộc": "Mandatory",
        "Chặn trùng lịch (Schedule conflict)": "Block schedule conflicts",
        "Giới hạn tín chỉ (12 - 24 tín chỉ)": "Credit limits (12-24 credits)",
        "Khóa lớp khi hết chỗ (Sĩ số = 0)": "Close class when full (slots = 0)",
        
        // Slide 7: Tech Stack
        "Kiến Trúc & Giải Pháp Công Nghệ": "Architecture & Tech Stack",
        "HTML5, Vanilla CSS Design System, JavaScript ES6+ xử lý giao diện cực mượt, responsive 100%.": "HTML5, Vanilla CSS Design System, ES6+ JS for fluid layout, 100% responsive.",
        "Cập nhật sĩ số sinh viên real-time, tự động khóa nút khi môn học hết chỗ (0 slots).": "Real-time capacity updates, auto-disables button when class is full (0 slots).",
        "Áp dụng Shift-Left Security, xác thực MSSV, phòng chống xung đột lịch học & vượt tín chỉ.": "Enforce shift-left security, validate student ID, block conflicts & credit excess.",
        "Mô Hình Hoạt Động Xử Lý Đăng Ký Real-time": "Real-time Registration Flow Model",
        "Sinh viên gửi yêu cầu đăng ký ➔ Kiểm tra điều kiện môn học ➔ Trừ sĩ số khả dụng trong bộ nhớ ➔ Xử lý xung đột thời khóa biểu ➔ Xác nhận kết quả trong 50ms.": "Student requests registration ➔ Validate prerequisites ➔ Deduct seat capacity in memory ➔ Resolve schedule conflicts ➔ Confirm result in 50ms.",
        
        // Slide 8: Student Portal
        "Chức Năng Cổng Sinh Viên (Student Portal)": "Student Portal Features",
        "Lập kế hoạch học tập trước:": "Pre-planned Study List:",
        "Thêm sẵn các lớp mở từ email thông báo vào Kế hoạch học tập của sinh viên.": "Add opened classes from email notifications to the student's study plan in advance.",
        "Đăng ký nhanh 1-Click:": "1-Click Batch Registration:",
        "Đăng ký đồng loạt toàn bộ kế hoạch ngay khi cổng mở để giảm tải hệ thống, tránh sập mạng.": "Register all planned classes simultaneously when the portal opens to reduce system load and prevent crashes.",
        "Đăng Ký Học Phần Tốc Độ Cao": "High-Speed Course Registration",
        "Tìm kiếm & Lọc thông minh:": "Smart Search & Filters:",
        "Lọc theo Khoa/Viện, Mã môn, Thứ trong tuần và Số tín chỉ.": "Filter by department, subject code, day of week, and credit count.",
        "Đăng ký 1-Click:": "1-Click Registration:",
        "Nhấp nút Đăng ký, hệ thống lập tức kiểm tra trùng lịch học và xác nhận môn.": "Click register button, system immediately validates schedule conflicts and confirms.",
        "Hủy môn linh hoạt:": "Flexible Drop Subject:",
        "Cho phép rút môn học trong thời gian mở đăng ký.": "Allows dropping registered courses during open schedule windows.",
        "Thời Khóa Biểu & Chương Trình Đào Tạo": "Schedule & Curriculum Management",
        "Thời khóa biểu trực quan:": "Visual Schedule Grid:",
        "Hiển thị lịch học dạng lưới theo tuần (Thứ 2 ➔ Chủ Nhật).": "Displays weekly timetable in a grid layout (Monday to Sunday).",
        "Kiểm tra tín chỉ:": "Credit Limit Check:",
        "Theo dõi tổng số tín chỉ đã đăng ký (Giới hạn tối đa 24 tín chỉ/học kỳ).": "Track total registered credits (Cap of 24 credits/semester).",
        "Lịch sử giao dịch:": "Transaction Log History:",
        "Lưu trữ chi tiết nhật ký đăng ký/hủy môn có dấu thời gian.": "Records detailed registration/drop history with timestamps.",
        "Hệ Thống Quy Tắc & Ràng Buộc Đăng Ký (Enrollment Business Rules)": "Enrollment Rules & Constraints Engine",
        "Giới hạn Tín chỉ": "Credit Limit Constraints",
        "Tối thiểu: 12 tín chỉ.": "Minimum: 12 credits.",
        "Tối đa: 24 tín chỉ (đối với học kỳ chính).": "Maximum: 24 credits (regular semester).",
        "Môn học tiên quyết": "Prerequisite Course Rules",
        "Bắt buộc hoàn thành môn trước (Ví dụ: Math 1 phải đỗ mới được học Math 2).": "Must pass prerequisite course first (e.g., pass Math 1 to register Math 2).",
        "Xung đột Lịch học": "Schedule Overlay Validation",
        "Hệ thống tự động chặn đăng ký các môn trùng lịch (Thứ, Tiết).": "The engine automatically blocks registration for overlapping days/slots.",
        "Hết Sĩ số (Full slots)": "Class Capacity Limit",
        "Tự động khóa nút Đăng ký khi sĩ số khả dụng đạt 0.": "Auto-disables registration button once available capacity hits 0.",
        
        // Slide 9: Admin Portal
        "Chức Năng Cổng Phòng Đào Tạo (Admin Portal)": "Academic Affairs Portal (Admin Portal)",
        "1. Quản lý Danh mục Môn học": "1. Course Catalog Directory",
        "Thêm mới, chỉnh sửa thông tin học phần, chỉ định số tín chỉ và giảng viên phụ trách.": "Create, edit course profiles, set credits, and assign faculty.",
        "2. Điều chỉnh Sĩ số & Phòng học": "2. Seat Capacity & Room Adjustments",
        "Tăng/giảm chỉ tiêu số lượng sinh viên tối đa cho từng lớp học phần theo thực tế nhu cầu.": "Increase/decrease student enrollment limits on active sections as needed.",
        "3. Bật / Tắt Đợt Đăng ký": "3. Portal Access Scheduler",
        "Đóng hoặc mở các đợt đăng ký học phần chính thức / bổ sung dành cho từng khóa sinh viên.": "Enable or disable main/contingency registration windows per batch.",
        "4. Thống kê & Xuất Báo cáo": "4. Reports & Excel Rosters",
        "Xuất danh sách sinh viên đăng ký từng lớp, thống kê các môn học bị hủy do thiếu sĩ số tối thiểu.": "Export student class lists, track sections cancelled due to low enrollment.",
        
        // Slide 10: PM Dashboard
        "Dashboard Quản Trị Tiến Độ Dự Án (PM Portal)": "Schedule Control Dashboard (PM Portal)",
        "Công cụ quản lý tiến độ 12 tuần dành cho Trưởng dự án (Project Manager):": "12-week schedule management tool for the Project Manager (PM):",
        "Biểu Đồ Gantt Tiến Độ 12 Tuần": "12-Week WBS Gantt Chart Schedule",
        "Trực quan hóa tất cả 7 mốc công việc từ Thu thập yêu cầu, Lập trình Backend/Frontend, Thiết kế Database, Tích hợp, Kiểm thử đến Deploy bàn giao.": "Visualizes all 7 WBS tasks: Requirements, Backend/Frontend coding, Database, Integration, UAT, and Handover.",
        "Theo Dõi Tỷ Lệ Hoàn Thành": "Completion Rate Tracking",
        "Hiển thị chỉ số hoàn thành tổng thể (85%), cảnh báo công việc chậm tiến độ và kiểm soát ngày bàn giao dự kiến (Tuần 12).": "Shows overall progress (85%), highlights task delay status, and monitors expected handover (Week 12).",
        "Báo Cáo Tiến Độ Công Việc Lập Trình (WBS Task Execution Report)": "Programming Milestones Progress (WBS Task Execution Report)",
        "Mã WBS": "WBS Code",
        "Nội dung công việc chính": "Key Work Deliverable",
        "Thời lượng dự kiến": "Planned Duration",
        "Tiến độ hoàn thành": "Completion Progress",
        "Trạng thái": "Status",
        "Khởi tạo & Lập Kế hoạch (Project Charter, Kế hoạch quản lý rủi ro)": "Initiation & Planning (Project Charter, Risk Management)",
        "Tuần 1 - 2": "Weeks 1 - 2",
        "Hoàn thành": "Complete",
        "Phân tích yêu cầu & Thiết kế Database (ERD, Relational Schema)": "Requirements Analysis & Database Design (ERD, Schema)",
        "Tuần 3 - 4": "Weeks 3 - 4",
        "Lập trình API Backend (Node.js/Express, Real-time engine)": "Backend API Coding (Node.js/Express, Real-time)",
        "Tuần 5 - 8": "Weeks 5 - 8",
        "Đang chạy": "Running",
        "Lập trình giao diện Frontend (Responsive Student & Admin Portals)": "Frontend UI Coding (Responsive Student & Admin Portals)",
        "Tuần 6 - 9": "Weeks 6 - 9",
        "Tích hợp hệ thống, Kiểm thử & Đóng dự án (UAT, Lessons Learned)": "Integration, Testing & Project Closing (UAT, Lessons Learned)",
        "Tuần 10 - 12": "Weeks 10 - 12",
        "Chưa bắt đầu": "Not Started",
        
        // Slide 11: EVM
        "Báo Cáo Hiệu Suất EVM & Quản Lý Chi Phí": "EVM Performance & Cost Control",
        "Phân tích giá trị thu được (Earned Value Management) tại thời điểm báo cáo ngày 28/08/2026:": "Earned Value Management (EVM) analysis as of status date August 28, 2026:",
        "Các Chỉ Số Đo Lường Cơ Bản (EVM Metrics)": "Key EVM Performance Metrics",
        "BAC (Ngân sách hoàn thành)": "BAC (Budget at Completion)",
        "PV (Giá trị kế hoạch)": "PV (Planned Value)",
        "EV (Giá trị thu được)": "EV (Earned Value)",
        "AC (Chi phí thực tế)": "AC (Actual Cost)",
        "Xem Chi Tiết Phân Bổ Nhân Lực & Chi Phí": "View Effort & Cost Allocation Details",
        "Đánh Giá Độ Lệch & Hiệu Suất": "Variance & Efficiency Evaluation",
        "SV (Độ lệch tiến độ):": "SV (Schedule Variance):",
        "(Chậm tiến độ nhẹ)": "(Minor Schedule Delay)",
        "CV (Độ lệch chi phí):": "CV (Cost Variance):",
        "(Vượt ngân sách nhẹ)": "(Minor Budget Overrun)",
        "SPI (Hiệu suất tiến độ):": "SPI (Schedule Performance Index):",
        "CPI (Hiệu suất chi phí):": "CPI (Cost Performance Index):",
        "Dự Báo Cuối Dự Án (EVM Forecasting)": "End of Project Forecasting",
        "EAC (Ước tính khi hoàn thành):": "EAC (Estimate at Completion):",
        "(Dự kiến vượt mức chi phí cơ sở ban đầu khoảng 1.2%).": "(Projected to overrun baseline cost by approximately 1.2%).",
        "VAC (Chênh lệch khi hoàn thành):": "VAC (Variance at Completion):",
        "TCPI (Chỉ số hiệu suất cần đạt):": "TCPI (To-Complete Performance Index):",
        "(Để hoàn thành dự án trong ngân sách BAC còn lại, nhóm phải nâng cao năng suất thêm 4% trong giai đoạn còn lại).": "(To complete project within original BAC budget, productivity must increase by 4% for remaining tasks).",
        "Biện pháp khắc phục (Corrective Actions):": "Mitigation Actions (Corrective Actions):",
        "Crashing (Tăng ca/Bổ sung):": "Crashing (Adding Resources):",
        "Tuyển thêm lập trình viên Backend để hỗ trợ viết API lõi cho Module 4.6.": "Hire additional Backend Developer to support core API Module 4.6.",
        "Fast-tracking (Chồng chéo):": "Fast-tracking (Overlapping):",
        "Viết trước các Test case kiểm thử UAT song song với giai đoạn cuối coding.": "Draft UAT test cases in parallel with coding final stages.",
        
        // Slide 12: Quality & Procurement
        "Kế Hoạch Quản Lý Chất Lượng & Mua Sắm": "Quality & Procurement Management Plan",
        "Quản Lý Chất Lượng (Quality DoD)": "Quality Management (DoD)",
        "Độ bao phủ API code (Coverage) đạt trên 80% đối với các nghiệp vụ cốt lõi.": "API code coverage exceeds 80% for core business modules.",
        "Đạt biên bản nghiệm thu UAT 100% từ cán bộ phòng đào tạo HSU.": "Passed UAT with 100% acceptance sign-off from HSU affairs staff.",
        "Độ trễ phản hồi:": "Response latency:",
        "Giữ thời gian phản hồi trung bình của cổng dịch vụ dưới 100ms.": "Maintains average portal response latency under 100ms.",
        "Chỉ Tiêu Chất Lượng QA/QC": "Quality KPIs (QA/QC)",
        "Chi Tiết Mua Sắm Thiết Bị & Bản Quyền Hạ Tầng": "Procurement Plan & Infrastructure Costs",
        "Hạng Mục Mua Sắm": "Procurement Item",
        "Thông Số Cấu Hình": "Specifications",
        "Chi Phí Dự Kiến": "Estimated Cost",
        "1.500.000 VND / tháng": "1,500,000 VND / month",
        "800.000 VND / tháng": "800,000 VND / month",
        "Chứng chỉ bảo mật SSL": "SSL Security Certificate",
        "Sectigo Wildcard SSL (Mã hóa 256-bit)": "Sectigo Wildcard SSL (256-bit Encryption)",
        "600.000 VND / năm": "600,000 VND / year",
        "Cộng chi phí cơ sở hạ tầng": "Total Infrastructure Cost",
        "Trích quỹ dự phòng phát triển dự án": "Drawn from project contingency reserves",
        
        // Slide 13: CPM Simulator
        "Trình Giả Lập Đường Găng (Critical Path Simulator)": "Critical Path Simulator & Delay Visualizer",
        "Điều chỉnh Trễ tiến độ (Tuần)": "Adjust Work Delay (Weeks)",
        "Khôi phục": "Reset",
        "🔴 1. Khảo sát & Yêu cầu": "🔴 1. Survey & Requirements",
        "Trễ: 0 tuần": "Delay: 0 weeks",
        "Độ dài gốc: 2 tuần": "Original: 2 weeks",
        "Đệm (Float): 0 tuần": "Float: 0 weeks",
        "🔴 2. Lập trình Backend": "🔴 2. Backend Coding",
        "Độ dài gốc: 4 tuần": "Original: 4 weeks",
        "🟢 3. Lập trình Frontend": "🟢 3. Frontend Coding",
        "Độ dài gốc: 3 tuần": "Original: 3 weeks",
        "Đệm (Float): 1 tuần": "Float: 1 week",
        "🟢 4. Thiết kế Database": "🟢 4. Database Design",
        "Đệm (Float): 2 tuần": "Float: 2 weeks",
        "Biểu đồ Gantt trực quan hóa trễ tiến độ": "Gantt Chart Delay Visualization",
        "Tác vụ": "Task Name",
        "1. Yêu cầu": "1. Requirements",
        "🎉 Tiến độ dự án HSU:": "🎉 HSU Project Progress:",
        "Bàn giao ở Tuần 12 (Đúng hạn)": "Handover at Week 12 (On Time)",
        "Dự án đang diễn ra đúng tiến độ cơ sở (Baseline). Hãy thử điều chỉnh thanh trượt ở cột trái để thấy sự thay đổi.": "Project is running on baseline schedule. Try adjusting sliders on the left column to see the impact.",
        
        // Slide 14: Testing & Benefits
        "Kiểm Thử Hệ Thống & Đo Lường Lợi Ích": "System Testing & Benefits Realization",
        "Báo Cáo Kiểm Thử Tải Cao (Load Test Report - 15,000 Users)": "Load Testing Execution Report (15,000 Users)",
        "Chỉ Số Hiệu Năng": "Performance KPI",
        "Kết Quả Thực Tế": "Actual Result",
        "Ngưỡng SLA Cho Phép": "Allowable SLA",
        "Trạng Thế": "Status",
        "Trạng Thái": "Status",
        "ĐẠT": "PASS",
        "Error Rate (Tỷ lệ lỗi)": "Error Rate (Failure %)",
        "Đo Lường Hiệu Quả Đạt Được": "Benefits Realization & Efficiency",
        "Tiết kiệm thời gian:": "Time savings:",
        "Thời gian đăng ký học phần trung bình giảm từ 15 phút xuống 1.5 phút (Giảm 90%).": "Average student registration duration drops from 15 minutes to 1.5 minutes (90% reduction).",
        "Độ ổn định hệ thống:": "System stability:",
        "100% không xảy ra sự cố sập server hay mất kết nối cơ sở dữ liệu.": "100% uptime, free of server crashes or database connection loss.",
        "Tiết kiệm chi phí:": "Cost savings:",
        "Tiết kiệm khoảng 40,000 USD/năm chi phí điều phối lớp và xử lý sự cố học vụ thủ công.": "Saves approximately $40,000/year in manual course adjustments and support costs.",
        "Hệ thống nghiệm thu xuất sắc & Bàn giao chính thức!": "System passed acceptance tests & officially handed over!",
        
        // Slide 15: Risk Register
        "Quản Lý Rủi Ro Tiến Độ & Bảng Đăng Ký Rủi Ro": "Schedule Risk Management & Risk Register",
        "Ma Trận Phân Tích Rủi Ro (Risk Matrix Heatmap)": "Risk Matrix Heatmap",
        "Bảng Đăng Ký Theo Dõi & Ứng Phó Rủi Ro Chi Tiết (Project Risk Register)": "Detailed Project Risk Register & Action Plan",
        "Mã": "Code",
        "Phân loại": "Category",
        "Mô tả Rủi ro": "Risk Description",
        "Xác suất (P)": "Probability (P)",
        "Tác động (I)": "Impact (I)",
        "Hành động Ứng phó cụ thể": "Mitigation Response Action Plan",
        "Hạ tầng": "Infrastructure",
        "Nghẽn tải máy chủ khi mở cổng đăng ký môn học": "Server overload during peak registration hours",
        "Trung bình": "Medium",
        "Vừa": "Medium",
        "Rất cao": "Very High",
        "Thiết kế cơ chế Auto-scaling, cache Redis thông tin sĩ số lớp học.": "Configure Auto-scaling thresholds, cache seat capacity on Redis.",
        "Tiến độ": "Schedule",
        "Lập trình API Backend trễ tiến độ 2 tuần": "Backend API coding falls behind by 2 weeks",
        "Cao": "High",
        "Điều chuyển 1 nhân sự từ Frontend hỗ trợ, tăng ca (crashing).": "Reallocate 1 Frontend resource to Backend, apply crashing.",
        "Phạm vi": "Scope",
        "Phòng Đào tạo thay đổi/bổ sung quy chế môn tiên quyết": "Academic affairs office modifies prerequisite rules mid-project",
        "Thấp": "Low",
        "Áp dụng Change Control Board (CCB), họp xét duyệt tác động chi phí.": "Submit to Change Control Board (CCB), assess schedule/cost impact.",
        "Nhân lực": "Resources",
        "Lập trình viên chính nghỉ việc đột ngột giữa chừng": "Key backend developer resigns abruptly during coding",
        "Cross-training nhân sự chéo, cập nhật tài liệu kỹ thuật lên Git mỗi ngày.": "Conduct cross-training on modules, push code/docs to Git daily.",
        
        "Rò rỉ dữ liệu thông tin cá nhân sinh viên": "Personal student data leak or unauthorized access",
        "Mã hóa dữ liệu nhạy cảm, phân quyền truy cập nghiêm ngặt.": "Encrypt sensitive data, enforce strict roll-based access controls.",
        "Trễ tiến độ do ước lượng sai thời lượng WBS": "Schedule delay due to inaccurate WBS task estimations",
        "Thêm buffer thời gian dự phòng 3-5 ngày cuối, theo dõi sát sao Gantt Chart.": "Add 3-5 days of contingency buffer, track Gantt Chart closely.",
        "Thiếu kinh nghiệm lập trình Real-time Socket/Redis": "Lack of experience in programming real-time Socket/Redis modules",
        "Tổ chức training nội bộ, tham vấn ý kiến giảng viên hướng dẫn.": "Conduct internal training, consult project advisors and guides.",
        "Hạ tầng máy chủ trường không cho phép mở rộng linh hoạt": "University server infrastructure cannot be scaled dynamically",
        "Chấp nhận hiện tại, lên kế hoạch nâng cấp phần cứng sau khi go-live.": "Accept status quo, plan hardware upgrade cycle post go-live.",
        "P": "P",
        "I": "I",
        "Bảo mật": "Security",
        "T.Bình": "Med",
        "Cao": "High",
        "R.Cao": "V.High",
        "Thấp": "Low",
        "Hành động Ứng phó": "Mitigation Action Plan",
        "🟢 An toàn (1-2)": "🟢 Low Risk (1-2)",
        "🟡 T.Bình (3-4)": "🟡 Med Risk (3-4)",
        "🟠 Cảnh báo (6)": "🟠 Warning Risk (6)",
        "🔴 Nguy hiểm (9)": "🔴 Critical Risk (9)",
        "Công nghệ": "Technology",
        
        // Slide 16: Closing & Lessons Learned
        "Tổng Kết Đồ Án & Bài Học Kinh Nghiệm": "Project Closing & Key Lessons Learned",
        "Kết Quả Đạt Được": "Project Deliverables Achieved",
        "Hoàn thiện Web App:": "Complete Web App:",
        "Đăng ký học phần Real-time mượt mà, đầy đủ 3 cổng quản lý.": "Smooth real-time registration with 3 dedicated portals.",
        "Đúng Tiến Độ:": "On Schedule:",
        "Hoàn thành đúng mốc Tuần 12 nhờ kiểm soát chặt chẽ đường găng.": "Finished at Week 12 milestone using critical path controls.",
        "Quản trị Rủi ro Hiệu quả:": "Proactive Risk Management:",
        "Kiểm soát rủi ro kỹ thuật & tài chính theo đúng nguyên lý PMBOK.": "Controlled technical & cost risks per PMBOK practices.",
        "Bài Học Kinh Nghiệm": "Key Lessons Learned",
        "1. Luôn xác định và giám sát chặt chẽ Đường găng (Critical Path) từ tuần đầu tiên.": "1. Always identify and monitor the Critical Path continuously from Week 1.",
        "2. Tích hợp kiểm thử tự động (Unit Test) giúp phát hiện lỗi sớm, giảm chi phí sửa lỗi.": "2. Integrate automated testing (Unit Tests) early to discover bugs and save costs.",
        "3. Giao tiếp nhóm rõ ràng là chìa khóa giúp giữ đúng tiến độ dự án.": "3. Maintain transparent team communication to keep progress on track.",
        
        // Global and Layout Controls
        "Trước": "Prev",
        "Tiếp": "Next",
        "Chi Tiết Phân Bổ Nhân Lực & Chi Phí (BAC = 39.150.000 VND)": "Effort & Cost Allocation Details (BAC = 39.150.000 VND)",
        "Vai trò Nhân sự (Resource Role)": "Project Resource Role",
        "Số ngày công (Effort)": "Effort (Man-days)",
        "Đơn giá ngày công": "Daily Rate",
        "Thành tiền (Cost)": "Subtotal Cost",
        "8 ngày công": "8 man-days",
        "600.000 VND/ngày": "600,000 VND/day",
        "13 ngày công": "13 man-days",
        "500.000 VND/ngày": "500,000 VND/day",
        "27 ngày công": "27 man-days",
        "550.000 VND/ngày": "550,000 VND/day",
        "3 ngày công": "3 man-days",
        "Kiểm thử viên (Tester)": "QA Tester",
        "11 ngày công": "11 man-days",
        "450.000 VND/ngày": "450,000 VND/day",
        "TỔNG CỘNG (BAC)": "TOTAL (BAC)",
        "74 ngày công": "74 man-days",
        "Cấu hình Bố cục Slide": "Customize Slide Layout",
        "Căn lề tiêu đề slide:": "Slide Title Alignment:",
        "Trái": "Left",
        "Giữa": "Center",
        "Phải": "Right",
        "Độ bo góc thẻ (Border Radius):": "Card Border Radius:",
        "Sắc cạnh": "Sharp",
        "Bo nhẹ": "Rounded",
        "Tròn trịa": "Pill",
        "Độ dày viền thẻ (Border Width):": "Card Border Width:",
        "Mảnh (1px)": "Thin (1px)",
        "Vừa (2px)": "Medium (2px)",
        "Dày (3px)": "Thick (3px)",
        "Kích cỡ chữ (Font Size Scale):": "Font Size Scale:",
        "Nhỏ": "Small",
        "Vừa": "Medium",
        "Lớn": "Large",
        "Tỷ lệ chia 2 cột:": "Two Column Ratio:",
        "Mặc định": "Default Ratio",
        "Đều nhau": "Equal Split",
        "Trái rộng": "Left Heavy",
        "Khoảng đệm Slide (Padding):": "Slide Layout Padding:",
        "Gọn": "Compact",
        "Rộng": "Spacious",
        
        "Cấu hình bố cục slide": "Customize slide layout",
        "Tải xuống PDF": "Download PDF",
        "Toàn màn hình": "Fullscreen"
    };

    const custom_en_to_vi = {};
    for (const [key, value] of Object.entries(vi_to_en)) {
        custom_en_to_vi[value] = key;
    }

    function translatePage(lang) {
        currentLang = lang;
        document.body.classList.toggle('lang-en-active', lang === 'en');
        const dict = lang === 'en' ? vi_to_en : custom_en_to_vi;

        function walk(node) {
            if (node.nodeType === 3) {
                const originalText = node.nodeValue;
                const trimmedText = originalText.trim().replace(/\s+/g, ' ');
                let matchedKey = null;
                for (const key of Object.keys(dict)) {
                    const cleanKey = key.replace(/&lt;/g, '<')
                                        .replace(/&gt;/g, '>')
                                        .replace(/&amp;/g, '&')
                                        .replace(/&quot;/g, '"')
                                        .replace(/&#39;/g, "'")
                                        .replace(/&nbsp;/g, ' ')
                                        .trim()
                                        .replace(/\s+/g, ' ');
                    if (cleanKey === trimmedText) {
                        matchedKey = key;
                        break;
                    }
                }
                if (matchedKey) {
                    const leadingSpace = originalText.match(/^\s*/)[0];
                    const trailingSpace = originalText.match(/\s*$/)[0];
                    node.nodeValue = leadingSpace + dict[matchedKey] + trailingSpace;
                }
            } else {
                for (let child of node.childNodes) {
                    if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE') {
                        walk(child);
                    }
                }
            }
        }
        walk(document.body);

        document.querySelectorAll('[title]').forEach(el => {
            const title = el.getAttribute('title');
            if (title) {
                const trimmedTitle = title.trim().replace(/\s+/g, ' ');
                for (const key of Object.keys(dict)) {
                    const cleanKey = key.replace(/&lt;/g, '<')
                                        .replace(/&gt;/g, '>')
                                        .replace(/&amp;/g, '&')
                                        .replace(/&quot;/g, '"')
                                        .replace(/&#39;/g, "'")
                                        .replace(/&nbsp;/g, ' ')
                                        .trim()
                                        .replace(/\s+/g, ' ');
                    if (cleanKey === trimmedTitle) {
                        el.setAttribute('title', dict[key]);
                        break;
                    }
                }
            }
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            const active = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('active', active);
        });

        updateSlide8();
    }

    // Attach translation click handlers
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            translatePage(lang);
        });
    });
});


// NPV Modal Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const npvModal = document.getElementById('npv-modal');
    const viewNpvBtn = document.getElementById('view-npv-btn');
    const npvCloseBtn = document.getElementById('npv-close-btn');

    if (npvModal && viewNpvBtn) {
        viewNpvBtn.addEventListener('click', () => {
            npvModal.style.display = 'flex';
        });
    }
    if (npvCloseBtn) {
        npvCloseBtn.addEventListener('click', () => {
            npvModal.style.display = 'none';
        });
    }
    if (npvModal) {
        npvModal.addEventListener('click', (e) => {
            if (e.target === npvModal) {
                npvModal.style.display = 'none';
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && npvModal.style.display === 'flex') {
                npvModal.style.display = 'none';
            }
        });
    }
});
