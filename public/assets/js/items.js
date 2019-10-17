// Get references to page elements
const $itemName = $('#item-name');
const $itemCategory = $('#item-category');
const $itemPrice = $('#item-price');
const $submitBtn = $('#submit');
const $itemList = $('#item-list');

// The API object contains methods for each kind of request we'll make
const API = {
  saveItem: function (item) {
    return $.ajax({
      headers: {
        'Content-Type': 'application/json'
      },
      type: 'POST',
      url: 'api/items',
      data: JSON.stringify(item)
    });
  },
  getItems: function () {
    return $.ajax({
      url: 'api/items',
      type: 'GET'
    });
  },
  deleteItem: function (id) {
    return $.ajax({
      url: 'api/items/' + id,
      type: 'DELETE'
    });
  }
};

// refreshItemss gets new itemss from the db and repopulates the list
const refreshItems = function () {
  API.getItems().then(function (data) {
    const $Items = data.map(function (item) {
      const $a = $('<a>')
        .text(item.product)
        .attr('href', '/item/' + item.id);

      const $li = $('<li>')
        .attr({
          class: 'list-group-item',
          'data-id': item.id
        })
        .append($a);

      const $button = $('<button>')
        .addClass('ui button')
        .text('ｘ');

      $li.append($button);

      return $li;
    });

    console.log($Items);

    $itemList.empty();
    $itemList.append($Items);
  });
};

// handleFormSubmit is called whenever we submit a new item
// Save the new item to the db and refresh the list
const handleFormSubmit = function (event) {
  event.preventDefault();

  const item = {
    product: $itemName.val().trim(),
    category: $itemCategory.val(),
    price: parseFloat($itemPrice.val())
  };

  console.log(item);

  if (!(item.product && item.category && item.price)) {
    alert('You must select a category, then enter a product name and price!');
    return;
  }

  API.saveItem(item).then(function () {
    refreshItems();
  });

  $itemName.val('');
  $itemCategory.val('');
  $itemPrice.val('');
};

// handleDeleteBtnClick is called when an item's delete button is clicked
// Remove the item from the db and refresh the list
const handleDeleteBtnClick = function () {
  const idToDelete = $(this).parent().attr('data-id');

  API.deleteitem(idToDelete).then(function () {
    refreshItems();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on('click', handleFormSubmit);
$itemList.on('click', '.delete', handleDeleteBtnClick);
