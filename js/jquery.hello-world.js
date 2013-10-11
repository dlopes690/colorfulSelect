 (function($) {

    $.fn.helloWorld = function(options) {

		var settings = $.extend({
			text 		: 'Hello there',
			color		: null,
			fontStyle 	: null,
			//complete	: null
		} , options);
		
        // Future home of "Hello, World!"
		return this.each( function() {
			$(this).text(settings.text);
		
			if(settings.color)
			{
				$(this).css('color' , settings.color);
			}
			
			if(settings.fontStyle)
			{
				$(this).css('font-style' , settings.fontStyle);
			}
			
			// if($.isFunction(settings.complete))
			// {
				// settings.complete.call(this);
			// }
		});

    }

}(jQuery));