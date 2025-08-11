# how to use? Use it in the following way
# 按以下方式使用
# step1
  monorepo-root/
    └── apps/
        └── weapp/                  # 小程序项目目录
            ├── miniprogram/        # 必须命名为 miniprogram
            │   ├── app.js
            │   └── ...             # 其他小程序文件
            ├── node_modules/       # pnpm 安装后生成的依赖
            ├── package.json        # 小程序专属 package.json
            └── project.config.json # 项目配置文件
  
# step2
 Configure the project.config.json file
 配置project.config.json

 {
    "miniprogramRoot": "miniprogram/",
    "packNpmManually": true,
    "packNpmRelationList": [
        {
        "packageJsonPath": "./package.json",
        "miniprogramNpmDistDir": "./miniprogram/"
        }
    ],
    // 添加以下实验性配置（关键！）
    "experiments": {
        "npmInMiniprogramRoot": true
    }
 }

# step3
 Execute in the apps/weapp/ directory
 在 apps/weapp/ 目录下执行
 ln -s ../node_modules miniprogram/node_modules
 - Windows users use mklink (run CMD with administrator privileges)
 - Windows 用户使用 mklink（管理员权限运行CMD）
 mklink /J miniprogram\node_modules ..\node_modules

# step4
  1.  Delete the build cache miniprogram_npm (if it exists)
  2.  Delete the lock file and node_modules
  3.  Reinstall dependencies
      - pnpm install
  4.  Repeat step three
  5.  In WeChat developer tools:
      - Close the current project
      - Tools -> Clear Cache -> Clear All
      - Reopen the project
      - Tools -> Build npm

  1.  删除构建缓存miniprogram_npm(如果有)
  2.  删除 lock 文件和 node_modules
  3.  重新安装依赖
      - pnpm install
  4.  重复步骤三
  5.  在微信开发者工具中：
      - 关闭当前项目
      - 工具 -> 清除缓存 -> 全部清除
      - 重新打开项目
      - 工具 -> 构建 npm

 # tip:只有单个子包，多个子包的依赖要自己处理打包