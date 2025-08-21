# ToDo List frontend

To-Do application that allows users to manage tasks efficiently. Users can add, update, mark as complete, and delete tasks. The app provides a simple, responsive interface and persists data using a backend server.

---

## Tech Stack

Frontend: React.js, Tailwind, Axios, React Icons, Context Api |
Backend: Node.js, Express.js, Bcrypt|
Database:  MongoDB |
Authentication: JWT  |

## Setup Instructions

1. **Clone the repository**
   ```sh
   git clone https://github.com/Pooja-k22/todo-list-frontend.git
   cd todo-list-frontend
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```

4. **Open in browser**
   
   Visit [http://localhost:5173](http://localhost:5173), 


---

## API Routes

| Method | Route                      | Description               |
|--------|----------------------------|----------------------------|
| POST   | `/register`                | Register a new user        |
| POST   | `/login`                   | User login                 |
| POST   | `/add-item`                | Add a new todo item        |
| GET    | `/get-item`                | Get all todo items         |
| GET    | `/get-item-one/:id`        | Get details of a item      |
| PUT    | `/edit-item/:id`           | Edit item                  |
| PUT    | `/status-update/:id`       | Update status              |
| DELETE | `/delete/:id`              | Delete item                |
---



