import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM = 'https://catfact.ninja/fact'

function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threefirstword = fact.split(' ', 3).join(' ')
        console.log(threefirstword)

        fetch(`https://cataas.com/cat/says/${threefirstword}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setImageUrl(`https://cataas.com${url}`) 
          })
      })
  }, [])

  return (
    <main>
      <h1>App de gatos feos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}

export default App
