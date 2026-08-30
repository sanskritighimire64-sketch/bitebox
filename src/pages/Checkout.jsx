function Checkout({
  cart,
  totalPrice,
  increaseQuantity,
  decreaseQuantity,
  placeOrder,
}) {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <div className="bg-orange-500 text-white px-8 py-4">
        <h1 className="text-2xl font-bold">
          🍴 Foodie
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold mb-6">
          🛒 Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Delivery Details */}
          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-xl font-bold mb-5">
              📦 Delivery Details
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="text"
                placeholder="Delivery Address"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <select className="w-full px-4 py-3 border rounded-lg">
                <option>Cash on Delivery</option>
                <option>Online Payment</option>
              </select>

            </div>

          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-xl font-bold mb-5">
              🧾 Order Summary
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-500">
                Your cart is empty.
              </p>
            ) : (
              <>
                {cart.map((food) => (
                  <div
                    key={food.id}
                    className="border-b py-4"
                  >

                    <div className="flex justify-between">
                      <span className="font-semibold">
                        {food.name}
                      </span>

                      <span>
                        Rs. {food.price * food.quantity}
                      </span>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-3">

                      <button
                        onClick={() => decreaseQuantity(food.id)}
                        className="bg-gray-200 px-3 py-1 rounded-lg font-bold"
                      >
                        −
                      </button>

                      <span className="font-bold">
                        {food.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(food.id)}
                        className="bg-orange-500 text-white px-3 py-1 rounded-lg font-bold"
                      >
                        +
                      </button>

                    </div>

                  </div>
                ))}

                {/* Total */}
                <div className="flex justify-between mt-6 text-xl font-bold">

                  <span>
                    Total
                  </span>

                  <span className="text-orange-600">
                    Rs. {totalPrice}
                  </span>

                </div>

                <button
                  onClick={placeOrder}
                  className="w-full mt-6 bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600"
                >
                  Confirm Order 🍽️
                </button>

              </>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;