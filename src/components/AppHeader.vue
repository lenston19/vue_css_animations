<template>
  <header class="header">
    <img alt="Vue logo" src="../assets/logo.png" height="50" />
    <nav class="header-nav">
      <ul class="header-nav__ul">
        <li class="header-nav__li" v-for="link in links" :key="link">
          <router-link class="header-nav__link" :to="link.to">{{
            link.title
          }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  setup() {
    let links = {
      Home: {
        to: "/",
        title: "Home",
      },
      Confetti: {
        to: "/Confetti",
        title: "Confetti",
      },
      Snow: {
        to: "/Snow",
        title: "Snow",
      },
    };
    return { links };
  },
};
</script>

<style lang="sass" scoped>
.header
    display: flex
    padding: 8px 15px
    justify-content: space-between
    border-bottom: 1px solid #41b883
    &-nav
        &__ul
            display: flex
        &__link
            font-size: 18px
            color: #41b883 !important
            text-decoration: none
            &:hover
                color: #226145 !important
                text-decoration: underline
        &__li
            margin-left: 10px
            list-style-type: none
</style>