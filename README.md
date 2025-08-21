# React UI Assignment (JS + Tailwind + Storybook)

React UI Assignment

A React + Vite project showcasing reusable UI components with Tailwind CSS, Storybook, and Chromatic deployment.
This project demonstrates modern frontend practices such as dark mode support, accessibility, and automated testing.

---------------------------------------------------------------------------------------------

🚀 Features

⚛️ React + Vite setup (fast build & dev server)

🎨 Tailwind CSS v4 for styling (with dark mode support)

📚 Storybook for isolated component development

☁️ Chromatic Deployment (hosted Storybook for sharing)

🧩 Reusable Components:

 InputField → email, password, search, invalid, clearable states

 DataTable → sortable, responsive, dark mode support

✅ Vitest + React Testing Library for unit tests

🌗 Light & Dark theme previews

---------------------------------------------------------------------------------------------

🛠️ Installation & Setup

1. Clone repository

   git clone <your-repo-url>
   cd react-ui-assignment

2. Install dependencies

   npm install

3. Run development server

   npm run dev

4. Run Storybook

   npm run storybook

   {Storybook will run on http://localhost:6006}

5.  Run tests

   npm run test

---------------------------------------------------------------------------------------------

📦 Available Scripts

 npm run dev → Start Vite dev server

 npm run build → Build production bundle

 npm run preview → Preview production build

 npm run storybook → Start Storybook locally

 npm run build-storybook → Build Storybook for deployment

 npm run chromatic → Publish Storybook to Chromatic

 npm run test → Run unit tests with Vitest

---------------------------------------------------------------------------------------------

🌐 Live Demo (Storybook on Chromatic)

👉 View Published Storybook

---------------------------------------------------------------------------------------------

🧩 Components
🔹 InputField

Supports outlined, filled, and ghost variants

Sizes: sm, md, lg

 Features:

Email input with helper text

Password input with toggle

Search input with clear button

Invalid state with error message

Light & dark mode support

🔹 DataTable

Configurable columns & data

Sortable by clicking column headers

Loading & Empty states

Responsive and accessible

Light & dark mode support


---------------------------------------------------------------------------------------------

🌙 Dark Mode

This project supports dark mode via Tailwind’s dark: classes.
Storybook includes both Light and Dark mode stories for each component.

---------------------------------------------------------------------------------------------

🧪 Testing

We use Vitest + React Testing Library:

 InputField tests cover clear button, password toggle, error states

 DataTable tests cover sorting, loading, and empty states

Run tests:

npm run test

---------------------------------------------------------------------------------------------

🚀 Deployment (Storybook)

This project uses Chromatic for Storybook hosting.

 Deploy with:

 npm run chromatic

---------------------------------------------------------------------------------------------

👨‍💻 Author

 Swapnil Thorat
 Frontend Developer | Full Stack Enthusiast
 swapnilthorat2560@gmail.com
