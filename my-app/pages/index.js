import Cards from "@/component/cards/Cards";
import Link from "next/link";

import {useRouter} from "next/router"

export default function Home (){

   return (
    <>
    
   <div>
    <h1>Home Page</h1>
 <div><h1> <Link href="/costumers">Goto Customer Page</Link></h1></div>
   </div>
    </>
    
  )
}
         
       

