import React from 'react'
import Button from './Button'
import Card from './Card'

const ItemListContainer = ({productos}) => {
  return (
    <div>
      <div className="bg-grey-100 text-gray-600 text-sm">
        <section className="p-20">
          <div className="text-center mb-8">
              <h2 className="capitalize text-4xl font-bold tracking-wider mb-2">our products</h2>
              <div className="w-[10rem] h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="mb-[4rem] flex justify-center">
              <Button nombre="all"/>
              <Button nombre="men's clothing"/>
              <Button nombre="jewelery"/>
              <Button nombre="electronics"/>
              <Button nombre="women's clothing"/>
          </div>
          <div className="w-[90vw] my-0 mx-auto max-w-[1170px] grid gap-y-12 gap-x-8 justify-center xl:w-[95vw] xl:grid-cols-2">
              {productos.map(producto => (
                  <Card key={producto.id} producto={producto}/>
              ))}
          </div>

        </section>
      </div>
    </div>
  )
}

export default ItemListContainer