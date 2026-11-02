
document.getElementById("bookingForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("customer").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    // Replace with your WhatsApp number,
    // including country code, without the + sign.
    const businessNumber = "254757782365";

    const message =
      `Hello Judith's  Lash Studio!
       My name is ${name}.
       My phone number is ${phone}.
       I want ${service}.
       My preferred date is ${date}.`;

    const url = "https://wa.me/" + businessNumber +
      "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
  });
