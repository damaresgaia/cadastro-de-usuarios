import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {
  const users = [
    {
      id: "245sdsd",
      name: 'Rodolfo',
      age: 33,
      email: 'rod@gmail.com',
    },
    {
      id: "278sdsd",
      name: 'Ted',
      age: 23,
      email: 'ted@gmail.com',
    },
    {
      id: "24578sd",
      name: 'Cris',
      age: 31,
      email: 'cris@gmail.com',
    }
  ]

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name='nome' type='text' />
        <input placeholder="Idade" name='idade' type='number' />
        <input placeholder="E-mail" name='email' type="email" />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
