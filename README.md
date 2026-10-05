# 🎓 POLYTECHNIC HUB

<div align="center">
  <img src="https://lalanview.vercel.app/Polytechnic%20Hub%2020261004_144919.jpg" alt="Polytechnic Hub Logo" width="150" />
  <br/>
  <h3>Your Complete Polytechnic Learning Platform</h3>
  <p>A Premium, Mobile-First Progressive Web Application (PWA) designed exclusively for Diploma & Polytechnic Students.</p>
  <br/>
  
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
  [![Vanilla JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
  [![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](#)
  [![PWA](https://img.shields.io/badge/PWA-Ready-8A2BE2?style=for-the-badge&logo=pwa&logoColor=white)](#)
</div>

---

## 📑 Table of Contents
1. [About the Project](#-about-the-project)
2. [Comprehensive Feature List](#-comprehensive-feature-list)
3. [Technology Stack](#-technology-stack)
4. [Project Architecture & File Structure](#-project-architecture--file-structure)
5. [Database Schema (Firestore)](#-database-schema-firestore)
6. [Installation & Setup Guide](#-installation--setup-guide)
7. [Security & Firestore Rules](#-security--firestore-rules)
8. [UI/UX Design System](#-uiux-design-system)
9. [Future Roadmap](#-future-roadmap)

---

## 🚀 About the Project

**Polytechnic Hub** is built to solve the scattered study material problem for engineering diploma students. It brings together premium video courses, syllabus tracking, previous year questions (PYQs), and instant notices into one unified, blazing-fast application. 

By utilizing a **Progressive Web App (PWA)** architecture, students get a native Android app-like experience directly from their browser, complete with offline capabilities, smooth page transitions, and an "Add to Home Screen" feature—all without consuming massive device storage. 

This project intentionally avoids heavy frontend frameworks (like React or Angular) to ensure ultra-fast load times even on low-end mobile devices on slow networks, relying entirely on highly optimized Vanilla JavaScript and CSS.

---

## ✨ Comprehensive Feature List

### 👨‍🎓 Student Facing Features
*   **Secure Authentication (`login.html`)**
    *   Email & Password Login/Registration.
    *   Google One-Tap Sign-In via Firebase Auth.
    *   Smart redirects for already-logged-in users.
*   **Interactive Dashboard (`home.html`)**
    *   Dynamic Greeting pulling from the user's Firestore profile.
    *   Auto-sliding Promotional Banner system for new courses.
    *   9-Grid Quick Access Menu (Paid Courses, Demo Classes, Tests, Study Material, PYQ, VVI Questions, Notices, Syllabus, About Us).
*   **Premium Course Marketplace (`paid-courses.html`)**
    *   Live Search & Filtering (by Engineering Branch and Semester).
    *   Detailed Course Modals showing Instructor, Duration, Lessons, and Pricing.
    *   Skeleton loading states for a premium feel while fetching data.
*   **Learning Progress Tracker (`my-courses.html`)**
    *   Dedicated space for enrolled/purchased courses.
    *   Visual progress bars (e.g., "12 / 20 Lessons - 60%").
    *   Categorized by Active and Completed courses.
*   **Smart Download Manager (`downloads.html`)**
    *   Centralized hub for all PDFs, Notes, and PPTs.
    *   Category filters (Notes, PYQ, Tests).
    *   Local download history tracking to quickly find previously saved files.
*   **Help & Support Center (`help.html`)**
    *   Expandable FAQ accordion.
    *   Direct Helpline integration (Tap to Call / Email).
    *   Support Ticket Generation saving directly to Firestore.
*   **Advanced Settings (`settings.html`)**
    *   **Profile Management:** Edit Name and Branch seamlessly.
    *   **Appearance:** System, Light, and Dark mode toggles (saved to LocalStorage).
    *   **Preferences:** Push Notification toggles, Wi-Fi only download settings.
    *   **Security:** Password change and permanent Account Deletion capabilities.

### 👨‍💻 Admin Features (Isolated Security)
*   **Dedicated Admin Portal (`admin.html`)**
    *   *Note: This file is strictly separated from the student app.*
    *   Full CRUD (Create, Read, Update, Delete) for Courses.
    *   Publish/Unpublish toggles.
    *   Student User Management and Support Ticket resolution interface.

---

## 🛠 Technology Stack

*   **Frontend UI:** HTML5, CSS3 (Custom Variables, Flexbox, CSS Grid, Glassmorphism).
*   **Frontend Logic:** ES6+ Vanilla JavaScript (Modules, Async/Await, DOM Manipulation).
*   **Backend as a Service (BaaS):** 
    *   **Firebase Authentication:** Secure user identity management.
    *   **Cloud Firestore:** NoSQL real-time database for courses, users, and support tickets.
    *   **Firebase Storage:** Hosting for course thumbnails and downloadable PDFs.
*   **PWA Technologies:** `manifest.json`, Service Workers (`sw.js`), Cache API.
*   **Icons:** Inline SVGs (No external library dependencies for faster rendering).

---

## 📁 Project Architecture & File Structure

```text
POLYTECHNIC-HUB/
│
├── ⚙️ Core Setup
│   ├── index.html          # Startup splash screen & PWA install trigger
│   ├── firebase.js         # Firebase configuration & initialization
│   ├── manifest.json       # PWA Manifest (App name, theme colors, icons)
│   └── sw.js               # Service Worker for offline caching
│
├── 🎓 Student Application
│   ├── login.html          # Authentication gate
│   ├── home.html           # Main user dashboard
│   ├── paid-courses.html   # Marketplace for premium content
│   ├── my-courses.html     # Enrolled course library & progress
│   ├── downloads.html      # File download manager & history
│   ├── help.html           # Customer support & FAQs
│   └── settings.html       # User preferences & profile editing
│
└── 🛡️ Administration
    └── admin.html          # Secure backend management dashboard (Do not expose to students)
    
