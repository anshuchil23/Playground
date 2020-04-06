<html lang ="en">
<head>
<title> Camera Filters </title>
<link rel="stylesheet" href="style.css">


</head>
<body>

  <div id="menu"> <a href="index.html">Home</a> 
    <br> </br>
  <a href="midterm.html">Playground</a>
</div>
    <!-- Slideshow container -->
<div class="slideshow-container">

    <!-- Full-width images with number and caption text -->
    <div class="mySlides fade">
      <div class="numbertext">1 / 5</div>
       <a href = "cam1.html">
        <img src="cam1.jpg" alt="Knitted Kingdom"> 
        <div class="text">Knitted Kingdom</div>

      </a>  
    </div>
  
    <div class="mySlides fade">
      <div class="numbertext">2 / 5</div>
      <a href = "cam2.html">
        <img src="cam2.jpg" alt="A Bunch of Toilet Paper"> 
      </a>  
            <div class="text">A Bunch of Toilet Paper</div>
    </div>
  
    <div class="mySlides fade">
      <div class="numbertext">3 / 5</div>
      <a href = "cam3.html">
        <img src="cam3.jpg" alt="I'm a Lens Flare"> 
      </a>  
            <div class="text">You're A Lens Flare</div>
    </div>

    
    <div class="mySlides fade">
        <div class="numbertext">4 / 5</div>
        <a href = "cam4.html">
          <img src="cam4.jpg" alt="Constellation Me"> 
        </a>  
              <div class="text">Constellation Me</div>       
      </div>

      <div class="mySlides fade">
        <div class="numbertext">5 / 5</div>
        <a href = "cam5.html">
          <img src="cam5.jpg" alt="Just Imagine You're In A Club"> 
        </a>  
              <div class="text">Just Imagine You're In A Club</div>        
      </div>
  
    <!-- Next and previous buttons -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
  </div>
  <br>
  
  <!-- The dots/circles -->
  <div style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
    <span class="dot" onclick="currentSlide(4)"></span>
    <span class="dot" onclick="currentSlide(5)"></span>

  </div>
<script> var slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }</script>
</body>
</html>
<script
