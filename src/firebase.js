// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

// 配置从环境变量中读取（记得在 Netlify 配置）
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MSG_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

// 初始化 Firebase（Web 项目专用）
const firebaseApp = initializeApp(firebaseConfig)

// 如果你使用 Google Analytics（Web 独有）
getAnalytics(firebaseApp)

export default firebaseApp
