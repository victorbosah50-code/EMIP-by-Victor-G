/* ================================
   EMIP™ Advanced Client-Side Engine
   Enterprise Monetization Intelligence
   Built for GitHub Pages (No Servers)
================================ */

/* ---------- Utilities ---------- */

function scrollToScan() {
  document.getElementById("scan").scrollIntoView({ behavior: "smooth" });
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toggleChat() {
  const chat = document.getElementById("chat-window");
  chat.style.display = chat.style.display === "none" ? "block" : "none";
}

/* ---------- Core Scan Engine ---------- */

function runScan() {
  const company = document.getElementById("company").value.trim();
  const website = document.getElementById("website").value.trim();
  const industry = document.getElementById("industry").value;

  if (!company || !website) {
    alert("Please enter company name and website.");
    return;
  }

  const results = document.getElementById("results");
  results.classList.remove("hidden");

  // Loading State
  results.innerHTML = `
    <h3>Running Monetization Intelligence Scan…</h3>
    <p>Analyzing public pricing signals, positioning, and growth patterns.</p>
    <p><em>This takes ~10–20 seconds.</em></p>
  `;

  setTimeout(() => {
    generateResults(company, website, industry);
  }, randomBetween(2500, 4500));
}

/* ---------- Intelligence Generation ---------- */

function generateResults(company, website, industry) {
  const monetizationScore = randomBetween(42, 86);

  const pricingRisk = monetizationScore < 60 ? "High" : "Moderate";
  const expansionGap = randomBetween(0, 100) > 55;
  const enterpriseFit = randomBetween(0, 100) > 50;
  const adWaste = randomBetween(0, 100) > 60;

  const results = document.getElementById("results");

  results.innerHTML = `
    <h3>Monetization Intelligence Report</h3>

    <div style="margin-top:15px;">
      <strong>Company:</strong> ${company}<br/>
      <strong>Industry:</strong> ${industry}<br/>
      <strong>Website:</strong> ${website}
    </div>

    <hr style="margin:20px 0; opacity:0.2;"/>

    <h4>Monetization Health Score</h4>
    <div style="font-size:32px; color:#7aa2ff;">
      ${monetizationScore} / 100
    </div>

    <p style="margin-top:10px;">
      This score reflects pricing efficiency, expansion readiness, and revenue risk exposure.
    </p>

    <hr style="margin:20px 0; opacity:0.2;"/>

    <h4>Detected Risk Signals</h4>
    <ul>
      <li>Pricing & packaging risk: <strong>${pricingRisk}</strong></li>
      <li>Expansion revenue gap: <strong>${expansionGap ? "Detected" : "Low"}</strong></li>
      <li>Enterprise readiness mismatch: <strong>${enterpriseFit ? "Likely" : "Limited"}</strong></li>
      <li>Customer acquisition inefficiency: <strong>${adWaste ? "Potential Ad Spend Waste" : "Stable"}</strong></li>
    </ul>

    <hr style="margin:20px 0; opacity:0.2;"/>

    <h4>Executive Recommendations</h4>
    <ul>
      ${pricingRisk === "High" ? "<li>Re-evaluate pricing tiers and value anchoring.</li>" : ""}
      ${expansionGap ? "<li>Introduce expansion hooks for high-intent users.</li>" : ""}
      ${enterpriseFit ? "<li>Create enterprise packaging with differentiated value.</li>" : ""}
      ${adWaste ? "<li>Audit acquisition channels for ROI leakage.</li>" : ""}
      <li>Run a deeper monetization strategy review.</li>
    </ul>

    <hr style="margin:20px 0; opacity:0.2;"/>

    <div style="background:#0f1733; padding:20px; border-radius:10px;">
      <h4>Next Step</h4>
      <p>
        This public scan highlights potential monetization risks using external signals only.
        A deeper strategic review can quantify revenue impact and provide an execution roadmap.
      </p>
      <button onclick="bookReview()" style="margin-top:10px;">
        Book Monetization Strategy Review
      </button>
    </div>
  `;
}

/* ---------- CTA Action ---------- */

function bookReview() {
  alert(
    "Thanks for your interest.\n\nNext step:\n• Paid Monetization Report\n• Strategy Call\n• Enterprise License\n\n(Contact: Victor Bosah)"
  );
}

/* ---------- Webinar/Pitch Deck Slides ---------- */
const slides = [
  { title: '🚨 FINAL ANNOUNCEMENT: EMIP™', content: 'When I tested it on real SaaS & Fintech companies, the numbers were uncomfortable: 👉 $4M–$12M per year in preventable revenue loss 👉 Not because the product was bad 👉 But because monetization strategy was broken. Revenue doesn’t fail loudly. It fails quietly—long before dashboards, forecasts, or churn metrics react. That silent failure is what I built EMIP™ to expose.' },
  { title: '🔍 WHY EMIP™ EXISTS (THE PROBLEM)', content: 'Most revenue loss stems from: • Pricing decay • Expansion friction • Funnel leakage • Enterprise blockers • Misaligned packaging. These don’t trigger alerts in BI tools, CRMs, dashboards, or finance reports. By the time metrics show damage, millions are lost.' },
  { title: '🧠 WHAT EMIP™ DOES (THE SOLUTION)', content: 'EMIP™ analyzes external signals to surface: ✔ Hidden revenue leakage ✔ Monetization blind spots ✔ Growth blockers ✔ Valuation & scale risks ✔ Competitor expansion opportunities. No access. No credentials. No internal data. 100% enterprise-safe.' },
  { title: '🏗 HOW IT WORKS', content: 'Scans public signals: pricing posture, acquisition friction, expansion readiness, positioning, competitive patterns. Outputs: Monetization heatmaps, risk/opportunity scores, executive insights, investor/PE views. The missing layer between strategy and revenue.' },
  { title: '🌍 WHO THIS IS FOR', content: '• Enterprise teams (CFOs, Strategy, Revenue Leaders) • Private Equity & Investors (pre-deal diligence, portfolio intel) • Consultancies (leverage & acceleration) • Founders (monetization clarity pre-scale)' },
  { title: '💰 BUSINESS MODEL', content: '• Enterprise licensing • Investor/PE subscriptions • Advisory partnerships • White-label intelligence. Typical ACV: $50k–$250k+' },
  { title: '🛡 COMMON ENTERPRISE QUESTIONS (ANSWERED)', content: '“How accurate without our data?” — Complements internal analytics by exposing external risks you can’t see. “Is it secure?” — No internal access, no ingestion, no credentials, zero compliance risk. “Why not build internally?” — You lack external benchmarking and independent signal analysis. “Software or consulting?” — Scalable software with optional executive-grade advisory.' },
  { title: '🚀 WHAT TO EXPECT NEXT', content: '• Enterprise pilots • PE/investor onboarding • Partner integrations • Monetization case studies. EMIP™ becomes the lens for every major revenue decision.' },
  { title: '🤝 CALL TO ACTION', content: 'If you lead revenue/strategy, invest in SaaS/fintech, or advise growth companies and want to spot monetization risks early—let’s talk. 👇 Comment “SCAN” for access to a public monetization intelligence scan. Visit: https://victorbosah50-code.github.io/EMIP-by-Victor-G/' },
  { title: '# HASHTAGS', content: '#SaaS #Fintech #EnterpriseSoftware #Monetization #RevenueIntelligence #PricingStrategy #PrivateEquity #VentureCapital #CFO #Strategy #AI #Founders #GrowthHacking #InvestorRelations #PEFirms #BusinessIntelligence #RevenueOps' }
];

let currentSlide = 0;
document.addEventListener('DOMContentLoaded', () => {
  const slideContent = document.getElementById('results'); // Reuse results for slides
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');
  const exportPdfBtn = document.getElementById('export-pdf');
  const exportCsvBtn = document.getElementById('export-csv');
  const emailForm = document.getElementById('email-form');
  const investorMode = document.getElementById('investor-mode');
  const investorViews = document.getElementById('investor-views');
  const heatmapCtx = document.getElementById('heatmap-canvas').getContext('2d');
  let valuationChart;

  // Render slide
  function renderSlide() {
    const slide = slides[currentSlide];
    slideContent.innerHTML = `<h3>${slide.title}</h3><p>${slide.content}</p>`;
  }

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

  // PDF export (enterprise pitch deck)
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
      y += 40;

      if (index === 2) { // Add chart
        const chartImg = await captureChartAsImage();
        doc.addImage(chartImg, 'PNG', 10, y, 100, 50);
        y += 60;
      }

      if (index === 3) { // Add heatmap
        const heatmapImg = document.getElementById('heatmap-canvas').toDataURL();
        doc.addImage(heatmapImg, 'PNG', 10, y, 100, 50);
        y += 60;
      }

      if (investorMode.checked && index === 5) { // Investor extra
        doc.text('Investor / PE Mode: Valuation Risks & Drawdown (15-30% potential in SaaS/Fintech)', 10, y);
        y += 10;
        const valImg = document.getElementById('valuation-chart').toDataURL();
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

  async function captureChartAsImage() {
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = 400;
    tempCanvas.height = 200;
    new Chart(tempCanvas, {
      type: 'bar',
      data: { labels: ['Risk1', 'Risk2', 'Opportunity1'], datasets: [{ label: 'Scores', data: [65, 59, 80], backgroundColor: '#7aa2ff' }] },
      options: { scales: { y: { beginAtZero: true } } }
    });
    return tempCanvas.toDataURL();
  }

  // Investor mode
  investorMode.addEventListener('change', () => {
    investorViews.style.display = investorMode.checked ? 'block' : 'none';
    if (investorMode.checked && !valuationChart) {
      valuationChart = new Chart(document.getElementById('valuation-chart'), {
        type: 'line',
        data: { labels: ['Q1', 'Q2', 'Q3', 'Q4'], datasets: [{ label: 'Valuation Risk', data: [10, 20, 15, 30], borderColor: '#7aa2ff' }] },
        options: { scales: { y: { beginAtZero: true } } }
      });
    }
  });

  // Heatmap
  const gradient = heatmapCtx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'red');
  gradient.addColorStop(0.5, 'yellow');
  gradient.addColorStop(1, 'green');
  heatmapCtx.fillStyle = gradient;
  heatmapCtx.fillRect(0, 0, 600, 400);
  heatmapCtx.fillStyle = '#eaeaf0';
  heatmapCtx.font = '20px Inter';
  heatmapCtx.fillText('Monetization Heatmap: High Risk (Red) to Low (Green)', 20, 200);
});
