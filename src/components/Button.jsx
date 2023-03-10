const Button = ({nombre}) => {
    
  return (
    <div>
        <button className="bg-indigo-200 text-base capitalize my-0 mx-2 tracking-wide rounded-lg py-2 px-3 text-indigo-400 cursor-pointer transition-all hover:bg-indigo-600 hover:text-white" type="button">{nombre}</button>
    </div>
  )
}

export default Button