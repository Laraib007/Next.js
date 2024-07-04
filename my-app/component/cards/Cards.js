
import React, { useEffect, useState } from 'react';
import Head  from 'next/head';
import Image from 'next/image'

export default function Cards ({labi}){
  const [items, setItems] = useState([])
  const [visible, setVisible] = useState(4)

  const ShowMoreItems=()=>{
    setVisible((preVal) => preVal + 4)
  }

  useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res)=>  res.json()) 
    .then((data)=>  setItems(data))
  }, [])
   return (
    <>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
    </Head>
            <div  className=" position-relative row labikhan">
              {items.slice(0, visible).map((labiP) => {
  return(<div className="card labi2 my-2 p-2 m-4 mx-2" style={{width: "18rem;"}}>
    <img src={labiP.url} width={200} height={200} class="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{labiP.id}</h5>
      <p className="card-text">{labiP.title}</p>
      <a href="#" className="btn btn-primary">Buy Now!</a>
    </div>
  </div>
    
  )
  
  })}
          <button onClick={ShowMoreItems}>Load More</button>    
            </div>
            </>
          );
        }
       

