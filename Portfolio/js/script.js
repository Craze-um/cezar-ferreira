// Código inicial

console.log("Portfólio carregado com sucesso!");// Código inicial

console.log("Portfólio carregado com sucesso!");

const elementos=document.querySelectorAll(".fade");

const observador=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("apareceu");

}

});

},{threshold:.20});

elementos.forEach(el=>{

observador.observe(el);

});

/*====================================================
        CARROSSEL DAS COLEÇÕES
====================================================*/

document.querySelectorAll(".slider").forEach((slider)=>{

    const slides = slider.querySelectorAll(".slide");

    const next = slider.querySelector(".next");

    const prev = slider.querySelector(".prev");

    let indice = 0;

    function mostrarSlide(){

        slides.forEach((slide)=>{

            slide.classList.remove("active");

        });

        slides[indice].classList.add("active");

    }

    next.addEventListener("click",()=>{

        indice++;

        if(indice >= slides.length){

            indice = 0;

        }

        mostrarSlide();

    });

    prev.addEventListener("click",()=>{

        indice--;

        if(indice < 0){

            indice = slides.length - 1;

        }

        mostrarSlide();

    });

});

setInterval(()=>{

    indice++;

    if(indice>=slides.length){

        indice=0;

    }

    mostrarSlide();

},6000);