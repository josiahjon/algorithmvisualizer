import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './priorityQueue'
import { PriorityQueue } from './priorityQueue';


let toggle = false
let count = 0
let start = null
let end = null
let block = []
let algorithmStarted = false
let showBFSButton = false
let showDAlgoButton = false
let showRefresh = false
let showBFSdesc = false
let showDAlgoDesc = false




function Square(props) {
  
  let squareState = (value) => {
    if (value === 'squareStart')
      
      return 'squareStart'
     if (value === 'squareEnd')
      
      return 'squareEnd' 
      if (value === 'squareBlock')
  
      return 'squareBlock'

      if (value === "squareVisited")
        return 'squareVisited'
      if (value === "squarePath")
        return 'squarePath'
    else
      return 'square'
  }
    return (
      <button
        className={squareState(props.value)}
        onClick={() => props.onClick()}
      >
     
      </button>
    );
  
}

//====================================================================>

class Board extends React.Component {
 
  renderSquare(i) {
    return (
      <Square 
        value = {this.props.squares[i]} 
        onClick = {() => this.props.onClick(i)}  
      />
    )
  }

  render() {

    return (
      <div>
        
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
        <div className="board-row">
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
        </div>
        <div className="board-row">
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}
        </div>
        <div className="board-row">
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
          {this.renderSquare(36)}
          {this.renderSquare(37)}
          {this.renderSquare(38)}
          {this.renderSquare(39)}
        </div>
        <div className="board-row">
          {this.renderSquare(40)}
          {this.renderSquare(41)}
          {this.renderSquare(42)}
          {this.renderSquare(43)}
          {this.renderSquare(44)}
          {this.renderSquare(45)}
          {this.renderSquare(46)}
          {this.renderSquare(47)}
          {this.renderSquare(48)}
          {this.renderSquare(49)}
        </div>
        <div className="board-row">
          {this.renderSquare(50)}
          {this.renderSquare(51)}
          {this.renderSquare(52)}
          {this.renderSquare(53)}
          {this.renderSquare(54)}
          {this.renderSquare(55)}
          {this.renderSquare(56)}
          {this.renderSquare(57)}
          {this.renderSquare(58)}
          {this.renderSquare(59)}
        </div>
        <div className="board-row">
          {this.renderSquare(60)}
          {this.renderSquare(61)}
          {this.renderSquare(62)}
          {this.renderSquare(63)}
          {this.renderSquare(64)}
          {this.renderSquare(65)}
          {this.renderSquare(66)}
          {this.renderSquare(67)}
          {this.renderSquare(68)}
          {this.renderSquare(69)}
        </div>
        <div className="board-row">
          {this.renderSquare(70)}
          {this.renderSquare(71)}
          {this.renderSquare(72)}
          {this.renderSquare(73)}
          {this.renderSquare(74)}
          {this.renderSquare(75)}
          {this.renderSquare(76)}
          {this.renderSquare(77)}
          {this.renderSquare(78)}
          {this.renderSquare(79)}
        </div>
        <div className="board-row">
          {this.renderSquare(80)}
          {this.renderSquare(81)}
          {this.renderSquare(82)}
          {this.renderSquare(83)}
          {this.renderSquare(84)}
          {this.renderSquare(85)}
          {this.renderSquare(86)}
          {this.renderSquare(87)}
          {this.renderSquare(88)}
          {this.renderSquare(89)}
        </div>
        <div className="board-row">
          {this.renderSquare(90)}
          {this.renderSquare(91)}
          {this.renderSquare(92)}
          {this.renderSquare(93)}
          {this.renderSquare(94)}
          {this.renderSquare(95)}
          {this.renderSquare(96)}
          {this.renderSquare(97)}
          {this.renderSquare(98)}
          {this.renderSquare(99)}
        </div>
    
      </div>
    );
  }
}

//=============================================================================>

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
        squares: Array(100).fill(null),
      }
    ],
      stepNumber: 0,
      startIsNext: true,
      
    };
  }

  handleBFSClicking(){
    algorithmStarted = true
    const history = this.state.history.slice(0, this.state.stepNumber + 1 );
    const current = history[history.length - 1];
    let squares = current.squares.slice();
    showDAlgoButton = false
    showBFSButton = false
    showBFSdesc = true
    handleBFSClick(squares)
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      startIsNext: !this.state.startIsNext,
      stepNumber: history.length,
     
    })
  }

  handleDijkClicking(){
    algorithmStarted = true
    const history = this.state.history.slice(0, this.state.stepNumber + 1 );
    const current = history[history.length - 1];
    let squares = current.squares.slice();
    showBFSButton = false
    showDAlgoButton = false
    showDAlgoDesc = true
    handleDijkClick(squares)
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      startIsNext: !this.state.startIsNext,
      stepNumber: history.length,
   
    })
  }


  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    squares[i] = handleClicking(i);
    count ++   
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      startIsNext: !this.state.startIsNext,
      stepNumber: history.length
    });
  }

  handleRefresh = () => {
    count = 0
    algorithmStarted = false
    showBFSButton = false
    showDAlgoButton = false
    showBFSdesc = false
    showDAlgoDesc = false
    this.setState({
      history: [
        {
        squares: Array(100).fill(null),
      }
    ],
      stepNumber: 0,
      startIsNext: true,
      

    })
  }
   
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    
      let status;
      if (count === 0){
        status = "Click on a starting position"
      } else if (count === 1){
        status = "Click on a destination position"
        showRefresh = true
      } else if (count >1 && algorithmStarted === false){
        status = "Click on spaces to add road blocks or click on an algorithm to begin search"
        showBFSButton = true
        showDAlgoButton = true
      } else if ( count > 1 && algorithmStarted === true){
        status = "Done!"
      }
      
    
    return (
      <>
      <div className="glow">SEARCH ALGORITHM VISUALIZER</div>
      <div className="game">
        
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
      
          { showBFSButton ? <button className="BFSButton" onClick={() =>  this.handleBFSClicking()}> Begin Breadth First Search</button> : null}
          { showDAlgoButton ? <button className="DAButton" onClick={() =>  this.handleDijkClicking()}> Begin Dijkstra's Algorithm</button> : null}
          { showRefresh ? <button className="RButton" onClick={() =>  this.handleRefresh()}> Refresh</button> : null}
          
          <div className="explanationGreen">Start</div>
      
          <div className="explanationRed">End</div>
      
          <div className="explanationGray">Path Blocks</div>
    
          <div className="explanationBlue">Visited (for BFS)</div>
   
          <div className="explanationOrange">Shortest Path (for Dijkstra's Algorithm)</div>
        </div>
      </div>
      { showBFSdesc ? <div class="explanation">Breadth-first search (BFS) is an algorithm for searching a tree data structure for a 
      node that satisfies a given property. It starts at the tree root and explores all nodes at the present depth prior to moving 
      on to the nodes at the next depth level. Extra memory, usually a queue, is needed to keep track of the child nodes that were 
      encountered but not yet explored. Applications include
      Shortest Path and Minimum Spanning Tree for unweighted graph,
      Peer to Peer Networks,
      Crawlers in Search Engines,
      Broadcasting in Network, and many more!
      </div> : null}


      { showDAlgoDesc ? <div class="explanation"> Dijkstra's algorithm (/ˈdaɪkstrəz/ DYKE-strəz) is an algorithm for
       finding the shortest paths between nodes in a graph, which may represent, for example, 
       road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and 
       published three years later. 
       Applications include Digital Mapping Services in Google Maps,
       Social Networking Applications,
       Telephone Network,
       IP routing to find Open shortest Path First,
       Flighting Agenda,
       Designate file server,
       Robotic Path, and many more! 
       </div> : null}
      </>
    );
  
  }
}


function handleBFSClick(squares){
  toggle = true
  squares = BFS(squares)
  return squares
}

function BFS(squares) {
  
  while (toggle){
    //start an array for squares to check
    let queue = []
    let path = []
    //squares[start] = 'squareVisited'

    //add adject sqaures to the queue, and remove squares that dont exist or are blocks

    queue.push (start)
    while (queue.length > 0){
      let currentAtSquare = queue[0]
      path.push(queue[0])
      if (currentAtSquare === end){
        squares[start] = 'squareStart'
       
        console.log(path)
        return squares
      }
      
      queue = queue.concat(findAdjacent(currentAtSquare))
      if (squares[queue[0]] !== 'squareStart'){
        squares[queue[0]] = 'squareVisited'
      }
      queue.shift()
    
 
    }
    toggle = false
    return squares
  }

  function findAdjacent(currentSquare){
    let queueCheck = []
    if (currentSquare % 10 === 0){
      queueCheck.push ( currentSquare -10, currentSquare + 1, currentSquare + 10)
    } else if (currentSquare % 10 === 9){
      queueCheck.push ( currentSquare -10, currentSquare - 1, currentSquare + 10)
    } else {
      queueCheck.push ( currentSquare -10, currentSquare - 1, currentSquare + 1, currentSquare + 10)
    }
    let i = queueCheck.length
    while(i--){
       if (queueCheck[i] < 0 || queueCheck[i] > 99 || squares[queueCheck[i]] === 'squareBlock' || squares[queueCheck[i]] === 'squareVisited' || squares[queueCheck[i]] === 'squareStart' ){
         queueCheck.splice([i], 1)
       }
     }

    return queueCheck
  }

}


//============================================================>
function handleDijkClick(squares){
  toggle = true
  squares = dijk(squares)
  return squares
}

function dijk(squares){
  let distancesFromStart = []
  let previousSquares = []
  let dQueue = new PriorityQueue()
  for (let i = 0; i < squares.length; i++){
    distancesFromStart[i] = Number.MAX_VALUE
    previousSquares[i] = null

    //dont add square to queue if its a road block
    if (squares[i] !== "squareBlock" && squares[i] !== "squareStart"){
      dQueue.enqueue([i, distancesFromStart[i]])
  }
  }
  distancesFromStart[start] = 0
  dQueue.enqueue([start, distancesFromStart[start]])
  
  while(!dQueue.isEmpty()){
    let adjacentList = []
    //take the element with the lowest priority, make that distance to be the shortest distance
    let shortestDistance = dQueue.dequeue()
    let currentSquareAt = shortestDistance[0]
    
    //find any possible adjacent sqaures
    adjacentList = findAdjacent(currentSquareAt)
 
    //for each adjacent square to the current square
    for (let i = 0; i < adjacentList.length; i++){
    
      let distanceFromCurrent = distancesFromStart[currentSquareAt] + 1
      if (distanceFromCurrent < distancesFromStart[adjacentList[i]]){
        distancesFromStart[adjacentList[i]] = distanceFromCurrent
        previousSquares[[adjacentList[i]]] = currentSquareAt
        dQueue.enqueue([adjacentList[i]], distanceFromCurrent)
      }
    }
   
  }
  let path = [end];
  let lastStep = end;
  while(lastStep !== start) {
    path.unshift(previousSquares[lastStep])
    lastStep = previousSquares[lastStep]
  }
  showPath(squares, path)


    function findAdjacent(currentSquare){
      let queueCheck = []
      if (currentSquare % 10 === 0){
        queueCheck.push ( currentSquare -10, currentSquare + 1, currentSquare + 10)
      } else if (currentSquare % 10 === 9){
        queueCheck.push ( currentSquare -10, currentSquare - 1, currentSquare + 10)
      } else {
        queueCheck.push ( currentSquare -10, currentSquare - 1, currentSquare + 1, currentSquare + 10)
      }
      let i = queueCheck.length
      while(i--){
         if (queueCheck[i] < 0 || queueCheck[i] > 99 || squares[queueCheck[i]] === 'squareBlock' || squares[queueCheck[i]] === 'squareVisited' || squares[queueCheck[i]] === 'squareStart' ){
           queueCheck.splice([i], 1)
         }
       }
  
      return queueCheck
    }

    function showPath(squares, path){
      for (let i=0; i < path.length; i++){
        if (squares[path[i]] !== 'squareStart' && squares[path[i]] !== 'squareEnd'){
        squares[path[i]] = 'squarePath'
      }
    }
    }
}


//======================================================>
function handleClicking(squareNumber){
  if (count === 0){
    start = squareNumber
    return 'squareStart'
  } if (count === 1){
    end = squareNumber
    return 'squareEnd'
  } if (count > 1){
    block.push(squareNumber)
    return 'squareBlock'
  } else {
    return 'square'
  } 
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);


