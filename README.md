# Getting Started with Hack Idea App

git clone https://github.com/suneethar/Hack_idea_Frontend.git
npm i
npm run start

### Run test cases
###### (Login page and Home page have all test covered, components basic test cases)
npm run test 

## Assumptions
* Title maxlength is set to 40 character.
* User can only vote(once user voted, he cant remove vote, only like no unlike).
* There is no restriction on voting, any employee can vote idea any number of time.
* Since we are not maintaining employee details for voting, there is no restriction set.

## How to test
* Employee Ids to login: 4663, 36655
* In the src folder you will find fakeData folder which has employees and ideas details.
* Use employeeId to login.
* Login has EmployeeId validation, so only employees in the fakeData/dummyEmployeeData.tsx file are allowed.
* Once you login, Ideas list in the fakeData/dummyIdeasData.tsx will be shown.
* Click on Add Idea button to add new Idea.
* Currently all fields are mandatory.
* Create button will be enbaled only if all fields are entered.
* Once you enter the data, click on create button to create idea.

Note: 
* Ideas are not persisitant, it will be reset on page refresh.
* Test cases are written for Login page and Home page and for component only one test case are added.

## API with ExpressJS and MongoDB
You can checkout the backend and use the API, (MongoDB local/Cloud set up is needed):
https://github.com/suneethar/Hack_idea_Backend.git

## FrontEnd Application Demo
Find the demo here:
https://suneethar.github.io/Hack_idea_Frontend


