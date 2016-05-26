angular
  .module('HotDogStylusApp')
  .controller('OutfitsController', OutfitsController);

OutfitsController.$inject = ['$http'];

function OutfitsController($http){
  var self = this;
  self.all = [];
  self.addOutfit = addOutfit;
  self.newOutfit = {};
  self.showOutfit = showOutfit;
  self.deleteOutfit = deleteOutfit;

  function getOutfits() {
    $http
      .get('http://localhost:3000/api/outfits')
      .then(function(response) {
        console.log(response);
        self.all = response.data;
    });
  }

  getOutfits();

  function showOutfit() {
    $http
      .get(baseUrl + '/api/outfits/' + outfit._id)
      .then(function(response) {
        console.log(response);
        self.all = response.data;
    });
  }

  function addOutfit() {
    $http
      .post(baseUrl + '/api/outfits', self.newOutfit)
      .then(function(response) {
        console.log('add outfit running');
        getOutfits();
    });
  }

  // add code for update outfit here

  function deleteOutfit(outfit) {
    $http
      .delete(baseUrl + '/api/outfits/' + outfit._id)
      .then(function(response) {
        console.log(response);
        var index = self.all.indexOf(outfit);
        self.all.splice(index, 1);
    });
  }
}
