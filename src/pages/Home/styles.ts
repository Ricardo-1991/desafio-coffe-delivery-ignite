import styled from 'styled-components'

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    padding: 4rem;

`

export const SectionContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 1rem;
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
  iconColor: 'yellow-900' | 'base-text' | 'yellow-700' | 'purple-700',
}

export const IconContainer = styled.div<IconProps>`
  display: flex;
  border-radius: 50%;
  background: ${props => props.theme[props.iconColor]};
  color: white;
  padding: 8px;
`



