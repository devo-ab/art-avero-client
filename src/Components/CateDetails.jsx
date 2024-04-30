import { useLoaderData } from "react-router-dom";


const CateDetails = () => {

    const cate = useLoaderData();

    return (
        <div className="flex flex-col lg:flex-row lg:gap-8 items-center mt-5 lg:mt-10 max-w-7xl mx-auto mb-10">
      <div className="w-96">
        <img className="flex-1 rounded-lg" src={cate.image} alt="" />
      </div>

      <div className="flex-1">
        <h1 className="text-[#131313] text-2xl lg:text-4xl font-semibold lg:font-bold mt-2 lg:mt-0">
          {cate.item_name}
        </h1>
        

        <p className=" text-[#131313CC] text-lg lg:text-xl font-medium border-b border-[#13131326] pb-2 lg:pb-3 mt-2 lg:mt-3 ">
          Description : {cate.short_description}
        </p>

        

        <div className="mt-4 lg:mt-8 border-b border-[#13131326] pb-2 lg:pb-4">
          <p className="text-[#131313B2]">
            <span className=" font-bold text-[#131313]">Sub Category :</span> {cate.subcategory_name}
          </p>
        </div>

        <div className="mt-2 lg:mt-5 flex gap-12">
          <div className="space-y-2">
            <p className="text-[#131313B2] ">Price :</p>
            <p className="text-[#131313B2] ">Rating :</p>
            <p className="text-[#131313B2] ">Processing Time :</p>
          </div>

          <div className="space-y-2">
            <p className="text-[#131313] font-semibold">{cate.price}</p>
            <p className="text-[#131313] font-semibold">{cate.rating}</p>
            <p className="text-[#131313] font-semibold">{cate.processing_time}</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CateDetails;