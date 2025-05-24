# Node.js MVC Policy Upload System

This project is a Node.js + MongoDB backend system that supports:
- CSV uploads with worker threads
- Policy, User, Agent, Account management
- Scheduled messages
- CPU usage monitoring (auto shutdown at 70%)

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Pratikgite/file-upload-and-cpu-utilization.git
cd file-upload-and-cpu-utilization
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start MongoDB
Ensure MongoDB is running locally at `mongodb://localhost:27017/policyDB`

### 4. Run the Server
```bash
node app.js
```
