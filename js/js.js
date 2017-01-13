var app=angular.module('myApp',['ng']);
//app.service('$show',function(){
//   this.add=function(msg){
//    console.log(msg);
//   }
//})
   app.factory('$show',function(){
       return{
           add:function(){
               alert('哈哈哈哈');
           }
       }
   })
app.controller('c1',function($scope,$show){
   $scope.back=function(){
       $show.add();
   }
})
//var str=function($scope,$show){
//     $scope.back=function(){
//         $show.add('nihao')
//     }
//}
//做标记
//str.$inject=['$scope','$show']
//app.controller('c1',str);