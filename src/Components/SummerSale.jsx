import { useEffect, useState } from "react";
import { IoIosPricetags } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { Link } from "react-router-dom";

const SummerSale = () => {

    const [summerCraft, setSummerCraft] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/summerSale')
    .then(res => res.json())
    .then(data => setSummerCraft(data))
    },[])
    console.log(summerCraft)
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center mt-10">
            {
                summerCraft.map(suCraft => (<div key={suCraft._id}>
                    <div className="border border-indigo-500 p-3 rounded-lg">
                      <img className="w-96 mx-auto" src={suCraft.image} alt="" />
                      <div className="mt-2 w-96 mx-auto">
                        <h3 className="text-2xl font-semibold">{suCraft.item_name}</h3>
                        <h4 className="mt-1">Sub Category : {suCraft.subcategory_name}</h4>
                        <div className="flex gap-10">
                          <p  className=" font font-medium flex gap-2 items-center"><IoIosPricetags />Price : {suCraft.price}</p>
                          <p  className=" font font-medium flex gap-2 items-center text-red-600"><MdReviews />Offer Price : {suCraft.summerPrice}</p>
                        </div>
                        <div className="flex gap-10">
                          <p>Stock : {suCraft.stockStatus}</p>
                          <p>Customization : {suCraft.customization}</p>
                        </div>
                        <div className="flex justify-between mt-5">
                          <button className="btn btn-ghost bg-indigo-500 text-white">Buy</button>
                        </div>
                      </div>
                    </div>
                  </div>))
            }
        </div>
    );
};

export default SummerSale;