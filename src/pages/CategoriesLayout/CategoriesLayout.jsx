import HomeCategories from "../../components/HomeCategories/HomeCategories";
import { Outlet } from "react-router";

export default function CategoriesLayout() {
  return (
    <>
      <HomeCategories />
      <section className="py-10">
        <Outlet></Outlet>
      </section>
    </>
  );
}
