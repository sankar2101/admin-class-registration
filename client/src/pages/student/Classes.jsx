import { useEffect, useState } from "react";
import API from "../../services/api";
import { Link } from "react-router-dom";

const Classes = () => {

  const [classes, setClasses] = useState([]);

  const fetchClasses = async () => {

    try {

      const res = await API.get("/classes/all");

      setClasses(res.data.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <div>

      <h1>Available Classes</h1>

      {
        classes.map((item) => (

          <div
            key={item.id}
            style={{
              border: "1px solid black",
              marginBottom: "20px",
              padding: "20px",
            }}
          >

            <h2>{item.title}</h2>

            <p>{item.description}</p>

            <p>
              Date: {item.classDate}
            </p>

            <Link to={`/register/${item.id}`}>
              Register
            </Link>

          </div>
        ))
      }

    </div>
  );
};

export default Classes;