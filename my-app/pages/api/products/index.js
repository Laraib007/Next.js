import getAll, { save } from "@/services/product";


export default function handler(req, res) {
    if(req.method === "GET"){
       const product =  getAll()
     return   res.status(200).json(product);
    }else if(req.method === "POST"){
        const product =  getAll()
        const {name, project, projectDetail} = req.body
        save(name, project, projectDetail)
      return   res.status(201).json({});
     }
    else (res.status(404).send())
  }