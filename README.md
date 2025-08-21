# React UI Assignment (JS + Tailwind + Storybook)

React UI Assignment

A React + Vite project showcasing reusable UI components with Tailwind CSS, Storybook, and Chromatic deployment.
This project demonstrates modern frontend practices such as dark mode support, accessibility, and automated testing.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📦 Available Scripts

 npm run dev → Start Vite dev server

 npm run build → Build production bundle

 npm run preview → Preview production build

 npm run storybook → Start Storybook locally

 npm run build-storybook → Build Storybook for deployment

 npm run chromatic → Publish Storybook to Chromatic

 npm run test → Run unit tests with Vitest

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Live Demo Links
- 🌐 React App (React on Vercel): https://react-ui-components-rouge.vercel.app/
- 📚 Storybook (Storybook on Chromatic): https://68a706c98b437417293b22e0-ptacpdqvbx.chromatic.com/


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🌙 Dark Mode

This project supports dark mode via Tailwind’s dark: classes.
Storybook includes both Light and Dark mode stories for each component.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🧪 Testing

We use Vitest + React Testing Library:

 InputField tests cover clear button, password toggle, error states

 DataTable tests cover sorting, loading, and empty states

Run tests:

npm run test

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📝 Approach

1. Component-Driven Development

   Built InputField and DataTable as reusable components.

   Added props for customization (clearable input, password toggle, sorting).

2. Theming (Light & Dark Mode)

   Used Tailwind’s dark: variants for dynamic theming.

   Storybook stories demonstrate both light and dark themes.

3. Storybook + Chromatic

   Storybook documents and tests UI in isolation.

   Chromatic auto-deploys Storybook for easy sharing with reviewers.

4. Testing

   Added unit tests with Vitest + React Testing Library.

   Ensures form inputs and table sorting work as expected.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Screenshots

Dark Mode
<img width="1366" height="768" alt="Screenshot (21)" src="https://github.com/user-attachments/assets/8bbb2054-bad2-4b50-891a-cc867c27e271" />

Light Mode
<img width="1366" height="768" alt="Screenshot (22)" src="https://github.com/user-attachments/assets/15d92cc2-ca2c-461c-a1d3-46f99a63e7da" />

<img width="1366" height="768" alt="Screenshot (24)" src="https://github.com/user-attachments/assets/bac97543-72fe-4a83-9a57-81ee25760dd0" />

<img width="1366" height="768" alt="Screenshot (25)" src="https://github.com/user-attachments/assets/925e111b-54ef-4eac-b6bd-5960815703bd" />

<img width="1366" height="768" alt="Screenshot (26)" src="https://github.com/user-attachments/assets/a5c43029-d36e-4d09-97fe-94daaf18ec81" />

<img width="1366" height="768" alt="Screenshot (27)" src="https://github.com/user-attachments/assets/647d2cbf-93cf-4828-9b0a-3d501ba9fb29" />

---------------------------------------------------------------------------------------------------------------------------------------------------------
👨‍💻 Author

 Swapnil Thorat
 Frontend Developer | Full Stack Enthusiast
 swapnilthorat2560@gmail.com
