module.exports = function (db) {
  return {
    // Get all Items
    getItems: function (req, res) {
      db.Item.findAll({}).then(function (dbItems) {
        res.json(dbItems);
      });
    },
    // Create a new Item
    createItem: function (req, res) {
      db.Item.create(req.body).then(function (dbItem) {
        res.json(dbItem);
      });
    },
    // Delete an Item by id
    deleteItem: function (req, res) {
      db.Item.destroy({ where: { id: req.params.id } }).then(function (dbItem) {
        res.json(dbItem);
      });
    }
  };
};
