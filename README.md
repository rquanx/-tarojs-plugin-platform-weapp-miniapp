# `@milesjs/plugin-platform-weapp-miniapp`

Taro 插件。用于支持微信多端小程序。

## 使用

#### 1. 配置插件

```js
// Taro 项目配置
module.exports = {
  // ...
  plugins: ['@milesjs/plugin-platform-weapp-miniapp'],
};
```

#### 2. 编译为微信多端小程序

```shell
taro build --type miniapp
taro build --type miniapp --watch
```

#### 其它

##### 平台判断

```js
if (process.TARO_ENV === 'miniapp') {
  // ...
}
```
