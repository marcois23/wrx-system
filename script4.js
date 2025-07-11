const contractorDataset = {
  "Kualiti Alam": {
    name: "Kualiti Alam",
    location: "Malaysia",
    rating: "4.5",
    icon: "🏭"
  },
  "Pentas Flora": {
    name: "Pentas Flora",
    location: "Malaysia",
    rating: "4.5",
    icon: "♻️"
  },
  "Amita Naza": {
    name: "Amita Naza",
    location: "Malaysia",
    rating: "4.5",
    icon: "🧪"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".contractors");
  let selectedContractor = null;

  // Restore previous selection
  const saved = JSON.parse(localStorage.getItem("selectedContractor"));
  if (saved) selectedContractor = saved;

  // Create contractor cards dynamically
  Object.values(contractorDataset).forEach(c => {
    const div = document.createElement("div");
    div.className = "contractor";
    div.dataset.name = c.name;

    div.innerHTML = `
      <div class="icon">${c.icon}</div>
      <h3>${c.name}</h3>
      <p>Location: ${c.location}</p>
      <p>⭐️⭐️⭐️⭐️⭐️ ${c.rating}</p>
    `;

    // Add 'selected' class if it's the saved contractor
    if (saved && saved.name === c.name) {
      div.classList.add("selected");
    }

    // Add click event here
    div.addEventListener("click", function () {
      document.querySelectorAll(".contractor").forEach(el => el.classList.remove("selected"));
      this.classList.add("selected");

      selectedContractor = contractorDataset[this.dataset.name];
      localStorage.setItem("selectedContractor", JSON.stringify(selectedContractor));
    });

    container.appendChild(div);
  });

  // Button: Go to Report
  document.getElementById("generateReportBtn").addEventListener("click", () => {
    if (!selectedContractor) {
      alert("Please select a contractor before generating the report.");
      return;
    }
    window.location.href = "step5-report.html";
  });
});
