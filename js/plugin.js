(function($) {
    $.fn.LengthValidator = function (options) {
        options = $.extend({}, $.fn.LengthValidator.defaults, options);

        return this.each(function () {
			var elm = $(this);
			
			checkLength($(this), options, $.trim(elm.val()).length);
			
			elm.focusin(function () { checkLength($(this), options, $.trim(elm.val()).length); })
				.focusout(function () { checkLength($(this), options, $.trim(elm.val()).length); })
				.change(function () { checkLength($(this), options, $.trim(elm.val()).length); });		 
        });
    }; 

    function checkLength(elm, opts, len) {
		if(elm.hasClass(opts.valid)){ elm.removeClass(opts.valid); }
		if(elm.hasClass(opts.invalid)){ elm.removeClass(opts.invalid); }
	
		if( len < opts.min || len > opts.max ){
			elm.addClass(opts.invalid);
		} else {
			elm.addClass(opts.valid);
		} 
    }

    $.fn.LengthValidator.defaults = {
        min: 1,
        max: 999,
        valid: 'valid', 
        invalid: 'invalid'
    };

} (jQuery)); 