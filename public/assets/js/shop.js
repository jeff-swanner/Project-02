$(document).ready(function () {
  $('.storeCategories').on('click', function (event) {
    event.preventDefault();
    const category = $(this).attr('data-category');
    $.ajax('/api/items/', {
      type: 'GET'
    }).then(
      function (info) {
        info.forEach(function (item) {
          const newCard = $('<div>');
          newCard.addClass('card transition hidden' + item.department);
          newCard.append(
            `
            <div class="image">
                <img src="download.jpeg">
            </div>
            <div class="content">
                <div class="header">` + item.product + `</div>
                <div class="item">Price: $` + item.price + `</div>
            </div>
            <div class="extra content">
                <a>
                <i class="shopping cart icon"></i>
                Add to Cart
                </a>
            </div>
            `
          );
          if (category === item.department) {
            $('#storeCards').append(newCard);
          }
        });
      }
    );
    $('#storeCategories').transition({ animation: 'fly up', duration: '1s', onComplete: function () { $('.productDisplay').transition('fly up'); }
    });
  });
});
