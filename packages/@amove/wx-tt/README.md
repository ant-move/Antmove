#### Windows环境如何运行 

- 执行 npm i lerna -g

- 切换到项目根目录

- cd packages/@amove/wx-utils 执行 npm link

- cd packages/@amove/wx 执行 npm link

- cd packages/@amove/wx-tt 执行 npm link @amove/wx-utils @amove/wx

- cd packages/@amove/wx-tt npm link

- 执行 lerna bootstrap 安装依赖

- antmove-cli -t wx2tt

