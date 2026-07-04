import { useState } from "react";
import API from "../../services/api";

const CreateClass = () => {

  const [form, setForm] = useState({
    title: "",
    description: "",
    classDate: "",
    maxStudents: "",
    registrationDeadline: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      await API.post(
        "/classes/create",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Class Created");

    } catch (error) {

      alert(error.response.data.message);

    }
  };

  return (
        <div>

        <h2>Create Class</h2>

        <form onSubmit={handleSubmit}>

                <input
                type="text"
                name="title"
                placeholder="Class Title"
                onChange={handleChange}
                />

                <br /><br />

                <textarea
                name="description"
                placeholder="Description"
                onChange={handleChange}
                />

                <br /><br />

                <input
                type="date"
                name="classDate"
                onChange={handleChange}
                />

                <br /><br />

                <input type="number"name="maxStudents"placeholder="Max Students"onChange={handleChange} />
                <br /><br />

                <button type="submit">
                    Create
                </button>
            </form>
        </div>
    );
};
export default CreateClass;