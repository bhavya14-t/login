import React, { useEffect, useState } from "react"; import { useNavigate } from "react-router-dom"; 
// import { GET_USERS_QUERY } from "../graphql/queries"; 
import UserTable from "../components/UserTable";

const Dashboard = () => { const [users, setUsers] = useState([]); const navigate = useNavigate();

useEffect(() => { const token = localStorage.getItem("token"); if (!token) return navigate("/");

const fetchUsers = async () => {
  const res = await fetch("https://api-qa.seamasterai.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query: GET_USERS_QUERY }),
  });
  const result = await res.json();
  const data = result?.data?.usersPermissionsUsers?.data;
  if (data) setUsers(data);
};

fetchUsers();

}, [navigate]);

return ( <div className="dashboard"> <h2>User Dashboard</h2> <UserTable users={users} /> <button onClick={() => { localStorage.removeItem("token"); navigate("/"); }} style={{ marginTop: "20px" }} > Logout </button> </div> ); };

export default Dashboard;