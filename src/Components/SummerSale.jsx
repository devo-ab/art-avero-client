import { useEffect, useState } from "react";

const SummerSale = () => {

    const [summerCraft, setSummerCraft] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/summerSale')
    .then(res => res.json())
    .then(data => setSummerCraft(data))
    },[])
    console.log(summerCraft)
    
    return (
        <div>
            
        </div>
    );
};

export default SummerSale;