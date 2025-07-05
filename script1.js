let selectedElement = null;
let selectedText = "";

function selectCode(element, text) {
  if (selectedElement) {
    selectedElement.classList.remove("selected");
  }
  element.classList.add("selected");
  selectedElement = element;
  selectedText = text;

  document.getElementById("selected-code").innerHTML = `Selected SW Code: <strong>${text}</strong>`;
}

function confirmSelection() {
  if (!selectedText) {
    alert("Please select a SW Code first!");
    return;
  }

  // Store selection and go to next step
  localStorage.setItem("selectedSW", selectedText);
  window.location.href = "step2-parameters.html";
}
