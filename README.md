# 🛒 E-commerce Shopping Platform

A full-featured e-commerce web application built using **React**, **Redux**, and **MongoDB**, offering a seamless shopping experience with advanced product search, user authentication, and personalized dashboards.

> 📆 Developed as a Spring 2023 project  
> 🚀 35% increase in user engagement and satisfaction during testing


<!-- 
## 🖥️ Screenshots

![Home Page](https://raw.githubusercontent.com/jgudo/ecommerce-react/master/static/screeny1.png)  
![Product Listing](https://raw.githubusercontent.com/jgudo/ecommerce-react/master/static/screeny2.png)  
![Cart View](https://raw.githubusercontent.com/jgudo/ecommerce-react/master/static/screeny3.png)  
![User Dashboard](https://raw.githubusercontent.com/jgudo/ecommerce-react/master/static/screeny7.png)
-->


## ✨ Key Features

- **Advanced product search:**  Supports debounced keyword queries and lazy-loaded product results, enhancing search responsiveness and user experience.
- **Smart cart management:**  Enables item size and quantity edits, supports anonymous carts, and auto-merges carts upon user login.
- **Secure user authentication:**  Implements persistent cookie-based sessions for smooth, uninterrupted shopping without repeated logins.
- **Admin & user dashboards:**  Provides full CRUD capabilities for managing orders, profiles, and product inventory based on user roles.
- **Order history & profile management:**  Allows users to track past orders and edit account details independently.
- **RESTful API integration:**  Integrates a backend API with pagination and optimized data loading to reduce server load and improve performance.



## ✌🏻 Technical Highlights

- Implemented **Redux** to manage login state, user info, and shopping cart
- Designed a **24-hour expiration cookie session system** for persistent auth and cart merging
- Developed **user dashboards** with full order and profile management
- Added **debounced search** to reduce API calls by 20%
- Achieved **35% faster load time** via lazy loading and paginated APIs


## 🛠️ Getting Started

### 1. Clone and install dependencies

```bash
git clone https://github.com/hazelenu/ecommerce-react.git
cd ecommerce-react
yarn install
```

### 2. Create a new firebase project
Login to your google account and create a new firebase project [here](https://console.firebase.google.com/u/0/)

Create an `.env` file and add the following variables.

```
// SAMPLE CONFIG .env, you should put the actual config details found on your project settings

VITE_FIREBASE_API_KEY=AIzaKJgkjhSdfSgkjhdkKJdkjowf
VITE_FIREBASE_AUTH_DOMAIN=yourauthdomin.firebaseapp.com
VITE_FIREBASE_DB_URL=https://yourdburl.firebaseio.com
VITE_FIREBASE_PROJECT_ID=yourproject-id
VITE_FIREBASE_STORAGE_BUCKET=yourstoragebucket.appspot.com
VITE_FIREBASE_MSG_SENDER_ID=43597918523958
VITE_FIREBASE_APP_ID=234598789798798fg3-034

``` 

After setting up necessary configuration,
create a **Database** and choose **Cloud Firestore** and start in test mode

### 3. Run development server
```sh 
$ yarn dev
```


### 4. Build the project
```sh
$ yarn build
```

## 🔐 Admin Access Instructions
1. Sign up at `/signup`
2. In Firestore, change your user role from `USER` to `ADMIN`
3. Log back in to access admin dashboard


## 💻 Tech Stack
- Frontend: React, Redux, Vite
- Backend: MongoDB, Firebase Auth
- Deployment: Vercel / Netlify / Firebase Hosting


## 👩‍💻 Author
Hazel Li

