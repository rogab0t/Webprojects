const body = document.querySelector('body');
const buttonCamara = document.querySelector('.mostrar__camara');
const cameraContainer = document.querySelector('.camera__container');
const camera = document.querySelector('.camara');
const buttons = document.querySelector('.buttons');
const video = document.querySelector('.video__source');
const canvas = document.querySelector('#canvas');
const botonFoto = document.querySelector("#boton__foto");
let context = canvas.getContext('2d');
let uploadedImage;

function canvasRedimension(){
    canvas.width = camera.clientWidth*2;
    canvas.height = camera.clientHeight;
}

async function cameraPermissions(deviceId) {  
    let constrains = {};

    if (deviceId) {
        constrains = {
            video: {deviceId: deviceId}
        };
    } else {
        constrains = {video: true};
    }

    let mediaStream = await navigator.mediaDevices.getUserMedia(constrains);

    video.srcObject = mediaStream;
    video.play()
}

async function camerasList() {
    let camerasAvailable = await navigator.mediaDevices.enumerateDevices();
    camerasAvailable = camerasAvailable.filter(device => device.kind === "videoinput");
    let select = document.createElement('select');
    select.setAttribute("id", "select__button");

    camerasAvailable.forEach(camara => {
        let options = document.createElement('option');
        options.innerHTML = camara.label;
        options.value = camara.deviceId;
        select.appendChild(options);
    });

    select.addEventListener('change', function (e) {
        cameraPermissions(select.value);
    });

    buttons.prepend(select);
}

async function uploadImage() {
    let image = document.createElement('img');
    image.src = "./images/frame.png";
    await image.decode();

    uploadedImage = image;
}

async function draw() {
    context.save();
    context.scale(-1, 1);
    const x = (canvas.width - video.width) / 3.5;
    context.drawImage(video, -canvas.width + x, 0, canvas.width, canvas.height);
    context.restore();

    if (uploadedImage) {
        context.drawImage(uploadedImage, 0, 0, camera.clientWidth, camera.clientHeight);
    }

    requestAnimationFrame(draw);
}

canvasRedimension();
camerasList();
uploadImage();
draw();

if (buttonCamara) {
    cameraContainer.style.display = "none";
}

buttonCamara.addEventListener('click', function (e) {
    e.target.style.display = "none";
    cameraContainer.style.display = "flex";
    cameraPermissions();
});

botonFoto.addEventListener('click', function () {
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = camera.clientWidth;
    tempCanvas.height = camera.clientHeight;
    
    const tempContext = tempCanvas.getContext('2d');
    tempContext.drawImage(canvas, 0, 0, canvas.width, canvas.height);

    let url = tempCanvas.toDataURL('image/jpeg');
    let descargar = document.createElement('a');

    descargar.href = url;
    descargar.download = "foto.jpg";
    descargar.innerHTML = "Descargar";
    descargar.click();

    video.pause();
    video.srcObject.getTracks().forEach(track => track.stop());
    cameraContainer.style.display = "none";
    buttonCamara.style.display = "inline-block";
  });