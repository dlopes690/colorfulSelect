Colorful Select
==============

Colorful Select is a free, open-source HTML <select> modification plugin.  Designed using primarily Javascript and jQuery.

<h4>Version 1.0</h4>

<h3>Colorful Select features:</h3>


<ul>
	<li>Modify your dropdown menu to feature different shades of a specific color</li>
	<li>Change the text color of the dropdown options</li>
	<li>Choose to the invert the text color based on the background color</li>
	<li>Choose from Dark text colors on Light Background and Light text colors on Dark Background</li>
	<li>Change the font size and width of your select box directly from the plugin</li>


</ul>


<h3>Documentation:</h3>

<p>$(document).ready( function() {

		$('select').colorfulInput({
			backgroundColor: '#0000FF',
			textColor: 'blackWhite',
			fontSize  : '24px',
			width: '240px'
		});
		
	});</p>

<table>
	<tr>
		<td><p><b>backgroundColor:</b> </p></td>
		<td><p>Takes any hex color. </p></td>
	</tr>
	
	<tr>
		<td><p><b>textColor:</b></p></td>
		<td><p>Takes any hex color. </p></td>
		
	</tr>
</table>