# egg-seo-demo

基于 `node egg` 框架的服务器渲染前端 web 项目原型，前端代码使用 `webpack` 进行编译，前端模块使用 `ejs` 模块语言进行渲染，当然模块语言可以根据自己的喜好来进行替换。

## npm scripts

- 安装依赖：`yarn install`
- 开发调试：开两个窗口，一个编译前端代码 `npm run devFe`，另外一个运行服务器代码 `npm run dev`，浏览器打开 [http://localhost:7001/](http://localhost:7001/)
- 发布前编译：`npm test && npm run build`
- 运行：`npm start`


## 重要目录

```
-- app [服务端代码]
    -- controller [路由控制器]
    -- view [ejs 模板，包含前端代码]
        -- modules [模块]
        -- pages [页面，每个页面建立一个，如：'detail']
    -- config [配置文件]
-- logs [日志]
```


## 参考文档
- [egg](http://eggjs.org)
- [ejs](http://ejs.co/#install)
