const PushNotification = (options = {}) => {
  if (Bootstrap5Toast) {
    var toaster = Bootstrap5Toast.initialize({
      ...options,
    })

    toaster.show()
  }
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
  position: '${formValues.position}',
  avatar: '${formValues.avatar}',
  allowSound: ${formValues.allowSound ? true : false},
  hideHeader: ${formValues.hideHeader ? true : false},
  
  // Parent node
  parent: '${formValues.parent}',

  // Show date
  datetime: '${formValues.datetime}',
  duration: ${formValues.duration},
  space: ${formValues.space},

  ${formValues.rtl ? "// RTL is automateclly recognized." : ""}

  ${formValues.soundFile ? `soundFile: 1${formValues.soundFile}'` : ""}
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
    select.addEventListener("change", (evt) => drawCode(evt.target.form))
  })
}
document.addEventListener("DOMContentLoaded", () => {
  // events

  // Code Mirror
  const form = document.querySelector("form")
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
