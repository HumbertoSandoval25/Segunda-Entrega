import { useParams } from "react-router-dom"
import Button from "./Button";

const ItemDetailContainer = ({productos}) => {
    const {id} = useParams();
    const producto = productos.find((producto => producto.id == id))
    console.log(producto)
  return (
    <div className="m-20 grid grid-cols-2 gap-y-4 gap-x-8 max-w-[25rem] md:grid-cols-2 md:gap-x-[1.25rem] md:max-w-2xl">
        <img src={producto.image} alt={producto.title} className="w-full object-cover h-auto border-[.25rem] border-indigo-600 rounded-lg"/>
        <div>
            <header className="flex justify-between border-b-[.5px] border-dotted border-indigo-600">
                <h4 className="font-bold">{producto.title}</h4>
                <h4 className="text-indigo-700 font-bold">${producto.price}</h4>
            </header>
            <p className="mb-0 pt-4">{producto.description}</p>
            <p className="mt-[1rem]">Raiting: ⭐⭐⭐⭐⭐</p>
            
            <div className="mt-5">
                <Button nombre="ADD TO CART"/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetailContainer