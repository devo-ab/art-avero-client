import PropTypes from "prop-types";
import { IoIosPricetags } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { Link } from "react-router-dom";

const CraftCard = ({ craft }) => {
  console.log(craft);

  const { image, item_name, price, rating, subcategory_name, stockStatus, customization } = craft;

  return (
    <div>
      <div className="border border-indigo-500 p-3 rounded-lg">
        <img className="w-96 mx-auto" src={image} alt="" />
        <div className="mt-2 w-96 mx-auto">
          <h3 className="text-2xl font-semibold">{item_name}</h3>
          <h4 className="mt-1">Sub Category : {subcategory_name}</h4>
          <div className="flex gap-10">
            <p  className=" font font-medium flex gap-2 items-center"><IoIosPricetags />Price : ${price}</p>
            <p  className=" font font-medium flex gap-2 items-center"><MdReviews />Rating : {rating}</p>
          </div>
          <div className="flex gap-10">
            <p>Stock : {stockStatus}</p>
            <p>Customization : {customization}</p>
          </div>
          <div className="flex justify-between mt-5">
            <button className="btn btn-ghost bg-indigo-500 text-white">Place Order</button>
          <Link to={`/view-details/${craft._id}`}><button className="btn btn-ghost bg-indigo-500 text-white">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CraftCard.propTypes = {
  craft: PropTypes.object.isRequired,
};

export default CraftCard;
