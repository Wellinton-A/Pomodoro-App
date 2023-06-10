import styled from 'styled-components'

type PropsStye = {
  selectedstyle: string
}

export const SelectSpan = styled.span<PropsStye>`
  padding: 18px 24px;
  background-color: ${(props) =>
    props.selectedstyle === 'true' ? '#F87070' : 'transparent'};
  color: ${(props) => (props.selectedstyle === 'true' ? '#1E213F' : '#d7e0ff')};
  border-radius: 24px;
  font-size: 14px;
  cursor: pointer;
`
