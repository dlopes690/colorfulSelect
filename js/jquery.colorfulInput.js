  (function($) {

    $.fn.colorfulInput = function(options) {

		var settings = $.extend({
			backgroundColor : null,
			textColor		: null,
			fontSize		: null
			
		} , options);
		var count = (this[0].length);
		// console.log((this).options[0].text);
		
		// var backgroundcolor = '#0000FF';
		// var textColor = "#000";
		var percent = 100/count;
		console.log('percent is: ' + percent);
		return this.each( function() {
			
			if(settings.fontSize)
				$(this).css("font-size", settings.fontSize);
		
			for(var i=0; i<count; i++)
			{
				console.log('bg color: '+settings.backgroundColor);
				// console.log('text color: '+settings.textColor);
				// console.log(this[i]);
				// console.log(this[i].value);
				
				$(this[i]).css("background-color", settings.backgroundColor);
				
				if(!settings.textColor)
				{}
				else if(settings.textColor == 'invert')
					$(this[i]).css("color", invertColor(settings.backgroundColor));
				else if(settings.textColor == 'blackWhite')
					$(this[i]).css("color", isDark($(this[i]).css("background-color")) ? 'white' : 'black');
				else if(settings.textColor.charAt(0) == '#')
					$(this[i]).css("color", settings.textColor);
				
					
				
				
				
				// $(this[i]).css("color", settings.backgroundColor);
				// console.log('inverted Color: '+invertColor(settings.backgroundColor));
				settings.backgroundColor = shadeColor(settings.backgroundColor , percent);
				// $(this[i]).css('-webkit-filter', 'hue-rotate(50deg)');
				// $(this[i]).css('filter', 'hue-rotate(50deg)');
				// settings.textColor = shadeColor(settings.textColor , 10);
				// console.log('contrast: '+ getContrastYIQ(settings.backgroundColor));
				
				
			}
		});
		
			// http://jsfiddle.net/QkSva/
		function isDark( color ) {
			var match = /rgb\((\d+).*?(\d+).*?(\d+)\)/.exec(color);
			return ( match[1] & 255 )
				 + ( match[2] & 255 )
				 + ( match[3] & 255 )
				   < 3 * 256 / 2;
		}
				
			// http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color
		function shadeColor(color, percent) 
		{   
			var num = parseInt(color.slice(1),16), 
								amt = Math.round(2.55 * percent), 
								R = (num >> 16) + amt, 
								B = (num >> 8 & 0x00FF) + amt, 
								G = (num & 0x0000FF) + amt;
			// console.log('amt is ' + amt);
			// console.log('R is: ' + R);
			// console.log('B is: ' + B);
			// console.log('G is: ' + G);
			// console.log('num is: ' +num);
			return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
		}
		
			// http://stackoverflow.com/questions/9600295/automatically-change-text-color-to-assure-readability
		function invertColor(hexTripletColor) {
			var color = hexTripletColor;
			color = color.substring(1);           // remove #
			color = parseInt(color, 16);          // convert to integer
			color = 0xFFFFFF ^ color;             // invert three bytes
			color = color.toString(16);           // convert to hex
			color = ("000000" + color).slice(-6); // pad with leading zeros
			color = "#" + color;                  // prepend #
			return color;
		}
		

    }

}(jQuery));