(function() {
    'use strict';
    angular.module('appname')
        .controller('AuthCtrl', ['$scope', '$state', '$auth', '$stateParams', '$http', '$window', '$location', 'mzFunctions', function($scope, $state, $auth, $stateParams, $http, $window, $location, mzFunctions) {

            mzFunctions.scrollToTop();

            $scope.handleRegBtnClick = function() {
                $scope.showLoading = true;
                $auth.submitRegistration($scope.registrationForm)
                    .then(function(resp) {
                        console.log(resp);
                    })
                    .catch(function(err) {
                        if (angular.isArray(err.data.errors)) {
                            angular.forEach(err.data.errors, function(value) {
                                mzFunctions.showNoty(value, 'error');
                            });
                        } else {
                            angular.forEach(err.data.errors.full_messages, function(value) {
                                mzFunctions.showNoty(value, 'error');
                            });
                        }
                        $scope.showLoading = false;
                        // handle error response
                    });
            };
        }]);
})();