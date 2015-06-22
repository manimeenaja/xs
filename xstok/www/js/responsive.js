$(document).ready(function(){
	// HTML markup implementation, overlap mode
	$( '#menu' ).multilevelpushmenu({
		containersToPush: [$( '#pushobj' )],
		menuWidth: '75%',
		menuHeight: '50%'
	});
});

$(window).resize(function () {
	$( '#menu' ).multilevelpushmenu( 'redraw' );
});
