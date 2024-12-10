<template>
  <div style="width: 100%;">
    <el-container class="header">
      <el-main>
        <el-page-header @back="goBack" :content="namaDetail"></el-page-header>
      </el-main>
    </el-container>

    <el-carousel height="280px" direction="vertical" :autoplay="true">
      <el-carousel-item v-for="(item, index) in images" :key="index">
        <!-- Gambar yang diikat dengan v-bind:src -->
        <img :src="item.src" :alt="item.alt" style="width: 100%; height: 100%; object-fit: cover;">
      </el-carousel-item>
    </el-carousel>

    <div>
      <div class="container mt-4">
        <div class="card mb-3" style="max-width: 480px;">
          <div class="card-body">
            <div class="row">
              <div class="col-4 col-md-4">
                <div class="block">
                  <el-avatar :size="100" :src="url" :fit="cover"></el-avatar>
                  <!-- <el-image
                    style="width: 100px; height: 100px; border-radius: 10px;"
                    :src="url"
                    :fit="fit">
                  </el-image> -->
                </div>
              </div>
              <div class="col-8 col-md-8">
                <el-descriptions title="Angle (Solo, Jateng)">
                  <el-descriptions-item label="Rating"><i class="el-icon-star-on"></i> 5.0</el-descriptions-item>
                </el-descriptions>
                <el-descriptions>
                  <el-descriptions-item label="Handle">Online & Offline Dating</el-descriptions-item>
                </el-descriptions>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- next step -->

    <div>
      <div class="container mt-4">
        <div class="card mb-3" style="max-width: 480px;">
          <div class="row g-0">
            <div class="col-12">
              <div class="card-body">
                <el-descriptions title="Yang Special Dari Aku...">
                  <el-descriptions-item label="List">
                    Request Cosplay, Ajak Main Game, Dengerin Curhat, Random Talk, Friendly, Pengertian, Cerita Anime
                  </el-descriptions-item>
                </el-descriptions>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-5">
      <div class="container mt-4">

        <div class="card mb-3" style="max-width: 480px;">
          <div class="row g-0">
            <div class="col-12">
              <div class="card-body">
                <el-descriptions title="Info Tambahan...">
                  <el-descriptions-item label="Hobi">
                    <ul>
                      <li>Dengerin musik</li>
                      <li>Main game</li>
                      <li>Baca webtoon</li>
                    </ul>
                  </el-descriptions-item>
                </el-descriptions>
                <el-descriptions>
                  <el-descriptions-item label="Sifat">
                    <ul>
                      <li>Rewel</li>
                      <li>Manja</li>
                      <li>Cuek tapi diem" perhatian</li>
                      <li>Friendly</li>
                    </ul>
                  </el-descriptions-item>
                </el-descriptions>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- next step -->
  </div>
</template>

<script>
export default {
  name: 'CatalogTalentDetail',
  data() {
    return {
      namaDetail: 'Detail Talents',
      circleUrl: '../../assets/talent/02_angle.jpg',
      olDurl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      url: require('../../assets/talent/02_angle.jpg'),
      // Daftar gambar
      images: [
        { src: require('../../assets/talent/03_angle.jpg'), alt: 'Image Banner 1' },
        { src: require('../../assets/talent/04_angle.jpg'), alt: 'Image Banner 2' }
      ]
    };
  },
  methods: {
    goBack() {
      // Jika menggunakan Vue Router, untuk kembali ke halaman sebelumnya
      this.$router.go(-1);
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_theme.scss';

.header {
  background-color: $primary-color;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>