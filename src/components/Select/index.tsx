import { useEffect, useState, useContext } from 'react'
import { SelectSpan } from './style'
import { settingsContext } from '../../context/settingsSelec.context'

type Props = {
  children: string
  selectedSpan?: string
  click: (e: React.MouseEvent<HTMLSpanElement>) => void
}

const Select = ({ children, selectedSpan, click }: Props) => {
  const [selected, setSelected] = useState<boolean>(false)
  const { color, font } = useContext(settingsContext)

  useEffect(() => {
    if (selectedSpan === children) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }, [selectedSpan, children])

  return (
    <SelectSpan
      font={font}
      color={color}
      selectedstyle={selected.toString()}
      onClick={click}
    >
      {children}
    </SelectSpan>
  )
}

export default Select
