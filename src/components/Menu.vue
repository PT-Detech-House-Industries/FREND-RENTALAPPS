<template>
  <div>
    <ul>
      <li><router-link to="/">Beranda</router-link></li>
      <li><router-link to="/about">Tentang</router-link></li>
      <li><router-link to="/contact">Kontak</router-link></li>
      <!-- Tambahkan menu item lain sesuai kebutuhan -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuPages',
};
</script>

<style scoped>
/* Gaya CSS untuk menu Anda */

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  li {
    float: right;
    background-color: #dddddd;
    a {
      display: block;
      padding: 8px;
      text-decoration: none;
      color: #333;
    }
  }
} /* untuk style menu */


</style>
