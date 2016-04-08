var $banner = $('.banner');

var makeStar = function () {
  var $newStar = $('<div>');
  var $newTrans = Math.random();
  var $newSize = Math.random() * 20;
  var $newRotate = Math.random() * 360;

  $newStar.addClass('star');
  $newStar.css('top', Math.random() * document.documentElement.clientHeight - 22);
  $newStar.css('left', Math.random() * document.documentElement.clientWidth - 22);
  $newStar.css('opacity', $newTrans);
  $newStar.css('width', $newSize);
  $newStar.css( 'transform', 'rotate(' + $newRotate + 'deg)');
  $newStar.addClass('animateStar');

  $banner.append($newStar);
};

for (i = 0; i < 75; i++) {
	makeStar();
};
