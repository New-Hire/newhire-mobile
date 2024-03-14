import 'vant/lib/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {
  Button,
  Cell,
  CellGroup,
  Col,
  Grid,
  GridItem,
  Icon,
  List,
  NavBar,
  Row,
  Tabbar,
  TabbarItem
} from 'vant'
import { ActionSheet } from 'vant'
import { Image as VanImage } from 'vant'

const app = createApp(App)

app.use(Button)
app.use(Col)
app.use(Row)
app.use(Cell)
app.use(CellGroup)
app.use(Grid)
app.use(GridItem)
app.use(NavBar)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Icon)
app.use(List)
app.use(ActionSheet)
app.use(VanImage)

app.use(router)
app.mount('#app')
