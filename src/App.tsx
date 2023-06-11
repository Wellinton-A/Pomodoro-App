import Head from './components/Head'
import Modal from './components/Modal'
import Timer from './components/Timer'

import './style/global.css'

const App = () => {
  return (
    <div className="container">
      <Head />
      <Timer />
      <Modal />
    </div>
  )
}

export default App
