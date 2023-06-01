<script>
export default {
  name: "AppHeader",

  data() {
  return {
    active: 0,
    menu: [
      {
        name: 'CHARACTERS',
        link: '#',
        isActive: false,
      },
      {
        name: 'COMICS',
        link: '#',
        isActive: true,
      },
      {
        name: 'MOVIES',
        link: '#',
        isActive: false,
      },
      {
        name: 'TV',
        link: '#',
        isActive: false,
      },
      {
        name: 'GAMES',
        link: '#',
        isActive: false,
      },
      {
        name: 'COLLECTIBLES',
        link: '#',
        isActive: false,
      },
      {
        name: 'VIDEOS',
        link: '#',
        isActive: false,
      },
      {
        name: 'FANS',
        link: '#',
        isActive: false,
      },
      {
        name: 'NEWS',
        link: '#',
        isActive: false,
      },
      {
        name: 'SHOP',
        link: '#',
        isActive: false,
      },  
      ]
    
    }
  },
methods: {

  changeActivePage(idx) {
    
   this.menu[idx].isActive = true;

   for(let i = 0; i < this.menu.length; i++ ) {
    if(i === idx) {
      this.menu[i].isActive = true;
    } else {
      this.menu[i].isActive = false;

    }
   }
   
  }

}
}


</script>

<template>

  <header>

    <a href="#">
      <img src="../assets/img/dc-logo.png" alt="">
    </a>

    <nav>

      <ul>

        <li v-for="(element, idx) in menu" :key="idx" @click="changeActivePage(idx)">
          <a :href="element.link" :class="element.isActive ? 'active' : ''">
            {{element.name}}
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

    li {
      .active {
        border-color: 1px solid black;
      }

      a {
        display: inline-block;
        padding: 10px;

        &.active, &:hover {
          border-bottom: 3px solid blue;
        }
      }

    }
  }
}

</style>
