
  document.addEventListener("DOMContentLoaded", function () {


    // ✅ Handle submission
    document.getElementById("paramForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const confirmed = document.getElementById("confirmBox").checked;
      if (!confirmed) {
        alert("You must confirm that the information is accurate before proceeding.");
        return;
      }

      const weight = document.getElementById("weight").value;
      const unit = document.getElementById("unit").value;
      const industry = document.getElementById("industry").value;
      const certificateFile = document.getElementById("certificate").files[0];

      const parameters = {
        weight,
        unit,
        industry,
        certificateName: certificateFile ? certificateFile.name : null
      };

      localStorage.setItem("parameters", JSON.stringify(parameters));
      window.location.href = "step3-analysis.html";
    });
  });

