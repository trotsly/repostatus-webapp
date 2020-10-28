<template>
  <div id="nav" v-if="['NotFound'].indexOf($route.name)">
    <div class="top-bar">
      <div class="brand">
        RepoStatus
      </div>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/support" class="highlight-link">Support</router-link>
      </div>
      <div id="collapsed">
        <button class="menu" @click="expandBar()">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </button>
      </div>
    </div>
    <div class="expanded">
      <div class="py-5" id="expanded-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/support" class="highlight-link">Support</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data: () => {
    return {
      isClicked: false
    };
  },
  methods: {
    expandBar() {
      /**
       * Expand the bar and show the collapsed navbar
       *
       * Method only to be called on click of the menu
       * button.
       */
      if (!this.isClicked) this.toX();
      else this.fromX();
      // Alter the value of isClicked
      this.isClicked = !this.isClicked;
    },
    toX() {
      /**
       * Change the menu icon to X
       *
       * The menu icon will be change to X from three lines.
       * The middle line will be removed and the other ones
       * are gonna be rotated in order to make it look like
       * an X icon
       */
      const lines = document
        .getElementsByClassName("menu")[0]
        .getElementsByClassName("line");
      lines[1].classList.remove("hide-mid-reverse");
      lines[0].classList.remove("x-1-reverse");
      lines[2].classList.remove("x-2-reverse");
      lines[1].classList.add("hide-mid");
      lines[0].classList.add("x-1");
      lines[2].classList.add("x-2");
      // Disable scroll on body
      document.querySelector("body").style.overflow = "hidden";
      // Show the expanded menu
      var collapsedList = document.getElementsByClassName("expanded")[0];
      collapsedList.classList.add("slide-down-anim");
      // Add animation to all the span and add incremented delay for each
      document
        .getElementById("expanded-links")
        .querySelectorAll("a")
        .forEach((el, index) => {
          el.classList.add("slide-up");
          el.style.animationDelay = `${index * 0.2 + 0.5}s`;
        });
    },
    fromX() {
      const lines = document
        .getElementsByClassName("menu")[0]
        .getElementsByClassName("line");
      lines[1].classList.remove("hide-mid");
      lines[0].classList.remove("x-1");
      lines[2].classList.remove("x-2");
      lines[1].classList.add("hide-mid-reverse");
      lines[0].classList.add("x-1-reverse");
      lines[2].classList.add("x-2-reverse");
      // Disable scroll on body
      document.querySelector("body").style.overflow = "visible";
      // Hide the expanded menu
      var collapsedList = document.getElementsByClassName("expanded")[0];
      collapsedList.classList.remove("slide-down-anim");
      document
        .getElementById("expanded-links")
        .querySelectorAll("a")
        .forEach(el => {
          el.classList.remove("slide-up");
        });
    },
    imitateFromX() {
      /**
       * When the menu is expanded and a link is
       * clicked, we need to make sure that the
       * menu is collapsed again.
       *
       * In order to do that, we're gonna imitate
       * a button click on the menu button.
       */
      this.fromX();
      this.isClicked = false;
    }
  },
  updated() {
    this.imitateFromX();
  }
};
</script>

<style lang="scss">
#nav {
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    border-bottom: 1px solid $grey;
    .brand {
      font-weight: 400;
      font-size: 20px;
    }
    .links {
      a {
        margin-right: 25px;
        text-decoration: none;
        font-size: 18px;
        color: $green;
        &:hover {
          color: $ming;
        }
        &.router-link-exact-active {
          color: $ming;
        }
      }
    }
    #collapsed {
      display: none;
    }
    @media only screen and (max-width: 768px) {
      padding: 10px 20px;
      .links {
        display: none;
      }
      #collapsed {
        display: block;
      }
    }
  }
  .expanded {
    position: fixed;
    width: 100%;
    left: 0;
    height: 0vh;
    top: 5rem;
    z-index: 3;
    padding-top: 5rem;
    background: #fff;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 35px;
    visibility: hidden;
    a {
      display: block;
      margin-top: 30px;
      text-decoration: none;
      color: $green;
      &:hover {
        color: $ming;
      }
      &.router-link-exact-active {
        color: $ming;
      }
    }
  }

  .highlight-link {
    @extend .rounded-cust-sm;
    padding: 5px 10px;
    color: $black !important;
    background: $green;

    &:hover {
      background: darken($green, 5);
    }
  }
}
</style>
