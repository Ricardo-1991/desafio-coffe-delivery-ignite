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
            <MapPin size={24} weight="fill" />
            Ilhéus, BA
          </p>
          <div>
            <ShoppingCart size={20} weight="fill" />
          </div>
        </Actions>
      </nav>
    </HeaderContainer>
  );
}
