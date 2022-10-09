import { Button as StyledButton } from './style'


const ButtonDefault = ({ children, color, type, onclick }) => {
  return (
    <StyledButton color={color} type={type} onClick={onclick}>{children}</StyledButton>
  )



}

export default Button