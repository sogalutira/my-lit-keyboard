#My Lit Keyboard

You always wanted a mechanical keyboard, but you don't have any money for it! Good thing you're a programmer! So you'll just develop one yourself! :D

<p align="center">
<img src="https://github.com/sogalutira/my-lit-keyboard/blob/master/keyboardtut.gif" width="40%" height="40%"></img></p>

###Objective
Create an application using HTML text area, JavaScript event listeners, classList, key codes, CSS styling and CSS animations.

###Prerequisites
* HTML structures and buttons
* Basic understanding of JavaScript and DOM
* Basic understanding of conditional statements

###Requirements
* Sublime Text
* Chrome Dev Tools
* Key Codes

###Desired Outcomes
Upon completing this project students should understand:
* JavaScript Event Listeners/Handlers
* HTML text area
* Key Code
* Conditionals
* CSS animations
* classList

###Your Challenge
Get started:

1. Fork and Clone this repo
2. Create and app.js and styles.css file
3. Link the app.js and styles.css in the index.html

####Step 1 - CSS
1. In the CSS file use the `border` property to create borders for each **span**
2. Apply `width` and `height` as necessary so that the numbers and letters look like a keyboard
3. Create a class `.active` for the span and use the `color` property to set a color of your choice for the span to test the following event listeners below

####Step 2 - JavaScript
Function for `keydown`

1. Create a function to add the class *active* to the span using `.classList.add('className')`
2. Target each span's ID by using `document.getElementById`. There is a property on the object called `key` which has a value of the typed key from the keyboard. Use `key` to help you target each span's ID
3. Create an event listener for `keydown`

Function for `keyup`

1. Create a function to remove the class *active* to the span using `.classList.remove('className')`
2. Create an event listener for `keyup`


Conditionals

1. Since keyboards have two shift keys, create an **If statement** to add the class *active* to both shift keys
2. Create an **If statement** so that there are no errors when you type a key that has no span/key on the virtual keyboard

####Step 3 - CSS Animations
1. In the *active* class use the `animation` property to add a neon glow to each virtual key
2. Use `keyframes` animation to make the spans glow with the `text-shadow` property.
2. Remove the `color` property

####Step 4 - HTML
1. Create a `textarea` above the virtual keyboard
2. Style the `textarea` in the styles.css file
3. Use `h1` to create a header and add a neon glow to the header

####Step 5
Style as needed in the styles.css file

####Stretch
1. Create a button that clears all the text in the `textarea`
2. Create a button to have all the keys on the virtual keyboard light on and off.
3. Create a button to have all the keys on the virutal keyboard light up and cycle through different colors.
4. Create a button so the the keyboard will default to where the keys light up on each keydown.
5. Create a function to allow *tab* indentation in the `textarea`


###Resources
* [classList](http://www.w3schools.com/jsref/prop_element_classlist.asp)
* [Comparison and Logic Operators](http://www.w3schools.com/js/js_comparisons.asp)
* [Event Listeners](http://www.w3schools.com/js/js_htmldom_eventlistener.asp)
* [HTML Button Tag](http://www.w3schools.com/tags/tag_button.asp)
* [KeyCodes](http://keycode.info/)
* [Shadow Effects](http://www.w3schools.com/css/css3_shadows.asp)
* [Text Area](http://www.w3schools.com/TAgs/tag_textarea.asp)