function signup() {
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!first_name || !last_name || !email || !password) {
        alert("Please fill in all fields!");
        return;
    }

    document.querySelector(".submit").disabled = true;

    fetch('http://127.0.0.1:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ first_name, last_name, email, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        alert(data.message || data.error);
        if (data.message) {
            window.location.href = "login.html";
        }``
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Something went wrong. Try again!");
    })
    .finally(() => {
        document.querySelector(".submit").disabled = false;
    });
}
