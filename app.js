/****************************************************************************************
*	DOCUMENT READY
---------------------------------------------------------------------------------------*/


$(document).ready(function() {

	// ADD LINK

	$('.js-like').on('click', function(event){
		event.preventDefault();

		$(this).text('Liked!')
		.closest('.news-item')
		.addClass('is-liked');
	});


	// ADD LINK;

	$('.js-add-link').on('click', function(event){
		event.preventDefault();

		$('.js-form').toggleClass('is-visible');
	});

	// SHOW MODAL

	$('.js-show-modal').on('click', function(event){
		event.preventDefault();

		$('.js-modal').toggleClass('is-visible');
		$('.js-modal-overlay').toggleClass('is-visible');
	});

	$('.js-modal-overlay').on('click', function(event){
		event.preventDefault();

		$('.js-modal').removeClass('is-visible');
		$('.js-modal-overlay').removeClass('is-visible');
	});

});