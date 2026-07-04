import { useEffect, useState } from "react";
import API from "../../services/api";

const Registrations = () => {

  const [data, setData] = useState([]);

  const token = localStorage.getItem("token");

  const fetchRegistrations = async () => {

    try {

      const res = await API.get(
        "/registrations/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(res.data.data);

    } catch (error) {

      console.log(error);

    }
  };

  const approveStudent = async (id) => {

    await API.put(
      `/registrations/approve/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchRegistrations();
  };
  const rejectStudent = async (id) => {

    await API.put(
      `/registrations/reject/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchRegistrations();
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);
  return (
    <div>

      <h1>Registrations</h1>

      {
        data.map((item) => (

          <div
            key={item.id}
            style={{
              border: "1px solid black",
              marginBottom: "20px",
              padding: "20px",
            }}
          >

            <h2>{item.studentName}</h2>

            <p>{item.email}</p>

            <p>{item.phone}</p>

            <p>Status: {item.status}</p>

            <img
              src={`http://localhost:5000/uploads/${item.paymentProof}`}
              width="200"
            />

            <br /><br />

            <button
              onClick={() => approveStudent(item.id)}
            >
              Approve
            </button>

            <button
              onClick={() => rejectStudent(item.id)}
            >
              Reject
            </button>

          </div>
        ))
      }

    </div>
  );
};

export default Registrations;
