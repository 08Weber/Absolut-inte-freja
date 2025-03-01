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

particlesJS("particlesClick", {
  'particles': {
    'number': {
      'value': 0x0,
      'density': {
        'enable': false,
        'value_area': 0x384
      }
    },
    'color': {
      'value': "#ffffff"
    },
    'shape': {
      'type': "circle",
      'stroke': {
        'width': 0x0,
        'color': "#000000"
      },
      'polygon': {
        'nb_sides': 0x5
      },
      'image': {
        'src': "img/github.svg",
        'width': 0x64,
        'height': 0x64
      }
    },
    'opacity': {
      'value': 0.75,
      'random': true,
      'anim': {
        'enable': false,
        'speed': 0x1,
        'opacity_min': 0.1,
        'sync': false
      }
    },
    'size': {
      'value': 0x5,
      'random': true,
      'anim': {
        'enable': false,
        'speed': 0xa,
        'size_min': 0x3,
        'sync': false
      }
    },
    'line_linked': {
      'enable': false,
      'distance': 0x96,
      'color': "#ffffff",
      'opacity': 0.4,
      'width': 0x1
    },
    'move': {
      'enable': true,
      'speed': 0x6,
      'direction': "none",
      'random': false,
      'straight': false,
      'out_mode': "destroy",
      'attract': {
        'enable': false,
        'rotateX': 0x258,
        'rotateY': 0x4b0
      }
    }
  },
  'life': {
    'duration': {
      'value': 0x1
    }
  },
  'interactivity': {
    'detect_on': "canvas",
    'events': {
      'onhover': {
        'enable': false,
        'mode': "repulse"
      },
      'onclick': {
        'enable': true,
        'mode': "push"
      },
      'resize': true
    },
    'modes': {
      'grab': {
        'distance': 0x190,
        'line_linked': {
          'opacity': 0x1
        }
      },
      'bubble': {
        'distance': 0x190,
        'size': 0x28,
        'duration': 0x2,
        'opacity': 0x8,
        'speed': 0x3
      },
      'repulse': {
        'distance': 0xc8
      },
      'push': {
        'particles_nb': 0x28
      },
      'remove': {
        'particles_nb': 0x14,
        'delay': 0x1388
      }
    }
  },
  'retina_detect': true,
  'config_demo': {
    'hide_card': false,
    'background_color': "#b61924",
    'background_image': '',
    'background_position': "50% 50%",
    'background_repeat': "no-repeat",
    'background_size': "cover"
  }
});
const audioFiles = [f1 = document.getElementById('f1').src, f2 = document.getElementById('f2').src, f2 = document.getElementById('f3').src, f2 = document.getElementById('f4').src, f3 = document.getElementById('f5').src];
let currentIndex = 0;
const particleJSConfig = {
  'particles': {
    'number': {
      'value': 0x0,
      'density': {
        'enable': false,
        'value_area': 0x384
      }
    },
    'color': {
      'value': "#ffffff"
    },
    'shape': {
      'type': "circle",
      'stroke': {
        'width': 0x0,
        'color': "#000000"
      },
      'polygon': {
        'nb_sides': 0x5
      },
      'image': {
        'src': "img/github.svg",
        'width': 0x64,
        'height': 0x64
      }
    },
    'opacity': {
      'value': 0.75,
      'random': true,
      'anim': {
        'enable': false,
        'speed': 0x1,
        'opacity_min': 0.1,
        'sync': false
      }
    },
    'size': {
      'value': 0x5,
      'random': true,
      'anim': {
        'enable': false,
        'speed': 0xa,
        'size_min': 0x3,
        'sync': false
      }
    },
    'line_linked': {
      'enable': false,
      'distance': 0x96,
      'color': "#ffffff",
      'opacity': 0.4,
      'width': 0x1
    },
    'move': {
      'enable': true,
      'speed': 0x6,
      'direction': "none",
      'random': false,
      'straight': false,
      'out_mode': "destroy",
      'attract': {
        'enable': false,
        'rotateX': 0x258,
        'rotateY': 0x4b0
      }
    }
  },
  'interactivity': {
    'detect_on': "canvas",
    'events': {
      'onhover': {
        'enable': false,
        'mode': "repulse"
      },
      'onclick': {
        'enable': true,
        'mode': "push"
      },
      'resize': true
    },
    'modes': {
      'repulse': {
        'distance': 0xc8
      },
      'push': {
        'particles_nb': 0x28
      }
    }
  },
  'retina_detect': true,
  'config_demo': {
    'hide_card': false,
    'background_color': "#b61924",
    'background_image': '',
    'background_position': "50% 50%",
    'background_repeat': "no-repeat",
    'background_size': "cover"
  }
};
function playParticleSound() {
  const _0x519764 = audioFiles[currentIndex];
  const _0x333b6e = new Audio(_0x519764);
  _0x333b6e.play();
  currentIndex++;
  if (currentIndex >= audioFiles.length) {
    currentIndex = 0;
  }
  var _0x531d50 = document.getElementById("particlesClick");
  var _0x16871e = new Date().getTime();
  function _0x120fdc() {
    var _0xda6a0d = new Date().getTime();
    var _0x50a5b7 = _0xda6a0d - _0x16871e;
    var _0x4063bc = 1 - _0x50a5b7 / duration;
    _0x531d50.style.opacity = _0x4063bc;
    if (_0x4063bc <= 0) {
      var _0x320c4d = _0x531d50.querySelector(".particles-js-canvas-el");
      if (_0x320c4d) {
        _0x531d50.removeChild(_0x320c4d);
        particlesJS("particlesClick", particleJSConfig);
      }
    } else {
      requestAnimationFrame(_0x120fdc);
    }
  }
  _0x120fdc();
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
  captures_list: 0.752
  exclusion.robots: 0.035
  exclusion.robots.policy: 0.02
  esindex: 0.014
  cdx.remote: 34.116
  LoadShardBlock: 376.363 (3)
  PetaboxLoader3.datanode: 217.634 (4)
  PetaboxLoader3.resolve: 275.688 (2)
  load_resource: 127.181
*/