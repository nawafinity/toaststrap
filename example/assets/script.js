const PushNotification = (options = {}) => {
  if (Bootstrap5Toast) {
    var toaster = Bootstrap5Toast.initialize({
      title: "Nawaf Says",
      avatar: "https://avatars.githubusercontent.com/u/16566503?s=20&v=4",
      text: "I love you <3",
      allowSound: true,
      datatime: "2020-01-01 11:25:00",
      ...options,
    })

    toaster.show()
  }
}

const drawCode = (target) => {
  const formData = new FormData(target)
  const formValues = Object.fromEntries(formData.entries())
  console.log(formValues)
  const codeResult = document.querySelector("#coderesult")
  if (codeResult) {
    var regex = /<br\s*[\/]?>/gi

    let code = `var toast = Bootstrap5Toast.initialize({
        title: '${formValues.title}',
        text: '${formValues.text},
        position: '${formValues.position}'
})`

    codeResult.innerText = code
  }
}
document.addEventListener("DOMContentLoaded", () => {
  // Code Mirror
  const form = document.querySelector("form")
  drawCode(form)

  PushNotification({ position: Bootstrap5Toast.POSITION.TOP_END })

  const otherControls = document.querySelector('.form-control,.form-select')
  const inputControl = document.querySelector('input.form-control')
  const textAreaControl = document.querySelector('textarea.form-control');
  otherControls.addEventListener('change', (evt) => {
    drawCode(evt.target.form)
  })
  inputControl.addEventListener('input', (evt) => {
    drawCode(evt.target.form)
  })
  textAreaControl.addEventListener('input', (evt) => {
    drawCode(evt.target.form)
  })

  const formSubmit = document.querySelector("#props-form")

  if (formSubmit) {
    formSubmit.addEventListener("submit", (evt) => {
      evt.preventDefault()

      var data = new FormData(evt.target)
      var values = Object.fromEntries(data.entries())

      PushNotification({
        title: values.title,
        text: values.text,
        position: Bootstrap5Toast.POSITION[values.position],
      })
    })
  }
})
