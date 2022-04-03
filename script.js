// Hajime!

// ------------------------------------------------------------------------------------------------------------

// 'Months to Days to Years' Format

var current = moment().format("MMMM Do YYYY, LT");
// log to the console to check it moment().format("MMMM Do YYYY");works
console.log(current);

// Function which...
function currentDay() {
    // ...the timeNow variable is equal to the ID of 'currentDay, which...
    var timeNow = document.getElementById('currentDay');
    // ...then is appended text content (insode of <p></p>) equaled to the global 'current' variable, which...
    timeNow.textContent = current;
}
// ...when called, applies an updated time for each day
currentDay();

// ------------------------------------------------------------------------------------------------------------

// Textarea Color Code

var textArea = document.getElementById('text_area');
var currentTime = moment().hour();
console.log("This is the current time (in military time): " + currentTime)

// Iterating over EACH text_area ID (performing a DOM query)
// Only works with class?
$('.text-area').each(function() {
    console.log('Working'); 
    // parseInt() returns the first character, and parses a value as a string, returning it as the first integer.
    // The variable 'timeContainer' is taking the ID of 'text_area', and moving up to its parent element, and targetting the ID attribute inside of the syntax...
    var timeContainer = $(this).parent().attr('id');
    // ...THEN converting the IDs (which are in str (ex. "9", "10", "11", "12"...etc)) to integers (ex. 9, 10, 11, 12...etc)
    var parsedTimeContainer = parseInt(timeContainer);
    // IF the parsed ID is equal (AS A NUMBER) to the current time...
    if (parsedTimeContainer === currentTime) {
        // ...ADD the .present class to the .text-area classes
        $(this).addClass('present');
        $(this).removeClass('past');
        $(this).removeClass('future');
    // ELSE IF the parsed ID is greater (AS A NUMBER) to the current time (meaning it is now the FUTURE)...
    } else if (parsedTimeContainer > currentTime) {
        // ...ADD the .future class to the .text-area classes
        $(this).addClass('future');
        $(this).removeClass('past');
        $(this).removeClass('present');
        // ELSE...
    } else {
        // ...ADD the .past class to the .text-area classes
        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');
    }
    // CONSOLE LOG to make sure it works
    console.log(timeContainer)
});

// ------------------------------------------------------------------------------------------------------------

// var saveBtn = document.getElementsByClassName('.saveBtn');

$('.saveBtn').on('click', function() {
    // Key for the time to know where to save 
    var newTimeContainer = $(this).parent().attr('id');
    // .val() is the value of the text you enter (value of sibling)
    // .siblings() would target each sibling text area
    var saveBtnVal = $(this).siblings('.text-area').val();
    localStorage.setItem(newTimeContainer, saveBtnVal);
    console.log(newTimeContainer);
    console.log(saveBtnVal);
});

// ------------------------------------------------------------------------------------------------------------

// GETTING info FROM local storage and displaying it to the index

// Targetting both the parent IDs as well as the same text area class, and getting the VALUE from the individual local storage items.
$('#9 .text-area').val(localStorage.getItem('9'));
$('#10 .text-area').val(localStorage.getItem('10'));
$('#11 .text-area').val(localStorage.getItem('11'));
$('#12 .text-area').val(localStorage.getItem('12'));
$('#13 .text-area').val(localStorage.getItem('13'));
$('#14 .text-area').val(localStorage.getItem('14'));
$('#15 .text-area').val(localStorage.getItem('15'));
$('#16 .text-area').val(localStorage.getItem('16'));
$('#17 .text-area').val(localStorage.getItem('17'));

// ------------------------------------------------------------------------------------------------------------

// USE THESE IN JQUERY CONDITIONAL INSTEAD OF JS FUNCTION
// Within the jQuery chain, so we use $(this), which holds the element requested (in this case, the ID of text_area). This can help with the repetitive nature of adding the same element class or ID over and over again.
// $(this).addClass('present')
// $(this).addClass('past')
// $(this).addClass('future')

// NOT USING THESE ANYMORE ------------------------------------------------------------------------------------

// JQUERY WORKS EASIER

// function colorCode() {
//     var textArea = document.getElementById('text_area');
//     var currentTime = moment().hour();
//     var timeContainer = parseInt()
//     for (var i = 0; i < textArea.length; i++) {
//         if ()
//     }
// }