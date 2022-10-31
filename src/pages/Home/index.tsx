import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { IconContainer, MainContainer, SectionContainer } from "./styles";
import { IconsInfoContainer, MainInfoContainer } from "../Home/styles";
import { Products } from "./components/Product/index";
import coffeImg from "../../assets/coffe-image.svg";

export function Home() {
  return (
    <>
      <MainContainer>
        <SectionContainer>
          <MainInfoContainer>
            <strong>Encontre o café perfeito para qualquer hora do dia</strong>
            <p>
              Com o Coffe Delivery você recebe o seu café onde estiver, a
              qualquer hora
            </p>

            <IconsInfoContainer>
              <li>
                <IconContainer iconColor="yellow-900">
                  <ShoppingCart size={24} weight="fill" />
                </IconContainer>
                Compra simples e segura
              </li>
              <li>
                <IconContainer iconColor="base-text">
                  <Package size={24} weight="fill" />
                </IconContainer>
                Embalagem mantém o café intacto
              </li>
              <li>
                <IconContainer iconColor="yellow-700">
                  <Timer size={24} weight="fill" />
                </IconContainer>
                Entrega rápida e rastreada
              </li>
              <li>
                <IconContainer iconColor="purple-700">
                  <Coffee size={24} weight="fill" />
                </IconContainer>
                O café chega fresquinho até você
              </li>
            </IconsInfoContainer>
          </MainInfoContainer>
          <img src={coffeImg} />
        </SectionContainer>
        <Products />
      </MainContainer>
    </>
  );
}
