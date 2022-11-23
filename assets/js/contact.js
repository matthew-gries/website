emailjs.init('gq8Tjcxbku4MqeS2d');

function sendEmail(event) {
  event.preventDefault();
  const params = {
    name: document.getElementsByName('name')[0].value,
    subject: document.getElementsByName('subject')[0].value,
    email: document.getElementsByName('email')[0].value,
    message: document.getElementsByName('message')[0].value,
  }

  const serviceId = "service_xkharsx";
  const templateId = "template_jh4ybrt";

  const resultElement = document.getElementsByName('contact-result')[0];

  console.log(params);

  emailjs.send(serviceId, templateId, params)
    .then(res => {
      console.log(res);
      resultElement.innerText = "Email successfully sent!"
    })
    .catch(error => {
      resultElement.innerText = "Error sending email!";
      console.error(error);
    });
}

const form = document.getElementsByName("contact-form")[0];
form.addEventListener('submit', sendEmail);