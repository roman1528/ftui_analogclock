// load widget base functions
if(typeof widget_widget == 'undefined') {
    loadplugin('widget_widget');
}

$('head').append('<link rel="stylesheet" href="/fhem/tablet/css/ftui_analogclock.css" type="text/css" />');
	
// widget implementation starts here
// change 'widget_example' to 'widget_mywidgetname'
// and 'widgetname:"example",' to 'widgetname:"mywidgetname",'
var widget_analogclock = $.extend({}, widget_widget, {
    widgetname:"analogclock",
    // privat sub function
    init_attr: function(elem) {
        elem.initData('theme' ,	'default');
    },
    // mandatory function, get called on start up
    init: function () {
        var base = this;
        this.elements = $('div[data-type="'+this.widgetname+'"]');
        this.elements.each(function(index) {
            base.init_attr($(this));
			var text = "";
			
			text += "<div id=\"liveclock\" class=\"analogclock outer_face\">";
			text += "<div class=\"analogclock marker oneseven\"></div>";
			text += "<div class=\"analogclock marker twoeight\"></div>";
			text += "<div class=\"analogclock marker fourten\"></div>";
			text += "<div class=\"analogclock marker fiveeleven\"></div>";
			text += "<div class=\"analogclock inner_face\">";
			text += "<div class=\"analogclock hand hour\"></div>";
			text += "<div class=\"analogclock hand minute\"></div>";
			text += "<div class=\"analogclock hand second\"></div>";
			text += "</div>";
			text += "</div>";
			text += "<script type=\"text/javascript\">";
			text += "var $hands = $(\'#liveclock div.hand\');";
			text += "window.requestAnimationFrame = window.requestAnimationFrame";
			text += "|| window.mozRequestAnimationFrame";
			text += "|| window.webkitRequestAnimationFrame";
			text += "|| window.webkitRequestAnimationFrame";
			text += "|| window.msRequestAnimationFrame";
			text += "|| function(f){setTimeout(f, 60)};";
			text += "function updateclock(){";
			text += "var curdate = new Date();";
			text += "var hour_as_degree = ( curdate.getHours() + curdate.getMinutes()/60 ) / 12 * 360;";
			text += "var minute_as_degree = curdate.getMinutes() / 60 * 360;";
			text += "var second_as_degree = ( curdate.getSeconds() + curdate.getMilliseconds()/1000 ) /60 * 360;";
			text += "$hands.filter(\'.hour\').css({transform: \'rotate(\' + hour_as_degree + \'deg)\' });";
			text += "$hands.filter(\'.minute\').css({transform: \'rotate(\' + minute_as_degree + \'deg)\' });";
			text += "$hands.filter(\'.second\').css({transform: \'rotate(\' + second_as_degree + \'deg)\' });";
			text += "requestAnimationFrame(updateclock);}";
			text += "requestAnimationFrame(updateclock);";
			text += "</script>";
			
			$(this).html(text);
			
			if($(this).data('theme')) {
			$( ".analogclock" ).addClass($(this).data('theme'));}
        });
    },
    // mandatory function, get called after start up once and on every FHEM poll
    update: function (dev,par) {
    }
});
