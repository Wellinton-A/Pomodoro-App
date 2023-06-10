import { useEffect, useState } from 'react'
import { SelectSpan } from './style'

type Props = {
  children: string
  selectedSpan?: string
  click: (e: React.MouseEvent<HTMLSpanElement>) => void
}

const Select = ({ children, selectedSpan, click }: Props) => {
  const [selected, setSelected] = useState<boolean>(false)

  useEffect(() => {
    if (selectedSpan === children) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }, [selectedSpan, children])

  return (
    <SelectSpan selectedstyle={selected.toString()} onClick={click}>
      {children}
    </SelectSpan>
  )
}

export default Select
