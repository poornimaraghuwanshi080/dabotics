document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("inputText");
  const generateButton = document.getElementById("generateButton");
  const qrcodeDiv = document.getElementById("qrcode");
  const downloadLink = document.getElementById("downloadLink");

  generateButton.addEventListener("click", function () {
    const text = inputText.value;

    if (text.trim() !== "") {
      qrcodeDiv.innerHTML = "";
      const qrcode = new QRCode(qrcodeDiv, {
        text: text,
        width: 200,
        height: 200,
      });

      downloadLink.href = qrcodeDiv.getElementsByTagName("img")[0].src;
      downloadLink.style.display = "block";
    }
  });
});
