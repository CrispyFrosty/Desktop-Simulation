const form = document.getElementById("login-form");
const password = document.getElementById("password");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const validCredentials = [
    {
      password: "pass1", // First
      password: "pass2", // Second
    },
  ];

  for (const credential of validCredentials) {
    if (credential.password === password.value) {
      window.location.href = "Desktop.html";
    } else {
      window.alert("Invalid username or password");
    }
  }
});

// Reload the page when navigating back
window.addEventListener("pageshow", function (event) {
  var historyTraversal =
    event.persisted ||
    (typeof window.performance != "undefined" && window.performance === 2);
  if (historyTraversal) {
    // Handle page restore.
    window.location.reload();
  }
});

function preventBack() {
  window.history.forward();
}

setTimeout("preventBack()", 0);

window = function () {
  null;
};
