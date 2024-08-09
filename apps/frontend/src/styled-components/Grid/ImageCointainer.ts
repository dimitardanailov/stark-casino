import styled from 'styled-components'

interface Props {
  padding?: string
}

const Box = styled.div<Props>`
  position: relative;

  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  flex-wrap: nowrap;

  overflow: hidden;

  padding: ${props => (props.padding ? props.padding : 0)};
`

export default Box
