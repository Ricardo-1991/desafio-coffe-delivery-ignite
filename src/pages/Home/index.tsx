import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { MainContainer } from "./styles";
import coffeImg from "../../assets/coffe-image.svg";
import { IconsInfoContainer, MainInfoContainer } from "../Home/styles";

export function Home() {
  return (
    <MainContainer>
      <MainInfoContainer>
        <strong>Encontre o café perfeito para qualquer hora do dia</strong>
        <p>
          Com o Coffe Delivery você recebe o seu café onde estiver, a qualquer
          hora
        </p>

        <IconsInfoContainer>
          <p>
            <ShoppingCart size={25} />
            Compra simples e segura
          </p>
          <p>
            <Package size={25} />
            Embalagem mantém o café intacto
          </p>
          <p>
            <Timer size={25} />
            Entrega rápida e rastreada
          </p>
          <p>
            <Coffee size={25} />O café chega fresquinho até você
          </p>
        </IconsInfoContainer>
      </MainInfoContainer>
      <img src={coffeImg} />
    </MainContainer>
  );
}
