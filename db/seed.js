module.exports = (db) => {
  db.User.create({
    firstName: 'Joe',
    lastName: 'Gates',
    email: 'j@g.co',
    password: process.env.ADMIN_USER_PWD,
    isAdmin: true
  });
  db.User.create({
    firstName: 'Jane',
    lastName: 'Jobs',
    email: 'j@j.co',
    password: process.env.USER_PWD,
    isAdmin: false
  });
  db.Item.create({
    id: 1,
    user_id: 1,
    department: 'shirts',
    product: 'blue t-shirt',
    price: 19.99
  });
};
