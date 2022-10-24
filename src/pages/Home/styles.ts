import styled from 'styled-components'

export const MainContainer = styled.section`
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 1rem;
    padding: 4rem;
`

export const MainInfoContainer = styled.section`
  strong {
    font-size: 2.8rem;
    color: ${props => props.theme['base-title']};
    font-family: 'Baloo 2', cursive;
    line-height: 1.4;
  }

  strong + p {
    font-size: 1.2rem;
    margin-top: 1.2rem;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const IconsInfoContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 4.125rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    line-height: 1.25;
    white-space: nowrap;
  }
`
interface IconProps {
  iconColor: keyof typeof ICON_COLOR;
}

const ICON_COLOR = {
  orange: 'yellow-900',
  gray: 'base-text',
  yellow: 'yellow-700',
  purple: 'purple-700'
}

export const IconContainer = styled.div<IconProps>`
  display: flex;
  border-radius: 50%;
  background: ${props => props.theme[ICON_COLOR[props.iconColor]]};
  color: white;
  padding: 8px;
`

