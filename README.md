# Paradise Nursery - E-Commerce Plant Shopping Application

Paradise Nursery is a React-based e-commerce web application where users can browse various categories of house plants, add items to their shopping cart, manage quantities, and see total cost calculations dynamically updated using Redux Toolkit.

## Project Overview

- **Project Name:** Paradise Nursery (e-plantShopping)
- **Framework:** React + Vite
- **State Management:** Redux Toolkit (`@reduxjs/toolkit` & `react-redux`)
- **Deployment Platform:** GitHub Pages

## Key Features

1. **Landing Page:** Welcomes users with a description of Paradise Nursery and a "Get Started" button that transitions directly to the plant catalog.
2. **Product Catalog (`ProductList.jsx`):**
   - Displays plants categorized under *Air Purifying Plants*, *Aromatic Plants*, and *Medicinal Plants*.
   - Includes plant name, image, description, and price.
   - Dynamic "Add to Cart" button that changes state and gets disabled once clicked.
3. **Shopping Cart (`CartItem.jsx`):**
   - Displays selected plants with unit prices, quantity modifiers (`+` and `-`), subtotal per item, and overall total price.
   - Delete button to remove individual items from cart.
   - "Continue Shopping" button to return to catalog view.
   - "Checkout" button indicating future feature implementation.
4. **Navigation Header:**
   - Shows total quantity count of all added items dynamically updated in real-time.

## Tech Stack

- **Frontend:** JavaScript (ES6+), JSX, React.js
- **State Management:** Redux Toolkit (Slices & Reducers)
- **Styling:** CSS3
- **Build Tool:** Vite
- **Deployment:** `gh-pages`

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/dabeyva/e-plantShopping.git](https://github.com/dabeyva/e-plantShopping.git)
   cd e-plantShopping 