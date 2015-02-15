$(document).on('ready page:load', function() {

    $(".hide").hide();

    //MENU

    $(document).scroll(function () {
        if ($(this).scrollTop() < 60 ) {
            $('#menu').fadeIn();
        } else {
            $('#menu').fadeOut();
        }
    });

    $("nav").hover(function(){
        $("#menu").fadeIn();
    }, function() {
        if ($(this).scrollTop() > 0) {
            $("#menu").fadeOut();
        }
    });

// Show image as on page load
setInterval(function () {
	$(".hide").show().animate({
		opacity: 1
	}, 3000);
    // $("#menu").show().fadeIn();
}, 2000);

// A counter to count how many seconds i have been coding

var start = new Date(2015, 1, 2);

setInterval(function () {
	var seconds = Math.floor((new Date() - start) * 1 / 1000);
	$("#coding").html("Seconds coding: " + "<br>" + seconds);
}, 1000);


//Menu Scrolling to div

$("#welcomebutton").click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});

$("#aboutmebutton").click(function(){
	$('html, body').animate({
		scrollTop: $("#aboutmecontainer").offset().top
	}, 1000);
});

$("#workbutton").click(function(){
	$('html, body').animate({
		scrollTop: $("#workcontainer").offset().top
	}, 1000);
});

$("#skillsbutton").click(function(){
	$('html, body').animate({
		scrollTop: $("#skillscontainer").offset().top
	}, 1000);
});

$("#contactbutton").click(function(){
	$('html, body').animate({
		scrollTop: $("#contactcontainer").offset().top
	}, 1000);
});

// Loading of chart after you scroll to skills div only once.

$(function () {
// Check for position while scrolling

var $window = $(window),
didScroll = false,
        skillsTop = $('#skillscontainer').offset().top - 600; //the point at which we will create the chart
        aboutmeTop = $('#aboutmecontainer').offset().top;
        $window.on('scroll', function () {
        //detected a scroll event, you want to minimize the code here because this event can be thrown A LOT!
        didScroll = true;
    });

    //check every 250ms if user has scrolled to the skills section
    setInterval(function () {
    	if (didScroll) {
    		didScroll = false;
    		if ($window.scrollTop() >= skillsTop) {
    			createChart();
    		}
        }
    }, 250);

//Create the chart

function createChart() {
        $window.off('scroll'); //remove listener that will create chart, this ensures the chart will be created only once

        // Make monochrome colors and set them as default for all pies
        Highcharts.getOptions().plotOptions.pie.colors = (function () {
        	var colors = [],
        	base = Highcharts.getOptions().colors[1],
        	i;

        	for (i = 0; i < 10; i += 1) {
            // Start out with a darkened base color (negative brighten), and end
            // up with a much brighter color
            colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
        }
        return colors;
    }());

    // Build the chart
    $('#chart').highcharts({
    	chart: {
    		plotBackgroundColor: null,
    		plotBorderWidth: null,
    		plotShadow: false,
    		backgroundColor: 'white',
    		borderRadius: 20
    	},
    	credits: {
    		enabled: false
    	},
    	title: {
    		text: 'Programming languages'
    	},
    	tooltip: {
    		pointFormat: ''
    	},
    	plotOptions: {
    		pie: {
    			allowPointSelect: true,
    			cursor: 'pointer',
    			dataLabels: {
    				enabled: true,
    				format: '<b>{point.name}</b>',
    				style: {
    					color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
    					fontSize: '20px',
    					fontFamily: 'courier'
    				}
    			}
    		}
    	},
    	series: [{
    		type: 'pie',
    		name: 'Skill',
    		data: [
    		['Ruby',   40.0],
    		['JS/Jquery/Ajax',       35.0],
    		{
    			name: 'HTML & CSS',
    			y: 30.0,
    			sliced: true,
    			selected: true
    		},
    		['GIT',    20.5],
    		['Meteor',     3.0],
    		['C#/C++',   2.0]
    		]
    	}]
    });
};
});
});