import { useState } from "react";
import API from "../../services/api";
import { useParams } from "react-router-dom";
const Register = () => {

  const { id } = useParams();

  const [form, setForm] = useState({
    studentName: "",
    email: "",
    phone: "",
    city: "",
  });
  const [paymentProof, setPaymentProof] = useState(null);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {

      const formData = new FormData();

      formData.append(
        "studentName",
        form.studentName
      );

      formData.append(
        "email",
        form.email
      );

      formData.append(
        "phone",
        form.phone
      );

      formData.append(
        "city",
        form.city
      );

      formData.append(
        "classId",
        id
      );

      formData.append(
        "paymentProof",
        paymentProof
      );

      await API.post(
        "/registrations/register",
        formData
      );

      alert("Registration Submitted");

    } catch (error) {

      alert(error.response.data.message);

    }
  };
  return (
    <div>

      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="file"
          onChange={(e) =>
            setPaymentProof(e.target.files[0])
          }
        />

        <br /><br />

        <button type="submit">
          Submit Registration
        </button>

      </form>

    </div>
  );
};

export default Register;