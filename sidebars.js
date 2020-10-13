module.exports = {
  someSidebar: {
    "Wiki Playverse": ["welcome"],
    "Introducing Virtual Roleplay": [
      "pengenalan",
      "rules-vrp"
    ],
    "Panduan dan Tutorial": [
      "cara-bermain-samp",
      "cara-daftar-akun",
      "key-and-command",
      "berinteraksi-dengan-npc",
    ],
    "Pekerjaan": [
      "job",
      {
        type: 'category',
        label: 'Tanpa Modal',
        collapsed: false,
        items: [
          "sweeper",
          "pizzadelivery",
          "trashmaster",
          "lumberjack",
        ],
      },
      {
        type: 'category',
        label: 'Menggunakan Modal',
        collapsed: false,
        items: [
          "fishing",
          "mining",
          "berkebun"  
        ],
      },
    ],
    "Item dan Material": [
      "item"
    ]
  },
};
