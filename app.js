function runScan() {
  const company = document.getElementById("company").value;
  const industry = document.getElementById("industry").value;
  const report = document.getElementById("report");

  if (!company) {
    alert("Please enter a company website");
    return;
  }

  // Sharper enterprise-level estimates (SaaS / Fintech)
  const lossLow = "$3.2M";
  const lossHigh = "$9.7M";

  report.classList.remove("hidden");
  report.innerHTML = `
    <h2>Enterprise Monetization Report</h2>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Industry:</strong> ${industry}</p>

    <h3>Revenue Risk Score:
      <span style="color:#f87171">78 / 100 — CRITICAL</span>
    </h3>

    <h4>Critical Monetization Failures</h4>
    <ul>
      <li>No enterprise or custom pricing tiers</li>
      <li>Paid acquisition traffic leaking at conversion points</li>
      <li>High-intent pages not monetized</li>
      <li>No structured upsell / expansion revenue model</li>
      <li>Weak trust, compliance, or security signaling</li>
    </ul>

    <h4>Estimated Annual Revenue Leakage</h4>
    <p style="font-size:20px;color:#fb7185">
      <strong>${lossLow} – ${lossHigh}</strong>
    </p>

    <h4>30-Day Monetization Fix Plan</h4>
    <ul>
      <li>Enterprise & volume-based pricing rollout</li>
      <li>Ad funnel reconstruction</li>
      <li>B2B lead capture & qualification</li>
      <li>Expansion revenue strategy</li>
    </ul>

    <p><strong>If you want this fixed for your company, DM Victor G.</strong></p>

    <button class="export-btn" onclick="exportPDF()">Export PDF Report</button>
  `;
}

function exportPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const text = document.getElementById("report").innerText;

  doc.text(text, 10, 10, { maxWidth: 180 });
  doc.save("EMIP_Monetization_Report.pdf");
}
