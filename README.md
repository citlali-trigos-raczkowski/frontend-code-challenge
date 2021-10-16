## Who's that Pokemon?

View the [demo](demo/demo.mov) here!

Info included in this page:
- Available Commands
- Features
- Additional Docs

To read about the [day-to-day work, go here](/docs/dayToDay.md). And to visit the original Readme instructions, [go here](docs/Instructions.md).

### Available commands
- `npm run start` at the root of the repo will spin up the backend and frontend in a single command and allow you to view the application on (http://localhost:8080)[http://localhost:8080/]

- `npm run test` will run the cypress tests and create a coverage report


### Features
#### App Features
- fuzzy search bar 
- infinite scroll + loading bar
- Pokemon image behind tile; on over --> opacity goes up
- Randomize me! option as first tile w/ occasional die movement
- Title `Who's that Pokemon` minimizes to WTP icon in top left 
- Existing `Not found` page
- Favorites toggling
- On scroll, title turns into icon and remains on page

#### Dev Features
- web hooks on commit
- conventional commit requirement with issue #
- root package.json allowing one command startup


#### By Page Navigation 
- Home page with
    - fuzzy search
    - filtered pokemon via type
    - tabs for All or Favorite
    - ability to toggle favorite
    - grid and list view
    - clicking on a pokemon `name` navigates to `/:name`
    - infinite scroll
    - ability to choose random pokemon
- Individual Pokemon view
    - ability to toggle favoritecd 
    - speaker icon that can play pokemon sound
- Not Found page
    - When navigating to `/:name` but `name` does not exist
    - link to return back home 

#### Features for the future (if time permitted)
- toast notifications to display success and error messages for adding/removing from Favorites
- page transitions
- PR to update node-sass version in OG repo
- demo video
- ability to create a new pokemon
- treeshaking
- fp-ts for option