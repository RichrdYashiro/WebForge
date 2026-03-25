<div align="center">

  <h1>🛠️ WebForge</h1>
  <p><b>The High-Performance No-Code Engine for Modern Web</b></p>

  <img src="https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/Redux-Toolkit-764ABC?style=flat-square&logo=redux" />
</div>

---

**WebForge** is an advanced React-based website builder designed to generate clean, semantic, and production-ready code without writing a single line of HTML or CSS. This project serves as a demonstration of expert-level component architecture, complex state management, and custom engine development.

---

## 🚀 Core Features

- **Drag-and-Drop Canvas:** Intuitive UI assembly using a modern, performant D&D engine.
- **Smart Code Generation:** Instant compilation of visual layouts into valid, BEM-friendly HTML5 and CSS3.
- **Secure Authentication:** User registration system featuring 2FA/OTP verification via email.
- **Live Style Inspector:** Real-time editing of block properties (typography, spacing, colors) with instant preview.
- **Micro-animations:** Fluid UI transitions and feedback powered by Framer Motion.

---

## 🛠 Tech Stack

- **Frontend:** React 18 + TypeScript.
- **State Management:** Redux Toolkit (Logic-heavy state handling).
- **Architecture:** **Component-Based Architecture** (Modular & Reusable).
- **Styling:** SCSS / CSS Modules with **BEM methodology**.
- **D&D Engine:** `@dnd-kit/core` for robust drag-and-drop logic.
- **Animations:** Framer Motion for high-end UX.

---

## 🏗 Project Structure

WebForge follows a clean, modular component-based directory structure:

```
src/
 ├── assets/         # Images, fonts, and global SCSS
 ├── components/     # UI-Kit (Button, Input) & shared business components
 ├── layout/         # Page wrappers (Header, Sidebar, MainLayout)
 ├── pages/          # Application views (Editor, Auth, Dashboard)
 ├── store/          # Redux Toolkit (Slices, Hooks, Store config)
 ├── services/       # API logic, Email service, and Code Generator engine
 ├── hooks/          # Custom React hooks (useAuth, useEditor)
 ├── types/          # Global TypeScript interfaces and unions
 └── utils/          # Helper functions and validators
```
 
📦 Getting Started
Clone the repository:

Bash
```
git clone [https://github.com/your-username/webforge.git](https://github.com/your-username/webforge.git)
```
Install dependencies:
Bash
```
npm install
```
Launch development server:
Bash
```
npm run dev
```
📈 Roadmap
```
[ ] Integration with Google OAuth 2.0.
[ ] Exporting full projects as downloadable .zip archives.
[ ] Custom font integration via Google Fonts API.
[ ] Collaborative editing mode (WebSockets support).
```
Note for Recruiters: This project is a showcase of handling complex frontend business logic, implementing custom engines, and managing the data lifecycle from user input to final code compilation.
