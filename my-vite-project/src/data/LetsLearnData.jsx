// coursesData.js
const courses = [
  {
    id: 1,
    courseTitle: "Learn React",
    courseTeacher: "Enes Şen",
    coursePoint: "4.5",
    coursePrice: "450 ₺",
    courseImage:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D",
    courseDescription:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded. However, fetching data is only the beginning of what happens on a web page, which is why complex applications usually require more tools and libraries. React can also render on the server using Node and power mobile apps using React Native."
  },
  {
    id: 2,
    courseTitle: "Master JavaScript",
    courseTeacher: "Ali Veli",
    coursePoint: "4.7",
    coursePrice: "500 ₺",
    courseImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    courseTitle: "HTML & CSS for Beginners",
    courseTeacher: "Ayşe Yılmaz",
    coursePoint: "4.2",
    coursePrice: "300 ₺",
    courseImage:
      "https://images.unsplash.com/photo-1662027044921-6febc57a0c53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNxbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    courseTitle: "Node.js and Backend Development",
    courseTeacher: "Mehmet Can",
    coursePoint: "4.8",
    coursePrice: "600 ₺",
    courseImage:
      "https://images.unsplash.com/photo-1528158222524-d4d912d2e208?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB5dGhvbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 5,
    courseTitle: "Advanced React Native",
    courseTeacher: "Elif Öztürk",
    coursePoint: "4.9",
    coursePrice: "750 ₺",
    courseImage:
      "https://images.unsplash.com/photo-1629118938047-0f28bbe5af7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0b2NhZHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 6,
    courseTitle: "Python Programming for Beginners",
    courseTeacher: "Serkan Kara",
    coursePoint: "4.6",
    coursePrice: "400 ₺",
    courseImage:
      "https://images.unsplash.com/photo-1631376604944-ddb97deb9839?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxjfGVufDB8fDB8fHww"
  },
  {
    id: 7,
    courseTitle: "Full Stack Development with MERN",
    courseTeacher: "Ece Demir",
    coursePoint: "4.3",
    coursePrice: "550 ₺",
    courseImage:
      "https://media.istockphoto.com/id/1628291798/photo/artificial-intelligence-and-machine-learning-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=Zn6f3s5X_Bdx-IruT7tA58CfMj569xpp1toJ-aVZHZM="
  },
  {
    id: 8,
    courseTitle: "UI/UX Design Fundamentals",
    courseTeacher: "Zeynep Güngör",
    coursePoint: "4.5",
    coursePrice: "350 ₺",
    courseImage:
      "https://media.istockphoto.com/id/1479759169/photo/data-science-and-big-data-technology-data-scientist-computing-analysing-and-visualizing.webp?a=1&b=1&s=612x612&w=0&k=20&c=AMwuPLf0j_GZewydKMfh3_Olszwzk0IQlkMA8laRj2g="
  },
  {
    id: 9,
    courseTitle: "Data Science with Python",
    courseTeacher: "Ömer Çelik",
    coursePoint: "4.7",
    coursePrice: "650 ₺",
    courseImage:
      "https://media.istockphoto.com/id/2149530993/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=nyP4c-s5cSZy1nv1K0xn1ynC-Xuc1sY4Y29ZQqcrztA="
  },
  {
    id: 10,
    courseTitle: "Digital Marketing Masterclass",
    courseTeacher: "Hüseyin Arslan",
    coursePoint: "4.4",
    coursePrice: "450 ₺",
    courseImage:
      "https://media.istockphoto.com/id/1979289147/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=IIZaVsQl6mMcOPgyPrVm8ZlCSBwKdwWju4TTnM7BM4Q="
  },
  {
    id: 11,
    courseTitle: "Machine Learning Fundamentals",
    courseTeacher: "Burcu Yıldız",
    coursePoint: "4.8",
    coursePrice: "700 ₺",
    courseImage:
      "https://media.istockphoto.com/id/1634086519/photo/human-and-robot-hands-forming-a-heart-shape-together-ai-and-human-collaboration-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=2QHXrDUVaJZZJH2Cy-Xr5Ygv-lKIGWbJEdjyQ3N_eoM="
  },
  {
    id: 12,
    courseTitle: "Electronics and Arduino Programming",
    courseTeacher: "Canan Aydın",
    coursePoint: "4.6",
    coursePrice: "550 ₺",
    courseImage:
      "https://plus.unsplash.com/premium_vector-1719568210964-c96c9bc07ff8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3xlbnwwfHwwfHx8MA%3D%3D"
  }
];

export default courses;
