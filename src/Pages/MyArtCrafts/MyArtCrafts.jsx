import { useLoaderData } from "react-router-dom";

const MyArtCrafts = () => {

    const myArt = useLoaderData();
    console.log(myArt)

    return (
        <div>
            <h1>My Art And Crafts</h1>
        </div>
    );
};

export default MyArtCrafts;