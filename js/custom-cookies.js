// footer alert and set a cookie
function HideFirstTimerAlert(){
   days=30;
   myDate = new Date();
   myDate.setTime(myDate.getTime()+(days*24*60*60*1000));
   document.cookie = 'HideFirstTimerAlert=Accepted; expires=' + myDate.toGMTString();
}

var cookie = document.cookie.split(';')
    .map(function(x){ return x.trim().split('='); })
    .filter(function(x){ return x[0]==='HideFirstTimerAlert'; })
    .pop();

if(cookie && cookie[1]==='Accepted') {
    $("#cookieAlert").hide();
}

$('#gotIt').on('click', function(){
    $("#cookieAlert").toggleClass('show-alert');
	HideFirstTimerAlert();
    return false;
}); 