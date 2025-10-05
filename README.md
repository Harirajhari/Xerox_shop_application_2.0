Xerox Shop Application
Project Description

The Xerox Shop Application is a college-focused system for managing course materials and orders:

Shop Owner (shop): Manages all materials and orders.

Staff (staff): Uploads course materials for assigned departments and years.

Students (student): Can view materials for their department/year, place orders, and pay partially.

The application is built using Node.js, Express, MongoDB, and uses JWT-based authentication for secure access.

Base URL
http://localhost:5000/api

API Documentation
1️⃣ Authentication APIs
| Endpoint         | Method | Description                                        |
| ---------------- | ------ | -------------------------------------------------- |
| `/auth/register` | POST   | Register a new user (student/staff/shop)           |
| `/auth/login`    | POST   | Login user and get JWT token                       |
| `/auth/me`       | GET    | Get currently logged-in user info (requires token) |
