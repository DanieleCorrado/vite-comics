<script>
export default {
  name: "AppMain",
}
</script>


<template>

<main>
  <div id="content">
  <span>Content goes here...</span>
  </div>
</main>

</template>

<style lang="scss" scoped>

@use '../styles/partials/variables.scss' as *;

main {
  color: white;

  #content {
    width: 80%;
    margin: 0 auto;
    padding: 30px;
  }
  
}

</style>
