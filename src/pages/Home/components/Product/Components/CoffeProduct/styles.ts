import styled from 'styled-components'

export const ProductContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  list-style: none;
  align-items: center;
  margin-top: 3.375rem;

  strong {
    font-size: 1.3rem;
    Line-height: 1.6;
  }
`

export const CardProduct = styled.li`
  width: 100%;
  background-color: ${props => props.theme['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  padding: 15px;
  margin-top: 0.5rem;
  img {
    margin-top: -2.3rem;
  }
`

export const ProductHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  p {
    font-size: 0.875rem;
    color: ${props => props.theme['base-label']};
  }
  
`

export const ProductBadges = styled.div`
    display: flex;
    gap: 0.4rem;

    p {
    font-size: 0.625rem;
    color: ${props => props.theme['yellow-900']};
    background-color: ${props => props.theme['yellow-200']};
    padding: 4px 8px 4px 8px; 
    font-weight: bold;
    border-radius: 6.25rem;
  }
`


export const FooterProductContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4375rem;
  margin-top: 2.0625rem;
  
  p {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Baloo 2', cursive;
    color: ${props => props.theme['base-text']};

  span {
      font-size: 0.875rem;
      font-family: 'Roboto';
    }
  }

`

export const AmountButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CounterButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: ${props => props.theme['base-button']};
  border-radius: 6px;
  gap: 0.45rem;
  
  p {
    font-size: 1rem;
    color: ${props => props.theme['base-title']};
    line-height: 1.3;
    font-family: 'Roboto';
  }

`

export const ShoppingCartContainer = styled.div`
  background-color: ${props => props.theme['purple-900']};
  padding: 8px;
  border-radius: 6px;

  button {
    display: flex;
  }
`

