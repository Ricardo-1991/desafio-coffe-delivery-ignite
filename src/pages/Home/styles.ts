import styled from 'styled-components'

export const MainContainer = styled.section`
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 1rem;
`

export const MainInfoContainer = styled.section`
  padding: 5rem;
  strong {
    font-size: 2.8rem;
  }

  strong + p {
    font-size: 1.2rem;
    margin-top: 1.2rem;
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
    font-size: 0.9rem;
    line-height: 1.25;
  }
`