# Express.js: Crash on malformed JSON POST request

This repo demonstrates a common error in Express.js applications: crashing due to unhandled exceptions when processing malformed JSON in POST requests.

## The Bug

The `bug.js` file contains an Express.js server that creates a new user based on a JSON POST request to the `/user` endpoint.  It fails to handle cases where the request body is missing or improperly formatted, leading to a server crash.

## The Solution

The `bugSolution.js` file provides a corrected version of the server with proper error handling.  It checks if `req.body` contains the necessary data before accessing it, preventing crashes from malformed JSON input.

## How to reproduce the bug

1. Clone this repo.
2. Navigate to the directory.
3. Run `npm install` to install the express dependency.
4. Run `node bug.js` to start the server.
5. Send a malformed POST request to `http://localhost:3000/user` (e.g., with missing or extra data) using a tool like Postman. The server will crash.

## How to run the solution

1. Run `node bugSolution.js`
2. Test with a malformed request.  The server will now respond with an error message instead of crashing.