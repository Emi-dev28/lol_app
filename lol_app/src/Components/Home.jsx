import React from 'react'

const Home = (addCart) => {
  const data = [ 
    {id : '1', title: 'pelicula1'},
    {id: '2', title: 'pelicula2'},
    {id: '3', title: 'pelicula3'},
    {id: '4', title: 'pelicula4'},
    {id: '5', title: 'pelicula5'},
    {id: '6', title: 'pelicula6'},
  ]
  return (
    <div>
      {data.map((item, key) => {
        return (
          <div key={key}>
            <h1>{item.title}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Home