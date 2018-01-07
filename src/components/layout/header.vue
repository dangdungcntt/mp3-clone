<template>
  <header>
    <div class="container group">
      <div class="logo">
        <a href="/" title="Zing MP3 - Đỉnh cao âm nhạc" class="hide-text">
          <img src="/static/images/logo.png" alt="Zing MP3 - Đỉnh cao âm nhạc"/>
        </a>
      </div>
      <div id="sug" class="section-search">
        <div class="search">
          <input type="text" placeholder="Nhập nội dung cần tìm" class="input-txt" autocomplete="off"
                 v-model="keyword"
                 @focus="focusing = true"
          >
          <span class="input-btn" style="right: 35px;" v-if="keyword.length > 0 && focusing">
              <button class="zicon btn hide-text" style="background-position: -22px -2258px;" @click="focusing = !focusing">Xóa</button>
          </span>
          <span class="input-btn">
              <button class="zicon btn hide-text">Tìm kiếm</button>
          </span>
        </div>
        <div id="sugResult" class="fn-result suggestion-2" v-if="keyword.length > 0 && focusing">
          <img v-if="searching"
               style="width: 40px; margin-left: 150px;"
               src="/static/images/progress-bar-facebook-loader.gif" alt="">
          <ul v-else-if="!_.isEqual(sugData, {})">
            <li id="sugTop" v-if="_.has(sugData, 'top')">
              <div class="title-row">
                <span :class="`ics zicon ${getIconOfType(_.get(sugData, 'top.type'))}`"></span>Top Kết Quả
              </div>
              <ul class="fn-list">
                <li class="fn-item">
                  <a class="fn-link track-log"
                     :href="`/${_.get(sugData, 'top.type')}/${stripUnicode(_.get(sugData, 'top.name')+'-'+_.get(sugData, 'top.artist'))}/${_.get(sugData, 'top.id')}.html`"
                     :title="_.get(sugData, 'top.name')+ ' - ' + _.get(sugData, 'top.artist')">
                    <div class="meta-search">
                      <p class="ellipsis pad-top-5">
                        <span class="fn-name">{{_.get(sugData, 'top.name')}}</span>
                        <br>
                        <span class="fn-artist txt-info">{{_.get(sugData, 'top.artist')}}</span>
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li id="sugSong" v-if="_.has(sugData, 'song') && _.get(sugData, 'song').length > 0">
              <div class="title-row">
                <span class="ics zicon ics-song"></span>Bài Hát
              </div>
              <ul class="fn-list">
                <li id="tplSugSong" class="fn-item" v-for="song in _.get(sugData, 'song')" :key="song.id">
                  <a class="fn-link track-log" :href="`/song/${stripUnicode(_.get(song, 'name')+'-'+_.get(song, 'artist'))}/${_.get(song, 'id')}.html`">
                    <div class="meta-search">
                      <p class="ellipsis pad-top-5">
                        <span class="fn-name fn-highlight">{{_.get(song, 'name')}}</span>
                        <br>
                        <span class="fn-artist fn-highlight txt-info">{{_.get(song, 'artist')}}</span>
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>

            <li id="sugAlbum" v-if="_.has(sugData, 'album') && _.get(sugData, 'album').length > 0">
              <div class="title-row">
                <span class="ics zicon ics-album"></span>Album
              </div>
              <ul class="fn-list">
                <li id="tplSugAlbum" class="fn-item" v-for="album in _.get(sugData, 'album')" :key="album.id">
                  <a class="fn-link track-log" :href="`/album/${stripUnicode(_.get(album, 'name')+'-'+_.get(album, 'artist'))}/${_.get(album, 'id')}.html`">
                    <div class="meta-search">
                      <img class="fn-thumb" :src="_.has(album, 'thumb') ? `https://zmp3-photo-td.zadn.vn/${_.get(album, 'thumb')}` : `https://zmp3-photo-td.zadn.vn/thumb/94_94/default`">
                      <p class="ellipsis pad-top-5">
                        <span class="fn-name fn-highlight">{{_.get(album, 'name')}}</span>
                        <br>
                        <span class="fn-artist fn-highlight txt-info">{{_.get(album, 'artist')}}</span>
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>

            <li id="sugVideo" v-if="_.has(sugData, 'video') && _.get(sugData, 'video').length > 0">
              <div class="title-row">
                <span class="ics zicon ics-video"></span>Video
              </div>
              <ul class="fn-list">
                <li id="tplSugVideo" class="fn-item" v-for="video in _.get(sugData, 'video')" :key="video.id">
                  <a class="fn-link track-log" :href="`/video/${stripUnicode(_.get(video, 'name')+'-'+_.get(video, 'artist'))}/${_.get(video, 'id')}.html`">
                    <div class="meta-search">
                      <img class="fn-thumb" :src="_.has(video, 'thumb') ? `https://zmp3-photo-td.zadn.vn/${_.get(video, 'thumb')}` : `https://zmp3-photo-td.zadn.vn/thumb/94_94/default`">
                      <p class="ellipsis pad-top-5">
                        <span class="fn-name fn-highlight">{{_.get(video, 'name')}}</span>
                        <br>
                        <span class="fn-artist fn-highlight txt-info">{{_.get(video, 'artist')}}</span>
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>

            <li id="sugArtist" v-if="_.has(sugData, 'artist') && _.get(sugData, 'artist').length > 0">
              <div class="title-row">
                <span class="ics zicon ics-artist"></span>Nghệ Sĩ
              </div>
              <ul class="fn-list">
                <li id="tplSugArtist" class="fn-item" v-for="artist in _.get(sugData, 'artist')" :key="artist.id">
                  <a class="fn-link track-log" :href="`/artist/${_.get(artist, 'aliasName')}`">
                    <div class="meta-search">
                      <img class="fn-thumb" :src="_.has(artist, 'thumb') ? `https://zmp3-photo-td.zadn.vn/${_.get(artist, 'thumb')}` : `https://zmp3-photo-td.zadn.vn/thumb/94_94/default`">
                      <span class="fn-name fn-highlight">{{_.get(artist, 'name')}}</span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div v-else style="padding: 15px">Không có kết quả cho "{{keyword}}"</div>
        </div>
      </div>
      <!--<ul class="jumper-link pull-left">-->
        <!--<li class="active">-->
          <!--<a href="#" title="Zing MP3" target="_blank" rel="nofollow">MP3</a>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="#" title="Zing News" target="_blank" rel="nofollow">NEWS</a>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="#" title="Zing TV" target="_blank" rel="nofollow">TV</a>-->
        <!--</li>-->
      <!--</ul>-->
      <!--<div class="nav-account pull-right fn-guestbox">-->
        <!--<a class="fn-login" href="#" title="Đăng nhập">Đăng nhập</a>-->
      <!--</div>-->
      <!--<div class="overlay none" id="loginBox">-->
        <!--<div class="box-popup no-padding">-->
          <!--<h3 class="title-pop">Đăng nhập</h3>-->
          <!--<div class="login-form fn-content">-->
            <!--<div class="login-zalo sync-zalo"><a href="https://id.zalo.me/account?continue=https://mp3.zing.vn/"-->
                                                 <!--class="button-login-zalo">Đăng nhập bằng Zalo</a>-->
              <!--<p class="tor">Vui lòng chuyển đổi kho nhạc cũ và thông tin VIP từ Zing ID sang tài khoản Zalo</p><a-->
                <!--href="http://asset.mp3.zing.vn" class="btn btn-sync">Chuyển đổi nhạc sang Zalo</a></div>-->
          <!--</div>-->
          <!--<span class="close fn-close" data-box="#loginBox"></span>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div id="userBox" class="user-section pull-right none fn-userbox">-->
        <!--<a href="#" class="zicon icon-vip fn-vip none"></a>-->
        <!--<div class="user-jump">-->
          <!--<img height="20px" class="fn-thumb" src="">-->
          <!--<a href="#" class="name-log">-->
            <!--Cá nhân-->
            <!--<i class="icon-s-arrow"></i>-->
          <!--</a>-->
          <!--<div class="tip-dropdown">-->
            <!--<span class="arr-top"></span>-->
            <!--<div class="avt-header">-->
              <!--<a class="fn-profile" href="#" rel="nofollow" title="Nhạc cá nhân">-->
                <!--<img height="80px" class="fn-thumb" src="">-->
              <!--</a>-->
            <!--</div>-->
            <!--<ul>-->
              <!--<li>-->
                <!--<a class="fn-profile" target="_blank" rel="nofollow" href="#" title="Nhạc cá nhân">-->
                  <!--<i class="zicon icon-human-round"></i>-->
                  <!--Nhạc cá nhân-->
                <!--</a>-->
              <!--</li>-->
              <!--<li>-->
                <!--<a class="fn-merge-asset" target="_blank" rel="nofollow" href="http://asset.mp3.zing.vn"-->
                   <!--title="Chuyển nhạc sang Zalo">-->
                  <!--<i class="zicon icon-human-round"-->
                     <!--style="background-position: 3px 6px;background-image: url(/static/images/ic-sync.png);"></i>-->
                  <!--Chuyển nhạc sang Zalo-->
                <!--</a>-->
              <!--</li>-->
              <!--<li>-->
                <!--<a class="fn-logout" href="#" title="Thoát">-->
                  <!--<i class="zicon icon-door"></i>-->
                  <!--Đăng xuất-->
                <!--</a>-->
              <!--</li>-->
              <!--<li>-->
                <!--<a href="#" target="_blank" class="btn-upgrade-vip1 fn-viprequire" data-step="2">-->
                  <!--Nâng cấp VIP-->
                <!--</a>-->
              <!--</li>-->
            <!--</ul>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </header>
</template>

<script>
  import MP3Helper from 'libs/mp3-helpers';
  import StringHelper from 'libs/string-helpers';

  export default {
    name: "layout-header",
    data () {
      return {
        keyword: '',
        sugData: {},
        searching: false,
        focusing: false
      }
    },
    watch: {
      keyword: function () {
        this.searching = true;
        this.search();
      }
    },
    methods: {
      search: _.debounce(async function () {
        this.sugData = await MP3Helper.search({keyword: this.keyword});
        this.searching = false;
      }, 800),
      stripUnicode(str) {
        return StringHelper.stripUnicode(str);
      },
      getIconOfType (type) {
        switch (type) {
          case 'album': return 'ics-album';
          case 'video': return 'ics-video';
          case 'artist': return 'ics-artist';
          default : return 'ics-song';
        }
      }
    }
  }
</script>

<style scoped>

</style>
