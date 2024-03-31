const clock = document.getElementById('time');

setInterval(function()
{
    var now = new Date();
    clock.innerHTML = now.toLocaleString();
},1500);