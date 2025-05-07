// document.addEventListener("DOMContentLoaded", () => {
//   const tableBody = document.getElementById("userTableBody");

//   // Retrieve users from local storage
//   const users = JSON.parse(localStorage.getItem("users")) || [];

//   if (users.length === 0) {
//     tableBody.innerHTML = "<tr><td colspan='2'>No registered users.</td></tr>";
//   } else {
//     users.forEach((user) => {
//       const row = `<tr><td>${user.name}</td><td>${user.email}</td></tr>`;
//       tableBody.innerHTML += row;
//     });
//   }
// });
