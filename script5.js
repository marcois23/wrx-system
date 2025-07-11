document.addEventListener("DOMContentLoaded", () => {
  // === Load Recovery Products Analysis (SW Declaration) ===
  const swData = JSON.parse(localStorage.getItem("swDeclaration"));

  if (swData) {
    document.getElementById("swTech").textContent = swData.technology;
    document.getElementById("swProduct").textContent = swData.output;
    document.getElementById("swPrice").textContent = swData.price;
    document.getElementById("swMinQty").textContent = swData.minQty;
    document.getElementById("swStatus").textContent = swData.status;
    document.getElementById("swProvider").textContent = swData.provider;
    document.getElementById("swUse").textContent = swData.uses;
    document.getElementById("swCode").textContent = swData.code;
  } else {
    console.warn("SW Declaration data not found in localStorage.");
  }

  // === Load Selected Contractor Info ===
  const contractor = JSON.parse(localStorage.getItem("selectedContractor"));

  if (contractor) {
    document.getElementById("contractorName").textContent = contractor.name;
    document.getElementById("contractorLocation").textContent = contractor.location;
    document.getElementById("contractorRating").textContent = `⭐️⭐️⭐️⭐️⭐️ ${contractor.rating}/5.0`;
  } else {
    document.getElementById("contractorBox").innerHTML += "<p><em>No contractor selected.</em></p>";
    console.warn("Contractor data not found in localStorage.");
  }

  // === Button Functionalities ===
  const printBtn = document.querySelector("button[onclick='window.print()']");
  const downloadBtn = document.querySelector("button:nth-of-type(2)");
  const newAnalysisBtn = document.querySelector("button:nth-of-type(3)");
  const exitBtn = document.querySelector("button:nth-of-type(4)");

  // Print Report
  printBtn.addEventListener("click", () => {
    window.print();
  });

  // Download PDF (simulate print for now)
  downloadBtn.addEventListener("click", () => {
    window.print(); // Replace with actual PDF library if needed later
  });

  // Start New Analysis
  newAnalysisBtn.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "step1-sw-declaration.html"; // Adjust to actual step 1 filename
  });

  // Exit to Main Menu
  exitBtn.addEventListener("click", () => {
    window.location.href = "index.html"; // Replace with your actual homepage
  });
});
