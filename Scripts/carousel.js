//Image links
var pos = 0;
const img = [];

for(i=1; i<=6; i++){
	img.push("<img src='Images/b" + String(i) + ".png'>")
}


//Initialize the first image
$('.item').append(img[0]);

//Function to allow the left click button to cycle pictures
$('.left').click(function(){
	$('.item').empty();
	if(pos == 0)
		pos = 5;
	else
		pos -= 1;
	$('.item').append(img[pos]);
});

//Function to allow the left click button to cycle pictures
$('.right').click(function(){
	$('.item').empty();
	if(pos == 5)
		pos = 0;
	else
		pos += 1;
	$('.item').append(img[pos]);
});

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