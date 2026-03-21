export const projectCategories = [
  {
    id: "long-term-games",
    title: "Games",
    subtitle: "Larger projects I’ve helped develop over a longer time span."
  },
  {
    id: "game-jams",
    title: "Hackathons",
    subtitle: "Short, focused projects built under tight time constraints."
  },
  {
    id: "misc",
    title: "Technical Projects",
    subtitle: "Miscellaneous projects in graphics programming, simulation, astrophysics and machine learning."
  }
];

export const projects = [
  {
    id: "balloons",
    title: "Balloons of Paradise",
    category: "long-term-games",
    summary:
      "Navigate the wind in a balloon. Explore the sky and the land as a penguin. Ongoing project at Space Lion Studios.",
    image: "res/img/balloons.png",
    imageAlt: "Screenshot from Balloons of Paradise",
    tags: ["Unity", "C#"],
    links: [
      { 
        label: "Studio", 
        url: "https://www.spacelionstudios.ie/",
        style: "btn-outline-info",
        icon: "external"
      }
    ],   
    longDescription:
        "",
    highlights: [
        "Implemented wind fluid dynamics and balloon navigation."
    ],
  },
  {
    id: "axyz",
    title: "Axyz",
    category: "long-term-games",
    status: "Released",
    year: "2025",
    summary: 
        "Roll, flip gravity and bend perspective in Axyz. Use your environmental and spatial awareness to beat over 100 levels and soak in the vaporwave in this tribute to 90s puzzle games. Released on Steam.",
    image: "res/img/axyz.jpg",
    imageAlt: "Cover image for Axyz",
    tags: ["Commercial Release", "Unity", "C#"],
    links: [
      { 
        label: "Steam", 
        url: "https://store.steampowered.com/app/2850490/Axyz/",
        style: "btn-outline-info",
        icon: "steam"
      },
      { 
        label: "Studio", 
        url: "https://www.spacelionstudios.ie/",
        style: "btn-outline-info",
        icon: "external"
      }
    ],   
    longDescription:
        "Axyz is a 3D puzzle-platformer and the first game developed by Space Lion Studios, released on Steam in March 2025. The game is built around perspective shifts, gravity switching, and spatial reasoning, challenging players to navigate more than 100 levels across 8 worlds. On this project, I contributed to gameplay programming, particularly graph-based player navigation across the block surfaces.",
    highlights: [
        "",
    ],
  },
  {
    id: "timeflick",
    title: "Timeflick",
    category: "game-jams",
    summary:
      "A mobile game where you control a trio of hockey disk characters with unique powers. Defeat the boss while taking as little damage as possible.",
    image: "res/img/timeflick.jpeg",
    imageAlt: "Screenshot from Timeflick",
    tags: ["Unity", "C#", "Mobile", "Game jam"],
    links: [
      {
        label: "Video Link",
        url: "res/videos/timeflick.mp4",
        style: "btn-outline-info",
        icon: "external"
      }
    ], 
    longDescription:
        "Developed during the game jam at Wildlife Studios.",
    highlights: [
        "Co-developer in gameplay, UI, and metagame features.",
    ],
  },
  {
    id: "protect-my-dungeon",
    title: "Protect My Dungeon",
    category: "game-jams",
    summary:
      "A mobile tower defense game where you play as a lich. Protect your dungeon from greedy adventurers who want to steal your treasure.",
    image: "res/img/protect-my-dungeon.png",
    imageAlt: "Screenshot from Protect My Dungeon",
    tags: ["Unity", "C#", "Mobile", "Game jam"],
    links: [
      {
        label: "Video Link",
        url: "res/videos/protect-my-dungeon.mp4",
        style: "btn-outline-info",
        icon: "external"
      }
    ],  
    longDescription:
        "",
    highlights: [
        "Co-developer in design, gameplay, main menus and minigame systems."
    ],
  },
  
  {
    id: "exoplanet-atmospheres",
    title: "Exoplanet Atmosphere Ray Tracer",
    category: "misc",
    year: "2022",
    summary: 
        "An interactive Python application for simulating how starlight appears through a planetary atmosphere using Monte Carlo radiative transfer and ray tracing.",
    tags: ["Python", "Monte Carlo", "Ray tracing", "App"],
    links: [
      {         
        label: "GitHub", 
        url: "https://github.com/Caykroyd/exoplanet-atmospheres",
        style: "btn-outline-info",
        icon: "github"
      }
    ],
    image: "res/img/exoplanets.png",
    imageAlt: "AI generated illustration",
    longDescription:
        "This project models an observer standing on the surface of a planet and looks at how incoming starlight is scattered by the atmosphere before reaching the camera. The simulation estimates the atmospheric source function with a Monte Carlo photon-packet method, then performs ray tracing to render the observed sky and compute spectra. I have implemented an interactive desktop UI built with PyQt5.",
    highlights: [],
  },
  {
    id: "spectral-fit-net",
    title: "Neural Network for Galaxy Spectroscopy",
    category: "misc",
    year: "2024",
    summary: 
        "A machine learning personal project with the aim of reconstructing multi-Gaussian spectroscopic emission lines from galaxy mergers.",
    tags: ["PyTorch", "Neural networks", "Astrophysics"],
    longDescription:
        "Merging galaxies often produce light spectra whose peaks cannot be well described as isolated Gaussians. That is because multiple signals often contribute to the spectrum at once, due to galaxy overlap, turbulence, or inflow/outflow of material. In this project, each spectral feature is modeled as a combination of multiple Gaussians, and a machine learning model is trained to recover the underlying galaxy motion which best reconstructs the observed signal.",
    highlights: [],
    links: [
      { 
        label: "GitHub", 
        url: "https://github.com/Caykroyd/spectral_fit_net",
        style: "btn-outline-info",
        icon: "github"
    }
    ],
    image: "res/img/neural-network.png",
    imageAlt: "AI generated illustration",
  },
  {
    id: "procedural-animation",
    title: "Procedural Animation Toy Game Engine",
    category: "misc",
    year: "2025",
    summary: 
        "A small toy Python game engine in 2D built as a test environment for procedural animation algorithms. Implemented soft-body mechanics and snake-like movement.",
    tags: ["Python", "Pygame", "Engine", "Procedural animation"],
    longDescription:
        "A python project combining a small custom 2D game engine and an experimental environment for procedural movement. Built on top of Pygame, engine features include object management, camera control, collision handling and custom UI. I have implemented a simple demo where the player explores a world, eats food to manage hunger. You can play either as Snek the (physics-driven) snake or a pink ameba made with softbody physics!",
    highlights: [],
    links: [
      { 
        label: "GitHub", 
        url: "https://github.com/Caykroyd/procedural-animation",
        style: "btn-outline-info",
        icon: "github"
      }
    ],
    image: "res/img/snek-amoeba.png",
    imageAlt: "AI generated illustration",
  }
];