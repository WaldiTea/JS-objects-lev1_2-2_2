// -----lev1_2-----
console.log('%c-----lev1_2-----', 'color: lightgreen');
let person = {
  name: 'Maximilian',
  alter: '25',

  sagNameAlter: function() {
    /* alert(person.name + person.alter); */
    console.log('Name der Person:', person.name, 'Alter der Person:', person.alter);
  }
}

person.sagNameAlter();


// -----lev1_4-----
console.log('%c-----lev1_4-----', 'color: lightgreen');
let unsereHaustiere = [
  {
	tiertyp: "Katze",

	names: [
    "Gipsy",
    "Nala",
    "Dinky"
	]
  },
  {
	tiertyp: "Hunde",
	names: [
    "Knöpfchen",
    "Pinselchen",
    "Droopy"
	]
  }
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[0].names);
console.log(unsereHaustiere[1].names);

changeName = (newName) => {
  unsereHaustiere[1].names = newName;
}

changeName(['Balu', 'Snoopy']);
console.log(unsereHaustiere[1].names);


// -----lev1_5-----
console.log('%c-----lev1_5-----', 'color: lightgreen');
let unserLager = {
  schreibtisch: {
	schublade: "Hefter"
  },
  schrank: {
	"Obere Schublade": {
    Ordner1: "Dokumente",
    Ordner2: "Geheimnisse"
	},
	"Untere Schublade": "Cola"
  }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);


// -----lev1_6-----
console.log('%c-----lev1_6-----', 'color: lightgreen');
let myMusic = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true
  },
  {
    artist: "Queen",
    title: "Bohemian Rhapsody",
    release_year: 1975,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true
  }
];

console.log(myMusic);
console.log(myMusic[0].artist);
console.log(myMusic[1].medium[3]);
console.log(myMusic[1].gold);
console.log(myMusic[2].release_year);
console.log(myMusic[3].release_year);
console.log(myMusic[3].medium[2]);
console.log(myMusic[3].title.substring(17, 21));
console.log(myMusic[2].title.substring(13));
console.log(myMusic[1].artist.substring(5));


// -----lev1_7-----
console.log('%c-----lev1_7-----', 'color: lightgreen');
let myMusic2 = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true
  }
];

myMusic2.forEach(select => {
  console.log(select.artist);
  console.log(select.title);
  console.log(select.medium);

  if(select.release_year > 1975) {
    console.log(select.release_year);
  }
});


// -----lev1_8-----
console.log('%c-----lev1_8-----', 'color: lightgreen');
let studentData = [
  {
	name: "Alex",
	age: 23,
	coop: false,
	address: {
    street: "Don Valley Business Park",
    city: "Toronto",
    postalCode: "ONM3C3E5"
	},
	emails: ["alex69@gmail.com", "alex123@yahoo.com"]
  },
  {
	name: "Sandra",
	age: 22,
	coop: true,
	address: {
    street: "34 Lawrence Ave",
    city: "Toronto",
    postalCode: "ONM3C0E5"
	},
	emails: ["sandra@gmail.com", "sandra@yahoo.com"]
  }
];

studentDataMapped = studentData.map(select => {
  console.log(select.name);
  console.log(select.coop);
  console.log(select.address.city);
  console.log(select.emails);
});


// -----lev2_2-----
console.log('%c-----lev2_2-----', 'color: lightgreen');
const singers = [
	{ name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
	{ name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
	{ name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B"},
	{ name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock"},
	{ name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica"},
	{ name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock"},
	{ name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop"},
	{ name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock"},
  ];

  singers.sort((a, b) => {
    if(a.name < b.name) {
      return -1;
    } else if(a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });

  console.log(singers);