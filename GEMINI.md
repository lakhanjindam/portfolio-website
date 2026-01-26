# Project Overview

This is a modern portfolio website built with React, TypeScript, and Tailwind CSS. It uses Vite for a fast development experience and Framer Motion for animations. The project is structured into several components, each representing a different section of the portfolio, such as "Hero," "Timeline," "Skills," "Certifications," and "Contact."

# Building and Running

To work with this project, you need to have Node.js and npm (or yarn) installed.

**1. Install Dependencies:**

```bash
npm install
```

**2. Run the Development Server:**

```bash
npm run dev
```

This will start the development server, and you can view the website at `http://localhost:5173`.

**3. Build for Production:**

```bash
npm run build
```

This command will create a `dist` directory with the optimized production build of the website.

**4. Linting:**

```bash
npm run lint
```

This will run the ESLint to check for any code quality issues.

# Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Utility classes are preferred over custom CSS.
*   **Components:** The code is organized into reusable React components, located in the `src/components` directory.
*   **Type Safety:** TypeScript is used throughout the project to ensure type safety.
*   **Animations:** Framer Motion is used for animations to create a more dynamic user experience.
