document.getElementById("loginForm").addEventListener("submit",

 function(event) {
  event.preventDefault(); // Prevent form submission
  
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  // Hardcoded credentials
  const credentials = {
    admin: "admin123",
    attendant: "park2026"
  };

  if (credentials[username] && credentials[username] === password) {
    // Role-based redirect
    if (username === "admin") {
      window.location.href = "reports.html";
    } else if (username === "attendant") {
      window.location.href = "dashboard.html";
    }
  } else {
    errorMessage.textContent = "Invalid username or password!";
}});