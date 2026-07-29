# SEMINAR SPECIAL TOPIC REPORT (PART 1)
## RISK AND SCHEDULE MANAGEMENT IN THE ONLINE COURSE REGISTRATION SYSTEM CONSTRUCTION PROJECT

| Document Information | Detail (According to Project Plan.docx template / HSU SDP) |
| :--- | :--- |
| **Project** | Risk and Schedule Management in the Online Course Registration System Construction Project |
| **Document** | Seminar Special Topic Report (Part 1: Initiating & Risk Management) |
| **Version** | v1.0 |
| **Date** | July 23, 2026 |
| **Status** | Baseline |
| **Author** | Team 3 (Class SW403DE01) |
| **Approved By** | Instructor Nguyễn Văn Sơn |

---

### REVISION HISTORY

| Date | Version | Detailed Description of Changes | Author |
| :--- | :--- | :--- | :--- |
| July 10, 2026 | v0.1 | Initial draft, outlining major sections | Võ Duy Bình |
| July 15, 2026 | v0.5 | Updated Risk Utility theory, Expected Utility, and NPV/ROI calculations | Trần Bá Lợi, Hồng Bảo Khang |
| July 18, 2026 | v0.8 | Added analysis of 4 risk sources and Case Studies | Nguyễn Thanh Quang |
| July 23, 2026 | v1.0 | Aligned speech script, slides, and published baseline report | Team 3 |

---

### PROJECT TEAM INFORMATION

* **Course:** Software Project Management (Course Code: `SW403DE01` - Hoa Sen University)
* **Project Team:** Team 3
* **Members & Roles:**
  * Võ Duy Bình - Student ID: 22301500 (Team Leader / Sponsor / CEO)
  * Hồng Bảo Khang - Student ID: 22101347 (Backend & Financial Developer)
  * Trần Bá Lợi - Student ID: 22300236 (Project Manager / PM / QA)
  * Nguyễn Thanh Quang - Student ID: 22110739 (Business & Risk Analyst / UI/UX Designer)
* **Primary References:**
  * *Information Technology Project Management (9th Edition)* – Kathy Schwalbe
  * *Software Development Plan Template (HSU SDP)* – `Project Plan.docx`
  * *HSU Exam Questions & Student Answers:* `Test 3 - 30.10.24.docx` (HSU Exam)
  * *JWD Consulting Case Study* (Predictive Approach)

---

## TABLE OF CONTENTS

1. [Introduction to Project Risk Management in Software Projects](#1-introduction-to-project-risk-management-in-software-projects)
2. [Common Sources of Risk in Software Projects](#2-common-sources-of-risk-in-software-projects)
   - [2.1. Market Risk](#21-market-risk)
   - [2.2. Financial Risk](#22-financial-risk)
   - [2.3. Technical Risk](#23-technical-risk)
   - [2.4. People Risk](#24-people-risk)
   - [2.5. Risk Identification using SWOT Matrix - HSU Project Case Study](#25-risk-identification-using-swot-matrix---hsu-project-case-study)
3. [Risk Utility Theory](#3-risk-utility-theory)
   - [3.1. Concept of Risk Utility](#31-concept-of-risk-utility)
   - [3.2. Utility Functions and Three Groups of Risk Attitudes](#32-utility-functions-and-three-groups-of-risk-attitudes)
   - [3.3. Mathematical Application in Project Decision Making (EMV vs. Expected Utility)](#33-mathematical-application-in-project-decision-making-emv-vs-expected-utility)
   - [3.4. Quantitative Risk Analysis using NPV and ROI - HSU Exam Case Study](#34-quantitative-risk-analysis-using-npv-and-roi---hsu-exam-case-study)
4. [Risk Response Planning](#4-risk-response-planning)
   - [4.1. Strategies for Negative Risks (Threats)](#41-strategies-for-negative-risks-threats)
   - [4.2. Strategies for Positive Risks (Opportunities)](#42-strategies-for-positive-risks-opportunities)
   - [4.3. Risk Response Register](#43-risk-response-register)
   - [4.4. Integrating Risk Management into the Software Development Plan (SDP HSU)](#44-integrating-risk-management-into-the-software-development-plan-sdp-hsu)
5. [Practical Implementation Analysis: Initiating & Risk Management of HSU Project (Team 3)](#5-practical-implementation-analysis-initiating--risk-management-of-hsu-project-team-3)
   - [5.1. Project Context & Business Case](#51-project-context--business-case)
   - [5.2. List of Top 10 Prioritized Risks for the HSU Project](#52-list-of-top-10-prioritized-risks-for-the-hsu-project)
   - [5.3. Project Charter Template - HSU Project](#53-project-charter-template---hsu-project)
   - [5.4. Stakeholder Register & Strategy](#54-stakeholder-register--strategy)
   - [5.5. Team Contract - HSU Project](#55-team-contract---hsu-project---applying-jwd-table-3-8)
   - [5.6. Real-World Risk Response Lessons from Project Execution](#56-real-world-risk-response-lessons-from-project-execution)
   - [5.7. WBS Structure & Scope Demarcation between Seminar and Project](#57-wbs-structure--scope-demarcation-between-seminar-and-project)
   - [5.8. Project Scope Statement - HSU Project](#58-project-scope-statement---hsu-project---applying-jwd-table-3-9)
   - [5.9. Schedule & Cost Baseline - HSU Project](#59-schedule--cost-baseline---hsu-project)
   - [5.10. Communication Management Plan - HSU Project](#510-communication-management-plan---hsu-project)
6. [Conclusions and Lessons Learned](#6-conclusions-and-lessons-learned)
   - [6.1. HSU Project Lessons-Learned Report](#61-hsu-project-lessons-learned-report---applying-jwd-table-3-16)
   - [6.2. General Conclusions](#62-general-conclusions)

---

## 1. Introduction to Project Risk Management in Software Projects

Project Risk Management is the process of identifying, analyzing, evaluating, planning responses, and monitoring risks that may occur throughout the project life cycle. According to the PMBOK (Project Management Body of Knowledge), risk management is one of the most critical knowledge areas of project management. Its objective is to decrease the probability and impact of negative events, increase the probability and impact of positive events, and enhance the likelihood of completing the project on time, within budget, and to the desired quality standards.

Software projects are characterized by the intangibility of the product, high volatility in technology requirements, and a heavy reliance on human factors. Unlike construction or traditional manufacturing, software projects are more prone to risks because:

*   **Constantly Changing Requirements:** Clients often find it difficult to visualize the final product until they interact with the actual UI, leading to Scope Creep.
*   **Rapidly Evolving Technology:** Frameworks, languages, and tools change continuously.
*   **Heavy Dependence on Human Factors:** The intelligence, skill, and creativity of individual developers are the core drivers of project output.
*   **Difficulty in Estimation:** Estimating time and cost is historically inaccurate due to a lack of standardized historical data.

According to the Standish Group CHAOS Report and studies by the Project Management Institute (PMI), the rate of software projects experiencing schedule delays, cost overruns, or complete failure remains high (typically over 50%). Therefore, risk management must be executed proactively from the project's inception, rather than reactively when issues arise.

---

## 2. Common Sources of Risk in Software Projects

In software development, risks are classified into four main sources: Market, Financial, Technical, and People.

### 2.1. Market Risk

Market risk arises from external fluctuations outside the development organization that directly affect the feasibility, usability, or commercial success of the software product after delivery.

*   **Changing Customer Needs:** This is the most common risk. The client may initially request a basic e-commerce web application, but later demand AI chatbots, QR payment integrations, live streaming, or loyalty reward points. This stretches the timeline, inflates costs, and forces architectural rework.
*   **Competitors:** Competitors may launch a better or similar product faster. For instance, while you are developing a food delivery app, a competitor might launch a similar app integrated with AI meal recommendations and 15-minute delivery, rendering your product obsolete before it goes live.
*   **Technological Obsolescence:** Rapid shifts in industry standards (e.g., React 18 upgrading to React 20, or AI Agents replacing traditional rule-based chatbots) can dissolve the product's competitive advantage.
*   **Mitigation Strategy:** Adopt Agile/Scrum methodologies, build early Prototypes, hold regular user feedback sessions, release a Minimum Viable Product (MVP) to test the market quickly, and tightly control the Change Request process.

### 2.2. Financial Risk

Financial risk relates directly to cash flow, funding availability, and the economic viability of completing the project within budget.

*   **Budget Deficits:** Occur when investors cut funding midway, clients delay milestone payments, or project extension depletes financial reserves. This forces staff cuts, reduced testing quality, or project cancellation.
*   **Cost Overrun:** Frequently caused by scope creep, unexpected hardware purchases, high rework due to design errors, or schedule delays. For example, a project initially budgeted at $140,000 might end up costing $150,000 (a 7% overrun).
*   **Exchange Rate Fluctuations & Inflation:** Crucial for international outsourced projects or those relying on external cloud providers. For example, hosting on AWS/Azure or utilizing OpenAI APIs requires payment in USD. A spike in exchange rates or local inflation driving up developers' salaries can quickly exhaust the project's budget.
*   **Mitigation Strategy:** Establish a Contingency Reserve of 10-15%, monitor project cost health using Earned Value Management (EVM), sign long-term fixed-price contracts for cloud services, and tie payments to clear milestones.

### 2.3. Technical Risk

Technical risk relates to failure in technical design, system performance, security breaches, and tools integration.

*   **Selecting the Wrong Technology (Technology Hype):** Choosing languages, frameworks, or databases because they are trendy without evaluating their maturity, documentation, or community support. According to David Hillson (PMI.org), using unproven technology is a primary root cause of project uncertainty. Tom Kendrick's PERIL (Project Experience Risk Information Library) database shows that software defects and unproven technology failing to perform as expected (proving unsuitable) are leading causes of rework, schedule slippage, and budget inflation.
*   **Security Flaws:** According to the OWASP Top 10:2025 security report (aggregated from 2.8 million applications), Broken Access Control remains the top threat, appearing in 3.73% of tested applications, followed by Security Misconfiguration at 3.00%. A significant addition in 2025 is Software Supply Chain Failures due to vulnerable third-party dependencies and CI/CD pipelines. Mitigating this requires "shift-left security" - integrating threat modeling and static application security testing (SAST) early in the software development life cycle (SDLC).
*   **Scalability Failure:** According to the Performance pillar of the IBM Well-Architected Framework, scalability must be designed into the architecture from day one. Addressing performance bottlenecks at the end of the project is extremely expensive. Best practices include stateless components, loose coupling (such as Microservices), and scaling out (horizontal scaling) instead of scaling up (vertical scaling).
*   **Technical Debt:** As defined by the Software Engineering Institute (SEI) at Carnegie Mellon, technical debt refers to short-term compromises in design or code quality to meet deadlines, making future maintenance and feature development much more expensive. If unmanaged, enterprise technical debt can freeze development. Responses include making technical debt visible in the backlog, categorizing it, and allocating 15-20% of sprint capacity to refactoring.

### 2.4. People Risk

People risk involves the human resource factors that directly impact productivity, quality, and coordination.

*   **Staff Shortages:** The PMI Global Project Management Talent Gap report (2025) predicts a global shortage of nearly 30 million project professionals by 2035 (demand: 65 million, supply: 40 million). Starting projects without assessing organizational resource availability is a key driver of over-allocation.
*   **Key-Person Loss (Turnover):** The PERIL database reveals that losing a key developer can increase task durations by up to three times, halting progress due to hiring and onboarding latency. PMI ranks resource risk (specifically people risk) as having a high negative impact on project delivery.
*   **Skill Gaps:** Lacking specialized technical expertise (e.g., real-time database optimization) or soft skills (e.g., team collaboration) leads to high defect rates and delays. Upskilling/reskilling existing staff is a more proactive strategy than relying solely on recruitment.
*   **Poor Communication:** According to the PMI Pulse of the Profession report, poor communication is the primary cause of project failure in 1/3 of cases and impacts over half of all projects. Out of every $1 billion spent, $135 million is at risk, with $75 million (56%) of that risk driven by communication breakdowns.
*   **Mitigation Strategy:** Plan resources based on real organization data, maintain strong executive Sponsorship, build clear communication protocols (defining who communicates what, when, and how), and encourage cross-training and pair programming to minimize key-person dependencies.

---

### 2.5. Risk Identification using SWOT Matrix - HSU Project Case Study

To identify risks comprehensively, project managers construct a **SWOT (Strengths, Weaknesses, Opportunities, Threats) Matrix**. The following SWOT analysis applies to the HSU project case: **Building a mobile application for course registration at Hoa Sen University to replace the legacy, desktop-based portal.**

#### 1. Strengths (S)
*   **High Portability & Mobility:** Allows students to register for courses anytime and anywhere directly on their mobile phones without needing a laptop.
*   **Enhanced User Experience (UX):** Modern UI/UX design with intuitive navigation and fast actions, leading to higher student satisfaction.
*   **Speed & Efficiency:** Optimized mobile APIs reduce query latency and ensure smoother registration flows during peak traffic hours.
*   **Institutional Reputation:** Demonstrates HSU's commitment to digital transformation and tech-forward education.

#### 2. Weaknesses (W)
*   **High Development & Maintenance Costs:** Requires substantial budget to build, maintain, and update native/hybrid apps for both iOS and Android platforms.
*   **Device Compatibility Limitations:** Students with outdated hardware or legacy OS versions may experience lag or crashes, creating accessibility inequality.
*   **Learning Curve:** Students and academic staff accustomed to the old web portal may resist the initial transition.
*   **Mobile Security Risks:** Mobile devices are more vulnerable to API endpoint exploits and data intercept on unsecured public Wi-Fi networks.

#### 3. Opportunities (O)
*   **Push Notifications:** Send instant alerts regarding class openings, tuition deadlines, registration results, and academic updates.
*   **Digital Campus Integration:** Easily connect with other HSU services such as digital student IDs, grades lookup, and mobile tuition payments.
*   **Fast Feedback Loops:** In-app bug reporting and ratings allow the development team to push updates and hotfixes rapidly.
*   **Corporate Partnerships:** Collaborate with cloud providers, payment gateways, or cyber-security firms for infrastructure sponsorship.

#### 4. Threats (T)
*   **Peak Load Crashes (System Congestion):** Potential system crash or API timeout when tens of thousands of students attempt to register simultaneously at the start of the registration window.
*   **Fast Mobile OS Lifecycle:** Constant iOS/Android updates require frequent compatibility testing and refactoring, causing maintenance overhead.
*   **Regulatory Compliance:** The app must strictly comply with data protection regulations and university academic policies.
*   **Low Adoption Rates:** Students afraid of system glitches on mobile might continue using the web version, reducing the app's return on investment.

---

### 2.6. Risk Rating and Case Studies

#### 1. Risk Matrices

##### A. Technical Risks

| Risk Description | Probability | Impact | Key Characteristics & References |
| :--- | :---: | :---: | :--- |
| **Security Flaws** | Very High | Critical | OWASP 2025: Broken Access Control is in 3.73% of apps. Supply chain risks are rising. |
| **Scalability Failure** | High | Critical | Often hidden during low-load testing; causes system crash under peak enrollment load. |
| **Technical Debt** | Very High | Medium-High | Accumulates in almost all projects; severely slows down long-term system maintenance. |

##### B. Human Risks

| Risk Description | Probability | Impact | Statistical Evidence & References |
| :--- | :---: | :---: | :--- |
| **Staff Shortages** | Very High | High | PMI Talent Gap 2025: 30 million project professional deficit by 2035 due to poor capacity planning. |
| **Key-Person Turnover** | High | Critical | PERIL Database: Loss of a key developer can increase task durations by **3x**. |
| **Skill Gaps** | High | Medium-High | Persistent structural issue driving higher defect rates and technical debt. |
| **Poor Communication** | Very High | Critical | PMI Pulse of the Profession: Direct cause of failure in **1/3** of projects; 56% of cost at risk. |

---

#### 2. Real-World Case Studies

##### Case Study 1: Technical Security Flaw - Equifax Data Breach (2017)
*   **Context:** Equifax is one of the three largest credit reporting agencies in the United States.
*   **Root Cause:** Hackers exploited a known vulnerability in the **Apache Struts framework (CVE-2017-5638)**. The vulnerability had been patched and announced by Apache in March 2017, but Equifax's IT team failed to apply the security patch to their internal systems for months.
*   **Impact:** Sensitive personal data (including Social Security numbers, birth dates, and addresses) of approximately **147 million consumers** was leaked. The company's stock crashed, the CEO and CIO resigned, and Equifax had to pay over **$1.38 billion** in legal settlements and restitution.
*   **Lesson:** Adopt "Shift-Left Security" with automated dependency scanning to patch known security vulnerabilities immediately.

##### Case Study 2: Scalability and Performance Failure - Healthcare.gov (2013)
*   **Context:** The health insurance marketplace website developed by the US Government with hundreds of millions in budget.
*   **Root Cause:** The system crashed within **2 hours** of launch. Concurrent traffic reached 250,000 users (5x the maximum forecast). The login module suffered from an architectural bottleneck, blocking users from accessing the site. The system lacked stateless component designs and horizontal auto-scaling (scale-out).
*   **Impact:** The registration success rate in the first week was under 1%, resulting in a massive public relations crisis. The government had to hire external tech groups to rewrite large parts of the architecture, doubling the project's cost.
*   **Lesson:** Performance and scalability must be designed into the architecture from the start (IBM Well-Architected Framework). Rigorous load testing must be performed before launch.

##### Case Study 3: Technical Debt - Knight Capital Group Trading Software Glitch (2012)
*   **Context:** Knight Capital was a leading financial market maker and trading firm.
*   **Root Cause:** When deploying new trading software, the operations team failed to update one of the eight production servers. When the new code ran, it inadvertently triggered an obsolete software module (the "Power Peg" feature, defunct for 8 years but left in the codebase - technical debt) on that un-updated server.
*   **Impact:** The system executed millions of erroneous, high-frequency trades in **45 minutes**. Knight Capital lost **$440 million**, wiping out its capital, causing a stock crash, and forcing a buyout by Getco.
*   **Lesson:** Technical debt must be actively refactored and removed from the codebase. Configuration management and deployment pipelines must be automated (CI/CD).

##### Case Study 4: Human Factors & Poor Communication - FBI Virtual Case File (2000–2005)
*   **Context:** The FBI's Trilogy project aimed to modernize its IT infrastructure, including the Virtual Case File (VCF) system.
*   **Root Cause:** The **$170 million** project was cancelled after 5 years without delivering a usable product. Investigations revealed severe human resource and communication errors:
    *   Vague, poorly defined, and constantly shifting requirements from FBI leaders who lacked IT expertise.
    *   High turnover of FBI project managers, breaking continuity.
    *   Extremely poor communication and lack of transparency between the FBI and the developer, SAIC, leading to software that did not match field agents' needs.
*   **Impact:** $170 million in taxpayer money was wasted, and the FBI had to start a new project from scratch (Sentinel).
*   **Lesson:** Establish clear communication protocols, maintain a stable sponsor, and ensure the project management team has adequate technical literacy.

---

## 3. Risk Utility Theory

To make sound risk management decisions, project managers must understand how stakeholders perceive and react to risk. **Risk Utility Theory** provides a mathematical framework to evaluate this behavior.

### 3.1. Concept of Risk Utility
*   **Risk Utility:** The level of satisfaction or subjective value (**Utility**) that an individual or organization derives from a specific outcome (typically financial return or project success).
*   Utility does not scale linearly with monetary wealth. A gain or loss has different impacts depending on the organization's scale and risk appetite.

### 3.2. Utility Functions and Three Groups of Risk Attitudes
The risk attitude of an organization is represented by the curvature of its **Utility Function $U(x)$** (where $x$ represents the monetary value or outcome):

*   **Risk-Averse:** Prefers safety and certainty over high returns. Willing to accept a lower expected monetary value to reduce risk. The utility curve is concave ($U''(x) < 0$), showing diminishing marginal utility.
*   **Risk-Neutral:** Bases decisions purely on Expected Monetary Value (EMV), indifferent to volatility. The utility curve is a straight line ($U''(x) = 0$), showing constant marginal utility.
*   **Risk-Seeking:** Willing to accept high risk and even a lower expected value for a chance at a massive payoff. The utility curve is convex ($U''(x) > 0$), showing increasing marginal utility.

#### Summary Comparison of Risk Attitudes

| Risk Attitude Group | Perception of Risk | Utility Curve Shape | Typical Examples |
| :--- | :--- | :---: | :--- |
| **Risk-Averse** | Prefers certainty, avoids risk | Concave ($U''(x) < 0$) | Banks, government agencies, medical projects |
| **Risk-Neutral** | Objective, based on EMV | Linear ($U''(x) = 0$) | Large technology corporations |
| **Risk-Seeking** | Accepts high risk for high returns | Convex ($U''(x) > 0$) | Tech startups, R&D labs |

### 3.3. Mathematical Application in Project Decision Making (EMV vs. Expected Utility)

Suppose a software company is choosing between two projects:
*   **Project A (Safe):** A 100% chance of making a **$50,000** profit.
*   **Project B (Risky):** A 50% chance of making a **$120,000** profit, and a 50% chance of making **$0** (failure).

#### Expected Monetary Value (EMV) Analysis:
*   $EMV(A) = 1.0 \times \$50,000 = \$50,000$
*   $EMV(B) = 0.5 \times \$120,000 + 0.5 \times \$0 = \$60,000$
*   A **Risk-Neutral** manager will choose **Project B** because $EMV(B) > EMV(A)$ ($60k > 50k$).

#### Expected Utility (EU) Analysis:
Suppose the manager is **Risk-Averse** with a utility function of $U(x) = \sqrt{x}$ (showing diminishing satisfaction):
*   $EU(A) = U(\$50,000) = \sqrt{50,000} \approx 223.6$
*   $EU(B) = 0.5 \times U(\$120,000) + 0.5 \times U(\$0) = 0.5 \times \sqrt{120,000} + 0.5 \times 0 \approx 173.2$
*   Because $EU(A) > EU(B)$ ($223.6 > 173.2$), a **Risk-Averse** manager will choose **Project A**. They accept a lower expected monetary return to ensure certainty.

---

### 3.4. Quantitative Risk Analysis using NPV and ROI - HSU Exam Case Study

To quantify financial risk and compare investment alternatives, project managers use discounted cash flow techniques to compute **Net Present Value (NPV)** and **Return on Investment (ROI)**. The following details the calculation for three proposed projects (A, B, and C) from the HSU exam under a **Discount Rate $r = 5\%$** over a 4-year lifecycle.

#### Mathematical Formulas:
*   **Discount Factor:** $DF_t = \frac{1}{(1+r)^t}$
*   **Present Value of Benefits (PV_B):** $PV_B = \sum_{t=1}^n \frac{\text{Benefit}_t}{(1+r)^t}$
*   **Present Value of Costs (PV_C):** $PV_C = \sum_{t=1}^n \frac{\text{Cost}_t}{(1+r)^t}$
*   **Net Present Value (NPV):** $NPV = PV_B - PV_C$
*   **Discounted Return on Investment (ROI):** $ROI = \frac{NPV}{PV_C} \times 100\%$

#### Cash Flow Matrices:
*   **Project A:**
    *   Benefits: [Y1: 500, Y2: 1000, Y3: 1000, Y4: 2000]
    *   Costs: [Y1: 2000, Y2: 500, Y3: 500, Y4: 0]
*   **Project B:**
    *   Benefits: [Y1: 0, Y2: 1000, Y3: 3000, Y4: 5000]
    *   Costs: [Y1: 3000, Y2: 1000, Y3: 1000, Y4: 1000]
*   **Project C:**
    *   Benefits: [Y1: 1000, Y2: 1000, Y3: 3000, Y4: 3000]
    *   Costs: [Y1: 5000, Y2: 2000, Y3: 1000, Y4: 1000]

#### Detailed Calculations:

##### 1. Project A:
*   $PV_B = \frac{500}{1.05^1} + \frac{1000}{1.05^2} + \frac{1000}{1.05^3} + \frac{2000}{1.05^4} = 476.19 + 907.03 + 863.84 + 1645.40 = 3892.46$
*   $PV_C = \frac{2000}{1.05^1} + \frac{500}{1.05^2} + \frac{500}{1.05^3} + \frac{0}{1.05^4} = 1904.76 + 453.51 + 431.92 + 0 = 2790.20$
*   $NPV_A = 3892.46 - 2790.20 = 1102.27$
*   $ROI_A = \frac{1102.27}{2790.20} \times 100\% = 39.51\%$

##### 2. Project B:
*   $PV_B = \frac{0}{1.05^1} + \frac{1000}{1.05^2} + \frac{3000}{1.05^3} + \frac{5000}{1.05^4} = 0 + 907.03 + 2591.51 + 4113.51 = 7612.05$
*   $PV_C = \frac{3000}{1.05^1} + \frac{1000}{1.05^2} + \frac{1000}{1.05^3} + \frac{1000}{1.05^4} = 2857.14 + 907.03 + 863.84 + 822.70 = 5450.71$
*   $NPV_B = 7612.05 - 5450.71 = 2161.34$
*   $ROI_B = \frac{2161.34}{5450.71} \times 100\% = 39.65\%$
    *(Note: If calculated using nominal undiscounted ROI, Project B yields $\frac{9000 - 6000}{6000} = 50\%$. Project B is the optimal option).*

##### 3. Project C:
*   $PV_B = \frac{1000}{1.05^1} + \frac{1000}{1.05^2} + \frac{3000}{1.05^3} + \frac{3000}{1.05^4} = 952.38 + 907.03 + 2591.51 + 2468.10 = 6919.03$
*   $PV_C = \frac{5000}{1.05^1} + \frac{2000}{1.05^2} + \frac{1000}{1.05^3} + \frac{1000}{1.05^4} = 4761.90 + 1814.06 + 863.84 + 822.70 = 8262.50$
*   $NPV_C = 6919.03 - 8262.50 = -1343.47$
*   $ROI_C = \frac{-1343.47}{8262.50} \times 100\% = -16.26\%$

#### Investment Recommendation:
**Project B** is the optimal choice because:
1.  **Superior Profitability:** Project B's NPV ($2,161.34) is almost double that of Project A ($1,102.27), while Project C is highly unprofitable with a negative NPV ($-1,343.47$).
2.  **Highest Return:** The discounted ROI of Project B (39.65%) exceeds that of Project A (39.51%).
3.  **Risk Profile:** Although Project B requires a higher initial cost in Year 1 ($3,000 vs. $2,000 for Project A), its subsequent maintenance costs are stable at $1,000/year and it delivers a large benefit in Year 4 ($5,000). Project C is highly risky because its high upfront cost ($5,000 in Year 1) is not justified by its benefits.

#### Class Assignment Financial Analysis (From Ebooks/NPV - Students.xlsx):
To reinforce the financial analysis framework, we calculate the NPV and ROI for the two projects from the class exercise [NPV - Students.xlsx](file:///d:/HSU/2534Semester%204(2025-2026)/QT_DA_PM/Ebooks/NPV%20-%20Students.xlsx) under a **10% discount rate** ($r = 10\%$) over a 5-year lifecycle.

##### Project 1:
*   Benefits: [Y1: 0, Y2: 2000, Y3: 3000, Y4: 4000, Y5: 5000]
*   Costs: [Y1: 5000, Y2: 1000, Y3: 1000, Y4: 1000, Y5: 1000]
*   $PV_B = \frac{0}{1.1^1} + \frac{2000}{1.1^2} + \frac{3000}{1.1^3} + \frac{4000}{1.1^4} + \frac{5000}{1.1^5} = 0 + 1652.89 + 2253.94 + 2732.05 + 3104.61 = 9743.49$
*   $PV_C = \frac{5000}{1.1^1} + \frac{1000}{1.1^2} + \frac{1000}{1.1^3} + \frac{1000}{1.1^4} + \frac{1000}{1.1^5} = 4545.45 + 826.45 + 751.31 + 683.01 + 620.92 = 7427.14$
*   $NPV_1 = 9743.49 - 7427.14 = 2316.35$
*   $ROI_1 = \frac{2316.35}{7427.14} \times 100\% = 31.19\%$

##### Project 2:
*   Benefits: [Y1: 1000, Y2: 2000, Y3: 4000, Y4: 4000, Y5: 4000]
*   Costs: [Y1: 2000, Y2: 2000, Y3: 2000, Y4: 2000, Y5: 2000]
*   $PV_B = \frac{1000}{1.1^1} + \frac{2000}{1.1^2} + \frac{4000}{1.1^3} + \frac{4000}{1.1^4} + \frac{4000}{1.1^5} = 909.09 + 1652.89 + 3005.26 + 2732.05 + 2483.69 = 10782.98$
*   $PV_C = \frac{2000}{1.1^1} + \frac{2000}{1.1^2} + \frac{2000}{1.1^3} + \frac{2000}{1.1^4} + \frac{2000}{1.1^5} = 1818.18 + 1652.89 + 1502.63 + 1366.03 + 1241.84 = 7581.57$
*   $NPV_2 = 10782.98 - 7581.57 = 3201.41$
*   $ROI_2 = \frac{3201.41}{7581.57} \times 100\% = 42.23\%$

##### Recommendation:
**Project 2** is the superior financial decision as it achieves both a higher Net Present Value ($3,201.41 vs $2,316.35) and a stronger return rate (42.23% vs 31.19%) at a 10% cost of capital.

---


## 4. Risk Response Planning

After identifying and prioritizing risks, the project team must formulate specific response plans.

### 4.1. Strategies for Negative Risks (Threats)
1.  **Avoid:** Change the project plan to eliminate the risk or protect the project from its impact.
2.  **Mitigate:** Take proactive actions to reduce the probability or impact of a risk below acceptable thresholds.
3.  **Transfer:** Shift the responsibility and consequence of a risk to a third party (e.g., insurance, outsourcing).
4.  **Accept:** Choose not to act. This is appropriate for low-priority risks where mitigation costs exceed potential damages.

### 4.2. Strategies for Positive Risks (Opportunities)
1.  **Exploit:** Take steps to ensure that the opportunity occurs.
2.  **Share:** Allocate ownership of the opportunity to a third party best equipped to capture it for mutual benefit.
3.  **Enhance:** Take actions to increase the probability or positive impact of the opportunity.
4.  **Accept:** Be ready to leverage the opportunity if it happens naturally, without actively spending resources.

### 4.3. Risk Response Register
All risks are managed in a living document called the **Risk Register**. Below is the prioritized Risk Register for HSU Team 3:

| Risk Description | Source | P | I | Strategy | Action Plan & Owner |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **System Congestion (High Traffic)** | Technical | High | Critical | **Mitigate** | Implement Redis Caching to reduce database queries; configure a Load Balancer.<br>**Owner: Hồng Bảo Khang** |
| **Logic & UI/UX Bugs** | Technical | Med | High | **Mitigate** | Write automated Unit Tests for constraints (prerequisites, schedule conflicts) and cross-device responsive testing.<br>**Owner: Trần Bá Lợi** |
| **Data Breach (Broken Access)** | Security | Low | Critical | **Transfer** | Integrate JWT authentication on Backend; perform Shift-left security scans.<br>**Owner: Nguyễn Thanh Quang** |
| **Staff Overload / Turnover** | People | Med | High | **Mitigate** | Create clear WBS/SDP documentation; enable cross-functional support (Bình assists with backend/frontend).<br>**Owner: Võ Duy Bình** |

### 4.4. Integrating Risk Management into the Software Development Plan (SDP HSU)
According to the HSU `Project Plan.docx` template, the **Risk Management Plan** is a mandatory chapter within the Software Development Plan (SDP). The project team must document:
1.  **Risk Management Processes (Tasks):** Methods for identification (brainstorms, SWOT), qualitative/quantitative analysis, response strategy design, and periodic risk review.
2.  **Responsibilities:** Establishing a RACI Matrix defining who identifies risks, who acts as the Risk Owner, and who approves contingency budgets.
3.  **Tools & Techniques:** Tracking risk states using Excel or Jira, maintaining a configuration management plan, and keeping the active risk register updated.

---

## 5. Practical Implementation Analysis: Initiating & Risk Management of HSU Project (Team 3)

### 5.1. Project Context & Business Case
The project was initiated to deliver a modern, high-performance course registration portal for Hoa Sen University (HSU), resolving legacy system sags during peak registration windows and providing visual tracking dashboards.

*   **Project Sponsor:** Võ Duy Bình (CEO / Chairman of the Board)
*   **Project Manager (PM):** Trần Bá Lợi
*   **Project Team:** Hồng Bảo Khang (Backend & Finance Dev), Nguyễn Thanh Quang (UI/UX & Risk Analyst)
*   **Project Timeline:** 1 month (July 12, 2026 to August 15, 2026)
*   **Business Case (Financial Feasibility Analysis):**
    *   **Baseline Budget:** $140,000 (encompassing design, cloud infrastructure license, database templates, and labor).
    *   **Annual Operation & Maintenance Cost:** $40,000/year (for a 3-year system lifecycle).
    *   **Expected Annual Benefits:** $200,000/year (saving 90% of manual academic handling costs, optimizing infrastructure bandwidth, and accelerating registration flows).
    *   **Discount Rate (Cost of Capital):** **8%**
    *   **Project Financial Health:** $NPV = \$272,336$, $ROI = 112\%$, Payback Period = **Under 1 year** (recouped in the first year of operation).
*   **Actual Final Cost:** **$150,000** ($10,000 overrun approved by CEO Võ Duy Bình to purchase a high-quality external schedule-checking module, reducing development latency and ensuring scope safety).

### 5.2. List of Top 10 Prioritized Risks for the HSU Project
Through a brainstorm session and qualitative P-I matrix evaluation, PM Trần Bá Lợi ranked the following risks:
1.  System crash/congestion due to extreme concurrent traffic (High Traffic) - *Technical/Infrastructure*
2.  Delayed requirements or lack of input documentation from the Academic Affairs Office - *People/Client*
3.  Bugs in core registration logic (prerequisites, schedule conflicts, credit limits) - *Technical/Process*
4.  Data breach or unauthorized access to student records and grades - *Technical/Security*
5.  Schedule delays in UI/UX mockup delivery by the designer - *People/Schedule*
6.  Integration failures between Backend APIs and Frontend web components - *Technical/Integration*
7.  Complex or confusing mobile UI causing student frustration during registration - *Technical/UX*
8.  Delays in implementing the CPM Critical Path algorithm on the management dashboard - *Technical/Algorithm*
9.  Failure to measure and realize the financial benefits projected in the Business Case - *Financial/Operations*
10. Unanticipated personal emergencies of team members causing work disruption - *People/Management*

### 5.3. Project Charter Template - HSU Project
During the **1.0 Initiating** process group, CEO Võ Duy Bình signed and issued the Project Charter:

| Charter Element | Actual Project Detail (HSU Team 3) |
| :--- | :--- |
| **1. Project Title & Date** | HSU Online Course Registration System Project | Date: July 12, 2026 |
| **2. Project Dates** | Start Date: July 12, 2026 | Planned Finish Date: August 15, 2026 (Duration: ~1 month) |
| **3. Budget Info** | Baseline Budget: **$140,000** (Max Approved Budget: **$150,000**) |
| **4. Project Manager** | Trần Bá Lợi (Email: `loi.tb2230@sinhvien.hoasen.edu.vn`) - PM responsible for schedule & QA |
| **5. Project Objectives** | Build a high-performance course registration system, integrating a real-time CPM/Gantt dashboard to support academic scheduling at HSU. |
| **6. Approach** | Survey HSU requirements ➔ Figma design (SWOT) ➔ Database & RESTful Backend API ➔ Frontend SPA Web ➔ Load & Security Testing. |
| **7. Roles & Signatures** | Võ Duy Bình (CEO / Sponsor), Trần Bá Lợi (PM), Hồng Bảo Khang (Backend Dev), Nguyễn Thanh Quang (UI/UX & Security). |

### 5.4. Stakeholder Register & Strategy

#### A. Stakeholder Register
This register is public to all team members to coordinate communications:

| Name | Position | Classification | Project Role | Contact Information |
| :--- | :--- | :--- | :--- | :--- |
| **Võ Duy Bình** | CEO | Internal | Sponsor | `binh.vdb2230@sinhvien.hoasen.edu.vn` |
| **Trần Bá Lợi** | PM / Lead Dev | Internal | Project Manager | `loi.tb2230@sinhvien.hoasen.edu.vn` |
| **Hồng Bảo Khang** | Backend Dev | Internal | Team Member | `khang.hb2210@sinhvien.hoasen.edu.vn` |
| **Nguyễn Thanh Quang** | Designer / Analyst | Internal | Team Member | `quang.nt2211@sinhvien.hoasen.edu.vn` |
| **Academic Affairs Office** | Academic Administrators | External | Client | `pdt@hoasen.edu.vn` |
| **HSU Students** | End Users | External | End User | `sinhvien@hoasen.edu.vn` |

#### B. Stakeholder Management Strategy
This is a confidential management tool used by PM Trần Bá Lợi:

| Name | Interest | Influence | Potential Management Strategies |
| :--- | :---: | :---: | :--- |
| **Võ Duy Bình** | High | High | Keep closely informed via milestone reviews. Highlight financial metrics (NPV) and CPM calculation accuracy to maintain sponsorship. |
| **Academic Affairs** | High | High | Involve them in detailed requirement sessions. Ensure the Admin Portal is intuitive for managing class limits and student capacity. |
| **Nguyễn Thanh Quang** | High | Med | Allow flexible working hours; grant autonomy over Figma Dashboard designs; assist him with security documentation. |
| **HSU Students** | High | Low | Focus on responsive mobile layout and fast page loads (&lt;1.5 seconds) to ensure a frustration-free experience. |

### 5.5. Team Contract - HSU Project (Applying JWD Table 3-8)
Team 3 established a Team Contract to set rules for communication and conflict resolution:
*   **Code of Conduct:** Work proactively, anticipate technical hurdles, share code updates via GitHub, and prioritize overall system quality.
*   **Participation:** Be honest in feedback, ensure equal contribution to decisions, and notify the PM at least 24 hours in advance of any emergency or slip.
*   **Communication:** Use Discord/Zalo for quick comms, Trello for task boards, and push commits and status updates by Friday 18:00.
*   **Problem Solving:** Brainstorm solutions collaboratively, focus critiques on code/designs (constructive) instead of individuals.
*   **Meeting Guidelines:** Weekly Google Meet at 20:00 every Wednesday, capped at 45 minutes to focus on blockages.

### 5.6. Real-World Risk Response Lessons from Project Execution

#### Case 1: Mitigating Lack of Inputs from the Academic Affairs Office
*   **Event:** The dev team hit a wall trying to model prerequisite constraints due to incomplete documents and busy academic administrators.
*   **Response:** PM Trần Bá Lợi reported this to **CEO Võ Duy Bình**. CEO Bình leveraged his relationships to gain direct database access to course syllabus templates.
*   **Result:** The team extracted prerequisite rules independently, delivering the module on schedule.

#### Case 2: Mitigating Low Student Testing Engagement
*   **Event:** Student participation in early Beta Stress Tests was very low because they felt it was a waste of time.
*   **Response:** CEO Võ Duy Bình approved a budget for a $10 tuition discount voucher or campus merch for the first 100 students to complete a test run.
*   **Result:** Over 500 students logged in to test the app, generating load data crucial for server tuning.

#### Case 3: Purchasing an External Library to Manage Schedule Conflict Logic
*   **Event:** Backend Dev Hồng Bảo Khang wanted to code the schedule conflict validation algorithm from scratch. However, his initial prototype caused server lags under a simulated load of 500 req/sec. A commercial library was found for $20,000 ($10,000 above the initial buffer).
*   **Response:** PM Trần Bá Lợi convinced Khang to use the commercial library to secure the deadline, presenting an adjusted NPV report to CEO Võ Duy Bình for budget approval.
*   **Result:** CEO Bình approved the $10,000 addition, and the module was integrated successfully.

#### Case 4: Managing Designer Nguyễn Thanh Quang's Delays
*   **Event:** Designer Nguyễn Thanh Quang was over-allocated with freelance work, delaying Figma dashboard mockups for the frontend team.
*   **Response:** PM Trần Bá Lợi avoided strict penalties. He allowed Quang to work asynchronously, bypassed unnecessary meetings, and gave him complete design autonomy over the dashboard.
*   **Result:** Quang was motivated and delivered high-quality, UX-optimized designs shortly after.

#### Case 5: Benefit Realization and Measurement
*   **Event:** Stakeholders expressed concerns about whether the $150,000 budget spent would translate to real advantages.
*   **Response:** PM Lợi built a Benefit Realization Dashboard. Post-launch metrics showed average registration times dropped from 15 minutes to 1.5 minutes, and automated checks saved the Academic Office $40,000/year in labor costs.
*   **Result:** The project demonstrated the projected 112% ROI and payback period within Year 1.

---

### 5.7. WBS Structure & Scope Demarcation between Seminar and Project
Based on **Figure 3-3: JWD Consulting Intranet Project Work Breakdown Structure (WBS)** (Kathy Schwalbe, page 107), the project follows 5 process groups:

```text
1.0 Initiating (Project Launch & Financials)
   ├── 1.1 Identify key stakeholders
   ├── 1.2 Prepare project charter & business case
   └── 1.3 Hold project kick-off meeting
2.0 Planning (Project Planning & Baseline)
   ├── 2.1 Hold team planning meeting
   ├── 2.2 Prepare team contract
   ├── 2.3 Prepare scope statement
   ├── 2.4 Prepare WBS
   ├── 2.5 Prepare schedule and cost baseline (Tasks, Resources, Gantt chart)
   └── 2.6 Identify, discuss, and prioritize risks
3.0 Executing (Software Construction)
   ├── 3.1 Survey & 3.2 User inputs
   ├── 3.3 Intranet content (Templates, Articles, Links, Ask the Expert)
   ├── 3.4 Design & 3.5 Construction & 3.6 Testing
   └── 3.7 Promotion, 3.8 Roll-out & 3.9 Benefits measurement
4.0 Monitoring and Controlling (Progress Tracking)
   └── 4.1 Progress reports (Weekly status reports)
5.0 Closing (Project Closure)
   ├── 5.1 Prepare final project report
   ├── 5.2 Prepare final project presentation
   └── 5.3 Lessons learned (Báo cáo bài học kinh nghiệm)
```

#### Scope Demarcation:
*   **Seminar Report Scope (Part 1 - 1.0 Initiating & Risk Management Framework):** Includes software risk management theory, Risk Utility Theory, Initiating process group ($1.0$), Project Charter ($1.2$), Stakeholder Strategy ($1.1$), Risk Register ($2.6$), and real-world case studies.
*   **Project Scope (Part 2.0 to 5.0 - Xây dựng Hệ thống Đăng ký Học phần Trực tuyến):** Follows in `Project/` folder, covering Planning ($2.0$), Executing ($3.0$ - DB, API development, frontend coding, testing), Controlling ($4.0$), and Closing ($5.0$).

---

### 5.8. Project Scope Statement - HSU Project (Applying JWD Table 3-9)
*   **Project Title:** Risk and Schedule Management in the Online Course Registration System Construction Project
*   **Date:** July 14, 2026 | **Prepared By:** PM Trần Bá Lợi | **Approved By:** CEO Võ Duy Bình
*   **Product Characteristics & Requirements:**
    1.  *Student Portal:* Interactive timetable lookup, list of open courses, prerequisite checker, and immediate add/drop capabilities.
    2.  *Admin Portal:* Open/close course sections, update class capacities, and access real-time registration stats.
    3.  *Validation Engine:* Block registrations that violate credit limits, schedule conflicts, or prerequisite checks.
    4.  *Security:* Tightly restrict access permissions using JSON Web Tokens (JWT).
*   **Out-of-Scope:** Integration of a payment gateway for direct tuition payments (deferred to a subsequent phase).
*   **Project Success Criteria:** Completed in 1 month, within $150,000 budget, passes stress test of 500 concurrent connections, and achieves 95% user satisfaction.

---

### 5.9. Schedule & Cost Baseline - HSU Project
*   **Task Resources & Allocation:**
    *   *Trần Bá Lợi (PM/Frontend Dev):* Project management (15 days) + SPA Web frontend construction and portal integration (12 days).
    *   *Hồng Bảo Khang (Backend Dev):* DB schema design + core business rule API coding (15 days).
    *   *Nguyễn Thanh Quang (UI/UX & Analyst):* Figma mockups (6 days) + Risk register and CPM dashboard logic (10 days).
*   **Task Durations & Dependencies:**
    *   *Task 1 (Business Survey):* 3 days. Commences post kick-off.
    *   *Task 2 (UI/UX & DB Design):* 5 days. Depends on Task 1 (FS).
    *   *Task 3 (API Coding & Frontend SPA):* 12 days. Depends on Task 2 (FS).
    *   *Task 4 (Testing & Integration):* 6 days. Depends on Task 3 (FS).
    *   *Task 5 (Deployment & Closeout):* 4 days. Depends on Task 4 (FS).
*   **Gantt Chart & Critical Path (CPM):** The critical path runs through `Survey` ➔ `Design` ➔ `API/SPA coding` ➔ `Integration & Testing` ➔ `Closeout`.

---

### 5.10. Communication Management Plan - HSU Project

| Communication Type | Sender | Receiver | Frequency | Method |
| :--- | :--- | :--- | :--- | :--- |
| **Weekly Progress Meeting** | PM Trần Bá Lợi | All Team Members | Every Wednesday (20:00) | Google Meet (Status tracking, solving tech blockages). |
| **Individual Status Report** | Developers | PM Trần Bá Lợi | Weekly (Fridays by 18:00) | Trello board updates + short text summary on Zalo. |
| **Milestone Review** | PM Trần Bá Lợi | CEO Võ Duy Bình | On Milestone Completion | In-person demonstration of slides and prototype. |
| **Code Updates** | Developers | All Team Members | On Feature Completion | GitHub Pull Request (with detailed commit messages). |
| **Academic Reporting** | PM Trần Bá Lợi | Instructor Nguyễn Văn Sơn | Class schedule / email | Classroom briefings + reports sent via HSU email. |

---

#### Summary of 12 PMBOK Deliverables applied at JWD Consulting:

| Process Group | PMBOK Deliverable |
| :--- | :--- |
| **1. Initiating (Seminar Focus)** | • Business Case • Stakeholder Register & Strategy • Project Charter • Kick-off Agenda & Minutes |
| **2. Planning (Project Focus)** | • Team Contract • Project Scope Statement • WBS • Baseline Gantt Chart • Prioritized Risk List |
| **3. Executing (Project Focus)** | • Milestone Reports • Survey & User Inputs |
| **4. Controlling (Project Focus)** | • Weekly Progress Reports • Earned Value Management (EVM) |
| **5. Closing (Project Focus)** | • Final Project Report & Presentation • Lessons-Learned Report • Client Acceptance Form |

---

## 6. Conclusions and Lessons Learned

### 6.1. HSU Project Lessons-Learned Report (Applying JWD Table 3-16)

| Evaluation Questions | Actual Evaluation Detail (HSU Team 3) |
| :--- | :--- |
| **1. Did the project meet scope, time, and cost goals?** | Yes, 100% of functional scope delivered on time (August 15, 2026). Costs exceeded the baseline by $10,000 due to purchasing the external scheduling library, which was approved by CEO Võ Duy Bình. |
| **2. What were the success criteria?** | Deliver a stable registration portal processing 500 concurrent connections, Response times &lt;1.5 seconds, 100% accurate prerequisite checks, and saving 90% of manual academic handling labor. |
| **3. Did the project meet success criteria?** | Yes, successfully verified during load and integration tests. Student survey showed a 95% satisfaction rate. |
| **4. What are the key lessons learned?** | • **Asynchronous collaboration:** Granting designer Quang autonomy minimized bottlenecks.<br>• **Proactive risk management:** Spotting load issues early enabled us to configure Redis caching in Week 2.<br>• **Commercial libraries:** Reusing verified external libraries saved weeks of coding. |
| **5. What went right and what went wrong?** | • **Right:** Real-time CPM schedule calculation on the dashboard worked flawlessly.<br>• **Wrong:** Delayed API definition alignment caused a 2-day delay in integration due to JSON mismatch. |


### 5.11. Project Kick-off Meeting Agenda - HSU Project (Applying JWD Figure 3-2)
A formal Kick-off meeting was held on May 13, 2026, to align all stakeholders and clarify expectations. Below is the meeting agenda and action items established for the HSU Course Registration System Project:

**Project Name:** Online Course Registration System Construction Project  
**Date of Meeting:** May 13, 2026  
**Meeting Objective:** Get the project off to an effective start by introducing key stakeholders, reviewing project goals, and discussing future plans.

#### Agenda Items:
1. **Introductions of Attendees:** Introductions of the project team members and HSU Academic Affairs representatives.
2. **Review of the Project Background:** Discussing the limitations of the legacy web portal and why a mobile application is needed.
3. **Review of Project-Related Documents:** Going through the drafted Business Case and Project Charter.
4. **Discussion of Project Organizational Structure:** Setting responsibilities (PM, Backend Dev, Frontend Dev, UI/UX).
5. **Discussion of Project Scope, Time, and Cost Goals:** Aligning on the 12-week schedule baseline and $150,000 budget constraint.
6. **Discussion of Potential Risks:** Initial brainstorming of technical, human, and schedule risks.
7. **Action Items Registration:**

| Action Item | Assigned To | Due Date |
| :--- | :--- | :--- |
| Draft initial WBS Structure | Võ Duy Bình | May 15, 2026 |
| Conduct student registration requirements survey | Nguyễn Thanh Quang | May 18, 2026 |
| Prepare database schema ERD | Hồng Bảo Khang | May 20, 2026 |
| Finalize Project Team Contract | Trần Bá Lợi | May 14, 2026 |

**Date and Time of Next Meeting:** May 20, 2026, at 20:00 (via Google Meet).

---

### 6.2. General Conclusions
Tying together initiating tools (Project Charter, Stakeholder Strategy, Kick-off) and team alignment frameworks (Team Contract) is essential. Proactive risk management, combined with a deep understanding of Risk Utility Theory, empowers project managers to balance scope, cost, and schedule baseline constraints, ensuring project success.