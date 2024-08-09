import {FC} from 'react'

import Link from 'next/link'

import DynamicIcon from '../DynamicIcon'
import {VFlexbox, ImageCointainer} from '@/styled-components/Grid'
import styled from 'styled-components'

import type {MenuItem} from '@/menu'

const Container = styled(VFlexbox)`
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    margin: 0;
  }
`

interface Props {
  items: MenuItem[]
}

const LeftDrawer: FC<Props> = ({items}) => {
  const iconSize = 32
  const iconColour = 'rgba(0, 0, 0, 0.54);'
  const paddingImageCointainer = '0.2rem 0.5rem'

  return (
    <Container>
      {items.map((item: MenuItem) => (
        <Link href={item.href} title={item.title} key={item.key}>
          <ImageCointainer padding={paddingImageCointainer}>
            <DynamicIcon Icon={item.Icon} size={iconSize} color={iconColour} />
            <span className="ml-3 left-drawer-text-item">{item.text}</span>
          </ImageCointainer>
        </Link>
      ))}
    </Container>
  )
}

export default LeftDrawer
