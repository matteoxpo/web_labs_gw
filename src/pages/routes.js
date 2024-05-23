import {createRouter} from 'vue-router'
import Homepage from './home/Home.vue';
import CandleChart from './candleChart/CandleChart.vue';

const routes = [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/candleChart/',
    component: CandleChart
  },
]


export default function (history) {
  return createRouter({
    history,
    routes
  })
}