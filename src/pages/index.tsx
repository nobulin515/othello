import { useState } from 'react';
import styles from './index.module.css';

const conuntStone = [2, 2
]


const directions = [
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],


];

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    for (const direction of directions) {
      if (newBoard[y + direction[0]] !== undefined && newBoard[y + direction[0]][x + direction[1]] === 3 - turnColor) {
        const targetArrays = [];
        for (let i = 1; i < 8; i++) {
          if (newBoard[y + direction[0] * i] !== undefined && newBoard[y + direction[0] * i][x + direction[1] * i] === 3 - turnColor) {
            const targetY = y + direction[0] * i;
            const targetX = x + direction[1] * i;
            targetArrays.push([targetY, targetX])
            continue;
          } else if (newBoard[y + direction[0] * i] !== undefined && newBoard[y + direction[0] * i][x + direction[1] * i] === turnColor) {
            newBoard[y][x] = turnColor;

            console.log(targetArrays)
            for (const targetArray of targetArrays) {
              newBoard[targetArray[0]][targetArray[1]] = turnColor;
            }
            setTurnColor(3 - turnColor);
            setBoard(newBoard);
            conuntStone[0]=0;{conuntStone[1]=0}


            for (let o = 0; o < 8; i++) {
              for (let n = 0; n < 8; n++) {



                if (newBoard[o][n] === turnColor) {
                  conuntStone[0] += 1


                } else if (newBoard[o][n] === 3 - turnColor) {
                  conuntStone[1] += 1
                }


              }




            }

          }
        }

        break;
      }
    }




  };
  return (
    <div className={styles.container}>
      <div />
      <div>{turnColor === 1 ? 'BlackTurn' : 'WhiteTurn'}</div>
      <div>{conuntStone[0]}BlackStone,{conuntStone[1]}WhiteStone  </div>
      <div className={styles.boardStyle}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cellStyle} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stoneStyle}
                  style={{ background: color === 1 ? '#000' : '#fff' }}


                />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
