
# Zerodha Clone – MERN Stack Project

A full-stack trading web application clone of Zerodha with user authentication, portfolio management, watchlist, and order placement functionality.
#

## Folder Structure
```text
project-root/
│
├─ backend/       → Express + MongoDB (API & JWT auth)
├─dashboard/      → React dashboard panel
└─frontend/       → React user-facing trading interface
```


## Features

- User Authentication (JWT + Cookies)
- Dashboard with user orders & holdings
- Place Buy/Sell orders
- Watchlist with stock charts
- Map function used for dynamic display of orders/holdings
- Logout & Protected routes

## Technologies Used

- MongoDB Atlas
- Express.js & Node.js
- React.js (Frontend & Dashboard)
- JWT Authentication & Cookie-based sessions
- Bootstrap / Tailwind CSS
- Chart.js or any chart library (for stock charts)


## cd backend
npm install
cp .env.example .env  # Add MONGO_URI, TOKEN_KEY, PORT
npm run dev

## Setup & Run Locally

### Backend

```bash
cd backend
npm install
cp .env  # Add MONGO_URI, TOKEN_KEY
npm run dev

```
### Frontend

```bash
cd frontend
npm install
npm start


```
### Dashboard

```bash
cd dashboard
npm install
npm start

```


    
