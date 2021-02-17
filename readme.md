# Youtube Dashboard

Hosted Link - https://youtube-dashboard.herokuapp.com/
A dashboard which shows latest youtube videos fetched in the interval of every 10 seconds and stores also provides a custom search bar to search through them using custom queries.

# Screenshots

![Alt Text](https://i.imgur.com/h32LIly.png)

# API Guide

- Get Api - /?page=<page-number>
  We just need to send the page number along with the get request and it will send the paginated response sorted in the order of published date.

- Search Api - /?search_query=<search_query>&page=<page-number>
  Add a custom search query in the field and it will fetch all the videos that contains the search query either partially or fully.

- sort_by parameter - /?page=<page-number>&sort_by=<date or title>
  We can also pass a sort_by parameter along with the request which will sort the response either by date or title and if we don't provide any parameter it will sort by date as default.

# Tasks

- Fetched the videos in background in the interval of 10 seconds.
- Get API with paginated response.
- Search API which searched through the stored videos using the custom search query provided.
- Project is Dockerized ( Dockerfile provided ).
- A responsive frontend dashboard to use all the apis.
- Search api is optimized for partial matching. Even if a single word matches then the video will be returned.
- Database is indexed property for searching purpose.

## Installation on local machine

```
# Clone the repository
$ git clone https://github.com/pawan1210/youtube-dashboard.git

# Change the directory
$ cd "youtube-dashboard"

# Install all the required dependencies
$ npm install

# Start the application on localhost:3000
@ node app.js

# Setup the Environment Variables
API_KEY=<API KEY>
MONGO_URL=<DATABASE URL>
```


