const API = "http://localhost:5000/api";

// ADMIN LOGIN

async function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const response = await fetch(API + "/admin/login", {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            username,
            password

        })

    });

    const data = await response.json();
    if (data.success) {

        localStorage.setItem("token", data.token);

        window.location = "dashboard.html";

    }

    else {

        alert(data.message);

    }

}

// CREATE CLASS

async function createClass() {

    const token = localStorage.getItem("token");

    const body = {

        title: document.getElementById("title").value,

        description: document.getElementById("description").value,

        classDate: document.getElementById("classDate").value,

        maxStudents: document.getElementById("maxStudents").value,

        registrationDeadline: document.getElementById("deadline").value

    };

    const response = await fetch(API + "/classes/create", {

        method: "POST",

        headers: {

            "Content-Type": "application/json",

            Authorization: "Bearer " + token

        },

        body: JSON.stringify(body)

    });

    const data = await response.json();

    alert(data.message);

}

// LOAD CLASSES

async function loadClasses() {

    const token = localStorage.getItem("token");

    const response = await fetch(API + "/classes/all", {

        headers: {

            Authorization: "Bearer " + token

        }

    });

    const data = await response.json();

    console.log(data);

}

// LOAD REGISTRATIONS

async function loadRegistrations() {

    const token = localStorage.getItem("token");

    const response = await fetch(API + "/registrations/all", {

        headers: {

            Authorization: "Bearer " + token

        }

    });

    const data = await response.json();

    console.log(data);

}


// APPROVE

async function approve(id) {

    const token = localStorage.getItem("token");

    await fetch(API + "/registrations/approve/" + id, {

        method: "PUT",

        headers: {

            Authorization: "Bearer " + token

        }

    });

    location.reload();

}

// REJECT

async function reject(id) {

    const token = localStorage.getItem("token");

    await fetch(API + "/registrations/reject/" + id, {

        method: "PUT",

        headers: {

            Authorization: "Bearer " + token

        }

    });

    location.reload();

}

// LOGOUT

function logout() {

    localStorage.removeItem("token");

    window.location = "login.html";

}