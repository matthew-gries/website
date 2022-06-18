
const MY_EMAIL = "matthew.gries@outlook.com";

function openEmailWindow() {
  const name = document.querySelector('[name="name"]').value;
  const company = document.querySelector('[name="company"]').value;
  const subject = document.querySelector('[name="subject"]').value;
  const message = document.querySelector('[name="message"]').value;
  const subjectLine = `${name}, ${company}: ${subject}`;
  const windowLink = `mailto:${MY_EMAIL}?subject=${subjectLine}&body=${message}`;
  window.open(windowLink);
}