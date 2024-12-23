import {
    profile,
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    user9,
  } from "../../assets/images";
  
  export const userData = [
    {
      id: 1,
      name: "Peggie",
      age: 28,
      hobbies: ["Concerts", "Festivals", "Photography"],
      bio: "Hey there! My name is Peggie. I'm a passionate fashion photographer with a love for capturing the beauty in everyday life. When I'm not behind the lens, you'll find me immersing myself in the energy of live music at concerts and festivals. Exploring new cultures and cuisines is my idea of a perfect adventure. Let's share stories over a cup of coffee and see where our shared passions take us!",
      distance: "3 miles away",
      imgPath: user1,
    },
    {
      id: 2,
      name: "Diana",
      age: 30,
      hobbies: ["Hiking", "Cooking", "Music"],
      bio: "Hi there! I'm Diana, a nature lover who finds joy in the kitchen and the magic of music. Let's go on a hike and then cook up a storm together. Seeking someone to share adventures and good food with.",
      distance: "10 miles away",
      imgPath: user2,
    },
    {
      id: 3,
      name: "Sophie",
      age: 26,
      hobbies: ["Painting", "Yoga", "Traveling"],
      bio: "Greetings! I'm Sophie, a free-spirited artist who finds inspiration in the colors of life. Yoga keeps me grounded, and painting allows my imagination to soar. Let's embark on a journey of self-discovery together, exploring the world and creating masterpieces along the way.",
      distance: "2 miles away",
      imgPath: user3,
    },
    {
      id: 4,
      name: "Betty",
      age: 32,
      hobbies: ["Soccer", "Cooking", "Movies"],
      bio: "Hi there! I'm Betty, a soccer lover who finds joy in the kitchen and the magic of movies. Let's kick a ball around and then cook up a storm together. Seeking someone to share adventures and good food with.",
      distance: "5 miles away",
      imgPath: user4,
    },
    {
      id: 5,
      name: "Lily",
      age: 29,
      hobbies: ["Dancing", "Reading", "Hiking"],
      bio: "Hola! I'm Lily, a dance lover who finds joy in the rhythm of life. Books are my escape, and hiking fuels my spirit. Let's dance under the stars and get lost in stories over a cup of coffee. Eager to meet someone to share life's dance with.",
      distance: "7 miles away",
      imgPath: user5,
    },
    {
      id: 6,
      name: "Chiara",
      age: 28,
      hobbies: ["Singing", "Writing", "Sailing"],
      bio: "Ciao! I'm Chiara, a melody-maker who finds solace in writing and the serenity of sailing. Let's harmonize our voices and create music together. A poetic soul searching for someone to sail through life's highs and lows.",
      distance: "4 miles away",
      imgPath: user6,
    },
    {
      id: 7,
      name: "Emma",
      age: 27,
      hobbies: ["Singing", "Writing", "Sailing"],
      bio: "Hi there! I'm Emma, a melody-maker who finds solace in writing and the serenity of sailing. Let's harmonize our voices and create music together. A poetic soul searching for someone to sail through life's highs and lows.",
      distance: "4 miles away",
      imgPath: user7,
    },
    {
      id: 8,
      name: "Sarah",
      age: 29,
      hobbies: ["Surfing", "Gardening", "Painting"],
      bio: "Hi there! I'm Sarah, a surfer who finds joy in the garden and the magic of painting. Let's ride the waves and then paint up a storm together. Seeking someone to share adventures and good food with.",
      distance: "8 miles away",
      imgPath: user8,
    },
    {
      id: 9,
      name: "Olivia",
      age: 28,
      hobbies: ["Yoga", "Hiking", "Photography"],
      bio: "Hello, I'm Olivia, a yoga enthusiast who finds peace in the serenity of nature and expression through photography. Let's go on a hike and then strike a pose together. Looking for someone to share adventures and good food with.",
      distance: "9 miles away",
      imgPath: user9,
    },
  ];
  
  export const chatData = [
    {
      id: 1,
      name: "Xam",
      imgUrl: user1,
      age: 1,
      isOnline: true,
      lastMessage:
        "Gau Gau Gau Gau Gau",
      date: "2023-10-15",
      timeSent: "5 mins",
      chat: [
        {
          sender: "me",
          message: "Hi there! How's it going?",
          timestamp: "10:00 AM",
        },
        {
          sender: "Xam",
          message: "Gau Gau",
          timestamp: "10:05 AM",
        },
        {
          sender: "me",
          message: "Have any exciting plans for the weekend? 😊",
          timestamp: "10:10 AM",
        },
        {
          sender: "Xam",
          message: "Gau Gau Gau Gau",
          timestamp: "10:15 AM",
        },
        {
          sender: "me",
          message: "That sounds amazing! I might just tag along. 🥾",
          timestamp: "10:20 AM",
        },
        {
          sender: "Xam",
          message: "Gau Gau",
          timestamp: "10:25 AM",
        },
      ],
    },
    {
      id: 2,
      name: "Kem",
      imgUrl: user2,
      age: 2,
      isOnline: false,
      lastMessage: "Meo Meo Meo",
      date: "2023-10-14",
      timeSent: "10 mins",
      chat: [
        {
          sender: "me",
          message: "Hey Charlie, how have you been?",
          timestamp: "11:00 AM",
        },
        {
          sender: "Kem",
          message: "Meo Meo Meo Meo",
          timestamp: "11:05 AM",
        },
        {
          sender: "me",
          message: "I've been a bit busy, but managing. 😊",
          timestamp: "11:10 AM",
        },
        {
          sender: "Kem",
          message: "Meo Meo",
          timestamp: "11:15 AM",
        },
        {
          sender: "me",
          message: "Definitely! Let's plan something for this weekend. 🎉",
          timestamp: "11:20 AM",
        },
        {
          sender: "Kem",
          message: "Meo Meo Meo Meo Meo",
          timestamp: "11:25 AM",
        },
        {
          sender: "me",
          message: "I'm free on Saturday afternoon. How about you? 🌤️",
          timestamp: "11:30 AM",
        },
        {
          sender: "Kem",
          message: "Meo",
          timestamp: "11:35 AM",
        },
        {
          sender: "me",
          message: "Sounds like a plan! See you then. 👋",
          timestamp: "11:40 AM",
        },
      ],
    },
    {
      id: 3,
      name: "Boo",
      imgUrl: user3,
      age: 3,
      isOnline: true,
      lastMessage: "Meo Meo Meo Meo Meo",
      date: "2023-10-11",
      timeSent: "25 mins",
      chat: [
        {
          sender: "me",
          message: "Hi Oliver, how's your day going?",
          timestamp: "2:00 PM",
        },
        {
          sender: "Boo",
          message: "Meo Meo Meo Meo Meo",
          timestamp: "2:05 PM",
        },
        {
          sender: "me",
          message: "That's wonderful! I'm just getting through some work. 💻",
          timestamp: "2:10 PM",
        },
        {
          sender: "Boo",
          message: "Meo Meo Meo Meo",
          timestamp: "2:15 PM",
        },
        {
          sender: "me",
          message:
            "Absolutely, breaks are necessary. Planning anything fun for the evening? 🎉",
          timestamp: "2:20 PM",
        },
        {
          sender: "Boo",
          message: "Meo Meo Meo Meo Meo 💪",
          timestamp: "2:25 PM",
        },
        {
          sender: "me",
          message: "That's a great idea! I should join you sometime. 🏋️‍♂️",
          timestamp: "2:30 PM",
        },
        {
          sender: "Boo",
          message: "Meo Meo Meo Meo Meo Meo Meo 🤸‍♂️",
          timestamp: "2:35 PM",
        },
      ],
    },
    {
      id: 4,
      name: "Sophie",
      imgUrl: user9,
      age: 2,
      isOnline: true,
      lastMessage: "Meo Meo Meo Meo Meo Meo Meo",
      date: "2023-10-10",
      timeSent: "30 mins",
      chat: [
        {
          sender: "me",
          message: "Hey Sophie, how's your week been?",
          timestamp: "3:00 PM",
        },
  
        {
          sender: "Sophie",
          message: "Meo Meo Meo Meo Meo Meo Meo",
          timestamp: "3:05 PM",
        },
        {
          sender: "Sophie",
          message: "Meo Meo Meo",
          timestamp: "3:05 PM",
        },
        {
          sender: "me",
          message: "Mine's been quite hectic too, but managing.",
          timestamp: "3:10 PM",
        },
        {
          sender: "Sophie",
          message: "Meo Meo Meo Meo Meo Meo Meo",
          timestamp: "3:15 PM",
        },
        {
          sender: "me",
          message:
            "Not yet, but I'm thinking of checking out that new restaurant downtown. You?",
          timestamp: "3:20 PM",
        },
        {
          sender: "Sophie",
          message:
            "Meo Meo Meo Meo Meo Meo Meo",
          timestamp: "3:25 PM",
        },
      ],
    },
  
    {
      id: 5,
      name: "William",
      imgUrl: user4,
      age: 2,
      isOnline: false,
      lastMessage: "Gau Gau Gau Gau Gau Gau",
      date: "2023-10-09",
      timeSent: "35 mins",
      chat: [
        {
          sender: "me",
          message: "Hi William, how's everything going?",
          timestamp: "4:00 PM",
        },
        {
          sender: "William",
          message: "Gau Gau Gau Gau",
          timestamp: "4:05 PM",
        },
      ],
    },
    {
      id: 6,
      name: "Jack",
      imgUrl: user7,
      age: 3,
      isOnline: true,
      lastMessage: "Meo Meo Meo Meo Meo Meo Meo",   
      date: "2023-10-07",
      timeSent: "45 mins",
      chat: [
        {
          sender: "me",
          message: "Hey Jack, how's your week been?",
          timestamp: "6:00 PM",
        },
        {
          sender: "Jack",
          message: "Meo Meo Meo Meo Meo Meo Meo",
          timestamp: "6:05 PM",
        },
      ],
    },
  ];
  
  export const datesData = [
    {
      id: 1,
      imgUrl: user1,
      name: "Xam",
      lastName: "Xam",
      age: 1,
      city: "Ha Long",
      country: "Viet Nam",
    },
    {
      id: 2,
      imgUrl: user2,
      name: "Kem",
      lastName: "Kem",
      age: 1,
      city: "Ha Long",
      country: "Viet Nam",
    },
    {
      id: 3,
      imgUrl: user3,
      name: "Bo",
      lastName: "Boo",
      age: 1,
      city: "Ha Long",
      country: "Viet Nam",
    },
    {
      id: 4,
      imgUrl: user4,
      name: "Bach",
      lastName: "Tuyet",
      age: 2,
      city: "Ha Long",
      country: "Viet Nam",
    },
    {
      id: 5,
      imgUrl: user5,
      name: "Vy",
      lastName: "Vy",
      age: 2,
      city: "Ha Noi",
      country: "Viet Nam",
    },
    {
      id: 6,
      imgUrl: user6,
      name: "Kem",
      lastName: "Xoi",
      age: 2,
      city: "Ha Noi",
      country: "Viet Nam",
    },
    {
      id: 7,
      imgUrl: user7,
      name: "Kem",
      lastName: "Bo",
      age: 2,
      city: "Ha Long",
      country: "Viet Nam",
    },
    {
      id: 8,
      imgUrl: user8,
      name: "Boo",
      lastName: "Boo",
      age: 1,
      city: "Ha Long",
      country: "Viet Nam",
    },
    {
      id: 9,
      imgUrl: user9,
      name: "Alexander",
      lastName: "Pham",
      age: 2,
      city: "Ha Long",
      country: "Viet Name",
    },
    {
      id: 10,
      imgUrl: user4,
      name: "Bach Nguyet",
      lastName: "Quang",
      age: 2,
      city: "Ha Long",
      country: "Viet Nam",
    },
  ];
  
  export const profileData = [
    {
      name: "Ning Ning",
      age: 22,
      imgUrl: profile,
      hobbies: ["Hiking", "Photography", "Cooking"],
      bio: "Graduated from Harbin Normal University Middle School, a Chinese singer. I am the main dancer, lead vocalist of Aespa.",
    },
  ];