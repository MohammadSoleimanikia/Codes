import Player from "./components/Player";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player symbol={'X'} initialName={'player1'}></Player>
          <Player symbol={'O'} initialName={'player2'}></Player>
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
