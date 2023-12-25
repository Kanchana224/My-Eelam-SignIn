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

$(document).ready(function () {
    $("#navbarCollapse").on('show.bs.collapse', function () {
      $(".dropdown-container").show();
    });
  
    $("#navbarCollapse").on('hide.bs.collapse', function () {
      $(".dropdown-container").hide();
    });
  
    $("#notifDropdown, #profileDropdown").on('click', function (e) {
      e.stopPropagation();
      $(this).next('.dropdown-menu').toggle();
    });
  
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.nav-item.dropdown').length) {
        $(".dropdown-menu").hide();
      }
    });
  });


  $(document).ready(function () {
    // Handle the first dropdown
    $('.dropdown-center button').click(function (e) {
      e.stopPropagation(); // Prevents the dropdown from closing immediately after opening
      $('.dropdown-center .dropdown-menu').toggleClass('show');
    });

    // Close the first dropdown when clicking outside of it
    $(document).click(function (e) {
      if (!$('.dropdown-center').is(e.target) && $('.dropdown-center').has(e.target).length === 0) {
        $('.dropdown-center .dropdown-menu').removeClass('show');
      }
    });

    // Handle the second dropdown
    $('.custom-dropdown button').click(function (e) {
      e.stopPropagation(); // Prevents the dropdown from closing immediately after opening
      $('.custom-dropdown .dropdown-menu').toggleClass('show');
    });

    // Close the second dropdown when clicking outside of it
    $(document).click(function (e) {
      if (!$('.custom-dropdown').is(e.target) && $('.custom-dropdown').has(e.target).length === 0) {
        $('.custom-dropdown .dropdown-menu').removeClass('show');
      }
    });
  });
  