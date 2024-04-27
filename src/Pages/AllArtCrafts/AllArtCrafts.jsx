import { useLoaderData } from "react-router-dom";


const AllArtCrafts = () => {

    const allCrafts = useLoaderData();
    console.log(allCrafts)

    return (
        <div>
        </div>
    );
};

export default AllArtCrafts;