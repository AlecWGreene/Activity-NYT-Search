 /**
  * --------------------------------------------------
  * DOM Elements
  * --------------------------------------------------
*/

/** The text input field */
var $queryInputField = $("#search-term");

/** The slider representing the number of changes to make */
var $resultCountSlider = $("#slider-1");
/** The slider representing the starting year to search from */
var $beginDateSlider = $("#slider-2");
/** The slider representing the ending year to search to */
var $endDateSlider = $("#slider-3");

/** The span to display the result count */
var $resultCountSpan = $("#slider1-span");
/** The span to display the starting year */
var $beginDateSpan = $("#slider2-span");
/** The span to display the ending year */
var $endDateSpan = $("#slider3-span");

/** The search button */
var $searchButton = $("");
/** The clear button */
var $clearButton = $("");
 
/**
  * --------------------------------------------------
  * Global Variables
  * --------------------------------------------------
*/
 
/** Alec's API Key */
var apiKey = "&api-key=WGQYvCOMkpQnNaJjRkeKmRjTkz2xLvJi";

/** Which group of query results to url piece */
var queryPage = "&page=";
/** The start date url piece */
var queryBegin = "&begin_date=";
/** The end date url piece */
var queryEnd = "&end_date";
/** The query URL */
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="; 

/** The array to store the results */
var searchArray = [];

/** The keywords to search for */
var searchQuery = "";
/** The number of results to display */
var searchCount = 0;
/** The starting year to search from */
var searchBegin = 0;
/** The ending year to search to */
var searchEnd = 0;

/**
  * --------------------------------------------------
  * Ajax Callers
  * --------------------------------------------------
*/

/**
* 
* @param {String} a_headline 
* 
* @param {String} a_byline The author
* 
* @param {String} a_url
* 
* @param {String} a_paragraph
*/
class Article{
    constructor(a_headline, a_byline, a_url, a_paragraph){
        this.headline = a_headline;
        this.byline = a_byline;
        this.url = a_url;
        this.paragraph = a_paragraph;
    }
}
 
/**
 * Retrieves search results from the NYT API 
 * 
 * @param {String} a_string The string to query NYT for 
 */
function getSearchResults(a_string){

    /** The url to pass to the ajax call */
    var t_url = queryURL + searchQuery + a_string;

    /** The number of ajax calls to make */
    var t_numberPages = Math.floor(searchCount / 10);

    // If the begin date is specified
    if(searchBegin != 0){ t_url += queryBegin + searchBegin;}
    // If the end date is specified
    if(searchEnd != 0){ t_url += queryEnd + searchEnd;}

    // Add API key
    t_url += apiKey;

    // For each 10 articles requested
    for(let i = 0; i < t_numberPages; i++){
        var t_responses;

        $.ajax({
            url: t_url,
            method: "GET"
        }).then(function(response){
            t_responses.push(response.docs);
            console.log(response);
        });
    }
}
    

/**
  * --------------------------------------------------
  * Display Functions
  * --------------------------------------------------
*/

/**
 * Takes an Article and appends a div to #result-div with the information
 * 
 * @param {Article} a_article
*/
function displayArticle(a_article){
    
    // The wrapping div for the result
    var t_div = $("<div>").addClass("result");

    // Create divs for each article property
    var t_headline = $("<div>").text(a_article.headline).addClass("result-info");
    var t_byline = $("<div>").text(a_article.byline).addClass("result-info");
    var t_link = $("<div>").text(a_article.url).addClass("result-info");
    var t_paragraph = $("<div>").text(a_article.paragraph).addClass("result-info");

    // Append the property divs to the wrapper div
    $(t_div).append(t_headline);
    $(t_div).append(t_byline);
    $(t_div).append(t_link);
    $(t_div).append(t_paragraph);

    // Append the wrapper div to the display div
    $("#result-div").append(t_div);
}   
 

/**
  * --------------------------------------------------
  * Event Handlers
  * --------------------------------------------------
*/
 
function handleSliderChange(a_event){
    // Change number of results
    if($(a_event.target).attr("id") === $resultCountSlider.attr("id")){
        
        // Update the span text
        $resultCountSpan.text($resultCountSlider.val());
        
        // Update the variable
        searchCount = $resultCountSlider.val();
    }
    // Change begin date
    else if($(a_event.target).attr("id") === $beginDateSlider.attr("id")){
        
        // Update the span text
        $beginDateSpan.text($beginDateSlider.val());

        // Update the variable
        searchBegin = $beginDateSlider.val();
    }
    // Change end date
    else if($(a_event.target).attr("id") === $endDateSlider.attr("id")){
       
        // Update the span text
        $endDateSpan.text($endDateSlider.val());

        // Update the variable
        searchEnd = $endDateSlider.val();
    }
}

function handleButtonClick(a_event){
    // Perform search
    if($(a_event.target).attr("id") === $searchButton.attr("id")){

    }
    // Clear results
    else if($(a_event.target).attr("id") === $clearButton.attr("id")){

    }
}
 
function addListeners(){

    // Add listeners to slider 
    $("input").on("change", handleSliderChange);

    // Add listeners to button
    $searchButton.on("click", handleButtonClick);
    $clearButton.on("click", handleButtonClick);
}
 
// Runtime execution
$(document).ready(function(){
    addListeners();
});