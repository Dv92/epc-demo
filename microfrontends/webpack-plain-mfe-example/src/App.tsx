import React from 'react'

export function App() {
    const handleClick = () => {
      alert('hello!')
    }

    return (
      <div className='app'>
        <h1 className='app__title'>
          Webpack Plain Mfe
        </h1>
        <p className='app__description'>
          Boilerplate example for build MFE inside Entando
        </p>
        <button onClick={handleClick}>
          Say Hello
        </button>
      </div>
  )
}
