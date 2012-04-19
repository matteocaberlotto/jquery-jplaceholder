/**
 * jquery input placeholder
 * usage: jQuery(".class_name").placeholder();
 * usage: jQuery(".class_name").placeholder({'label':'my label...','customClass':'myCustomStyle'});
 * author: matteo caberlotto
 * contributor: flavio vianello
 */
jQuery.fn.placeholder = function(options) {

	// default values
	// label : the label to use as placeholder
	// customStyle : the class to be added as placeholder style
	var defaults = {
			label : 'Insert your data here...',
			customClass : 'placeholderStyle'
	};

	// actual options
	var opts = $.extend(defaults, options);

	this.each(function(){
		// cache the current node for performance
		var currentNode = jQuery(this);

		// bind focus behaviour (placeholder disappear)
		currentNode.focus(function(){
			if( currentNode.val() == opts.label )
			{
				currentNode.val('').removeClass(opts.customClass);
			}
		})
		// bind blur behaviour (placeholder comes back)
		.blur(function(){
			if( currentNode.val() == '' )
			{
				currentNode.addClass(opts.customClass).val(opts.label);
			}
		});

		// if the form is submitted with the defualt value, clean it
		currentNode.parents('form').submit(function(){
		  if(currentNode.val() == opts.label)
		  {
		    currentNode.val('');
		  }
		});

		// at beginning, fill input with placeholders
		// (do not consider fields already filled, for example on form validation errors)
		if( currentNode.val() == '' || currentNode.val() == opts.label )
		{
			currentNode.val(opts.label).addClass(opts.customClass);
		}
	});

	// allow jquery chaining
	return( this );
};
