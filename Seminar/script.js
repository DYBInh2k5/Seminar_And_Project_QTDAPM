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
    let isDark = true;

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


    // --- FULLSCREEN CONTROLLER ---
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error enabling fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });


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
});
