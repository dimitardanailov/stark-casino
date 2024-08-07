'use client'

import {FC} from 'react'

import styled from 'styled-components'

import dynamic from 'next/dynamic'

interface ContainerProps {
  size: number
}

const Container = styled.div<ContainerProps>`
  position: relative;

  width: ${props => props.size}px;
  height: ${props => props.size}px;
`

export interface Props {
  size: number
  Icon: JSX.Element
  color: string
}

const IconWrapper = dynamic(() => import('./IconWrapper'), {ssr: false})

const DynamicIcon: FC<Props> = ({size, Icon, color}) => {
  return (
    <Container size={size}>
      <IconWrapper size={size} Icon={Icon} color={color} />
    </Container>
  )
}

export default DynamicIcon
