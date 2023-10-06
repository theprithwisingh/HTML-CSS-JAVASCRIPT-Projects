
// Todo: Make M+ M- and MC functional

// Initialize an empty string to store the mathematical expression.
let string = "";

// Select all elements with the class 'button' and store them in the 'buttons' variable.
let buttons =  document.querySelectorAll('.button');

// Convert the NodeList of buttons into an array and iterate over each button.
Array.from(buttons).forEach((button)=>{
    // Add a click event listener to each button.
    button.addEventListener('click', (ea)=>{
        // Check if the clicked button's innerHTML is '='.
        if(ea.target.innerHTML == '='){
            // Use the JavaScript eval() function to evaluate the stored mathematical expression.
            string = eval(string);
            // Display the result in an input element.
            document.querySelector('input').value = string;
        }
        // Check if the clicked button's innerHTML is 'C'.
        else if(ea.target.innerHTML == 'C'){
            // Clear the stored mathematical expression.
            string = "";
            // Clear the input element's value.
            document.querySelector('input').value = string;
        } 
        // If the clicked button is neither '=' nor 'C', it's a digit or operator.
        else{
            // Concatenate the clicked button's innerHTML to the stored mathematical expression.
            string = string + ea.target.innerHTML;
            // Display the updated expression in the input element.
            document.querySelector('input').value = string;
        }

    })
})
