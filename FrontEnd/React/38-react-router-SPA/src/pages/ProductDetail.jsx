import { useParams } from "react-router-dom"
export default function ProductDetail(){
    const params=useParams();
    return <h1>Product {params.productId}</h1>
}