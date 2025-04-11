document.getElementById("confirmationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const attend = document.getElementById("attend").value;

    alert(`${name}, сіздің тойға қатысуыңыз: ${attend === 'yes' ? 'Иә' : 'Жоқ'}`);
});
