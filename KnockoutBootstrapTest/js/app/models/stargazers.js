define(['app/models/base'],function(basemodel) {
    var Stargazers = function () {
        this.load = function (reposUrl,callbackFn) {
            this.prototype.load(reposUrl,callbackFn);
        };
        this.prototype = basemodel;
    };

    return new Stargazers();
});