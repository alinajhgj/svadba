document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var attendance = document.getElementById('attendance').value;

    var response = {
        name: name,
        attendance: attendance
    };

    sendRSVP(response);
});

function sendRSVP(response) {
    var scriptURL = 'https://script.google.com/macros/s/AKfycbyOijfnmi9v_EK4VnqKOHqmEqmbjzYyhDmhRGwi2owHMkUzhu3qJaiP86bbL9KIIlPi/exec';
    
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(response),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => alert('Спасибо за ответ!'))
    .catch(error => alert('Ошибка отправки данных!'));
}
