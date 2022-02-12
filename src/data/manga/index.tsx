import { Query } from '../types'
import mostSales from './mostSales'
import numeral from "numeral";

const manga: Query[] = [
  {
    caption: "Most Sales",
    items: mostSales,
    formatValue: (value: number) => `${numeral(value).format('($ 0.00 a)')}`
  }
]

export default manga