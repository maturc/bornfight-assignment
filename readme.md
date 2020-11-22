I wasn't happy with the structure of my solution so I improved it a bit on a [second branch](https://github.com/maturc/bornfight-assignment/tree/v2)

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
