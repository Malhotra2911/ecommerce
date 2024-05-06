<script>
export default {
    name: 'Header',
    methods: {
      handleScroll() {
        this.isScrolled = window.scrollY > 100
      },
      closeOffCanvas() {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler.getAttribute('aria-expanded') === 'true') {
            navbarToggler.click();
        }
      }
    },
    data() {
      return {
        isScrolled: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light" :class="{ 'scrolled': isScrolled }">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">E-commerce</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/" @click="closeOffCanvas()">Home</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/#about" @click="closeOffCanvas()">About Us</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/product" @click="closeOffCanvas()">Product</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/contact" @click="closeOffCanvas()">Contact Us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<style scoped>
  .navbar {
    top: 0;
    z-index: 1000;
  }
  .nav-item {
    font-size: 18px;
    font-weight: 700;
  }
  .navbar-brand {
    font-weight: 700;
  }
  .nav-link:hover {
    text-decoration-line: underline;
    text-decoration-color: goldenrod;
  }
  .scrolled {
    background-color: white;
  }
  @media screen and (max-width: 768px) {
    .navbar {
      background-color: white;
    }
  }
</style>