import { useContext } from 'react'

import logo from '../../assets/logo.svg'

import * as S from './style'
import Select from '../Select'
import { selectContext } from '../../context/select.contecxt'

const Head = () => {
  const { selectedSpan, setSelectedSpan } = useContext(selectContext)
  const click = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement
    const firstChild = target.firstChild

    if (firstChild instanceof Text) {
      setSelectedSpan(firstChild.data)
    }
  }

  return (
    <S.HeadCOntainer>
      <img src={logo} alt="logo pomodoro" />
      <S.SelectContainer>
        <Select selectedSpan={selectedSpan} click={click}>
          pomodoro
        </Select>
        <Select selectedSpan={selectedSpan} click={click}>
          short break
        </Select>
        <Select selectedSpan={selectedSpan} click={click}>
          long break
        </Select>
      </S.SelectContainer>
    </S.HeadCOntainer>
  )
}

export default Head
