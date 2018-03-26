var chess = new Chess();

var pawnEvalWhite =
	[
		[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
		[5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0],
		[1.0, 1.0, 2.0, 3.0, 3.0, 2.0, 1.0, 1.0],
		[0.5, 0.5, 1.0, 2.5, 2.5, 1.0, 0.5, 0.5],
		[0.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 0.0],
		[0.5, -0.5, -1.0, 0.0, 0.0, -1.0, -0.5, 0.5],
		[0.5, 1.0, 1.0, -2.0, -2.0, 1.0, 1.0, 0.5],
		[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
	];

var pawnEvalBlack = reverseArray(pawnEvalWhite);

var knightEval =
	[
		[-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
		[-4.0, -2.0, 0.0, 0.0, 0.0, 0.0, -2.0, -4.0],
		[-3.0, 0.0, 1.0, 1.5, 1.5, 1.0, 0.0, -3.0],
		[-3.0, 0.5, 1.5, 2.0, 2.0, 1.5, 0.5, -3.0],
		[-3.0, 0.0, 1.5, 2.0, 2.0, 1.5, 0.0, -3.0],
		[-3.0, 0.5, 1.0, 1.5, 1.5, 1.0, 0.5, -3.0],
		[-4.0, -2.0, 0.0, 0.5, 0.5, 0.0, -2.0, -4.0],
		[-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0]
	];

var bishopEvalWhite = [
	[-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
	[-1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1.0],
	[-1.0, 0.0, 0.5, 1.0, 1.0, 0.5, 0.0, -1.0],
	[-1.0, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, -1.0],
	[-1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, -1.0],
	[-1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0],
	[-1.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, -1.0],
	[-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0]
];

var bishopEvalBlack = reverseArray(bishopEvalWhite);

var rookEvalWhite = [
	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
	[0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5],
	[-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
	[-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
	[-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
	[-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
	[-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
	[0.0, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0]
];

var rookEvalBlack = reverseArray(rookEvalWhite);

var evalQueen =
	[
		[-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
		[-1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1.0],
		[-1.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -1.0],
		[-0.5, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -0.5],
		[0.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -0.5],
		[-1.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.0, -1.0],
		[-1.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, -1.0],
		[-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0]
	];

var kingEvalWhite = [

	[-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
	[-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
	[-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
	[-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
	[-2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
	[-1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
	[2.0, 2.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0],
	[2.0, 3.0, 1.0, 0.0, 0.0, 1.0, 3.0, 2.0]
];

var kingEvalBlack = reverseArray(kingEvalWhite);

var pieceValues = {
	"p": {
		"w": {
			"value": 10,
			"placement": pawnEvalWhite
		},
		"b": {
			"value": -10,
			"placement": pawnEvalBlack
		}
	},
	"n": {
		"w": {
			"value": 30,
			"placement": knightEval
		},
		"b": {
			"value": -30,
			"placement": knightEval
		}
	},
	"b": {
		"w": {
			"value": 30,
			"placement": bishopEvalWhite
		},
		"b": {
			"value": -30,
			"placement": bishopEvalBlack
		}
	},
	"r": {
		"w": {
			"value": 50,
			"placement": bishopEvalWhite
		},
		"b": {
			"value": -50,
			"placement": bishopEvalBlack
		}
	},
	"q": {
		"w": {
			"value": 90,
			"placement": evalQueen
		},
		"b": {
			"value": -90,
			"placement": evalQueen
		}
	},
	"k": {
		"w": {
			"value": 900,
			"placement": kingEvalBlack
		},
		"b": {
			"value": -900,
			"placement": kingEvalWhite
		}
	}
};

$(function () {
    $(".rank").each(function () {
        $(this).find(".square:nth-child(7)").append("<div class='piece white pawn'></div>");
        $(this).find(".square:nth-child(2)").append("<div class='piece black pawn'></div>");
    });

    $(".rank:nth-child(1), .rank:nth-child(8)").find(".square:nth-child(1)").append("<div class='piece black rook'></div>");
    $(".rank:nth-child(1), .rank:nth-child(8)").find(".square:nth-child(8)").append("<div class='piece white rook'></div>");

    $(".rank:nth-child(2), .rank:nth-child(7)").find(".square:nth-child(1)").append("<div class='piece black knight'></div>");
    $(".rank:nth-child(2), .rank:nth-child(7)").find(".square:nth-child(8)").append("<div class='piece white knight'></div>");

    $(".rank:nth-child(3), .rank:nth-child(6)").find(".square:nth-child(1)").append("<div class='piece black bishop'></div>");
    $(".rank:nth-child(3), .rank:nth-child(6)").find(".square:nth-child(8)").append("<div class='piece white bishop'></div>");

    $(".rank:nth-child(4)").find(".square:nth-child(1)").append("<div class='piece black queen'></div>");
    $(".rank:nth-child(4)").find(".square:nth-child(8)").append("<div class='piece white queen'></div>");

    $(".rank:nth-child(5)").find(".square:nth-child(1)").append("<div class='piece black king'></div>");
    $(".rank:nth-child(5)").find(".square:nth-child(8)").append("<div class='piece white king'></div>");

    $(".square").click(function () {
        var $square = $(this);
        var $piece = $square.find(".piece");
        var turn = chess.turn();

        if ($piece.length > 0 && ((turn === "w" && $piece.hasClass("white")) || (turn === "b" && $piece.hasClass("black")))) {
            $(".square").removeClass("selected").removeClass("legal-move");
            $square.addClass("selected");
            //console.log(getPosition($square));
            var moves = chess.moves({ square: getPosition($square), verbose: true });
           // console.log(moves);
            $.each(moves, function () {
                getSquare(this.to).addClass("legal-move");
            });

            return false;
        }

        var $originalSquare = $(".square.selected");
        if ($originalSquare.length === 0)
            return false;

        var $selectedPiece = $originalSquare.find(".piece");

        var originalPos = getPosition($originalSquare);
        var newPos = getPosition($square);
        var color = ($selectedPiece.hasClass("white") ? "w" : "b");
        var moves = chess.moves({ "verbose": true });

        $(".square").removeClass("selected").removeClass("legal-move");

        var theMove = $.grep(moves, function (move) { return move.from === originalPos && move.to === newPos && move.color === color });
        if (theMove.length === 0)
            return false;

        var resultingMove = chess.move(theMove[0]);
		movePiece(resultingMove, $originalSquare, $square);

		setTimeout(makeCpuMove, 100); // timeout for the dom to load. there's probably a better way to do this...
    });
});

function makeCpuMove() {
	if (!chess.game_over()) {
		var d = new Date().getTime();
		var cpuMove = calculateBestMove(chess, 4, true);
		var d2 = new Date().getTime();
		var moveTime = (d2 - d);
		var positionsPerS = (positionCount * 1000 / moveTime);

		$('#position-count').text(positionCount);
		$('#time').text(moveTime / 1000 + 's');
		$('#positions-per-s').text(positionsPerS);

		var $fromSquare = getSquare(cpuMove.from);
		var $toSquare = getSquare(cpuMove.to);

		chess.move(cpuMove);

		movePiece(cpuMove, $fromSquare, $toSquare);

		if (chess.game_over()) {
			if (chess.in_draw())
				alert("Draw!");
			else
				alert("You lose :(");
		}

	}
	else {
		if (chess.in_draw())
			alert("Draw!");
		else
			alert("You win!");
	}
}

function movePiece(move, $fromSquare, $toSquare) {
    if ($toSquare.find(".piece").length > 0) {
        $toSquare.find(".piece").remove();
    }

    // en passant
    if (move.flags.indexOf("e") >= 0) {
        if (move.color === "w")
            $toSquare.next().find(".piece").remove();
        else
            $toSquare.prev().find(".piece").remove();
    }
    else if (move.flags.indexOf("k") >= 0) {  // king-side castle
        if (move.color === "w")
            moveOnBoard("h1", "f1");
        else
            moveOnBoard("h8", "f8");
    }
    else if (move.flags.indexOf("q") >= 0) {  // queen-side castle
        if (move.color === "w")
            moveOnBoard("a1", "d1");
        else
            moveOnBoard("a8", "d8");
    }

    $fromSquare.find(".piece").appendTo($toSquare);

    if (move.flags.indexOf("p") >= 0) {
        $toSquare.find(".piece").removeClass("pawn").addClass("queen");
    }
}

function moveOnBoard(from, to) {
    getSquare(from).find(".piece").appendTo(getSquare(to));
}

function getPosition($square) {
    return $square.closest(".rank").attr("data-file") + (8 - $square.index());
}

function getSquare(position) {
    return $(".rank[data-file='" + position[0] + "']").find(".square").eq(8 - parseInt(position[1]));
}

var positionCount;
function calculateBestMove(game, depth, isMaximisingPlayer) {
    var newGameMoves = game.moves({ verbose: true });
    console.log(newGameMoves);
    game.sortCaptured(newGameMoves);
    console.log(newGameMoves);
    var bestMove = -9999;
    var bestMoveFound;
    positionCount = 0;

    for (var i = 0; i < newGameMoves.length; i++) {
        var newGameMove = newGameMoves[i]
        game.move(newGameMove);
        var value = minimax(game, depth - 1, -10000, 10000, !isMaximisingPlayer);
        game.undo();
        console.log(newGameMove, value);
        if (value >= bestMove) {
            bestMove = value;
            bestMoveFound = newGameMove;
            console.log("best", bestMove, bestMoveFound);
        }
    }
    return bestMoveFound;
}

function minimax(game, depth, alpha, beta, isMaximisingPlayer) {
    positionCount++;
    if (depth === 0) {
        return -evaluateBoard(game.board());
    }

    var newGameMoves = game.ugly_moves();
    if (isMaximisingPlayer) {
        var bestMove = -9999;
        for (var i = 0; i < newGameMoves.length; i++) {
            game.ugly_move(newGameMoves[i]);
            bestMove = Math.max(bestMove, minimax(game, depth - 1, alpha, beta, !isMaximisingPlayer));
            game.undo();
            alpha = Math.max(alpha, bestMove);
            if (beta <= alpha) {
                return bestMove;
            }
        }
        return bestMove;
    } else {
        var bestMove = 9999;
        for (var i = 0; i < newGameMoves.length; i++) {
            game.ugly_move(newGameMoves[i]);
            bestMove = Math.min(bestMove, minimax(game, depth - 1, alpha, beta, !isMaximisingPlayer));
            game.undo();
            beta = Math.min(beta, bestMove);
            if (beta <= alpha) {
                return bestMove;
            }
        }
        return bestMove;
    }
}

function evaluateBoard(board) {
    var score = 0;

    for (var r = 0; r < 8; r++) {
        for (var f = 0; f < 8; f++) {
            var square = board[r][f];
			if (square !== null) {
				var pieceValue = pieceValues[square.type][square.color];
				score += pieceValue.value + pieceValue.placement[r][f];
			}
        }
    }

    return score;
}

function reverseArray(array) {
	return array.slice().reverse();
};

// rnbqkb1r/ppp2ppp/5n2/3pp3/4P3/2N2Q2/PPPP1PPP/R1B1KBNR w KQkq - 2 4
function testPosition(fen, depth) {
    var game = new Chess(fen);
    console.log(game.ascii());
    var d1 = new Date();
    var bestMove = calculateBestMove(game, depth, true);
    var d2 = new Date();
    console.log(bestMove, positionCount, (d2 - d1) / 1000);
}