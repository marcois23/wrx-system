// Define variables
let selectedElement = null;
let selectedSWCode = "";

// Master dataset of SW codes
const swDataset = {
  "SW 305 - Spent Lubricating Oil": {
    code: "SW 305",
    description: "Spent lubricating oil",
    technology: "Re-refining process",
    output: "Hydraulic base oils",
    price: "RM1,600",
    minQty: "5000 liters/month",
    uses: "Base stock for manufacturing new hydraulic or lubricating oils Alternative fuel in cement kilns, Furnaces or industrial boilers sold for downstream products blenders",
    provider: "Safety-Kleen",
    status: "Commercial"
  },
  "SW 204 - Heavy Metal Sludges": {
    code: "SW 204",
    description: "Heavy metal sludge",
    technology: "Dewatering",
    output: "Inert sludge",
    price: "RM500 - RM1000",
    minQty: "2000 kg/month",
    uses: "Landfill cover material, Construction filling material",
    provider: "Cleanway Disposal, Hiap Huat Holdings",
    status: "Commercial"
  },
  "SW 311 - Waste Oil/Oily Sludge": {
    code: "SW 311",
    description: "Waste oil/oily sludge",
    technology: "Thermal cracking",
    output: "Diesel, gasoline fractions",
    price: "RM800 - RM1500",
    minQty: "2500 kg/month",
    uses: "Cement kiln co-processing, construction material",
    provider: "Avangard Innovative",
    status: "Commercial"
  },
  "SW 304 - Press cake from glycerol soap lye": {
    code: "SW 304",
    description: "Glycerol soap lye press cake",
    technology: "Anaerobic digestion",
    output: "Biogas, glycerol recovery",
    price: "-",
    minQty: "-",
    uses: "-",
    provider: "Veolia Water Technologies",
    status: "Commercial"
  },
  "SW 306 - Spent hydraulic oil": {
    code: "SW 306",
    description: "Spent hydraulic oil",
    technology: "Re-refining process",
    output: "Hydraulic base oils",
    price: "RM1600",
    minQty: "5000 liters/month",
    uses: "Base stock for manufacturing new hydraulic or lubricating oils Alternative fuel in cement kilns, Furnaces or industrial boilers sold for downstream products blenders",
    provider: "Safety-Kleen",
    status: "Commercial"
  },
  "SW 307 - Spent mineral oil/water emulsion": {
    code: "SW 307",
    description: "Spent mineral oil/water emulsion",
    technology: "Thermal treatment",
    output: "Base oil and Fuel oil & Carbon black",
    price: "RM1200",
    minQty: "4 tonnes",
    uses: "Reuse as low grade lubricants",
    provider: "Alfa Laval",
    status: "Commercial"
  }
};

// Function to handle SW selection and highlight
function selectCode(element, code) {
  if (selectedElement) {
    selectedElement.classList.remove("selected");
  }

  element.classList.add("selected");
  selectedElement = element;
  selectedSWCode = code;

  // Display selected code text
  document.getElementById("selected-code").innerHTML = `Selected SW Code: <strong>${code}</strong>`;
}

// Function to confirm and proceed
function confirmSelection() {
  if (!selectedSWCode) {
    alert("Please select a SW Code first!");
    return;
  }

  const selectedData = swDataset[selectedSWCode];
  if (selectedData) {
    // Store full SW declaration data to localStorage
    localStorage.setItem("swDeclaration", JSON.stringify(selectedData));
    window.location.href = "step2-parameters.html";
  } else {
    alert("Something went wrong. Please try again.");
  }
}
