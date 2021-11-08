

let arrays = ["Sophie","mmasepaka","Wandile","kagisho","happy","andisiwe","sithemba","selina","lucky","Khum", "vusi", "hardy", ""];
  
let display = document.getElementById("display");

for (let i =0; i <arrays.length; i++) {
    display.innerHTML += "<li>" + arrays [i] + "</li>";
}

