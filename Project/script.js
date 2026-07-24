document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. MOCK DATA & LOCAL STORAGE
    // ==========================================
    
    // Core state
    let state = {
        isDark: true,
        registrationOpen: true,
        activePortal: 'student-portal',
        activeStudentView: 'register-view',
        activeAdminView: 'admin-classes-view',
        
        student: {
            id: '22301500',
            name: 'Võ Duy Bình',
            class: 'Nhóm 3 - SW403DE01',
            completedCourses: ['CO101', 'CO102'], // Completed prerequisites
            registeredClasses: [] // Array of class codes
        },
        
        classes: [
            {
                code: 'CSE301-1',
                name: 'Quản trị dự án phần mềm',
                credits: 3,
                prereq: 'CO101',
                day: 1, // Thứ 2 (1 = Mon, 2 = Tue, ..., 6 = Sat)
                startPeriod: 1,
                endPeriod: 3,
                maxCap: 45,
                registered: 42,
                instructor: 'Nguyễn Văn Sơn'
            },
            {
                code: 'CSE302-1',
                name: 'Kiểm thử phần mềm',
                credits: 3,
                prereq: 'CO101',
                day: 2, // Thứ 3
                startPeriod: 4,
                endPeriod: 6,
                maxCap: 40,
                registered: 35,
                instructor: 'Nguyễn Văn Sơn'
            },
            {
                code: 'CSE401-1',
                name: 'Kiến trúc phần mềm',
                credits: 3,
                prereq: 'CO102',
                day: 3, // Thứ 4
                startPeriod: 1,
                endPeriod: 3,
                maxCap: 45,
                registered: 28,
                instructor: 'Nguyễn Văn Sơn'
            },
            {
                code: 'CSE402-1',
                name: 'Chuyên đề di động HSU',
                credits: 3,
                prereq: null,
                day: 3, // Thứ 4 (Trùng lịch với CSE401-1)
                startPeriod: 1,
                endPeriod: 3,
                maxCap: 40,
                registered: 18,
                instructor: 'Trần Văn A'
            },
            {
                code: 'CSE501-1',
                name: 'Công nghệ mạng mới',
                credits: 3,
                prereq: 'CO204', // Môn này chưa hoàn thành tiên quyết
                day: 4, // Thứ 5
                startPeriod: 7,
                endPeriod: 9,
                maxCap: 45,
                registered: 10,
                instructor: 'Nguyễn Văn B'
            },
            {
                code: 'CSE303-1',
                name: 'Cơ sở dữ liệu NoSQL',
                credits: 3,
                prereq: null,
                day: 5, // Thứ 6
                startPeriod: 4,
                endPeriod: 6,
                maxCap: 30,
                registered: 30, // Đầy sĩ số
                instructor: 'Lê Thị C'
            },
            {
                code: 'GEN101-1',
                name: 'Kỹ năng mềm HSU',
                credits: 2,
                prereq: null,
                day: 6, // Thứ 7
                startPeriod: 10,
                endPeriod: 12,
                maxCap: 50,
                registered: 25,
                instructor: 'Hoàng Thị D'
            }
        ],
        
        curriculum: [
            { id: 'CO101', name: 'Nhập môn Kỹ thuật phần mềm', credits: 3, type: 'Bắt buộc', prereq: null, grade: 3.5, status: 'Completed' },
            { id: 'CO102', name: 'Cấu trúc dữ liệu & giải thuật', credits: 3, type: 'Bắt buộc', prereq: null, grade: 3.0, status: 'Completed' },
            { id: 'CO204', name: 'Kiến trúc máy tính & Mạng', credits: 3, type: 'Bắt buộc', prereq: null, grade: null, status: 'Not Started' },
            { id: 'CSE301', name: 'Quản trị dự án phần mềm', credits: 3, type: 'Bắt buộc', prereq: 'CO101', grade: null, status: 'Open' },
            { id: 'CSE302', name: 'Kiểm thử phần mềm', credits: 3, type: 'Bắt buộc', prereq: 'CO101', grade: null, status: 'Open' },
            { id: 'CSE401', name: 'Kiến trúc phần mềm', credits: 3, type: 'Bắt buộc', prereq: 'CO102', grade: null, status: 'Open' },
            { id: 'CSE501', name: 'Công nghệ mạng mới', credits: 3, type: 'Tự chọn', prereq: 'CO204', grade: null, status: 'Open' }
        ],
        
        transactions: [
            { time: '15/07/2026 10:15:04', type: 'Đăng nhập', classCode: '-', className: 'Đăng nhập hệ thống thành công', status: 'registered' }
        ],

        // PM Task scheduling
        pm: {
            delays: {
                1: 0, // Task 1 Delay (Thu thập yêu cầu)
                2: 0, // Task 2 Delay (Lập trình Backend)
                3: 0, // Task 3 Delay (Lập trình Frontend)
                4: 0  // Task 4 Delay (Thiết kế Database)
            },
            tasks: [
                { id: 1, name: 'Khởi động & Yêu cầu', baseStart: 1, duration: 2, critical: true, slack: 0, deps: [] },
                { id: 2, name: 'Phân tích thiết kế', baseStart: 3, duration: 2, critical: true, slack: 0, deps: [1] },
                { id: 3, name: 'Lập trình Backend', baseStart: 5, duration: 3, critical: true, slack: 0, deps: [2] },
                { id: 4, name: 'Lập trình Frontend', baseStart: 5, duration: 2, critical: false, slack: 1, deps: [2] },
                { id: 5, name: 'Thiết kế Database', baseStart: 5, duration: 1, critical: false, slack: 2, deps: [2] },
                { id: 6, name: 'Tích hợp hệ thống', baseStart: 8, duration: 1, critical: true, slack: 0, deps: [3, 4, 5] },
                { id: 7, name: 'Kiểm thử hệ thống', baseStart: 9, duration: 1, critical: true, slack: 0, deps: [6] },
                { id: 8, name: 'Sửa lỗi & UAT', baseStart: 10, duration: 1, critical: true, slack: 0, deps: [7] },
                { id: 9, name: 'Triển khai Go Live', baseStart: 11, duration: 1, critical: true, slack: 0, deps: [8] },
                { id: 10, name: 'Nghiệm thu bàn giao', baseStart: 12, duration: 1, critical: true, slack: 0, deps: [9] }
            ]
        }
    };

    // Load state from local storage if exists
    if (localStorage.getItem('hsu_portal_state')) {
        try {
            state = JSON.parse(localStorage.getItem('hsu_portal_state'));
        } catch (e) {
            console.error("Error reading localStorage state:", e);
        }
    }

    function saveState() {
        localStorage.setItem('hsu_portal_state', JSON.stringify(state));
    }


    // ==========================================
    // 2. TOAST NOTIFICATION UTILITY
    // ==========================================
    const toastWrapper = document.getElementById('toast-wrapper');
    
    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        let icon = '';
        if (type === 'success') icon = '✓';
        else if (type === 'error') icon = '✗';
        else icon = 'ℹ';

        toast.innerHTML = `
            <span style="font-size: 1.1rem; font-weight: 800;">${icon}</span>
            <div class="toast-message">${message}</div>
        `;
        
        toastWrapper.appendChild(toast);
        
        // Remove toast after 4s
        setTimeout(() => {
            toast.style.animation = 'slideIn 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28) reverse';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 4000);
    }


    // ==========================================
    // 3. UI RENDERING FUNCTIONS
    // ==========================================
    
    // Switch Portal view
    function setPortal(portalId) {
        state.activePortal = portalId;
        saveState();
        
        document.querySelectorAll('.portal-tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-portal') === portalId);
        });

        document.querySelectorAll('.portal-pane').forEach(pane => {
            pane.classList.toggle('active', pane.getAttribute('id') === portalId);
        });

        // Hide/Show student profile on top right depending on portal
        const profileBadge = document.getElementById('user-profile-badge');
        if (portalId === 'student-portal') {
            profileBadge.style.display = 'flex';
            profileBadge.querySelector('.user-avatar').innerText = 'DB';
            profileBadge.querySelector('.user-avatar').style.background = 'var(--accent)';
            profileBadge.querySelector('.user-name').innerText = 'Võ Duy Bình';
        } else if (portalId === 'admin-portal') {
            profileBadge.style.display = 'flex';
            profileBadge.querySelector('.user-avatar').innerText = 'VS';
            profileBadge.querySelector('.user-avatar').style.background = 'var(--primary)';
            profileBadge.querySelector('.user-name').innerText = 'Cán bộ Nguyễn Văn Sơn';
        } else {
            profileBadge.style.display = 'flex';
            profileBadge.querySelector('.user-avatar').innerText = 'PM';
            profileBadge.querySelector('.user-avatar').style.background = 'var(--success)';
            profileBadge.querySelector('.user-name').innerText = 'Project Manager';
        }
    }

    // Switch sidebar views
    function setSubView(portalId, viewId) {
        if (portalId === 'student-portal') {
            state.activeStudentView = viewId;
        } else if (portalId === 'admin-portal') {
            state.activeAdminView = viewId;
        }
        saveState();

        const portalPane = document.getElementById(portalId);
        portalPane.querySelectorAll('.menu-item').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-view') === viewId);
        });

        portalPane.querySelectorAll('.view-pane').forEach(pane => {
            pane.classList.toggle('active', pane.getAttribute('id') === viewId);
        });

        // Specific view actions
        if (viewId === 'timetable-view') {
            renderTimetable();
        }
    }

    // Render classes table (Student Portal)
    function renderStudentClasses() {
        const tableBody = document.getElementById('open-classes-table-body');
        tableBody.innerHTML = '';

        state.classes.forEach(cls => {
            const isRegistered = state.student.registeredClasses.includes(cls.code);
            const isFull = cls.registered >= cls.maxCap;
            
            // Format schedule
            const weekdays = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
            const scheduleText = `${weekdays[cls.day - 1]} (Tiết ${cls.startPeriod}-${cls.endPeriod})`;
            
            // Check condition button state
            let btnClass = 'primary-btn';
            let btnText = 'Đăng ký';
            let btnDisabled = '';
            
            if (isRegistered) {
                btnClass = 'danger-btn';
                btnText = 'Hủy đăng ký';
            } else if (!state.registrationOpen) {
                btnText = 'Đăng ký';
                btnDisabled = 'disabled';
            } else if (isFull) {
                btnClass = 'primary-btn';
                btnText = 'Hết chỗ';
                btnDisabled = 'disabled';
            }

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${cls.code}</strong></td>
                <td>${cls.name}</td>
                <td style="text-align: center;">${cls.credits}</td>
                <td style="text-align: center;">${cls.prereq ? `<span class="key-badge">${cls.prereq}</span>` : '<span style="color:var(--text-secondary)">-</span>'}</td>
                <td>${scheduleText}</td>
                <td style="text-align: center;"><span class="${isFull ? 'class-full' : 'class-available'}">${cls.registered}/${cls.maxCap}</span></td>
                <td style="text-align: center;">${isRegistered ? '<span class="status-badge registered">Đã đăng ký</span>' : `<span class="status-badge ${isFull ? 'conflict' : 'registered'}" style="opacity: 0.6;">${isFull ? 'Đã đầy' : 'Đang mở'}</span>`}</td>
                <td>
                    <button class="${btnClass} action-reg-btn" data-code="${cls.code}" ${btnDisabled}>${btnText}</button>
                </td>
            `;
            tableBody.appendChild(tr);
        });

        // Render registered classes list at bottom
        const regTableBody = document.getElementById('registered-classes-table-body');
        regTableBody.innerHTML = '';

        const registeredClasses = state.classes.filter(cls => state.student.registeredClasses.includes(cls.code));

        if (registeredClasses.length === 0) {
            regTableBody.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; color: var(--text-secondary); padding: 20px 0;">Chưa đăng ký môn học nào.</td>
                </tr>
            `;
        } else {
            registeredClasses.forEach(cls => {
                const weekdays = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
                const scheduleText = `${weekdays[cls.day - 1]} (Tiết ${cls.startPeriod}-${cls.endPeriod})`;
                
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><strong>${cls.code}</strong></td>
                    <td>${cls.name}</td>
                    <td style="text-align: center;">${cls.credits}</td>
                    <td>${scheduleText}</td>
                    <td>
                        <button class="danger-btn action-cancel-btn" data-code="${cls.code}">Hủy học phần</button>
                    </td>
                `;
                regTableBody.appendChild(tr);
            });
        }

        // Update Rules indicators
        updateRulesIndicators(registeredClasses);
    }

    // Update rules check summaries (Student Portal)
    function updateRulesIndicators(registeredClasses) {
        // 1. Credits rule
        let totalCredits = 0;
        registeredClasses.forEach(cls => totalCredits += cls.credits);
        
        const creditsSum = document.getElementById('student-credits-sum');
        creditsSum.innerText = `${totalCredits} / 20 tín chỉ`;
        
        const ruleCredits = document.getElementById('rule-credits');
        if (totalCredits > 20) {
            ruleCredits.className = 'rule-indicator-card error';
            showToast('Cảnh báo: Bạn đã vượt quá giới hạn 20 tín chỉ tối đa!', 'error');
        } else if (totalCredits >= 12) {
            ruleCredits.className = 'rule-indicator-card success';
        } else {
            ruleCredits.className = 'rule-indicator-card warning'; // too low
        }

        // 2. Schedule clash rule
        const ruleClashStatus = document.getElementById('rule-clash-status');
        const ruleClash = document.getElementById('rule-clash');
        
        let hasClash = false;
        let clashMessage = 'Không trùng lịch';
        
        // Loop and check clashes
        for (let i = 0; i < registeredClasses.length; i++) {
            for (let j = i + 1; j < registeredClasses.length; j++) {
                const a = registeredClasses[i];
                const b = registeredClasses[j];
                
                if (a.day === b.day) {
                    // Check period overlap
                    if ((a.startPeriod <= b.endPeriod) && (b.startPeriod <= a.endPeriod)) {
                        hasClash = true;
                        clashMessage = `Trùng lịch: ${a.code} & ${b.code}`;
                        break;
                    }
                }
            }
            if (hasClash) break;
        }

        ruleClashStatus.innerText = clashMessage;
        if (hasClash) {
            ruleClash.className = 'rule-indicator-card error';
            ruleClashStatus.style.color = 'var(--danger)';
        } else {
            ruleClash.className = 'rule-indicator-card success';
            ruleClashStatus.style.color = 'inherit';
        }

        // 3. Prerequisite rule
        const rulePrereqStatus = document.getElementById('rule-prereq-status');
        const rulePrereq = document.getElementById('rule-prereq');
        
        let prereqFail = false;
        let failMessage = 'Hợp lệ';

        for (let cls of registeredClasses) {
            if (cls.prereq && !state.student.completedCourses.includes(cls.prereq)) {
                prereqFail = true;
                failMessage = `Thiếu môn tiên quyết: ${cls.prereq}`;
                break;
            }
        }

        rulePrereqStatus.innerText = failMessage;
        if (prereqFail) {
            rulePrereq.className = 'rule-indicator-card error';
            rulePrereqStatus.style.color = 'var(--danger)';
        } else {
            rulePrereq.className = 'rule-indicator-card success';
            rulePrereqStatus.style.color = 'inherit';
        }
    }

    // Render Weekly Timetable
    function renderTimetable() {
        const timetableGrid = document.querySelector('.timetable-grid');
        
        // Clear cells except headers
        const headers = timetableGrid.querySelectorAll('.grid-header');
        timetableGrid.innerHTML = '';
        headers.forEach(h => timetableGrid.appendChild(h));

        // Render 12 periods (rows)
        for (let period = 1; period <= 12; period++) {
            // Left hour cell
            const hourCell = document.createElement('div');
            hourCell.className = 'grid-cell-hour';
            hourCell.innerText = `Tiết ${period}`;
            timetableGrid.appendChild(hourCell);

            // 6 days columns (Mon to Sat)
            for (let day = 1; day <= 6; day++) {
                const dayCell = document.createElement('div');
                dayCell.className = 'grid-cell-day';
                dayCell.setAttribute('data-day', day);
                dayCell.setAttribute('data-period', period);
                timetableGrid.appendChild(dayCell);
            }
        }

        // Fill registered classes as overlays
        const colors = [
            'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', // Blue
            'linear-gradient(135deg, #10b981 0%, #059669 100%)', // Green
            'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)', // Purple
            'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', // Amber
            'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'  // Pink
        ];

        let colorIndex = 0;
        state.classes.forEach(cls => {
            if (state.student.registeredClasses.includes(cls.code)) {
                // Find matching cells
                // We'll place the overlay div in the cell of startPeriod and size it
                const startCell = timetableGrid.querySelector(`.grid-cell-day[data-day="${cls.day}"][data-period="${cls.startPeriod}"]`);
                if (startCell) {
                    const block = document.createElement('div');
                    block.className = 'timetable-event-block';
                    
                    const spanCount = cls.endPeriod - cls.startPeriod + 1;
                    const heightVal = spanCount * 100 + (spanCount - 1) * 12.5; // Calculate percentage height to overflow beautifully
                    
                    block.style.height = `${heightVal}%`;
                    block.style.background = colors[colorIndex % colors.length];
                    colorIndex++;

                    block.innerHTML = `
                        <span class="event-code">${cls.code}</span>
                        <span class="event-name" style="font-size:0.7rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${cls.name}</span>
                        <span class="event-loc" style="font-size:0.6rem; opacity:0.8;">P. B204</span>
                    `;
                    
                    startCell.appendChild(block);
                }
            }
        });
    }

    // Render Curriculum Curriculum Page
    function renderCurriculum() {
        const tbody = document.getElementById('curriculum-table-body');
        tbody.innerHTML = '';

        state.curriculum.forEach(item => {
            const isCompleted = state.student.completedCourses.includes(item.id);
            const isRegistered = state.student.registeredClasses.some(code => code.startsWith(item.id));
            
            let statusText = 'Mở đăng ký';
            let statusClass = 'registered';
            let statusOpacity = '1';
            let scoreText = item.grade ? item.grade.toFixed(1) : '-';

            if (isCompleted) {
                statusText = 'Hoàn thành';
                statusClass = 'registered';
                statusOpacity = '0.6';
            } else if (isRegistered) {
                statusText = 'Đang học';
                statusClass = 'conflict';
            } else if (item.prereq && !state.student.completedCourses.includes(item.prereq)) {
                statusText = 'Khóa (Thiếu môn tiên quyết)';
                statusClass = 'cancelled';
            }

            const tr = document.createElement('tr');
            tr.style.opacity = statusOpacity;
            tr.innerHTML = `
                <td><strong>${item.id}</strong></td>
                <td>${item.name}</td>
                <td style="text-align: center;">${item.credits}</td>
                <td style="text-align: center;">${item.type}</td>
                <td style="text-align: center;">${item.prereq ? `<span class="key-badge">${item.prereq}</span>` : '-'}</td>
                <td style="text-align: center; font-family: monospace;">${scoreText}</td>
                <td style="text-align: center;">
                    <span class="status-badge ${statusClass}">${statusText}</span>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    // Render Transaction History logs
    function renderHistory() {
        const tbody = document.getElementById('history-table-body');
        tbody.innerHTML = '';

        if (state.transactions.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; color: var(--text-secondary);">Không có lịch sử giao dịch.</td>
                </tr>
            `;
            return;
        }

        // Render from newest to oldest
        [...state.transactions].reverse().forEach(t => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td style="font-family: monospace; font-size: 0.75rem;">${t.time}</td>
                <td><strong>${t.type}</strong></td>
                <td style="font-family: monospace;">${t.classCode}</td>
                <td>${t.className}</td>
                <td style="text-align: center;">
                    <span class="status-badge ${t.status === 'registered' ? 'registered' : 'cancelled'}">
                        ${t.status === 'registered' ? 'Thành công' : 'Đã hủy / Lỗi'}
                    </span>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    // Render Admin view portal
    function renderAdminPortal() {
        // Toggle registration button text
        const toggleBtn = document.getElementById('toggle-registration-btn');
        toggleBtn.innerText = state.registrationOpen ? 'Đóng Cổng Đăng Ký' : 'Mở Cổng Đăng Ký';
        toggleBtn.className = state.registrationOpen ? 'primary-btn danger-btn' : 'primary-btn success-btn';

        const tbody = document.getElementById('admin-classes-table-body');
        tbody.innerHTML = '';

        state.classes.forEach((cls, idx) => {
            const isFull = cls.registered >= cls.maxCap;
            const weekdays = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
            const scheduleText = `${weekdays[cls.day - 1]} (Tiết ${cls.startPeriod}-${cls.endPeriod})`;

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${cls.code}</strong></td>
                <td>${cls.name}</td>
                <td>${scheduleText}</td>
                <td style="text-align: center;">
                    <input type="number" class="cf-input admin-cap-input" data-index="${idx}" value="${cls.maxCap}" min="${cls.registered}" style="width: 65px; padding: 4px;">
                </td>
                <td style="text-align: center;">${cls.maxCap - cls.registered}</td>
                <td style="text-align: center;">
                    <span class="status-badge ${isFull ? 'conflict' : 'registered'}">${isFull ? 'Đầy sĩ số' : 'Còn chỗ'}</span>
                </td>
                <td>
                    <button class="primary-btn update-cap-btn" data-index="${idx}" style="padding: 4px 10px; font-size: 0.75rem;">Lưu</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        // Render Admin stats report view
        renderAdminStats();
    }

    function renderAdminStats() {
        const totalClasses = state.classes.length;
        let totalStudents = 0;
        let fullClasses = 0;

        state.classes.forEach(c => {
            totalStudents += c.registered;
            if (c.registered / c.maxCap >= 0.9) {
                fullClasses++;
            }
        });

        document.getElementById('stat-total-classes').innerText = totalClasses;
        document.getElementById('stat-total-students').innerText = totalStudents;
        
        const filledRatio = totalClasses > 0 ? (fullClasses / totalClasses) * 100 : 0;
        document.getElementById('stat-filled-ratio').innerText = `${filledRatio.toFixed(0)}%`;

        const tbody = document.getElementById('admin-stats-table-body');
        tbody.innerHTML = '';

        // Summarize stats by Course code
        // For each class, calculate hypothetical revenue (credits * $150 per credit * registered students)
        state.classes.forEach(cls => {
            const rev = cls.credits * 150 * cls.registered;
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${cls.code.split('-')[0]}</strong></td>
                <td>${cls.name}</td>
                <td style="text-align: center;">${cls.credits}</td>
                <td style="text-align: center;">1 Lớp</td>
                <td style="text-align: center;">${cls.registered}</td>
                <td style="text-align: center; font-family: monospace; font-weight: 700; color: var(--success);">$${rev.toLocaleString()}</td>
            `;
            tbody.appendChild(tr);
        });
    }


    // ==========================================
    // 4. BUSINESS LOGIC & INTERACTION
    // ==========================================
    
    // Register Course Action
    function registerClass(classCode) {
        if (!state.registrationOpen) {
            showToast('Hệ thống: Cổng đăng ký học phần đã đóng!', 'error');
            return;
        }

        const cls = state.classes.find(c => c.code === classCode);
        if (!cls) return;

        // Constraint 1: Already registered
        if (state.student.registeredClasses.includes(classCode)) {
            cancelClass(classCode);
            return;
        }

        // Constraint 2: Class size limit
        if (cls.registered >= cls.maxCap) {
            showToast(`Đăng ký thất bại: Lớp học phần ${classCode} đã hết chỗ trống!`, 'error');
            logTransaction('Lỗi đăng ký', classCode, cls.name, 'cancelled');
            return;
        }

        // Constraint 3: Max credits limit
        const registeredClasses = state.classes.filter(c => state.student.registeredClasses.includes(c.code));
        let currentCredits = 0;
        registeredClasses.forEach(c => currentCredits += c.credits);

        if (currentCredits + cls.credits > 20) {
            showToast(`Đăng ký thất bại: Vượt quá giới hạn 20 tín chỉ tối đa! (Hiện có ${currentCredits} TC)`, 'error');
            logTransaction('Lỗi đăng ký', classCode, cls.name, 'cancelled');
            return;
        }

        // Constraint 4: Prerequisite check
        if (cls.prereq && !state.student.completedCourses.includes(cls.prereq)) {
            showToast(`Đăng ký thất bại: Bạn chưa hoàn thành môn học tiên quyết ${cls.prereq}!`, 'error');
            logTransaction('Lỗi đăng ký', classCode, cls.name, 'cancelled');
            return;
        }

        // Constraint 5: Schedule clash check
        let hasClash = false;
        let clashingClass = null;

        for (let reg of registeredClasses) {
            if (reg.day === cls.day) {
                if ((cls.startPeriod <= reg.endPeriod) && (reg.startPeriod <= cls.endPeriod)) {
                    hasClash = true;
                    clashingClass = reg;
                    break;
                }
            }
        }

        if (hasClash) {
            showToast(`Đăng ký thất bại: Trùng lịch học với lớp ${clashingClass.code} (${clashingClass.name})!`, 'error');
            logTransaction('Lỗi đăng ký', classCode, cls.name, 'conflict');
            return;
        }

        // ALL CHECKS PASSED - EXECUTE REGISTER
        state.student.registeredClasses.push(classCode);
        cls.registered++;
        
        showToast(`Đăng ký thành công lớp học phần ${classCode}!`, 'success');
        logTransaction('Đăng ký lớp HP', classCode, cls.name, 'registered');

        saveState();
        renderStudentClasses();
        renderAdminPortal();
    }

    // Cancel Course Action
    function cancelClass(classCode) {
        if (!state.registrationOpen) {
            showToast('Hệ thống: Cổng đăng ký học phần đã đóng, không thể hủy!', 'error');
            return;
        }

        const cls = state.classes.find(c => c.code === classCode);
        if (!cls) return;

        state.student.registeredClasses = state.student.registeredClasses.filter(code => code !== classCode);
        if (cls.registered > 0) cls.registered--;

        showToast(`Đã hủy đăng ký lớp học phần ${classCode}!`, 'info');
        logTransaction('Hủy đăng ký', classCode, cls.name, 'cancelled');

        saveState();
        renderStudentClasses();
        renderAdminPortal();
    }

    function logTransaction(type, classCode, className, status) {
        const now = new Date();
        const timeStr = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth()+1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        
        state.transactions.push({
            time: timeStr,
            type: type,
            classCode: classCode,
            className: className,
            status: status
        });
    }


    // ==========================================
    // 5. PROJECT MANAGEMENT CONTROLLER (PM PORTAL)
    // ==========================================
    const delaySliders = document.querySelectorAll('.pm-col-left .delay-slider');
    const resetPMBtn = document.getElementById('reset-schedule-btn');

    function calculatePMSchedule() {
        // 1. Gather slider values
        delaySliders.forEach(slider => {
            const taskId = parseInt(slider.getAttribute('data-task-id'));
            const delayVal = parseInt(slider.value);
            state.pm.delays[taskId] = delayVal;
            
            // Update display text beside label
            document.getElementById(`delay-val-${taskId}`).innerText = `Trễ: ${delayVal} tuần`;
            
            // Add critical/delayed coloring class to cards
            const card = slider.closest('.delay-slider-card');
            card.classList.toggle('delayed-state', delayVal > 0);
        });

        // 2. Perform PM Forward Pass scheduling calculation
        // Tasks mapping
        const tasks = [...state.pm.tasks];
        const delays = state.pm.delays;

        // Start and end parameters
        const computed = {};

        // Run forward pass loop
        tasks.forEach(t => {
            let start = t.baseStart;
            let duration = t.duration;

            // If task has dependencies, start after the max End time of all dependencies
            if (t.deps.length > 0) {
                let maxDepEnd = 1;
                t.deps.forEach(depId => {
                    const depEnd = computed[depId].end;
                    if (depEnd > maxDepEnd) maxDepEnd = depEnd;
                });
                start = Math.max(start, maxDepEnd + 1);
            }

            // Apply delay specifically configured for simulation
            let sliderDelay = 0;
            if (t.id === 1) sliderDelay = delays[1]; // Request phase
            if (t.id === 3) sliderDelay = delays[2]; // Backend
            if (t.id === 4) sliderDelay = delays[3]; // Frontend
            if (t.id === 5) sliderDelay = delays[4]; // Database

            if (t.id === 1) {
                // Task 1 delay increases duration, start remains at 1
                duration += sliderDelay;
            } else {
                // Other tasks delay shift the start
                start += sliderDelay;
            }
            const end = start + duration - 1;

            computed[t.id] = {
                start: start,
                end: end,
                duration: duration,
                delay: sliderDelay
            };
        });

        // Save computed schedules to task list
        tasks.forEach(t => {
            t.computedStart = computed[t.id].start;
            t.computedEnd = computed[t.id].end;
        });

        // 3. Compute dynamic slack and criticality for parallel tasks (3, 4, 5)
        // Successor is Task 6 (Tích hợp hệ thống)
        tasks.forEach(t => {
            if (t.id === 3 || t.id === 4 || t.id === 5) {
                t.computedSlack = computed[6].start - 1 - computed[t.id].end;
                t.computedCritical = (t.computedSlack === 0);
            } else {
                t.computedSlack = 0;
                t.computedCritical = true;
            }
        });

        // Update HTML slider card headers dynamically (titles and badges)
        const pmTitleTask3 = document.getElementById('pm-title-task3');
        const pmFloatTask3 = document.getElementById('pm-float-task3');
        const pmCard3 = document.getElementById('pm-card-task3');
        
        const task3 = tasks.find(t => t.id === 4); // Frontend is task index 4 in state
        if (pmTitleTask3 && pmFloatTask3) {
            if (task3.computedCritical) {
                pmTitleTask3.innerText = '🔴 3. Lập trình Frontend';
                pmFloatTask3.innerText = 'Đệm (Float): 0 tuần (CRITICAL!)';
                pmFloatTask3.className = 'float-badge success-bg';
                pmFloatTask3.style.background = 'rgba(239, 68, 68, 0.15)';
                pmFloatTask3.style.color = 'var(--danger)';
                if (pmCard3) pmCard3.style.borderLeft = '4px solid var(--danger)';
            } else {
                pmTitleTask3.innerText = '🟢 3. Lập trình Frontend';
                pmFloatTask3.innerText = `Đệm (Float): ${task3.computedSlack} tuần`;
                pmFloatTask3.className = 'float-badge success-bg';
                pmFloatTask3.style.background = '';
                pmFloatTask3.style.color = '';
                if (pmCard3) pmCard3.style.borderLeft = '';
            }
        }

        const pmTitleTask4 = document.getElementById('pm-title-task4');
        const pmFloatTask4 = document.getElementById('pm-float-task4');
        const pmCard4 = document.getElementById('pm-card-task4');
        
        const task4 = tasks.find(t => t.id === 5); // Database is task index 5 in state
        if (pmTitleTask4 && pmFloatTask4) {
            if (task4.computedCritical) {
                pmTitleTask4.innerText = '🔴 4. Thiết kế Database';
                pmFloatTask4.innerText = 'Đệm (Float): 0 tuần (CRITICAL!)';
                pmFloatTask4.className = 'float-badge success-bg';
                pmFloatTask4.style.background = 'rgba(239, 68, 68, 0.15)';
                pmFloatTask4.style.color = 'var(--danger)';
                if (pmCard4) pmCard4.style.borderLeft = '4px solid var(--danger)';
            } else {
                pmTitleTask4.innerText = '🟢 4. Thiết kế Database';
                pmFloatTask4.innerText = `Đệm (Float): ${task4.computedSlack} tuần`;
                pmFloatTask4.className = 'float-badge success-bg';
                pmFloatTask4.style.background = '';
                pmFloatTask4.style.color = '';
                if (pmCard4) pmCard4.style.borderLeft = '';
            }
        }

        // 4. Determine Project Completion date (end of Task 10)
        const finalTask = tasks.find(t => t.id === 10);
        const projectEndWeek = finalTask.computedEnd;
        
        const deliveryStatus = document.getElementById('pm-delivery-status');
        const endWeekBadge = deliveryStatus.querySelector('strong');

        if (projectEndWeek > 12) {
            endWeekBadge.innerText = `Tuần ${projectEndWeek} (Chậm Tiến Độ)`;
            endWeekBadge.className = 'color-critical';
            deliveryStatus.style.background = 'rgba(239, 68, 68, 0.05)';
        } else {
            endWeekBadge.innerText = `Tuần 12 (Đúng Hạn)`;
            endWeekBadge.className = 'color-success';
            deliveryStatus.style.background = 'transparent';
        }

        // 5. Render Gantt Chart UI
        renderGanttChart(tasks, projectEndWeek);
    }

    function renderGanttChart(tasks, projectEndWeek) {
        const wrapper = document.getElementById('gantt-bars-wrapper');
        wrapper.innerHTML = '';

        const colCount = Math.max(12, projectEndWeek);
        const weeksHeader = document.querySelector('.gantt-weeks-header');
        if (weeksHeader) {
            weeksHeader.style.gridTemplateColumns = `repeat(${colCount}, 1fr)`;
            const weekSpans = weeksHeader.querySelectorAll('span');
            weekSpans.forEach((span, idx) => {
                if (idx < colCount) {
                    span.style.display = 'block';
                } else {
                    span.style.display = 'none';
                }
            });
        }

        // Render each row
        tasks.forEach(t => {
            const row = document.createElement('div');
            row.className = 'gantt-bar-row';
            
            // Left Task Name
            const nameDiv = document.createElement('div');
            nameDiv.className = 'gantt-task-name';
            const isCritical = t.computedCritical;
            nameDiv.innerText = `${isCritical ? '🔴' : '🟢'} ${t.name}`;
            row.appendChild(nameDiv);

            // Right Cell Tracks
            const cellsDiv = document.createElement('div');
            cellsDiv.className = 'gantt-bar-cells';
            cellsDiv.style.gridTemplateColumns = `repeat(${colCount}, 1fr)`;

            // Render exact number of cells
            for (let w = 1; w <= colCount; w++) {
                const cell = document.createElement('div');
                cell.className = 'gantt-cell';
                cellsDiv.appendChild(cell);
            }

            // Compute coordinates inside grid cells
            // Start is 1-indexed, so 1 = left boundary
            const leftPct = ((t.computedStart - 1) / colCount) * 100;
            const widthPct = (t.duration / colCount) * 100;

            const bar = document.createElement('div');
            
            let isDelayed = false;
            if (t.id === 1 && state.pm.delays[1] > 0) isDelayed = true;
            if (t.id === 3 && state.pm.delays[2] > 0) isDelayed = true;
            if (t.id === 4 && state.pm.delays[3] > 0) isDelayed = true;
            if (t.id === 5 && state.pm.delays[4] > 0) isDelayed = true;
            
            // Subsequent tasks on critical path shift automatically (meaning they inherit delay)
            if (isCritical && (state.pm.delays[1] > 0 || state.pm.delays[2] > 0) && t.id > 1) {
                isDelayed = true;
            }

            bar.className = `gantt-bar ${isCritical ? 'critical-path-task' : 'normal-task'} ${isDelayed ? 'delayed-gantt-bar' : ''}`;
            bar.style.left = `${leftPct}%`;
            bar.style.width = `${widthPct}%`;
            bar.innerText = `W${t.computedStart}-${t.computedEnd}`;

            cellsDiv.appendChild(bar);
            row.appendChild(cellsDiv);
            wrapper.appendChild(row);
        });
    }

    // Slider inputs listeners
    delaySliders.forEach(slider => {
        slider.addEventListener('input', calculatePMSchedule);
    });

    // Reset progress button
    resetPMBtn.addEventListener('click', () => {
        delaySliders.forEach(slider => {
            slider.value = 0;
        });
        calculatePMSchedule();
        showToast('Đã khôi phục tiến độ dự án ban đầu!', 'info');
    });


    // ==========================================
    // 6. EVENT LISTENERS SETUP
    // ==========================================
    
    // Portal Switch Tabs click
    document.querySelectorAll('.portal-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setPortal(btn.getAttribute('data-portal'));
        });
    });

    // Student Sidebar menu switches
    const studentPortalPane = document.getElementById('student-portal');
    studentPortalPane.querySelectorAll('.menu-item').forEach(btn => {
        btn.addEventListener('click', () => {
            setSubView('student-portal', btn.getAttribute('data-view'));
        });
    });

    // Admin Sidebar menu switches
    const adminPortalPane = document.getElementById('admin-portal');
    adminPortalPane.querySelectorAll('.menu-item').forEach(btn => {
        btn.addEventListener('click', () => {
            setSubView('admin-portal', btn.getAttribute('data-view'));
        });
    });

    // Student Login Submit
    document.getElementById('login-submit-btn').addEventListener('click', () => {
        const id = document.getElementById('student-id').value.trim();
        const members = {
            '22301500': 'Võ Duy Bình',
            '22101347': 'Hồng Bảo Khang',
            '22300236': 'Trần Bá Lợi',
            '22110739': 'Nguyễn Thanh Quang'
        };
        
        if (members[id]) {
            state.student.id = id;
            state.student.name = members[id];
            saveState();
            
            // Update UI elements
            document.querySelector('.sidebar-student-info .info-name').innerText = members[id];
            document.querySelector('.sidebar-student-info .info-id').innerText = 'MSSV: ' + id;
            document.getElementById('user-profile-badge').querySelector('.user-name').innerText = members[id];
            
            // Get initials
            const names = members[id].split(' ');
            const initials = names.length >= 2 ? (names[names.length - 2][0] + names[names.length - 1][0]) : names[0].substring(0, 2);
            document.getElementById('user-profile-badge').querySelector('.user-avatar').innerText = initials.toUpperCase();
            
            document.getElementById('login-section').style.display = 'none';
            document.getElementById('student-dashboard').style.display = 'grid';
            showToast(`Đăng nhập thành công! Đã tải hồ sơ sinh viên ${members[id]}.`, 'success');
        } else {
            showToast('Lỗi: MSSV không thuộc Nhóm 3 (Ví dụ: 22301500, 22101347, 22300236, 22110739)', 'error');
        }
    });

    // Student Logout
    document.getElementById('logout-btn').addEventListener('click', () => {
        document.getElementById('student-dashboard').style.display = 'none';
        document.getElementById('login-section').style.display = 'flex';
        showToast('Đã đăng xuất tài khoản sinh viên.', 'info');
    });

    // Register / Cancel click events delegation
    document.getElementById('open-classes-table-body').addEventListener('click', (e) => {
        if (e.target.classList.contains('action-reg-btn')) {
            const classCode = e.target.getAttribute('data-code');
            registerClass(classCode);
        }
    });

    document.getElementById('registered-classes-table-body').addEventListener('click', (e) => {
        if (e.target.classList.contains('action-cancel-btn')) {
            const classCode = e.target.getAttribute('data-code');
            cancelClass(classCode);
        }
    });

    // Admin Toggle registration open/closed
    document.getElementById('toggle-registration-btn').addEventListener('click', () => {
        state.registrationOpen = !state.registrationOpen;
        saveState();
        renderAdminPortal();
        renderStudentClasses();
        showToast(state.registrationOpen ? 'Cổng đăng ký học phần đã mở!' : 'Cổng đăng ký học phần đã đóng!', 'info');
    });

    // Admin Update Sĩ số lớp
    document.getElementById('admin-classes-table-body').addEventListener('click', (e) => {
        if (e.target.classList.contains('update-cap-btn')) {
            const idx = parseInt(e.target.getAttribute('data-index'));
            const row = e.target.closest('tr');
            const capInput = row.querySelector('.admin-cap-input');
            const newCap = parseInt(capInput.value);
            
            const cls = state.classes[idx];
            if (newCap < cls.registered) {
                showToast(`Lỗi: Sĩ số tối đa không thể nhỏ hơn sĩ số hiện tại (${cls.registered})!`, 'error');
                capInput.value = cls.maxCap;
                return;
            }

            cls.maxCap = newCap;
            saveState();
            renderAdminPortal();
            renderStudentClasses();
            showToast(`Đã điều chỉnh sĩ số tối đa lớp ${cls.code} thành ${newCap}!`, 'success');
        }
    });

    // Admin Export reports Excel Simulation
    document.getElementById('export-excel-btn').addEventListener('click', () => {
        showToast('Hệ thống: Xuất báo cáo thống kê thành công! File HSU_Registration_Report.xlsx đã được lưu.', 'success');
    });

    // Dark/Light Mode Switch
    const themeBtn = document.getElementById('dark-light-btn');
    themeBtn.addEventListener('click', () => {
        state.isDark = !state.isDark;
        document.body.setAttribute('data-theme', state.isDark ? 'dark' : 'light');
        
        // Change icon inside button
        if (state.isDark) {
            themeBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" class="sun-icon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            `;
        } else {
            themeBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" class="moon-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            `;
        }
        saveState();
    });


    // ==========================================
    // 7. INITIALIZATION RUN
    // ==========================================
    document.body.setAttribute('data-theme', state.isDark ? 'dark' : 'light');
    
    // Set initial portal and view states
    setPortal(state.activePortal);
    setSubView('student-portal', state.activeStudentView);
    setSubView('admin-portal', state.activeAdminView);
    
    // Draw data
    renderStudentClasses();
    renderCurriculum();
    renderHistory();
    renderAdminPortal();
    calculatePMSchedule();
});
