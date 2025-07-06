// Toggle password visibility
function togglePassword(fieldId) {
  const field = document.getElementById(fieldId);
  field.type = field.type === "password" ? "text" : "password";
}

// Handle signup
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const userData = {
        companyName: document.getElementById("companyName").value,
        regNumber: document.getElementById("regNumber").value,
        contactPerson: document.getElementById("contactPerson").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        password: document.getElementById("password").value,
        plan: document.querySelector("input[name='plan']:checked").value
      };

      localStorage.setItem(userData.email, JSON.stringify(userData));
      alert("Company registered successfully!");
      window.location.href = "login.html";
    });
  }
});

// Handle login
function login() {
  // Optional: collect data if needed later
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Just redirect to Step 1 page
  window.location.href = "step1-sw-declaration.html";
}



