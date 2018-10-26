
## Table of Contents

- [Description of App](#description)
- [Link to deplyed version](#deployed-version)
- [Screenshots of my App](#screenshots)
- [Description of my tech stack](#tech-stack)
- [Brief description of where each of the key parts of your project live in your codebase](#key-parts)
- [Data Models](#data-models)
- [API Endpoints](#api-endpoints)


## Description

Itinerary Planner is designed to keep your travel plans logged in a convenient spot where you can organize thoughts and users can edit plans that they have on their travels. Be it vactioning or work-related travels, Itinerary Planner will keep and store the data that you need. Currently there are no plans for the app to be re-used by other developers.


Work In Progress features...
  - Interactive itinerary sharing
  - Suggestive Locations
  - Map Integration

Test User account with some trips already created:
  - username: testuser
  - password: helloworld


## Deployed Version

You can fine a live version:
https://itinerary-planner.netlify.com/

## Screenshots

![Main Page](./screenshots/mainPage.png)

![Trip View Page](./screenshots/tripView.png)

![Plan Edit Page](./screenshots/planEdit.png)

## Tech Stack

The client side is created using React and the server side is created using Node.js. The app uses MongoDB to store the data. 

Here is a link to [server-side](https://github.com/richart14/travel-app-server) and [client-side](https://github.com/richart14/travel-app-client)

## Key Parts

- Landing Page and Registration
  Keeps them in the login page and access to the registration page. We keep auth tokens and save it to local storage allowing for immediate access of your itinerary information.

- Trip Form and Trip List
  This page acts as my psudo dashboard where you can add itineraries and modify existing ones so that you can keep your information organzied. It uses redux to connect to the store to access the state with all the itineraries.

- Single Trip Page
  Allows you to see the different plans and days that you have for each individdual trip. I decided to have the database populate the plans and days and just modified the state in the store with a single `trip`

## Data Models

### User Schema
```
{
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {type: String, default: ''},
  lastName: {type: String, default: ''},
  email: {
    type: String,
    validate: [validateEmail,'Validation of `{PATH}` failed with value `{VALUE}`']
  }
}
```

There is a function that validates the proper email formatting.

### Trip Schema
```
{
  name: String,
  destination: {type:String, required: true},
  startDate: {type:Date, required:true},
  description: String,
  isTraveler: Boolean,
  days: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Day'}],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}
```

### Day Schema
```
{
  content: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  plans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Plan'}]
}
```

### Plan Schema 
```
{
  type: {
    type: String, 
    required: true, 
    enum:[
      'flight', 
      'rental', 
      'cruise', 
      'housing',
      'dining',
      'activity',
      'meeting',
      'map',
      'direction',
      'other', 
    ]
  },
  description: String,
  location: String,
  locationName: String,
  address: String,
  endAddress: String,
  checkIn: {type: Date, required:true},
  checkOut: Date,
  notes: String,
  confirmation: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}
```

## API Endpoints

All request and responses are in JSON

Action | Path |
--- | --- |
Users | https://travel-itinerary-app.herokuapp.com/api/user |
Authentication | https://travel-itinerary-app.herokuapp.com/api |
Trips | https://travel-itinerary-app.herokuapp.com/api/trip |
Days | https://travel-itinerary-app.herokuapp.com/api/day | 
Plans | https://travel-itinerary-app.herokuapp.com/api/plan |

### Users
`POST` request
```
{
  username,
  password,
  firstName,
  lastName,
  email
}
```
Returns 
```
{
  username,
  firstName,
  lastName,
}
```
### Authentication
`POST` request to `/login`
```
{
  username,
  password
}
```
Returns
```
{
  authToken
}
```
`POST` request to `/refresh` submits a token for a new token
```
{
  authToken
}
```
Returns
```
{
  authToken
}
```

### Trips
`GET` request
```
{
  [
    {
      name,
      destination,
      startDate,
      description,
      isTraveler,
      days
    }
  ]
}
```
`GET` request to `/:id`
```
{
  name,
  destination,
  startDate,
  description,
  isTraveler,
  days
}
```
`POST` request
```
{
  destination, 
  name, 
  startDate, 
  description, 
  isTravler, 
  days, 
  userId
}
```
Returns 
```
{
  destination, 
  name, 
  startDate, 
  description, 
  isTravler, 
  days, 
}
```
`PUT` request to `/:id`
```
{
  destination, 
  name, 
  startDate, 
  description, 
  isTraveler, 
  days
}
```
Returns 
```
{
  destination, 
  name, 
  startDate, 
  description, 
  isTraveler, 
  days
}
```
`DELETE` request to `/:id`
### Days
`GET` request
```
{
  [
    {
      userId,
      plans,
    }
  ]
}
```
`GET` request to `/:id`
```
{
  userId,
  plans,
}
```
`POST` request
```
{
  userId,
  plans
}
```
Returns updated Trip
```
{
  name,
  destination,
  startDate,
  description,
  isTraveler,
  days
}
```
`PUT` request to `:/id`
```
{
  plans
}
```
Returns update Day
```
{
  userId,
  plans
}
```
`DELETE` request to `/:id`
### Plans
`GET` request
```
{
  [
    {
      type, description, location, locationName, address, endAddress, checkIn, checkOut, notes, confirmation, userId
    }
  ]
}
```
`GET` request to `/:id`
```
{
  type, description, location, locationName, address, endAddress, checkIn, checkOut, notes, confirmation, userId
}
```
`POST` request
```
{
  type, description, location, locationName, address, endAddress, checkIn, checkOut, notes, confirmation, dayId 
}
```
Returns update Day
```
{
  userId,
  plans
}
```
`PUT` request to `/:id`
```
{
  type, description, location, locationName, address, endAddress, checkIn, checkOut, notes, confirmation
}
```
Returns 
```
{
  type, description, location, locationName, address, endAddress, checkIn, checkOut, notes, confirmation, dayId 
}
```
`DELETE` request to `/:id`