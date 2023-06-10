import { useEffect, useState } from 'react'
import * as S from './style'

const Timer = () => {
  const initialPomodoro = 1

  const [pomodoroTimer, setPomodoroTimer] = useState<number>(initialPomodoro)
  const [shortBreakTimer, setShortBreakTimer] = useState<number>(5)
  const [longBreakTimer, setLongBreakTimer] = useState<number>(15)

  const [start, setStart] = useState<boolean>(false)

  const [pomodoro, setPomodoro] = useState<number>(pomodoroTimer * 60 * 1000)

  const shortBreak = shortBreakTimer * 60
  const longtBreak = longBreakTimer * 60

  const minPomodoro = () => {
    if (Math.floor(pomodoro / 60 / 1000) < 10) {
      return `0${Math.floor(pomodoro / 60 / 1000)}`
    } else {
      return Math.floor(pomodoro / 60 / 1000)
    }
  }
  const secPomodoro = () => {
    if (Math.floor((pomodoro / 1000) % 60) < 10) {
      return `0${Math.floor((pomodoro / 1000) % 60)}`
    } else {
      return Math.floor((pomodoro / 1000) % 60)
    }
  }

  useEffect(() => {
    if (pomodoro > 0 && start) {
      setTimeout(() => setPomodoro(pomodoro - 100), 100)
    }
  }, [pomodoro, start])

  const progressBar = (360 / pomodoro).toFixed(4)
  const progressBarDegree = Number(progressBar)

  return (
    <S.FirstDiv>
      <S.SecondDiv>
        <S.ProgressDiv progressbar={progressBarDegree}>
          <S.TimerDiv>
            <span>
              {minPomodoro()}:{secPomodoro()}
            </span>
            {pomodoro > 0 ? (
              <span onClick={() => setStart(!start)}>
                {start ? 'Pause' : 'Start'}
              </span>
            ) : (
              <span onClick={() => setPomodoro(pomodoroTimer * 60 * 1000)}>
                Restart
              </span>
            )}
          </S.TimerDiv>
        </S.ProgressDiv>
      </S.SecondDiv>
    </S.FirstDiv>
  )
}

export default Timer
