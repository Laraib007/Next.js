import {Db} from "@/db/Db";
import Link from "next/link";
import {useRouter} from "next/router"
export default function (){
    const router = useRouter()
    const {projects} = router.query;
    
    return (
        <>
       <div>
        <h1>Project Page</h1>
        { Db.map((userDet) => {
           
           let usePro = userDet.project
       let last=  Db.filter((x)=> x.id )
       if(usePro == projects) {
           console.log("working")
           return <h1> {userDet.projectDetail}</h1>
       }
   console.log(projects)
          
     
    })}
       </div>
        </>
        
      )
 }