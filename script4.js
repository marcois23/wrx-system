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

  // Dynamically create contractor cards
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

    container.appendChild(div);
  });

  let selectedContractor = null;

  // Restore previous selection
  const saved = JSON.parse(localStorage.getItem("selectedContractor"));
  if (saved) {
    selectedContractor = saved;
    document.querySelectorAll(".contractor").forEach(el => {
      if (el.dataset.name === saved.name) {
        el.classList.add("selected");
      }
    });
  }

  // Selection logic
  document.querySelectorAll(".contractor").forEach(el => {
    el.addEventListener("click", function () {
      document.querySelectorAll(".contractor").forEach(c => c.classList.remove("selected"));
      this.classList.add("selected");

      const name = this.dataset.name;
      selectedContractor = contractorDataset[name];

      localStorage.setItem("selectedContractor", JSON.stringify(selectedContractor));
    });
  });

  // Button click → Go to report
  document.getElementById("generateReportBtn").addEventListener("click", () => {
    const selected = localStorage.getItem("selectedContractor");

    if (!selected) {
      alert("Please select a contractor before generating the report.");
      return;
    }

    window.location.href = "step5-report.html";
  });
});
