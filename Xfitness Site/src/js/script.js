/*! AUTOR: Francisco Alexander Betanco Mejía */

$.getJSON( "json/nav.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li><a href='" + val + "'>"+ key +"</a></li>" );
  });
 
  $( "<ul/>", {
    "class": "menu",
    html: items.join( "" )
  }).appendTo( "nav" );
});

// Dropdown menu

$(function(){
	$('.menu li:nth-child(3)').addClass('dropdown-btn');

	$('.dropdown-btn').click(function() {
		var w = $('.dropdown-btn').width();
		var pos = $('.dropdown-btn').offset();
		$('.dropdown-menu-vertical').width(w).fadeIn(200).css({'left':pos.left+'px'});
		$('.vertical-icon').width(w).css({'left':pos.left+'px'}).show();
	});
	$('.dropdown-menu-vertical').mouseleave(function() {
		$(this).fadeOut(200);
		$('.vertical-icon').hide();
	});
	$('.dropdown-btn-horizontal').mouseenter(function() {
		var pos = $('.dropdown-btn-horizontal').offset();
		var w = $('.dropdown-btn').width();
		$('.dropdown-btn-horizontal').addClass('active')
		$('.dropdown-menu-horizontal').css({
			'left' : (w)+'px',
			'top' : -4+'px'
		}).fadeIn(200);
	});
	$('.dropdown-btn-horizontal').mouseleave(function() {
		$('.dropdown-btn-horizontal').removeClass('active');
		$('.dropdown-menu-horizontal').fadeOut(200);
	});

$('#boton').click(function(){
	$('.menu').toggle()
});


});