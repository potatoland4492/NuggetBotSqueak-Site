let addbtn = document.getElementById('add-bot-button');
addbtn.addEventListener('click', function(){
	window.open('https://discord.com/api/oauth2/authorize?client_id=915726505663938621&permissions=277092682944&scope=bot%20applications.commands');
});

let joinbtn = document.getElementById('join-server-button');
joinbtn.addEventListener('click', function(){
	window.open('https://discord.com/invite/6DSKgJXtFH');
});