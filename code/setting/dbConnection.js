(function (exports) {
  var setting = require(settings.json);
  var url = setting.dbURI;
  exports.openConnection = function () {
    MongoClient.connect(url, function (err, db) {
      assert.equal(null, err);
      if (err) {
        console.log('Connection to the server failed');
      } else {
        console.log('Connected correctly to server');
        return db;
      }
    });
  };

  exports.closeConnection = function (db) {
    db.close();
  };
})(exports);
