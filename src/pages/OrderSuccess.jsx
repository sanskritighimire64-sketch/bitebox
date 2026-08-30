function OrderSuccess() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md">

        <div className="text-6xl mb-4">
          🎉
        </div>

        <h1 className="text-3xl font-bold">
          Order Confirmed!
        </h1>

        <p className="text-gray-600 mt-3">
          Your delicious food is being prepared. 🍔🍕
        </p>

        <p className="text-orange-500 font-semibold mt-4">
          Thank you for ordering from Foodie!
        </p>

      </div>

    </div>
  );
}

export default OrderSuccess;