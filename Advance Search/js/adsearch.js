$(document).ready(function(){
	  $("#browse-title").click(function(){
        $("#browse").slideToggle("slow");
    });

	   $("#advance-title").click(function(){
        $("#advance-search").slideToggle("slow");
    });
	    $(".skill-box").select2();

	   // Range Age
	  $( "#slider-age" ).slider({
      range: "min",
      value: 18,
      min: 1,
      max: 200,
      slide: function( event, ui ) {
        $( "#age-range" ).val( "Age:" + ui.value );
      }
    });
    
    $( "#age-range" ).val( "Age:" + $( "#slider-age" ).slider( "value" ) );


    // Range Salary
     $( "#slider-range-salary" ).slider({
      range: true,
      min: 200,
      max: 3000,
      values: [ 75, 500 ],
      slide: function( event, ui ) {
        $( "#salary" ).val( "Salary: $" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#salary" ).val( "Expect Salary: $" + $( "#slider-range-salary" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range-salary" ).slider( "values", 1 ) );


    // Range Experience
     $( "#slider-experience" ).slider({
      range: "min",
      value: 1,
      min: 0,
      max: 50,
      slide: function( event, ui ) {
        $( "#experience-range" ).val( "Experience:" + ui.value +"Years");
      }
    });
    $( "#experience-range" ).val( "Experience:" + $( "#slider-experience" ).slider( "value" )+"Years" );

	});
