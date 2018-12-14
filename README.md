# jq-input-plugin
jquery插件 - (效果 http://mall.10046.mi.com/vno/index)


# 使用方法

1. 加载文件

```js
    <link rel="stylesheet" type="text/css" href="./jquery.myPop.css">
    <script src="./jquery.myPop.js"></script>
```

2. 使用input
    1. 必须的class:   `class='input-text'` placeholder属性: `data-placeholder="身份证号码"`
```html
    <input class='input-text' type="text" name="ucard" value="" data-placeholder="身份证号码">
```

3. 初始化
```js
    $('.input-text').myPop()
```

4. 对js代码进行build压缩
    1. `npm install`
    1. `parcel build index.html`

5. 效果图如下所示
    ![效果](http://pjpkfq7bp.bkt.clouddn.com/jqinput.gif)	
