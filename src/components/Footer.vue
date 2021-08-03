<<template>
  <div class="footer">
    <h5 class="h51">
      In case of any query, email us at
      <a class="sub1">subscribe@hotstar.com</a>
    </h5>
    <router-link to="About" class="alink">About Disney+Hotstar</router-link>
    <a href="https://www.hotstar.com/in/terms-of-use" class="alink"
      >Tearms of Use</a
    >
    <a href="https://www.hotstar.com/in/privacy-policy" class="alink"
      >Privacy Policy</a
    >
    <a href="https://help.hotstar.com/in/en/support/home" class="alink">FAQ</a>
    <a href="https://help.hotstar.com/in/en/support/home" class="alink">
      Feedback</a
    >
    <a href="https://help.hotstar.com/in/en/support/tickets/new" class="alink"
      >Careers</a
    >
    <h5 class="h52">
      © 2021 STAR. All Rights Reserved. HBO, Home Box Office and all related
      channel and programming logos are service marks of, and all related
      programming visuals and elements are the property of, Home Box Office,
      Inc. All rights reserved.
    </h5>
    <div class="foot">
      <div class="fb">
        <h4 class="con">Connect with us</h4>
        <a href="https://www.facebook.com">
          <img src="../assets/fb.jpeg" width="40" height="40" class="imgfb"
        /></a>

        <a href="#"
          ><img src="../assets/twitter.jpeg" width="40" height="40" class="twt"
        /></a>
      </div>
      <div class="d1">
        <h4 class="down">Disney+Hotstar App</h4>
        <a href="#">
          <img src="../assets/gplay.jpeg" width="160" height="40" class="gplay"
        /></a>

        <a href="#">
          <img src="../assets/dplay.jpeg" width="160" height="40" class="dplay"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  background: black;
  height: fit-content;
}
.h51 {
  font-size: 14px;
  margin: 13px 20px;
  padding: 15px 0px 5px 0px;
}
.alink {
  font-size: 14px;
  color: white;
  text-decoration: none;

  margin: 0px 20px;
}
.h52 {
  font-size: 14px;
  margin: 8px 20px;
  width: 60%;
  overflow-wrap: break-word;
}
.sub1 {
  color: white;
  font-size: 14px;
  text-decoration: none;
  margin: 10px;
}
.con {
  font-size: 14px;
  margin: 13px 20px;
}

.imgfb {
  margin: 0px 20px;
  border-radius: 5px;
}
.down {
  font-size: 14px;
  margin: 13px 15px;
}

.d1 {
  margin: 0px 0px 0px 200px;
  margin-top: -80px;
}
.gplay {
  margin: 0px 10px;
  border-radius: 5px;
}
.foot {
  margin: 10px 0px 0px 0px;
  padding: 5px;
}
.twt {
  border-radius: 5px;
}
.dplay {
  border-radius: 5px;
}
@media (min-width: 100px) and (max-width: 400px) {
  .d1 {
    margin: 0px 40px 0px 0px;
    margin-top: 10px;
  }
  .dplay {
    margin: 10px 20px;
  }
  .gplay {
    margin: 0px 20px;
  }
  .h52 {
    font-size: 14px;
    margin: 13px 20px;
    width: 85%;
    overflow-wrap: break-word;
  }
}
@media (min-width: 401px) and (max-width: 540px) {
  .dplay {
    margin-top: 10px;
  }
}
</style>
