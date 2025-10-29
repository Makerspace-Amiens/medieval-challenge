// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};

  function openModelModal(modelSrc) {
    const modal = document.getElementById("model-modal");
    const modalViewer = document.getElementById("modal-model-viewer");
    const mainViewer = document.getElementById("dimension-model");

    modalViewer.innerHTML = ''; // clean up
    modalViewer.setAttribute("src", modelSrc);

    // Clone hotspots + labels
    mainViewer.querySelectorAll("button[slot]").forEach(btn => {
      modalViewer.appendChild(btn.cloneNode(true));
    });

    modal.classList.add("is-active");
  }

  function closeModelModal() {
    document.getElementById("model-modal").classList.remove("is-active");
  }

  const mainViewer = document.getElementById("dimension-model");
  mainViewer.addEventListener('progress', onProgress);

document.querySelector('model-viewer').addEventListener('progress', onProgress);