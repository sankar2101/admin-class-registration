const API = "http://localhost:5000/api";


// LOAD CLASSES


async function loadClasses() {

    const response = await fetch(API + "/classes/all");

    const data = await response.json();

    console.log(data);

}

// REGISTER STUDENT

async function registerStudent() {

    const formData = new FormData();

    formData.append(

        "studentName",

        document.getElementById("studentName").value

    );

    formData.append(

        "email",

        document.getElementById("email").value

    );

    formData.append(

        "phone",

        document.getElementById("phone").value

    );

    formData.append(

        "city",

        document.getElementById("city").value

    );

    formData.append(

        "ClassId",

        document.getElementById("classId").value

    );

    formData.append(

        "paymentProof",

        document.getElementById("paymentProof").files[0]

    );



    const response = await fetch(

        API + "/registrations/create",

        {

            method: "POST",

            body: formData

        }

    );



    const data = await response.json();

    if (data.success) {

        window.location = "success.html";

    }

    else {

        alert(data.message);

    }

}