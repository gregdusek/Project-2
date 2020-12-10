[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Mongoose Store

Make a product inventory manager with full CRUD using Mongoose.

#### Learning Objectives

- Full CRUD app in Express with Mongoose

#### Prerequisites

- JavaScript 
- Express / Node 
- MongoDB Atlas / Mongoose 

---

## Expected Functionality (MVP)

### Index Page 

1. Your app should have an index page where
	- all the products are displayed
	- the images link to the product's show page
	- and there should be a link to add a new product.

<details><summary><strong>Example</strong></summary>
<img src="https://i.imgur.com/CRJd6Hg.png">
</details>
<br>

### Show Page 

1. Your show page should display a product with
	- a link back to the products
	- and the number of items remaining in stock.
	
2. There should be a BUY button, a DELETE button, and a link to edit the product. For now, these are purely aesthetic elements. When you click on them, they don't need to do anything. We will learn how to build out their functionality later.

<details><summary><strong>Example</strong></summary>
<img src="https://i.imgur.com/sp9DGtd.png">
</details>
<br>

3. If the quantity of your item is zero, the show page should say 'OUT OF STOCK' instead of saying how many are remaining. (Hint: conditionals in JSX).


4. The BUY button should also **not** be rendered if the quantity of the item is zero.

<details><summary><strong>Example</strong></summary>
<img src="https://i.imgur.com/5FZKyly.png">
</details>
<br>

### New Page

1. This view should render forms and submit to the appropriate route.

### Redirects 

1. The create route should redirect to the index route with a `res.redirect` (after it creates a new resource)

---

## Getting Started

Use the [today's lesson on setting up your express server with mongoose](https://git.generalassemb.ly/SEIR-Margaret/express-crud-fruits) to help you work through this assignment.

1. Create a `mongoose_store` directory and set up an Express App with MVC architecture with the appropriate file/folder structure for models, views, and controllers.

1. In `server.js` build Index, Show, New, and Create routes.

1. Create a Mongoose Schema in a `models/product.js` file for your products. The schema should have:

	```js
	  name: String,
	  description: String,
	  img: String,
	  price: Number,
	  qty: Number
	```

1. Create a model in  `models/product.js` and export it.

1. Set up validations for the price and qty (can't be less than zero) and make the name a required field.

1. Make sure you connect to your MongoDB Atlas server in `server.js`

1. Make sure your controller can access your model:

	`const Product = require('./models/product');`

1. _NOTE:_ For testing purposes, especially for having quick access to those wacky Mongo ids, maybe think about having a route /json that res.sends an index of all the data in json format so that you can copy/paste ids into your url bar or visit your collection on MongoDB Atlas and grab them from there.

</details>

## Commits 

The order in which you tackle this homework is up to you. But here are some suggested milestones for commits. Make sure you're commiting as you work, even if you do it at different times than below. 

<details><summary><strong>Milestones to Commit</strong></summary>

<hr>

**Index - Commit your work** <br>
The commit message should read: <br>
"Index working"
<hr>

<hr>

**Show - Commit your work** <br>
The commit message should read: <br>
"Show working"
<hr>

<hr>

**Create route - Commit your work** <br>
The commit message should read: <br>
"Create working"

<hr>

<hr>

**CSS - Commit your work** <br>
The commit message should read: <br>
"App has style"
<hr>

</details>

## Style Inspiration 

See some previous student's examples for some inspiration for your store. Great homework can make great portfolio pieces too! Feel free to use or not use a CSS Framework like Bootstrap, Materialize, Bulma, Skeleton etc. 

<details><summary><strong>Example 1</strong></summary>
<img src="https://user-images.githubusercontent.com/17508245/28861521-1d513946-7716-11e7-8bed-fe1194f73a2d.png">
</details>

<details><summary><strong>Example 2</strong></summary>
<img src="https://user-images.githubusercontent.com/29133264/28857343-c3c537e6-76fd-11e7-8104-5ea76de35113.png">
</details>

---

## Deliverables

A store app that meets all the expected functionality outlined at the beginning of this markdown. 

## Technical Requirements

1. Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong
1. Portfolio quality styling, unless you're maxing out on your 4hrs per night, in which basic styling will be accepted. Leave a note in your submission issue if this is the case. 

## Submission Guidelines

You will be required to submit this assignment by 10 AM on Monday morning. We suggest that you try not to save it all for Sunday night. Make a little schedule for yourself. 

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
