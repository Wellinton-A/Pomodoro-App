import styled from 'styled-components'

type Props = {
  progressbar: number
  color: string
}

export const FirstDiv = styled.div`
  width: 410px;
  height: 410px;
  margin-top: 45px;
  background: linear-gradient(320deg, #2e325a, #0e112a);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -50px -50px 50px #272c5a, 50px 50px 50px #121530;
`

export const SecondDiv = styled.div`
  width: 366px;
  height: 366px;
  background-color: #161932;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProgressDiv = styled.div<Props>`
  width: 339px;
  height: 339px;
  background: conic-gradient(
    ${(props) => props.color} ${(props) => props.progressbar}deg,
    #161932 0deg
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TimerDiv = styled.div`
  width: 312px;
  height: 312px;
  background-color: #161932;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span:first-child {
    width: fit-content;
    font-size: 100px;
    font-weight: bold;
    background-color: transparent;
    color: #d7e0ff;
  }

  span:nth-child(2) {
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 15px;
    text-transform: uppercase;
    color: #d7e0ff;
    background-color: transparent;
    cursor: pointer;
  }
`

export const SettingsIconDiv = styled.div`
  margin-top: 63px;
  cursor: pointer;
`
