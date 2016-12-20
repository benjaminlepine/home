(function() {
  var app = angular.module('gemStore', []);

 
  app.controller("TabController", function() {
    this.tab = 1;
    this.tabs = 5;
    
    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };
    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });
  
  app.controller("InfosClient", function() {
      this.nomClient = "";
      this.prenomClient = "";
      this.passwordClient = "";
      this.mailClient = "";
      
      this.setClient = function(setClient){
        this.nomClient = setClient;
      };
  });

  app.controller("InfosPartenaire", function(){
      this.nomPartenaire = '';
      this.prenomPartenaire = '';
      this.passwordPartenaire = '';
      this.mailPartenaire = '';
  });
  
  
  app.controller('EditorController', function ($scope, $http) {

 	var main = this;
 	main.search = '';
 	main.brandList = [];
 	main.checkList = [];
 	main.promoCheck = false;
 	main.orderType = "+name";

//  	$http.get('http://92.222.72.189:1234/api/products').then(function (data) {
  	$http.get('test.json').then(function (data) {

		main.objs = data.data;

		angular.forEach(main.objs, function(item) {
			item.checked = true;
		});

		angular.forEach(main.objs, function(item) {

			var toto = main.checkList.map(function(e) { return e.name; });

			if (toto.indexOf(item.type) === -1)
				main.checkList.push({name:item.type, checked:true, type:'Type'});
			if (toto.indexOf(item.brand) === -1)
				main.checkList.push({name:item.brand, checked:true, type:'Marque'});
		});

		$scope.checkOrder = function(item) {
			if (item === 'name') {
				if (main.orderType === '+name')
					main.orderType = '-name';
				else
					main.orderType = '+name';
			}
			else if (item === 'price') {
				if (main.orderType === '+price')
					main.orderType = '-price';
				else
					main.orderType = '+price';				
			}
		};

		$scope.checkedValue = function(item) {

			var toto = main.checkList.map(function(e) { return e.name; });

			if (main.checkList[toto.indexOf(item.type)].checked === false || main.checkList[toto.indexOf(item.brand)].checked === false)
				return false;
			else {
				if (main.promoCheck == true && item.promo == false)
					return false;
				return true;
			}
		};
	});
});

  
})();


/*
var infosClient = [{
      nomClient:'',
      prenomClient:'',
      passwordClient:'',
      mailClient:''
  }];
  
  var infosPartenaire = [{
      nomPartenaire:'',
      prenomPartenaire:'',
      nomEntreprise:'',
      passwordPartenaire:'',
      mailPartenaire:''
    }];
    
    */