$(document).ajaxSend(() => {
	console.log('AJAX request sent.');
});

$(document).ajaxComplete(() => {
	console.log('AJAX request completed.');
});

$(document).ajaxError(() => {
	console.log('Error!');
});

$(document).ajaxStart(() => {
	console.log('AJAX request started.');
});

$(document).ajaxStop(() => {
	console.log('AJAX request stoped.');
});


$('#b1').bind('click', () => {
   $.ajax({
    type: "get" ,
    url: "book.xml" ,
    dataType: "xml" ,
    success: function(xml) {
        
    var book = $(xml).find('book').text();  

    $(xml).find('book').each(function(){

       $('#id1').val($(this).find('name').text());
       $('#id2').val($(this).find('author').text());
       $('#id3').val($(this).find('year').text());
       $('#id4').val($(this).find('pages').text()); 
 
    }); 
    }       
});
});

$('#b2').bind('click', () => {
   $.ajax({
    url: "js/MyScript.js" ,
    dataType: "script" ,
    success: function(script) {  
        show();
}
});
});





$('#b3').bind('click', () => {
     $.ajax({
success: function() { 
$("#id1").val() == '';
$("#id2").val() == '';
$("#id3").val() == '';
$("#id4").val() == '';
}
});
});


$('#b4').bind('click', () => {
     $.ajax({
success: function() { 
$( "#form" ).hide() ;}
});
});


$('#b5').bind('click', () => {
     $.ajax({
success: function() { 
if ($("#id1").val() === '' || $("#id2").val() === '' || $("#id3").val() === ''  || $("#id4").val() === '') {
$(".error").fadeIn(1000).fadeOut(1000);
 }
}
});
});


$('#cl1').bind('click', () => {
     $.ajax({
success: function(script) { 
    $("#id1").css("color", "blue");
    $("#id2").css("color", "blue");
    $("#id3").css("color", "blue");
    $("#id4").css("color", "blue");

}
});
});

$('#cl2').bind('click', () => {
     $.ajax({
success: function(script) { 
    $("#id1").css("color", "red");
    $("#id2").css("color", "red");
    $("#id3").css("color", "red");
    $("#id4").css("color", "red");
}
});
});

