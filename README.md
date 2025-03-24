E-Commerce React Application
This is a simple e-commerce application built with React that allows users to browse products, add them to a shopping cart, and view their cart contents. The app makes use of React Router for navigation, Context API for managing the cart state, and an external API to simulate backend interaction.

Features
Browse Products: Users can view a list of modern lighting products.

Add to Cart: Users can add products to their shopping cart.

View Cart: Users can view their cart and remove items.

API Integration: The app makes a mock API request to a backend (simulated) to fetch data.

Responsive Design: The app is responsive and adjusts to different screen sizes.

Tech Stack
Frontend: React, React Router, Context API

API: A mock API hosted on AWS

Styling: Custom CSS with media queries for responsiveness

Setup
Prerequisites
Make sure you have the following installed:

Node.js

npm

Steps
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/your-repository.git
Navigate to the project directory:

bash
Copy
Edit
cd your-repository
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
Open your browser and go to http://localhost:3000 to view the app.

Components
App.js: The main entry point for the app, containing the routing and CartProvider.

HomePage.js: Displays the products and allows users to add them to the cart.

CartPage.js: Displays the shopping cart and allows users to remove items.

Navbar.js: A simple navigation bar for routing between pages.

CartContext.js: Manages the cart state using the Context API.

Context API (CartContext)
addToCart: Adds a product to the shopping cart.

removeFromCart: Removes a product from the shopping cart by its id.

Example CartContext:
typescript
Copy
Edit
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
API Integration
The app uses an API endpoint (API_URL) to simulate data fetching. The API responds with a message, which is displayed on the homepage.

javascript
Copy
Edit
const response = await fetch(API_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  },
  body: JSON.stringify({ message: "Hola desde React" }),
});
Folder Structure
pgsql
Copy
Edit
src/
├── components/
│   └── Navbar.js
├── context/
│   └── CartContext.js
├── data/
│   └── lights.json
├── pages/
│   ├── HomePage.js
│   └── AboutPage.js
├── aws/
│   └── config.js
├── App.js
└── index.js
Styling
The app uses custom CSS for styling the components.

A responsive design ensures that the app works well on various screen sizes.

css
Copy
Edit
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.product-card {
  background-color: #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  width: 250px;
  height: 380px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
}
Future Improvements
Integrate a real backend for handling product data and user authentication.

Add user login and registration features.

Implement a checkout process with payment gateway integration.


Future integration with AWS Services backend data......... :)