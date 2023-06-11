import { useContext, useEffect, useState } from 'react'

import closeIcon from '../../assets/icon-close.svg'
import increaseIcon from '../../assets/icon-arrow-up.svg'
import decreaseIcon from '../../assets/icon-arrow-down.svg'
import selectedItem from '../../assets/Path 2.png'

import { modalContext } from '../../context/modal.context'
import { settingsContext } from '../../context/settingsSelec.context'

import * as S from './style'

export const kumbhSans = "'Kumbh Sans', sans-serif"
export const robotoSlab = "'Roboto Slab', serif"
export const spaceMono = "'Space Mono', monospace"

export const orange = '#F87070'
export const blue = '#70F3F8'
export const purple = '#D881F8'

const Modal = () => {
  const { modalIsOpen, setModalIsOpen } = useContext(modalContext)
  const { color, setColor, font, setFont } = useContext(settingsContext)

  const [selectedColor, setSelectedColor] = useState<string>(color)
  const [selectedFont, setSelectedFont] = useState<string>(font)

  const handleApply = () => {
    setColor(selectedColor)
    setFont(selectedFont)
    setModalIsOpen(false)
  }

  useEffect(() => {
    if (!modalIsOpen) {
      setSelectedColor(color)
      setSelectedFont(font)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalIsOpen])

  const handleSelectColor = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLDivElement
    if (target.id !== '') {
      setSelectedColor(target.id)
    }
  }

  const handleSelectFont = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLDivElement
    if (target.id !== '') {
      setSelectedFont(target.id)
    }
  }

  console.log(selectedFont)

  return (
    <S.ModalContainer modalisopen={modalIsOpen.toString()}>
      <S.ModalContent>
        <h3>Settings</h3>
        <S.CloseContainer onClick={() => setModalIsOpen(false)}>
          <img src={closeIcon} alt="Close Icon" />
        </S.CloseContainer>
        <h4>Time (Minutes)</h4>
        <S.TimerSettingsContainer>
          <S.TimerContent>
            <label htmlFor="pomodoro">pomodoro</label>
            <S.InputContainer>
              <input type="text" id="pomodoro" />
              <S.IconTimerContainer>
                <img src={increaseIcon} alt="Increase Icon" />
                <img src={decreaseIcon} alt="Decrease Icon" />
              </S.IconTimerContainer>
            </S.InputContainer>
          </S.TimerContent>
          <S.TimerContent>
            <label htmlFor="short-break">short break</label>
            <S.InputContainer>
              <input type="text" id="short-break" />
              <S.IconTimerContainer>
                <img src={increaseIcon} alt="Increase Icon" />
                <img src={decreaseIcon} alt="Decrease Icon" />
              </S.IconTimerContainer>
            </S.InputContainer>
          </S.TimerContent>
          <S.TimerContent>
            <label htmlFor="long-break">long break</label>
            <S.InputContainer>
              <input type="text" id="long-break" />
              <S.IconTimerContainer>
                <img src={increaseIcon} alt="Increase Icon" />
                <img src={decreaseIcon} alt="Decrease Icon" />
              </S.IconTimerContainer>
            </S.InputContainer>
          </S.TimerContent>
        </S.TimerSettingsContainer>
        <S.SettingsContainer border="border">
          <span>Font</span>
          <S.OptionContainer>
            <S.FontOption
              onClick={handleSelectFont}
              id={kumbhSans}
              fontStyle={kumbhSans}
              selectedfont={(selectedFont === kumbhSans).toString()}
            >
              Aa
            </S.FontOption>
            <S.FontOption
              onClick={handleSelectFont}
              id={robotoSlab}
              fontStyle={robotoSlab}
              selectedfont={(selectedFont === robotoSlab).toString()}
            >
              Aa
            </S.FontOption>
            <S.FontOption
              onClick={handleSelectFont}
              id={spaceMono}
              fontStyle={spaceMono}
              selectedfont={(selectedFont === spaceMono).toString()}
            >
              Aa
            </S.FontOption>
          </S.OptionContainer>
        </S.SettingsContainer>
        <S.SettingsContainer>
          <span>Color</span>
          <S.OptionContainer>
            <S.ColorOption
              onClick={handleSelectColor}
              id={orange}
              color={orange}
              showimage={(selectedColor === orange).toString()}
            >
              <img src={selectedItem} alt="selected Icon" />
            </S.ColorOption>
            <S.ColorOption
              onClick={handleSelectColor}
              id={blue}
              color={blue}
              showimage={(selectedColor === blue).toString()}
            >
              <img src={selectedItem} alt="selected Icon" />
            </S.ColorOption>
            <S.ColorOption
              onClick={handleSelectColor}
              id={purple}
              color={purple}
              showimage={(selectedColor === purple).toString()}
            >
              <img src={selectedItem} alt="selected Icon" />
            </S.ColorOption>
          </S.OptionContainer>
        </S.SettingsContainer>
        <S.ApplyButton onClick={handleApply} colorbutton={color}>
          Apply
        </S.ApplyButton>
      </S.ModalContent>
      <S.Overlay onClick={() => setModalIsOpen(false)} />
    </S.ModalContainer>
  )
}

export default Modal
