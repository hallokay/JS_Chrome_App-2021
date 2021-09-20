const clock = document.querySelector(".clock_container h1");

function getTime() {
  const date = new Date(),
    hour = String(date.getHours()).padStart(2, "0"),
    min = String(date.getMinutes()).padStart(2, "0"),
    sec = String(date.getSeconds()).padStart(2, "0");
  //   String.padStart(20,"x") String를 20글자로 맞추는데 앞부분을 xxxxx로 해서 20글자
  //  String.padEnd(20, "x");

  // console.log(sec);

  clock.innerText = `${hour}:${min}:${sec}`;
}

setInterval(getTime, 1000);
