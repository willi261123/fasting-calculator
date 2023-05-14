// Attach an event listener to the 'Calculate Next Meal' button. This will run the provided function when the button is clicked.
document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get the time of the last meal from the input field. This is a string in 'HH:MM' format.
    var lastMealTime = document.getElementById('lastMeal').value;
    
    // Get the fasting duration from the input field. This is a string, but we'll use it as a number.
    var fastingHours = document.getElementById('fastingHours').value;
    
    // Check if both required inputs are provided.
    if (lastMealTime && fastingHours) {
        // Create a new Date object for the current date and time.
        var lastMealDate = new Date();
        
        // Split the last meal time string into hours and minutes.
        var timeParts = lastMealTime.split(':');
        
        // Set the hours and minutes of the Date object to the last meal time.
        lastMealDate.setHours(timeParts[0], timeParts[1]);

        // Calculate the next meal time by adding the fasting duration to the last meal time.
        // We multiply the fasting hours by 60 to get minutes, again by 60 to get seconds, and again by 1000 to get milliseconds,
        // because the argument to the Date.getTime() and the Date.setTime() methods is in milliseconds.
        var nextMealDate = new Date(lastMealDate.getTime() + fastingHours * 60 * 60 * 1000);
        
        // Format the next meal time as a string and display it in the 'result' element.
        // The toTimeString() method returns a string in 'HH:MM:SS GMT' format, so we split it by space and take the first part to get the 'HH:MM:SS' part.
        var resultText = 'Your next meal should be at ' + nextMealDate.toTimeString().split(' ')[0];
        document.getElementById('result').innerText = resultText;
    } else {
        // If either or both of the inputs are missing, alert the user to provide them.
        alert('Please input both last meal time and fasting duration.');
    }
});
