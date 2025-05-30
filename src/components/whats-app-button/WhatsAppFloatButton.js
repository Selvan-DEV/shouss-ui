import React from "react";

const WhatsAppFloatButton = () => {
  const phoneNumber = "919380988205";
  const message = "Hi, I’m interested in your construction services. Could you please provide more details?";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/icons/whatsapp.png"
        alt="WhatsApp"
        style={{ width: "46px", height: "46px" }}
      />
    </a>
  );
};

export default WhatsAppFloatButton;
