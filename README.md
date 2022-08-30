# Seasons React App

https://stephaniedejager.github.io/seasons/

Display content in browser depending on location and month of year

Geolocation API: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

file:///home/stephanie/Pictures/Screenshots/Screenshot%20from%202022-08-30%2014-50-47.png

file:///home/stephanie/Pictures/Screenshots/Screenshot%20from%202022-08-30%2014-51-52.png![image](https://user-images.githubusercontent.com/68548733/187443164-a6be2d3a-7240-4686-a4cc-16f99d8ace6b.png)

file:///home/stephanie/Pictures/Screenshots/Screenshot%20from%202022-08-30%2015-00-38.png![Uploading image.png…]()

Focused on learning about the React State System and The Component Lifecycle

Learned how to 1) initialize a state - either inside the constructor or not 

and

Where it is best to 2) do initial data-loading (like location API request) - inside the componentDidMount().

Although you technically can do initial data-loading in the constructor(), it is best practice to do it in componentDidMount() - I also noticed that the location was returned faster when using the latter.

Used Semantic UI to show icons and a spinner
https://semantic-ui.com

The spinner was implemented as a reusable component with a message prop, because we needed something custom.  Also included default.Props with a default message of Loading.

Basic CSS styling that changed depending on the season

To clean up the code we used a config function for the conditional logic and ES2015 to to extract the variables from the config object.

https://developers.google.com/web/shows/ttt/series-2/es2015

Refactored the conditional logic inside the render() function with a helper function renderContent() to make it more easily edible, but it slowed down the response on the screen. 
