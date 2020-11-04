<template>
  <div>
    <form>
      <input class="bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white  focus:shadow-outline focus:border-gray-300 p-2">
      <button class="bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline p-2 text-white">
        Sign Up
      </button>
    </form>

    <button class="p-2 rounded border border-blue-500 bg-indigo-100 hover:bg-red-500 sm:bg-indigo-500 sm:hover:bg-gray-600 sm:hover:text-white">
      Hover me
    </button>

    <button class="btn btn-blue">
      我是藍色按鈕
    </button>

    <button class="btn btn-gray">
      我是灰色按鈕
    </button>

    <div class="circle-red sm:circle-blue"></div>

    <div class="filter-grayscale hover:filter-none">
      555
    </div>
  </div>
</template>

<script>
export default {
  name: 'PseudoClass'
}
</script>

<style lang="postcss" scoped>
@variants group-hover, hover, focus {
  .banana {
    color: yellow;
  }
}
</style>
