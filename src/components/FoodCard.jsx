function FoodCard({ food, addToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      <img
        src={food.image}
        alt={food.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">

        <h2 className="text-xl font-bold">
          {food.name}
        </h2>

        <p className="text-gray-500 mt-1">
          {food.description}
        </p>

        <div className="flex justify-between items-center mt-4">

          <span className="text-lg font-bold text-orange-600">
            Rs. {food.price}
          </span>

          <button
            onClick={() => addToCart(food)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
          >
            Add to Cart 🛒
          </button>

        </div>

      </div>

    </div>
  );
}

export default FoodCard;