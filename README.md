# rss-feed-parser

This app can fetch and display rss feeds.

## Installing dependencies

run `yarn` in project root directory. It will install the dependencies for both client and server.

## Initializing the app

run `yarn start` in project root directory. This command initializes both client and server at the same time.

## About the project

This project has `Array.prototype.mymap`, `Array.prototype.myfilter`, `Array.prototype.myreduce` as clones of `.map()`, `.filter()` and `.reduce()`.

Client sends the URL to fetch the RSS Feed, then the server gets the RSS Feed response and parses the XML into JSON. After that, returns the JSON response to the client. Client parses the response and visualizes the RSS Feed.

This project is developed using ReactJS and ExpressJS.
