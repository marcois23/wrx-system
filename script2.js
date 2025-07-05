document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("confirm");
  const nextBtn = document.getElementById("nextBtn");
  const form = document.getElementById("paramForm");

  // Enable button only when checkbox is checked
  checkbox.addEventListener("change", function () {
    nextBtn.disabled = !checkbox.checked;
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const weight = document.getElementById("weight").value;
    const unit = document.getElementById("unit").value;
    const industry = document.getElementById("industry").value;
    const certificate = document.getElementById("certificate").files[0];

    if (!weight || !unit || !industry || !certificate || !checkbox.checked) {
      alert("Please complete all fields and confirm.");
      return;
    }

    // Optional: Save to localStorage or FormData
    const data = {
      weight,
      unit,
      industry,
      certificateName: certificate.name
    };

    localStorage.setItem("parameters", JSON.stringify(data));

    alert("Step 2 completed successfully!");
    window.location.href = "step3-analysis.html"; // Proceed to next step
  });
});
