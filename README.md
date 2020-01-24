# Web Dev Toolkit

## https://web-dev-toolkit-client.now.sh/



### Landing Page
![Image of landing Page](https://i.imgur.com/kOUeLwu.png)

### Sign Up Page
![Image of Sign Up Page]https://i.imgur.com/GrQ5MmE.png)

### Dashboard
![Image of Dashboard](https://i.imgur.com/4GPI1zB.png)

### Article View
![Image of Favorites View](https://i.imgur.com/alajI1j.png)

### Add Random View
![Image of Random View](https://i.imgur.com/Yba4CTC.png)



### What is Web Dev Toolkit?

Web Dev Toolkit is an aggregated resoucre hub. This app makes it easy for Web Developers to find learning and working resourcs in one location. The resources are grouped together based upon their type; Tutorials, Course, Videos, and Utilities. This app allows authorized users to visit a variety of web development resources, save favorite resources, and search through resources to find specific content.

### What built Web Dev Toolkit?

Web Dev Toolkit client was built using React and vanilla HTML & CSS. It utilizes React-Router and other functions to navigate through content choices and maniupulation.

Web Dev Toolkit API was built using Node, PostgreSQL, knex, and Express. It also utilizes chai & Mocha as testing methods.


# Web Dev Toolkit API Documentation

### GET Get All Resources
https://web-dev-toolkit-api.herokuapp.com/api/resources
https://web-dev-toolkit-api.herokuapp.com/api/resources

Example Request
Get All Resources
curl --location --request GET 'https://web-dev-toolkit-api.herokuapp.com/api/resources'


### GET Get Resources by Type ID
https://web-dev-toolkit-api.herokuapp.com/api/resources/byType/1
https://web-dev-toolkit-api.herokuapp.com/api/resources/byType/1

Example Request
Get Resources by Type ID
curl --location --request GET 'https://web-dev-toolkit-api.herokuapp.com/api/resources/byType/1'


### GET Get All Types
https://web-dev-toolkit-api.herokuapp.com/api/types

Example Request
Get All Types
curl --location --request GET 'https://web-dev-toolkit-api.herokuapp.com/api/types'


### POST Login
https://web-dev-toolkit-api.herokuapp.com/api/auth/login
https://web-dev-toolkit-api.herokuapp.com/api/auth/login

HEADERS
Content-Typeapplication/json
BODY raw
username: webdev@webdevtoolkit.com,
password: Password35!

Example Request
Login
curl --location --request POST 'https://web-dev-toolkit-api.herokuapp.com/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw 'username: webdev@webdevtoolkit.com,
password: Password35!'


### POST Submit User
https://web-dev-toolkit-api.herokuapp.com/api/users
https://web-dev-toolkit-api.herokuapp.com/api/users

HEADERS
Content-Typeapplication/json
BODY raw
username: webdev2@webdevtoolkit.com,
password: Password35!,
name: Web Dev 2

Example Request
Submit User
curl --location --request POST 'https://web-dev-toolkit-api.herokuapp.com/api/users' \
--header 'Content-Type: application/json' \
--data-raw 'username: webdev2@webdevtoolkit.com,
password: Password35!,
name: Web Dev 2'
