function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const target = document.querySelector('.empty_div')

    target.innerHTML = "";

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
        target.innerHTML = "<p style='color: green;'>" + data.message + "</p>";
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1500);
    })
    .catch(error => {
        console.error('Error:', error);
        alert(error.message || "Something went wrong. Try again!");
    });
}
