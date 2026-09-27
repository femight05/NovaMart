import category from "../data/category.json";
import CategoryCard from "./CategoryCard";

const ShopByCategory = () => {
  return (
    <div>
      <h1 className="text-center tracking-wider">SHOP BY CATEGORY</h1>
      <p className="text-center tracking-wider">
        Find What You Are Looking For
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
