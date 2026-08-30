import { useState } from "react";
import Home from "./Home";
import { foodItems } from "./data/food";
import FoodCard from "./components/FoodCard.jsx";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function Menu({ cart, setCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const addToCart = (food) => {
    const existingFood = cart.find((item) => item.id === food.id);

    if (existingFood) {
      setCart(
        cart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
  };

  const categories = [
    "All",
    "Momo",
    "Pizza",
    "Burgers",
    "Noodles",
    "Snacks",
  ];

  const filteredFood = foodItems.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || food.category === category;

    return matchesSearch && matchesCategory;
  });

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      <nav className="bg-orange-500 text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          🍴 Foodie
        </h1>

        <button
          onClick={() => navigate("/checkout")}
          className="font-semibold px-4 py-2 rounded-lg"
        >
          🛒 Cart:{" "}
          {cart.reduce(
            (total, food) => total + food.quantity,
            0
          )}
        </button>
      </nav>

      <div className="text-center py-8">
        <h1 className="text-4xl font-bold">
          Delicious Food 😋
        </h1>

        <p className="text-gray-600 mt-2">
          Find your favorite food and order now!
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6 mb-6">
        <input
          type="text"
          placeholder="🔎 Search for food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-xl border border-gray-300"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3 px-6 mb-8">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-5 py-2 rounded-full font-semibold ${
              category === item
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredFood.length > 0 ? (
          filteredFood.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No food found 😭
          </p>
        )}

      </div>

    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cart.reduce(
    (total, food) =>
      total + food.price * food.quantity,
    0
  );

  const placeOrder = () => {
    setCart([]);
    window.location.href = "/success";
  };

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/menu"
          element={
            <Menu
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              totalPrice={totalPrice}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              placeOrder={placeOrder}
            />
          }
        />

        <Route
          path="/success"
          element={<OrderSuccess />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;