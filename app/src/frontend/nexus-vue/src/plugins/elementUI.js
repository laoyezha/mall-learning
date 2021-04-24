// import 'element3/lib/theme-chalk/index.css'
// import Element3 from 'element3'

import {
  ElLink,
  ElButton,
  // ...
} from 'element3';

import 'element3/lib/theme-chalk/button.css';
import 'element3/lib/theme-chalk/link.css';

export default app => {
  // app.use(Element3)
  app.use(ElButton).use(ElLink);
};
