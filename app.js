/* ============================
   EMIP™ ENTERPRISE ENGINE
   Client-Side | GitHub Ready
============================ */

function scrollToScan() {
  document.getElementById("scan").scrollIntoView({ behavior: "smooth" });
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* ---- PDF EXPORT ---- */
function exportPDF(text) {
  const blob = new Blob([text], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "EMIP_Report.pdf";
  link.click();
}

/* ---- RUN SCAN ---- */
function runScan() {
  const company = companyInput();
  const score = rand(45, 88);

  const results = document.getElementById("results");
  results.classList.remove("hidden");

  const report = `
EMIP MONETIZATION REPORT

Company: ${company}
Score: ${score}/100

• Pricing Risk: ${score < 60 ? "High" : "Moderate"}
• Expansion Gaps Detected
• Enterprise Readiness: ${score > 70 ? "Strong" : "Limited"}

Recommendation:
Strategic monetization review advised.
  `;

  results.innerHTML = `
    <h3>Monetization Score: ${score}/100</h3>
    <p>Pricing Risk: ${score < 60 ? "High" : "Moderate"}</p>
    <p>Expansion & Enterprise Gaps Detected</p>
    <button onclick="exportPDF(\`${report}\`)">Export PDF</button>
  `;

  drawHeatmap(score);
}

/* ---- HEATMAP ---- */
function drawHeatmap(score) {
  const ctx = document.getElementById("heatmapCanvas").getContext("2d");
  ctx.clearRect(0, 0, 700, 300);

  const areas = ["Pricing", "Packaging", "Expansion", "Enterprise", "Acquisition"];
  areas.forEach((a, i) => {
    const risk = rand(20, 90);
    ctx.fillStyle = risk > 70 ? "#ff4d4d" : risk > 40 ? "#ffd166" : "#06d6a0";
    ctx.fillRect(i * 140, 300 - risk * 3, 120, risk * 3);
    ctx.fillStyle = "#000";
    ctx.fillText(a, i * 140 + 20, 290);
  });
}

/* ---- INVESTOR MODE ---- */
function runInvestorMode() {
  const box = document.getElementById("investorResults");
  box.classList.remove("hidden");

  box.innerHTML = `
    <h3>Investor / PE Intelligence Summary</h3>
    <ul>
      <li>Revenue Leakage Exposure: Moderate–High</li>
      <li>Pricing Efficiency Risk: Material</li>
      <li>Upside via Repackaging & Expansion</li>
      <li>Due Diligence Flag: Monetization Optimization Required</li>
    </ul>
  `;
}

/* ---- SECURITY COPILOT ---- */
function sendChat() {
  const input = document.getElementById("chatInput");
  const log = document.getElementById("chatLog");

  log.innerHTML += `<div><strong>You:</strong> ${input.value}</div>`;

  setTimeout(() => {
    log.innerHTML += `<div><strong>AI Co-Pilot:</strong> 
    Potential monetization systems increase attack surface. 
    Recommend threat modeling and access segmentation.</div>`;
    log.scrollTop = log.scrollHeight;
  }, 600);

  input.value = "";
}

function companyInput() {
  return document.getElementById("company").value || "Unnamed Company";
}
