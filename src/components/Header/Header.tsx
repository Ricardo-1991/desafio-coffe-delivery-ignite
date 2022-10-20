import { HeaderContainer, Actions } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <Actions>
          <p>
            <MapPin size={24} />
            Ilhéus, BA
          </p>
          <ShoppingCart size={24} />
        </Actions>
      </nav>
    </HeaderContainer>
  );
}
