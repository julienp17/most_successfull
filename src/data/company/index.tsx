import { Query } from '../types'
import richest from './richest'
import numeral from "numeral";

const company: Query[] = [
  {
    caption: "richest_company",
    items: richest,
    unit: "",
    formatValue: (value: number) => `${numeral(value).format('($ 0.00 a)')}`
  }
]

export default company