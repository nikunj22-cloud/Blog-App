# Blog App Backend (MERN Stack)

## 📝 Project Overview
This is a **MERN Stack** based **Blog App Backend**, which provides API endpoints for creating, updating, deleting, liking, disliking, and commenting on blog posts. It is designed to store and manage blog entries in a **MongoDB** database using **Express.js** and **Node.js**.

## 🚀 Features
- RESTful API for CRUD operations on blog posts
- Like and dislike functionality
- Commenting system
- Database integration with MongoDB
- Error handling and validation

## 🛠️ Technologies Used
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)

## 🎯 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/blog-app-backend.git
cd blog-app-backend
```
### 2️⃣ Install Dependencies
```sh
npm install  # or yarn install
```
### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root folder and add necessary environment variables:
```env
PORT=5000
DATABASE_URL=your-database-url
```
### 4️⃣ Run the Application
```sh
npm start  # or node server.js
```

## 📡 API Endpoints
| Method | Endpoint           | Description                |
|--------|-------------------|----------------------------|
| GET    | `/api/posts`      | Get all blog posts         |
| POST   | `/api/posts`      | Create a new blog post     |
| PUT    | `/api/posts/:id`  | Update a blog post         |
| DELETE | `/api/posts/:id`  | Delete a blog post         |
| POST   | `/api/posts/:id/like` | Like a blog post       |
| POST   | `/api/posts/:id/dislike` | Dislike a blog post |
| POST   | `/api/posts/:id/comment` | Add a comment       |

## 🤝 Contributing
Feel free to contribute! Follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Added a new feature"`)
4. Push to your fork (`git push origin feature-branch`)
5. Open a Pull Request

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact
For any inquiries, feel free to reach out:
- **Email:** your-email@example.com
- **GitHub:** [your-username](https://github.com/your-username)

