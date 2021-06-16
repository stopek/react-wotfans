// import small_deer from "assets/images/small-deer.svg";
import React from "react";
import Particles from "react-particles-js";

export default function Animation() {
  // return (
  //   <Particles
  //     width='100vw' height="100vh"
  //     params={{
  //       "particles": {
  //         "number": {
  //           "value": 400,
  //           "density": {
  //             "enable": false
  //           }
  //         },
  //         "size": {
  //           "value": 5,
  //           "random": true,
  //           "anim": {
  //             "speed": 4,
  //             "size_min": 0.1
  //           }
  //         },
  //         "line_linked": {
  //           "enable": false
  //         },
  //         "move": {
  //           "random": true,
  //           "speed": 1,
  //           "direction": "top",
  //           "out_mode": "out"
  //         }
  //       },
  //       "interactivity": {
  //         "events": {
  //           "onhover": {
  //             "enable": true,
  //             "mode": "bubble"
  //           },
  //           "onclick": {
  //             "enable": true,
  //             "mode": "repulse"
  //           }
  //         },
  //         "modes": {
  //           "bubble": {
  //             "distance": 150,
  //             "duration": 2,
  //             "size": 0,
  //             "opacity": 0
  //           },
  //           "repulse": {
  //             "distance": 300,
  //             "duration": 4
  //           }
  //         }
  //       }
  //     }} />
  // );

  return (
    <Particles
      width='100vw' height="100vh"
      params={{
        "particles": {
          "number": {
            "value": 60,
            "density": {
              "enable": true,
              "value_area": 1500
            }
          },
          "line_linked": {
            "enable": true,
            "opacity": 0.02
          },
          "move": {
            "direction": "right",
            "speed": 0.05
          },
          "size": {
            "value": 1
          },
          "opacity": {
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.05
            }
          }
        },
        "interactivity": {
          "events": {
            "onclick": {
              "enable": true,
              "mode": "push"
            }
          },
          "modes": {
            "push": {
              "particles_nb": 1
            }
          }
        },
        "retina_detect": true
      }}
    />
  );

  // return (
  //   <Particles
  //     params={{
  //       "fps_limit": 60,
  //       "particles": {
  //         "collisions": {
  //           "enable": false
  //         },
  //         "number": {
  //           "value": 400,
  //           "density": {
  //             "enable": false
  //           }
  //         },
  //         "line_linked": {
  //           "enable": true,
  //           "distance": 30,
  //           "opacity": 0.8
  //         },
  //         "move": {
  //           "speed": 1
  //         },
  //         "opacity": {
  //           "anim": {
  //             "enable": true,
  //             "opacity_min": 0.05,
  //             "speed": 5,
  //             "sync": false
  //           },
  //           "value": 0.4
  //         }
  //       },
  //       "polygon": {
  //         "enable": true,
  //         "scale": 1,
  //         "type": "inline",
  //         "move": {
  //           "radius": 10
  //         },
  //         "url": small_deer,
  //         "inline": {
  //           "arrangement": "equidistant"
  //         },
  //         "draw": {
  //           "enable": true,
  //           "stroke": {
  //             "color": "rgba(255, 255, 255, 1)"
  //           }
  //         }
  //       },
  //       "retina_detect": false,
  //       "interactivity": {
  //         "events": {
  //           "onhover": {
  //             "enable": true,
  //             "mode": "bubble"
  //           }
  //         },
  //         "modes": {
  //           "bubble": {
  //             "size": 16,
  //             "distance": 40
  //           }
  //         }
  //       }
  //     }}
  //
  //     style={{
  //       height: '100%',
  //     }}
  //   />
  // )
}