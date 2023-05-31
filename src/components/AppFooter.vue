<script>
export default {
  name: "AppFooter",
}
</script>

<template>

<footer>

  <div id="footer-top">
    <ul>
      <li>
        <a href="#">
          <img src="../assets/img/buy-comics-digital-comics.png" alt="buy digital comics">
          DIGITAL COMICS
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../assets/img/buy-comics-merchandise.png" alt="buy comics merchandise">
          DC MERCHANDISE
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../assets/img/buy-comics-subscriptions.png" alt="buy comics subscriptions">
          SUBSCRIPTION
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../assets/img/buy-comics-shop-locator.png" alt="comics shop locator">
          COMIC SHOP LOCATOR
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../assets/img/buy-dc-power-visa.svg" alt="buy dc power visa">
          DC POWER VISA
        </a>
      </li>
    </ul>
  </div>

  <div id="footer-bottom">

    <div id="info">

      <div class="column">

        <h3>DC COMICS</h3>

        <ul>
          <li>Characters</li>
          <li>Comics</li>
          <li>Movies</li>
          <li>TV</li>
          <li>Games</li>
          <li>Videos</li>
          <li>News</li>
        </ul>

        <h3>SHOP</h3>

        <ul>
          <li>Shop DC</li>
          <li>Shop DC Collectibles</li>
        </ul>

      </div>

      <div class="column">

        <h3>DC</h3>

        <ul>
          <li>Terms Of USe</li>
          <li>Privacy policy(New)</li>
          <li>Ad Chioces</li>
          <li>Advertising</li>
          <li>Jobs</li>
          <li>Subscriptions</li>
          <li>Talent Workshops</li>
          <li>CPSC Certificates</li>
          <li>Ratings</li>
          <li>Shop Help</li>
          <li>Contact Us</li>
        </ul>
      
      </div>

      <div class="column">
        <h3>SITES</h3>
        <ul>
          <li>
            DC
          </li>
          <li>
            MAD Magazine
          </li>
          <li>
            DC Kids
          </li>
          <li>
            DC Universe
          </li>
          <li>
            DC Pover Visa
          </li>
        </ul>
      </div>
    
    </div>



  </div>

  <div id="footer-social">
      <button type="submit">SIGN-UP NOW!</button>
      <div id="socials">
        <h3>FOLLOW US</h3>
        <ul>
        <li>
          <a href="#">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </a>
        </li>
        <li>
          <a href="#">
            <font-awesome-icon icon="fa-brands fa-twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <font-awesome-icon icon="fa-brands fa-youtube" />
          </a>
        </li>
        <li>
          <a href="#">
            <font-awesome-icon icon="fa-brands fa-pinterest" />
          </a>
        </li>
        <li>
          <a href="#">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
          </a>
        </li>
      </ul>

      </div>
  </div>

</footer>

</template>

<style lang="scss">

@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

footer {
  

  background-image: url("../assets/img/dc-logo-bg.png"), url("../assets/img/footer-bg.jpg");
  background-position: 80% 10%, 0% 30%;
  background-repeat: no-repeat, repeat;

  #footer-top {
    background-color: rgb(2, 130, 249);
    padding: 20px;
    @include center();

    ul {
      width: 80%;
      margin: 0 auto;
      @include center();
      list-style: none;

      li {
        text-align: center;
        padding: 0;
      }
    
      li a {
        color: white;
        font-size: 10px;

        img {
          width: 20%;
          margin-right: 10px;
          vertical-align: middle;
        }
      }
    }
  }

  #footer-bottom {

    display: flex;
    
    #info {
      margin-top: 20px;
      width: 50%;
      display: flex;
      justify-content: space-evenly;
      color: rgb(136, 149, 149);

      .column {

        h3 {
        color: white;
        margin-bottom: 10px;
        }

        ul {
        list-style: none;
        margin-bottom: 10px;
        }
      }
    
    }

    img {
      width: 70%;
    }

  }

  #footer-social{
    @include center();
    background-color: rgb(48, 48, 48);
    padding: 10px;

    button {
      padding: 10px;
      border: 1px solid rgb(2, 130, 249);
      color: white;
      background-color: transparent;
      cursor: pointer;
    }

    #socials {
      @include center();

      h3 {
        color: rgb(2, 130, 249);
      }

      ul {
      list-style: none;
      @include center();

      li {
        margin-left: 5px;
        padding: 5px;
        border-radius: 50%;
        background-color: rgb(121, 121, 121);

        &:first-child, &:last-child{
          padding: 5px 8px;
        }
      }

      

    }
    }
  }

}

</style>
