import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import useCategories from "../../hooks/useCategories";
import HomeCategoriesSkeleton from "../skeleton/HomeCategoriesSkeleton";

export default function HomeCategories() {
  const { categories, isLoading, isError, error } = useCategories();

  if (isLoading) {
    return <HomeCategoriesSkeleton />;
  }

  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <Link
              to={`/categories`}
              className="text-primary-600 hover:text-primary-700 transition-colors duration-200 flex gap-2 items-center"
            >
              <span>View All Categories</span>
              <FontAwesomeIcon icon={faRightLong} />
            </Link>
          </div>
          <div className="grid md:gird-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 py-8">
            {categories.map((category) => (
              <Link
                to={`/categories/category/${category._id}`}
                key={category._id}
                className="card flex flex-col gap-2 items-center p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 bg-white cursor-pointer"
              >
                <img className="size-16 rounded-full" src={category.image} alt="" />
                <h3>{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
