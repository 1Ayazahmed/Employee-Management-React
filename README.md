Employee Management React (Vite)
A small single-page Employee Management app built with React and Vite. Demonstrates common React patterns and front-end concepts: simple client-side authentication (admin / employee), creating and assigning tasks, and per-user dashboards persisted to browser localStorage.

Live demo / Preview
Add your deployed demo link here (if available).

Tech stack
React (function components + Hooks)
Vite (dev tooling / bundling)
Tailwind-style utility classes (used in component classNames)
Browser localStorage for simple persistence
Plain JavaScript (no backend)
Key features / concepts demonstrated
Project bootstrapped with Vite
Component composition and folder structure
React Hooks: useState, useEffect, useContext
Context API for sharing employees state across components (AuthProvider.jsx)
Controlled forms and form submission (Login, Create Task)
Conditional UI rendering (admin vs employee dashboards)
List rendering and array updates (task lists and per-employee tasks)
Data persistence via localStorage (LocalStorage.jsx)
Simple role-based client-side authentication pattern (demo only)
File structure (high level)
src
App.jsx — top-level login & role handling
main.jsx — React entry point (Vite)
components/
Login.jsx — login form
AdminDashboard.jsx — admin UI (create tasks, view employees)
Dashboard/EmployeeDashboard.jsx — employee UI (task lists)
CreateTask.jsx — create & assign task form
TaskList/ — task state components (NewTask, AcceptTask, CompleteTask, FailedTask, TaskList.jsx)
Header.jsx, AllTasks.jsx, HomeTaskCards/TotalTasks.jsx, etc.
AuthProvider.jsx — provides employees & setter via AuthContext
LocalStorage.jsx — seed data and helpers to set/get localStorage
How to run (development)
Clone the repo
Install dependencies
Start the dev server
Open the dev URL shown by Vite (default: http://localhost:5173)
Demo credentials / test accounts
Admin

Email: admin@example.com
Password: 123
Sample employees (from LocalStorage.jsx)

Ahmad — email: e@e.com, password: 123
Ayesha — email: employee2@example.com, password: 123
Bilal — email: employee3@example.com, password: 123
Fatima — email: employee4@example.com, password: 123
Abdan — email: employee5@example.com, password: 123
Use the admin to create/assign tasks, then login as the employee to see assigned tasks.

Important implementation notes & current limitations
Task assignment currently matches by employee firstName (free-text). This can cause assignment to fail on typos or name variants (e.g., "Ahmed" vs "Ahmad").
The app uses localStorage to seed and persist data. This is suitable for demos only — not secure or multi-user ready.
AuthContext currently provides [UserData, setUserData] (array). Consider returning a named object from the provider ({ employees, setEmployees }) for clearer API.
Some parts of the code may mutate state objects/arrays directly. Prefer immutable updates (create new arrays/objects) when updating state so React detects changes and re-renders reliably.
No real backend or secure auth — credentials are checked client-side for demonstration.
