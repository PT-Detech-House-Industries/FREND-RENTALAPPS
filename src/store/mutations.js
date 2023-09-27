// export const SET_DATA = (state, newData) => {
//   state.dataUserLogin = newData;
// }

const mutations = {
  // Definisikan mutations di sini
  SET_DATA(state, newData) {
    state.data = newData;
  },

  AboutDashboard(state, AboutDashboard) {
    state.AboutDashboard = AboutDashboard;
  }
};

export default mutations;