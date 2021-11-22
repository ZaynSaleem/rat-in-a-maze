import React, { useEffect, useState } from "react";
import Boxes from "./Boxes";
import "./style.css";

const RatGrid = () => {
  const [maze, setMaze] = useState([
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
  ]);
  const [solved, setSolved] = useState("");
  let N = maze.length;

  useEffect(() => {
    console.log(maze, "Maze");
  }, []);

  const isSafe = (maze, x, y) => {
    return x >= 0 && x < N && y >= 0 && y < N && maze[x][y] === 1;
  };

  const solveMaze = (maze) => {
    let sol = new Array(N);

    for (let i = 0; i < N; i++) {
      sol[i] = new Array(N);
      for (let j = 0; j < N; j++) {
        sol[i][j] = 0;
      }
    }

    if (mazeSolving(maze, 0, 0, sol) === false) {
      console.log("Solution doesn't exist");
      return false;
    }
    setSolved(sol);
    return true;
  };

  const mazeSolving = (maze, x, y, sol) => {
    if (x === N - 1 && y === N - 1 && maze[x][y] === 1) {
      sol[x][y] = 1;
      return true;
    }

    if (isSafe(maze, x, y) === true) {
      sol[x][y] = 1;

      if (mazeSolving(maze, x + 1, y, sol)) {
        return true;
      }
      if (mazeSolving(maze, x, y + 1, sol)) {
        return true;
      }
      if (mazeSolving(maze, x - 1, y, sol)) {
        return true;
      }
      if (mazeSolving(maze, x, y - 1, sol)) {
        return true;
      }
      sol[x][y] = 0;
      return false;
    }
    return false;
  };

  return (
    <div className="container_rat">
      <div className="btn_run_rat">
        <button onClick={() => solveMaze(maze)}>Run Rat Run</button>
      </div>
      <div className="main_tic">
        {maze && maze?.length
          ? maze?.map((item, i) => {
              return item.map((val, index) => (
                <Boxes
                  key={index}
                  ind1={i}
                  ind2={index}
                  value={val}
                  sol={solved}
                />
              ));
            })
          : console.log("No Data")}
      </div>
    </div>
  );
};

export default RatGrid;
