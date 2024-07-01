import Item from "../item/Item";

export default function List({}){
    const arr = ["A","E","I","O","U"];
   const newAr = arr.map(items => {
       return <Item text = {items} />
    })
    return (
        <>
        <ul>
            {newAr}
        </ul>
        </>
    )
}