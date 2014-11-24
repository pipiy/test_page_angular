(function(){
	var app = angular.module('gemStore', []);

	app.controller("StoreController", function(){
		this.products = gems;
	});

	app.controller("TabController", function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(isSet){
			return this.tab === isSet;
		};
	});

	app.controller("GalleryController", function(){
		this.current = 0;

		this.setCurrent = function(newGallery){
			this.current = newGallery || 0;
		};
	});

	app.controller("ReviewController", function(){
		this.review = {};

		this.addReview = function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};

		this.removeReview = function(product, index){
			product.reviews.splice(index, 1);
		};
	});
})();
