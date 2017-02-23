# linkedin-bot
simple js script for automatic adding contacts

![linkedin-bot](https://github.com/snmslavk/linkedin-bot/blob/master/b7f6ca42f44f684341ae93781cf208a2.gif)

# How to use?
* Go to this page, previously entered into [linkedIn/mynetwork](https://www.linkedin.com/mynetwork/)
* Press the following key combination:
Ctrl + Shift + I
* Insert the console javascript code available on this page [script](https://github.com/snmslavk/linkedin-bot/blob/master/main-script.js)

This script is just slightly modified, originally it is from [here](https://github.com/Kravalg/linkedin-bot)

[here](javascript:!var countOfPagesScrolled = 5;

function scrollDown(height, countOfPagesScrolled){
	scroll(0, document.body.clientHeight);
	setTimeout(function(){
		if(height != document.body.clientHeight && countOfPagesScrolled > 0){
			scrollDown(document.body.clientHeight, --countOfPagesScrolled);
		}else
			return sendRequest();
	}, 1500);
}

function sendRequest(){
	var contactsNum = 0;
	jQuery.each( $('div.mn-person-card__card-actions button.mn-person-card__person-btn-ext'), 	function() {
		contactsNum++;
		console.log($(this).text() + ' ' + contactsNum);
	});
	console.log('Just added contacts: ' + contactsNum);
}

scrollDown(document.body.clientHeight, countOfPagesScrolled);)
