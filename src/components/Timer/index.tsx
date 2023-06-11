import { useEffect, useState, useRef, useContext } from 'react'

import { selectContext } from '../../context/select.contecxt'

import settingsIcon from '../../assets/icon-settings.svg'

import * as S from './style'
import { modalContext } from '../../context/modal.context'
import { settingsContext } from '../../context/settingsSelec.context'

const Timer = () => {
  const { selectedSpan } = useContext(selectContext)
  const { setModalIsOpen } = useContext(modalContext)
  const { color } = useContext(settingsContext)

  const initialPomodoro = 25
  const initialShortBreak = 5
  const initialLongBreak = 15

  const [pomodoroTimer, setPomodoroTimer] = useState<number>(initialPomodoro)
  const [shortBreakTimer, setShortBreakTimer] =
    useState<number>(initialShortBreak)
  const [longBreakTimer, setLongBreakTimer] = useState<number>(initialLongBreak)

  const [startPomodoro, setStartPomodoro] = useState<boolean>(false)
  const [startShortBreak, setStartShortBreak] = useState<boolean>(false)
  const [startLongBreak, setStartLongBreak] = useState<boolean>(false)

  const [pomodoro, setPomodoro] = useState<number>(pomodoroTimer * 60)
  const [shortBreak, setShortBreak] = useState<number>(shortBreakTimer * 60)
  const [longBreak, setLongBreak] = useState<number>(longBreakTimer * 60)

  const minPomodoro = () => {
    if (Math.floor(pomodoro / 60) < 10) {
      return `0${Math.floor(pomodoro / 60)}`
    } else {
      return Math.floor(pomodoro / 60)
    }
  }

  const secPomodoro = () => {
    if (Math.floor(pomodoro % 60) < 10) {
      return `0${Math.floor(pomodoro % 60)}`
    } else {
      return pomodoro % 60
    }
  }

  const minShortBreak = () => {
    if (Math.floor(shortBreak / 60) < 10) {
      return `0${Math.floor(shortBreak / 60)}`
    } else {
      return Math.floor(shortBreak / 60)
    }
  }

  const secShortBreak = () => {
    if (Math.floor(shortBreak % 60) < 10) {
      return `0${Math.floor(shortBreak % 60)}`
    } else {
      return shortBreak % 60
    }
  }

  const minLongBreak = () => {
    if (Math.floor(longBreak / 60) < 10) {
      return `0${Math.floor(longBreak / 60)}`
    } else {
      return Math.floor(longBreak / 60)
    }
  }

  const secLongBreak = () => {
    if (Math.floor(longBreak % 60) < 10) {
      return `0${Math.floor(longBreak % 60)}`
    } else {
      return longBreak % 60
    }
  }

  const runTimePomodoro = useRef<NodeJS.Timeout | undefined>(undefined)
  const runTimeShort = useRef<NodeJS.Timeout | undefined>(undefined)
  const runTimeLong = useRef<NodeJS.Timeout | undefined>(undefined)

  const pausePomodoro = () => {
    clearTimeout(runTimePomodoro.current)
    setStartPomodoro(!startPomodoro)
  }

  const pauseShort = () => {
    clearTimeout(runTimeShort.current)
    setStartShortBreak(!startShortBreak)
  }

  const pauseLong = () => {
    clearTimeout(runTimeLong.current)
    setStartLongBreak(!startLongBreak)
  }

  useEffect(() => {
    if (pomodoro > 0 && startPomodoro) {
      runTimePomodoro.current = setTimeout(
        () => setPomodoro(pomodoro - 1),
        1000
      )
    }
  }, [pomodoro, startPomodoro])

  useEffect(() => {
    if (shortBreak > 0 && startShortBreak) {
      runTimeShort.current = setTimeout(
        () => setShortBreak(shortBreak - 1),
        1000
      )
    }
  }, [shortBreak, startShortBreak])

  useEffect(() => {
    if (longBreak > 0 && startLongBreak) {
      runTimeLong.current = setTimeout(() => setLongBreak(longBreak - 1), 1000)
    }
  }, [longBreak, startLongBreak])

  const multipFactorPomodoro = 360 / (initialPomodoro * 60)
  const multipFactorShortBreak = 360 / (initialShortBreak * 60)
  const multipFactorLongBreak = 360 / (initialLongBreak * 60)

  const progressBar = (): number => {
    if (selectedSpan === 'pomodoro') {
      return pomodoro * multipFactorPomodoro
    }
    if (selectedSpan === 'short break') {
      return shortBreak * multipFactorShortBreak
    }
    return longBreak * multipFactorLongBreak
  }

  const progressBarPomodoro: number = progressBar()

  return (
    <>
      <S.FirstDiv>
        <S.SecondDiv>
          <S.ProgressDiv color={color} progressbar={progressBarPomodoro}>
            <S.TimerDiv>
              {selectedSpan === 'pomodoro' && (
                <>
                  <span>
                    {minPomodoro()}:{secPomodoro()}
                  </span>
                  {pomodoro > 0 ? (
                    <span onClick={pausePomodoro}>
                      {startPomodoro ? 'Pause' : 'Start'}
                    </span>
                  ) : (
                    <span onClick={() => setPomodoro(pomodoroTimer * 60)}>
                      Restart
                    </span>
                  )}
                </>
              )}
              {selectedSpan === 'short break' && (
                <>
                  <span>
                    {minShortBreak()}:{secShortBreak()}
                  </span>
                  {shortBreak > 0 ? (
                    <span onClick={pauseShort}>
                      {startShortBreak ? 'Pause' : 'Start'}
                    </span>
                  ) : (
                    <span onClick={() => setShortBreak(shortBreakTimer * 60)}>
                      Restart
                    </span>
                  )}
                </>
              )}
              {selectedSpan === 'long break' && (
                <>
                  <span>
                    {minLongBreak()}:{secLongBreak()}
                  </span>
                  {longBreak > 0 ? (
                    <span onClick={pauseLong}>
                      {startLongBreak ? 'Pause' : 'Start'}
                    </span>
                  ) : (
                    <span onClick={() => setLongBreak(longBreakTimer * 60)}>
                      Restart
                    </span>
                  )}
                </>
              )}
            </S.TimerDiv>
          </S.ProgressDiv>
        </S.SecondDiv>
      </S.FirstDiv>
      <S.SettingsIconDiv onClick={() => setModalIsOpen(true)}>
        <img src={settingsIcon} alt="Settings Icon" />
      </S.SettingsIconDiv>
    </>
  )
}

export default Timer
