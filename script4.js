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

  // Load previous selection
  const saved = JSON.parse(localStorage.getItem("selectedContractor"));
  if (saved) selectedContractor = saved;

  // Generate contractor cards
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

    // Restore previously selected contractor
    if (saved && saved.name === c.name) {
      div.classList.add("selected");
    }

    // Add click handler
    div.addEventListener("click", () => {
      document.querySelectorAll(".contractor").forEach(el => el.classList.remove("selected"));
      div.classList.add("selected");
      selectedContractor = contractorDataset[c.name];
      localStorage.setItem("selectedContractor", JSON.stringify(selectedContractor));
    });

    container.appendChild(div);
  });

  // Handle button click
  const reportBtn = document.getElementById("generateReportBtn");
  reportBtn.addEventListener("click", () => {
    if (!selectedContractor) {
      alert("Please select a contractor before generating the report.");
    } else {
      window.location.href = "step5-report.html";
    }
  });
});
