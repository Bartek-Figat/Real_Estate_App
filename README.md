

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Real estate applications</h3>
</p>

<br />

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Handled with](#handled-with)
* [Contributing](#contributing)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Folder Structure](#folder-structure)
* [API](#api)



<!-- ABOUT THE PROJECT -->
## About The Project

This microservice is a real estate application that allows you to freely post adverts such as rentals for sale. 
The application also allows you to insert advertisements, types of goods, household appliances, appliances and more


### Built With

* [node.js](https://nodejs.org/en/)
* [express.js](https://expressjs.com/)
* [mongodb nodejs driver](https://docs.mongodb.com/drivers/node/)
* [tsoa-community.github](https://tsoa-community.github.io/docs/)
* [react.js](https://reactjs.org/)

### Handled with

* [Github Projects](https://github.com/Bartek-Figat/Real_Estate_App/projects)


<!-- CONTRIBUTING -->
## Contributing

1. Clone the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


### Prerequisites

* npm
```sh
npm install npm@latest -g
```


### Installation
 
1. Clone the repo
```sh
git clone https://github.com/Bartek-Figat/Real_Estate_App.git
```
2. Install NPM packages
```sh
npm install
```
3. Setup database


### Folder Structure

```javascript

app.ts               
│
├── backend                 
│   └── src
|        └── controllers       # Controllers (functions)
|        └── db                # MongoDB is a document-oriented NoSQL database used for high volume data storage.
|        └── models            # Data in MongoDB has a flexible schema. 
|        └── util
│  
│
├── frontend                 
│   └── public
|   └── src
|     └── 
│
│
├── .env                        # Env (The process.env property returns an object containing the user environment)
│
│
├── .gitignore                  # Gitignore (specifies intentionally untracked files to ignore)
│
├──  package.json               # Project Description & Dependencies
│
│
├──  server.ts                  # Index (your server starts here)


```

### API

| Function name | Description |
| ------------- | ----------- |
| `get()`       | "/"         |
| `post()`      | "/"     |

