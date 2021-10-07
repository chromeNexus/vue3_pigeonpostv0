import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import "../assets/styles/main.scss";
// import "./assets/styles/tailwind.scss";
import "../index.css";
createApp(App).use(router).mount("#app");

// import { firestorePlugin } from "vuefire";

import { createPinia } from "pinia";

//import { createDynamicForms } from '@asigloo/vue-dynamic-forms';

//import "./index.css";
//import "./assets/tailwind.css";
//import './index.css'

import _ from "lodash";

import "./assets/tailwind.css";

// vue.use(firestorePlugin)
const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);
const app = createApp(App);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = _.upperFirst(
    _.camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  app.component(componentName, componentConfig.default || componentConfig);
});

app.use(createPinia()).use(router).mount("#app");
// .use(VueDynamicForms) .use(firestorePlugin)

//const VueDynamicForms = createDynamicForms({
// Global Options go here
// });

/* createApp(App)
  .use(firestorePlugin)
  .use(createPinia())
  .use(router)
  .mount("#app");
 */
