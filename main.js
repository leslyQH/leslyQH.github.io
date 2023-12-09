let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color:#9dafc9;'>|</span>",

});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #9dafc9;">Cada día es una oportunidad para superar mis límites y construir una mejor versión de mí, ya que la mejora continua es la clave del éxito.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  
