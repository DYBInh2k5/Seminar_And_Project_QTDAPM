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
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot-indicator');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
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
        prevBtn.disabled = currentSlideIndex === 0;
        nextBtn.disabled = currentSlideIndex === totalSlides - 1;

        // Dot indicators
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentSlideIndex);
        });

        // Progress bar width
        const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;
        progressBar.style.width = `${progressPercent}%`;
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
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Keyboard events
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Spacebar') {
            // Prevent scrolling on space bar press
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


    // --- TAB CONTROLLER (SLIDE 3) ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-tab');
            
            // Remove active states
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Set active states
            btn.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });


    // --- THEME TOGGLE CONTROLLER ---
    const themeBtn = document.getElementById('theme-toggle-btn');
    let isDark = false;

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            isDark = !isDark;
            document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
            
            // Change icon inside button
            if (isDark) {
                themeBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="sun-icon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                `;
            } else {
                themeBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="moon-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                `;
            }
            
            // Recalculate financials to update text colors for light/dark mode
            calculateFinancials();
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


    // --- INTERACTIVE UTILITY SIMULATOR (SLIDE 6) ---
    const xSlider = document.getElementById('x-slider');
    const xDisplay = document.getElementById('x-value-display');
    const valAverse = document.getElementById('val-averse');
    const valNeutral = document.getElementById('val-neutral');
    const valSeeking = document.getElementById('val-seeking');

    const pathAverse = document.getElementById('path-averse');
    const pathNeutral = document.getElementById('path-neutral');
    const pathSeeking = document.getElementById('path-seeking');

    const dotAverse = document.getElementById('dot-averse');
    const dotNeutral = document.getElementById('dot-neutral');
    const dotSeeking = document.getElementById('dot-seeking');
    
    const guideLineX = document.getElementById('guide-x');
    const chartMarkerTxt = document.getElementById('chart-marker-txt');

    // Chart dimensions in SVG coordinates
    const chartWidth = 400; // x range: [50, 450]
    const chartHeight = 300; // y range: [50, 350] (y is inverted, 350 is baseline)

    // Formula functions
    // x: [0, 100] -> y coordinate: [350, 50]
    // U range: Averse [0, 10], Neutral [0, 10], Seeking [0, 10]
    function calculateAverseU(x) {
        return Math.sqrt(x) * 1; // max 10
    }
    
    function calculateNeutralU(x) {
        return x / 10; // max 10
    }
    
    function calculateSeekingU(x) {
        return Math.pow(x, 2) / 1000; // max 10
    }

    // Convert values to SVG coordinate system
    function getSvgCoordinates(x, uVal) {
        const svgX = 50 + (x / 100) * chartWidth;
        const svgY = 350 - (uVal / 10) * chartHeight;
        return { x: svgX, y: svgY };
    }

    // Pre-draw the curves in SVG
    function drawStaticCurves() {
        let aversePoints = [];
        let neutralPoints = [];
        let seekingPoints = [];

        for (let x = 0; x <= 100; x++) {
            const averseCoord = getSvgCoordinates(x, calculateAverseU(x));
            const neutralCoord = getSvgCoordinates(x, calculateNeutralU(x));
            const seekingCoord = getSvgCoordinates(x, calculateSeekingU(x));

            aversePoints.push(`${averseCoord.x},${averseCoord.y}`);
            neutralPoints.push(`${neutralCoord.x},${neutralCoord.y}`);
            seekingPoints.push(`${seekingCoord.x},${seekingCoord.y}`);
        }

        pathAverse.setAttribute('d', `M ${aversePoints.join(' L ')}`);
        pathNeutral.setAttribute('d', `M ${neutralPoints.join(' L ')}`);
        pathSeeking.setAttribute('d', `M ${seekingPoints.join(' L ')}`);
    }

    function updateSimulator() {
        const x = parseFloat(xSlider.value);
        
        // Show current dollar equivalent (scale slider 0-100 to $0-$100,000)
        const dollarValue = x * 1000;
        xDisplay.innerText = `$${dollarValue.toLocaleString()}`;

        // Compute utilities
        const uAverse = calculateAverseU(x);
        const uNeutral = calculateNeutralU(x);
        const uSeeking = calculateSeekingU(x);

        // Update values in table
        valAverse.innerText = uAverse.toFixed(2);
        valNeutral.innerText = uNeutral.toFixed(2);
        valSeeking.innerText = uSeeking.toFixed(2);

        // Update dot coordinates on the chart
        const coordAverse = getSvgCoordinates(x, uAverse);
        const coordNeutral = getSvgCoordinates(x, uNeutral);
        const coordSeeking = getSvgCoordinates(x, uSeeking);

        dotAverse.setAttribute('cx', coordAverse.x);
        dotAverse.setAttribute('cy', coordAverse.y);

        dotNeutral.setAttribute('cx', coordNeutral.x);
        dotNeutral.setAttribute('cy', coordNeutral.y);

        dotSeeking.setAttribute('cx', coordSeeking.x);
        dotSeeking.setAttribute('cy', coordSeeking.y);

        // Guide line vertical projection
        guideLineX.setAttribute('x1', coordNeutral.x);
        guideLineX.setAttribute('y1', 350);
        guideLineX.setAttribute('x2', coordNeutral.x);
        // Reach to highest y coordinate dot
        const highestY = Math.min(coordAverse.y, coordNeutral.y, coordSeeking.y);
        guideLineX.setAttribute('y2', highestY);

        // Chart slider label indicator positioning
        chartMarkerTxt.setAttribute('x', coordNeutral.x);
        chartMarkerTxt.setAttribute('y', highestY);
        chartMarkerTxt.innerText = `x = $${(x * 1).toFixed(0)}k`;
    }

    // Simulator input event listener
    xSlider.addEventListener('input', updateSimulator);

    // Run draw functions
    drawStaticCurves();
    updateSimulator();


    // --- HSU NPV & ROI FINANCIAL CALCULATOR (SLIDE 7) ---
    const projectSelect = document.getElementById('project-select');
    const rSlider = document.getElementById('r-slider');
    const rValDisplay = document.getElementById('r-val-display');

    // Preset data matrices
    const presets = {
        'project-a': {
            benefits: [500, 1000, 1000, 2000],
            costs: [2000, 500, 500, 0]
        },
        'project-b': {
            benefits: [0, 1000, 3000, 5000],
            costs: [3000, 1000, 1000, 1000]
        },
        'project-c': {
            benefits: [1000, 1000, 3000, 3000],
            costs: [5000, 2000, 1000, 1000]
        }
    };

    function loadPreset(projKey) {
        if (projKey === 'custom') {
            // Enable inputs
            document.querySelectorAll('.cf-input').forEach(input => {
                input.removeAttribute('disabled');
            });
            return;
        }

        // Disable inputs for presets
        document.querySelectorAll('.cf-input').forEach(input => {
            input.setAttribute('disabled', 'true');
        });

        const data = presets[projKey];
        if (!data) return;

        // Fill inputs
        const benefitInputs = document.querySelectorAll('.b-in');
        const costInputs = document.querySelectorAll('.c-in');

        for (let i = 0; i < 4; i++) {
            benefitInputs[i].value = data.benefits[i];
            costInputs[i].value = data.costs[i];
        }
        
        calculateFinancials();
    }

    function calculateFinancials() {
        const r = parseFloat(rSlider.value) / 100;
        rValDisplay.innerText = `${rSlider.value}%`;

        const benefitInputs = document.querySelectorAll('.b-in');
        const costInputs = document.querySelectorAll('.c-in');

        let pvB = 0;
        let pvC = 0;

        // Discounted calculations
        for (let t = 0; t < 4; t++) {
            const bVal = parseFloat(benefitInputs[t].value) || 0;
            const cVal = parseFloat(costInputs[t].value) || 0;

            pvB += bVal / Math.pow(1 + r, t + 1);
            pvC += cVal / Math.pow(1 + r, t + 1);
        }

        const npv = pvB - pvC;
        const roi = pvC > 0 ? (npv / pvC) * 100 : 0;

        // Render Outputs text
        document.getElementById('out-pv-b').innerText = `$${pvB.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        document.getElementById('out-pv-c').innerText = `$${pvC.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        
        const npvElement = document.getElementById('out-npv');
        npvElement.innerText = `$${npv.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        if (npv < 0) {
            npvElement.style.color = '#ff3366';
        } else {
            npvElement.style.color = 'var(--primary)';
        }

        const roiElement = document.getElementById('out-roi');
        roiElement.innerText = `${roi.toFixed(2)}%`;
        if (roi < 0) {
            roiElement.style.color = '#ff3366';
        } else {
            roiElement.style.color = 'var(--accent-seeking)';
        }

        // Render Bar Chart width
        // Max range baseline to prevent bar overflow (using maximum possible value)
        const maxVal = Math.max(pvB, pvC, Math.abs(npv), 1000);
        
        const pctB = (pvB / maxVal) * 100;
        const pctC = (pvC / maxVal) * 100;
        const pctN = (Math.abs(npv) / maxVal) * 100;

        document.getElementById('bar-pv-b').style.width = `${pctB}%`;
        document.getElementById('bar-pv-c').style.width = `${pctC}%`;
        
        const barNpv = document.getElementById('bar-npv');
        barNpv.style.width = `${pctN}%`;
        
        if (npv < 0) {
            barNpv.style.background = 'linear-gradient(90deg, #e11d48, #ff3366)';
        } else {
            barNpv.style.background = 'linear-gradient(90deg, #0288d1, #4fc3f7)';
        }

        document.getElementById('bar-pv-b-val').innerText = `$${(pvB/1000).toFixed(1)}k`;
        document.getElementById('bar-pv-c-val').innerText = `$${(pvC/1000).toFixed(1)}k`;
        document.getElementById('bar-npv-val').innerText = `$${(npv/1000).toFixed(1)}k`;

        // Render comments
        const commentBox = document.getElementById('calc-decision-comment');
        const isLightTheme = true;
        if (npv < 0) {
            commentBox.innerHTML = `<strong>Đánh giá rủi ro đầu tư:</strong> Dự án không khả thi về tài chính (NPV âm). Rủi ro thua lỗ cực kỳ cao, không nên đầu tư.`;
            commentBox.style.background = isLightTheme ? 'rgba(244, 63, 94, 0.08)' : 'rgba(244, 63, 94, 0.05)';
            commentBox.style.borderLeftColor = '#f43f5e';
            commentBox.style.color = isLightTheme ? '#991b1b' : '#ffccd5';
        } else if (roi >= 35) {
            commentBox.innerHTML = `<strong>Đánh giá rủi ro đầu tư:</strong> Khuyên dùng! NPV dương lớn ($${npv.toLocaleString(undefined, {maximumFractionDigits: 0})}) và ROI đạt ${roi.toFixed(1)}%. Dự án mang lại dòng tiền tối ưu và ít rủi ro tài chính nhất.`;
            commentBox.style.background = isLightTheme ? 'rgba(16, 185, 129, 0.08)' : 'rgba(16, 185, 129, 0.05)';
            commentBox.style.borderLeftColor = '#10b981';
            commentBox.style.color = isLightTheme ? '#065f46' : '#b9f6ca';
        } else {
            commentBox.innerHTML = `<strong>Đánh giá rủi ro đầu tư:</strong> Chấp nhận được. Dự án có NPV dương nhưng tỷ lệ sinh lời vừa phải. Cần kiểm soát chặt chẽ chi phí phát sinh (Scope creep).`;
            commentBox.style.background = isLightTheme ? 'rgba(245, 158, 11, 0.08)' : 'rgba(245, 158, 11, 0.05)';
            commentBox.style.borderLeftColor = '#f59e0b';
            commentBox.style.color = isLightTheme ? '#92400e' : '#ffecb3';
        }
    }

    // Attach events to NPV calc
    projectSelect.addEventListener('change', (e) => {
        loadPreset(e.target.value);
    });

    rSlider.addEventListener('input', calculateFinancials);
    
    document.querySelectorAll('.cf-input').forEach(input => {
        input.addEventListener('input', calculateFinancials);
    });

    // Run first init NPV
    loadPreset('project-b'); // default project B from exam

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

    // Handle selection changes
    const customizerChoices = document.querySelectorAll('.customizer-choice');
    customizerChoices.forEach(choice => {
        choice.addEventListener('click', (e) => {
            const prop = e.target.getAttribute('data-prop');
            const val = e.target.getAttribute('data-val');

            // Set CSS custom property on document element
            document.documentElement.style.setProperty(prop, val);

            // Update active styling inside parent group
            const parent = e.target.closest('.radio-group');
            parent.querySelectorAll('.customizer-choice').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
        });
    });

    // --- KICK-OFF MODAL CONTROLLER ---
    const kickoffModal = document.getElementById('kickoff-modal');
    const viewKickoffBtn = document.getElementById('view-kickoff-btn');
    const kickoffCloseBtn = document.getElementById('kickoff-close-btn');

    if (kickoffModal && viewKickoffBtn) {
        viewKickoffBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            kickoffModal.style.display = 'flex';
        });

        if (kickoffCloseBtn) {
            kickoffCloseBtn.addEventListener('click', () => {
                kickoffModal.style.display = 'none';
            });
        }

        // Close on background click
        kickoffModal.addEventListener('click', (e) => {
            if (e.target === kickoffModal || e.target === kickoffCloseBtn) {
                kickoffModal.style.display = 'none';
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && kickoffModal.style.display === 'flex') {
                kickoffModal.style.display = 'none';
            }
        });
    }

    // --- IMAGE LIGHTBOX CONTROLLER ---
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (lightboxModal && lightboxImg) {
        // Select all slide banners and hero graphics
        const images = document.querySelectorAll('.slide-banner-img, .hero-3d-graphic');
        
        images.forEach(img => {
            img.addEventListener('click', (e) => {
                lightboxImg.src = e.target.src;
                lightboxCaption.innerText = e.target.alt || "Minh họa Slide";
                lightboxModal.style.display = 'flex';
            });
        });

        // Close lightbox on click close button
        if (lightboxClose) {
            lightboxClose.addEventListener('click', () => {
                lightboxModal.style.display = 'none';
            });
        }

        // Close lightbox on click background
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal || e.target === lightboxClose) {
                lightboxModal.style.display = 'none';
            }
        });

        // Close lightbox on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightboxModal.style.display === 'flex') {
                lightboxModal.style.display = 'none';
            }
        });
    }

    // --- BILINGUAL TRANSLATION DICTIONARY & ENGINE ---
    const vi_to_en = {
        "Seminar (Phần 1): Risk and Schedule Management in the Online Course Registration System Construction Project": "Seminar (Part 1): Risk and Schedule Management in the Online Course Registration System Construction Project",
        "Trước": "Prev",
        "Tiếp": "Next",
        "Cấu hình bố cục slide": "Customize Layout",
        "Tải xuống PDF": "Download PDF",
        "Toàn màn hình": "Fullscreen",
        "SEMINAR CHUYÊN ĐỀ HSU (PHẦN 1)": "HSU SPECIAL SEMINAR (PART 1)",
        "RISK AND SCHEDULE MANAGEMENT": "RISK AND SCHEDULE MANAGEMENT",
        "IN THE ONLINE COURSE REGISTRATION SYSTEM CONSTRUCTION PROJECT": "IN THE ONLINE COURSE REGISTRATION SYSTEM CONSTRUCTION PROJECT",
        "Seminar (Phần 1): Khởi Tạo Dự Án (PMBOK Initiating), Quản Trị Rủi Ro & Risk Utility Theory | Đồ Án HSU": "Seminar (Part 1): Project Initiating (PMBOK), Risk Management & Risk Utility Theory | HSU Project",
        "Môn học / Mã lớp:": "Course / Class Code:",
        "Quản trị Dự án Phần mềm (SW403DE01)": "Software Project Management (SW403DE01)",
        "Nhóm thực hiện:": "Project Team:",
        "Nhóm 3": "Team 3",
        "Thành viên nhóm:": "Team Members:",
        "Nhấp chuột hoặc dùng phím": "Click or use",
        "để bắt đầu": "to start",
        "Tổng Quan & Quy Trình Quản Trị Rủi Ro": "Overview & Risk Management Process",
        "Định nghĩa & Đặc thù phần mềm": "Definition & Software Specificity",
        "Rủi ro dự án:": "Project Risk:",
        "Là một sự kiện hoặc điều kiện chưa chắc chắn, nếu xảy ra sẽ tác động tiêu cực (đe dọa) hoặc tích cực (cơ hội) đến mục tiêu của dự án.": "Is an uncertain event or condition that, if it occurs, has a positive (opportunity) or negative (threat) effect on project objectives.",
        "Khác với xây dựng hay sản xuất, dự án phần mềm có yêu cầu thay đổi liên tục, công nghệ phát triển quá nhanh, phụ thuộc mạnh vào năng lực con người và khó ước lượng chính xác thời gian/chi phí.": "Unlike construction or manufacturing, software projects have volatile requirements, rapid technology changes, heavy reliance on human talent, and high estimation difficulty.",
        "\"Quản trị rủi ro phần mềm là một quá trình chủ động (proactive), được thực hiện liên tục trong suốt vòng đời dự án.\"": "\"Software risk management is a proactive process, performed continuously throughout the project lifecycle.\"",
        "— PMBOK Guide": "— PMBOK Guide",
        "Đặc trưng": "Characteristic",
        "Dự án Xây dựng (Construction)": "Construction Project",
        "Dự án Phần mềm (Software)": "Software Project",
        "Tính hữu hình": "Tangibility",
        "Vật lý, trực quan, dễ đo đạc": "Physical, visual, easy to measure",
        "Vô hình, trừu tượng, khó kiểm chứng": "Invisible, abstract, hard to verify",
        "Thay đổi thiết kế": "Design Changes",
        "Cực kỳ tốn kém, khó thực hiện": "Extremely costly, hard to execute",
        "Thay đổi liên tục (Scope Creep)": "Continuous changes (Scope Creep)",
        "Tác nhân rủi ro": "Risk Factors",
        "Thời tiết, vật tư, địa hình": "Weather, materials, topography",
        "Năng lực con người, biến động công nghệ": "Human capability, technology volatility",
        "6 Bước Quy trình Quản trị Rủi ro (PMBOK)": "6 Steps of Risk Management (PMBOK)",
        "Lập kế hoạch quản trị": "Plan Risk Management",
        "Định nghĩa phương pháp đánh giá, vai trò và ngân sách dự phòng.": "Define evaluation methodology, roles, and contingency budget.",
        "Nhận diện rủi ro": "Identify Risks",
        "Lập danh sách các mối đe dọa tiềm ẩn đối với tiến độ và chi phí.": "Create a list of potential threats to schedule and cost.",
        "Phân tích định tính": "Perform Qualitative Analysis",
        "Đánh giá xác suất và mức độ ảnh hưởng để xếp hạng ưu tiên.": "Assess probability and impact to rank risk priority.",
        "Phân tích định lượng": "Perform Quantitative Analysis",
        "Tính toán giá trị tiền tệ dự kiến (EMV) và mô phỏng tài chính.": "Calculate Expected Monetary Value (EMV) and run financial simulations.",
        "Lập kế hoạch ứng phó": "Plan Risk Responses",
        "Xây dựng giải pháp phòng ngừa, giảm thiểu hoặc chấp nhận.": "Develop actions to prevent, mitigate, transfer, or accept risks.",
        "Giám sát và kiểm soát": "Monitor and Control Risks",
        "Theo dõi các yếu tố kích hoạt và thực thi kế hoạch dự phòng.": "Monitor risk triggers and execute contingency plans.",
        "Rủi Ro Thị Trường & Tài Chính (Khởi Tạo Dự Án)": "Market & Financial Risks (Project Initiating)",
        "Nhận diện các rủi ro bên ngoài (Thị trường) và rủi ro bên trong (Tài chính) ảnh hưởng trực tiếp đến sự sống còn của dự án trong giai đoạn đầu:": "Identify external (Market) and internal (Financial) risks directly affecting project survival during the initiating phase:",
        "Bảng phân bổ quỹ dự phòng tài chính (PMBOK)": "Financial Reserve Allocation Table (PMBOK)",
        "Quỹ dự phòng sự vụ (Contingency Reserve)": "Contingency Reserve",
        "10% - 15% ngân sách": "10% - 15% of budget",
        "Dành cho rủi ro đã nhận diện (Known-unknowns)": "For identified risks (Known-unknowns)",
        "Quỹ dự phòng quản lý (Management Reserve)": "Management Reserve",
        "5% ngân sách": "5% of budget",
        "Dành cho rủi ro bất ngờ chưa biết (Unknown-unknowns)": "For unforeseen risks (Unknown-unknowns)",
        "Mô Hình SWOT Nhận Diện Rủi Ro - Dự Án HSU": "SWOT Analysis for Risk Identification - HSU Project",
        "Phân tích ma trận SWOT cho dự án phát triển hệ thống Đăng ký học phần mới thay thế hệ thống web cũ tại HSU:": "SWOT matrix analysis for developing the new Mobile Course Registration System to replace the old web system at HSU:",
        "Điểm mạnh (Strengths)": "Strengths",
        "Tiện lợi cao, đăng ký học phần mọi lúc mọi nơi trên điện thoại.": "High convenience, students can register anywhere on mobile.",
        "Giao diện hiện đại, tối ưu luồng xử lý và kết nối dữ liệu.": "Modern UI/UX, optimized database flows and API connectivity.",
        "Giảm nghẽn mạng so với việc truy cập hệ thống web cũ.": "Reduces network congestion compared to the old web portal.",
        "Điểm yếu (Weaknesses)": "Weaknesses",
        "Thiếu kinh nghiệm lập trình ứng dụng di động real-time quy mô lớn.": "Lack of experience in large-scale real-time mobile development.",
        "Thời gian phát triển ngắn (12 tuần) gây áp lực lớn cho đội ngũ.": "Short development timeline (12 weeks) puts heavy pressure on the team.",
        "Ngân sách ban đầu hạn chế cho hạ tầng chịu tải cao.": "Limited initial budget for high-concurrency server infrastructure.",
        "Cơ hội (Opportunities)": "Opportunities",
        "Ban Giám hiệu HSU hỗ trợ mạnh mẽ, sẵn sàng nâng cấp hạ tầng Cloud.": "HSU management strongly supports upgrading cloud servers.",
        "Sự kỳ vọng và ủng hộ lớn từ toàn thể sinh viên trường.": "High expectations and strong support from the HSU student body.",
        "Tích hợp các tính năng hiện đại như thông báo hạn đóng học phí.": "Integrate modern features like push notifications for deadlines.",
        "Thách thức (Threats)": "Threats",
        "Lượng truy cập đồng thời cực lớn (giờ G mở cổng đăng ký).": "Massive peak concurrency (opening hour of course registration).",
        "Rủi ro sập hệ thống (Crash API/Database) khi tải vượt ngưỡng.": "Risk of system crash (API/Database failure) under peak load.",
        "Đồng bộ dữ liệu học tập thời gian thực với hệ thống đào tạo cũ.": "Real-time sync of academic data with legacy student management systems.",
        "Rủi Ro Công Nghệ (Technology Risk)": "Technology Risks",
        "Các mối đe dọa kỹ thuật cốt lõi ảnh hưởng trực tiếp đến tính ổn định và bảo mật của hệ thống đăng ký học phần HSU:": "Core technical threats directly affecting the stability and security of the HSU Course Registration system:",
        "Chọn sai công nghệ": "Technology Selection",
        "Sử dụng framework chưa được kiểm chứng hoặc thiếu nhân sự chuyên môn dẫn đến việc phải viết lại toàn bộ mã nguồn.": "Using unverified frameworks or lacking skilled devs leads to extensive code refactoring and project delays.",
        "Lỗi bảo mật (OWASP 2025)": "Security Vulnerabilities (OWASP 2025)",
        "Các lỗ hổng như lỗi kiểm soát truy cập (Broken Access Control) cho phép sinh viên can thiệp vào kết quả đăng ký của người khác.": "Flaws like Broken Access Control could allow unauthorized database updates or data leaks of student records.",
        "Khả năng mở rộng (Scalability)": "Scalability Issues",
        "Hệ thống sập do nghẽn cổ chai database khi chịu tải từ 5,000 đến 10,000 kết nối đồng thời trong giây đầu tiên mở cổng.": "System crashes due to database bottlenecks when facing 5,000 to 10,000 concurrent sessions at opening hour.",
        "Nợ kỹ thuật (Technical Debt)": "Technical Debt",
        "Viết code cẩu thả để kịp tiến độ bàn giao gây khó khăn và tốn kém gấp nhiều lần cho việc bảo trì nâng cấp ở học kỳ sau.": "Writing sloppy code to meet tight deadlines creates massive maintenance debt for future semester upgrades.",
        "Rủi Ro Nhân Sự (Human / People Risk)": "Human & People Risks",
        "Yếu tố con người luôn tiềm ẩn những biến động lớn, quyết định thành bại của dự án xây dựng phần mềm:": "Human factors carry high volatility, deciding the success of software project execution:",
        "Thiếu hụt nhân lực": "Resource Scarcity",
        "Thành viên nghỉ việc": "Staff Turnover",
        "Thiếu kỹ năng chuyên môn": "Skill Gaps",
        "Giao tiếp kém trong nhóm": "Poor Communication",
        "Báo cáo Talent Gap của PMI chỉ ra ngành PM công nghệ toàn cầu sẽ thiếu hụt gần 30 triệu nhân sự chất lượng cao.": "PMI Talent Gap report projects a global shortage of nearly 30 million tech project management professionals.",
        "Một nhân sự chủ chốt rời nhóm có thể làm thời gian thực hiện tác vụ tăng gấp ba lần (theo cơ sở dữ liệu PERIL của PMI).": "Losing a key developer mid-project can triple task duration (according to PMI's PERIL database).",
        "Thiếu kỹ năng tối ưu hóa truy vấn SQL thời gian thực gây chậm nghẽn hệ thống đăng ký dù server cấu hình mạnh.": "Lack of real-time SQL query optimization skills causes performance bottlenecks even on powerful hardware.",
        "Giao tiếp kém là nguyên nhân gây thất thoát hơn 56% ngân sách dự án (theo thống kê Pulse of the Profession).": "Poor communication contributes to over 56% of project budget waste (according to Pulse of the Profession).",
        "Đánh Giá Rủi Ro & Case Studies Thực Tế": "Risk Assessment & Historical Case Studies",
        "Phân tích rủi ro kỹ thuật kết hợp với các bài học xương máu trong lịch sử ngành công nghệ:": "Analyzing technical risks combined with critical lessons from IT history:",
        "Bảo mật / Hệ thống": "Security / System",
        "Equifax (2017)": "Equifax (2017)",
        "Tin tặc khai thác lỗ hổng Apache Struts đã có bản vá nhưng không được cập nhật kịp thời. Đội ngũ trì hoãn ròng rã suốt 2 tháng.": "Hackers exploited a known Apache Struts vulnerability that was left unpatched for 2 months due to staff delay.",
        "Bài học:": "Lesson:",
        "Thiếu tự động hóa quét lỗ hổng và kiểm soát cấu hình hệ thống (Shift-left security).": "Lack of automated vulnerability scanning and early security controls (Shift-left security).",
        "Lộ 147 triệu người | Phạt 1.38 tỷ USD": "147M leaked | $1.38B Fine",
        "Hiệu năng / Tải cao": "Performance / High Load",
        "Healthcare.gov (2013)": "Healthcare.gov (2013)",
        "Sập sau 2 giờ mở cổng do 250k user truy cập đồng thời (gấp 5 lần tải dự kiến). Thiếu kiểm thử tải và tích hợp hệ thống.": "Crashed 2 hours post-launch due to 250k concurrent users (5x projected load). Lacked stress testing and system integration.",
        "Cần Load/Stress Test trước khi chạy. Kiến trúc phải tách biệt độc lập (loose coupling).": "Must run Load/Stress tests before launch. Architecture should be loosely coupled.",
        "Thành công &lt;1% | Đập đi xây lại": "Success <1% | Full Rebuild",
        "Nợ kỹ thuật / Deploy": "Technical Debt / Deploy",
        "Knight Capital (2012)": "Knight Capital (2012)",
        "Mã cũ Power Peg (nợ kỹ thuật 8 năm) bị kích hoạt lại do deploy thủ công thiếu file cấu hình ở 1 trong 8 máy chủ.": "8-year-old legacy code (technical debt) re-activated by manual deployment missing a config file on 1 of 8 servers.",
        "Phải tự động hóa deploy (CI/CD) và định kỳ dọn dẹp các đoạn mã nguồn cũ (nợ kỹ thuật).": "Must automate deployments (CI/CD) and periodically clean up legacy code blocks (technical debt).",
        "Lỗ 440tr USD/45 phút | Phá sản": "$440M Loss in 45m | Bankruptcy",
        "Con người / Quản lý": "Human / Management",
        "FBI Trilogy (2005)": "FBI Trilogy (2005)",
        "Dự án Virtual Case File bị hủy bỏ hoàn toàn sau 4 năm phát triển do yêu cầu thay đổi liên tục (Scope creep) và giao tiếp kém giữa FBI với SAIC.": "Virtual Case File project canceled after 4 years due to continuous scope creep and poor communication between FBI and SAIC.",
        "Thiếu quy trình kiểm soát thay đổi (Change Control Board - CCB) và quản lý phạm vi chặt.": "Lacked a formal Change Control Board (CCB) and strict scope management.",
        "Mất trắng 170 triệu USD | Hủy bỏ": "$170M Wasted | Canceled",
        "Lập Kế Hoạch Ứng Phó & Tích Hợp SDP": "Risk Response Planning & SDP Integration",
        "Bốn chiến lược phản hồi rủi ro": "Four Risk Response Strategies",
        "Tránh rủi ro (Avoidance)": "Risk Avoidance",
        "Thay đổi kế hoạch/kiến trúc để triệt tiêu nguyên nhân. Ví dụ: loại bỏ tính năng thanh toán quá phức tạp khỏi đợt 1.": "Change project plan/architecture to eliminate triggers. Example: remove complex payment features from release 1.",
        "Giảm thiểu (Mitigation)": "Risk Mitigation",
        "Giảm xác suất/tác động sớm. Ví dụ: viết Unit Test tự động, đào tạo lập trình viên công nghệ mới.": "Reduce probability or impact early. Example: write automated Unit Tests, train devs on new technology.",
        "Chuyển giao (Transfer)": "Risk Transfer",
        "Chuyển trách nhiệm/hậu quả sang bên thứ ba. Ví dụ: thuê ngoài cổng thanh toán trực tuyến của đơn vị uy tín.": "Shift responsibility or impact to a third party. Example: outsource payment gateways to a reputable vendor.",
        "Chấp nhận (Acceptance)": "Risk Acceptance",
        "Sống chung với rủi ro, thành lập ngân sách dự phòng tài chính và thời gian đệm bàn giao.": "Acknowledge risks, establish financial contingency reserves and schedule buffers.",
        "Tích hợp SDP (Software Development Plan)": "SDP (Software Development Plan) Integration",
        "Theo mẫu chuẩn HSU, Kế hoạch rủi ro bắt buộc tích hợp trong tài liệu SDP, quy định quy trình nhận diện (Tasks), phân công người chịu trách nhiệm (RACI Matrix) và công cụ lưu trữ (Risk Item List).": "According to HSU template, the Risk Plan must be integrated in the SDP, specifying identification tasks, RACI Matrix, and risk register.",
        "Bản đăng ký rủi ro (Risk Response Register)": "Risk Response Register",
        "Mô tả rủi ro": "Risk Description",
        "Chiến lược": "Strategy",
        "Thiếu nhân sự": "Resource Scarcity",
        "Server hỏng": "Server Failure",
        "Thấp / Cao": "Low / High",
        "Khách đổi yêu cầu": "Scope Change",
        "Cao / Trung bình": "High / Medium",
        "Bản Đăng Ký Rủi Ro (Risk Register) - Dự Án HSU": "Project Risk Register - HSU Course Registration",
        "Bảng tổng hợp xếp hạng ưu tiên các rủi ro đã nhận diện của dự án Đăng ký học phần di động HSU:": "Prioritized summary of identified risks for the HSU Mobile Course Registration system:",
        "Mã": "ID",
        "Mô tả rủi ro tiêu cực": "Risk Description",
        "Phân loại": "Category",
        "Xác suất": "Prob",
        "Tác động": "Impact",
        "Điểm số": "Score",
        "Người quản lý": "Owner",
        "Kế hoạch ứng phó chi tiết (Chuẩn PMBOK)": "Response Action (PMBOK Standard)",
        "Hệ thống sập do quá tải kết nối khi mở cổng đăng ký học phần": "System crashes due to database overload at registration hour",
        "Công nghệ": "Tech",
        "Mở rộng ngang Server (Scale-out), thiết kế CDN tĩnh, Load Test": "Scale-out database servers, utilize static CDN, run Load Test",
        "Sinh viên lợi dụng lỗi bảo mật để sửa dữ liệu kết quả học tập": "Students exploit security bugs to modify academic records",
        "Cài đặt mã hóa dữ liệu, quét bảo mật OWASP, kiểm soát quyền hạn": "Encrypt database entries, run OWASP security audit, enforce roles",
        "Trễ hạn bàn giao do ước tính thời lượng WBS thiếu chuẩn xác": "Schedule delay due to inaccurate WBS task estimation",
        "Tiến độ": "Schedule",
        "Sử dụng CPM tìm đường găng, tăng thời gian đệm (buffer) 15%": "Use CPM to trace critical path, add 15% schedule buffer",
        "Đối tác thay đổi yêu cầu tính năng (Scope creep) giữa dự án": "Partner requests new core features mid-project (Scope creep)",
        "Thị trường": "Market",
        "Thực thi quy trình kiểm soát thay đổi (CCB), chia nhỏ MVP": "Enforce formal change control process (CCB), release MVP first",
        "Thành viên chủ chốt trong đội ngũ phát triển đột ngột nghỉ việc": "Key software developer suddenly resigns from project team",
        "Con người": "People",
        "Bàn giao chéo tài liệu API, lưu trữ Git sạch, phân rã RACI": "API documentation cross-training, clean Git flow, RACI matrix",
        "Vượt dự toán chi phí mua hạ tầng server Cloud ban đầu": "Out of budget for initial Cloud server infrastructure setup",
        "Chi phí": "Cost",
        "Trích quỹ dự phòng Contingency Reserve (10%), tối ưu code": "Draw from Contingency Reserve (10%), optimize server code",
        "Thành viên mất động lực làm việc khi dự án kéo dài": "Team members lose motivation as development timeline extends",
        "Tổ chức họp Daily Standup 15 phút, giải quyết xung đột sớm": "Organize 15-minute Daily Standups, resolve conflicts early",
        "Nhà cung cấp cổng thanh toán trực tuyến chậm bàn giao API": "Online payment gateway vendor delays API delivery",
        "Thu mua": "Procure",
        "Thiết lập điều khoản phạt trễ hợp đồng, chuẩn bị API giả lập": "Set penalty clauses in contract, prepare mock APIs for testing",
        "Lý Thuyết Hữu Dụng Của Rủi Ro": "Project Risk Utility Theory",
        "Lý Thuyết Hữu Dụng Rủi Ro (Risk Utility Theory)": "Risk Utility Theory",
        "Hữu dụng là gì?": "What is Utility?",
        "Độ hữu dụng (Utility):": "Utility Level (Utility):",
        "Là mức độ thỏa mãn hay giá trị chủ quan mà một cá nhân/tổ chức cảm nhận được trước một kết quả không chắc chắn.": "The level of satisfaction or subjective value that an individual/organization perceives from an uncertain outcome.",
        "Cùng một giá trị tài chính (ví dụ $100 triệu), mức độ hữu dụng (Utility) sẽ khác nhau tùy vào quy mô tài chính và bối cảnh khẩu vị rủi ro (Risk Appetite) của từng tổ chức.": "For the same financial value (e.g. $100M), utility varies based on organizational scale and risk appetite.",
        "Thái độ": "Attitude",
        "Đường cong": "Curve",
        "Ví dụ điển hình": "Typical Example",
        "Né tránh (Averse)": "Risk-Averse (Averse)",
        "Né tránh (Risk-Averse)": "Risk-Averse",
        "Lõm (Concave)": "Concave",
        "Ngân hàng, dự án y tế": "Banks, healthcare projects",
        "Trung lập (Neutral)": "Risk-Neutral (Neutral)",
        "Trung lập (Risk-Neutral)": "Risk-Neutral",
        "Đường thẳng": "Linear",
        "Tập đoàn phần mềm lớn": "Large software corporations",
        "Mạo hiểm (Seeking)": "Risk-Seeking (Seeking)",
        "Mạo hiểm": "Seeking",
        "Tìm kiếm (Risk-Seeking)": "Risk-Seeking",
        "Lồi (Convex)": "Convex",
        "Startup công nghệ mới": "New tech startups",
        "Biểu thức toán học khẩu vị rủi ro:": "Mathematical expressions of risk tolerance:",
        "U(x) = Giá trị hữu dụng với lượng của cải x": "U(x) = Utility value of wealth x",
        "Né tránh rủi ro (Averse):": "Risk-Averse (Averse):",
        "U''(x) < 0 (Hàm lõm - Đường thỏa dụng cong hướng lên và nằm trên trục tuyến tính).": "U''(x) < 0 (Concave function - utility curve arches upwards above the linear line).",
        "Trung lập rủi ro (Neutral):": "Risk-Neutral (Neutral):",
        "U''(x) = 0 (Đường thẳng tuyến tính - Giá trị hữu dụng bằng đúng payoff).": "U''(x) = 0 (Linear line - utility value equals the payoff).",
        "Thích mạo hiểm (Seeking):": "Risk-Seeking (Seeking):",
        "U''(x) > 0 (Hàm lồi - Đường thỏa dụng cong hướng xuống dưới).": "U''(x) > 0 (Convex function - utility curve arches downwards).",
        "Thái độ của nhà quản trị đối với rủi ro được biểu diễn qua Hàm hữu dụng U(x) theo PMBOK:": "Managerial attitudes toward risk represented through the Utility Function U(x) under PMBOK:",
        "Trục tung (y):": "Y-axis (y):",
        "Mức độ thỏa mãn (Subjective satisfaction).": "Subjective satisfaction.",
        "Trục hoành (x):": "X-axis (x):",
        "Giá trị tiền tệ hoặc mức rủi ro gánh chịu.": "Monetary value or level of risk.",
        "Khẩu vị rủi ro (Risk Tolerance):": "Risk Appetite & Tolerance:",
        "Đường cong lõm. Thỏa mãn giảm dần khi rủi ro tăng. Thích sự chắc chắn (chọn NPV thấp nhưng chắc chắn).": "Concave curve. Marginal utility decreases as risk increases. Prefers certainty (selects lower but guaranteed NPV).",
        "Đường thẳng tuyến tính. Thỏa mãn tỷ lệ thuận với lợi nhuận. Chỉ quan tâm đến giá trị EMV.": "Linear line. Satisfaction is proportional to payoff. Focuses purely on EMV values.",
        "Đường cong lồi. Thỏa mãn tăng vọt khi đối mặt rủi ro lớn để đạt lợi nhuận cực đại.": "Convex curve. Satisfaction spikes when facing high risk for maximum potential payoff.",
        "Đồ thị Hàm hữu dụng U(x) minh họa": "Utility Function U(x) Illustration Chart",
        "Né tránh": "Averse",
        "Trung lập": "Neutral",
        "Thích rủi ro": "Seeking",
        "Đường cong hữu dụng giải thích tại sao 2 đội dự án giống nhau lại chọn chiến lược khác nhau.": "Utility curves explain why two identical project teams might choose entirely different strategies.",
        "Trình Mô Phỏng Hàm Hữu Dụng Tương Tác": "Interactive Utility Function Simulator",
        "Bảng Điều Khiển Mô Phỏng": "Simulation Control Dashboard",
        "Kéo thanh trượt để thay đổi giá trị tài sản ($x$) và xem mức độ thỏa mãn hữu dụng ($U$) thay đổi thế nào dựa trên từng nhóm thái độ:": "Drag the slider to change asset value ($x$) and see how utility satisfaction ($U$) shifts based on each attitude:",
        "Giá trị tài sản (x):": "Asset Value (x):",
        "Hàm toán học": "Math Function",
        "Mức hữu dụng (U)": "Utility Level (U)",
        "Bộ tính toán so sánh bài toán đầu tư": "Investment Comparison Calculator",
        "So sánh Dự án A (An toàn, 100% ăn $50k) vs Dự án B (Mạo hiểm, 50% ăn $120k & 50% ăn $0):": "Compare Project A (Safe, 100% win $50k) vs Project B (Risky, 50% win $120k & 50% win $0):",
        "EMV Kỳ Vọng:": "Expected EMV:",
        "Dự án A:": "Project A:",
        "| Dự án B:": "| Project B:",
        "Hữu Dụng Kỳ Vọng (Risk-Averse):": "Expected Utility (Risk-Averse):",
        "Kết luận quyết định:": "Decision Conclusion:",
        "Người Né tránh rủi ro sẽ chọn": "A Risk-Averse manager will select",
        "Dự án A (An toàn)": "Project A (Safe)",
        "dù EMV thấp hơn!": "even though EMV is lower!",
        "Đồ Thị Hàm Hữu Dụng Tương Tác Thực Tế": "Real Interactive Utility Curve Plot",
        "Giá trị payoff (x)": "Payoff Value (x)",
        "Độ thỏa mãn / Hữu dụng (U)": "Satisfaction / Utility (U)",
        "Tính Toán Tài Chính Dự Án (NPV/ROI) & Quản Trị Rủi Ro Đầu Tư": "Project Financial Calculations (NPV/ROI) & Investment Risk",
        "Bảng Nhập Thông Số Dòng Tiền": "Cash Flow Input Dashboard",
        "Chọn Dự án mẫu:": "Select Project Template:",
        "Dự án B (Khuyên dùng - Đề thi)": "Project B (Recommended - Exam)",
        "Dự án C (Lỗ)": "Project C (Deficit)",
        "Tùy chỉnh dòng tiền...": "Custom Cash Flow...",
        "Tỷ suất chiết khấu (r):": "Discount Rate (r):",
        "Loại dòng tiền": "Cashflow Type",
        "Năm 1": "Year 1",
        "Năm 2": "Year 2",
        "Năm 3": "Year 3",
        "Năm 4": "Year 4",
        "Lợi ích ($)": "Benefits ($)",
        "Chi phí ($)": "Costs ($)",
        "*Tính toán tự động chiết khấu dòng tiền bắt đầu từ Năm 1 ($DF_t = 1 / (1+r)^t$).": "*Automated discounted cash flows starting from Year 1 ($DF_t = 1 / (1+r)^t$).",
        "Kết Quả Tính Toán & Đánh Giá": "Calculation Results & Analysis",
        "PV Lợi ích (PV_B)": "PV of Benefits (PV_B)",
        "PV Chi phí (PV_C)": "PV of Costs (PV_C)",
        "Giá trị hiện tại ròng (NPV)": "Net Present Value (NPV)",
        "Tỷ suất sinh lợi (ROI)": "Return on Investment (ROI)",
        "So sánh giá trị tài chính dự án": "Project Financial Comparison",
        "Khuyên dùng:": "Recommended:",
        "Dự án có hiệu quả tài chính tối ưu. NPV dương lớn và tỷ suất ROI cao giúp giảm thiểu rủi ro đầu tư.": "Project shows optimal financial return. Large positive NPV and high ROI minimize investment risks.",
        "Đánh giá rủi ro đầu tư:": "Investment Risk Review:",
        "Khuyên dùng! NPV dương lớn": "Recommended! Large positive NPV",
        "và ROI đạt": "and ROI reaches",
        "Dự án mang lại dòng tiền tối ưu và ít rủi ro tài chính nhất.": "Project provides optimal cash flow and lowest financial risk.",
        "Chấp nhận được. Dự án có NPV dương nhưng tỷ lệ sinh lời vừa phải. Cần kiểm soát chặt chẽ chi phí phát sinh (Scope creep).": "Acceptable. Project has positive NPV but moderate return. Enforce tight controls on cost increases.",
        "Cảnh báo! Dự án có NPV âm": "Warning! Project has negative NPV",
        "Dòng tiền thâm hụt nghiêm trọng, không nên đầu tư vì rủi ro thua lỗ cực cao.": "Severe cash flow deficit, do not invest due to extremely high risk of loss.",
        "Thực Tế JWD Consulting, Kết Luận & Q&A": "JWD Consulting Case Study, Conclusion & Q&A",
        "Bối cảnh & Chỉ số JWD": "JWD Context & Metrics",
        "Sponsor / PM:": "Sponsor / PM:",
        "Ngân sách:": "Budget:",
        "Dự toán $140k → Thực tế": "Estimated $140k → Actual",
        "Bảo trì & Lợi ích:": "Maintenance & Benefits:",
        "40k/năm &": "40k/year &",
        "Chiết khấu / Payback:": "Discount / Payback:",
        "/ Dưới 1 năm": "/ Under 1 Year",
        "📌 Phân định WBS (Fig 3-3):": "📌 WBS Breakdown (Fig 3-3):",
        "Phạm vi Seminar (Khung Rủi ro, Charter, NPV).": "Seminar Scope (Risk Framework, Charter, NPV).",
        "Triển khai Đồ án Project (Đăng ký học phần).": "Project Execution (Course Registration App).",
        "Thiếu ý kiến nội bộ (Rủi ro 1)": "Lack of Internal Input (Risk 1)",
        "CEO gửi email toàn công ty & thưởng **5 ngày phép** cho tư vấn viên cung cấp bộ biểu mẫu tốt nhất.": "CEO sent a firm-wide email & offered a 5-day holiday bonus for the consultant providing the best templates.",
        "Đại diện khách hàng (Rủi ro 2)": "Client Representation (Risk 2)",
        "CEO trực tiếp gặp lãnh đạo đối tác, ký NDA mời Kim Phuong & Page Miller cố vấn $0 chi phí.": "CEO met partner executives, signed NDA, invited Kim Phuong & Page Miller as advisers at $0 cost.",
        "Mua phần mềm ngoài (Rủi ro 4, 5)": "Purchase External Modules (Risk 4, 5)",
        "Thuyết phục dev mua module ngoài thay vì tự code. Xin CEO phê duyệt cấp thêm **$10,000** vượt budget.": "Convinced devs to buy module instead of self-coding. Obtained CEO approval for an extra $10,000 budget.",
        "Thái độ Michael Chen (Rủi ro 8)": "Michael Chen's Attitude (Risk 8)",
        "Giảm họp bắt buộc, giao quyền làm chủ \"Ask the Expert\" và trao đổi gián tiếp qua trợ lý Jill Anderson.": "Reduced mandatory meetings, delegated \"Ask the Expert\" ownership, and communicated through assistant Jill Anderson.",
        "5 Bài học kinh nghiệm cốt lõi (Table 3-16) & Q&A": "5 Core Lessons Learned (Table 3-16) & Q&A",
        "Sự hỗ trợ quyết liệt từ Sponsor (CEO Joe Fleming).": "Decisive and active support from project Sponsor (CEO Joe Fleming).",
        "Thiết lập Team Contract &amp; Kick-off rõ ràng.": "Establish clear Team Contract &amp; Kick-off alignment.",
        "Ứng phó linh hoạt (mua ngoài thay vì tự code).": "Flexible response (purchasing third-party modules over coding).",
        "Quản lý nhân sự linh hoạt theo thái độ rủi ro.": "Flexible people management adapted to employee risk attitudes.",
        "Đầu tư kế hoạch PMBOK bài bản kiểm soát tốt biến động ($140k → $150k).": "Invest in structured PMBOK planning to control variance ($140k → $150k).",
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
        "Vừa": "Normal",
        "Lớn": "Large",
        "Tỷ lệ chia 2 cột:": "Two Column Ratio:",
        "Mặc định": "Default",
        "Đều nhau": "Even (1:1)",
        "Trái rộng": "Left Wide",
        "Khoảng đệm Slide (Padding):": "Slide Padding:",
        "Gọn": "Compact",
        "Rộng": "Wide",
        "Seminar: Quản trị Rủi ro Dự án Phần mềm & Risk Utility Theory": "Seminar: Software Project Risk Management & Risk Utility Theory",
        "Võ Duy Bình (22301500 - Nhóm trưởng)": "Vo Duy Binh (22301500 - Team Leader)",
        "Hồng Bảo Khang (22101347), Trần Bá Lợi (22300236), Nguyễn Thanh Quang (22110739)": "Hong Bao Khang (22101347), Tran Ba Loi (22300236), Nguyen Thanh Quang (22110739)",
        ", \n                                Hồng Bảo Khang (22101347), \n                                Trần Bá Lợi (22300236), \n                                Nguyễn Thanh Quang (22110739)": "Hong Bao Khang (22101347), Tran Ba Loi (22300236), Nguyen Thanh Quang (22110739)",
        "Thu thập rủi ro bằng brainstorm, checklist, phân tích tài liệu lịch sử.": "Gather risks using brainstorming, checklists, historical document analysis.",
        "Đánh giá xác suất (P) và tác động (I) để xếp hạng ưu tiên (P × I).": "Evaluate probability (P) and impact (I) to prioritize (P × I).",
        "Tính toán toán học giá trị tài chính kỳ vọng (EMV) hoặc mô phỏng.": "Mathematical calculation of Expected Monetary Value (EMV) or simulations.",
        "Xây dựng các chiến lược (Avoid, Mitigate, Transfer, Accept).": "Develop strategies (Avoid, Mitigate, Transfer, Accept).",
        "Theo dõi và kiểm soát": "Monitor & Control",
        "Giám sát rủi ro cũ, cập nhật Risk Register và nhận diện rủi ro mới.": "Monitor existing risks, update Risk Register, and identify new risks.",
        "Rủi Ro Thị Trường & Tài Chính": "Market & Financial Risks",
        "Nhấp chọn nguồn rủi ro để xem chi tiết nguyên nhân và phương pháp ứng phó:": "Click on a risk source to view detailed causes and response strategies:",
        "1. Rủi ro Thị trường": "1. Market Risks",
        "2. Rủi ro Tài chính": "2. Financial Risks",
        "Biến động bên ngoài": "External Volatility",
        "Rủi ro xuất phát từ những thay đổi bên ngoài doanh nghiệp, làm suy giảm giá trị sử dụng hoặc khả năng thương mại của sản phẩm sau khi bàn giao.": "Risks arising from changes external to the enterprise, reducing product usability or commercial value post-delivery.",
        "Dấu hiệu cảnh báo:": "Warning Triggers:",
        "Khách hàng liên tục đòi thay đổi tính năng, đối thủ bất ngờ ra mắt sản phẩm mới có tính năng AI đột phá.": "Client continuously requests feature changes, competitor launches a new AI-powered product.",
        "Nguyên nhân & Hệ quả": "Causes & Consequences",
        "Thay đổi yêu cầu:": "Change in requirements:",
        "Ban đầu yêu cầu web cơ bản, sau 2 tháng đòi thêm AI chatbot, livestream, thanh toán QR (Scope creep).": "Initially basic web, after 2 months requesting AI chatbot, livestream, and QR payments (Scope creep).",
        "Đối thủ cạnh tranh:": "Competitor actions:",
        "Tung ra app giao đồ ăn gợi ý AI giao trong 15 phút trước khi sản phẩm của bạn kịp phát hành.": "Competitor launches an AI food-delivery app before your system goes live.",
        "Xu hướng công nghệ:": "Tech trends:",
        "Xuất hiện công nghệ mới (React 18 -> React 20) làm công nghệ cũ lỗi thời.": "New technology releases render existing code legacy.",
        "Cách ứng phó tiêu biểu": "Representative Responses",
        "Áp dụng tư duy Agile/Scrum linh hoạt, xây dựng và phát hành nhanh bản MVP để kiểm chứng thị trường, kiểm soát chặt chẽ quy trình Change Request.": "Apply Agile/Scrum mindsets, release an MVP quickly to validate market, and strictly manage the Change Request process.",
        "Hiệu quả dòng tiền": "Cash Flow Performance",
        "Rủi ro liên quan trực tiếp đến dòng ngân sách đầu tư, các chi phí phát sinh bất ngờ và khả năng sinh lời (ROI) của dự án phần mềm.": "Risks directly relating to the investment budget, unexpected costs, and return on investment (ROI) of the software project.",
        "Chi phí nhân sự tăng nhanh qua từng Sprint, nhà đầu tư chậm giải ngân ngân sách do tiến độ trễ.": "Staff costs escalate sprint-by-sprint, investors delay funding milestones due to schedule slip.",
        "📌 Phân bổ Quỹ Dự Phòng Tài Chính (PMBOK Guide):": "📌 Financial Reserve Allocation (PMBOK Guide):",
        "Quản lý bởi PM để ứng phó rủi ro đã nhận diện (Known-unknowns).": "Managed by PM to handle identified risks (Known-unknowns).",
        "Quản lý bởi Sponsor/CEO để ứng phó rủi ro chưa nhận diện (Unknown-unknowns).": "Managed by Sponsor/CEO to handle unforeseen risks (Unknown-unknowns).",
        "Thiếu hụt ngân sách:": "Budget deficits:",
        "Nhà đầu tư cắt giảm vốn giữa chừng hoặc khách hàng thanh toán chậm buộc phải giảm nhân sự.": "Investors reduce funding mid-project or client pays late, forcing resource downsizings.",
        "Vượt chi phí:": "Cost overruns:",
        "Do làm lại (rework) nhiều lần hoặc trễ tiến độ (Ví dụ: dự toán 2 tỷ thực tế chi 3 tỷ - vượt 50%).": "Due to extensive rework or delays (e.g. budgeted $140k, actual cost $150k - over budget).",
        "Biến động tỷ giá & lạm phát:": "Exchange rate volatility & inflation:",
        "Thuê Cloud (AWS, Azure) thanh toán bằng USD, USD tăng giá mạnh làm tăng chi phí vận hành.": "Cloud servers billed in USD; local currency depreciation increases operational costs.",
        "Thiết lập quỹ dự phòng rủi ro (Contingency Reserve 10-15%), sử dụng kỹ thuật quản lý giá trị thu được (EVM) để giám sát chi phí, ký hợp đồng dịch vụ dài hạn.": "Establish reserves (Contingency Reserve 10-15%), use Earned Value Management (EVM) to monitor costs, and sign long-term service agreements.",
        "Phân tích SWOT cho dự án:": "SWOT Analysis for Project:",
        "Ứng dụng di động Đăng ký môn học HSU": "HSU Mobile Course Registration App",
        "(thay thế hệ thống cũ trên laptop):": "(replacing legacy laptop portal):",
        "Độ cơ động cao:": "High Mobility:",
        "Đăng ký mọi lúc mọi nơi trên smartphone.": "Students register anytime, anywhere on smartphones.",
        "Trải nghiệm tốt:": "Great UX:",
        "UI/UX hiện đại, điều hướng mượt mà hơn web.": "Modern UI/UX, smoother navigation than web.",
        "Tốc độ xử lý:": "Processing Speed:",
        "Tối ưu API giảm nghẽn lưu lượng hơn laptop.": "Optimized APIs reduce database congestion under high traffic.",
        "Chi phí cao:": "High Costs:",
        "Ngân sách xây dựng ứng dụng iOS/Android lớn.": "Higher budget required for iOS/Android native developments.",
        "Hạn chế thiết bị:": "Device Constraints:",
        "Smartphone cũ khó tương thích mượt mà.": "Older smartphones struggle with smooth performance.",
        "Học cách sử dụng:": "Learning Curve:",
        "Giai đoạn đầu bỡ ngỡ đối với sinh viên mới.": "Initial confusion for freshmen students.",
        "Bảo mật di động:": "Mobile Security:",
        "Dễ rò rỉ dữ liệu qua Wi-Fi công cộng.": "Vulnerable to data leaks via public Wi-Fi networks.",
        "Báo lịch học, hạn học phí lập tức.": "Instant schedule & tuition fee alerts.",
        "Tích hợp dịch vụ:": "Service Integration:",
        "Kết nối thanh toán học phí, thẻ sinh viên số.": "Sync with online payment gateways & digital student IDs.",
        "Phản hồi nhanh:": "Fast Feedback:",
        "Đánh giá, báo lỗi trực tiếp trên app store.": "Rate and report bugs directly in app stores.",
        "Nghẽn sập mạng:": "Network Outage:",
        "Crash app khi hàng vạn sinh viên đăng ký cùng lúc.": "App crashes when thousands of students register at the same hour.",
        "Cập nhật hệ điều hành:": "OS Updates:",
        "Đội IT phải liên tục nâng cấp theo iOS/Android.": "IT staff must continuously patch apps for iOS/Android updates.",
        "Từ chối tải app:": "Adoption Resistance:",
        "Students demand legacy web portal out of reluctance to change.": "Students demand legacy web portal out of reluctance to change.",
        "Sinh viên đòi dùng web cũ do ngại thay đổi.": "Students demand legacy web portal out of reluctance to change.",
        "Các rủi ro kỹ thuật, thiết kế kiến trúc và tính bảo mật của sản phẩm phần mềm:": "Technical, architectural design, and product security risks:",
        "1. Chọn sai công nghệ (Technology Hype)": "1. Technology Selection (Technology Hype)",
        "Sử dụng công nghệ quá mới chưa được cộng đồng kiểm chứng (David Hillson). Cơ sở dữ liệu": "Using unverified technologies with small communities (David Hillson). The database",
        "chỉ ra lỗi tích hợp phần mềm & công nghệ mới chưa thử nghiệm là tác nhân hàng đầu gây thất bại và làm chậm tiến độ.": "indicates that software integration errors & untested technologies are leading triggers of project failure.",
        "Nguồn: David Hillson & PERIL database": "Source: David Hillson & PERIL database",
        "2. Lỗi bảo mật (Security Flaws)": "2. Security Vulnerabilities (Security Flaws)",
        ", rủi ro Broken Access Control chiếm 3.73%, Security Misconfiguration chiếm 3.00%. Điểm mới 2025 là sự bùng nổ lỗi chuỗi cung ứng phần mềm (Software Supply Chain). Ứng phó bằng": ", Broken Access Control is at 3.73%, Security Misconfiguration at 3.00%. New for 2025 is the spike in Software Supply Chain flaws. Respond by",
        "Nguồn: OWASP Top 10:2025": "Source: OWASP Top 10:2025",
        "3. Hệ thống không mở rộng (Scalability Failure)": "3. Scalability Failure",
        "Không thiết kế hiệu năng ngay từ đầu kiến trúc. Theo": "Failing to design performance early in architectural phases. According to",
        ", thiết kế đúng đòi hỏi dùng thành phần phi trạng thái (stateless), loose coupling và mở rộng theo chiều ngang (scale out).": ", correct design requires stateless components, loose coupling, and horizontal scaling (scale out).",
        "Nguồn: IBM Well-Architected Framework": "Source: IBM Well-Architected Framework",
        "4. Nợ kỹ thuật (Technical Debt)": "4. Technical Debt",
        ", nợ kỹ thuật là các thỏa hiệp thiết kế ngắn hạn làm tăng chi phí sửa chữa lâu dài. Nợ kỹ thuật cấp doanh nghiệp (enterprise technical debt) tích lũy sẽ làm đóng băng khả năng cập nhật hệ thống.": ", technical debt involves short-term trade-offs that increase long-term maintenance costs. Accumulated technical debt can freeze system updates.",
        "Nguồn: SEI Carnegie Mellon": "Source: SEI Carnegie Mellon",
        "Hành vi, kỹ năng và khả năng giao tiếp của nhân sự trong dự án:": "Behaviors, skills, and communication of project personnel:",
        "1. Thiếu hụt nhân lực toàn cầu (Talent Gap)": "1. Resource Scarcity (Talent Gap)",
        "Báo cáo": "The report",
        "chỉ ra thế giới thiếu hụt gần 30 triệu chuyên gia dự án đến năm 2035 (Nhu cầu: 65 triệu, Thực tế: 40 triệu). Việc bắt đầu dự án mà không tính đến tính khả dụng của nguồn lực là nguyên nhân chính.": "projects a worldwide shortage of 30M project professionals by 2035 (Demand: 65M, Supply: 40M). Starting projects without planning resource availability is a key cause.",
        "Thiếu hụt 30 triệu chuyên gia | PMI 2025": "30M professionals shortage | PMI 2025",
        "2. Thành viên nghỉ việc đột ngột (Key-person)": "2. Key Developer Resignation (Key-person)",
        "Mất nhân sự cốt cán (Key-person risk) làm thời gian thực hiện task tăng gấp": "Losing core developers (Key-person risk) increases task duration by",
        "3 lần": "3 times",
        "(dữ liệu PERIL). PMI xếp rủi ro nhân sự (people) là nhóm rủi ro nguồn lực nguy hiểm nhất, làm chậm trễ tiến trình bàn giao.": "(PERIL database). PMI rates resource risk (people) as the most critical resource group causing schedule slips.",
        "Tác động tiến độ tăng 3x | PERIL database": "Schedule impact up 3x | PERIL database",
        "3. Thiếu kỹ năng chuyên môn (Skill Gaps)": "3. Skill Gaps",
        "Sự thiếu hụt kỹ năng chuyên môn sâu hoặc kỹ năng mềm dẫn đến chất lượng code kém, phát sinh bug. PMI khuyến nghị đầu tư nâng cao năng lực (upskilling/reskilling) làm chiến lược ứng phó chủ động.": "Lack of technical or soft skills leads to poor code quality and bugs. PMI recommends upskilling/reskilling as a proactive response strategy.",
        "Chiến lược: Upskilling/Reskilling | PMI": "Strategy: Upskilling/Reskilling | PMI",
        "4. Giao tiếp kém hiệu quả": "4. Ineffective Communication",
        ", giao tiếp kém gây thất bại cho": ", poor communication causes failure in",
        "1/3 dự án": "1/3 of projects",
        "56% chi phí rủi ro do giao tiếp | PMI": "56% of project cost risk is due to poor communication | PMI",
        "Mô hình SWOT Nhận Diện Rủi Ro - Dự Án HSU": "SWOT Analysis for Risk Identification - HSU Project",
        "Rủi Ro Công Nghệ": "Technology Risks",
        "Rủi Ro Con Người": "Human & People Risks",
        "1. Thiếu hụt nhân sự toàn cầu (Talent Gap)": "1. Global Resource Scarcity (Talent Gap)",
        "$40k/năm &": "$40k/year &",
        "$200k/năm": "$200k/year",
        "Xem Chương trình họp Kick-off (Fig 3-2)": "View Kick-off Meeting Agenda (Fig 3-2)",
        "Chương trình Họp Khởi động Dự án HSU": "HSU Project Kick-off Meeting Agenda",
        "Phỏng theo Biểu mẫu Figure 3-2 chuẩn JWD Consulting": "Adapted from Figure 3-2 JWD Consulting Standard",
        "Hành động": "Action Item",
        "Người thực hiện": "Assigned To",
        "Hạn chót": "Due Date",
        "Phân rã cấu hình WBS chi tiết": "Draft initial WBS Structure",
        "Khảo sát nhu cầu sử dụng của sinh viên": "Conduct registration requirements survey",
        "Thiết kế sơ đồ ERD/Database mẫu": "Draft database schema ERD",
        "Soạn thảo và chốt nội dung Team Contract": "Finalize Project Team Contract",
        "Thời gian họp tiếp theo: 20:00 ngày 20/05/2026 (Online qua Google Meet)": "Next Meeting: May 20, 2026, at 20:00 via Google Meet",
        "Tên dự án / Project:": "Project Name:",
        "Hệ thống đăng ký môn học trực tuyến HSU": "HSU Online Course Registration System Project",
        "Mục tiêu họp / Objective:": "Meeting Objective:",
        "Khởi động dự án hiệu quả, giới thiệu các bên liên quan, làm rõ mục tiêu phạm vi, thời gian, ngân sách và thảo luận kế hoạch truyền thông nhóm.": "Get the project off to an effective start by introducing key stakeholders, reviewing project goals, and discussing future plans.",
        "Nội dung thảo luận (Agenda):": "Agenda Items:",
        "1. Giới thiệu thành viên nhóm và đại diện đối tác.": "1. Introductions of attendees (team members & HSU reps).",
        "2. Đọc hiểu bối cảnh và Project Charter đã soạn thảo.": "2. Review of project background, Business Case, and Project Charter.",
        "3. Thống nhất cơ cấu trách nhiệm trong nhóm.": "3. Discussion of project organizational structure and roles.",
        "4. Thống nhất mục tiêu: 12 tuần phát triển và ngân sách hạn mức $150k.": "4. Discussion of project scope, timeline (12 weeks), and budget ($150k).",
        "5. Nhận diện các rủi ro ban đầu (Lập Risk Item List).": "5. Initial brainstorming of project technical and resource risks.",
        "Bảng phân công hành động (Action Items Table):": "Action Items Table:",
        "Võ Duy Bình": "Vo Duy Binh",
        "Nguyễn Thanh Quang": "Nguyen Thanh Quang",
        "Hồng Bảo Khang": "Hong Bao Khang",
        "Trần Bá Lợi": "Tran Ba Loi"
    };

    let currentLang = 'vi';
    const en_to_vi = {};
    for (const [key, value] of Object.entries(vi_to_en)) {
        en_to_vi[value] = key;
    }

    function translatePage(lang) {
        currentLang = lang;
        document.body.classList.toggle('lang-en-active', lang === 'en');
        const dict = lang === 'en' ? vi_to_en : en_to_vi;

        function walk(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                const originalText = node.nodeValue;
                const trimmedText = originalText.trim().replace(/\s+/g, ' ');
                // Find matching key in dict
                let matchedKey = null;
                for (const key of Object.keys(dict)) {
                    if (key.trim().replace(/\s+/g, ' ') === trimmedText) {
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

        // Update active class on toggle buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const active = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('active', active);
        });
    }

    // Attach events to lang toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.currentTarget.getAttribute('data-lang');
            translatePage(lang);
        });
    });

});