import getAll from "@/services/product";


export default function handler(req, res) {
    if(req.method === "GET"){
       const product =  getAll()
     return   res.status(200).json(product);
    }
    else (res.status(404).send())
  }