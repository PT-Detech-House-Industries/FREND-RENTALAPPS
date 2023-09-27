<template>
  <div class="form-content">
    <TopBorder></TopBorder>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label>Username</label>
      <input class="login-form" v-model="username" type="text" id="username" placeholder=" Username..">

      <label>Password</label>
      <input class="login-form" v-model="password" type="password" id="password" placeholder="Password..">

      <input class="submit" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  import TopBorder from '../../components/TopBorder.vue';
  
  export default {
    data() {
      return {
        pageTitle: 'login page - nihonuwu.com',
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Implementasi logika autentikasi di sini
        // Contoh: Anda dapat melakukan validasi username dan password
        if (this.username === 'user' && this.password === '123') {
          // Berhasil login, arahkan pengguna ke halaman lain
          this.$router.push('/dashboard');
        } else {
          alert('Login gagal. Periksa kembali username dan password Anda.');
        }
      },

      async logins() {
        try {
          await axios.post('http://localhost:8000/api/login', {
            username: this.username,
            password: this.password,
          });

          // Handle response data here, such as storing tokens or redirecting.
          this.$router.push('/dashboard');
        } catch (error) {
          // Handle errors here, such as displaying an error message.
          console.error('Login failed:', error);

          // Display error message to the user
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      },
    },
    components: {
      // HelloWorld
      TopBorder,
    },
    mounted() {
      document.title = 'login - nihonuwu'
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/scss/_form.scss';
  
  .form-content {
    max-width: 400px;
    // border: 1px solid #ccc;
    border-radius: 5px;
    // background-color: #f9f9f9;
    margin: 0 auto;
    padding: 20px;
    padding-top: 75px;
  }

  form {
    // background-color: #f9f9f9;
    padding: 18px;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }

  .login-form {
    margin: 8px 0;
  }
</style><!-- form version 1.1 -->