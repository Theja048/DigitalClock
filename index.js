setInterval(() =>{
    let clock = document.getElementById('clock');
    let daydisplay = document.getElementById('day');
    let month = document.getElementById('month');
    let year = document.getElementById('year');

      //for getting time

      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      if(minutes <= 9){
        minutes = `0${minutes}`;
      }

      let seconds = date.getSeconds();
      if(seconds <9 ){
        seconds =  `0${seconds}`
      }

      //for month and year
      let cDate = date.getDate();
      let cMonth = date.getMonth();
      let cYear = date.getFullYear();
      //days
      let day = date.getDay();
      let daysName =[
           'Sunday',
           'Monday',
           'Tuesday',
           'Wednesday',
           'Thursday',
           'Friday',
           'Saturday'
      ];
      //to show time am or pm
      if (hours < 12) {
        document.getElementById('amOrpm').innerHTML = 'AM';
      } else {
        document.getElementById('amOrpm').innerHTML = 'PM';
      } 
      //Clock
      clock.innerHTML = `${hours}:${minutes}:${seconds}`;

      //display Day -
      daydisplay.innerHTML = `${daysName[day]} ||  ${cDate}/`;

      //display month 

      month.innerHTML = cMonth;

      year.innerHTML = `/${cYear}`;
},1000);