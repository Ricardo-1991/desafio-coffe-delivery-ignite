import styled from 'styled-components'

export const SectionProduct = styled.section` 
  margin-top: 8rem;
  strong { 
    font-size: 2rem;
  }
`

export const Loader = styled.div`
  margin: 0 auto;
  @keyframes spin {
    to {transform: rotate(360deg);}
  }
  width: 4rem;
  height: 4rem;
  border-radius: 50%;

  border-top: 8px solid ${props => props.theme['base-title']};
  border-left: 8px solid ${props => props.theme['base-title']};
  border-right: 8px solid rgba(255,255,255, 1);

  animation: spin 0.575s infinite linear;
`