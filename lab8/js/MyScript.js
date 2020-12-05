function show(){
  
    event.preventDefault(); // выключаем стандартную роль элемента
    $('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
      function(){ // после выполнения предъидущей анимации
        $('#modal_form').css('display', 'block') // убираем у модального окна display: none;
    
    });
  
 
 $('#modal_form').load("text.txt");  


$('#modal_close, #overlay').click( function(){ // ловим клик по крестику или подложке
    $('#modal_form')
      .animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
        function(){ // после анимации
          $(this).css('display', 'none'); // делаем ему display: none;
          $('#overlay').fadeOut(400); // скрываем подложку
        }
      );})}