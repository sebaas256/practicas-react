import './App.css'
import { TwitterUsuariosCard } from './TwitterUsuariosCard'

const users = [
    {
        userName: 'Gorillaz',
        name: 'Gorillaz-official',
        isfollowing: true
    },
    {
        userName: 'Iron Maiden',
        name: 'Iron Maiden-official',
        isfollowing: false
    },{
        userName: 'elonmusk',
        name: 'Elon Musk',
        isfollowing: true
    },{
        userName: 'The Beatles',
        name: 'The Beatles-official',
        isfollowing: false
    },
]

export function App () {
    return (
      <section className='App'>
        {
          users.map(({ userName, name, isFollowing }) => (
            <TwitterUsuariosCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterUsuariosCard>
          ))
        }
      </section>
    )
  }