
## List Item

Your Product Owner wants you to build at least one List Item component to display a list of items from the supplied JSON Data. The PO says people have to be able to recognize individual items quickly and easily, and it should have a visually pleasing design, in addition to conveying all the critical high-level information for that item.

## Notes

 I am using [Material UI](https://mui.com/material-ui/getting-started/) to display the data provided by the JSON file. 
 You will find comments of things I am considering and also @todos for things I left out for simplicity. 
 The app is responsive and changes the layout from two columns to one for smaller devices.

### Code 

- `public/data.json` is the example JSON file provided
- style files are found inside the `style` folder
- `variables.css` showcases the approach of having a set of variables ready to go
- all interface and type declarations are next to the component that uses them, except for listitem (used in two places and can be found in `types` folder)
- `utils` contains helper files for date formatting, image url building and modifying the MUI theme
- all component and corresponding tests are inside the `components` folder


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.





