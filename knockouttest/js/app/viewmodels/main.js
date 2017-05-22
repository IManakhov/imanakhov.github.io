/**
 * Created by manahov on 15.06.2016.
 */
define(['app/models/users'],function (usermodel) {
    function MainViewModel() {
        var self = this;
        this.userName = ko.observable('');
        this.userFinded = ko.observable(false);

        this.githubUser = ko.pureComputed({
            read: function () {
                return self.userName();
            },
            write: function (value) {
                self.userName(value);
            },
            owner: self
        });

        this.searchUser = function () {
            self.userFinded(false);
            usermodel.find(this.userName(), function (success, userFinded) {
                if(success)
                    self.userFinded(userFinded);
            });
        };
    };

    return MainViewModel;
});