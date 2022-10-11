<template>
  <div class="spl__input" :class="{ spl__error: !isError, spl__focus: !isFocus }">
    <div class="spl__input-header">
      <div class="spl__input-label">{{ label }}</div>
      <div class="spl__input-err">Can't be zero or empty</div>
    </div>
    <div class="spl__input-content">
      <SplPreIcon :type="preIcon" />
      <div class="spl__input-input">
        <input v-model="inputValue" type="text" v-onlyNumbers="isInteger" @focus="isFocus = false" @blur="isFocus = true" />
      </div>
    </div>
  </div>
</template>

<script>
import SplPreIcon from './SplPreIcon.vue'

export default {
  name: 'SplInput',
  components: {
    SplPreIcon,
  },
  props: {
    label: {
      default: null,
      type: String,
    },
    preIcon: {
      default: null,
      type: String,
    }
  },
  data() {
    return {
      inputValue: null,
      isError: true,
      isFocus: true,
      isInteger: this.preIcon === 'dollar' ? true : false,
    }
  },
  watch: {
    inputValue() {
      this.validateZero()
    }
  },
  methods: {
    returnValueToParent(value) {
      this.$emit('returnValue', value)
    },
    validateZero() {
      const tempValue = +parseFloat(this.inputValue).toFixed(2)
      this.returnValueToParent(tempValue)
      this.isError = Boolean(tempValue)
    }
  }
}
</script>

<style scoped>
  .spl__input-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .spl__input-label {
    font-size: 16px;
    line-height: 1;
    color: var(--dark-grayish-cyan);
    white-space: nowrap;
  }
  .spl__input-err {
    opacity: 0;
    padding-left: 8px;
    font-size: 16px;
    line-height: 1;
    color: var(--error);
    text-align: right;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  .spl__error .spl__input-err {
    opacity: 1;
  }
  .spl__input-content {
    display: flex;
    align-items: center;
    height: 48px;
    background-color: var(--very-light-grayish-cyan);
    border: 2px solid var(--very-light-grayish-cyan);
    border-radius: 4px;
    transition: border 0.4s ease;
    position: relative;
  }
  .spl__input-input {
    flex-grow: 1;
    height: 100%;
  }
  .spl__input-input input {
    width: 100%;
    height: 100%;
    padding: 0 16px 0 2px;
    background-color: transparent;
    border: none;
    font-family: 'Space Mono', monospace;
    font-size: 24px;
    line-height: 1;
    color: var(--very-dark-cyan);
    text-align: right;
  }
  .spl__focus .spl__input-content {
    border: 2px solid var(--strong-cyan);
  }
  .spl__error .spl__input-content {
    border: 2px solid var(--error);
  }

  @media (max-width: 767px) {
    .spl__input-label {
      font-size: 12px;
    }
    .spl__input-input input {
      font-size: 20px;
    }
    .spl__input-err {
      font-size: 12px;
    }
  }
</style>
