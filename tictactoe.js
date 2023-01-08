let move = 1;
let play = true;
let foundWinner = false;

$("table tr td").click(function () {
    findWinner();
    console.log(play)
  if ($(this).text() == "" && play) {
    if (move % 2 == 1) {
      $(this).append("X");
      $(this).css("color", "#a1d1af");
      $(".turn h2").text("It is O's turn");
    } else {
      $(this).append("O");
      $(this).css("color", "#c8a1d1");
      $(".turn h2").text("It is X's turn");
    }
    move++;
    if(findWinner() == "draw"){
             $("body").append(
               '<div class=text-center><div class="alert alert-warning" role=alert>It was a draw!</div></div>'
             );
             $("body").append(
               '<div class=text-center><button type = "button" class= "btn btn-info" onclick="location.reload()">Play Again</button></div>'
             );
        
    }
   
      else if (findWinner() == "X") {
        $("body").append(
          '<div class=text-center><div class="alert alert-success" role=alert>The Winner is X!</div></div>'
        );
        $("body").append(
          '<div class=text-center><button type = "button" class= "btn btn-info" onclick="location.reload()">Play Again</button></div>'
        );
      
      } else if (findWinner() == "O") {
         $("body").append(
           '<div class=text-center><div class="alert alert-success" role=alert>The Winner is O!</div></div>'
         );
         $("body").append(
           '<div class=text-center><button type = "button" class= "btn btn-info" onclick="location.reload()">Play Again</button></div>'
         );;
 
      }
    
    
  }
});

function findWinner() {
  box1 = $("table tr:nth-child(1) td:nth-child(1)").text();
  box2 = $("table tr:nth-child(1) td:nth-child(2)").text();

  box3 = $("table tr:nth-child(1) td:nth-child(3)").text();
  box4 = $("table tr:nth-child(2) td:nth-child(1)").text();
  box5 = $("table tr:nth-child(2) td:nth-child(2)").text();
  box6 = $("table tr:nth-child(2) td:nth-child(3)").text();
  box7 = $("table tr:nth-child(3) td:nth-child(1)").text();
  box8 = $("table tr:nth-child(3) td:nth-child(2)").text();
  box9 = $("table tr:nth-child(3) td:nth-child(3)").text();

  //check X rows
  if (box1 == "X" && box2 == "X" && box3 == "X") {
    play = false;
    return box3;
  } else if (box4 == "X" && box5 == "X" && box6 == "X") {
    play = false;
    return box6;
  } else if (box7 == "X" && box8 == "X" && box9 == "X") {
    play = false;
    return box9;
  }

  //check X columns
  else if (box1 == "X" && box4 == "X" && box7 == "X") {
    play = false;
    return box7;
  } else if (box2 == "X" && box5 == "X" && box8 == "X") {
    play = false;
    return box8;
  } else if (box3 == "X" && box6 == "X" && box9 == "X") {
    play = false;
    return box9;
  }

  //check X diagonal
  else if (box1 == "X" && box5 == "X" && box9 == "X") {
    play = false;
    return box9;
  } else if (box3 == "X" && box5 == "X" && box7 == "X") {
    play = false;
    return box7;
  }

  //check O rows
  if (box1 == "O" && box2 == "O" && box3 == "O") {
    play = false;
    return box3;
  } else if (box4 == "O" && box5 == "O" && box6 == "O") {
    play = false;
    return box6;
  } else if (box7 == "O" && box8 == "O" && box9 == "O") {
    play = false;
    return box9;
  }

  //check O columns
  else if (box1 == "O" && box4 == "O" && box7 == "O") {
    play = false;
    return box7;
  } else if (box2 == "O" && box5 == "O" && box8 == "O") {
    play = false;
    return box8;
  } else if (box3 == "O" && box6 == "O" && box9 == "O") {
    play = false;
    return box9;
  }

  //check O diagonal
  else if (box1 == "O" && box5 == "O" && box9 == "O") {
    play = false;
    return box9;
  } else if (box3 == "O" && box5 == "O" && box7 == "O") {
    play = false;
    return box7;
  }

  //draw
  else if (
    box1 != "" &&
    box2 != "" &&
    box3 != "" &&
    box4 != "" &&
    box5 != "" &&
    box6 != "" &&
    box7 != "" &&
    box8 != "" &&
    box9 != ""
  ) {
    return "draw";
  }
}
