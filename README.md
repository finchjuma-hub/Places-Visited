# Places-Visited

This project is s JavaScript web application designed to track destinations and display their details dynamically. It was built as part of a web development assignment focusing on constructors, prototypes and object driven logic. Each destination is represented as an object with multiple properties e.g location. When a user clicks on a place name, the application reveals its details and a picture. 

## Project Structure
index.html - Main html file with header, container and footer.
style.css - Styling for layout, cards, hover effects and images.
script.js - Contains constructors, prototypes, dynamic rendering.
images - Folder containing place images. 

## Features
Constructor & Prototype: Each place is created using a constructor function with a prototype method.
Dynamic Rendering: Cards are generated dynamically with JavaScript, not hardcored in html.
Interactivity: Clicking a place title toggles visibility of its details and image.
Responsive Styling: Clean card layout with hover effects and image styling.

## Setup 
Clone or download the repository.
Ensure the following fikes exist: `index.html`, `style.css`, `script.js`, `images folder`
Open `index.html` in a browser.

## Adding New Place
To add a new place:
   Add an image file to the `images` folder.
   In `script.js`, add a new `Place` object to the `places` array

## Examlpe Places
Kisumu 
Nairobi
Mombasa
Kakamega
Tigoni 
Naivasha
Nyahururu
Nanyuki

## Peer Review Checklist
Do JavaScript objects drive application logic?
Are consrtuctors and prototypes used succesfully?
Are pseudo-coded tests present in the README?
Does the application work as expected?

## Pseudo-coded Tests
Test 1: Place Constructor Creates Object Correctly
Input:
new Place(
  "Nairobi",
  ["Wilson Airport", "University of Nairobi"],
  "Autumn",
  "Great balance for study and exploration.",
)

Expected Output:
Object with properties:
location = "Nairobi"
landmarks = ["Wilson Airport", "University of Nairobi"]
timeOfYear = "Autumn"
notes = "Great balance for study and exploration."

Test 2: Prototype Method Returns Place Details
Input:
place.getDetails()

Expected Output:
An object containing:
- landmarks (Array)
- timeOfYear (String)
- notes (String)
- image (String)

Test 3: Clicking a Place Title Retrieves Correct Object
Action:
User clicks on "Nairobi"

Expected Result:
The application retrieves the Nairobi Place object
Displays Nairobi landmarks, time of year, notes, and image

Test 4: DOM Updates Based on Object Data
Action:
User clicks any place title

Expected Result:
The DOM updates using the clicked Place object's properties
 

## Future Improvements
Add search or filter functionality.
Make cards collapsible with animations.
Add a form to input new places dynamically.

## License
This project is licensed under the MIT license