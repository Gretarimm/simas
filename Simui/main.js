
//apsirasau funkcija hamburgeriui
$( document ).ready(function() {

$( ".cross" ).hide();



	$( ".hamburger" ).click(function() {
		$( "nav" ).slideToggle( "slow", function() {
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		});
	});

	$( ".cross" ).click(function() {
		$( "nav" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
		});
	});

 var width = $(window).width();
    if (width < 900) {
        $( "li" ).click(function() {
            $( "nav" ).slideToggle( "slow", function() {
                $( ".hamburger" ).show();
                $( ".cross" ).hide();

            });
        });
    }
   
var para = document.querySelector('li');

var mql = window.matchMedia('(max-width: 900px)');

function screenTest(e) {
  if (e.matches) {
    $( "li" ).click(function() {
            $( "nav" ).slideToggle( "slow", function() {
                $( ".hamburger" ).show();
                $( ".cross" ).hide();
            });
        });
  } else {
    location.reload();
    /* the viewport is more than than 600 pixels wide */
  }
}

mql.addListener(screenTest);
 
});



// _____________________________________
// Apsirasyti funkcijas valiutos konvertavimui
function vienasMilijonasEurai(pinigai) {
    var koef = 0.80;
    return pinigai*koef;
}
function vienasMilijonasUSD(pinigai) {
    var koefa = 0.90;
    return pinigai*koefa;
}
function vienasMilijonasGBP(pinigai) {
    var koefb = 0.74;
    return pinigai*koefb;
}
function euraisGaunasi(pinigai) {
    var koef = 0.80;
    return pinigai/koef;
}
function USD(pinigai) {
    var koefa = 0.90;
    return pinigai/koefa;
}
function GBP(pinigai) {
    var koefb = 0.74;
    return pinigai/koefb;
}
$('#milai').on('keyup', function(){
	var reiksmeInput =$('#milai').val();
	var atsakymasEurai = vienasMilijonasEurai(reiksmeInput); 
	var euruInput =$('#eurai').val(atsakymasEurai.toFixed(2));

	var atsakymasUSD = vienasMilijonasUSD(reiksmeInput);
	var usdInput =$('#USD').val(atsakymasUSD.toFixed(2));

	var atsakymasGBP = vienasMilijonasGBP(reiksmeInput);
	var gbpliuInput =$('#GBP').val(atsakymasGBP.toFixed(2));
});
$('#eurai').on('keyup', function(){
    var reiksmeInput =$('#eurai').val();
    var atsakymasEurai = euraisGaunasi(reiksmeInput);  
    var EuruInput =$('#milai').val(atsakymasEurai.toFixed(2));
});
// ___________________
$('#USD').on('keyup', function(){
    var reiksmeInput =$('#USD').val();
    var atsakymasUSD = USD(reiksmeInput);
    var EuruInput =$('#milai').val(atsakymasUSD.toFixed(2));
});
//___________________________
$('#GBP').on('keyup', function(){
    var reiksmeInput =$('#GBP').val();
    var atsakymasEurai = GBP(reiksmeInput);
    var EuruInput =$('#milai').val(atsakymasEurai.toFixed(2));
});
// ______________antralentele________________________

function vienasMilijonasEuraia(pinigai) {
    var koef = 0.16;
    return pinigai*koef;
}
function vienasMilijonasUSDa(pinigai) {
    var koefa = 0.24;
    return pinigai*koefa;
}
function vienasMilijonasGBPa(pinigai) {
    var koefb = 0.13;
    return pinigai*koefb;
}
function euraisGaunasia(pinigai) {
    var koef = 0.16;
    return pinigai/koef;
}
function USDa(pinigai) {
    var koefa = 0.24;
    return pinigai/koefa;
}
function GBPa(pinigai) {
    var koefb = 0.13;
    return pinigai/koefb;
}
$('#milaia').on('keyup', function(){
    var reiksmeInputa =$('#milaia').val();
    var atsakymasEuraia = vienasMilijonasEuraia(reiksmeInputa); 
    var euruInputa =$('#euraia').val(atsakymasEuraia.toFixed(2));

    var atsakymasUSDa = vienasMilijonasUSDa(reiksmeInputa);
    var usdInputa =$('#USDa').val(atsakymasUSDa.toFixed(2));

    var atsakymasGBPa = vienasMilijonasGBPa(reiksmeInputa);
    var gbpliuInputa =$('#GBPa').val(atsakymasGBPa.toFixed(2));
});
$('#euraia').on('keyup', function(){
    var reiksmeInputa =$('#euraia').val();
    var atsakymasEuraia = euraisGaunasia(reiksmeInputa);  
    var EuruInputa =$('#milaia').val(atsakymasEuraia.toFixed(2));
});
// ___________________
$('#USDa').on('keyup', function(){
    var reiksmeInputa =$('#USDa').val();
    var atsakymasUSDa = USDa(reiksmeInputa);
    var EuruInputa =$('#milaia').val(atsakymasUSDa.toFixed(2));
});
//___________________________
$('#GBPa').on('keyup', function(){
    var reiksmeInputa =$('#GBPa').val();
    var atsakymasEuraia = GBPa(reiksmeInputa);
    var EuruInputa =$('#milaia').val(atsakymasEuraia.toFixed(2));
});

//________kita sekcija______#pirma 1lentele____________
function vienasMilijonasEuraib(pinigai) {
    var koef = 0.66
    return pinigai*koef;
}
function vienasMilijonasUSDb(pinigai) {
    var koefa = 0.70;
    return pinigai*koefa;
}
function vienasMilijonasGBPb(pinigai) {
    var koefb = 0.62;
    return pinigai*koefb;
}
function euraisGaunasib(pinigai) {
    var koef = 0.66;
    return pinigai/koef;
}
function USDb(pinigai) {
    var koefa = 0.70;
    return pinigai/koefa;
}
function GBPb(pinigai) {
    var koefb = 0.62;
    return pinigai/koefb;
}
$('#milaib').on('keyup', function(){
    var reiksmeInputb =$('#milaib').val();
    var atsakymasEuraib = vienasMilijonasEuraia(reiksmeInputb); 
    var euruInputb =$('#euraib').val(atsakymasEuraib.toFixed(2));

    var atsakymasUSDb = vienasMilijonasUSDb(reiksmeInputb);
    var usdInputb =$('#USDb').val(atsakymasUSDb.toFixed(2));

    var atsakymasGBPb = vienasMilijonasGBPb(reiksmeInputb);
    var gbpliuInputb =$('#GBPb').val(atsakymasGBPb.toFixed(2));
});
$('#euraib').on('keyup', function(){
    var reiksmeInputb =$('#euraib').val();
    var atsakymasEuraib = euraisGaunasib(reiksmeInputb);  
    var EuruInputb =$('#milaib').val(atsakymasEuraib.toFixed(2));
});
// ___________________
$('#USDb').on('keyup', function(){
    var reiksmeInputb =$('#USDb').val();
    var atsakymasUSDb = USDb(reiksmeInputb);
    var EuruInputb =$('#milaib').val(atsakymasUSDb.toFixed(2));
});
//___________________________
$('#GBPb').on('keyup', function(){
    var reiksmeInputb =$('#GBPb').val();
    var atsakymasEuraib = GBPa(reiksmeInputb);
    var EuruInputb =$('#milaib').val(atsakymasEuraib.toFixed(2));
});
//_________________antra___________________________
function vienasMilijonasEuraic(pinigai) {
    var koef = 0.12;
    return pinigai*koef;
}
function vienasMilijonasUSDc(pinigai) {
    var koefa = 0.15;
    return pinigai*koefa;
}
function vienasMilijonasGBPc(pinigai) {
    var koefb = 0.10;
    return pinigai*koefb;
}
function euraisGaunasic(pinigai) {
    var koef = 0.12;
    return pinigai/koef;
}
function USDc(pinigai) {
    var koefa = 0.15;
    return pinigai/koefa;
}
function GBPc(pinigai) {
    var koefb = 0.10;
    return pinigai/koefb;
}
$('#milaic').on('keyup', function(){
    var reiksmeInputc =$('#milaic').val();
    var atsakymasEuraic = vienasMilijonasEuraic(reiksmeInputc); 
    var euruInputc =$('#euraic').val(atsakymasEuraic.toFixed(2));

    var atsakymasUSDc = vienasMilijonasUSDc(reiksmeInputc);
    var usdInputc =$('#USDc').val(atsakymasUSDc.toFixed(2));

    var atsakymasGBPc = vienasMilijonasGBPc(reiksmeInputc);
    var gbpliuInputc =$('#GBPc').val(atsakymasGBPc.toFixed(2));
});
$('#euraic').on('keyup', function(){
    var reiksmeInputc =$('#euraic').val();
    var atsakymasEuraic = euraisGaunasic(reiksmeInputc);  
    var EuruInputc =$('#milaic').val(atsakymasEuraic.toFixed(2));
});
// ___________________
$('#USDc').on('keyup', function(){
    var reiksmeInputc =$('#USDc').val();
    var atsakymasUSDc = USDc(reiksmeInputc);
    var EuruInputc =$('#milaic').val(atsakymasUSDc.toFixed(2));
});
//___________________________
$('#GBPc').on('keyup', function(){
    var reiksmeInputc =$('#GBPc').val();
    var atsakymasEuraic = GBPa(reiksmeInputc);
    var EuruInputc =$('#milaic').val(atsakymasEuraic.toFixed(2));
});


// _________skaipe dideja___________

$(function(){
    $('.visi, .visii').on({
        mouseover: function(){
            $(this).css({
                "box-shadow":"0px 0px 10px #000000",
                 "-webkit-transition":"all 200ms ease-in",
                 "-webkit-transform":"scale(1.5)",
                 "-ms-transition":"all 200ms ease-in",
                 "-ms-transform":"scale(1.5)",
                 "-moz-transition":"all 200ms ease-in",
                 "-moz-transform":"scale(1.5)",
                 "transition":"all 200ms ease-in",
                 "transform":"scale(1.5)",
            });
        },
        mouseout: function(){
            $(this).css({
                "box-shadow":"none",
                 "-webkit-transition":"all 200ms ease-in",
                 "-webkit-transform":"scale(1)",
                 "-ms-transition":"all 200ms ease-in",
                 "-ms-transform":"scale(1)",
                 "-moz-transition":"all 200ms ease-in",
                 "-moz-transform":"scale(1)",
                 "transition":"all 200ms ease-in",
                 "transform":"scale(1)",
            });
        }
    })
});