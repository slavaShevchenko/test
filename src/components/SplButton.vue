<template>
  <div class="spl__button" @click="$emit('buttonClick')">{{ text }}</div>
</template>

<script>
export default {
  name: 'SplButton',
  props: {
    text: {
      default: '',
      type: String,
    },
  },
}
</script>

<style scoped>
  .spl__button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    background-color: var(--strong-cyan);
    border-radius: 4px;
    font-size: 18px;
    line-height: 1;
    color: var(--very-dark-cyan);
    text-transform: uppercase;
    transition: background-color 0.4s ease;
    cursor: pointer;
  }
  .spl__button:hover {
    background-color: var(--strong-cyan-hover);
  }
</style>
