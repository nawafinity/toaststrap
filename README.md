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


  

## Preview

I created this library for everyone who use Bootstrap5 and want to show some beautiful notifications for his users.

## Features
- [x] Pure JavaScript without jQuery.
- [x] 🇸🇦 RTL support.
- [x] Easy to initialize and use.
- [x] 🆙 Support sound.
- [x] Quick and efficient.
- [x] 🎨 Customizable.
- [x] 🆙  Maintainable and up-to-date.
  

## Documentation

## Using in browser
1. Download dist folder from this repository.
2. Be sure you are using the latest bootstrap 5.

### Example
```html
<!DOCTYPE html>

<!-- To use RTL, add dir="rtl" attribute to <html> tag. -->
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

## Using with react
```shell
npm install toaststrap
```

### Example
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

## Setup development environment

1. Clone the project
```shell
git clone https://github.com/nawafscript/toastsrap.git
```
2. Install packages
```shell
npm install
```
3. Start development server
```shell
npm run dev
```


## Be a sponsor
<a href="https://ko-fi.com/nawafinity" target="_blank">
    <img src="docs/sponsor.png" />
</a>


## Bugs and feature requests
Found a bug or have a feature request? [Please open a new issue](https://github.com/nawafscript/toaststrap/issues)
