Xerox Shop Application

Description:
This project is a college Xerox/Materials Management System.

Shop Owner (shop) can manage materials and orders.

Staff can upload course materials for their assigned departments and years.

Students can view department-specific materials, place orders, and pay partially.

Orders are tracked, and students are notified when completed.

This API is built with Node.js, Express, MongoDB, and uses JWT-based authentication.

API Documentation
1️⃣ Authentication APIs
Register User

Endpoint: /auth/register

Method: POST

Description: Register a new user (student/staff/shop)

Login

Endpoint: /auth/login

Method: POST

Description: Login user and get JWT token

Get Current User

Endpoint: /auth/me

Method: GET

Description: Get currently logged-in user info (requires token)

2️⃣ Materials APIs (To be implemented)

Upload Material – Staff uploads materials for department/year

Get Materials – Students fetch materials for their department/year

3️⃣ Orders APIs (To be implemented)

Place Order – Student places an order and pays partially

Update Order – Shop updates order status (completed)

