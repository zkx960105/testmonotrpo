/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    zkxmonitor?: any
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}