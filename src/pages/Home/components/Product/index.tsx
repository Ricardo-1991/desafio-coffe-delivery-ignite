import { useEffect, useState } from "react";
import { Loader, SectionProduct } from "./styles";
import {
  ProductProps,
  ProductService,
} from "../../../../../service/ProductService/index";
import { CoffeProduct } from "./Components/CoffeProduct";

export function Products() {
  const [productList, setProductList] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      ProductService.getAll().then((response) => setProductList(response));
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <SectionProduct>
      <strong>Nossos cafés</strong>
      {isLoading ? <CoffeProduct productList={productList} /> : <Loader />}
    </SectionProduct>
  );
}
