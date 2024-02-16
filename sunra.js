$("document").ready(function() {












    $('.q1').on("mousedown", function () {
        $(this).css('z-index', -12);  
      });

      $('.a1').on("mousedown", function () {
        $(this).css('z-index', -13);  
      });

      $('.q2').on("mousedown", function () {
        $(this).css('z-index', -14);  
      });

      $('.a2').on("mousedown", function () {
        $(this).css('z-index', -15);  
      });

      $('.q3').on("mousedown", function () {
        $(this).css('z-index', -16);  
      });

      $('.a3').on("mousedown", function () {
        $(this).css('z-index', -17);  
      });

      $('.q4').on("mousedown", function () {
        $(this).css('z-index', -18);  
      });

      $('.a4').on("mousedown", function () {
        $(this).css('z-index', -19);  
      });

      $('.q5').on("mousedown", function () {
        $(this).css('z-index', -20);  
      });

      $('.a5').on("mousedown", function () {
        $(this).css('z-index', -21);  
      });

      $('.q6').on("mousedown", function () {
        $(this).css('z-index', -22);  
      });

      $('.a6').on("mousedown", function () {
        $(this).css('z-index', -23);  
      });

      $('.q7').on("mousedown", function () {
        $(this).css('z-index', -24);  
      });

      $('.a7').on("mousedown", function () {
        $(this).css('z-index', -25);  
      });

      $('.q8').on("mousedown", function () {
        $(this).css('z-index', -26);  
      });

      $('.a8').on("mousedown", function () {
        $(this).css('z-index', -26);  
      });

      $('.q9').on("mousedown", function () {
        $(this).css('z-index', -28);  
      });

      $('.a9').on("mousedown", function () {
        $(this).css('z-index', -29);  
      });

      $('.q10').on("mousedown", function () {
        $(this).css('z-index', -30);  
      });

      $('.a10').on("mousedown", function () {
        $(this).css('z-index', -31);  
      });

      $('.q11').on("mousedown", function () {
        $(this).css('z-index', -32);  
      });

      $('.a11').on("mousedown", function () {
        $(this).css('z-index', -33);  
      });



      function getRandomAudio() {
        var audioElements = ["audio1", "audio2", "audio3", "audio4"];
        var randomIndex = Math.floor(Math.random() * audioElements.length);
        return document.getElementById(audioElements[randomIndex]);
    }

    document.getElementById('audioDiv').addEventListener('click', function() {
      var audio = getRandomAudio();
      audio.play();
  });





});