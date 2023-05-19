let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    Array.from(tabcontents).forEach(tabcontent=>{
        if(tabname==="education")
            tabcontent.style.marginLeft = "-40px";
        else
            tabcontent.style.marginLeft = "40px";
    })
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    
    function func(){
        Array.from(tabcontents).forEach(tabcontent=>{
            tabcontent.style.marginLeft = "0px";
            })
        }
    setTimeout(func,0);
}


let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-147px";
}

let layer = document.querySelectorAll(".layer");
let image = document.querySelectorAll(".image");
let i=0;
image.forEach((img,i)=>{
    img.addEventListener('click', function run(){
        if(img.style.transform=="scale(1.1)"){
            img.style.transform="scale(1)";
            layer[i].style.height="0%";
        }
        else{
            img.style.transform="scale(1.1)";
            layer[i].style.height="100%";
            image.forEach((img2,j)=>{
                if(i!=j){
                img2.style.transform="scale(1)";
                layer[j].style.height="0%";
                }
            })
        }
        document.addEventListener('click',function run(){
            if(!img.contains(event.target)){
                if(img.style.transform=="scale(1.1)"){
                    img.style.transform="scale(1)";
                    layer[i].style.height="0%";
                }
            }
        })
    })
})

let hobby = document.querySelectorAll(".hobby");
hobby.forEach((h,i)=>{
    h.addEventListener('click', function run(){
        h.style.background="rgb(144, 59, 255)";
        h.style.transform="translateY(-10px)";
        hobby.forEach((h2,j)=>{
            if(i!=j){
                h2.style.background="#262626";
                h2.style.transform="translateY(10px)";
            }
        })
        document.addEventListener('click',function run(){
            if(!h.contains(event.target)){
                if(h.style.background=="rgb(144, 59, 255)"){
                    h.style.background="#262626";
                    h.style.transform="translateY(10px)";
                }
            }
        })
    })
})

// ------Google Form Script from Github-----
const scriptURL = 'https://script.google.com/macros/s/AKfycbxRt55I8s84z7Tn67Hye9_d_y4k6ILRUrGTbTSHZIkJR976A_t8Bz7CnCdkAsdqVmMs/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
            msg.innerHTML = "Message sent successfully!"
            setTimeout(function(){
                msg.innerHTML = "&nbsp;"
            }, 3000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})
