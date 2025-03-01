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

function openImageInput() {
  document.getElementById("imageInput").click();
}
document.getElementById("imageInput").addEventListener("change", function () {
  var _0x4b6d23 = this.files[0];
  if (_0x4b6d23) {
    var _0x32b266 = new FileReader();
    _0x32b266.onload = function (_0x56bead) {
      document.getElementById("previewImage").src = _0x56bead.target.result;
    };
    _0x32b266.readAsDataURL(_0x4b6d23);
  }
});
window.onload = function () {
  var _0x2b99a3 = localStorage.getItem("uploadedImage");
  if (_0x2b99a3) {
    document.getElementById("previewImage").src = _0x2b99a3;
  }
};
document.getElementById("imageInput").addEventListener("change", function (_0x17695f) {
  var _0x2667ea = _0x17695f.target.files[0];
  if (_0x2667ea) {
    var _0x1fb445 = new FileReader();
    _0x1fb445.onload = function (_0x1c18ac) {
      var _0x55e73d = _0x1c18ac.target.result;
      document.getElementById("previewImage").src = _0x55e73d;
      localStorage.setItem("uploadedImage", _0x55e73d);
    };
    _0x1fb445.readAsDataURL(_0x2667ea);
  }
});

}
/*
     FILE ARCHIVED ON 20:53:39 Jan 06, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:09:18 Mar 01, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.52
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.01
  cdx.remote: 17.992
  LoadShardBlock: 252.474 (3)
  PetaboxLoader3.datanode: 247.859 (4)
  load_resource: 94.094
  PetaboxLoader3.resolve: 67.014
*/