const useless_button = document.getElementById('myButton');
const popper_upper = document.getElementById('popper-upper');
const closeTheDangPopupLol = document.getElementById('closeTheDangPopupLol');

useless_button.addEventListener('click', function() {
      postMessage('Bro clicked the button anyway, lol XD');
    }
);



popper_upper.addEventListener(
     'click',
     function() {
     popper_upper.classList.add("show");
     
    }
);

closeTheDangPopupLol.addEventListener(
    'click',
    function() {
    closeTheDangPopupLol.classList.remove("show");
});

window.addEventListener{
    "click",
    function (event) {
        if (event.target == popper_upper)
            popper_upper.classList.remove(
        "show")
    }
}
