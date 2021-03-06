'use strict';

function toggleMenu(visible) {
    document.querySelector('.leftColumn').classList.toggle('showNavbars', visible)
}

document.getElementById("hambuger").addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu()
});

function myFunction(x) {
    
if (x.matches) { // If media query matches
        toggleMenu();
    } else {
        toggleMenu();
    }
}
  
var x = window.matchMedia("(max-width: 767px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

// =========================
// ======= MODALS ==========
//==========================

var showModal = function(event) {
    
    event.preventDefault();
    //chowa modale
    var modalsHide = document.querySelectorAll('.modal');
    for(var i = 0; i < modalsHide.length; i++) {
        modalsHide[i].classList.remove('showM');   
    }
    //pokazuje modal-overlay
    document.querySelector('#modal-overlay').classList.add('showM');
    console.log(event.target); //wyciąga wszystkie info o danym obiekcie 
    var currentTarget = event.target;
    while (!currentTarget.classList.contains('show-modal') && currentTarget!= null) {
        currentTarget = currentTarget.parentElement;
    }
    //pokazuje modal w zależności od tego, w który but kliknięto
    document.querySelector(currentTarget.dataset.hash).classList.add('showM');

};

// stosujemy kod dla wielu linków	
var modalLinks = document.querySelectorAll('.show-modal');
for (var i = 0; i < modalLinks.length; i++) {
      modalLinks[i].addEventListener('click', showModal);
}

// Dodajemy też funkcję zamykającą modal, oraz przywiązujemy ją do kliknięć na elemencie z klasą "close". 
var hideModal = function(event) {
      event.preventDefault();
      document.querySelector('#modal-overlay').classList.remove('showM');
};

var closeButtons = document.querySelectorAll('.modal .close');
for (var i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener('click', hideModal);
}

// Dobrą praktyką jest również umożliwianie zamykania modala poprzez kliknięcie w overlay. 
document.querySelector('#modal-overlay').addEventListener('click', hideModal);

//zamykanie poprzez kliknięcie w przycisk Escape na klawiaturze
document.addEventListener('keyup', function(e) {
    
    if (e.keyCode === 27) {
        document.querySelector('#modal-overlay').classList.remove('showM');
    }

});

// Musimy jednak pamiętać, aby zablokować propagację kliknięć z samego modala - inaczej każde kliknięcie wewnątrz modala również zamykałoby go. 
var modals = document.querySelectorAll('.modal');
for (var i = 0; i < modals.length; i++) {	  
modals[i].addEventListener('click', function(event) {
            event.stopPropagation();
      });
}

// =========================
// ======= CHART ==========
//==========================

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
        }]
    },
    options: {
        legend: {
            display: false,
        }
    },
});

var showg = document.getElementById('general');
var showd = document.getElementById('details');
var showl = document.getElementById('links');
var showb = document.getElementById('banners');
var showp = document.getElementById('personal');
var showpy = document.getElementById('payout');
var showpb = document.getElementById('postback');
var general = document.querySelector('.hg');
var details = document.querySelector('.hd');
var links = document.querySelector('.hl');
var banners = document.querySelector('.hb');
var persdat = document.querySelector('.hpd');
var payhist = document.querySelector('.hph');
var newpost = document.querySelector('.hnp');

function toggleclass(selector) {

    general.classList.add('hide');
    details.classList.add('hide');
    links.classList.add('hide');
    banners.classList.add('hide');
    persdat.classList.add('hide');
    payhist.classList.add('hide');
    newpost.classList.add('hide');   
    selector.classList.remove('hide');

}

showg.addEventListener('click',function() { 
    toggleclass(general);
});

showd.addEventListener('click',function() { 
    toggleclass(details);
});

showl.addEventListener('click',function() { 
    toggleclass(links);
});

showb.addEventListener('click',function() { 
    toggleclass(banners);
});

showp.addEventListener('click',function() { 
    toggleclass(persdat);
});

showpy.addEventListener('click',function() { 
    toggleclass(payhist);
});

showpb.addEventListener('click',function() { 
    toggleclass(newpost);
});
