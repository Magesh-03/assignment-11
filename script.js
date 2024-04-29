document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const tableBody = document.getElementById('tableBody');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const address = document.getElementById('address').value;
      const pincode = document.getElementById('pincode').value;
      const gender = document.getElementById('gender').value;
      const foodInputs = document.querySelectorAll('input[name="food"]:checked');
      const state = document.getElementById('state').value;
      const country = document.getElementById('country').value;
  
      if (foodInputs.length < 2) {
        alert('Please select at least 2 food options.');
        return;
      }
  
      const foodArray = Array.from(foodInputs).map(input => input.value).join(', ');
  
      const newRow = tableBody.insertRow();
      newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${foodArray}</td>
        <td>${state}</td>
        <td>${country}</td>
      `;
  
      clearForm();
    });
  
    function clearForm() {
      form.reset();
    }
  });
  