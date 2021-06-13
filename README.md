# The Deck Game

## Testing plan


### Unit testing
For easy unit testing a refactoring would be needed.
`react-testing-library` is good for testing React components.

Most of the dummy components located at `src/components` do not need any testing, as they do not include any logic or any hardcoded values.

`src/components/controls.tsx`

- Button element with text "Draw Card" is present
- When clicked on the button, `onDrawClick` is fired
- Button is disabled when `allowDraw` is set to false or when whole form `Controls` is disabled. By default, it should be enabled.


`src/deck-api`

- We can use `jest` as no React is present. 
- We can mock `fetch` to return custom data and to make sure the data manipulation is correct

`src/pages/game.tsx`

- Refactoring would be needed
- We could make `useDeckGame` to serve data from `React.Context` and by doing that, we can mock anything the `useDeckGame` returns.
- By using mocked data we can verify that when `loading` is set to `true`, a text "Loading..." is displayed
- By using mocked data we can verify that when `error` is set to `error`, proper error message is displayed
- By using mocked data we can verify that when game is not loading and has no errors, controls are displayed


`src/deck-game-hook`

- Ideally this could be done with `React.Context`
- Rest API methods are provided by `React.Context` and thus can be easily mocked
- By using mocked data we can verify that `hasWon` is `true` when the sum of the cards on a table is exactly 21.
- By using mocked data we can verify that `isBust` is ONLY `true` when the sum of the cards on a table is greater than 21.
- By using mocked data we can verify that `cardsOnDeskScore` is computed correctly - 10 for face cards, 11 for ace, correct value otherwise

### Integration testing

Cypress is a great tool which can be used to test the code. Backend can be isolated by mocking `fetch` requests. 
