export const initPizzaForm = () => {
  const form = document.querySelector('form')

  if (form) {
    const custname = form.querySelector<HTMLInputElement>('#custname')

    custname.oninput = () => {
      console.log(custname.validity.tooShort)
    }

    form.onsubmit = (ev) => {
      ev.preventDefault()

      const data = new FormData(form)
      console.log(data.getAll('topping'))

      console.log(Object.fromEntries(data.getAll()))
    }
  }
}
