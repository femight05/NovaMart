import category from "../data/category.json";
import CategoryCard from "./CategoryCard";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const ShopByCategory = () => {
  return (
    <div className="shop-category-section px-4 flex flex-col items-center py-8 md:px-6 md:py-6 lg:px-16 lg:py-6 space-y-4 bg-gray-50/45">
      <h1 className="shop-category-heading text-center tracking-wider text-xl md:text-3xl font-semibold">
        SHOP BY CATEGORY
      </h1>
      <p className="shop-category-subheading text-center tracking-wider md:text-2xl italic">
        Find What You Are Looking For
      </p>
      <div className="shop-category-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16 md:gap-24">
        {category.map((category) => (
          <CategoryCard
            key={category.id ?? category.name}
            category={category}
          />
        ))}
      </div>
      <div className="shop-category-cta">
        <Button
          text={"View All Products"}
          icon={<ArrowRight className="w-6 h-5" />}
        />
      </div>
    </div>
  );
};

export default ShopByCategory;
