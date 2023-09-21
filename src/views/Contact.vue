<template>
  <div class="container">
    <h1>Kontak Kami</h1>
    <p>Kami adalah perusahaan yang luar biasa.</p>
    <!-- <div class="container">
      <iframe src="https://iik.ac.id/?gclid=CjwKCAjwsKqoBhBPEiwALrrqiM_z8NgionUOCLdXMCMF8DV3CM9zxB1W2eizZvsvO9PZ7L3WrX9HHRoCc_YQAvD_BwE"></iframe>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped lang="scss">
  /* Gaya khusus untuk komponen Home */
  .container {
    max-width: 480px;
    margin: auto;
    background: #ebebeb;
    min-height: 100vh;
    padding-bottom: 1px;
    padding: 0;
  }

  .home {
    h1 {
      color: aqua;
    }

    p {
      color: red;
    }
  }

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
</style>
