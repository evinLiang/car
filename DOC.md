## 组件说明

* tabbar => `底部导航`
    *  home => `首页`
    *  purse => `钱包`
    *  recommend => `推荐`
    *  me => `我的`

* slider => `图片轮播`
* header => `头部信息`
* dayProze => `天天奖页`
* feedback => `反馈意见`
* detail => `文章详情页`
* storeDetail => `门店详情页`
* trafficRegulationst => `出行新闻列表`
* comment => `评论列表`
* serverType => `门店服务类型`

## 开发日志
### 2018-6-11
> 搭建UI框架、文档、配置
### 2018-6-13
> 把tabbar修改成组件
### 2018-6-16
> 修改了钱包页
### 2018-6-19
> 实现了tabbar所有页面的效果展示
### 2018-6-20
> 把tabbar重新放回到App.vue页面，增加页面切换效果
### 2018-6-21
> * 制作文章详情页
> * 修改slider组件
### 2018-6-22
> * 制作门店详情页
### 2018-6-28
> * 结合后端云Bmob


## 尚没有解决的问题(BUG)
* 内页刷新会出现底部tabbar,因为一般不会在内页刷新，因为内页转发后刷新就找不到首页入口，跳转不到tabbar页，所以这个不怎么受影响

## BMOB相对应表名
### homeSlider
> 首页轮播图
### articles
> 新闻
