const cardContainer = document.getElementById("card-container");
cardContainer.addEventListener("click", function (e) {
  //  Heart functionality
  const heartBtn = e.target.className.includes("fa-heart");
  if (heartBtn) {
    const totalHeart = document.getElementById("total-heart").innerText;
    const updatedHeart = Number(totalHeart) + 1;
    document.getElementById("total-heart").innerText = updatedHeart;
  }
