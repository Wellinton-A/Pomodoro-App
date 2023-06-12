import styled from 'styled-components'

type Props = {
  fontStyle?: string
  color?: string
  border?: string
  modalisopen?: string
  colorbutton?: string
  showimage?: string
  selectedfont?: string
}

export const ModalContainer = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: ${(props) => (props.modalisopen === 'true' ? 'flex' : 'none')};
  justify-content: center;
  background-color: transparent;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 540px;
  height: 464px;
  margin-top: 155px;
  border-radius: 25px;
  background-color: #fff;
  color: #161932;

  h3 {
    background-color: transparent;
    padding: 34px 0 24px 40px;
    font-size: 28px;
    font-weight: bold;
    border-bottom: 2px solid #e3e1e1;
  }

  h4 {
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
    background-color: transparent;
    margin-top: 28px;
    margin-left: 40px;
  }

  @media (max-width: 767px) {
    align-items: center;
    width: 327px;
    height: 549px;
    margin-top: 42px;

    h3 {
      font-size: 20px;
      align-self: flex-start;
      width: 100%;
      padding-top: 24px;
    }

    h4 {
      font-size: 11px;
    }
  }
`

export const CloseContainer = styled.div`
  position: absolute;
  top: 47px;
  right: 38px;
  background-color: transparent;
  cursor: pointer;

  img {
    background-color: transparent;
  }

  @media (max-width: 767px) {
    top: 30px;
  }
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const TimerSettingsContainer = styled.div`
  background-color: transparent;
  margin: 24px 40px 0 40px;
  border-bottom: 2px solid #e3e1e1;
  display: flex;
  gap: 20px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 24px;
    gap: 8px;
  }
`

export const TimerContent = styled.div`
  width: 140px;
  background-color: transparent;

  label {
    color: rgba(30, 33, 63, 0.4);
    background-color: transparent;
    margin-bottom: 10px;
  }

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 280px;
    height: 40px;
  }
`

export const InputContainer = styled.div`
  width: 140px;
  height: 48px;
  background-color: #eff1fa;
  border-radius: 10px;
  margin: 10px 0 24px 0;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div:first-child {
    background-color: transparent;
    width: 60px;
    font-size: 14px;
    font-weight: bold;
  }

  @media (max-width: 767px) {
    height: 40px;
    margin-bottom: 10px;
  }
`

export const IconTimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  gap: 10px;

  img {
    background-color: transparent;
    cursor: pointer;
  }
`

export const SettingsContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 40px 0 40px;
  padding: 0 0 24px 0;
  background-color: transparent;
  border-bottom: ${(props) =>
    props.border === 'border' ? '2px solid #e3e1e1' : 'none'};

  span {
    font-size: 13px;
    font-weight: bold;
    background-color: transparent;
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    width: 280px;
    margin: 16px 20px 0;

    span {
      margin-bottom: 16px;
      font-size: 11px;
    }
  }
`

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  gap: 16px;
`

export const FontOption = styled.div<Props>`
  display: flex;
  height: 40px;
  width: 40px;
  font-family: ${(props) => props.fontStyle};
  font-size: 15px;
  font-weight: bold;
  border-radius: 50%;
  background-color: ${(props) =>
    props.selectedfont === 'true' ? '#161932' : '#EFF1FA'};
  color: ${(props) => (props.selectedfont === 'true' ? '#ffffff' : '#1e213f')};
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const ColorOption = styled.div<Props>`
  display: flex;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    display: ${(props) => (props.showimage === 'true' ? 'flex' : 'none')};
    background-color: transparent;
  }
`

export const ApplyButton = styled.span<Props>`
  position: absolute;
  top: 437px;
  left: 200px;
  border-radius: 26px;
  background-color: ${(props) => props.colorbutton};
  color: #ffffff;
  padding: 16px 47px;
  cursor: pointer;

  @media (max-width: 767px) {
    top: 522px;
    left: 94px;
  }
`
