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
            link N
          </a>
        </li>
        <li>
          <a href="#">
            link N
          </a>
        </li>
        <li>
          <a href="#">
            link N
          </a>
        </li>
        <li>
          <a href="#">
            link N
          </a>
        </li>

      </ul>

    </nav>

  </header>

</template>

<style lang="scss">

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
      text-decoration: none;

      &.active, &:hover{
        border-bottom: 3px solid blue;
      }
    }
  }
}

</style>
