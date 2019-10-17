$(document).ready(function () {
  $('.storeCategories').on('click', function (event) {
    event.preventDefault();
    var category = $(this).attr('data-category');
    $('#storeCategories').transition({ animation: 'fly up', duration: '1s', onComplete: function () { $(category).transition('fly up'); }
    });
  });
});
