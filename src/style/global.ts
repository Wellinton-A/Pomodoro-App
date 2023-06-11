import { createGlobalStyle } from 'styled-components'

type Props = {
  font: string
}

const GlobalStyle = createGlobalStyle<Props>`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #1E213F;
  font-family: ${(props) => props.font};
  font-weight: bold;
}

.container {
  max-width: 410px;
  margin: 48px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
`

export default GlobalStyle
