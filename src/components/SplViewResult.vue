<template>
  <div class="spl__view-result">
    <div class="spl__view-result-left"><span>{{ label }}</span> / person</div>
    <div class="spl__view-result-right">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'SplViewResult',
  props: {
    label: {
      default: null,
      type: String,
    },
    value: {
      default: null,
      type: String,
    }
  },
}
</script>

<style scoped>
  .spl__view-result {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .spl__view-result-left {
    font-size: 13px;
    line-height: 1;
    color: var(--strong-cyan);
  }
  .spl__view-result-left span {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    color: var(--very-light-grayish-cyan);
  }
  .spl__view-result-right {
    font-size: 40px;
    line-height: 1;
    color: var(--strong-cyan);
    position: relative;
  }
  .spl__view-result-right:before {
    content: "$";
  }

  @media (max-width: 767px) {
    .spl__view-result-left {
      font-size: 12px;
    }
    .spl__view-result-left span {
      font-size: 14px;
    }
    .spl__view-result-right {
      font-size: 32px;
    }
  }
</style>
