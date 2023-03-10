import { Link } from "react-router-dom"

const Card = ({producto}) => {
  return (
    <Link to={`${producto.id}`}>
        <div key={producto.id} className="grid grid-cols-2 gap-y-4 gap-x-8 max-w-[25rem] md:grid-cols-2 md:gap-x-[1.25rem] md:max-w-2xl">
            <img src={producto.image} alt={producto.title}  className="w-full object-cover h-[200px] border-[.25rem] border-indigo-600 rounded-lg md:h-[175px] xl:h-[150px]"/>
            <div>
            <header className="flex justify-between border-b-[.5px] border-dotted border-indigo-600">
                <h4 className="font-bold">{producto.title}</h4>
                <h4 className="text-indigo-700 font-bold">${producto.price}</h4>
            </header>
            <p className="mb-0 pt-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo atque ab magni, aperiam id architecto.</p>
            </div>
        </div>
    </Link>

  )
}

export default Card