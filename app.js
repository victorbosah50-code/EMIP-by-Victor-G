// === Slide Navigation ===
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextSlideBtn = document.getElementById('nextSlide');
const prevSlideBtn = document.getElementById('prevSlide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

nextSlideBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prevSlideBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

showSlide(currentSlide);

// === AI Cybersecurity Co-Pilot Chat ===
const chatInput = document.getElementById('chatInput');
const messages = document.querySelector('.messages');

document.getElementById('aiCoPilotBtn').addEventListener('click', () => {
  messages.innerHTML += `<div><strong>AI Co-Pilot:</strong> Hello! How can I assist with cybersecurity today?</div>`;
});

chatInput.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' && chatInput.value.trim() !== '') {
    messages.innerHTML += `<div><strong>You:</strong> ${chatInput.value}</div>`;
    messages.innerHTML += `<div><strong>AI Co-Pilot:</strong> Suggestion: Monitor your endpoints and update your firewall rules.</div>`;
    chatInput.value = '';
    messages.scrollTop = messages.scrollHeight;
  }
});

// === Heatmap Chart ===
const ctx = document.getElementById('heatmapChart').getContext('2d');
const heatmapChart = new Chart(ctx, {
  type: 'heatmap',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Revenue Leak Score',
      data: [20, 35, 50, 65, 80],
      backgroundColor: ['#3b82f6', '#2563eb', '#1e40af', '#1e3a8a', '#111827']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

// === PDF Export ===
document.getElementById('exportPDF').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  slides.forEach((slide, i) => {
    if(i > 0) doc.addPage();
    doc.text(slide.innerText, 10, 10);
  });
  doc.save('EMIP_PitchDeck.pdf');
});

// === Email Capture & CSV Export ===
let emails = [];
document.getElementById('saveEmail').addEventListener('click', () => {
  const email = document.getElementById('emailInput').value;
  if(email) {
    emails.push(email);
    document.getElementById('emailInput').value = '';
    alert('Email saved (privacy-safe).');
  }
});

document.getElementById('exportCSV').addEventListener('click', () => {
  let csvContent = "data:text/csv;charset=utf-8,Email\n" + emails.join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "emails.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
