import { Api } from "../api/ApiConfig"

export interface ProductProps {
  id: number,
  image: string,
  badgeOne: string,
  badgeTwo: string,
  badgeThree: string
  title: string,
  description: string,
  price: string,
  amount: number
}

const getAll = async (): Promise<ProductProps[]> => {
  const {data} = await Api().get('/coffes')
  return data
}

export const ProductService = {
  getAll
}