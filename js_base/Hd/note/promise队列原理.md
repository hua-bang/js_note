#### 	promise队列原理

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
<script>
    let promise = Promise.resolve("后盾人");
    promise = promise.then(v => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(v); //下面的then需要返回的promise被resolve
            },1000)
        })
    }).then(v => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(2)
            },2000)
        })
    });
    promise.then(res => {
        console.log(res)
    })
</script>
</html>
```

