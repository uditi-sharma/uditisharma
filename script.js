var light = true;

function theme() {
  var element = document.body;
  if (light) {
    document.getElementById("theme-label").innerHTML = "Turn on the lights 💡";
    document.documentElement.setAttribute('data-theme', 'dark');
    light = false;
  } else {
    document.getElementById("theme-label").innerHTML = "Show me the dark side 🌙";
    document.documentElement.setAttribute('data-theme', 'root');
    light = true;
  }
}