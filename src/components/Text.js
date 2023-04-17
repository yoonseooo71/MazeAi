import styled from "styled-components"
const Text = styled.div`
  font-size: ${({size})=>size};
  color: ${({theme,color})=>theme.colors[color]};
`
export default Text ; 