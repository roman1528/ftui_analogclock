// load widget base functions
if(typeof widget_widget == 'undefined') {
    loadplugin('widget_widget');
}

var isMSIE = /*@cc_on!@*/0;

if (isMSIE) {
  dynamicload('lib/jquery.analogclock.excanvas.js', null, null, false);
}

dynamicload('lib/jquery.analogclock.js', null, null, false);
	
// widget implementation starts here
// change 'widget_example' to 'widget_mywidgetname'
// and 'widgetname:"example",' to 'widgetname:"mywidgetname",'
var widget_analogclock = $.extend({}, widget_widget, {
    widgetname:"analogclock",
    // privat sub function
    init_attr: function(elem) {
        elem.initData('size', '100');
        elem.initData('date-color', '');
        elem.initData('body', 'round');
        elem.initData('body-color', '#FFFFFF');
        elem.initData('stroke-color', '#000000');
        elem.initData('dial', 'full');
        elem.initData('dial-color', '#3C3C3C');
        elem.initData('hour', 'pointed');
        elem.initData('hour-color', '#000000');
        elem.initData('minute', 'pointed');
        elem.initData('minute-color', '#000000');
        elem.initData('second', 'bar');
        elem.initData('second-color', '#C80000');
        elem.initData('boss', 'none');
        elem.initData('boss-color', '#000000');
        elem.initData('mbehave', 'bounce');
        elem.initData('sbehave', 'bounce');
    },
    // mandatory function, get called on start up
    init: function () {
        var base = this;
        this.elements = $('div[data-type="'+this.widgetname+'"]');
        this.elements.each(function(index) {
            base.init_attr($(this));
			var elem = $(this);
			
			var clock = new StationClock("clock");
			
			if (elem.data('body')) {
				var body = elem.data('body');
				if (body == 'none') {
					clock.body = StationClock.NoBody;
				}
				else if (body == 'small') {
					clock.body = StationClock.SmallWhiteBody;
				}
				else if (body == 'green') {
					clock.body = StationClock.RoundGreenBody;
				}
				else if (body == 'square') {
					clock.body = StationClock.SquareBody;
				}
				else if (body == 'vienna') {
					clock.body = StationClock.ViennaBody;
				}
				else {
					clock.body = StationClock.RoundBody;
				}
			}
			else {
				clock.body = StationClock.RoundBody;
			}
			
			if (elem.data('dial')) {
				var dial = elem.data('dial');
				if (dial == 'none') {
					clock.dial = StationClock.NoDial;
				}
				else if (dial == 'hour') {
					clock.dial = StationClock.GermanHourStrokeDial;
				}
				else if (dial == 'austria') {
					clock.dial = StationClock.AustriaStrokeDial;
				}
				else if (dial == 'swiss') {
					clock.dial = StationClock.SwissStrokeDial;
				}
				else if (dial == 'vienna') {
					clock.dial = StationClock.ViennaStrokeDial;
				}
				else {
					clock.dial = StationClock.GermanStrokeDial;
				}
			}
			else {
				clock.dial = StationClock.GermanStrokeDial;
			}
			
			if (elem.data('hour')) {
				var hour = elem.data('hour');
				if (hour == 'bar') {
					clock.hourHand = StationClock.BarHourHand;
				}
				else if (hour == 'swiss') {
					clock.hourHand = StationClock.SwissHourHand;
				}
				else if (hour == 'vienna') {
					clock.hourHand = StationClock.ViennaHourHand;
				}
				else {
					clock.hourHand = StationClock.PointedHourHand;
				}
			}
			else {
				clock.hourHand = StationClock.PointedHourHand;
			}
			
			if (elem.data('minute')) {
				var minute = elem.data('minute');
				if (minute == 'bar') {
					clock.minuteHand = StationClock.BarMinuteHand;
				}
				else if (minute == 'swiss') {
					clock.minuteHand = StationClock.SwissMinuteHand;
				}
				else if (minute == 'vienna') {
					clock.minuteHand = StationClock.ViennaMinuteHand;
				}
				else {
					clock.minuteHand = StationClock.PointedMinuteHand;
				}
			}
			else {
				clock.minuteHand = StationClock.PointedMinuteHand;
			}
			
			if (elem.data('second')) {
				var second = elem.data('second');
				if (second == 'none') {
					clock.secondHand = StationClock.NoSecondHand;
				}
				else if (second == 'hole') {
					clock.secondHand = StationClock.HoleShapedSecondHand;
				}
				else if (second == 'longhole') {
					clock.secondHand = StationClock.NewHoleShapedSecondHand;
				}
				else if (second == 'swiss') {
					clock.secondHand = StationClock.SwissSecondHand;
				}
				else {
					clock.secondHand = StationClock.BarSecondHand;
				}
			}
			else {
				clock.secondHand = StationClock.BarSecondHand;
			}
			
			if (elem.data('boss')) {
				var boss = elem.data('boss');
				if (boss == 'big') {
					clock.boss = StationClock.BlackBoss;
				}
				else if (boss == 'small') {
					clock.boss = StationClock.RedBoss;
				}
				else if (boss == 'medium') {
					clock.boss = StationClock.ViennaBoss;
				}
				else {
					clock.boss = StationClock.NoBoss;
				}
			}
			else {
				clock.boss = StationClock.NoBoss;
			}
			
			if (elem.data('mbehave')) {
				var mbehave = elem.data('mbehave');
				if (mbehave == 'creep') {
					clock.minuteHandBehavoir = StationClock.CreepingMinuteHand;
				}
				else if (mbehave == 'ebounce') {
					clock.minuteHandBehavoir = StationClock.ElasticBouncingMinuteHand;
				}
				else {
					clock.minuteHandBehavoir = StationClock.BouncingMinuteHand;
				}
			}
			else {
				clock.minuteHandBehavoir = StationClock.BouncingMinuteHand;
			}
			
			if (elem.data('sbehave')) {
				var sbehave = elem.data('sbehave');
				if (sbehave == 'creep') {
					clock.secondHandBehavoir = StationClock.CreepingSecondHand;
				}
				else if (sbehave == 'ebounce') {
					clock.secondHandBehavoir = StationClock.ElasticBouncingSecondHand;
				}
				else if (sbehave == 'hasty') {
					clock.secondHandBehavoir = StationClock.OverhastySecondHand;
				}
				else {
					clock.secondHandBehavoir = StationClock.BouncingSecondHand;
				}
			}
			else {
				clock.secondHandBehavoir = StationClock.BouncingSecondHand;
			}
			
			if (elem.data('date-color')) {
				clock.dateColor = elem.data('date-color');
			}
			
			clock.bodyColor = elem.data('body-color');
			clock.strokeColor = elem.data('stroke-color');
			clock.dialColor = elem.data('dial-color');
			clock.hourHandColor = elem.data('hour-color');
			clock.minuteHandColor = elem.data('minute-color');
			clock.secondHandColor = elem.data('second-color');
			clock.bossColor = elem.data('boss-color');
			
			var isclock = document.getElementById('clock');
			
			if (isclock) {
				window.setInterval(function() { clock.draw() }, 50);
			}
			else {
				var elemCanvas =  jQuery('<canvas/>', {
					id: 'clock',
				}).appendTo(elem);
				elemCanvas.attr({
					'height': elem.data('size'),
					'width': elem.data('size'),
				});
						
				window.setInterval(function() { clock.draw() }, 50);
			}
        });
    },
    // mandatory function, get called after start up once and on every FHEM poll
    update: function (dev,par) {
    }
});
