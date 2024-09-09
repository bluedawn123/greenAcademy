$('#hamburger_menu').on('click', function () {
    const $menu = $('#hamburger_menus');
    const $phrase = $('.common_header_phrase');
  
    if ($menu.css('display') === 'block') {
      $menu.css('display', 'none');
      $phrase.css('display', 'block')
    } else {
      $menu.css('display', 'block');
      $phrase.css('display', 'none')
      
    }
  });