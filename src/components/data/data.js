export const courseModel = [
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to React Native",
    like: 50,
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'InProgress'
    thumbnail: "/images/1.jpg", //Link to the course thumbnail
    duration: "4 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
        status: "50",
        thumbnail: "/images/profile3.png",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
        status: "30",
        thumbnail: "/images/profile2.png",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 2, // Unique identifier for the course
    name: "Introduction to Java",
    like: 60,
    instructor: "John roe", // Name of the course instructor
    description:
      "Learn the basics of Java development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'InProgress'
    thumbnail: "/images/2.jpg", //Link to the course thumbnail
    duration: "4 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic Java knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Java",
        content: "Overview of Java, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using Java components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 103,
        name: "Alicy Johnson",
        email: "alicey@example.com",
        status: "70",
        thumbnail: "/images/profile1.png",
      },

      // Additional enrolled students...
    ],
  },
  {
    id: 3, // Unique identifier for the course
    name: "Introduction to HTML5",
    like: 20,
    instructor: "ron weasly", // Name of the course instructor
    description:
      "Learn the basics of HTML5 development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'InProgress'
    thumbnail: "/images/3.jpg", //Link to the course thumbnail
    duration: "4 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["BasiHTML5 knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to HTML5",
        content: "Overview of HTML5, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using HTML5 components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      // Additional enrolled students...
    ],
  },
];
export default courseModel;
