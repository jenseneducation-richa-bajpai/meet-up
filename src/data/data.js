import design from "../assets/design.png";
import biking from "../assets/biking.jpg";
import stress from "../assets/stress.jpg";
import aws from "../assets/aws.jpg";
import svenska from "../assets/svenska.png";
import photo from "../assets/photo.jpg";
import game from "../assets/game.jpg";
import art from "../assets/art.jpg";
import meditation from "../assets/meditation.jpg";
import vuex from "../assets/vuex.png";

const events = [
  {
    id: 1,
    name: "October Design meet up",
    date: "Thu Oct 1",
    time: "6:00 PM",
    image: design,
    location: "Surrbrusgatan, Stockholm",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
  },
  {
    id: 2,
    name: "Biking Hiking",
    date: "Sat Oct 10",
    time: "11:00 AM",
    image: biking,
    location: "Ursvik, Sundbyberg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
  },
  {
    id: 3,
    name: "Stress Management",
    date: "Sun Oct 11",
    time: "5:00 PM",
    image: stress,
    location: "Helenelund, Sollentuna",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
  },
  {
    id: 4,
    name: "AWS meetup",
    date: "Wed Oct 8",
    time: "5:00 PM",
    image: aws,
    location: "Rotebro, Sollentuna",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
  },
  {
    id: 5,
    name: "Speech Cafe",
    date: "Thu Oct 15",
    time: "5:00 PM",
    image: svenska,
    location: "Nacka, Stockholm ",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
  },
  {
    id: 6,
    name: "Click-o-click",
    date: "Sat Oct 3",
    time: "6:00 PM",
    image: photo,
    location: "Gamlastan, Stockholm",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
  },
  {
    id: 7,
    name: "Board Games",
    date: "Sat Oct 17",
    time: "3:00 PM",
    image: game,
    location: "Slussen, Stockholm",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
  },
  {
    id: 8,
    name: "Indo Art Forms",
    date: "Sun Oct 18",
    time: "4:00 PM",
    image: art,
    location: "Vasagatan, Stockholm",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
  },
];

function fetchData() {
  const LS_KEY = "viewlist-events";
  let fromLS = localStorage.getItem(LS_KEY);

  if (!fromLS) {
    localStorage.setItem(LS_KEY, JSON.stringify(events));
  }
  return JSON.parse(fromLS);
}
export { fetchData };

function fetchAttendList() {
  const LS_KEY = "attendList";
  let fromLs = localStorage.getItem(LS_KEY);
  if (fromLs) {
    return JSON.parse(fromLs);
  }
}
export { fetchAttendList };

const attendedEvents = [
  {
    id: 9,
    name: "VueX + TDD",
    date: "Tues Sep 22",
    time: "5:00 PM",
    image: vuex,
    location: "Slussen, Stockholm",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
  },
  {
    id: 10,
    name: "Meditation-Peace of Mind",
    date: "Sun Sep 20",
    time: "4:00 PM",
    image: meditation,
    location: "Vasastan, Stockholm",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat quam fringilla risus bibendum, in fringilla elit aliquam. Duis in massa eget odio ornare maximus.",
  },
];

function fetchAttendedData() {
  const LS_KEY = "viewlist-attendedEvents";
  let fromLS = localStorage.getItem(LS_KEY);

  if (!fromLS) {
    localStorage.setItem(LS_KEY, JSON.stringify(attendedEvents));
  }
  return JSON.parse(fromLS);
}
export { fetchAttendedData };

function fetchReview() {
  const LS_KEY = "review_list";
  let fromLs = localStorage.getItem(LS_KEY);
  if (fromLs) {
    return JSON.parse(fromLs);
  }
}

export { fetchReview };
