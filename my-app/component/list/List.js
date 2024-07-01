import Button from "../button/Button";
import Item from "../item/Item";
import { useState } from "react";
export default function List({}){
    const [arr, setArr] = useState(["A","E","I","O","U"]);
   const newAr = arr.map(items  =>  { 
       return <Item key={items} text = {items} />
    })
    const addHandler =()=>{
        setArr([...arr, "new Item"])
    }
    return (
        <>
        <ul>
            {newAr}
            <Button click={addHandler} text="Add" />
        </ul>
        </>
    )
}