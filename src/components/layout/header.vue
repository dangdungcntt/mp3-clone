<template>
  <header>
    <div class="container group">
      <div class="logo">
        <a href="/" title="Zing MP3 - Đỉnh cao âm nhạc" class="hide-text">
          <img src="/static/images/logo.png" alt="Zing MP3 - Đỉnh cao âm nhạc" />
        </a>
      </div>
      <div id="sug" class="section-search">
        <form method="get" class="search">
          <input type="text" name="q" placeholder="Nhập nội dung cần tìm" class="input-txt" autocomplete="off">
          <span class="input-btn">
                        <button type="submit" class="zicon btn hide-text">Tìm kiếm</button>
                    </span>
        </form>
        <div id="sugResult" class="fn-result suggestion-2 none">
          <ul>
            <li id="sugTopKeyword" class="none">
              <ul class="fn-list" style="cursor: pointer;">
                <li id="tplTopKeyword" class="none fn-item">
                  <div class="meta-search">
                    <a class="ellipsis pad-top-5">
                      <span class="fn-name fn-highlight"></span>
                    </a>
                  </div>
                </li>
              </ul>
            </li>
            <li id="sugTop" class="none">
              <div class="title-row">
                <span class="ics zicon"></span>Top Kết Quả</div>
              <ul class="fn-list">
              </ul>
            </li>
            <li id="sugArtist" class="none">
              <div class="title-row">
                <span class="ics zicon ics-artist"></span>Nghệ Sĩ</div>
              <ul class="fn-list">
                <li id="tplSugArtist" class="none fn-item">
                  <a class="fn-link track-log" href="#">
                    <div class="meta-search">
                      <img class="fn-thumb">
                      <span class="fn-name fn-highlight"></span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li id="sugSong" class="none">
              <div class="title-row">
                <span class="ics zicon ics-song"></span>Bài Hát</div>
              <ul class="fn-list">
                <li id="tplSugSong" class="none fn-item">
                  <a class="fn-link track-log" href="#">
                    <div class="meta-search">
                      <p class="ellipsis pad-top-5">
                        <span class="fn-name fn-highlight"></span>
                        <br>
                        <span class="fn-artist fn-highlight txt-info"></span>
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li id="sugAlbum" class="none">
              <div class="title-row">
                <span class="ics zicon ics-album"></span>Album</div>
              <ul class="fn-list">
                <li id="tplSugAlbum" class="none fn-item">
                  <a class="fn-link track-log" href="#">
                    <div class="meta-search">
                      <img class="fn-thumb">
                      <p class="ellipsis pad-top-5">
                        <span class="fn-name fn-highlight"></span>
                        <br>
                        <span class="fn-artist fn-highlight txt-info"></span>
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>

            <li id="sugVideo" class="none">
              <div class="title-row">
                <span class="ics zicon ics-video"></span>Video</div>
              <ul class="fn-list">
                <li id="tplSugVideo" class="none fn-item">
                  <a class="fn-link track-log" href="#">
                    <div class="meta-search">
                      <img class="fn-thumb">
                      <p class="ellipsis pad-top-5">
                        <span class="fn-name fn-highlight"></span>
                        <br>
                        <span class="fn-artist fn-highlight txt-info"></span>
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <ul class="jumper-link pull-left">
        <li class="active">
          <a href="#" title="Zing MP3" target="_blank" rel="nofollow">MP3</a>
        </li>
        <li>
          <a href="#" title="Zing News" target="_blank" rel="nofollow">NEWS</a>
        </li>
        <li>
          <a href="#" title="Zing TV" target="_blank" rel="nofollow">TV</a>
        </li>
      </ul>
      <div class="nav-account pull-right fn-guestbox">
        <a class="fn-login" href="#" title="Đăng nhập">Đăng nhập</a>
      </div>
      <div class="overlay none" id="loginBox">
        <div class="box-popup no-padding">
          <h3 class="title-pop">Đăng nhập</h3>
          <div class="login-form fn-content"><div class="login-zalo sync-zalo"> <a href="https://id.zalo.me/account?continue=https://mp3.zing.vn/" class="button-login-zalo">Đăng nhập bằng Zalo</a><p class="tor">Vui lòng chuyển đổi kho nhạc cũ và thông tin VIP từ Zing ID sang tài khoản Zalo</p><a href="http://asset.mp3.zing.vn" class="btn btn-sync">Chuyển đổi nhạc sang Zalo</a></div></div>
          <span class="close fn-close" data-box="#loginBox"></span>
        </div>
      </div>
      <div id="userBox" class="user-section pull-right none fn-userbox">
        <a href="#" class="zicon icon-vip fn-vip none"></a>
        <div class="user-jump">
          <img height="20px" class="fn-thumb" src="">
          <a href="#" class="name-log">
            Cá nhân
            <i class="icon-s-arrow"></i>
          </a>
          <div class="tip-dropdown">
            <span class="arr-top"></span>
            <div class="avt-header">
              <a class="fn-profile" href="#" rel="nofollow" title="Nhạc cá nhân">
                <img height="80px" class="fn-thumb" src="">
              </a>
            </div>
            <ul>
              <li>
                <a class="fn-profile" target="_blank" rel="nofollow" href="#" title="Nhạc cá nhân">
                  <i class="zicon icon-human-round"></i>
                  Nhạc cá nhân
                </a>
              </li>
              <li>
                <a class="fn-merge-asset" target="_blank" rel="nofollow" href="http://asset.mp3.zing.vn" title="Chuyển nhạc sang Zalo">
                  <i class="zicon icon-human-round" style="background-position: 3px 6px;background-image: url(/static/images/ic-sync.png);"></i>
                  Chuyển nhạc sang Zalo
                </a>
              </li>
              <li>
                <a class="fn-logout" href="#" title="Thoát">
                  <i class="zicon icon-door"></i>
                  Đăng xuất
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="btn-upgrade-vip1 fn-viprequire" data-step="2">
                  Nâng cấp VIP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: "layout-header"
    }
</script>

<style scoped>

</style>
