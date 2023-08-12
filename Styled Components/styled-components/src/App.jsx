import UsersList from './components/UsersList'
import users from './db/users.json'

function App() {

  return (
    <div className="App">
      <UsersList users={users}/>
    </div>
  )
}

export default App
