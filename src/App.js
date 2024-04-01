import './App.css'
import Header from './components/Header/Header'
import { Outlet, Link } from 'react-router-dom'

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <div>Test</div>
      <div>
        <button>
          <Link to={'/users'}>Go to user test</Link>
        </button>
        <button>
          <Link to={'/admin'}>Go to admin test</Link>{' '}
        </button>
      </div>
    </div>
  )
}

export default App
