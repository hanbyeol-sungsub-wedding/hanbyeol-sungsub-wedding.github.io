/* http://keith-wood.name/countdown.html
 * Bulgarian initialisation for the jQuery countdown extension
 * Written by Manol Trendafilov manol@rastermania.com (2010) */
(function($) {
	$.countdown.regionalOptions['bg'] = {
		labels: ['Y', 'M', 'W', 'D', 'h', 'm', 's'],
		labels1: ['Y', 'M', 'W', 'D', 'h', 'm', 's'],
		compactLabels: ['l', 'm', 'n', 'd'], compactLabels1: ['g', 'm', 'n', 'd'],
		whichLabels: null,
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['bg']);
})(jQuery);
