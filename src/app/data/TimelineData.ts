interface TimelineData {
  week: string;
  topics: string;
  location: string;
  date: string;
}

export const NextUpData = {
  title: "Build Sessions",
  time: "Weeks 5-9 Tuesday & Thursday 6-8 PM",
  location: "James N. Kirby Makerspace Room 116 Willis Annexe building (J18)",
  image: "",
};

export const TimelineData: TimelineData[] = [
  {
    week: "1",
    topics: "Introduction and Kit Handouts",
    location: "Design Next Lvl 5 Ainsworth",
    date: "Tuesday & Thursday 6-8 PM",
  },
  {
    week: "2",
    topics: "Arduino Basics",
    location: "Design Next Lvl 5 Ainsworth",
    date: "Tuesday & Thursday 6-8 PM",
  },
  {
    week: "3",
    topics: "3D | Lasercutting | 3D Printing",
    location: "Design Next Lvl 5 Ainsworth",
    date: "Tuesday & Thursday 6-8 PM",
  },
  {
    week: "4",
    topics: "Arduino Motor Control | Soldering / Wiring",
    location: "Elec Makerspace",
    date: "Tuesday & Thursday 6-8 PM",
  },
  {
    week: "5-9",
    topics: "Build Sessions",
    location: "Kirby Makerspace",
    date: "Tuesday & Thursday 6-8 PM",
  },
  {
    week: "9",
    topics: "Knockouts",
    location: "Design Next Lvl 5 Ainsworth",
    date: "Thursday",
  },
  { week: "9", topics: "Finals", location: "IO Myers", date: "Friday 5-8 PM" },
];
