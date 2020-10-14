/* LOGIN/SIGN UP
–––––––––––––––––––––––––––––– */

$('#login').on('submit', event => {
	event.preventDefault();
	
	const email = $('#login #email').val();
	
	const alert = $('#login .alert');
	const alertText = $('#login .alert-copy');
	
	if (!email || !password) {
		alert.show();
		alertText.text('Please fill out all fields.');
	} else {
		alert.hide();
		console.log('Email Address:', email);
	}
});

$('#signup').on('submit', event => {
	event.preventDefault();
	
	const email = $('#signup #email').val();
	const username = $('#signup #username').val();
	const name = $('#signup #name').val();
	const location = $('#signup #location').val();
	
	const alert = $('#signup .alert');
	const alertText = $('#signup .alert-copy');
	
	if (!email || !password || !username || !name || !location) {
		alert.show();
		alertText.text('Please fill out all fields.');
	} else {
		alert.hide();
		console.log('Email Address:', email);
		console.log('Username:', username);
		console.log('Display name', name);
		console.log('Location', location);
	}
});



/* ALERT
–––––––––––––––––––––––––––––– */

$('.alert .close').on('click', () => {
	$('.alert').hide();
});



/* MENU MODAL
–––––––––––––––––––––––––––––– */

const menuButton = $('.menu-button');
const menuClose = $('.menu .close');
const menu = $('.menu');

menuButton.on('click', () => {
	menu.attr('style', 'opacity: 1');
	menu.show();
	return false;
});

menuClose.on('click', () => {
	menu.attr('style', 'opacity: 0');
	menu.hide();
	return false;
});



/* SAVE TO BOARD MODAL
–––––––––––––––––––––––––––––– */

const saveModal = $('.save-modal');
const saveClose = $('.save-modal .close');
const saveButton = $('.card-image');

saveButton.on('click', () => {
	saveModal.attr('style', 'opacity: 1');
	saveModal.show();
	return false;
});

saveClose.on('click', () => {
	saveModal.attr('style', 'opacity: 0');
	saveModal.hide();
	return false;
});











const search = $('#search');
const searchResults = $('.search-results');
const searchPlaceholder = $('.search-instructions');

search.on('keyup', () => {
	if (search.val().length > 0) {
		searchPlaceholder.removeClass('d-flex').addClass('d-none');
		searchResults.show();
	} else {
		searchResults.hide();
		searchPlaceholder.removeClass('d-none').addClass('d-flex');
	}
});








function readDisplayImage(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      $('.file-upload-content').attr('style', 'background-image: url(' + e.target.result + '); background-size: cover; background-position: center center;');
    };
    reader.readAsDataURL(input.files[0]);
    $('.remove-image').show();
  } else {
    removeToPlaceholder();
  }
}

function readReplaceImage(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      $('.file-upload-content').attr('style', 'background-image: url(' + e.target.result + '); background-size: cover; background-position: center center;');
    };
    reader.readAsDataURL(input.files[0]);
    $('.image-upload-wrap').hide();
    $('.remove-image').show();
  } else {
    removeAndRestart();
  }
}

function removeToPlaceholder() {
	$('.file-upload-content').attr('style', 'background-image: url(https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80); background-size: cover; background-position: center center;');
	$('.remove-image').hide();
}

function removeAndRestart() {
	$('.image-upload-wrap').show();
	$('.file-upload-content').hide();
}
