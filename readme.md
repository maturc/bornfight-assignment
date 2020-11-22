I wasn't happy with the structure of my solution so I changed some things around in this branch.
Added webpack and typescript, removed global variables, using imports now instead of importing all scripts directly into the html files, made everything a bit more modular and readable.

# Install and run
1. `yarn install` or `npm install`
2. `yarn run start` or `npm run start`
3. `yarn run start:server` or `npm run start:server`
4. Open `http://localhost:3000`

# Features
* limit the number of displayed albums e.g. `http://localhost:3000/?limit=5`
* clicking on an artist links to the artists page
* routing for specific artists by id e.g. `http://localhost:3000/artist/2`
* favorites toggle
* responsive design
* search functionality
  * searchbar
  * searchbar suggestion dropdown
  * search with url query parameters e.g. `http://localhost:3000/albums/?q=when`
