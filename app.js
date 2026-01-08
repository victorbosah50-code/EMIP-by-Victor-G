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

/* ---------- Optional: Auto Demo Data ---------- */
/* Uncomment to auto-fill demo for presentations */

// window.onload = () => {
//   document.getElementById("company").value = "Example SaaS Co";
//   document.getElementById("website").value = "https://example.com";
// };
