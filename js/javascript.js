function showInModal(imgElement) {
    var modal = document.getElementById('my_modal');
    var modal_img = document.getElementById('modal_img');
    modal.style.display = "grid";
    modal.style.alignItems = "center";
    modal_img.src = imgElement.src;
    modal_img.alt = imgElement.alt;

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
function handleKeyDown(event, imgElement) {
    var modal = document.getElementById('my_modal');

    if (event.key === "Enter") {
        showInModal(imgElement);
    }

    if (event.key === "Escape" && modal.style.display === "grid") {
        modal.style.display = "none";
    }
}