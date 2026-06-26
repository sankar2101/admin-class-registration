import { Link } from "react-router-dom";

const Dashboard = () => {

  return (
    <div>

      <h1>Admin Dashboard</h1>

      <Link to="/admin/create-class">
        Create Class
      </Link>

      <br /><br />

      <Link to="/admin/registrations">
        View Registrations
      </Link>

    </div>
  );
};

export default Dashboard;