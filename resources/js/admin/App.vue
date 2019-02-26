<script>
  export default {
    data() {
      return {}
    },
    async beforeCreate() {
      if (localStorage.token) {
        this.$store.commit('LOGIND', localStorage.token)
      }
    }
  }
</script>

<template>
  <div class="full-height">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
