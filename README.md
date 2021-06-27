# 将bilibili视频缓存文件从手机上复制到电脑上

## 首先将手机连接电脑
```
adb devices

adb tcpip 8888

adb connect 192.168.*.*:8888

adb devices
```

## 下载项目

### 运行
```
npm install

npm run pull

```
在手机段打开/sdcard/Android/data/tv.danmaku.bili/download/文件夹

### 输入目录

![输入目录](./images/Snipaste_2021-06-27_17-22-54.png)

## 开始复制

