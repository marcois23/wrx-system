function loadReport() {
  // Simulate SW Declaration
  document.getElementById("swDeclaration").textContent = "Data not captured in this mock (placeholder).";

  // Parameters
  const param = JSON.parse(localStorage.getItem("parameters"));
  if (param) {
    document.getElementById("paramWeight").textContent = param.weight + " " + param.unit;
    document.getElementById("paramUnit").textContent = param.unit;
    document.getElementById("paramIndustry").textContent = param.industry;
    document.getElementById("paramCert").textContent = param.certificateName || "Uploaded";
  }

  // Analysis
  const analysis = JSON.parse(localStorage.getItem("analysisData"));
  if (analysis) {
    document.getElementById("anaMethod").textContent = "Method " + analysis.method;
    document.getElementById("anaCost").textContent = "RM " + analysis.processingCost.toFixed(2);
    document.getElementById("anaRecovery").textContent = "RM " + analysis.recoveryValue.toFixed(2);
    document.getElementById("anaNet").textContent = "RM " + analysis.netResult.toFixed(2);

    document.getElementById("recFuel").textContent = `${analysis.recoverables.fuelOil.tonnes.toFixed(2)} t → RM ${analysis.recoverables.fuelOil.value.toFixed(2)}`;
    document.getElementById("recDiesel").textContent = `${analysis.recoverables.diesel.tonnes.toFixed(2)} t → RM ${analysis.recoverables.diesel.value.toFixed(2)}`;
    document.getElementById("recCement").textContent = `${analysis.recoverables.cementFuel.tonnes.toFixed(2)} t → RM ${analysis.recoverables.cementFuel.value.toFixed(2)}`;
  }

  // Contractor
  const contractor = localStorage.getItem("selectedContractor");
  if (contractor) {
    document.getElementById("contractor").textContent = contractor;
  }
}

function startNew() {
  localStorage.clear();
  window.location.href = "step1-sw-declaration.html"; // Adjust path as needed
}

function exitApp() {
  alert("Thank you. You may now close this window.");
}

function downloadPDF() {
  window.print(); // For now use print dialog (can integrate html2pdf later)
}

document.addEventListener("DOMContentLoaded", loadReport);
