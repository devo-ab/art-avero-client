import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from 'sweetalert2'

const AddCrafts = () => {
  const { user } = useContext(AuthContext);

  const handleAdd = (e) => {
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
    const user_name = form.name.value;
    const user_email = form.email.value;
    const short_description = form.description.value;
    // console.log(image, item_name, subcategory_name, price, rating, customization, processing_time, stockStatus, user_name, user_email, short_description);

    const newArt = {image, item_name, subcategory_name, price, rating, customization, processing_time, stockStatus, user_name, user_email, short_description};

    console.log(newArt)

    fetch('http://art-avero-server.vercel.app/crafts',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(newArt)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Art And Craft Added Successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }
      form.reset();
    })
  };

  return (
    <div>
      <div>
        <section className="max-w-5xl mx-auto mt-10 mb-10 rounded-xl p-6 text-base-content border border-indigo-500">
          <form onSubmit={handleAdd} className=" flex flex-col mx-auto space-y-12">
            <h1 className="text-center text-3xl font-bold">Add Art & Craft</h1>
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
              <div className="grid grid-cols-6 gap-4 col-span-full">
                <div className="col-span-full md:col-span-3">
                  <label htmlFor="image">Image</label>
                  <input
                    id="image"
                    type="text"
                    name="image"
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
                    placeholder="Example : In stock, Made to Order"
                    className="w-full py-2 px-4 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                  />
                </div>

                <div className="col-span-full md:col-span-3">
                  <label htmlFor="name">User Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    defaultValue={user.displayName}
                    placeholder="Enter your name"
                    className="w-full py-2 px-4 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                  />
                </div>

                <div className="col-span-full md:col-span-3">
                  <label htmlFor="email">User Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    defaultValue={user.email}
                    placeholder="Enter your email"
                    className="w-full py-2 px-4 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                  />
                </div>

                <div className="col-span-full">
                  <label htmlFor="description">Short Description</label>
                  <input
                    id="description"
                    type="text"
                    name="description"
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
              Add Craft
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddCrafts;
