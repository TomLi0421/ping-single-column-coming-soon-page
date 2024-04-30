const subscriptEmail = document.querySelector(".input-email");
const emailForm = document.querySelector(".email-form");

function handleSubscriptions(e) {
  e.preventDefault();

  const email = subscriptEmail.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    showErrorMsg("Whoops! It looks like you forgot to add your email");
  } else if (!emailRegex.test(email)) {
    showErrorMsg("Please enter a valid email address");
  } else {
    subscriptEmail.classList.remove("error-border");
    const existingErrorMsg = document.querySelector(".error-msg");
    if (existingErrorMsg) {
      existingErrorMsg.remove();
    }
  }
}

function showErrorMsg(message) {
  subscriptEmail.classList.add("error-border");
  const existingErrorMsg = document.querySelector(".error-msg");
  if (!existingErrorMsg) {
    const p = document.createElement("p");
    p.classList.add("error-msg");
    p.textContent = message;
    if (window.innerWidth <= 768) {
      subscriptEmail.insertAdjacentElement("afterend", p);
    } else {
      emailForm.insertAdjacentElement("afterend", p);
    }
  }
}
