import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import CraftCard from "../Components/CraftCard";
import SummerSale from "../Components/SummerSale";
import CustomerReview from "../Components/CustomerReview";
import SubCategories from "../Components/SubCategories";
import { useEffect } from "react";
// import CategoriesCard from "../Components/CategoriesCard";

const Home = () => {
  const crafts = useLoaderData();
  console.log(crafts);
  useEffect(() => {
    document.title = 'Art Avero | Home';
  } ,[]);
  return (
    <div className="mt-10 mb-10">
      <Banner></Banner>
      <div>
        <h1 className="text-5xl text-indigo-500 mt-10 text-center font-bold">Craft Items</h1>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {crafts.map((craft) => (
            <CraftCard key={craft._id} craft={craft}></CraftCard>
          ))}
        </div>
        <div>
          <h1 className="text-5xl text-indigo-500 mt-10 text-center font-bold">
            On Going Summer Sale Offer
          </h1>
          <SummerSale></SummerSale>
        </div>

        <div>
          <h1 className="text-5xl text-indigo-500 mt-10 text-center font-bold">Categories List</h1>
          <div className="mt-5 flex">
            <SubCategories></SubCategories>
            {/* <CategoriesCard></CategoriesCard> */}
          </div>
        </div>

        <div>
          <h1 className="text-5xl text-indigo-500 mt-10 text-center font-bold">
            Customers Reviews
          </h1>
          <CustomerReview></CustomerReview>
        </div>
      </div>
    </div>
  );
};

export default Home;
