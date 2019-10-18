module.exports = function (sequelize, DataTypes) {
  const Item = sequelize.define('Item', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false
    },
    department: {
      type: DataTypes.STRING
    },
    product: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    }
  });
  return Item;
};
