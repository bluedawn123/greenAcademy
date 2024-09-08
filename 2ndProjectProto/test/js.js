const header = $('header');
const headerHeight = header.height();
const menu = $('nav > ul > li');

menu.mouseover( function(){
	let subMenuHeight = $(this).find('ul').height();
	let totalHeight = headerHeight + subMenuHeight;
	
	header.stop().animate({ height: `${totalHeight}px`}, 300, 'easeOutBack');
})

menu.mouseout( function(){
	header.stop().animate({ height: `${headerHeight}px`}, 300, 'easeInBack');
})
