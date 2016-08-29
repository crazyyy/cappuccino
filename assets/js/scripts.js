// add number to vieved elemens
function WorksNumber() {
  window.visibleNumber = 1;
  $('.works-example').each(function(index, el) {
    if ($(this).css('display') != 'none') {
      $(this).attr('data-number', window.visibleNumber);
      window.visibleNumber++;
    } else {
      $(this).attr('data-number', '0');
    }
  });
}
WorksNumber();

// rebuild nomer after filtering
$(".filter-row button").click(function() {
  window.setTimeout(WorksNumber, 1000);
});

// start modal window gallery
$('.works-example').on('click', function(e) {
  e.preventDefault;
  var selector = e.currentTarget;

  ModalImagesGenerate(selector);

  OpenModal(event);

})

$('#galley_item_details .ajax-prevnext').on('click', function(e){
  e.preventDefault;
  var element = e.currentTarget;
  var currentID = $('.modal-gallery-container').attr('data-current');

  if ( $(element).hasClass('next') ) {
    var nextElement = parseInt(currentID) + 1;
  } else if ( $(element).hasClass('prev') ) {
    var nextElement = parseInt(currentID) - 1;
  }

  var elementAttribute = '[data-number="' + nextElement  + '"]';
  var selector = $(elementAttribute);

  CloseModal(event);
  ModalImagesGenerate(selector);
  OpenModal(event);

})


function ModalImagesGenerate(selector) {
  var thisBigImage = $(selector).find('.thumb').attr('data-big-image');
  var thisGalleryImages = $(selector).find('.gallery-special-images').html();
  var thisSelectorID = $(selector).attr('data-number');
  var price = $(selector).find('.price').children('p').children('span').html();
  $('.modal-gallery-container .gallery-full img').attr('src', thisBigImage);
  $('.gallery-thumbs').each(function(index, el) {
    $(this).html(thisGalleryImages);
  });
  $('.modal-gallery-container').attr('data-current', thisSelectorID);
  $('.text-and-meta .meta p span').html(price);
  if ( thisSelectorID == 1 ) {
    $('#galley_item_details .prev').hide();
  } else {
    $('#galley_item_details .prev').show();
  }
  if ( thisSelectorID == window.visibleNumber - 1 ) {
    $('#galley_item_details .next').hide();
  } else {
    $('#galley_item_details .next').show();
  }
}

// opne - close modal window
$('.close-reveal-modal').on('click', function(event) {
  CloseModal(event);
})

$('.text-and-meta').on('click', function(event) {
  CloseModal(event);
})

function OpenModal() {
  $('.reveal-modal-bg').fadeIn('fast');
  $('#galley_item_details').addClass('open');
}

function CloseModal(event) {
  event.preventDefault;
  $('.reveal-modal-bg').fadeOut('fast');
  $('#galley_item_details').removeClass('open');
}

/*
// header nav add slow slide attr
$('.sub-nav li').each(function(index, el) {
  var thisAttr = $(this).children('a').attr('href');
  var thisAttr = thisAttr.replace("#", "");
  $(this).attr('data-magellan-arrival', thisAttr)
});
*/
