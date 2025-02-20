function login() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value;
    const password = passwordInput.value;

    if (!email || !password) {
        alert("Please enter both email and password!");
        return;
    }

    fetch('http://127.0.0.1:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            throw new Error(data.error);
        }
        alert(data.message);
        window.location.href = "dashboard.html";
    })
    .catch(error => {
        console.error('Error:', error);
        alert(error.message || "Something went wrong. Try again!");
    });
}
