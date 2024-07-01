import { useState } from "react";
import Button from "../button/Button";
import Item from "../item/Item";

export default function List({}){
    const [arr, setArr] = useState(["Labi","Lrb","Laraib"]);
    const newArr = arr.map(items => {
       return <Item text={items} />
       
    })
    const addHandler = ()=>{
        setArr([...arr, "New Value Add Krdi Gai Hai"])
    }
    return (
        <>
        <ul>
            {newArr}
            <Button click={addHandler} text={"Add Item"} />
        </ul>
        </>
    )
}