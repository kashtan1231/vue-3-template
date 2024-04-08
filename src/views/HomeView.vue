<template>
  <div class="home-view">
    <h1 class="home-view__title">Wellcome to project</h1>
  </div>
</template>

<script async setup lang="ts"></script>

<style lang="scss" scoped>
  .home-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    &__title {
      margin-bottom: 32px;
      text-align: center;
    }
  }
</style>
