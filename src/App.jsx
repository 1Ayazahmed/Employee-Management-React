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
  const [userData, setUserData] = useContext(AuthContext);
  const [isLoggedInUserData, setIsLoggedInUserData] = useState(null);

  // handleLogin("demo@gmail.com", 134);

  useEffect(() => {
    setLocalStorage(); //to store data in local storage
  }, []);




  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      try {
        const userData = JSON.parse(isLoggedIn);
        setUser(userData.role);
        setIsLoggedInUserData(userData.data || null);
      } catch (err) {
        console.error("Failed to parse isLoggedIn from localStorage:", err);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if ((email === "admin@me.com" || email === "admin@example.com") && password === "123") {
      setUser("admin");
      localStorage.setItem("isLoggedIn", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (emp) => emp.email === email && emp.password === password
      );
      if (employee) {
        setUser("employee");
        setIsLoggedInUserData(employee);
        localStorage.setItem(
          "isLoggedIn",
          JSON.stringify({ role: "employee", data:employee })
        );
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} isLoggedInUserData={isLoggedInUserData} />
      ) : null}
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
