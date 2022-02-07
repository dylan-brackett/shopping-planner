[![Build Status](https://app.travis-ci.com/dylan-brackett/shopping-planner.svg?branch=main)](https://app.travis-ci.com/dylan-brackett/shopping-planner)

# shopping-planner
## [View Live Here](https://dylan-brackett.github.io/shopping-planner/)

This app helps you to plan your shopping trips so that you can track all the items you need to get on your next trip out to the store.
With this app you can plan out the items you need to get, how much they cost, and how many. Never forget milk at the store again!

This app was built using React and styled with Tailwind CSS. This app is documented following the JSDoc style, and is tested using testing-library and Jest. This app's repository currently utilizes Travis CI to test with Continuous Integration/Continuous Development (CI/CD). Nanoid was used to create unique identifiers for the items held within the shopping list.

## Features
- Add items to your shopping list, including the quantity and the price of the item
- Delete items
- Edit the value of items
- Responsive, so this app will run on both desktop and mobile

## Known Issues
- Price not automatically adding price decimals

## Possible Future Features
- Total price of all items
- Use webstorage to save the list between sessions
- Add an optional location field for an item

## Installing and Running

In the project directory, you can run:

### `npm install`

and then

### `npm start`

To run the app. You can then open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`

Will run the tests for the application.