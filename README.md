# About

This project is a single page react app that gets data from WordPress JSON API, and uses [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/) and [ACF to REST API](https://wordpress.org/plugins/acf-to-rest-api/) plugins to quickly create custom fields and expose them to WP API.


# Prerequisites:

git: [https://git-scm.com/downloads](https://git-scm.com/downloads)<br/>
NodeJs: [https://nodejs.org/](https://nodejs.org/)<br/>
WordPress + Advanced Custom Fields & ACF to REST API setup

# How to run this project on a local environment

## Linux/MacOS

run the following commands on terminal:<br/>

`git clone https://github.com/ramonlsouza/wp-react-bdr-aurum.git`<br/>
`cd wp-react-bdr-aurum`</br>
`npm install`</br>
`cp .env.example .env`<br/>
`nano .env`<br/>

change WordPress API URL on file<br/>
press: ctrl+X, Y, enter (save and close)

run the following command on terminal:<br/>
`npm start`

open http://localhost:3000/ on browser

## Windows

run the following commands on terminal:<br/>
`git clone https://github.com/ramonlsouza/wp-react-bdr-aurum.git`<br/>
`cd wp-react-bdr-aurum`</br>
`npm install`</br>
`copy .env.example .env`<br/>
`notepad .env`<br/>

change WordPress API URL on file<br/>
save file and close

run the following command on terminal:<br/>
`npm start`

open http://localhost:3000/ on browser