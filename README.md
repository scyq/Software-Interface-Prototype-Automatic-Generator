# 软件界面原型自动生成器

**Author:** 

@scyq 

@ShengqiCao

## How to Use

0. 本项目暂时没有搭建后端服务器，前端暂时由GitHub Pages托管，后端请根据提示在本地搭建服务器配合使用。

1. 确保您的机器联网且**安装了Python3**；

2. 安装Python3依赖`fastapi`,`uvicorn`,`jieba`（如果确保机器有以下的库，可跳过）

   1. ```shell
      pip install fastapi
      ```

   2. ```shell
      pip install uvicorn
      ```
      
   3. ```shell
      pip install jieba
      ```

3. 如果只需要查看前端设计和交互，请访问[GitHub Pages](https://scyq.github.io/Software-Interface-Prototype-Automatic-Generator/)。若要使用功能请逐步操作。

   1. Clone 本仓库；

   2. 确保您的电脑**有node**；

   3. 进入项目根目录后，在终端输入

   4. ```shell
      npm install --dependencies
      .... 安装完毕后 ....
      ./run.sh
      ```

   5. 至此，本地后端服务器已经在本地运行了

   6. 在项目根目录下，在终端输入

   7. ```shell
      cd react_component
      npm start 
      ```

   8. 可以看见已经成功打开了新的网页，**hope you like it!**

   以上步骤，对源码和网络熟悉的使用者可以自行修改NaviBar.js中的后端端口和本地服务器的后端端口进行通信。或者将后端代码部署在自己的服务器上进行通信。

   未来会部署在服务器上，免去繁琐的安装过程。

   以上步骤如果出现问题，请务必确保Python3、fastapi、uvicore、jieba、node的正确安装。

## Files

*Ignore the node_modules*

- run.sh 运行本地服务器的脚本



## TO-DO & BUGS

- [x] 当爬取的图片存在不能识别情况，后端无法返回，前端无限卡死
- [x] 功能需求的词义提取
- [x] 功能词库的扩充 (Part)
- [x] 网站类型的标注 (Part)
- [x] 预览内容的及时变更
- [x] 颜色的渲染（primary 和 secondary 的选择，参考material-ui的实现）
- [ ] 根据网站类型标注的多种布局
- [x] 后端分开识别内容（功能提取不需要下载图片）
- [ ] 清除图片cache

## Framework

- React
  - Material-UI
- fastapi
- http-server
- jieba

