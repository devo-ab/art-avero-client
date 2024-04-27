import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {

    const craft = useLoaderData();
    console.log(craft)

    return (
        <div>
            <h1>View details page of {craft._id}</h1>
        </div>
    );
};

export default ViewDetails;