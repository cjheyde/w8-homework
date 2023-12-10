# Week 8 Homework

### Deliverable: 
Create an application that changes the button name and the background color using a Pure Component and  a Higher-Order Components (HOCs) to handle state and color functionality. 

### Development:
1 - Fork the project with the start structure from https://github.com/cjheyde/w8class1-homework
- To fork you need to click Fork, In the top-right corner of the repo page.
- Under "Owner," select the dropdown menu and click your GitHub username as the owner for the repository.
- Click Create fork.

2 - Open your terminal, navigate to the folder where you want to have your homework

3 - Still in the terminal, type: 

    git clone <URL-OfYourForkedRepo> 

4 - Navigate to your project’s folder: 

    cd projectFolderName

5 - Type: 
    
    npm install

6 - Check if all is running ok, type: 

    npm start 

7 - If all is ok, hit CTRL + C to stop, and then start your code.

8 - Create a Pure Component called ColorButton. 
- It should have a button that changes the background color between “WHITE“ and “BLACK” when clicked. The initial state should be “WHITE”.

9 - Create a Higher-Order Component (HOC) called withColor. 
- This should wrap the CollorButton component and provide it with the necessary state and functionality to handle the background color and the button name.

10 - Go back to the ColorButton component and instead of exporting it directly, export it as:
    
     export default withColor(CollorButton)

11 - Call the CollorButton component in App.js.

12 - Style all with CSS, to make it look as good as you can! 

### Useful links
- How to fork a GitHub repository - https://docs.github.com/en/get-started/quickstart/fork-a-repo 
- Pure Components - class - https://www.youtube.com/watch?v=zew5VsF76n0
- Pure Components class and Shallow prop and state comparison (sc) - https://www.youtube.com/watch?v=YCRuTT31qR0 
- Pure Component - function - React.memo() - https://www.youtube.com/watch?v=BS2gQS-u93k
- Higher Order Components (HOC)  in 3 parts -	
    - part 1 - https://www.youtube.com/watch?v=B6aNv8nkUSw 
    - part 2 - https://www.youtube.com/watch?v=rsBQj6X7UK8 
    - part 3 -  https://www.youtube.com/watch?v=l8V59zIdBXU 
- HOC in 10 minutes - https://www.youtube.com/watch?v=J5P0q7EROfw 


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
