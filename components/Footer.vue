<template>
  <footer class="light-font footer-four-columns footer-push">
    <div class="footer-top-bar">
      <div class="container">
        <div class="footer-columns">
          <div class="footer-col">
            <a href="/"><img src="/images/logos/vcjj-logo.png" class="lazyloaded" data-ll-status="loaded" /></a>
          </div>
          <div class="footer-col">
            <h5>About Us</h5>
            <p>
              We are a school that welcomes everyone regardless of skill level or desire to compete. Finding balance
              between self defense and sport BJJ. Most classes on schedule taught by 2nd degree BJJ black belt head
              instructor. Centralized location in Austin.
            </p>
          </div>
          <div class="footer-col">
            <h5>Contact Us</h5>
            <div class="col-indiv-location">
              <div class="location-title">Austin, TX</div>
              <div class="location-address">
                <a href="https://maps.google.com/?ll=30.3637013,-97.7147485" target="_blank"
                  >1609 Ohlen Rd, Austin, TX 78758</a
                >
              </div>
              <div class="location-phone">
                <i class="fas fa-phone"></i> <a href="tel:(512) 919-6230">(512) 919-6230</a>
              </div>
              <div class="location-email">
                <i class="fas fa-envelope"></i> <a href="mailto:rudyrexx@gmail.com">rudyrexx@gmail.com</a>
              </div>
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
            </div>
          </div>
          <div class="footer-col">
            <h5>Navigation</h5>
            <ul id="header-navigation" class="menu">
              <li
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-42"
              >
                <a href="/" aria-current="page">Home</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-511">
                <a href="/about-us/">About Us</a>
              </li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-51">
                <a href="#">Programs</a>
                <ul class="sub-menu">
                  <li class="menu-item menu-item-type-post_type menu-item-object-program menu-item-105">
                    <a href="/program/no-gi-adult-bjj/">No Gi Adult BJJ</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-program menu-item-1011">
                    <a href="/program/muay-thai/">Muay Thai</a>
                  </li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-849">
                    <a href="#">Teen BJJ &amp; MMA (Coming Soon)</a>
                  </li>
                </ul>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-195">
                <a href="/blog/">Blog</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-931">
                <a href="/schedule/">Schedule</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-location menu-item-135">
                <a href="/location/austin-tx/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom-bar">
      <div class="footer-bottom-overlay"></div>
      <div class="container">
        <div class="footer-bottom-bar-left">
          ?? Violet Crown Jiu Jitsu | <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer-col {
  float: left;
  &:first-child {
    margin-bottom: 20px;
    width: 100%;
  }
  &:nth-child(4) {
    ul {
      margin: 0;
      padding: 0;
      li {
        float: left;
        width: 100%;
        list-style-type: none;
        padding: 0 0 5px;
        ul {
          padding: 5px 0 0 30px;
          li {
            float: left;
            width: 100%;
          }
        }
        a {
          color: #fff;
        }
      }
    }
  }
  h5 {
    font-size: 18px;
    text-transform: uppercase;
    width: 100%;
    float: left;
    margin: 0 0 5px;
    color: #fff;
  }
  img {
    max-width: 240px;
    height: auto;
  }
}
.col-indiv-location {
  width: 100%;
  float: left;
  font-size: 13px;
  margin: 0 0 25px;
  .location-address {
    width: 100%;
    float: left;
    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  .location-email {
    width: 100%;
    float: left;
    i {
      color: #fff;
      margin: 0 3px 0 0;
    }
    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
    }
  }
  .location-phone {
    width: 100%;
    float: left;
    margin: 8px 0;
    i {
      color: #fff;
      margin: 0 3px 0 0;
    }
    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
    }
  }
  .location-social {
    width: 100%;
    float: left;
    font-size: 20px;
    margin: 13px 0 0;
    a {
      color: #fff;
      margin: 0 3px;
    }
  }
  .location-title {
    width: 100%;
    float: left;
    font-weight: 700;
    font-size: 15px;
    text-align: left;
    margin: 0 0 5px;
  }
}
footer.light-font {
  color: #fff !important;
  a {
    color: #fff !important;
  }
  .location-title {
    color: #fff;
  }
}
footer {
  float: left;
  width: 100%;
}
.footer-top-bar {
  padding: 40px 0;
}
.footer-bottom-bar {
  float: left;
  width: 100%;
  padding: 20px 0;
  font-size: 13px;
  color: #fff;
  position: relative;
  background: #742480;
  .footer-bottom-overlay {
    position: absolute;
    background: #000;
    opacity: 0.3;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .container {
    position: relative;
    z-index: 2;
  }
  .footer-bottom-bar-left {
    float: left;
    width: 100%;
    margin: 0 0 6px;
    text-align: center;
    a {
      color: #fff !important;
      text-decoration: none !important;
    }
  }
  .footer-bottom-bar-right {
    a {
      text-decoration: none;
      color: #47b965;
      font-weight: 700;
    }
    float: left;
    width: 100%;
    text-align: center;
    img {
      height: 26px;
      width: auto;
      clear: both;
      margin: 7px auto 0;
      display: table;
    }
  }
}
.footer-four-columns {
  background-color: #742480;
  background-image: url(/images/Violet-Crown-Jiu-Jitsu-footer-1-scaled.webp);
  background-size: cover;
  background-position: center;
  color: rgba(255, 255, 255, 0.7);
  a {
    color: white;
    &:hover {
      color: #a42484 !important;
    }
  }
}
@media (min-width: 960px) {
  .footer-col {
    width: 25%;
    padding: 0 40px 0 0;
    &:first-child {
      width: 20%;
      margin: 0;
    }
    &:nth-child(2) {
      width: 40%;
      p {
        margin: 0;
        padding: 0;
        font-size: 15px;
        line-height: 22px;
      }
    }
    &:nth-child(3) {
      width: 20%;
    }
    &:nth-child(4) {
      width: 20%;
    }
    img {
      width: 100%;
    }
  }
  .footer-top-bar {
    padding: 80px 0;
  }
  .footer-bottom-bar {
    .footer-bottom-bar-left {
      float: left;
      width: 50%;
      text-align: left;
      margin: 0;
    }
    .footer-bottom-bar-right {
      float: left;
      width: 50%;
      text-align: right;
      img {
        margin: -5px 0 0 10px;
        float: right;
        clear: none;
        display: inline-block;
      }
    }
  }
}
</style>
