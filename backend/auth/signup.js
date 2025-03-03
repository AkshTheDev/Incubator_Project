function signup() {
    const username = document.getElementById('username').value;
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const target = document.querySelector('.empty_div')

    target.innerHTML = "";

    if (!first_name || !email || !password || !username) {
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

document.getElementById("username").addEventListener("input", function() {
    checkUsernameAvailability(this.value);
});

function checkUsernameAvailability(username) {
    const statusDiv = document.getElementById('username_status');

    if (username.length < 3) {
        statusDiv.innerHTML = "Username must be at least 3 characters.";
        statusDiv.style.color = "red";
        return;
    }

    fetch(`http://127.0.0.1:3000/check-username?username=${username}`)
    .then(response => response.json())
    .then(data => {
        if (data.available) {
            statusDiv.innerHTML = "✅ Username is available!";
            statusDiv.style.color = "green";
        } else {
            statusDiv.innerHTML = "❌ Username already taken!";
            statusDiv.style.color = "red";
        }
    })
    .catch(error => console.error("Error checking username:", error));
}
