function backToModel() {
    window.location.replace(`model?id=${modelId}`);
}

const backToModelButton = document.getElementById('backToModel');
backToModelButton.addEventListener('click', backToModel);
