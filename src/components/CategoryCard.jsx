const CategoryCard = ({ category }) => {
  return (
    <div className="shop-category-card group flex flex-col items-center cursor-pointer justify-between py-4 rounded-xl gap-6 shadow-2xl shadow-black/60">
      <div className="bg-gray-200 h-48 overflow-hidden rounded-xl">
        <img
          src={category.image}
          alt={category.name}
          className="shop-category-image h-full w-full object-cover rounded-xl"
        />
      </div>
      <h3 className="text-xl font-semibold italic">{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
