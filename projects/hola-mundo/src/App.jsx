import './App.css'
import { TwitterUsuariosCard } from './TwitterUsuariosCard'

export function App () {
    return(
        <section className='App'>
        <TwitterUsuariosCard userName="Gorillaz">
        Gorillaz-official 
        </TwitterUsuariosCard>

        <TwitterUsuariosCard isfollowing userName="Iron Maiden">
        Iron Maiden-official 
        </TwitterUsuariosCard>

        <TwitterUsuariosCard userName="elonmusk">
        Elon Musk 
        </TwitterUsuariosCard>

        <TwitterUsuariosCard userName="The Beatles">
        The Beatles-official 
        </TwitterUsuariosCard>
        </section>
    )
}