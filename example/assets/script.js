const PushNotification = (options = {}) => {
  if (Bootstrap5Toast) {
    var toaster = Bootstrap5Toast.initialize({
      ...options,
    })

    toaster.show()
  }
}

const getFormData = (form) => {
  var data = new FormData(form)
  var values = Object.fromEntries(data.entries())

  return values;
}

const drawCode = (target) => {
  const formData = new FormData(target)
  const formValues = Object.fromEntries(formData.entries())
  const codeResult = document.querySelector("#coderesult")

  const html = document.getElementsByTagName("html")[0]
  const css = document.getElementById("cssbootstrap")

  if (formValues.rtl) {
    html.dir = "rtl"
    css.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.rtl.min.css"
  } else {
    html.dir = "ltr"
    css.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  }

  if (codeResult) {
    var regex = /<br\s*[\/]?>/gi

    let code = `// Result
var toast = Bootstrap5Toast.initialize({
  title: '${formValues.title}',
  text: '${formValues.text}',
  type: window.bs5toast_type.${formValues.type},
  position: '${formValues.position}',
  avatar: '${formValues.avatar}', 
  
  // Enable sound
  soundable: ${formValues.soundable ? true : false},
  soundSource: '${formValues.soundSource || ''}',
  
  // Customization
  noHeader: ${formValues.noHeader ? true : false},
  dismissible: ${formValues.dismissible === "true" ? true : false},
  pauseable: ${formValues.pauseable === "true" ? true : false},
  
  // Parent node
  parent: '${formValues.parent}',

  // Show date
  datetime: '${formValues.datetime}',
  duration: ${formValues.duration},
  space: ${formValues.space},

  ${formValues.rtl ? "// RTL is automatically recognized." : ""}
})`

    codeResult.innerHTML = code

    lolight("#coderesult")
  }
}

const events = () => {
  const inputControl = document.querySelectorAll(
    "input.form-control, select.form-control, textarea.form-control,input[type='datetime-local']"
  )
  inputControl.forEach((input) => {
    input.addEventListener("input", (evt) => drawCode(evt.target.form))
  })

  const selectControl = document.querySelectorAll(
    "input[type='checkbox'].form-check-input, select.form-select"
  )
  selectControl.forEach((select) => {
    select.addEventListener("change", (evt) => {
      return drawCode(evt.target.form);
    })
  })
}
document.addEventListener("DOMContentLoaded", () => {
  // events

  // Code Mirror
  const form = document.querySelector("form")
  PushNotification({
    ...getFormData(form),
    title: 'Heeelp!',
    text: "I'm stuck here T-T, click on X button to close me!",
    duration: 0,
    onCloseCallBack: (() => {
      PushNotification({
        type: bs5toast_type.SWEET,
        title: 'Arigatou Gozaimasu',
        text: `
          <div class="text-center">
            <span class="d-block">You are a life saver <3</span>
            <img class="d-inline-block" src="assets/pack.gif" width="120"/>
            <button class="btn btn-outline-info btn-sm mt-3 d-block m-auto" onclick="PushNotification({
              title: 'Huuuuuuuuuuuuuuuuug<3',
              text: '<3',
              noHeader: true,
            })">Give me hug</button>
          </div>
        `,
        duration: 0,
        soundable: true,
        soundSource: 'https://assets.mixkit.co/sfx/download/mixkit-bell-notification-933.wav'
      })

    }),
  })

  drawCode(form)
  events()


  const formSubmit = document.querySelector("#props-form")

  if (formSubmit) {
    formSubmit.addEventListener("submit", (evt) => {
      evt.preventDefault()

      var data = new FormData(evt.target)
      var values = Object.fromEntries(data.entries())

       PushNotification({
        ...values,
        onCloseCallBack: () => {
          console.log("Bye bye.")
        },
      })
    })
  }
})
