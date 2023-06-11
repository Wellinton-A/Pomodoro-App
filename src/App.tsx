import { useContext } from 'react'

import Head from './components/Head'
import Modal from './components/Modal'
import Timer from './components/Timer'
import GlobalStyle from './style/global'
import { settingsContext } from './context/settingsSelec.context'

const App = () => {
  const { font } = useContext(settingsContext)

  return (
    <>
      <GlobalStyle font={font} />
      <div className="container">
        <Head />
        <Timer />
        <Modal />
      </div>
    </>
  )
}

export default App
