/**
 * 
 */
function displayWords(){
	var wordList=["a","b","c"];
	for (i=0;i<wordList.length;setTimeout(i++,30000)){
		window.alert(wordList[i]);
		//document.write(wordList[i]);
		
	}
	
}


function yo(){
	var wordList=["a","b","c"];
	for (var i = 0; i < wordList.length; i++) {
	    return function(i) {
	        setTimeout(function() { document.write(wordList[i]); }, i * 3000);
	    }(i);
	}
}


function x(){
	var wordList=["a","b","c"];
	for (var i = 0; i < wordList.length; i++) {
	    (function(index) {
	        setTimeout(function() { document.write(wordList[index]); }, i * 3000);
	    })(i);
	}
}

