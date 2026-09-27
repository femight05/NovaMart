const CategoryCard = ({ category }) => {
  return (
    <div className="flex flex-col items-center justify-between py-4 rounded-xl gap-6 shadow-2xl shadow-black/60 ">
      <div className="bg-gray-200 h-48 ">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
      <h3 className="text-xl font-semibold italic">{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
