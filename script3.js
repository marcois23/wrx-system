// Triggered when a method is selected
function selectMethod(method) {
  const weight = parseFloat(localStorage.getItem("inputWeight")) || 10000; // fallback weight
  const unit = localStorage.getItem("inputUnit") || "kg";

  let costBase = 0;
  let costTransport = 500;
  let costDoc = 100;

  let recFuelTons = 0;
  let recDieselTons = 0;
  let recCementTons = 0;

  let recFuelRM = 0;
  let recDieselRM = 0;
  let recCementRM = 0;

  if (method === "1") {
    // Method 1 Values (Base: 10,000 kg)
    const factor = weight / 10000;

    costBase = 8000 * factor;

    recFuelTons = 3.92 * factor;
    recFuelRM = 5880 * factor;

    recDieselTons = 0.56 * factor;
    recDieselRM = 840 * factor;

    recCementTons = 1.12 * factor;
    recCementRM = 896 * factor;
  } else if (method === "2") {
    // Method 2 Values (Base: 10,000 kg)
    const factor = weight / 10000;

    costBase = 15000 * factor;

    recFuelTons = 5.3 * factor;
    recFuelRM = 7950 * factor;

    recDieselTons = 0.8 * factor;
    recDieselRM = 1200 * factor;

    recCementTons = 1.5 * factor;
    recCementRM = 1200 * factor;
  }

  const costTotal = costBase + costTransport + costDoc;
  const recTotal = recFuelRM + recDieselRM + recCementRM;
  const netResult = recTotal - costTotal;

  // === Update UI ===
  document.getElementById("costBase").textContent = `RM ${costBase.toFixed(2)}`;
  document.getElementById("costTotal").textContent = `RM ${costTotal.toFixed(2)}`;

  document.getElementById("recFuel").textContent = `${recFuelTons.toFixed(2)}t → RM ${recFuelRM.toFixed(2)}`;
  document.getElementById("recDiesel").textContent = `${recDieselTons.toFixed(2)}t → RM ${recDieselRM.toFixed(2)}`;
  document.getElementById("recCement").textContent = `${recCementTons.toFixed(2)}t → RM ${recCementRM.toFixed(2)}`;
  document.getElementById("recTotal").textContent = `RM ${recTotal.toFixed(2)}`;

  document.getElementById("sumCost").textContent = `RM ${costTotal.toFixed(2)}`;
  document.getElementById("sumRecovery").textContent = `RM ${recTotal.toFixed(2)}`;
  document.getElementById("sumNet").textContent = `RM ${netResult.toFixed(2)}`;

  // === Save to localStorage for Step 5 ===
  localStorage.setItem("selectedMethod", method);
  localStorage.setItem("summaryCost", costTotal.toFixed(2));
  localStorage.setItem("summaryRecovery", recTotal.toFixed(2));
  localStorage.setItem("summaryNet", netResult.toFixed(2));
  localStorage.setItem("wasteRecovered", (recFuelTons + recDieselTons + recCementTons).toFixed(2));
}

// Proceed to Step 4
function goToNext() {
  window.location.href = "step4-selection.html";
}
