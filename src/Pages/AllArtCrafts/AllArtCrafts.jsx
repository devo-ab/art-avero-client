import { Link, useLoaderData } from "react-router-dom";

const AllArtCrafts = () => {
  const allCrafts = useLoaderData();
  console.log(allCrafts);

  return (
    <div className="mt-10 mb-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Subcategory</th>
              <th>Price</th>
              <th>rating</th>
              <th>Stock Status</th>
              <th>Show Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allCrafts.map((craft, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{craft.item_name}</td>
                <td>{craft.subcategory_name}</td>
                <td>{craft.price}</td>
                <td>{craft.rating}</td>
                <td>{craft.stockStatus}</td>
                <td>
                  <Link to={`/view-details/${craft._id}`} className="btn btn-ghost bg-indigo-500 text-white">
                    View Details{/* X onClick={() => handleDelete(user._id)} */}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtCrafts;
