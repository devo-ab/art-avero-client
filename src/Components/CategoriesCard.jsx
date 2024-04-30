import { Link, useLoaderData } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { FcRating } from "react-icons/fc";

const CategoriesCard = () => {
  const categoriesData = useLoaderData();
  console.log("Categories Data", categoriesData);

  return (
    <div>
      <div>
        <div className="border border-indigo-500 p-3 rounded-lg flex">
          <img className="w-96 mx-auto" src={categoriesData.image} alt="" />
          <div className="mt-2  mx-auto">
            <h3 className="text-2xl font-semibold">{categoriesData.item_name}</h3>
            <h4 className="mt-1">Sub Category : {categoriesData.subcategory_name}</h4>
            <div className="flex gap-10">
              <p className=" font font-medium flex gap-2 items-center">
                <IoIosPricetags />
                Price : {categoriesData.price}
              </p>
              <p className=" font font-medium flex gap-2 items-centered ">
              <FcRating />
                Rating : {categoriesData.rating}
              </p>
            </div>
            
            <div className="flex justify-between mt-5">
              <Link to={`/subCategories/cateDetails/${categoriesData._id}`} className="btn btn-ghost bg-indigo-500 text-white">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
