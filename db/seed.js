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
  db.User.create({
    firstName: 'Jason',
    lastName: 'Whited',
    email: 'j@w.co',
    password: 'abcd',
    isAdmin: true
  });
  db.User.create({
    firstName: 'Jeff',
    lastName: 'Swanner',
    email: 'je@s.co',
    password: 'efgh',
    isAdmin: true
  });
  db.User.create({
    firstName: 'Frank',
    lastName: 'Zachary',
    email: 'f@z.co',
    password: 'ijkl',
    isAdmin: true
  });
  db.User.create({
    firstName: 'Krishti',
    lastName: 'Bhowmick',
    email: 'k@b.co',
    password: 'mnop',
    isAdmin: true
  });
  // db.Item.create({
  //   UserId: 6,
  //   department: 'shoes',
  //   product: 'Sandals',
  //   price: 45
  // });
  // db.Item.create({
  //   UserId: 6,
  //   department: 'dresses',
  //   product: 'A-line',
  //   price: 66
  // });
  // db.Item.create({
  //   UserId: 4,
  //   department: 'shoes',
  //   product: 'Boots',
  //   price: 88
  // });
  // db.Item.create({
  //   UserId: 3,
  //   department: 'accessories',
  //   product: 'Belt',
  //   price: 20
  // });
  // db.Item.create({
  //   UserId: 5,
  //   department: 'pants',
  //   product: 'Slacks',
  //   price: 50
  // });
  // db.Item.create({
  //   UserId: 5,
  //   department: 'shirts',
  //   product: 'Graphic Shirt',
  //   price: 15
  // });
};
