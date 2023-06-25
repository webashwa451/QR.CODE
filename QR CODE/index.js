const qrformEL = document.getElementById("qrform");
const qrimageEl = document.getElementById("qrimage");
const qrcontainerEL = document.getElementById("qrcontainer");
const qrinputTextEl = document.getElementById("qrinputText");
const generatoreBtnEl = document.getElementById("generatoreBtn");

const renderQRCode = (url) => {
    if (!url) return;
    generatoreBtnEl.innerText = "Generating Qr code...";
    qrimageEl.src = url;
   

    const onimageload = () => {
        qrcontainerEL.classList.add("show");
        clearInterval(interval);
        generatoreBtnEl.innerText = "Genrate QR code";
        }, 500);
        
    }

    qrimageEl.addEventListener('load', onimageload);
    
};

qrformEL.addEventListener("submit", (Event) => {
    Event.preventDefault();

    const formdate = new formdate(qrformEL);
    const text = formdate.get("qrText");
    const qrcodeUrl = https://miro.medium.com/v2/resize:fit:261/1*HqUUgU5sD0pTeMBIpjkbSA.png$(text);

    renderQRCode(qrcodeUrl);
});

    qrinputTextEL.addEventListener("keyup", () => {
        
        if(!qrinputText.value.trim()) {
            qrcontainerEL.classList.remove("show");
        }
    });