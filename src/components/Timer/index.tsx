import { useEffect, useState, useRef, useContext } from 'react'

import { selectContext } from '../../context/select.contecxt'

import settingsIcon from '../../assets/icon-settings.svg'

import * as S from './style'
import { modalContext } from '../../context/modal.context'
import { settingsContext } from '../../context/settingsSelec.context'

const minutes = (timer: number) => {
  if (Math.floor(timer / 60) < 10) {
    return `0${Math.floor(timer / 60)}`
  } else {
    return Math.floor(timer / 60)
  }
}

const seconds = (timer: number) => {
  if (Math.floor(timer % 60) < 10) {
    return `0${Math.floor(timer % 60)}`
  } else {
    return timer % 60
  }
}

const Timer = () => {
  const { selectedSpan } = useContext(selectContext)
  const { setModalIsOpen, modalIsOpen } = useContext(modalContext)
  const { color, font } = useContext(settingsContext)
  const { pomodoroSetting, shortBreakSetting, longBreakSetting } =
    useContext(settingsContext)

  const [initialPomodoro, setInitialPomodoro] = useState(pomodoroSetting)
  const [initialShortBreak, setInitialShortBreak] = useState(shortBreakSetting)
  const [initialLongBreak, setInitialLongBreak] = useState(longBreakSetting)

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

  useEffect(() => {
    if (modalIsOpen) {
      setStartPomodoro(false)
      setStartShortBreak(false)
      setStartLongBreak(false)
    }
  }, [modalIsOpen])

  useEffect(() => {
    setPomodoroTimer(pomodoroSetting)
    setInitialPomodoro(pomodoroSetting)
    setPomodoro(pomodoroTimer * 60)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pomodoroSetting, pomodoroTimer])

  useEffect(() => {
    setShortBreakTimer(shortBreakSetting)
    setInitialShortBreak(shortBreakSetting)
    setShortBreak(shortBreakTimer * 60)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shortBreakSetting, shortBreakTimer])

  useEffect(() => {
    setLongBreakTimer(longBreakSetting)
    setInitialLongBreak(longBreakSetting)
    setLongBreak(longBreakTimer * 60)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [longBreakSetting, longBreakTimer])

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
            <S.TimerDiv font={font}>
              {selectedSpan === 'pomodoro' && (
                <>
                  <span>
                    {minutes(pomodoro)}:{seconds(pomodoro)}
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
                    {minutes(shortBreak)}:{seconds(shortBreak)}
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
                    {minutes(longBreak)}:{seconds(longBreak)}
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
