import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const craft = useLoaderData();
  const {
    image,
    item_name,
    subcategory_name,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
    user_name,
    user_email,
    short_description,
  } = craft;

  console.log(image);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 items-center mt-5 lg:mt-10 max-w-7xl mx-auto mb-10">
      <div className="w-96">
        <img className="flex-1 rounded-lg" src={image} alt="" />
      </div>

      <div className="flex-1">
        <h1 className="text-[#131313] text-2xl lg:text-4xl font-semibold lg:font-bold mt-2 lg:mt-0">
          {item_name}
        </h1>
        <p className="mt-1 lg:mt-3 text-[#131313CC] text-lg lg:text-xl font-medium border-b border-[#13131326] pb-2 lg:pb-3">
          By : {user_name} <span className="ml-10 lg:ml-20">Email : {user_email}</span>
        </p>

        <p className=" text-[#131313CC] text-lg lg:text-xl font-medium border-b border-[#13131326] pb-2 lg:pb-3 mt-2 lg:mt-3 ">
          Description : {short_description}
        </p>

        <p className="text-[#131313B2] mt-2 lg:mt-5">
          <span className=" font-bold text-[#131313]">Customization : </span>{customization}
        </p>

        <div className="mt-4 lg:mt-8 border-b border-[#13131326] pb-2 lg:pb-4">
          <p className="text-[#131313B2]">
            <span className=" font-bold text-[#131313]">Sub Category :</span> {subcategory_name}
          </p>
        </div>

        <div className="mt-2 lg:mt-5 flex gap-12">
          <div className="space-y-2">
            <p className="text-[#131313B2] ">Price :</p>
            <p className="text-[#131313B2] ">Stock :</p>
            <p className="text-[#131313B2] ">Rating :</p>
            <p className="text-[#131313B2] ">Processing Time :</p>
          </div>

          <div className="space-y-2">
            <p className="text-[#131313] font-semibold">{price}</p>
            <p className="text-[#131313] font-semibold">{stockStatus}</p>
            <p className="text-[#131313] font-semibold">{rating}</p>
            <p className="text-[#131313] font-semibold">{processing_time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
