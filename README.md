👨‍💼 Employee Management React (Vite)

A clean and simple Employee Management single-page web app built with React and Vite.
It demonstrates essential React concepts such as Context API, Hooks, client-side authentication, and state persistence using localStorage — all in a modern, responsive UI.

🚀 Live Demo / Preview

👉 Add your deployed demo link here

🧠 Tech Stack

⚛️ React (Function Components + Hooks)

⚡ Vite (for fast dev tooling & bundling)

🎨 Tailwind-style utility classes (used for styling)

💾 Browser localStorage (for simple data persistence)

🧱 Plain JavaScript — No backend required!

✨ Key Features

✅ Role-based Authentication
Admin & Employee login system (client-side demo only)

✅ Admin Dashboard
Create and assign tasks to employees
View all employees and their assigned work

✅ Employee Dashboard
View personal tasks categorized by status: New, Active, Completed, Failed

✅ Persistent Data
All employee and task data is stored in localStorage

✅ React Concepts Demonstrated

useState, useEffect, useContext

Context API for global state management

Controlled form inputs

Conditional rendering (admin vs employee)

Immutable state updates

Clean and modular component structure



🗂️ File Structure (High-level Overview)


src/
├── App.jsx                  # Top-level logic: login, role handling
├── main.jsx                 # React entry point (Vite)
├── components/
│   ├── Auth/
│   │   └── Login.jsx        # Login form component
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   ├── Others/
│   │   ├── Header.jsx
│   │   ├── AllTasks.jsx
│   │   └── HomeTaskCards/
│   │       └── TotalTasks.jsx
│   ├── TaskList/
│   │   ├── TaskList.jsx
│   │   ├── NewTask.jsx
│   │   ├── AcceptTask.jsx
│   │   ├── CompleteTask.jsx
│   │   └── FailedTask.jsx
│   └── CreateTask.jsx       # Admin task creation form
├── context/
│   └── AuthProvider.jsx     # Provides employees state via Context API
├── utils/
│   └── LocalStorage.jsx     # Seeds and manages localStorage data
└── index.css                # Global styles




🧑‍💻 How to Run (Development)

Clone the repo

git clone https://github.com/yourusername/employee-management-react.git
cd employee-management-react


Install dependencies

npm install


Start the dev server

npm run dev


Open your browser

Navigate to 👉 http://localhost:5173

🔑 Demo Credentials
👨‍💼 Admin
Email	Password
admin@example.com	123
👩‍💻 Employees (sample data from LocalStorage.jsx)
Name	Email	Password
Ahmad	e@e.com
	123
Ayesha	employee2@example.com
	123
Bilal	employee3@example.com
	123
Fatima	employee4@example.com
	123
Abdan	employee5@example.com
	123
⚙️ Implementation Notes

Task assignment currently matches employee firstName (free-text).
→ Typos (e.g., "Ahmed" vs "Ahmad") may cause mismatches.

Data is persisted in localStorage for demo purposes.
→ Not secure for production use.

AuthContext currently provides [userData, setUserData].
→ Consider returning a named object { employees, setEmployees } for clearer API.

Some components may mutate state directly — prefer immutable updates for reliable re-renders.

No real backend or API — authentication is purely client-side.



💡 Credits
Developed by Ayaz Ahmed

Made with ❤️ using React, Vite, and Tailwind
