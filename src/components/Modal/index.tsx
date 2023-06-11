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
  const {
    color,
    setColor,
    font,
    setFont,
    pomodoroSetting,
    setPomodoroSetting,
    shortBreakSetting,
    setShortBreakSetting,
    longBreakSetting,
    setLongBreakSetting
  } = useContext(settingsContext)

  const [selectedColor, setSelectedColor] = useState<string>(color)
  const [selectedFont, setSelectedFont] = useState<string>(font)
  const [selectedPomodoro, setSelectedPomodoro] =
    useState<number>(pomodoroSetting)
  const [selectedShortBreak, setSelectedShortBreak] =
    useState<number>(shortBreakSetting)
  const [selectedLongtBreak, setSelectedLongBreak] =
    useState<number>(longBreakSetting)

  const increasePomodoroTimer = () => {
    if (selectedPomodoro <= 85) {
      setSelectedPomodoro(selectedPomodoro + 5)
    } else {
      alert('Maximum min is 90')
    }
  }

  const decreasePomodoroTimer = () => {
    if (selectedPomodoro >= 5) {
      setSelectedPomodoro(selectedPomodoro - 5)
    } else {
      alert('Minimum min is 0')
    }
  }

  const increaseShortTimer = () => {
    if (selectedShortBreak <= 85) {
      setSelectedShortBreak(selectedShortBreak + 5)
    } else {
      alert('Maximum min is 90')
    }
  }

  const decreaseShortTimer = () => {
    if (selectedShortBreak >= 5) {
      setSelectedShortBreak(selectedShortBreak - 5)
    } else {
      alert('Minimum min is 0')
    }
  }

  const increaseLongTimer = () => {
    if (selectedLongtBreak <= 85) {
      setSelectedLongBreak(selectedLongtBreak + 5)
    } else {
      alert('Maximum min is 90')
    }
  }

  const decreaseLongTimer = () => {
    if (selectedLongtBreak >= 5) {
      setSelectedLongBreak(selectedLongtBreak - 5)
    } else {
      alert('Minimum min is 0')
    }
  }

  const handleApply = () => {
    setColor(selectedColor)
    setFont(selectedFont)
    setPomodoroSetting(selectedPomodoro)
    setShortBreakSetting(selectedShortBreak)
    setLongBreakSetting(selectedLongtBreak)
    setModalIsOpen(false)
  }

  useEffect(() => {
    if (!modalIsOpen) {
      setSelectedColor(color)
      setSelectedFont(font)
      setSelectedPomodoro(pomodoroSetting)
      setSelectedShortBreak(shortBreakSetting)
      setSelectedLongBreak(longBreakSetting)
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
              <div id="pomodoro">{selectedPomodoro}</div>
              <S.IconTimerContainer>
                <img
                  onClick={increasePomodoroTimer}
                  src={increaseIcon}
                  alt="Increase Icon"
                />
                <img
                  onClick={decreasePomodoroTimer}
                  src={decreaseIcon}
                  alt="Decrease Icon"
                />
              </S.IconTimerContainer>
            </S.InputContainer>
          </S.TimerContent>
          <S.TimerContent>
            <label htmlFor="short-break">short break</label>
            <S.InputContainer>
              <div id="short-break">{selectedShortBreak}</div>
              <S.IconTimerContainer>
                <img
                  onClick={increaseShortTimer}
                  src={increaseIcon}
                  alt="Increase Icon"
                />
                <img
                  onClick={decreaseShortTimer}
                  src={decreaseIcon}
                  alt="Decrease Icon"
                />
              </S.IconTimerContainer>
            </S.InputContainer>
          </S.TimerContent>
          <S.TimerContent>
            <label htmlFor="long-break">long break</label>
            <S.InputContainer>
              <div id="long-break">{selectedLongtBreak}</div>
              <S.IconTimerContainer>
                <img
                  onClick={increaseLongTimer}
                  src={increaseIcon}
                  alt="Increase Icon"
                />
                <img
                  onClick={decreaseLongTimer}
                  src={decreaseIcon}
                  alt="Decrease Icon"
                />
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
