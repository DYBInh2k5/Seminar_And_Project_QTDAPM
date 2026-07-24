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

    // --- SLIDE 8 INTERACTIVE SIMULATOR (CPM / GANTT) ---
    const slide8Sliders = document.querySelectorAll('.slide8-slider');
    const slide8ResetBtn = document.getElementById('reset-slide8-btn');
    
    const delayVals = { 1: 0, 2: 0, 3: 0, 4: 0 };

    function updateSlide8() {
        slide8Sliders.forEach(slider => {
            const id = parseInt(slider.getAttribute('data-task-id'));
            const val = parseInt(slider.value);
            delayVals[id] = val;
            
            const displayEl = document.getElementById(`slide8-delay-val-${id}`);
            if (displayEl) {
                if (val > 0) {
                    displayEl.innerText = `Trễ: ${val} tuần`;
                    displayEl.style.color = '#f43f5e';
                } else {
                    displayEl.innerText = `Trễ: 0 tuần`;
                    displayEl.style.color = (id === 1 || id === 2) ? '#f43f5e' : '#10b981';
                }
            }
        });

        // 1. Task 1 (Khảo sát & Yêu cầu): starts at Week 1. Duration = 2 + delay1.
        const start1 = 1;
        const dur1 = 2 + delayVals[1];
        const end1 = start1 + dur1 - 1; 

        // 2. Task 2 (Backend): starts after Task 1. Duration = 4 + delay2.
        const start2 = end1 + 1;
        const dur2 = 4 + delayVals[2];
        const end2 = start2 + dur2 - 1;

        // 3. Task 3 (Frontend): starts after Task 1. Duration = 3 + delay3.
        const start3 = end1 + 1;
        const dur3 = 3 + delayVals[3];
        const end3 = start3 + dur3 - 1;

        // 4. Task 4 (Database): starts after Task 1. Duration = 2 + delay4.
        const start4 = end1 + 1;
        const dur4 = 2 + delayVals[4];
        const end4 = start4 + dur4 - 1;

        // Calculate Project Finish:
        // Project ends when all tasks finish + 6 weeks of UAT & Deployment
        const maxEnd = Math.max(end2, end3, end4);
        const projectEnd = maxEnd + 6;
        
        // Update bar grid spans
        const setBarGrid = (elId, start, end) => {
            const el = document.getElementById(elId);
            if (el) {
                el.style.gridColumn = `${start + 1} / ${end + 2}`; // col 1 is label, so offset by 1
            }
        };

        setBarGrid('slide8-bar-1', start1, end1);
        setBarGrid('slide8-bar-2', start2, end2);
        setBarGrid('slide8-bar-3', start3, end3);
        setBarGrid('slide8-bar-4', start4, end4);

        // Update task 3 (Frontend) criticality
        const bar3 = document.getElementById('slide8-bar-3');
        const card3 = document.getElementById('slide8-card-task3');
        const title3 = document.getElementById('slide8-title-task3');
        const floatText3 = document.getElementById('slide8-float-task3');
        const delayVal3Text = document.getElementById('slide8-delay-val-3');
        
        if (end3 >= end2) {
            if (bar3) bar3.style.background = '#f43f5e';
            if (card3) {
                card3.style.background = 'rgba(244, 63, 94, 0.05)';
                card3.style.borderColor = '#f43f5e';
            }
            if (title3) title3.innerText = '🔴 3. Lập trình Frontend';
            if (floatText3) floatText3.innerText = 'Đệm (Float): 0 tuần (CRITICAL!)';
            if (delayVal3Text && delayVals[3] > 0) delayVal3Text.style.color = '#f43f5e';
        } else {
            if (bar3) bar3.style.background = '#10b981';
            if (card3) {
                card3.style.background = 'rgba(16, 185, 129, 0.05)';
                card3.style.borderColor = '#10b981';
            }
            if (title3) title3.innerText = '🟢 3. Lập trình Frontend';
            const currentFloat3 = (end2 - end3);
            if (floatText3) floatText3.innerText = `Đệm (Float): ${currentFloat3} tuần`;
            if (delayVal3Text) delayVal3Text.style.color = '#10b981';
        }

        // Update task 4 (Database) criticality
        const bar4 = document.getElementById('slide8-bar-4');
        const card4 = document.getElementById('slide8-card-task4');
        const title4 = document.getElementById('slide8-title-task4');
        const floatText4 = document.getElementById('slide8-float-task4');
        const delayVal4Text = document.getElementById('slide8-delay-val-4');

        if (end4 >= end2) {
            if (bar4) bar4.style.background = '#f43f5e';
            if (card4) {
                card4.style.background = 'rgba(244, 63, 94, 0.05)';
                card4.style.borderColor = '#f43f5e';
            }
            if (title4) title4.innerText = '🔴 4. Thiết kế Database';
            if (floatText4) floatText4.innerText = 'Đệm (Float): 0 tuần (CRITICAL!)';
            if (delayVal4Text && delayVals[4] > 0) delayVal4Text.style.color = '#f43f5e';
        } else {
            if (bar4) bar4.style.background = '#10b981';
            if (card4) {
                card4.style.background = 'rgba(16, 185, 129, 0.05)';
                card4.style.borderColor = '#10b981';
            }
            if (title4) title4.innerText = '🟢 4. Thiết kế Database';
            const currentFloat4 = (end2 - end4);
            if (floatText4) floatText4.innerText = `Đệm (Float): ${currentFloat4} tuần`;
            if (delayVal4Text) delayVal4Text.style.color = '#10b981';
        }

        // Update summary box text and styling
        const summaryBox = document.getElementById('slide8-summary-box');
        const summaryTitle = document.getElementById('slide8-project-finish');
        const summaryComment = document.getElementById('slide8-summary-comment');

        if (projectEnd === 12) {
            if (summaryBox) {
                summaryBox.style.background = 'rgba(16, 185, 129, 0.08)';
                summaryBox.style.borderColor = '#10b981';
            }
            if (summaryTitle) {
                summaryTitle.innerText = 'Bàn giao ở Tuần 12 (Đúng hạn)';
                summaryTitle.style.color = '#065f46';
            }
            if (summaryComment) {
                summaryComment.innerText = 'Dự án đang diễn ra đúng tiến độ cơ sở (Baseline). Sự chậm trễ của các công việc ngoài đường găng không ảnh hưởng đến ngày nghiệm thu cuối cùng.';
            }
        } else {
            const delayAmt = projectEnd - 12;
            if (summaryBox) {
                summaryBox.style.background = 'rgba(244, 63, 94, 0.08)';
                summaryBox.style.borderColor = '#f43f5e';
            }
            if (summaryTitle) {
                summaryTitle.innerText = `Bàn giao ở Tuần ${projectEnd} (Trễ ${delayAmt} tuần!)`;
                summaryTitle.style.color = '#991b1b';
            }
            if (summaryComment) {
                summaryComment.innerText = `Cảnh báo! Sự chậm trễ của công việc thuộc Đường găng đã tác động dây chuyền, đẩy lùi ngày nghiệm thu dự án. Cần thực hiện các biện pháp Crashing (tăng ca) hoặc Fast-tracking (chạy song song) để cứu tiến độ.`;
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
});
