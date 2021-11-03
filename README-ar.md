<div dir="rtl">
<p align="center">
  <img width="200" src="docs/logo.png">
</p>

<h1 align="center">Toastsrap</h1>

<div align="center">

**Toaststrap** is a javascript library for simple, lightweight toast popups. It uses bootstrap 5 styles.


</div>

<div align="center">

[العربية](./README-ar.md)

</div>




## نظرة عامة

I created this library for everyone who use Bootstrap5 and want to show some beautiful notifications for his users.

## مميزات
- مكتوبة بلغة JavaScript دون إستخدام jQuery.
- تدعم اللغات التي تستخدم التخطيط من اليمين لليسار.
- سهلة الإعداد، والإستخدام.
- 🎵 تدعم الأصوات.
- سريعة، وعملية.
- 🎨 قابلة للتخصيص.
- 🆙 تخضع للصيانة الدائمة، وحديثة.


## وثيقة الإستخدام

## الإستخدام في المتصفح
1. حمل المكتبة، من خلال تحميل مجلد dist.
2. تأكد من أنك تستخدم أخر اصدار من مكتبة Bootstrap5.

### مثال
```html
<!DOCTYPE html>

<!-- لدعم العربية أضف الميزة dir="rtl" الى الوسم <html>. -->
<html>
<head>
  <link href="bootstrap/bootstrap.min.css" rel="stylesheet" media="all "/>
  <link href="toastsrap/toastsrap.css" rel="stylesheet" media="all "/>
</head>

<body>

<script src="toastsrap/toastsrap.js"></script>
<script>
  var toast = Toastsrap.initialize({
    title: 'Greeting',
    text: 'Hello World',
    type: window.toastsrap_type.INFO,
    position: window.toastsrap_position.BOTTOM_START
  });
  
  toast.show();
</script>
</body>
</html>
```

## الإستخدام مع React
```shell
npm install toaststrap
```

### مثال
```javascript
import Toast, {ToastType, ToastPosition} from 'toastsrap';

// Load Styles
import 'toastsrap/dist/bootstrap5-toast.css'

const MyToastComponent = () => {
  const handleOnClick = () => {
    const toast = Toast.initialize({
      title: 'Greeting!',
      text: 'Hello World',
      position: ToastPosition.TOP_END,
      type: ToastType.PRIMARY
    })
    
    toast.show()
  }
  return (<button onClick={handleOnClick}>Click Me</button>)
}
```

## إعداد بيئة التطوير

1. نزل المكتبة من خلال
```shell
git clone https://github.com/nawafscript/toastsrap.git
```
2. تنصيب المكتبات الفرعية
```shell
npm install
```
3. تشغيل خادم التطوير
```shell
npm run dev
```


## ادعمنا
<a href="https://ko-fi.com/nawafinity" target="_blank">
    <img src="docs/sponsor-ar.png" />
</a>


## طلبات الدعم، والإضافات
هل وجدت خطأ؟ أو تريد طلب ميزة؟  [رجاءاً قم بفتح تذكرة!](https://github.com/nawafscript/toaststrap/issues)

</div>