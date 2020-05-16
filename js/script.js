/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/* 
i'd like to try for the exceed expectation and would not want to get a grade if it doesn't reach that level 
*/

/*
Goal : The overall point of this project is to take an object and print it to the webpage when a button is clicked 

I have a couple of functions in here to do a couple of things 
1. Objects that store famous Quotes from Africa & Africans
2. A Function getRandomQuote randomly selects one Quote
3. printQuote() prints the randomly selected quote to the webpage
4. colorRandomizer() generates a random color in HEX 
5. pageColorChanger() changes the background each time a new object is printed to the webpage
6. clicking the "Show another quote" button on the webpage triggers all of the above 
7. autoInterval() triggers events 1-6 every 5Secs if the button isn't clicked.
*/


// This triggers the first print to screen if the button isn't clicked after 2secs

setTimeout(autoInterval,2000);
var intervalTimer;
/*** 

Here i create the Array of Objects to store the information to store famous African quotes and sayings , some have citations & year others do not
 
***/
let quotes = [];

quotes =
      
[
    {quote:"A doctor who invoked a storm on his people cannot prevent his house from destruction. "  , source: "Nigerian proverb" , tag:"Traditional Sayings" },
    
    {quote:"When a man is at peace with his gods and ancestors, his harvest will be good or bad according to the strength of his arm.", source: "Chinua Achebe ",citation:"Book- Things Fall Apart", year:"1958" , tag:"Literature"},
    
    {quote:"There was a saying in Umuofia that as a man danced so the drums were beaten for him.", source: "Chinua Achebe ",citation:"Book- Things Fall Apart", year:"1958", tag:"Literature"},
    
    {quote:"A man who calls his kinsmen to a feast does not do so to save them from starving. They all have food in their own homes... We come together because it is good for kinsmen to do so.", source: "-Chinua Achebe",citation:"Book-Things Fall Apart", year:"1958", tag:"Literature"},
    
    {quote:"An intelligent enemy is better than a stupid friend." , source: "Senegalese proverb ", tag:"Traditional Sayings"},
    {quote:"The young bird does not crow until it hears the old ones."  , source: "Tswana proverb", tag:"Traditional Sayings"},
    {quote:"If you carry the egg basket do not dance."  , source: "Ambede proverb " , tag:"Traditional Sayings" },
    {quote:"The food which is prepared has no master."  , source: "Malagasy proverb " , tag:"Traditional Sayings" },
    {quote:"The worlds of the elders do not lock all the doors; they leave the right door open. "  , source: " Zambian proverb" , tag:"Traditional Sayings" },
    {quote:" The child of a rat is a rat. "  , source: "Malagasy proverb " , tag:"Traditional Sayings" },
    {quote:"Where you will sit when you are old shows where you stood in youth"  , source: "Yoruba proverb" , tag:"Traditional Sayings" },
    {quote:"He who is unable to dance says that the yard is stony. "  , source: "Masai proverb" , tag:"Traditional Sayings" },
    {quote:" Do a good deed and throw it into the sea."  , source: "Egyptian proverb" , tag:"Traditional Sayings"},
    {quote:"When the roots of a tree begin to decay, it spreads death to the branches "  , source: "Nigerian proverb " , tag:"Traditional Sayings" },
    {quote:"Even the lion, the king of the forest, protects himself against flies. "  , source: "Ghanaian proverb" , tag:"Traditional Sayings" },
    {quote:" It is crooked wood that shows the best sculptor. "  , source: "African proverb" , tag:"Traditional Sayings" }   
]



//The function returns a random object from the Quotes Array
/***
Here i use the JS math functions to limit the index selection to the number of objects in the quote array 
This allows my expand the number of objects in the array later without breaking my code
***/

function getRandomQuote() {
    
    let objectIndex=Math.round(Math.random()*(quotes.length-1));
    
    return quotes[objectIndex];
}



// This Function parses the the Object selected by the getRandomQuote function and prints it as HTML to the webpage targeting the 'quote-box' Div 

function printQuote()
    {
        let selectedQuoteObject = getRandomQuote();

        let printedString= '<p class="quote">' + selectedQuoteObject.quote + "</p>" +
            '<p class="source">' +" " +selectedQuoteObject.source + "</p>" 
                +'<br>' + '<span class="tag" font=2rem >' + selectedQuoteObject.tag + '<br>'+ '</span>'

        if (selectedQuoteObject.citation)
            {

            printedString=printedString+ '<span class="citation">'+ '<br>'+ '<br>'+'<br>'+ " "+ selectedQuoteObject.citation + "</span>" 
            }

        if (selectedQuoteObject.year) 
            {

            printedString= printedString+ '<p class="year">'+" "+ '<br>' + selectedQuoteObject.year + "</p>" 
            }
        


        let printArea=document.getElementById('quote-box');

        printArea.innerHTML = printedString;

        pageColorChanger(); 
        clearInterval(intervalTimer);
        autoInterval();

        return selectedQuoteObject;
    
    
    }

//This function is created to generate a random color each time it is triggered.  
function colorRandomizer() {
    
// Here i generate random values for each RGB parameter between 0 & 256
    
let R = Math.round(Math.random()*256);
let G=  Math.round(Math.random()*256);
let B= Math.round(Math.random()*256) ;
    
//Here i convert the RGB values to HEX, Base 16
    
R= R.toString(16);
G= G.toString(16);
B= B.toString(16);    
let newColor ="#" + R + G +B;
   
    return newColor;
 
}



/* This function Changes the Background color whenever it is called . it uses the returned value from the colorRandomizer function since the text of the page is white, i never want the background to randomly change to white so i put in a conditional to check that and call the fnx recursively */

function pageColorChanger() 
    {
        document.body.style.background=colorRandomizer() ;
        let currentColor=document.body.style.background;
            if(currentColor=="#ffffff")
                {
                    pageColorChanger();

                }

        return null;
    }


/* JS for button  */

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


/* Quotes change automatically after a 5secs of the button being pushed */

function autoInterval()
    {
     intervalTimer = setInterval(printQuote, 5000);
        console.log(intervalTimer);
        return  intervalTimer;
    }


