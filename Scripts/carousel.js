//Image links
var pos = 0;
const img = []; //img links
const btnid = []; //btn id names

//Init img
for(i=1; i<=6; i++){
	img.push("<img src='Images/b" + String(i) + ".png'>")
}

//Init btnid
btnid.push('#one');
btnid.push('#two');
btnid.push('#three');
btnid.push('#four');
btnid.push('#five');
btnid.push('#six');


//Initialize the first image
$('.item').append(img[0])

//Changes image to right every 5 seconds
var autoTrans = setInterval(function(){right() }, 5000);

//Click handler to allow the left click button to cycle pictures
$('.left').click(function(){
	left();
});

//Click handler to allow the right click button to cycle pictures
$('.right').click(function(){
	right();
});

//Function to change image right
function right(){
	$('.item').empty();
	if(pos == 5)
		pos = 0;
	else
		pos += 1;
	$('.item').append(img[pos]);
	changeActive(btnid[pos]);	
}


//Function to change image left
function left(){
	$('.item').empty();
	if(pos == 0)
		pos = 5;
	else
		pos -= 1;
	$('.item').append(img[pos]);
	changeActive(btnid[pos]);	
}

//Function to change image
function changeImg(){
	$('.item').empty();
	$('.item').append(img[pos]);
};

//Function to change active class
function changeActive(act){
	$('.active').removeClass();
	$(act).addClass('active');
}

//Click handlers to change image and active class
$('#one').click(function(){
	pos = 0;
	changeImg();
	changeActive('#one');
});

$('#two').click(function(){
	pos = 1;
	changeImg();;
	changeActive('#two');
});

$('#three').click(function(){
	pos = 2;
	changeImg();;
	changeActive('#three');
});

$('#four').click(function(){
	pos = 3;
	changeImg();;
	changeActive('#four');
});

$('#five').click(function(){
	pos = 4;
	changeImg();;
	changeActive('#five');
});

$('#six').click(function(){
	pos = 5;
	changeImg();;
	changeActive('#six');
});