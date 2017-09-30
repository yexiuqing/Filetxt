0-> 全局安装
	npm i -g sir-cli

1-> 进入该文件夹下

 -> sir init

 -> 命名放代码的文件夹名称

 -> Y

2-> 配置钩子函数

	require('babel-core/register') 引入start.js

	->进入当前文件夹

 -> 安装async to generator babel plugin

    npm i babel-plugin-transform-async-to-generator -S

3->配置依赖
   npm i --registry https://registry.npm.taobao.org

4->sir start
