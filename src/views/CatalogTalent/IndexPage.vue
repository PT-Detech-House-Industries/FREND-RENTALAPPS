<template>
  <div class="container">
    <TopMenu></TopMenu>
    <div class="container mt-5">

      <div class="card mb-3" style="max-width: 540px;" v-for="(item, index) in talents" :key="index">
        <div class="row g-0">
          <!-- Gambar dengan styling responsif dan border-radius -->
          <div class="col-4 col-md-4">
            <img :src="require(`@/assets/talent/${item.talent_name}/${item.talent_image}`)" class="img-fluid card-img">
          </div>

          <div class="col-8 col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ capitalizeText(item.talent_name) }}</h5>
              <p class="card-text"><small class="text-muted">{{ item.talent_location }}</small></p>
              <a 
                :href="`/catalog-talent/${item.talent_id}/detail`"
                class="btn w-100 mt-5"
                :class="{
                  'btn-primary': item.talent_status === 'active', 
                  'btn-secondary disabled': item.talent_status !== 'active'
                }"
                :aria-disabled="item.talent_status !== 'active'"
                :tabindex="item.talent_status !== 'active' ? -1 : 0">
                Detail
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- <div v-for="product in products" :key="product.id" class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-4 col-md-4">
            <img src="https://via.placeholder.com/150x250" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-8 col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="card-text"><small class="text-muted">Rp {{ product.price.toLocaleString() }}</small></p>
              <a href="#" class="btn btn-primary">Detail</a>
            </div>
          </div>
        </div>
      </div> -->
      
      <!-- end-card -->
    </div>

  </div>
</template>

<script>
  // import TopMenu from '../../components/TopMenu.vue';
  export default {
    components: {
      // TopMenu,
    },
    mounted() {
      document.title = 'Catalog Talent | Nihon Uwu'
    },
    data() {
      return {
        // Data produk yang akan ditampilkan
        talents: [
          {
            talent_id: 1,
            talent_name: 'angle',
            talent_location: 'Solo, Jateng',
            talent_image: '01_angle.jpg',
            talent_status: 'active'
          },
          {
            talent_id: 2,
            talent_name: 'ana',
            talent_location: 'Denpasar, Bali',
            // talent_image: '01_angle.jpg',
            talent_image: '01_ana.jpg',
            talent_status: 'inactive'
          },
          {
            talent_id: 3,
            talent_name: 'tasya',
            talent_location: 'Malang, Jatim',
            // talent_image: '01_angle.jpg',
            talent_image: '01_tasya.jpg',
            talent_status: 'inactive'
          },
        ]
      }
    },
    methods: {
      // huruf fungsi kapital
      capitalizeText(value) {
        if (!value) return "";
        return value
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      },
    },
  };
</script>

<style scoped>
.card-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem;
}
</style>

<style scoped>
.catalog {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  width: 100%;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}
</style>