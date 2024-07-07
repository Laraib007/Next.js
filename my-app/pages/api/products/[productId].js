import { getById } from "@/services/product";

export default function handler(req, res) {
    if(req.method === "GET"){
        const {productId} = req.query
       const product =  getById(productId)
     return   res.status(200).json(product);
    }
    else (res.status(404).send())
  }