<template>
  <footer id="contact">
    <div class="bg-img"></div>
    <div class="wrapper">
      <div class="top">
        <div class="area">
          <div>
            <h1>Get in touch</h1>
            <p></p>
            <ul>
              <li>
                <i class="fas fa-map"></i>
                <a href="https://maps.google.com/?ll=30.3637013,-97.7147485" target="_blank"
                  >1609 Ohlen Rd, Austin, TX 78758</a
                >
              </li>
              <li><i class="fas fa-phone"></i> <a href="tel:(512) 919-6230">(512) 919-6230</a></li>
              <li><i class="fas fa-envelope"></i> <a href="mailto:rudyrexx@gmail.com">rudyrexx@gmail.com</a></li>
              <li>
                <div class="location-social">
                  <a href="https://www.facebook.com/violetcrownjiujitsu" target="_blank"
                    ><i class="fab fa-facebook"></i
                  ></a>
                  <a href="https://www.instagram.com/violetcrownjiujitsu/" target="_blank"
                    ><i class="fab fa-instagram"></i
                  ></a>
                  <a href="https://www.youtube.com/channel/UCmFfQJrReGfSvDP6PVPGGyQ" target="_blank"
                    ><i class="fab fa-youtube"></i
                  ></a>
                  <a href="https://g.page/rudy-rexx-brazilian-jiu-jitsu?share" target="_blank"
                    ><i class="fab fa-google"></i
                  ></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="area">
          <a href="https://g.page/rudy-rexx-brazilian-jiu-jitsu?share" target="_blank"
            ><img src="/img/map.webp" alt="map image"
          /></a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="copy">© Violet Crown Jiu Jitsu</div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  background: $pink-1;
  position: relative;
  .bg-img {
    background: url(/img/img-2.webp) no-repeat center center;
    opacity: 0.1;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-size: cover;
  }
  .wrapper {
    position: relative;
    padding: 1rem 2rem;
    color: white;
    max-width: 1600px;
    margin: 0 auto;
    .top {
      min-height: 400px;
      display: flex;
      align-items: center;
      .area {
        padding: 3rem 0;
        flex: 1;
        &:first-of-type {
          text-align: right;
          > div {
            display: inline-block;
            text-align: left;
            padding-right: 30%;
          }
          h1 {
            padding-bottom: 0.5rem;
          }
          ul {
            li {
              padding: 0.5rem 0;
              i {
                padding-right: 0.7rem;
              }
              a {
                text-decoration: none;
                color: white;
                font-weight: bold;
                font-size: 18px;
              }
              .location-social {
                padding-top: 0.6rem;
                a {
                  font-size: 25px;
                }
              }
            }
          }
        }
        img {
          max-width: 100%;
          width: 700px;
          border-radius: 10px;
        }
      }
      @media (max-width: 965px) {
        .area {
          display: block;
          &:first-of-type {
            text-align: left;
            > div {
              padding-right: 2rem;
            }
          }
        }
        @media (max-width: 800px) {
          flex-wrap: wrap;

          .area {
            padding: 2rem 0;
            flex-basis: 100%;
            &:last-of-type {
              padding-top: 0;
            }
          }
        }
      }
    }
  }

  .bottom {
    position: relative;
    text-align: center;
    padding: 0.7rem 2rem;
    background: white;
    color: $purple-1;
    letter-spacing: 1px;
    .copy {
      position: relative;
    }
  }
}
</style>
