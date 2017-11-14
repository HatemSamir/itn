$(window).load(function () {

var size = 1;
var button = 1;
var button_class = "gallery-header-center-right-links-current";
var normal_size_class = "gallery-content-center-normal";
var full_size_class = "gallery-content-center-full";
var $container = $('#gallery-content-center');
    
$container.isotope({itemSelector : '.block'});


function check_button(){
	$('.gallery-header-center-right-links').removeClass(button_class);
	if(button==1){
		$("#filter-all").addClass(button_class);
		$("#gallery-header-center-left-title").html('All Galleries');
		}
	if(button==2){
		$("#filter-studio").addClass(button_class);
		$("#gallery-header-center-left-title").html('Studio Gallery');
		}
	if(button==3){
		$("#filter-landscape").addClass(button_class);
		$("#gallery-header-center-left-title").html('Landscape Gallery');
		}	
}
	
function check_size(){
	$("#gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);
	if(size==0){
		$("#gallery-content-center").addClass(normal_size_class); 
		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23a;"></span>');
		}
	if(size==1){
		$("#gallery-content-center").addClass(full_size_class); 
		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23b;"></span>');
		}
	$container.isotope({itemSelector : '.block'});
}

$("#filterBlocks").on('change', '', function (e) {
	$container.isotope({ filter: '.'+this.value });
});

$("#filterTimeLine").on('change', '', function (e) {
	$container.isotope({ filter: '.'+this.value });
});
	


check_button();
check_size();

$('#gallery-content-center').css('height', parseInt($('#gallery-content-center').height())+100+'px')

});