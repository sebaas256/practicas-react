import { useEffect, useState } from "react"


function App() {
  const [enabled, setEnabled] = useState(false)
  const [position , setPosition] = useState({ x:0, y:0 })

//pointer move
useEffect(()=>{
  console.log('efecto', {enabled})

  const handleMove = (event) =>{
    const {clientX, clientY} = event
    console.log('handleMove',clientX, clientY)
    setPosition({ x:clientX, y:clientY})
  }
  if (enabled){
    window.addEventListener('pointermove', handleMove)
  }

//se ejecuta cuando cambian las dependencias, 
//  antes de ejecutar el fecto nuevo

  return () => {
    window.removeEventListener('pointermove', handleMove)
  }
  }, [enabled])

  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente

//Cambiar body className
useEffect(() =>{
  document.body.classList.toggle('no-cursor', enabled)

  return () =>{
    document.body.classList.remove('no-cursor') 
  }
}, [enabled])

  return (
    <main>
     <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
    <button onClick={() => setEnabled(!enabled)}>
      {enabled ? 'Desactivar' : 'Activar'}seguir puntero
      </button>
    </main>
  )
}

export default App


