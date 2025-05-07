document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const user = { name, email, password };

    
    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

  
    localStorage.setItem("users", JSON.stringify(users));

    fetch("https://jsonplaceholder.typicode.com/posts123", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => console.log("Server Response:", data))
      .catch((error) => console.error("Error:", error));

    // Clear form
    form.reset();

    alert("Registration successful!");
  });
});
