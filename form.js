function clearForm() {
  document.getElementById("myForm").reset();
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

  const choices = document.querySelectorAll('input[name="choice"]:checked');
  const selectedChoices = Array.from(choices).map((choice) => choice.value);

  const tableBody = document.getElementById("tableBody");
  const newRow = tableBody.insertRow();

  const cells = [
    newRow.insertCell(0),
    newRow.insertCell(1),
    newRow.insertCell(2),
    newRow.insertCell(3),
    newRow.insertCell(4),
    newRow.insertCell(5),
    newRow.insertCell(6),
    newRow.insertCell(7),
  ];

  cells[0].innerText = firstName;
  cells[1].innerText = lastName;
  cells[2].innerText = address;
  cells[3].innerText = pincode;
  cells[4].innerText = "";
  cells[5].innerText = selectedChoices.join(", ");
  cells[6].innerText = state;
  cells[7].innerText = country;

  clearForm();
});
