# Day Time Finder
A simple application to find the sunrise and sunset times of the current day based on IP Address.

### Time Taken while implementation
- Setting up the initial application (2 Hrs)
- Implementing the logic for day time calculation (30 minutes)
- Adding docs and unit tests (1 Hr)

### How to run the code
- Make sure you should have latest LTS node and react verisons installed
- Go to [ipbase.com](https://app.ipbase.com/dashboard) and geneate a new api key for calling their API
- Rename the .env.example file to .env and paste that key there so that application can use it.
- Hit command `yarn` for installing the dependecies
- Hit command `yarn dev` fro running the code in development mode.

### Run Test Cases
- Run the test cases written in code with command `yarn test`.

# Technologies Used
- #### [Vite](https://vitejs.dev) for build tool
- #### [Typescript](https://www.typescriptlang.org/) for happy coding
- #### [Jest](https://jestjs.io/) & [React testing library](https://testing-library.com/docs/react-testing-library/intro/) for testing.
- #### [Eslint](https://eslint.org/) for code standarization
- #### [Prettier](https://prettier.io/) for code formatting
- #### [Yarn](https://yarnpkg.com/) for package management 

# Directory Structure
- Root has public directory which has all the puclic and static images for better access and some configuration files for technologies we have used.
- Following is the structure for src directory  
&emsp;src/  
&emsp;&emsp;|-- components/  
&emsp;&emsp;&ensp; Contains folders for singular reusable components i.e. button, input field ...,   
&emsp;&emsp;|-- widgets/  
&emsp;&emsp;&ensp; Contains fully designed component instead of singular component. i.e. button and input are reusable components and login form is widget  
&emsp;&emsp;|-- modules/  
&emsp;&emsp;&ensp; Contains full integration of widget with state management and services integration  
&emsp;&emsp;|-- common/  
&emsp;&emsp;&ensp; Contains common functions that are not components like util functions, validation functions, error handlers, helper functions etc...  
&emsp;&emsp;|-- api/  
&emsp;&emsp;&ensp; Contains the basic configurations for calling the external or internal APIs  
&emsp;&emsp;|-- styles/  
&emsp;&emsp;&ensp; Contains global level styles or common styles use css or scss.  
&emsp;&emsp;|-- assets/  
&emsp;&emsp;&ensp; Contains static assets  

