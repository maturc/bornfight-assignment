Second branch
I'm not happy with the structure/design of this solution and its quite bothering me, so I will try fixing it in this branch.

Things I want to improve: The mock api doesnt need a server to run, gonna remove it, fixing my project structure, gonna add webpack, might be able to remove express(dunno about this one tho, might reintroduce problems which made me use it in the first place)


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
