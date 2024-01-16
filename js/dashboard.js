      $(document).ready(function(){
	      $(".xp-menubar").on('click',function(){
		    $("#sidebar").toggleClass('active');
			$("#content").toggleClass('active');
		  });
		  
		  $('.xp-menubar,.body-overlay').on('click',function(){
		     $("#sidebar,.body-overlay").toggleClass('show-nav');
		  });
		  
	   });

       // loader
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut();

  let copyText = document.querySelector(".copy-text");
  copyText.querySelector("button").addEventListener("click",function(){
    let input = copyText.querySelector("input.text");
    input.select();
    document.execCommand("copy");
    copyText.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(function(){
      copyText.classList.remove("active");
    },2500);
  });