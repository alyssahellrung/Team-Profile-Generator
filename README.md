# TEAM PROFILE GENERATOR--Homework 10

## Description  
This is a command-line application that dynamically generates a webpage that displays information about a team of employees based on user input.

## Table of Contents

* [Technologies Used](#technologies-used)

* [Dependencies](#dependencies)

* [How to Use](#how-to-use)

* [Demonstration Video](#demonstration-video)

* [How I Made This](#how-i-made-this)

* [Tests](#tests)

* [GitHub Repo](#link-to-github-repo)

* [Future Development Ideas](#future-development-ideas)

## Technologies Used  
Built in Visual Studio with    
HTML
CSS
Bootstrap
Font Awesome
Javascript  
Node.js   

## Dependencies  
Inquirer   
fs  

## How to Use  
1) Install Inquirer using npm install.
2) Run the program by typing "node app.js" in the command line.
![image]() 
3) A series of questions will appear, one by one. They will ask you to input:  
  --your GitHub username
  ![image]()  
  --the title of your project  
  --a short description of the project  
  --any installation instructions your user will need in order to run your program  
  --instructions on how to use your program  
  --what version your program is  
  --what license you are using (choose MIT, Apache, BSD, ISC, or no license)  
  --instructions for how others can contribute to your project  
  --how to run tests on the project  
  ![image]()
4) Once all of the questions are answered, a new file called "README.md" will appear in your directory. 
![image]()
This file will include:  
  --your project's title  
  --badges for your license and version number.     
  --a link to your GitHub  
  --the short description of your project that you entered on the command line  
  --a table of contents with links to the appropriate sections of your README  
  --the installation instructions, usage instructions, version, license, instructions for how to contribute, and test information that you entered on the command line  
  --a section where users or developers can contact you with questions. This section will include your GitHub profile picture and your GitHub email address if it is public.
![image]()  

## Demonstration Video Link


## How I Made This  
I started with two Javascript files, one (index.js) that handled the Inquirer prompts, the Axios AJAX call, and the writeFile function, and the other (generateMarkdown.js) that laid out the structure of the README.md file that I was putting together, using template literals as a way to both plan out the page and handle the respnses coming in from the user and GitHub's API.  

Because I brought the generateMarkdown.js file over to index.js and assigned it to the const "markdown", I was able to inject that template into the writeFile function in index.js.  

The application gets most of the content for the generated README directly from the user, but it uses their GitHub username to access their GitHub profile image and email address from the GitHub API.

## Tests
Tested with Jest. Install Jest and type "run npm test" in the command line to test.

## Link to GitHub Repo    
(https://github.com/alyssahellrung/Team-Profile-Generator)

## Future Development Ideas




