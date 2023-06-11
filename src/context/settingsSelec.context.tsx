import { Dispatch, SetStateAction, createContext, useState } from 'react'

import { kumbhSans, orange } from '../components/Modal'

type SettingsProps = {
  font: string
  color: string
  pomodoroSetting: number
  shortBreakSetting: number
  longBreakSetting: number
  setFont: Dispatch<SetStateAction<string>>
  setColor: Dispatch<SetStateAction<string>>
  setPomodoroSetting: Dispatch<SetStateAction<number>>
  setShortBreakSetting: Dispatch<SetStateAction<number>>
  setLongBreakSetting: Dispatch<SetStateAction<number>>
}

type Props = {
  children: JSX.Element
}

export const settingsContext = createContext<SettingsProps>({
  font: '',
  color: '',
  pomodoroSetting: 25,
  shortBreakSetting: 5,
  longBreakSetting: 15,
  setFont: () => null,
  setColor: () => null,
  setPomodoroSetting: () => null,
  setShortBreakSetting: () => null,
  setLongBreakSetting: () => null
})

const SettingsProvider = ({ children }: Props) => {
  const [font, setFont] = useState<string>(kumbhSans)
  const [color, setColor] = useState<string>(orange)
  const [pomodoroSetting, setPomodoroSetting] = useState<number>(25)
  const [shortBreakSetting, setShortBreakSetting] = useState<number>(5)
  const [longBreakSetting, setLongBreakSetting] = useState<number>(15)

  const values: SettingsProps = {
    font,
    color,
    pomodoroSetting,
    shortBreakSetting,
    longBreakSetting,
    setFont,
    setColor,
    setPomodoroSetting,
    setShortBreakSetting,
    setLongBreakSetting
  }

  return (
    <settingsContext.Provider value={values}>
      {children}
    </settingsContext.Provider>
  )
}

export default SettingsProvider
