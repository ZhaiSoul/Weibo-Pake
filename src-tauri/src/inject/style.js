window.addEventListener('DOMContentLoaded', _event => {

  const loadCss = `
    body {
      text-align: center;
      display: flex;
      flex-direction: column-reverse;
      height: 50%;
      line-height: 55px;
      font-weight: 800;
      overflow: hidden;
    }

    @keyframes breathing {
      0% {
        transform: scale(1);
        opacity: 0.5;
      }
      50% {
        transform: scale(1.2);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0.5;
      }
  `;

  const css = `

  .Nav_wrap_gHB1a {
    display: block;
    position: fixed;
    width: 80px;
    height: 100% !important;
    border-top: none;
  }

  .Index_top_3Tw6o {
    border-color: var(--weibo-top-nav-panel-bd); background-color: var(--weibo-top-nav-panel-bgColor);
  }

  .Nav_main_UAKJF {
    display: block;
    height: 100%;
  }

  .Nav_mid_5pisP {
    height: 70%;
    width: 80px;
    display: block;
    padding-top: 80px;
    margin-left: 10px;
  }

  .Ctrls_main_35c80 .woo-tab-nav {
    display: block;
    position: absolute;
  }
  
  .Ctrls_alink_1L3hP {
    display: block;
    margin-top: 50px;
  }

  .Nav_left_cbXXA {
    display: flex !important;
    position: fixed !important;
    left: 20px !important;
  }

  .Nav_panel_YI3-j {
    padding-left: 0;
  }

  .Frame_side_3G0Bf {
    display: none;
  }

  .Ctrls_item_3KzNH {
    width: 40px !important;
  }

  .wbpro-side-copy {
    display: none;
  }

  .Frame_top_2ybWw {
    margin-bottom: var(--gap-width);
    border-color: var(--weibo-top-nav-panel-bd);
    background-color: var(--weibo-top-nav-panel-bgColor);
  }

  .Nav_logo_1BwBq {
    height: 46px;
    background: url(http://www.sinaimg.cn/blog/developer/wiki/LOGO_64x64.png) 0 0 no-repeat;
    background-size: 36px;
    margin-top: 25px;
  }

  .Nav_right_pDw0F {
    padding-left: 0px !important;
    margin-left: 0 !important;
    right: 25px !important;
  }

  .woo-pop-down.woo-pop-end {
    left: 200px;
    top: -80px;
  }

  .Nav_popcon__F1hb .woo-pop-wrap .woo-pop-end {
    margin-left: 100px !important;
  }

  `;
  const styleElement = document.createElement('style');
  if (window.location.host === 'login.sina.com.cn') {
    const logoDiv = document.createElement('div');
    logoDiv.style = "width: 100%;display: flex;justify-content: center; animation: breathing .8s infinite;";
    const logo = document.createElement('div');
    logo.style = 'background: url("http://www.sinaimg.cn/blog/developer/wiki/LOGO_64x64.png") no-repeat;height: 64px;width: 64px;';
    logoDiv.appendChild(logo);
    styleElement.innerHTML = loadCss;
    document.body.appendChild(logoDiv);
  } else {
    styleElement.innerHTML = css;
  }
  document.head.appendChild(styleElement);
  document.getElementsByClassName('Nav_logo_1BwBq')[0].innerHTML = "";
});
