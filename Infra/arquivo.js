var fs = require('fs');
var q = require('q');

module.exports = (path) => {
    var deferred = q.defer();
    fs.readFile(path, function(err, file){
        if(err != null) 
            deferred.reject(err);
        else 
            deferred.resolve(JSON.parse(file));
    })
    return deferred.promise;
}
