import axios from 'axios'

const cors = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
};

const actions = {
  async fetchData({ commit }) {
    try {
      // Panggil API di sini
      const response = await axios.get('https://dummyjson.com/products');
      const data = response.data;
      commit('SET_DATA', data); // Panggil mutasi SET_DATA untuk menyimpan data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  async fetchAbout({ commit }) {
    try {
      // Panggil API di sini
      const response = await axios.get('http://dev.nihonuwu.com/api/profile-account', cors);
      const data = response.data;
      commit('AboutDashboard', data); // Panggil mutasi SET_DATA untuk menyimpan data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
};

export default actions;