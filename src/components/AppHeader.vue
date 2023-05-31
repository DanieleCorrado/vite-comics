<script>
export default {
  name: "AppHeader",
}
</script>

<template>

  <header>

    <a href="#">
      <img src="../assets/img/dc-logo.png" alt="">
    </a>

    <nav>

      <ul>
        <li>
          <a href="#">
            CHARACTERS
          </a>
        </li>
        <li>
          <a href="#">
            COMICS
          </a>
        </li>
        <li>
          <a href="#">
            MOVIES
          </a>
        </li>
        <li>
          <a href="#">
            TV
          </a>
        </li>
        <li>
          <a href="#">
            GAMES
          </a>
        </li>
        <li>
          <a href="#">
            COLLECTIBLES
          </a>
        </li>
        <li>
          <a href="#">
            VIDEOS
          </a>
        </li>
        <li>
          <a href="#">
            FANS
          </a>
        </li>
        <li>
          <a href="#">
            NEWS
          </a>
        </li>
        <li>
          <a href="#">
            SHOP
          </a>
        </li>

      </ul>

    </nav>

  </header>

</template>

<style lang="scss" scoped>

@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

header {
  background-color: white;
  @include center();

  padding: 10px;

  img {
    width: 70%;
  }

  ul {
    list-style: none;
    @include center();

    li a {
      display: inline-block;
      padding: 10px;

      &.active, &:hover{
        border-bottom: 3px solid blue;
      }
    }
  }
}

</style>
