import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import "./index.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider";
// import { setLocalStorage } from "./utils/LocalStorage"
// localStorage.clear();
const App = () => {
  const [user, setUser] = useState(null);
  const authdata = useContext(AuthContext);
  console.log("Auth Context Data:", authdata);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else if (authdata && authdata.employees.find(emp => emp.email === email && emp.password === password))  {
      setUser("employee");
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
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
