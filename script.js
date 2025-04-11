const form = document.getElementById('rsvpForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const params = new URLSearchParams(formData);

  fetch('https://script.google.com/macros/s/AKfycbyOijfnmi9v_EK4VnqKOHqmEqmbjzYyhDmhRGwi2owHMkUzhu3qJaiP86bbL9KIIlPi/exec', {
    method: 'POST',
    body: params
  })
    .then(() => {
      form.reset();
      successMsg.style.display = 'block';
    })
    .catch(err => alert("Қате болды: " + err));
});
