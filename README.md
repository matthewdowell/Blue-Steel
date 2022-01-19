// README

# Blue Steel

## Table of Contents
  1. Description
  2. Installation
  3. Usage
  4. Contributors
  5. Contributing
  6. License

## Description

Catwalk is a front-end development project that focuses on creating an e-commerce application using ReactJS framework.

This single page web application consists of four interactive widgets: product overview, related products, questions and answers, and ratings and reviews. Users have the ability to post questions, answers, and reviews about the available products. 

Widget Overview:
  1. Product Overview - The product overview appears at the top of the page and serves as the entry point for users. 
  2. Related Products - Allows users to see related products and build an outfit of preferred products.
  3. Questions and Answers - Allows users to search questions, ask questions, and post answers.
  4. Ratings and Reviews - This widget summarizes how customers feel about the selected product. The user can see how many people have given the product a rating of 1 to 5 stars, as well as what people have written about the product. Reviews can be sorted in ascending or descending order on various characteristics such as date written, review length, rating given, and review helpfulness. 

## Installation

```bash
Clone the repository to your local machine
open the repo folder in preferred code editor
npm install
create .env file in root directory and assign an API key/github token to REACT_APP_API_KEY variable:
  REACT_APP_API_KEY=<your github personal access token goes here>
  for info on personal access tokens, visit (https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
create config.js file in root directory and assign an API key/github token to TOKEN variable:
  export const TOKEN = 'your personal access token';
npm start
open localhost:3000 in your preferred browser

if you want to make edits to the code base, npm run react-dev will have webpack rebuild your bundle every time you save new changes. 
```

## Usage

Blue Steel is an e-commerce web application for buying various types of fashion products.  This application allows users to connect with their inner beauty, and communicate with like-minded individuals about current fashion trends.  Users can view products and build outfits. Users can also ask questions about particular products and post answers.  Users provide others with fashion insights by leaving reviews for any and all products.

## Contributors

Matthew Dowell, Evan Maestro, John Duval, and Wilson Wong

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
