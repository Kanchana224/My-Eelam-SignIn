let likeBtns = document.querySelectorAll(".likeBtn");
let likeCountElements = document.querySelectorAll('.likeCount');
let bookmarkIcons = document.querySelectorAll('.bookmarkIcon');
let likeCounts = Array.from({ length: likeBtns.length }, () => 0);
likeBtns.forEach((btn, index) => {
btn.addEventListener('click', function () {
btn.classList.toggle('liked');
likeCounts[index] = btn.classList.contains('liked') ? likeCounts[index] + 1 : likeCounts[index];
likeCountElements[index].textContent = likeCounts[index] + ' likes';
});
});
bookmarkIcons.forEach(icon => {
icon.addEventListener('click', function () {
icon.classList.toggle('bookmarked');
});
});