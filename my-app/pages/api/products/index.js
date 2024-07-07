import getAll from "@/services/product";


export default function handler(req, res) {
    if(req.method === "GET"){
       const product =  getAll()
     return   res.status(200).json(product);
    }else if(req.method === "POST"){
        const product =  getAll()
      return   res.status(200).json({});
     }
    else (res.status(404).send())
  }