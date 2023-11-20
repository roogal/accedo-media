# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Scope
Create a React media application which is capable of doing basic video player functionalities. 

Note: Having proper design is always nice to have but is not a must. We are mainly curious about the core logic of the application. Please feel free to have bare minimum styling for the elements.

## Playlist
The player has a default playlist of 3 media by default. To create the playlist pick any 3 of the publicly available media (https://gist.github.com/jsturgis/3b19447b304616f18657). 
In addition to the default playlist the player should also allow the user to add/remove urls. Error handling is not necessary, we can assume that the user always provides a url with valid media. All the items from the playlist should be visible to the user and the currently played one should be in bold.
- Create a list of media from the playback
- Highlight the currently played media by making the text bold

### Adding media to playlist
It should add the url to the playlist upon pressing enter in the input or clicking on the submit button
- Create a text input
- Create a submit button

### Removing media from the playlist
- Create a remove button next to each of the media items

## Player controls
### Functionalities
- Go to previous media (`assets/previous.svg`)
  - Go to the previous item from the playlist. Goes to the last media if the player was on the first.
- Fast backwards 10 seconds (`assets/backward.svg`)
  - Rewind the media by 10 seconds
- Play/pause button (`assets/play.svg` and `assets/pause.svg`)
  - The buttons should be in the same position in the middle of the controls
  - Show play button when the player is paused and show pause button when the content is playing
- Fast forwards 10 seconds (`assets/forward.svg`)
  - Advances time by 10 seconds
- Go to next media (`assets/next.svg`)
  - Go to the next item from the playlist. Goes to the first media if the player was on the last.

### Design
The controls should have unique icons. Please find them in the `assets/` folder.

#### Media is playing
```
| ⏮ | ⏪ | ⏸ | ⏩ | ⏭ |
```
#### Media is paused
```
| ⏮ | ⏪ | ⏵ | ⏩ | ⏭ |
```

## Submission
Your solution can be emailed back to us as a Zip file, or uploaded to any git solution you'd like with a link to the public/private repository.
