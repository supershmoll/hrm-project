# 🎯 HRM 

A modern, highly responsive Human Resources and Learning Management frontend built with React 19. This application features a custom Webpack configuration, robust state management via Redux Toolkit, and a pixel-perfect implementation of a custom Figma design using CSS Modules.

## ✨ Features

* **Secure Authentication:** JWT-based login integration using Redux Toolkit and protected routing.
* **Responsive Dashboard:** A dynamic layout with a fixed header and a collapsible sidebar that perfectly adapts to mobile, tablet, and desktop screens.
* **Course Management:** Advanced grid-based course cards with expand/collapse mobile interactions.
* **Scoped Styling:** 100% modular CSS using CSS Modules (`.module.css`) to prevent class name collisions and ensure maintainable styles.
* **Custom Build Pipeline:** Configured from scratch using Webpack 5 and Babel, complete with Asset Modules for seamless SVG and image handling.

## 🛠 Tech Stack

* **Core:** React 19, React Router v7
* **State Management:** Redux Toolkit (`@reduxjs/toolkit`), React Redux
* **Bundler & Compiler:** Webpack 5, Webpack Dev Server, Babel
* **Styling:** CSS Modules, Custom CSS Reset
* **Formatting:** Prettier
* **Deploy:** [link](https://hrm-project-git-develop-supershmolls-projects.vercel.app/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

You will need Node.js and npm installed on your machine.
* Node.js (v16.0.0 or higher recommended)
* npm

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/hrm-project.git](https://github.com/your-username/hrm-project.git)
   cd hrm-project
   ```
2. Install the dependencies:
```
npm install
```
3. Start the development server:
```
npm start
```
### Authentication API
Currently, the application uses DummyJSON for testing the authentication flow.
When logging in locally, you can use the following test credentials:

* Username: emilys
* Password: emilyspass
