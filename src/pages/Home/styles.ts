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

export const IconsInfoContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 4.125rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    line-height: 1.25;
    white-space: nowrap;
  }
`

