import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import "./index.css";
import { useEffect, useState } from "react";
// import { setLocalStorage } from "./utils/LocalStorage"
// localStorage.clear();
const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      console.log("Admin is logged in");
    } else if (email == "usser@me.com" && password == "123") {
      setUser("employee");
      console.log("User is logged in");
    } else {
      alert("Invalid credentials");
    }
  };

  // handleLogin("demo@gmail.com", 134);

  // useEffect(() => {
  //   setLocalStorage();
  // }, [])

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
