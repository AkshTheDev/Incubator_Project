function signup() {
    const username = document.getElementById('username').value;
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const target = document.querySelector('.empty_div')

    target.innerHTML = "";

    if (!first_name || !last_name || !email || !password || !username) {
        target.innerHTML="<p style='color: red'>Please fill in all fields!</p>"
        return;
    }

    document.querySelector(".submit").disabled = true;

    fetch('http://127.0.0.1:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, first_name, last_name, email, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.message) {
            target.innerHTML = "<p style='color: green;'>" + data.message + "</p>";
            setTimeout(() => {
                window.location.href = "login.html";
            }, 1500);
        }
        else {
            alert(data.error)
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Something went wrong. Try again!");
    })
    .finally(() => {
        document.querySelector(".submit").disabled = false;
    });
}
