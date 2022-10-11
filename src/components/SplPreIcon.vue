<template>
  <div class="spl__pre-icon">
    <img v-if="type === 'dollar'" src="./icons/icon-dollar.svg" />
    <img v-else-if="type === 'person'" src="./icons/icon-person.svg" />
  </div>
</template>

<script>
export default {
  name: 'SplPreIcon',
  props: {
    type: {
      default: '',
      type: String,
    },
  },
}
</script>

<style scoped>
  .spl__pre-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 100%;
  }
</style>
