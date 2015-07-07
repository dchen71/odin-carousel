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
