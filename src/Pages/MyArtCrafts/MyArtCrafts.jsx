import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { IoIosPricetags } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtCrafts = () => {
  const { user } = useContext(AuthContext);
  const [crafts, setCrafts] = useState([]);

  useEffect(() => {
    fetch(`https://art-avero-server.vercel.app/my-art-craft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
      });
  }, [user]);
  console.log(crafts);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete confirm");
        fetch(`https://art-avero-server.vercel.app/craft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = crafts.filter((craft) => craft._id !== _id);
              setCrafts(remaining);
            }
          });
      }
    });
  };

  
  useEffect(() => {
    document.title = 'Art Avero | My Art & Crafts';
  } ,[]);
  return (
    <div className="mt-10 mb-10">
      <div className="text-center">
        <select className="select bg-indigo-500 text-white">
          <option className="text-white" disabled selected>
            Customization
          </option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
        {crafts.map((craft) => (
          <div key={craft._id}>
            <div className="border border-indigo-500 flex gap-4 p-3 rounded-md">
              <img className="w-44 rounded" src={craft.image} alt="" />
              <div>
                <h1 className="font-bold">{craft.item_name}</h1>
                <div className="flex gap-5 mt-1">
                  <p className="flex items-center">
                    <IoIosPricetags />
                    Price : ${craft.price}
                  </p>
                  <p className="flex items-center">
                    <MdReviews />
                    Rating : {craft.rating}
                  </p>
                </div>

                <div className="flex gap-5 mt-1">
                  <p className="flex items-center">Customization : {craft.customization}</p>
                  <p className="flex items-center">Stock : {craft.stockStatus}</p>
                </div>
                <div className="flex gap-10">
                  <Link to={`/update-crafts/${craft._id}`}>
                    <button className="btn btn-ghost bg-indigo-500 text-white mt-1">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(craft._id)}
                    className="btn btn-ghost bg-indigo-500 text-white mt-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArtCrafts;
