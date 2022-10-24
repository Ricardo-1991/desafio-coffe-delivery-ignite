import styled from 'styled-components'


export const HeaderContainer = styled.header `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem;
  
  nav {
    display: flex;
    align-items: center;
  }
`

export const Actions = styled.div `
    display: flex;
    align-items: center;
    gap: 1.2rem;

    p {
      background: ${props => props.theme['purple-200']};
      color: ${props => props.theme['purple-900']};
      padding: 8px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      gap: 0.2rem;

      svg {
        color: ${props => props.theme['purple-700']};
      }
    }
   
   div {
    display: flex;
    padding: 8px;
    background-color: ${props => props.theme['yellow-200']};
    color: ${props => props.theme['yellow-900']};
    border-radius: 6px;
   }
`


