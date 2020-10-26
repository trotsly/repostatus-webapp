<template>
  <div id="footer">
    <div class="footer-container container-fluid col-lg-8 col-sm-12">
      <div class="copyright">
        © 2020 Trotsly. All rights reserved.
      </div>
      <div class="links">
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="">Terms of Use</a>
          </li>
          <li class="list-inline-item">
            <a href="">API</a>
          </li>
          <li class="list-inline-item">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
#footer {
  .footer-container {
    margin-top: 5em;
    //border-top: 1px solid $grey;
    display: flex;
    justify-content: space-between;
    padding-top: 2.5em;
    padding-bottom: 2.5em;

    .copyright,
    .links {
      color: $green;
    }

    .links {
      .list-inline-item {
        margin: 0 15px;

        a {
          color: $green;
          transition: 0.2s ease;

          &:hover {
            color: $ming;
            transition: 0.2s ease;
          }
        }
      }
    }

    @media only screen and (max-width: 878px) {
      flex-direction: column;
      padding: 1.5em 0;

      .copyright {
        margin-bottom: 1em;
      }
    }
  }
}
</style>
