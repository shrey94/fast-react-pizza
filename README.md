# Fast React Pizza Co.

A modern web application for ordering pizzas online, built with React, Vite, and Tailwind CSS.

## Features

- **Browse Menu:** View the full list of available pizzas.
- **Add to Cart:** Select pizzas and add them to your shopping cart.
- **Manage Cart:** Update quantities or remove items from the cart.
- **Place Order:** Submit your order with customer details.
- **Order Lookup:** Search for existing orders by ID.
- **User Management:** Simple user creation to associate orders.
- **(Optional) Priority Ordering:** Mark orders as priority for faster delivery.
- **(Optional) Geolocation:** Automatically fetch user address (requires browser permission).

## Technologies Used

- **Frontend:** React.js
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Routing:** React Router
- **API Interaction:** Fetch API for interacting with a backend pizza API and geocoding service.
- **Linting:** ESLint

## Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── features/       # Core feature modules (cart, menu, order, user)
│   │   ├── cart/
│   │   ├── menu/
│   │   ├── order/
│   │   └── user/
│   ├── services/       # API interaction logic
│   ├── ui/             # Reusable UI components
│   ├── utils/          # Helper functions
│   ├── App.jsx         # Main application component with routing
│   ├── index.css       # Global styles & Tailwind directives
│   ├── main.jsx        # Application entry point
│   └── store.js        # Redux store configuration
├── .eslintrc.cjs       # ESLint configuration
├── .gitignore          # Git ignore rules
├── index.html          # HTML entry point
├── package.json        # Project metadata and dependencies
├── postcss.config.js   # PostCSS configuration (for Tailwind)
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## Setup and Installation

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <your-repository-url>
    cd fast-react-pizza
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Creates a production build in the `dist/` folder.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run preview`: Serves the production build locally for preview.
