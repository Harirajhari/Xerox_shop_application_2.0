Xerox Shop API

Base URL: http://localhost:5000/api

Authentication
| Endpoint         | Method | Description                                 |
| ---------------- | ------ | ------------------------------------------- |
| `/auth/register` | POST   | Register new user (student/staff/shop)      |
| `/auth/login`    | POST   | Login and get JWT token                     |
| `/auth/me`       | GET    | Get current logged-in user (requires token) |
