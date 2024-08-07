'use client'

import {FC} from 'react'

import styled from 'styled-components'

import {Props} from './index'

interface IconWrapperProps {
  size: number
  color: string
}

const IconWrapper = styled.span<IconWrapperProps>`
  color: ${props => props.color};
  width: ${props => props.size}px;
  height: ${props => props.size}px;

  margin-right: 0.5rem;

  & > svg {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
  }
`

const Component: FC<Props> = ({size, Icon, color}) => {
  return (
    <IconWrapper size={size} color={color}>
      {Icon}
    </IconWrapper>
  )
}

export default Component
