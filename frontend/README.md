## Who's that Pokemon?

Info included in this page:
- Available Commands
- Features
- Additional Docs

### Available commands

`npm run serve` -- spins up the frontend made available on [http://localhost:8081/](http://localhost:8081/)
`npm run test:unit` -- runs the unit tests and builds a coverage report at the root
`npm run test:e2e` -- runs the e2e test on cypress


### Features
#### App Features
- Ability to favorite and unfavorite pokemons with toast notifications
- Subtle fade page transitions
- Not-found page for visits to any `:name` pathname that doesn't correspond to a pokemon

#### Dev Features
- web hooks on commit
- conventional commit requirement with issue #
- root package.json allowing one command startup
- tests


#### By Page Navigation 
- Home page with
    - filtered pokemon via type
    - tabs to search by all or favorites only
    - ability to toggle favorites
    - grid and list view
    - clicking on a pokemon `name` navigates to `/:name`
- Individual Pokemon view
    - ability to toggle favorite
    - speaker icon that can play pokemon sound
    - info on evolutions
- Not Found page
    - When navigating to `/:name` but `name` does not exist
    - link to return back home 


#### Wish List / Future work
- demo video
- ability to create a new pokemon
- treeshaking
- data on how each pokemon stacks up against the others (analyzing and displaying height, width, etc. against others)
