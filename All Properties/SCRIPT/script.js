     
          let index = 0;
          
          function getVisibleSlides() {
              const width = window.innerWidth;
              if (width < 480) return 1;
              if (width < 768) return 2;
              if (width < 1024) return 3;
              return 4;
          }

          
        
        document.addEventListener('DOMContentLoaded', function () {
          
          AOS.init();           
          const scrollBtn = document.getElementById("scrollTopBtn");

          window.addEventListener("scroll", () => {
          if (window.scrollY > 2000) {
                scrollBtn.style.display = "block";
          } else {
                scrollBtn.style.display = "none";
            }
          });

           // Handle careers-form
          const form1 = document.getElementById("careers-form");
          const message1 = document.getElementById("careers-form-msg");
         
          form1.addEventListener("submit", function (e) {
              e.preventDefault();
              message1.classList.remove("d-none");
          form1.reset();

          setTimeout(() => {
            message1.classList.add("d-none");
          }, 3000);
       });

        // Handle Form 2
        const form2 = document.getElementById("contect-form");
        const message2 = document.getElementById("contect-form-msg");

  
        form2.addEventListener("submit", function (e) {
            e.preventDefault();
            
            message2.classList.remove("d-none");
            form2.reset();

            setTimeout(() => {
              message2.classList.add("d-none");
            }, 3000);
        }); 
         


  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });             
          


          document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
                  anchor.addEventListener("click", function (e) {
                  e.preventDefault();
                  const target = document.querySelector(this.getAttribute("href"));
                  const offsetTop = target.offsetTop - 170;

                  // console.log("Clicked link:", this.getAttribute("href"));
                  // console.log("Scrolling to offset:", offsetTop);

                  window.scrollTo({
                          top: offsetTop,
                          behavior: "smooth"
                  });

                 // Properly hide the navbar using Bootstrap's Collapse API
                const navbarCollapseEl = document.querySelector('#navbarNav');
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapseEl) 
                || new bootstrap.Collapse(navbarCollapseEl, { toggle: false });

                  bsCollapse.hide();

              });
          });

         
          document.querySelector('#prevBtn').addEventListener('click', () => moveSlide(-1));
          document.querySelector('#nextBtn').addEventListener('click', () => moveSlide(1));

          const track = document.getElementById('sliderTrack');
          const slides = document.querySelectorAll('.cli-slide');
          
          function moveSlide(direction) {
              const visibleSlides = getVisibleSlides();
              index += direction;

              const maxIndex = slides.length - visibleSlides;
              if (index < 0) index = maxIndex;
              if (index > maxIndex) index = 0;

              updateSlider();
          }

          function updateSlider() {
              const visibleSlides = getVisibleSlides();
              const slideWidth = 100 / visibleSlides;
              track.style.transform = `translateX(-${index * slideWidth}%)`;

              slides.forEach((slide, i) => {
                  slide.classList.toggle('active', i >= index && i < index + visibleSlides);
              });
          }

        
            window.addEventListener('resize', updateSlider);
            setInterval(() => moveSlide(1), 4000);
            updateSlider();

        });