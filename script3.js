function selectMethod(id) {
  localStorage.setItem("selectedMethod", id);
  alert("Method " + id + " selected.");
  calculateAnalysis(); // Recalculate immediately
}

function calculateAnalysis() {
  const param = JSON.parse(localStorage.getItem("parameters"));
  const method = localStorage.getItem("selectedMethod");

  if (!param || !param.weight || !method) return;

  const weight = parseFloat(param.weight);

  // Base cost per method
  const baseCostPerTonne = method === "1" ? 800 : 1500;

  // Cost calculation
  const baseProcessingCost = weight * baseCostPerTonne;
  const transportCost = 500;
  const docCost = 100;
  const totalCost = baseProcessingCost + transportCost + docCost;

  // Recovery outputs
  const fuelOilTonnes = 0.392 * weight;
  const dieselTonnes = 0.056 * weight;
  const cementFuelTonnes = 0.112 * weight;

  const fuelOilValue = fuelOilTonnes * 1500;
  const dieselValue = dieselTonnes * 1500;
  const cementFuelValue = cementFuelTonnes * 800;

  const totalRecovery = fuelOilValue + dieselValue + cementFuelValue;
  const netResult = totalRecovery - totalCost;

  // Fill DOM values (you must add IDs in your HTML to target these)
  document.getElementById("costBase").textContent = "RM " + baseProcessingCost.toFixed(2);
  document.getElementById("costTotal").textContent = "RM " + totalCost.toFixed(2);
  document.getElementById("recFuel").textContent = fuelOilTonnes.toFixed(2) + "t → RM " + fuelOilValue.toFixed(2);
  document.getElementById("recDiesel").textContent = dieselTonnes.toFixed(2) + "t → RM " + dieselValue.toFixed(2);
  document.getElementById("recCement").textContent = cementFuelTonnes.toFixed(2) + "t → RM " + cementFuelValue.toFixed(2);
  document.getElementById("recTotal").textContent = "RM " + totalRecovery.toFixed(2);
  document.getElementById("sumCost").textContent = "RM " + totalCost.toFixed(2);
  document.getElementById("sumRecovery").textContent = "RM " + totalRecovery.toFixed(2);
  document.getElementById("sumNet").textContent = "RM " + netResult.toFixed(2);

  // Store data for next step/report
  const analysis = {
    method,
    weight,
    baseCostPerTonne,
    processingCost: totalCost,
    recoveryValue: totalRecovery,
    netResult,
    recoverables: {
      fuelOil: { tonnes: fuelOilTonnes, value: fuelOilValue },
      diesel: { tonnes: dieselTonnes, value: dieselValue },
      cementFuel: { tonnes: cementFuelTonnes, value: cementFuelValue },
    },
    costs: {
      base: baseProcessingCost,
      transport: transportCost,
      docs: docCost,
    }
  };

  localStorage.setItem("analysisData", JSON.stringify(analysis));
}

function goToNext() {
  const method = localStorage.getItem("selectedMethod");
  if (!method) {
    alert("Please select a method.");
    return;
  }
  window.location.href = "step4-selection.html";
}

document.addEventListener("DOMContentLoaded", () => {
  calculateAnalysis();
});
