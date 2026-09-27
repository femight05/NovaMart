import category from "../data/category.json";
import CategoryCard from "./CategoryCard";
import Button from "./Button";

const ShopByCategory = () => {
  return (
    <div className="px-4 flex flex-col items-center py-8 md:px-6 md:py-6 lg:px-16 lg:py-6 space-y-4 bg-gray-50/45">
      <h1 className="text-center tracking-wider text-2xl md:text-3xl font-semibold">
        SHOP BY CATEGORY
      </h1>
      <p className="text-center tracking-wider text-xl md:text-2xl italic">
        Find What You Are Looking For
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-24">
        {category.map((category) => (
          <CategoryCard
            key={category.id ?? category.name}
            category={category}
          />
        ))}
      </div>
      <Button text={"View All Products"} />
    </div>
  );
};

export default ShopByCategory;
