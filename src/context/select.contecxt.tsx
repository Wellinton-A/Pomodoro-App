import { Dispatch, SetStateAction, createContext, useState } from 'react'

type Props = {
  children: JSX.Element
}

type SelectedProps = {
  selectedSpan: string
  setSelectedSpan: Dispatch<SetStateAction<string>>
}

export const selectContext = createContext<SelectedProps>({
  selectedSpan: '',
  setSelectedSpan: () => null
})

const SelectedProvider = ({ children }: Props) => {
  const [selectedSpan, setSelectedSpan] = useState('pomodoro')

  const values: SelectedProps = {
    selectedSpan,
    setSelectedSpan
  }

  return (
    <selectContext.Provider value={values}>{children}</selectContext.Provider>
  )
}

export default SelectedProvider
