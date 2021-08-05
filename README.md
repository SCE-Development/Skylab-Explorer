# Skylab Explorer
This repo is part of SJSU SCE club summer 2021 internship project. This is the frontend displaying data from data warehouse

## 1. Tech stack we use:
* NextJS with Typescript and Yarn for package manager instead of NPM
* We are using yarn 1 since yarn 2 is unstable with our tech stack
* Recharts libraries for graphs
## 2. Set up the repo:
* Have node installed
* Clone the repo:  `git clone https://github.com/SCE-Development/Skylab-Explorer.git_`
* Install yarn via npm `npm install --global yarn`
* Use yarn to install packages from package.json file `yarn add`
* __Configure .env file__
  + Create `.env.local` file based on .env file as a template 
  + CLIENT_ID and CLIENT_SECRET are the discord app you want to use Discord login through
  + APP_URI is something I forgot but needed
  + JWT_SECRET is only needed in development mode
## 3. How to run the repo:
* Use yarn to run the repo in devevelopment mode: `yarn dev`
* Run with docker: `need instruction`
* Create production build: `need instruction`
## 4. How to contribute to the repo:
* You can fix stuff mentioned in issues
* Make a new branch whenever you are implementing/fixing something `git checkout -b [branchName]`
* If it works, push the code then make a pull request to the main branch
5. The structure of our repo
* `/pages`: This is where all the pages of the app. By NextJS, directory under this folder become their own page
  + Ex: /pages/dashboard can be access through `localhost:3000/dashboard`
* `/Components`: Contains components that make up pages, will change to /components later
  + Will make it so that every components have their own folder later
* `/utils`: Contains ultility methods, functions for logic layer
* `/lib/api`: API calls to backend
* `__test__`: test directory
## Future testing work


