// create object called state
// make state object reactive
// export state object
// to make global import into app.vue
// use provide and inject methods
import { reactive, readonly } from "vue";

const state = reactive({
  counter: 0,
  colorCode: "red",
});

const methods = {
  increaseCounter() {
    state.counter++; //replace counter.value-- | console.log("increaseCounter")
  },
  decreaseCounter() {
    state.counter--;
  },
  setColorCode(val) {
    state.colorCode = val;
  },
};
/* decreaseCounter: ()=> state.counter--, //counter.value--//console.log("decreaseCounter"); */
const getters = {
  counterSquared() {
    return state.counter * state.counter;
  },
};
export default { state: readonly(state), methods, getters };
