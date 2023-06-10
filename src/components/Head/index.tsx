import { useState } from 'react'

import logo from '../../assets/logo.svg'

import * as S from './style'
import Select from '../Select'

const Head = () => {
  const [selectedSpan, setSelected] = useState<string>('pomodoro')

  const click = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement
    const firstChild = target.firstChild

    if (firstChild instanceof Text) {
      setSelected(firstChild.data)
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
