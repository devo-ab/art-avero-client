import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {

    const crafts = useLoaderData();
    const { _id, image, item_name, subcategory_name, price, rating, customization, processing_time, stockStatus, short_description } = crafts;

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
    const image = form.image.value;
    const item_name = form.itemName.value;
    const subcategory_name = form.sub.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing.value;
    const stockStatus = form.stockStatus.value;
    const short_description = form.description.value;

    const updateArt = {image, item_name, subcategory_name, price, rating, customization, processing_time, stockStatus, short_description};

    fetch(`https://art-avero-server.vercel.app/crafts/${_id}`, {
          method:"PUT",
          headers: {
            'content-type': 'application/json'
          },
          body:JSON.stringify(updateArt)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.modifiedCount){
            Swal.fire({
              title: 'Success!',
              text: 'Craft Update Successfully',
              icon: 'success',
              confirmButtonText: 'OK'
            })
          }
        });

    };
    useEffect(() => {
      document.title = 'Art Avero | Update';
    } ,[]);
  return (
    <div>
      <div>
        <section className="max-w-5xl mx-auto mt-10 mb-10 rounded-xl p-6 text-base-content border border-indigo-500">
          <form onSubmit={handleUpdate} className=" flex flex-col mx-auto space-y-12">
            <h1 className="text-center text-3xl font-bold">Update Art & Craft</h1>
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
              <div className="grid grid-cols-6 gap-4 col-span-full">
                <div className="col-span-full md:col-span-3">
                  <label htmlFor="image">Image</label>
                  <input
                    id="image"
                    type="text"
                    name="image"
                    defaultValue={image}
                    placeholder="Enter your imageURL"
                    className="w-full py-2 px-4 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="itemName">Item Name</label>
                  <input
                    id="itemName"
                    type="text"
                    name="itemName"
                    defaultValue={item_name}
                    placeholder="Enter your art and craft name"
                    className="w-full py-2 px-4 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                  />
                </div>

                <div className="col-span-full md:col-span-3">
                  <label htmlFor="sub">Sub Category Name</label>
                  <input
                    id="sub"
                    type="text"
                    name="sub"
                    defaultValue={subcategory_name}
                    placeholder="Enter your sub-category name"
                    className="w-full py-2 px-4 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                  />
                </div>

                <div className="col-span-full md:col-span-3">
                  <label htmlFor="price">Price</label>
                  <input
                    id="price"
                    type="number"
                    name="price"
                    defaultValue={price}
                    placeholder="Enter your art and craft price"
                    className="w-full py-2 px-4 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                  />
                </div>

                <div className="col-span-full md:col-span-3">
                  <label htmlFor="rating">Rating</label>
                  <input
                    id="rating"
                    type="text"
                    name="rating"
                    defaultValue={rating}
                    placeholder="Enter your art and craft rating"
                    className="w-full py-2 px-4 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                  />
                </div>

                <div className="col-span-full md:col-span-3">
                  <label htmlFor="customization">Customization</label>
                  <input
                    id="customization"
                    type="text"
                    name="customization"
                    defaultValue={customization}
                    placeholder="Example : yes or no"
                    className="w-full py-2 px-4 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                  />
                </div>

                <div className="col-span-full md:col-span-3">
                  <label htmlFor="processing">Processing Time</label>
                  <input
                    id="processing"
                    type="text"
                    name="processing"
                    defaultValue={processing_time}
                    placeholder="Enter art and craft processing time"
                    className="w-full py-2 px-4 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                  />
                </div>

                <div className="col-span-full md:col-span-3">
                  <label htmlFor=" stockStatus"> Stock Status</label>
                  <input
                    id=" stockStatus"
                    type="text"
                    name="stockStatus"
                    defaultValue={stockStatus}
                    placeholder="Example : In stock, Made to Order"
                    className="w-full py-2 px-4 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                  />
                </div>

                <div className="col-span-full">
                  <label htmlFor="description">Short Description</label>
                  <input
                    id="description"
                    type="text"
                    name="description"
                    defaultValue={short_description}
                    placeholder="Add description about your art and craft"
                    className="w-full py-2 px-4 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                  />
                </div>
              </div>
            </fieldset>
            <button
              type="submit"
              className="btn btn-ghost text-lg font-medium text-white bg-indigo-500 hover:text-black"
            >
              Update Craft
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UpdatePage;
