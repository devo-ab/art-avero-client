import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import CategoriesCard from "./CategoriesCard";

const SubCategories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://art-avero-server.vercel.app/subCategories')
        .then(res => res.json())
        .then(data => {setCategories(data)})
    },[]);


    

    return (
        <div className=" w-fit mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {
                categories.map(cate => (<div className="p-10 rounded-md border border-indigo-500 text-lg font-semibold" key={cate._id}><Link to={`/subCategories/${cate._id}`} >{cate.subcategory_name}</Link></div>))
               }
            </div>
        </div>
    );
};

export default SubCategories;