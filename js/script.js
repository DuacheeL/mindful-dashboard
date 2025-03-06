// website loaded?
console.log("👍 Okay");


//Graduation Date
const eventDate = "2025-06-13";
const gradDays = getDaysUntilEvent( eventDate );
console.log( gradDays );

const elemDaysUntilGrad = document.querySelector('.daysUntilEvent');
elemDaysUntilGrad.textContent = gradDays;
elemDaysUntilGrad.setAttribute("datetime", gradDays );




// Streak of Days

const startDate = "2025-01-01";
const streakDays = getDayStreak( startDate );
console.log( streakDays );

const elemDayStreak = document.querySelector('.streakOfDays');
elemDayStreak.textContent = streakDays;
elemDayStreak.setAttribute("datetime", streakDays );

// Age of Person, Place, or Thing












// Unit Test

const birthDate = "1999-12-25"; // YYYY-MM-DD format
// const birthDateOfSwoop = "September 29, 1973"; // Month DD, YYYY
// const birthDateOfSwoop = "09/09/1973"; // MM/DD/YYYY
const ageOfPerson = calculateAgeOf( birthDate );
console.log( ageOfPerson );

// Unit test
// Get HTML element
const elemAgeOfPerson = document.querySelector('.ageOfPerson');

// Set to HTML element
elemAgeOfPerson.textContent = ageOfPerson;
elemAgeOfPerson.setAttribute("datetime", ageOfPerson );



