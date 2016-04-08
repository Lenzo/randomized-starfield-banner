var $banner = ('.banner');

var makeStar = function () {
  var $newStar = $('<img src="images/star.svg">');
  var $newTrans = Math.random();
  var $newSize = Math.random() * 20;


  $newStar.css('top', Math.random() * document.documentElement.clientHeight - 22);
  $newStar.css('left', Math.random() * document.documentElement.clientWidth - 22);
  $newStar.css('opacity', $newTrans);
  $newStar.css('width', $newSize);

  $banner.append($newStar);
};

for (i = 0; i < 75; i++) {
	makeStar();
};
