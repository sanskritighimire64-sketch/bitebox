import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-orange-50">

      {/* Navbar */}
      <nav className="bg-orange-500 text-white px-8 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          🍴 Foodie
        </h1>

        <button
          onClick={() => navigate("/menu")}
          className="bg-white text-orange-500 px-5 py-2 rounded-lg font-semibold hover:bg-orange-100"
        >
          Browse Menu
        </button>

      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>

          <p className="text-orange-500 font-bold text-lg mb-3">
            DELICIOUS FOOD, DELIVERED 🍔
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Your cravings,
            <span className="text-orange-500"> our mission.</span>
          </h1>

          <p className="text-gray-600 text-lg mt-5">
            Discover delicious food, order your favorites,
            and enjoy every bite from the comfort of your home.
          </p>

          <button
            onClick={() => navigate("/menu")}
            className="mt-7 bg-orange-500 text-white px-7 py-3 rounded-xl font-bold text-lg hover:bg-orange-600"
          >
            Order Now 🍕
          </button>

        </div>

        {/* Food illustration */}
        <div className="flex justify-center">

          <div className="bg-white rounded-full shadow-xl w-72 h-72 md:w-96 md:h-96 flex items-center justify-center text-8xl">
            🍕
          </div>

        </div>

      </section>

      {/* Popular Section */}
      <section className="bg-white py-14">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-10">

            <h2 className="text-3xl font-bold">
              Why choose Foodie? ❤️
            </h2>

            <p className="text-gray-500 mt-2">
              Everything you need for a delicious meal.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-orange-50 rounded-2xl p-6 text-center">
              <div className="text-4xl">🚀</div>
              <h3 className="text-xl font-bold mt-3">
                Fast Delivery
              </h3>
              <p className="text-gray-600 mt-2">
                Get your food delivered quickly and fresh.
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 text-center">
              <div className="text-4xl">🍔</div>
              <h3 className="text-xl font-bold mt-3">
                Delicious Food
              </h3>
              <p className="text-gray-600 mt-2">
                Choose from a variety of tasty meals.
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 text-center">
              <div className="text-4xl">💰</div>
              <h3 className="text-xl font-bold mt-3">
                Affordable
              </h3>
              <p className="text-gray-600 mt-2">
                Great food at prices you'll love.
              </p>
            </div>

          </div>

        </div>

      </section>
      {/* Footer */}
<footer className="bg-gray-900 text-white mt-10">

  <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

    <div>
      <h2 className="text-2xl font-bold">
        🍴 Foodie
      </h2>

      <p className="text-gray-400 mt-3">
        Delicious food delivered right to your door.
      </p>
    </div>

    <div>
      <h3 className="font-bold text-lg">
        Quick Links
      </h3>

      <p className="text-gray-400 mt-3">
        Home
      </p>

      <p className="text-gray-400 mt-2">
        Menu
      </p>

      <p className="text-gray-400 mt-2">
        Contact
      </p>
    </div>

    <div>
      <h3 className="font-bold text-lg">
        Contact Us
      </h3>

      <p className="text-gray-400 mt-3">
        📞 9800000000
      </p>

      <p className="text-gray-400 mt-2">
        📧 hello@foodie.com
      </p>

      <p className="text-gray-400 mt-2">
        📍 Kathmandu, Nepal
      </p>
    </div>

  </div>

  <div className="border-t border-gray-700 text-center py-5 text-gray-400">
    © 2026 Foodie. All rights reserved.
  </div>

</footer>

    </div>
  );
}

export default Home;