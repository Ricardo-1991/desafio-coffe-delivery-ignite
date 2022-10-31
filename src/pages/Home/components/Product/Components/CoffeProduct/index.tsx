import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { ProductProps } from "../../../../../../../service/ProductService/index";
import {
  AmountButtonContainer,
  CardProduct,
  CounterButtonsContainer,
  FooterProductContainer,
  ProductBadges,
  ProductContainer,
  ProductHeader,
  ShoppingCartContainer,
} from "./styles";

interface ProductListProps {
  productList: ProductProps[];
}

export function CoffeProduct({ productList }: ProductListProps) {
  return (
    <ProductContainer>
      {productList.map((product) => (
        <CardProduct key={product.id}>
          <ProductHeader>
            <img src={product.image} alt="" />
            <ProductBadges>
              {product.badgeOne && <p>{product.badgeOne}</p>}
              {product.badgeTwo && <p>{product.badgeTwo}</p>}
              {product.badgeThree && <p>{product.badgeThree}</p>}
            </ProductBadges>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
          </ProductHeader>

          <FooterProductContainer>
            <p>
              <span>R$</span> {product.price}
            </p>
            <AmountButtonContainer>
              <CounterButtonsContainer>
                <button>
                  <Minus size={18} color="#8047F8" />
                </button>
                <p>{product.amount}</p>
                <button>
                  <Plus size={18} color="#8047F8" />
                </button>
              </CounterButtonsContainer>
              <ShoppingCartContainer>
                <button>
                  <ShoppingCartSimple size={22} color="#FFF" weight="fill" />
                </button>
              </ShoppingCartContainer>
            </AmountButtonContainer>
          </FooterProductContainer>
        </CardProduct>
      ))}
    </ProductContainer>
  );
}
