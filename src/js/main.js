/* global fetch */

const version = require("../../kessiekwang/tracking/package.json").version;
let track_uri = process.env.MS_TRACK_URI.replace('_version_', version);

function track() {
  let u = `${process.env.MS_URI}/${track_uri}`;
console.log(u);
  fetch(u, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Network response was not ok.');
  })
  .then(res => {
    console.log('result', res);
  })
  .catch(error => {
    console.error(error);
  });
}

(function() {
track();
  
// 	skel.breakpoints({
// 		xlarge: '(max-width: 1680px)',
// 		large: '(max-width: 1280px)',
// 		medium: '(max-width: 980px)',
// 		small: '(max-width: 736px)',
// 		xsmall: '(max-width: 480px)'
// 	});

// 	$(function() {

// 		var	$window = $(window),
// 			$body = $('body');

// 		// Disable animations/transitions until the page has loaded.
// 			$body.addClass('is-loading');

// 			$window.on('load', function() {
// 				window.setTimeout(function() {
// 					$body.removeClass('is-loading');
// 				}, 100);
// 			});

// 		// Fix: Placeholder polyfill.
// 			$('form').placeholder();

// 		// Prioritize "important" elements on medium.
// 			skel.on('+medium -medium', function() {
// 				$.prioritize(
// 					'.important\\28 medium\\29',
// 					skel.breakpoint('medium').active
// 				);
// 			});

// 		// Scrolly.
// 			$('.scrolly').scrolly();

// 		// Gallery.
// 			$('.gallery').each(function() {

// 				var	$gallery = $(this),
// 					$content = $gallery.find('.content');

// 				// Poptrox.
// 					$content.poptrox({
// 						usePopupCaption: true
// 					});

// 				// Tabs.
// 					$gallery.each( function() {

// 						var $this = $(this),
// 							$tabs = $this.find('.tabs a'),
// 							$media = $this.find('.media');

// 						$tabs.on('click', function(e) {

// 							var $this = $(this),
// 								tag = $this.data('tag');

// 							// Prevent default.
// 							 	e.preventDefault();

// 							// Remove active class from all tabs.
// 								$tabs.removeClass('active');

// 							// Reapply active class to current tab.
// 								$this.addClass('active');

// 							// Hide media that do not have the same class as the clicked tab.
// 								$media
// 									.fadeOut('fast')
// 									.each(function() {

// 										var $this = $(this);

// 										if ($this.hasClass(tag))
// 											$this
// 												.fadeOut('fast')
// 												.delay(200)
// 												.queue(function(next) {
// 													$this.fadeIn();
// 													next();
// 												});

// 									});

// 						});

// 					});


// 			});

// 	});

})();