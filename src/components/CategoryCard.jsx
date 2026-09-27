const CategoryCard = ({ category }) => {
  return (
    <div className="flex flex-col">
      <img src={category.image} alt={category.name} />
      <h3>{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
