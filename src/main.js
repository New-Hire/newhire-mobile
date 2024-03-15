import 'vant/lib/index.css'

import { Rate } from 'vant'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Slider } from 'vant'

import {
  ActionSheet,
  Button,
  Cell,
  CellGroup,
  Col,
  Field,
  Form,
  Grid,
  GridItem,
  Icon,
  List,
  NavBar,
  Row,
  SwipeCell,
  Tabbar,
  TabbarItem,
  Toast,
  Image as VanImage
} from 'vant'

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
app.use(Form)
app.use(Field)
app.use(Toast)
app.use(SwipeCell)
app.use(Rate)
app.use(Slider)

app.use(router)
app.mount('#app')
