<script>
import comicsList from '../dataset/dc-comics.json'
export default {
  name: "AppMain",
  data() {
    return {
      comics: comicsList,
    }
  }
}
</script>


<template>

<main>
  <header></header>
  <div id="content">

    <div id="section-name">
    CURRENT SERIES
    </div>

    <div id="comic" v-for="(comic, idx) in comics" :key="idx">
      <img :src="comic.thumb" alt="Comic cover">
      <div>{{ comic.series }}</div>
    </div>

  </div>

  <div id="more-content">
    <button type="submit">LOAD MORE</button>
  </div>
</main>

</template>

<style lang="scss" scoped>

@use '../styles/partials/variables.scss' as *;

main {
  color: white;

  header {
    height: 300px;
    background-image: url(../assets/img/jumbotron.jpg);
  }



  #content {
    position: relative;
    width: 80%;
    margin: 0 auto;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;

    #section-name {
    display: inline-block;
    padding: 10px;
    position: absolute;
    top: -20px;
    background-color: rgb(2, 130, 249);
  }

    #comic {

      width: calc((100% / 6) - 10px);
      margin-right: 10px;
      text-align: center;

      img {
        width: 100px;
      }
    }
  }

  #more-content {
    text-align: center;
    margin-bottom: 10px;

    button {
    padding: 10px 30px;
    cursor: pointer;
    color: white;
    background-color: rgb(2, 130, 249);
  }
  }
  
}

</style>
