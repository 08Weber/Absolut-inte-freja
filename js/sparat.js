var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function saveAndNavigate() {
  var _0xc21723 = document.getElementById("btn1").value;
  var _0x794f97 = document.getElementById("btn2").value;
  var _0x49e78a = document.getElementById("btn3").value;
  var _0x1bf883 = document.getElementById("btn4").value;
  localStorage.setItem("fornamn", _0xc21723);
  localStorage.setItem("efternamn", _0x794f97);
  localStorage.setItem("age", _0x49e78a);
  localStorage.setItem("personnummer", _0x1bf883);
  window.location.href = "index.html";
}
var fornamn = localStorage.getItem("fornamn");
var efternamn = localStorage.getItem("efternamn");
var age = localStorage.getItem("age");
var personnummer = localStorage.getItem("personnummer");
document.getElementById("updateEfternamn").textContent = efternamn;
document.getElementById("updateFornamn").textContent = fornamn;
document.getElementById("updateAge").textContent = age;
document.getElementById("Personnummer").textContent = personnummer;
function updateSpans() {
  var _0x235966 = document.getElementById("btn1").value;
  var _0x5d7fed = document.getElementById("btn2").value;
  var _0x385b7b = new Date();
  _0x385b7b.setDate(_0x385b7b.getDate() + 30);
  var _0x3f826a = {
    'fornamn': _0x235966,
    'efternamn': _0x5d7fed,
    'expiration': _0x385b7b.getTime()
  };
  localStorage.setItem("userData", JSON.stringify(_0x3f826a));
  window.open("other.html", "_blank");
}

}
/*
     FILE ARCHIVED ON 20:53:39 Jan 06, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:09:19 Mar 01, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.671
  exclusion.robots: 0.03
  exclusion.robots.policy: 0.014
  esindex: 0.018
  cdx.remote: 19.596
  LoadShardBlock: 360.599 (3)
  PetaboxLoader3.resolve: 236.083 (3)
  PetaboxLoader3.datanode: 363.721 (4)
  load_resource: 288.897
*/