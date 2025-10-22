import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import "./index.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/LocalStorage";
// localStorage.clear();
// localStorage.setLocalStorage()
// localStorage.getItem('admin')
// setLocalStorage();

const App = () => {
  const [user, setUser] = useState(null);
  const authdata = useContext(AuthContext);
  const [isLoggedInUserData, setIsLoggedInUserData] = useState(null);

    // handleLogin("demo@gmail.com", 134);

  useEffect(() => {
    setLocalStorage();   //to store data in local storage
  }, [])


  useEffect(() => {
    if (authdata) {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      const userData = JSON.parse(isLoggedIn);
      // if (isLoggedIn) {
      //   setUser(isLoggedIn.role);
      // }
      console.log(userData);
      
    }
  }, [authdata]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("isLoggedIn", JSON.stringify({ role: "admin" }));
    } else if (authdata) {
      const employee =
        authdata.employees.find(
          (emp) => emp.email === email && emp.password === password
        );
      if (employee) {
        setUser("employee");
        setIsLoggedInUserData(employee);
        localStorage.setItem(
          "isLoggedIn",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      alert("Invalid credentials");
    }
  };



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : (user == "employee" ? <EmployeeDashboard isLoggedInUserData={isLoggedInUserData} /> : null)}
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
