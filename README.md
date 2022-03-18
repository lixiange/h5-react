This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run upload`

将打包后的 build 文件夹上传到对应的阿里云文件夹中，实现自动化上传。通过打包命令中的不同环境变量上传测试版本和正式版本。

### 适配方案
使用 vw 作为样式大小进行适配 并且 使用postcss-px-to-viewport 进行尺寸单位的自动转换。
### 实现1px 方案
具体方式在 './src/index.css/' 中可查看
### 处理元素容器宽高比
使用 postcss-aspect-ratio-mini
### html 生成图片方案 
使用 html2canvas
### 入口地址
http://tinyurl.com/tax86ub


### 框架实现功能：
1、h5的tabbar功能，可以根据每个页面是否有tabbar来进行配置
2、在route渲染之前封装了高阶函数，可以整体判断应用是否登录，未登录返回登录页，也可以通过传参来判断指定页面的登录态。统计uv,pv
3、整体封装了微信分享，可以在路由页面传参来控制每个页面的分享功能
4、封装了微信静默授权高阶函数
5、可以通过指定页面地址上的path参数来判断初始渲染哪个页面，一般可以应用于微信分享，也可以用于多个子项目共用一个react项目的情况
6、使用`react-app-rewired`对webpack进行扩展，扩展文件写在`config-overrides.js`中,vw配置在`postcss.config.js`中

### 微信授权
静默授权封装了两种方式
1、重定向到后端，后端在重定向到微信服务器。 `wechatAuthorization.jsx`<br/>
2、重定向到微信服务器，重定向地址为后端地址，后端通过code去微信服务器获取信息后将信息存在后端，然后将openid放在cookie中重定向到前端，前端请求接口是调用getOpenid方法，如果openid被清除就重新调用授权接口（少了一次重定向）

### 样式
采用`scss` + `classNames`来实现，classNames可以动态修改样式名，为每一个文件的样式添加随机字符串，防止页面之间样式影响。<br/>
static目录中封装了scss的@mixin混入，对于通用的css部分可以直接页面引入传值。减少css代码量

### 错误处理

6、封装了axios错误处理，/request/ajaxError.js,可以对axios请求错误进行统一处理和错误日志上报。
7、整体项目JS错误使用ErrorBoundy进行错误捕获，上报服务器。同时渲染错误页面，防止页面白屏。


### 状态管理
redux+immutable

