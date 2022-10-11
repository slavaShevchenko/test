<template>
  <div class="spl__select-tips">
    <div class="spl__select-tips-header">Select Tip %</div>
    <div class="spl__select-tips-content">
      <div v-for="(item, index) in items" :key="index" class="spl__select-tips-item">
        <input ref="radioButton" name="tips" type="radio" :id="'radio' + index" :value="item" v-model="inputValue" />
        <label :for="'radio' + index">{{ `${item}%` }}</label>
      </div>
      <div class="spl__select-tips-item-custom" :class="{ spl__active: !isCustom }">
        <div class="spl__select-tips-item-custom-text" @click="customValueOpen">Custom</div>
        <input ref="customInput" type="text" class="spl__select-tips-item-custom-input" v-model="customInputValue" v-onlyNumbers="true" @blur="customValueClose" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplSelectTips',
  props: {
    items: {
      default: null,
      type: Array,
    },
  },
  data() {
    return {
      inputValue: null,
      isCustom: true,
      customInputValue: null,
    }
  },
  watch: {
    inputValue(value) {
      if(value) {
        this.isCustom = true
        this.$emit('returnValue', value)
      }
    },
    customInputValue(value) {
      this.$emit('returnValue', value)
    },
  },
  methods: {
    customValueOpen() {
      this.uncheckRadioButtons()
      this.isCustom = false
      this.$refs.customInput.focus()
      this.$emit('returnValue', this.customInputValue)
    },
    customValueClose() {
      this.isCustom = !this.customInputValue
    },
    uncheckRadioButtons() {
      this.inputValue = null
      const radioButtons = this.$refs.radioButton
      radioButtons.forEach(el => el.checked = false)
    }
  },
}
</script>

<style scoped>
  .spl__select-tips-header {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1;
    color: var(--dark-grayish-cyan);
  }
  .spl__select-tips-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }
  .spl__select-tips-item,
  .spl__select-tips-item-custom {
    height: 48px;
    font-size: 24px;
    line-height: 1;
    color: var(--very-light-grayish-cyan);
  }
  .spl__select-tips-item input {
    display: none;
  }
  .spl__select-tips-item label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--very-dark-cyan);
    border-radius: 4px;
    transition: background-color 0.4s ease, color 0.4s ease;
    cursor: pointer;
  }
  .spl__select-tips-item label:hover {
    background-color: var(--strong-cyan-hover);
    color: var(--very-dark-cyan);
  }
  .spl__select-tips-item input:checked + label {
    background-color: var(--strong-cyan);
    color: var(--very-dark-cyan);
  }
  .spl__select-tips-item-custom {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--very-light-grayish-cyan);
    border-radius: 4px;
    color: var(--dark-grayish-cyan);
    position: relative;
  }
  .spl__select-tips-item-custom-text {
    opacity: 1;
    transition: opacity 0.4s ease;
    position: relative;
    z-index: 2;
    cursor: pointer;
  }
  .spl__select-tips-item-custom-input {
    opacity: 0;
    width: 100%;
    height: 100%;
    padding: 0 16px 0 2px;
    background-color: transparent;
    border: 2px solid var(--strong-cyan);
    border-radius: 4px;
    font-family: 'Space Mono', monospace;
    font-size: 24px;
    line-height: 1;
    color: var(--very-dark-cyan);
    text-align: right;
    transition: all 0.4s ease;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .spl__select-tips-item-custom input {
    width: 100%;
    height: 100%;
  }
  .spl__active .spl__select-tips-item-custom-text {
    opacity: 0;
    pointer-events: none;
  }
  .spl__active .spl__select-tips-item-custom-input {
    opacity: 1;
  }

  @media (max-width: 767px) {
    .spl__select-tips-header {
      font-size: 12px;
    }
    .spl__select-tips-content {
      grid-template-columns: 1fr 1fr;
    }
    .spl__select-tips-item,
    .spl__select-tips-item-custom {
      font-size: 20px;
    }
  }
</style>
