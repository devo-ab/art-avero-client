import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import CraftCard from "../Components/CraftCard";

const Home = () => {
  const crafts = useLoaderData();
  console.log(crafts);

  return (
    <div className="mt-10 mb-10">
      <Banner></Banner>
      <div>
        <h1 className="text-5xl text-indigo-500 mt-10 text-center font-bold">Craft Items</h1>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mt-10">
          {crafts.map((craft) => (
            <CraftCard key={craft._id} craft={craft}></CraftCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
