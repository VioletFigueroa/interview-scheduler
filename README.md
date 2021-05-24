# Interview Scheduler

Interview Scheduler is a single page application (SPA), built using React and the Create React App. Data persists on the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format.
I learned about APIs, React, Webpack, Babel,
Axios, WebSockets, Storybook, Webpack Dev Server, Jest, and Testing Libraries.

## Getting Started

1. Start by setting up the api server: <https://github.com/lighthouse-labs/scheduler-api/>
2. Fork this repository, then clone your fork of this repository.
3. Install dependencies using the `npm install` command.
4. Start the web server using the `npm start` command. The app will be served at <http://localhost:8000/>.
5. Go to <http://localhost:8000/> in your browser.

## User Stories

As an Interviewer:
I want to see what interviews are scheduled for me throughout the week.

As a Student:
I want to book an interview.
I want to see which slots are available for each day.
I want to switch between weekdays.
I want to enter my name and choose which interviewer I want to have my interview with.
I want to edit my appointments later if I made a mistake.
I want to cancel my appointments later if I change my mind.I am presented with a confirmation when I attempt to cancel an interview.
I am shown an error if an interview cannot be saved or deleted.
I do not lose data after a browser refresh.

## Final Product

!["Screenshot of Interview Scheduler"]()

## Dependencies

React
Webpack, Babel
Axios
WebSockets
Storybook, Webpack Dev Server, Jest, Testing Library
The Scheduler client application created using Create React App. Express is the basis for the Scheduler API server application.

Both servers run concurrently; requests are proxied from the Webpack development server to the API server.
