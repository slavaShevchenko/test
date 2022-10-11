<template>
  <div id="app">
    <div class="spl__header">spli<br>tter</div>
    <div v-if="resetFlag" class="spl__layout">
      <div class="spl__layout-left">
        <div class="spl__layout-row">
          <SplInput label="Bill" pre-icon="dollar" @returnValue="valueFromBill" />
        </div>
        <div class="spl__layout-row">
          <SplSelectTips :items="itemsForTips" @returnValue="valueFromTips" />
        </div>
        <div class="spl__layout-row">
          <SplInput label="Number of People" pre-icon="person" @returnValue="valueFromPerson" />
        </div>
      </div>
      <div class="spl__layout-right">
        <div class="spl__layout-right-top">
          <div class="spl__layout-row">
            <SplViewResult label="Tip Amount" :value="valueTipAmount" />
          </div>
          <div class="spl__layout-row">
            <SplViewResult label="Total" :value="valueTotal" />
          </div>
        </div>
        <div class="spl__layout-right-bottom">
          <SplButton text="reset" @buttonClick="resetForm" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SplInput from './components/SplInput.vue';
import SplSelectTips from './components/SplSelectTips.vue';
import SplViewResult from './components/SplViewResult.vue';
import SplButton from './components/SplButton.vue';

export default {
  name: 'App',
  components: {
    SplInput,
    SplSelectTips,
    SplViewResult,
    SplButton,
  },
  data() {
    return {
      resetFlag: true,
      valueBill: null,
      valuePerson: null,
      valueTips: null,
      itemsForTips: [5, 10, 15, 25, 50],
    }
  },
  computed: {
    valueTipAmount() {
      if(this.valueBill && this.valuePerson && this.valueTips) {
        return ((this.valueBill / 100 * this.valueTips) / this.valuePerson).toFixed(2)
      }
      return '0.00'
    },
    valueTotal() {
      if(this.valueBill && this.valuePerson && this.valueTips) {
        return (((this.valueBill / 100 * this.valueTips) + this.valueBill) / this.valuePerson).toFixed(2)
      }
      return '0.00'
    },
  },
  methods: {
    valueFromBill(value) {
      this.valueBill = value
    },
    valueFromPerson(value) {
      this.valuePerson = value
    },
    valueFromTips(value) {
      this.valueTips = value
    },
    resetForm() {
      this.resetFlag = false
      this.$nextTick(() => {
        this.resetFlag = true
        Object.assign(this.$data, this.$options.data())
      })
    },
  }
}
</script>

<style>
  @charset "utf-8";

  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');

  :root {
    --strong-cyan: hsl(172, 67%, 45%);
    --strong-cyan-hover: #9fe8df;
    --very-dark-cyan: hsl(183, 100%, 15%);
    --dark-grayish-cyan: hsl(186, 14%, 43%);
    --grayish-cyan: hsl(184, 14%, 56%);
    --light-grayish-cyan: hsl(185, 41%, 84%);
    --very-light-grayish-cyan: hsl(189, 41%, 97%);
    --white: hsl(0, 0%, 100%);
    --error: #e26f52;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline: 0 !important;
  }
  img {
    vertical-align: middle;
    border-style: none;
  }
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: var(--light-grayish-cyan);
    position: relative;
    overflow: auto;
    overscroll-behavior: none;
  }
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    font-family: 'Space Mono', monospace;
  }
  .spl__header {
    margin-bottom: 80px;
    font-size: 24px;
    line-height: 1.5;
    letter-spacing: 8px;
    color: var(--very-dark-cyan);
    text-align: center;
    text-transform: uppercase;
  }
  .spl__layout {
    display: flex;
    column-gap: 48px;
    min-width: 920px;
    padding: 32px 32px 32px 48px;
    background-color: var(--white);
    border-radius: 20px;
  }
  .spl__layout-left,
  .spl__layout-right {
    flex-basis: 50%;
  }
  .spl__layout-left {
    padding: 16px 0;
  }
  .spl__layout-row + .spl__layout-row {
    margin-top: 48px;
  }
  .spl__layout-right {
    display: flex;
    flex-direction: column;
    padding: 40px;
    background-color: var(--very-dark-cyan);
    border-radius: 12px;
  }
  .spl__layout-right-top {
    flex-grow: 1;
  }

  @media (max-width: 999px) {
    #app {
      display: block;
      padding-top: 48px;
    }
    .spl__header {
      margin-bottom: 40px;
    }
    .spl__layout {
      flex-direction: column;
      column-gap: 0;
      min-width: auto;
      padding: 24px;
      border-radius: 20px 20px 0 0;
    }
    .spl__layout-left {
      padding: 8px 8px 32px 8px;
    }
    .spl__layout-right {
      padding: 40px 20px 24px 20px;
    }
    .spl__layout-row + .spl__layout-row {
      margin-top: 32px;
    }
    .spl__layout-right-top {
      margin-bottom: 32px;
    }
  }
</style>
