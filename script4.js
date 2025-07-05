function generateReport() {
  const form = document.getElementById("contractorForm");
  const selected = form.contractor.value;

  if (!selected) {
    alert("Please select a contractor.");
    return;
  }

  localStorage.setItem("selectedContractor", selected);
  window.location.href = "step5-report.html";
}
