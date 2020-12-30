<template>
  <div class="container">
    <div class="header">
      <div class="headerLogo">
        <div class="header-126logo"></div>
        <p>126网易邮箱</p>
      </div>
      <p class="headerTitle">你的专业电子邮局</p>
      <div class="headerNav">
        <a v-for="(a, index) in hrefList" :key="index" :href="a.href" :class="index==4?'separation-line':''">{{a.name}}</a>
      </div>
    </div>
    <div class="main" id="mainBg">
      <div class="main-inner" id="mainCnt"></div>
    </div>
    <div id="footer" class="m-footer">
      <div class="footer-main">
        <div class="footer-nav">
          <a v-for="(b, bdex) in footerList" :key="bdex" :href="b.href">{{b.name}}</a>
        </div>
        <div class="footer-certification">
          <span class="copyright">网易公司版权所有©1997-2020</span>
          <a class="icp" href="http://beian.miit.gov.cn/">&nbsp;&nbsp;&nbsp;ICP备案 粤B2-20090191-13</a>
          <span class="copyright"><img src="https://mimg.127.net/p/images/logo/gonganlogo.png" style="position: relative;top: 4px;vertical-align: baseline;"/> 粤公网安备 44010602000311 </span>
          <span class="copyright">增值电信业务许可证 粤B2-20090191 B2-20090058</span>
          <span class="copyright" style="color: #ccc;">（数据来源：艾媒邮箱报告）</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      hrefList: [
        {name: "企业邮箱", href: "https://qiye.163.com/?from=M126_LOGIN"},
        {name: "VIP邮箱", href: "https://vipmail.163.com/?from=fmail"},
        {name: "邮箱会员", href: "https://v.mail.163.com/?utm_source=126loginnav"},
        {name: "海外用户登录", href: "https://hw.mail.163.com/#126"},
        {name: "官方App", href: "https://mail.163.com/dashi/dlpro.html?from=mail11"},
        {name: "帮助", href: "https://help.mail.163.com"},
        {name: "登录反馈", href: "https://help.mail.163.com/newfeedback.do?m=add&id=31"}
      ],
      footerList: [
        {name: "网易首页", href: "https://www.163.com/"},
        {name: "网易严选", href: "https://you.163.com/"},
        {name: "网易有钱", href: "https://qian.163.com"},
        {name: "政府公益热线", href: "https://help.mail.163.com/faqDetail.do?code=d7a5dc8471cd0c0e8b4b8f4f8e49998b374173cfe9171305fa1ce630d7f67ac2842e8b50ff6a4ebb"},
        {name: "隐私政策", href: "https://reg.163.com/agreement_mobile_ysbh_wap.shtml?v=20171127"},
        {name: "儿童隐私政策", href: "https://hc.reg.163.com/iTerm/doc.html?id=347"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
html{
  /*隐藏滚动条，当IE下溢出，仍然可以滚动*/
  -ms-overflow-style:none;
  /*火狐下隐藏滚动条*/
  overflow:-moz-scrollbars-none;
}
::-webkit-scrollbar{
  display:none;
}
.headerLogo, .headerNav {
  position: absolute;
}
.container {
  width: 100%;
  height: auto;
  overflow-x: hidden;
  overflow-y: scroll;
  color: #000;
  background: #fff;
  font-size: 12px;
  line-height: 166.6%;
  text-align: center;
  .header {
    padding: 0 40px;
    height: 70px;
    position: relative;
    z-index: 2;
    overflow: hidden;
    .headerLogo {
      top: 20px;
      left: 40px;
      .header-126logo {
        display: inline-block;
        width: 144px;
        height: 32px;
        background: url("../assets/img/logo.png") 50% no-repeat;
        background-size: 100% 100%;
      }
      p {
        display: none;
      }
    }
    .headerTitle {
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      width: 156px;
      display: block;
      position: absolute;
      top: 20px;
      left: 204px;
      border-left: 1px solid #ccc;
      color: #888;
    }
    .headerNav {
      top: 27px;
      right: 40px;
      text-align: right;
      line-height: 17px;
      a {
        padding-left: 12px;
        display: inline-block;
        vertical-align: middle;
        color: #666;
        font-size: 12px;
        text-decoration: none;
        &.separation-line:after {
          content: "";
          display: inline-block;
          vertical-align: middle;
          margin-top: -2px;
          margin-left: 12px;
          width: 1px;
          height: 12px;
          background-color: #c2c2c2;
          font-size: 0;
        }
      }
    }
  }
  .main {
    background-color: rgb(235, 239, 255);
    height: 640px;
    position: relative;
    min-width: 1100px;
    .main-inner {
      background-image: url(https://mail-activity.nosdn.127.net/b8c0ac34-ac30-4589-b0b7-a69c1ea87fbc);
      height: 640px;
      position: relative;
      width: 100%;
      clear: both;
      background-repeat: no-repeat;
      background-position: top;
    }
  }
  .m-footer {
    padding-top: 50px;
    .footer-nav {
      line-height: 24px;
      font-size: 0;
      a {
        display: inline-block;
        margin-left: 10px;
        color: #666;
        font-size: 12px;
        text-decoration: none;
      }
      a:before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        margin-top: -2px;
        margin-right: 10px;
        width: 1px;
        height: 12px;
        background: #cecece;
      }
      a:first-child:before {
        display: none;
      }
    }
    .footer-certification {
      line-height: 24px;
      .copyright {
        margin-left: 8px;
        display: inline-block;
        color: #666;
        font-size: 12px;
        span {
          display: inline-block;
        }
      }
      a {
        display: inline-block;
        text-decoration: none;
        color: #848585;
      }
    }
  }
}
</style>
