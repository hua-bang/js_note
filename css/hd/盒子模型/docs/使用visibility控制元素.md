#### Visibility控制元素

类似于隐藏，但不会丢失位置

![image-20210418151532327](F:\github\js_note\css\hd\docs\image-20210418151532327.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        article {
            padding: 30px;
            width: 400px;
            border: 3px solid #ddd;
        }
        div{
            width: 100px;
            height: 100px;
            background: red;
            margin-bottom: 10px;
        }
        div:nth-of-type(1) {
            visibility: hidden;
        }
    </style>
</head>
<body>
    <article>
        <div></div>
        <div></div>
    </article>
</body>
</html>
```

