document.addEventListener('DOMContentLoaded', () => {
    // Slides for webinar/pitch deck (based on your announcement)
    const slides = [
        { title: '🚨 FINAL ANNOUNCEMENT: EMIP™', content: 'Revenue doesn’t fail loudly. It fails quietly; long before dashboards, forecasts, or churn metrics react. That silent failure is what I built EMIP™ to expose. EMIP™ is a pre-financial intelligence layer that reveals hidden revenue risk and unrealized growth before it shows up in analytics, using public market signals only.' },
        { title: '🔍 WHY EMIP™ EXISTS (THE PROBLEM)', content: 'Most revenue loss comes from: • pricing decay • expansion friction • funnel leakage • enterprise blockers • misaligned packaging. These issues do not trigger alerts in: • BI tools • CRMs • analytics dashboards • finance reports. By the time metrics reflect damage, millions are already lost.' },
        { title: '🧠 WHAT EMIP™ DOES (THE SOLUTION)', content: 'EMIP™ analyzes external monetization signals to surface: ✔ Hidden revenue leakage ✔ Monetization blind spots ✔ Enterprise growth blockers ✔ Valuation & scale risk ✔ Expansion opportunities competitors already exploit. No access. No credentials. No internal data. Enterprise-safe by design.' },
        { title: '🏗 HOW IT WORKS (ARCHITECTURE LOGIC)', content: 'EMIP™ scans public signals across: • pricing & packaging posture • acquisition friction • expansion readiness • enterprise positioning • competitive monetization patterns. It outputs: • Monetization heatmaps • Risk & opportunity scores • Executive-ready insights • Investor & PE views. This is pre-financial intelligence — the layer missing between strategy and revenue.' },
        { title: '🌍 WHO THIS IS FOR (WHERE IT LANDS)', content: '• Enterprise teams → CFOs, Strategy, Revenue Leaders • Private Equity & Investors → pre-deal diligence & portfolio intelligence • Consultancies → leverage & acceleration • Founders → monetization clarity before scale' },
        { title: '💰 BUSINESS MODEL (HOW IT SCALES)', content: '• Enterprise licensing • Investor / PE subscriptions • Advisory & consulting partnerships • White-label intelligence. Typical engagement: $50k – $250k+ ACV' },
        { title: '🛡 COMMON ENTERPRISE QUESTIONS (ANSWERED)', content: '“How accurate is this without our data?” EMIP™ complements internal analytics by exposing external risks internal data cannot see. “Is this secure?” We never touch internal systems. No ingestion. No credentials. No compliance risk. “Why not build this internally?” Internal teams lack external benchmarking and independent signal analysis. “Is this software or consulting?” Software-driven intelligence with optional advisory — insights scale, thinking stays executive-grade.' },
        { title: '🚀 WHAT TO EXPECT NEXT', content: 'Over the next phase: • Enterprise pilots • PE & investor onboarding • Partner integrations • Monetization case studies. EMIP™ becomes the lens used before every major revenue decision.' },
        { title: '🤝 CALL TO ACTION', content: 'If you: • lead revenue or strategy • invest in SaaS or fintech • advise growth companies and want to see monetization risk before it hits the numbers, let’s talk. 👇 Comment “SCAN” and I’ll share access to a public monetization intelligence scan.' },
        { title: '📌 HASHTAGS', content: '#SaaS #Fintech #EnterpriseSoftware #Monetization #RevenueIntelligence #PricingStrategy #PrivateEquity #VentureCapital #CFO #Strategy #AI #Founders' }
    ];

    let currentSlide = 0;
    const slideContent = document.getElementById('slide-content');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    const exportPdfBtn = document.getElementById('export-pdf');
    const exportCsvBtn = document.getElementById('export-csv');
    const emailForm = document.getElementById('email-form');
    const investorMode = document.getElementById('investor-mode');
    const investorViews = document.getElementById('investor-views');
    const heatmapCtx = document.getElementById('heatmap-canvas').getContext('2d');
    let valuationChart;

    // Render current slide
    function renderSlide() {
        const slide = slides[currentSlide];
        slideContent.innerHTML = `<h3>${slide.title}</h3><p>${slide.content}</p>`;
    }

    // Next/Prev buttons
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        renderSlide();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        renderSlide();
    });

    // Email capture
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email-input').value;
        let emails = JSON.parse(localStorage.getItem('emails')) || [];
        emails.push(email);
        localStorage.setItem('emails', JSON.stringify(emails));
        alert('Email captured privacy-safely!');
        emailForm.reset();
    });

    // CSV export
    exportCsvBtn.addEventListener('click', () => {
        const emails = JSON.parse(localStorage.getItem('emails')) || [];
        const csv = 'Email\n' + emails.join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'email_list.csv';
        a.click();
    });

    // PDF export (enterprise pitch deck with charts, heatmaps, investor views)
    exportPdfBtn.addEventListener('click', async () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        let y = 10;
        doc.setFontSize(16);
        doc.text('EMIP™ Enterprise Pitch Deck', 10, y);
        y += 10;

        slides.forEach((slide, index) => {
            doc.setFontSize(12);
            doc.text(slide.title, 10, y);
            y += 10;
            doc.setFontSize(10);
            doc.text(slide.content, 10, y, { maxWidth: 180 });
            y += 40; // Space for content

            // Add demo chart image (simulate capture from canvas)
            if (index === 2) { // Add chart to "WHAT" slide
                const chartImg = await captureChartAsImage(); // Function below
                doc.addImage(chartImg, 'PNG', 10, y, 100, 50);
                y += 60;
            }

            // Add heatmap image
            if (index === 3) { // Add to "HOW" slide
                const heatmapImg = heatmapCanvas.toDataURL();
                doc.addImage(heatmapImg, 'PNG', 10, y, 100, 50);
                y += 60;
            }

            if (investorMode.checked && index === 5) { // Investor mode extra
                doc.text('Investor / PE Mode: Valuation Risks', 10, y);
                y += 10;
                const valImg = valuationCanvas.toDataURL();
                doc.addImage(valImg, 'PNG', 10, y, 100, 50);
                y += 60;
            }

            if (y > 250) {
                doc.addPage();
                y = 10;
            }
        });

        doc.save('emip_pitch_deck.pdf');
    });

    // Function to capture chart as image (for PDF)
    async function captureChartAsImage() {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = 400;
        tempCanvas.height = 200;
        new Chart(tempCanvas, {
            type: 'bar',
            data: {
                labels: ['Risk1', 'Risk2', 'Opportunity1'],
                datasets: [{ label: 'Scores', data: [65, 59, 80], backgroundColor: '#00ffcc' }]
            },
            options: { scales: { y: { beginAtZero: true } } }
        });
        return tempCanvas.toDataURL();
    }

    // Investor mode toggle
    investorMode.addEventListener('change', () => {
        investorViews.style.display = investorMode.checked ? 'block' : 'none';
        if (investorMode.checked && !valuationChart) {
            valuationChart = new Chart(document.getElementById('valuation-chart'), {
                type: 'line',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                    datasets: [{ label: 'Valuation Risk', data: [10, 20, 15, 30], borderColor: '#ffcc00' }]
                },
                options: { scales: { y: { beginAtZero: true } } }
            });
        }
    });

    // Draw demo monetization heatmap
    const gradient = heatmapCtx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(0.5, 'yellow');
    gradient.addColorStop(1, 'green');
    heatmapCtx.fillStyle = gradient;
    heatmapCtx.fillRect(0, 0, 400, 300);
    heatmapCtx.fillStyle = '#000';
    heatmapCtx.font = '16px Arial';
    heatmapCtx.fillText('Monetization Heatmap: High Risk (Red) to Low (Green)', 10, 150);

    renderSlide(); // Initial slide
});
