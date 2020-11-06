var citiesArray;
var makeClickable;
var uvColors = ["green" ,"green", "green", "yellow", "yellow", "yellow", "orange", "orange", "red", "red", "red", "purple", "purple", "purple"];
$("#search-btn").on("click", function(e) {
    
    var APIKey = "ae2dcc589707f61a832c268641e09317";
    var city = $("#search").val();