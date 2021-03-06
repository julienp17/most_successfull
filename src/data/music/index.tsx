import { Query } from '../types'
import mostListenedMusics from './mostListenedMusics'
import numeral from "numeral";
import bestSellingArtists from './bestSellingArtists';
import grammyAwardsWon from './grammyAwardsWon';

const music: Query[] = [
  {
    caption: "most_listened_on_spotify",
    items: mostListenedMusics,
    unit: "",
    formatValue: (value: number) => `${numeral(value).format('(0.0a)')}`
  },
  {
    caption: "certified_records_sold",
    items: bestSellingArtists,
    unit: "",
    formatValue: (value: number) => `${numeral(value).format('(0.0a)')}`
  },
  {
    caption: "most_grammy_awards_won",
    items: grammyAwardsWon,
    unit: "grammies"
  }
]

export default music