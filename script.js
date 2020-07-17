 /**
  * --------------------------------------------------
  * DOM Elements
  * --------------------------------------------------
*/

/** The text input field */
var queryInputField = $("#search-term");

/** The slider representing the number of changes to make */
var resultCountSlider = $("#slider1");
/** The slider representing the starting year to search from */
var beginDateSlider = $("#slider2");
/** The slider representing the ending year to search to */
var endDateSlider = $("#slider3");

/** The span to display the result count */
var resultCountSpan = $("#slider1-span");
/** The span to display the starting year */
var beginDateSpan = $("#slider2-span");
/** The span to display the ending year */
var endDateSpan = $("#slider3-span");

/** The search button */
var searchButton = $("");
/** The clear button */
var clearButton = $("");
 
/**
  * --------------------------------------------------
  * Global Variables
  * --------------------------------------------------
*/
 
  
var apiKey = "&api-key=WGQYvCOMkpQnNaJjRkeKmRjTkz2xLvJi";

/** Which group of query results to  */
var queryPage = "&page=";
/** The start date */
var queryBegin = "&begin_date=";
/** The end date */
var queryEnd = "&end_date";
/** The query URL */
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="; 

/** The array to store the results */
var searchArray = [];

var serachCount = 0;
var 
 

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
 
function getSearchResults(a_string){

}
    

/**
  * --------------------------------------------------
  * Display Functions
  * --------------------------------------------------
*/

/**
 * 
 * @param {Article} a_article
*/
function displayArticle(a_article){
    var t_div = $("<div>").addClass("result");

    var t_headline = $("<div>").text(a_article.headline).addClass("result-info");
    var t_byline = $("<div>").text(a_article.byline).addClass("result-info");
    var t_link = $("<div>").text(a_article.url).addClass("result-info");
    var t_paragraph = $("<div>").text(a_article.paragraph).addClass("result-info");

    $(t_div).append(t_headline);
    $(t_div).append(t_byline);
    $(t_div).append(t_link);
    $(t_div).append(t_paragraph);

    $("#result-div").append(t_div);
}   
 

/**
  * --------------------------------------------------
  * Event Handlers
  * --------------------------------------------------
*/
 
function handleSliderChange(a_event){
    // Change number of results
    if($(a_event.target).id() === resultCountSlider.id()){

    }
    // Change begin date
    else if($(a_event.target).id() === beginDateSlider.id()){

    }
    // Change end date
    else if($(a_event.target).id() === endDateSlider.id()){

    }
}

function handleButtonClick(a_event){
    // Perform search
    if($(a_event.target).id() === searchButton.id()){

    }
    // Clear results
    else if($(a_event.target).id() === clearButton.id()){

    }
}
 
 

