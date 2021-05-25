# Sushi-Master [Click here to see the demo](https://jovial-elion-2c016e.netlify.app/) 
```
--- This project contains a representation of the shopping cart list for a sushi restaurent.
--- User can add items in the cart.
--- User can delete items from the cart.
--- User can select size of a particular item from three different sizes
--- User will get the total cost of their cart with the vat incl.
```

## Author
```
--- Stifnes Samuel
```

### Technologies & Methodalogies
```
--- Vanilla JS
--- Local Storage
```
### Thought Process
```
--- Using the mockups, the UI is divided into the following components
	-- Banner
	-- Main Layout
		-- Products
			-- Singe Product Item
		-- Cart
			-- Cart Header
			-- Cart Content
				-- Cart Item
			-- Cart Footer

--- Storage class is our single source of truth for the entire app. The data inside the storage is used across the application.

--- Assets contains all the images used in our application

--- Normal API calls doesn't have large chunks of data in a single request. For showing how multiple API calls can be handle in a single request. I have used /products/api.js. Also used the methods to show how we can implement API documentation on a small scale.

--- Using seeds here to depict the dummy data we have for products. In real world we will be having this data from server side.

--- Using one compiled css file with variables. Variables can be helpful in various ways if and when we want to change the theme of our application. Other than that class selectors are used for seperate components and then inherited styles for nested elements. This makes our styled components reusable.

--- Single HTML file for the markup used to imply that we can create the app as an SPA.

--- The main app.js is maintained as minimal as possible. With all the modular import, initialization and setup of the app.

--- Constants are used here because they can be really helpful when localization, internationalization has to be implemented. And also there is only single point of change.

--- Avoided any Global Variables.

--- Avoided any use of 'var' to not cause any scope issue.

--- Smaller readable functions which mainly serves one purpose.

### Improvements
  --- Product and Cart can be merged under one components folder
  --- Cart - DOM render and functionality can be separated
  --- More separate classes
  --- Loading - update state with loading information
  --- Currency - multiple currency support 
  --- Minify and concatenate css  
```

### Project setup
```
--- Clone the repository from github either using 'git clone' or 'Download as zip'
--- You will need a dev environment to run the 'index.html' file
--- Simply open the repository in VSCode or any editor with 'live-server' enabled
--- Right click on the 'index.html' and open it with live server
```

### Project Directory
```
--- appstate
	--- storage.js /* Contains all the local storage setters and getters */

--- assets /* Contains all images used */

--- cart
	--- cart.js /* Contains all the logic for the cart */

--- constants
	--- constants.js /* Contains all the constants used */

--- products
	--- api.js /* Contains all the api calls related to products */
	--- products.js /* Contains all the logic for the products */

--- seeds
	--- data.json /* Contains the json data for products and sizes */

--- styles
	--- style.css /* Contains the styles for the app */

--- app.js /* Contains the main javascript file with all the imports and the main DOM manipulation */	

--- index.html /* Contains all the HTML markup for the app */	
```
