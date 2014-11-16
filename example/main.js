'use strict';

angular.module('example', ['akoenig.deckgrid'])
.controller('MainCtrl', ['$scope', function($scope){
	
	$scope.photos = [
	                 {id: 'p1', 'title': 'A nice day!', src: "http://www.askart.com/AskART/photos/CAS20140719_84672/197_1.jpg"},
	                 {id: 'p2', 'title': 'Puh!', src: "http://cdn.shopify.com/s/files/1/0227/2721/files/water_bottle_sample_grande.jpg"},
	                 {id: 'p3', 'title': 'What a club!', src: "http://empirewine.s3.amazonaws.com/images/item-detail/13578.jpg"},
	                 {id: 'p4', 'title': 'Where are we', src: "http://media-cache-ec0.pinimg.com/236x/bf/ef/bb/bfefbb1d509288956d5beef9448809bb.jpg"},
	                 {id: 'p5', 'title': 'Who is this', src: "https://www.hashtags.org/wp-content/uploads/2013/01/ads.jpg"},
	                 {id: 'p6', 'title': 'What is what!', src: "http://r4.clothia.net/uploads/thumbs/220/square/items/4ff70ef542556.jpg"},
	                 {id: 'p7', 'title': 'No Buts', src: "http://marketingland.com/wp-content/ml-loads/2013/09/kenneth-cole-logo.jpg"},
	                 {id: 'p8', 'title': 'Lets Go', src: "http://1.bp.blogspot.com/-2yYKBjfgU0w/Trgqrj48vKI/AAAAAAAACwM/9jn1gqoXmCg/s320/funny+animals+gifs.gif"}
	             ];
	
}]);