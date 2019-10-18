const router = require('express').Router();

module.exports = (db) => {
  // Load register page
  router.get('/register', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      console.log('test1');
      res.render('register', user);
    } else {
      console.log('test2');
      res.render('register');
    }
  });

  // Load profile page
  router.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
      db.User.findOne({
        where: {
          id: req.session.passport.user.id
        }
      }).then(() => {
        const user = {
          userInfo: req.session.passport.user,
          isloggedin: req.isAuthenticated()
        };
        // console.log(user);
        res.render('profile', user);
      });
    } else {
      res.redirect('/');
    }
  });

  // Load dashboard page
  router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('dashboard', user);
    } else {
      res.render('dashboard');
    }
  });

  // Load dashboard page
  router.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('dashboard', user);
    } else {
      res.render('dashboard');
    }
  });

  // Load item index page
  router.get('/item', function (req, res) {
    if (req.isAuthenticated()) {
      db.Item.findAll({}).then(function (dbItems) {
        res.render('item', {
          msg: 'My Fashion Trader Items',
          item: dbItems
        });
      });
    } else {
      res.redirect('/');
    }
  });

  // Load item page and pass in an item by id
  router.get('/item/:id', function (req, res) {
    if (req.isAuthenticated()) {
      db.Item.findOne({ where: { id: req.params.id } }).then(function (dbItem) {
        res.render('item-detail', {
          item: dbItem
        });
      });
    } else {
      res.redirect('/');
    }
  });

  // Logout
  router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie('connect.sid', { path: '/' });
      res.redirect('/');
    });
  });

  // Shop page to display all products

  router.get('/shop', function (req, res) {
    // if (req.isAuthenticated()) {
    db.Item.findAll({}).then(function (dbItems) {
      res.render('shop', {
        msg: 'This is where you shop',
        items: dbItems
      });
    });
    // }
    // else {
    //   res.redirect('/');
    // }
  });

  // Render 404 page for any unmatched routes
  router.get('*', function (req, res) {
    res.render('404');
  });

  return router;
};
