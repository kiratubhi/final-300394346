let countDownInterval;
function getDate(){
    var birthday= document.getElementById('birthday').value;
    return new Date('birthday').getTime;
}
function start() {
    var countDownDate= getDate();
    clearInterval(countDownInterval);

    countDownInterval = setInterval(function()  {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        console.log("Distance:",distance);

           // If the count down is over, write some text 
           if (distance < 0) {
            clearInterval(countDownInterval);
            document.getElementById("demo").innerHTML = "Date is Expired";
            return;
          }
          
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var secs = Math.floor((distance % (1000 * 60)) / 1000);
        var dicsecs = Math.floor((distance % 1000) / 100);
          
        // Output the result in an element with id="demo"
        document.getElementById("days").innerHTML = days ;
        document.getElementById("hrs").innerHTML = hrs ;
        document.getElementById("mins").innerHTML = mins;
        document.getElementById("secs").innerHTML = secs;
        document.getElementById("dicsecs").innerHTML = dicsecs;
      }, 100);
}