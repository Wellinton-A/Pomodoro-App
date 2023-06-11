import { useContext } from 'react'

import closeIcon from '../../assets/icon-close.svg'
import increaseIcon from '../../assets/icon-arrow-up.svg'
import decreaseIcon from '../../assets/icon-arrow-down.svg'

import * as S from './style'
import { modalContext } from '../../context/modal.context'

export const kumbhSans = "'Kumbh Sans', sans-serif"
export const robotoSlab = "'Roboto Slab', serif"
export const spaceMono = "'Space Mono', monospace"

export const orange = '#F87070'
export const blue = '#70F3F8'
export const purple = '#D881F8'

const Modal = () => {
  const { modalIsOpen, setModalIsOpen } = useContext(modalContext)

  return (
    <S.ModalContainer modalIsOpen={modalIsOpen.toString()}>
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
              <input type="text" id="pomodoro" value={25} />
              <S.IconTimerContainer>
                <img src={increaseIcon} alt="Increase Icon" />
                <img src={decreaseIcon} alt="Decrease Icon" />
              </S.IconTimerContainer>
            </S.InputContainer>
          </S.TimerContent>
          <S.TimerContent>
            <label htmlFor="short-break">short break</label>
            <S.InputContainer>
              <input type="text" id="short-break" value={5} />
              <S.IconTimerContainer>
                <img src={increaseIcon} alt="Increase Icon" />
                <img src={decreaseIcon} alt="Decrease Icon" />
              </S.IconTimerContainer>
            </S.InputContainer>
          </S.TimerContent>
          <S.TimerContent>
            <label htmlFor="long-break">long break</label>
            <S.InputContainer>
              <input type="text" id="long-break" value={25} />
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
            <S.FontOption fontStyle={kumbhSans}>Aa</S.FontOption>
            <S.FontOption fontStyle={robotoSlab}>Aa</S.FontOption>
            <S.FontOption fontStyle={spaceMono}>Aa</S.FontOption>
          </S.OptionContainer>
        </S.SettingsContainer>
        <S.SettingsContainer>
          <span>Color</span>
          <S.OptionContainer>
            <S.ColorOption color={orange} />
            <S.ColorOption color={blue} />
            <S.ColorOption color={purple} />
          </S.OptionContainer>
        </S.SettingsContainer>
        <S.ApplyButton>Apply</S.ApplyButton>
      </S.ModalContent>
      <S.Overlay onClick={() => setModalIsOpen(false)} />
    </S.ModalContainer>
  )
}

export default Modal
