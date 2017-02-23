var countOfPagesScrolled = 0;
var searchPhrase = "HR";

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
		$(this).each(function() {
			  $.each(this.attributes, function() {
			    if(this.specified) {
				    if (this.name.indexOf("data-ember-action-") >= 0){
					var allInf = $("#ember"+(this.value-4)).text();
					if (allInf.indexOf(searchPhrase) >= 0){
						console.log($("#ember"+(this.value-4)).text());
						contactsNum++;
						$(this).click();
					}
				    }
			    }
			  });
			});
	});
	console.log('Just added contacts: ' + contactsNum);
}

scrollDown(document.body.clientHeight, countOfPagesScrolled);
