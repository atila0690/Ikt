function submitForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    event.target.reset();
  }
  
  const form = document.querySelector(".contact form");
  form.addEventListener("submit", submitForm);
  