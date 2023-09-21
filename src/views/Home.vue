<template>
  <div class="container">
    <h1>Selamat datang di halaman Beranda!</h1>
    <p>Ini adalah halaman Beranda aplikasi kami.</p>
    <div class="card">
      <img :src="loadingImage" v-if="loading" />
      <div class="list-data" v-else>
        <ul v-for="item in dataList.products" :key="item.id">
          <li>{{ item.id }}</li>
          <li>{{ item.title }}</li>
          <li>{{ item.description }}</li>
          <li>{{ item.price }}</li>
        </ul>
      </div>
    </div>
    <!-- <div class="container">
      <iframe src="https://iik.ac.id/?gclid=CjwKCAjwsKqoBhBPEiwALrrqiM_z8NgionUOCLdXMCMF8DV3CM9zxB1W2eizZvsvO9PZ7L3WrX9HHRoCc_YQAvD_BwE"></iframe>
    </div> -->
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'HomePage',
    data() {
      return {
        dataList: [], // Untuk menyimpan data dari API
        loading: true,
        stats: {},
        loadingImage: require('../assets/logo.png')
      };
    },
    methods: { // Perbaikan penulisan methods
      async getData() {
        try {
          // Menambahkan penundaan selama 2 detik (2000 milidetik)
          setTimeout(async () => {
            const response = await axios.get('https://dummyjson.com/products');
            this.dataList = response.data; // Menyimpan data dari API ke variabel dataList
            this.loading = false; // Set loading menjadi false setelah data diterima
          }, 1500); // Penundaan selama 2 detik
        } catch (error) {
          console.error('Error:', error);
        }
      }
    },
    created() {
      // Ganti URL_API dengan URL API yang sesuai
      this.getData(); // Panggil metode getData untuk mengambil data
    }
  };
</script>

<style scoped lang="scss">
  /* Gaya khusus untuk komponen Home */
  h1 {
    color: aqua;
  }

  p {
    color: red;
  }

  .container {
    background: #ebebeb;
    min-height: 100vh;
  }

  .list-data {
    ul {
      list-style-type: none;

      li {
        text-align: left;
      }
    }
  }
</style> <!-- main -->

<style scoped lang="scss">
  /* Style untuk iframe agar tetap berukuran layar mobile */
  iframe {
    width: 100%;
    max-width: 400px;
    /* Sesuaikan dengan lebar layar yang Anda inginkan */
    height: 100vh;
    display: block;
    margin: 0 auto;
    /* Ini akan menempatkan iframe di tengah horisontal */
  }

  /* Style untuk kontainer yang mengatur posisi vertical di tengah */
  .halaman {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* Menggunakan tinggi 100% dari viewport */
  }
</style> <!-- iframe -->