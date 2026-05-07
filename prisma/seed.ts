import prisma from "@/lib/prisma";

const colleges = [
  {
    name: "Indian Institute of Technology Bombay",
    slug: "iit-bombay",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "IIT Bombay is a public technical and research university located in Powai in Mumbai, Maharashtra, India.",
    address: "Main Gate Rd, IIT Area, Powai",
    city: "Mumbai",
    state: "Maharashtra",
    fees: 200000,
    ranking: 3,
    rating: 4.8,
    area: 550,
    establishYear: 1958,
    totalFaculty: 1000,
    totalStudents: 10000,
    NIRFRanking: 3,
    IndiaTodayRanking: 1,
    courseName: "B.Tech in Computer Science and Engineering",
    courseSlug: "btech-cse-iitb",
    courseType: "UNDERGRADUATE"
  },
  {
    name: "Indian Institute of Technology Delhi",
    slug: "iit-delhi",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Indian Institute of Technology Delhi is a public technical and research university located in Hauz Khas in Delhi, India.",
    address: "Hauz Khas",
    city: "New Delhi",
    state: "Delhi",
    fees: 220000,
    ranking: 2,
    rating: 4.7,
    area: 320,
    establishYear: 1961,
    totalFaculty: 800,
    totalStudents: 9000,
    NIRFRanking: 2,
    IndiaTodayRanking: 2,
    courseName: "B.Tech in Computer Science and Engineering",
    courseSlug: "btech-cse-iitd",
    courseType: "UNDERGRADUATE"
  },
  {
    name: "Indian Institute of Technology Madras",
    slug: "iit-madras",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Indian Institute of Technology Madras is a public technical and research university located in Chennai, Tamil Nadu.",
    address: "IIT P.O., Chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    fees: 210000,
    ranking: 1,
    rating: 4.9,
    area: 617,
    establishYear: 1959,
    totalFaculty: 950,
    totalStudents: 9500,
    NIRFRanking: 1,
    IndiaTodayRanking: 3,
    courseName: "B.Tech in Mechanical Engineering",
    courseSlug: "btech-mech-iitm",
    courseType: "UNDERGRADUATE"
  },
  {
    name: "Birla Institute of Technology and Science, Pilani",
    slug: "bits-pilani",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "BITS Pilani is a private deemed university in Pilani, Rajasthan, India.",
    address: "Vidya Vihar",
    city: "Pilani",
    state: "Rajasthan",
    fees: 450000,
    ranking: 15,
    rating: 4.6,
    area: 328,
    establishYear: 1964,
    totalFaculty: 700,
    totalStudents: 8000,
    NIRFRanking: 25,
    IndiaTodayRanking: 5,
    courseName: "B.E. in Computer Science",
    courseSlug: "be-cs-bits",
    courseType: "UNDERGRADUATE"
  },
  {
    name: "Delhi Technological University",
    slug: "dtu",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Delhi Technological University (DTU), formerly Delhi College of Engineering (DCE), is a state university in New Delhi.",
    address: "Shahbad Daulatpur, Main Bawana Road",
    city: "New Delhi",
    state: "Delhi",
    fees: 160000,
    ranking: 35,
    rating: 4.5,
    area: 164,
    establishYear: 1941,
    totalFaculty: 600,
    totalStudents: 12000,
    NIRFRanking: 29,
    IndiaTodayRanking: 9,
    courseName: "B.Tech in Information Technology",
    courseSlug: "btech-it-dtu",
    courseType: "UNDERGRADUATE"
  },
  {
    name: "National Institute of Technology Trichy",
    slug: "nit-trichy",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "National Institute of Technology Tiruchirappalli is a public technical and research university near the city of Tiruchirappalli.",
    address: "Tanjore Main Road, National Highway 67",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    fees: 150000,
    ranking: 8,
    rating: 4.6,
    area: 800,
    establishYear: 1964,
    totalFaculty: 500,
    totalStudents: 6000,
    NIRFRanking: 9,
    IndiaTodayRanking: 8,
    courseName: "B.Tech in Electronics and Communication Engineering",
    courseSlug: "btech-ece-nitt",
    courseType: "UNDERGRADUATE"
  },
  {
    name: "Vellore Institute of Technology",
    slug: "vit-vellore",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Vellore Institute of Technology is a private deemed university located in Vellore, Tamil Nadu, India.",
    address: "VIT, Vellore Campus",
    city: "Vellore",
    state: "Tamil Nadu",
    fees: 300000,
    ranking: 18,
    rating: 4.4,
    area: 372,
    establishYear: 1984,
    totalFaculty: 1500,
    totalStudents: 35000,
    NIRFRanking: 11,
    IndiaTodayRanking: 15,
    courseName: "B.Tech in Computer Science and Engineering",
    courseSlug: "btech-cse-vit",
    courseType: "UNDERGRADUATE"
  },
  {
    name: "Indian Institute of Science Bangalore",
    slug: "iisc-bangalore",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The Indian Institute of Science is a public, deemed, research university for higher education and research in science, engineering, design, and management.",
    address: "CV Raman Rd",
    city: "Bengaluru",
    state: "Karnataka",
    fees: 100000,
    ranking: 2,
    rating: 4.9,
    area: 400,
    establishYear: 1909,
    totalFaculty: 500,
    totalStudents: 4000,
    NIRFRanking: 1,
    IndiaTodayRanking: 1,
    courseName: "Bachelor of Science (Research)",
    courseSlug: "bs-research-iisc",
    courseType: "UNDERGRADUATE"
  },
  {
    name: "Jadavpur University",
    slug: "jadavpur-university",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Jadavpur University is a public state university located in Kolkata, West Bengal, India.",
    address: "188, Raja S.C. Mallick Rd",
    city: "Kolkata",
    state: "West Bengal",
    fees: 10000,
    ranking: 12,
    rating: 4.5,
    area: 58,
    establishYear: 1955,
    totalFaculty: 700,
    totalStudents: 11000,
    NIRFRanking: 10,
    IndiaTodayRanking: 12,
    courseName: "B.E. in Computer Science and Engineering",
    courseSlug: "be-cse-ju",
    courseType: "UNDERGRADUATE"
  },
  {
    name: "SRM Institute of Science and Technology",
    slug: "srm-ist",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "SRM Institute of Science and Technology, formerly SRM University, is a private deemed university located in Kattankulathur.",
    address: "SRM Nagar, Kattankulathur",
    city: "Chennai",
    state: "Tamil Nadu",
    fees: 350000,
    ranking: 20,
    rating: 4.2,
    area: 250,
    establishYear: 1985,
    totalFaculty: 3200,
    totalStudents: 50000,
    NIRFRanking: 18,
    IndiaTodayRanking: 20,
    courseName: "B.Tech in Computer Science and Engineering",
    courseSlug: "btech-cse-srm",
    courseType: "UNDERGRADUATE"
  }
];

const reviewTemplates = [
  "Great faculty and amazing infrastructure.",
  "The placement cell is very active and helpful.",
  "Campus life is vibrant but academics are tough.",
  "The courses are well structured and industry-relevant.",
  "Hostel facilities could be better, but the labs are top-notch.",
  "Excellent research opportunities and funding.",
  "A lot of extracurricular activities to participate in.",
  "The alumni network is very strong and supportive.",
  "Libraries are well-stocked and open 24/7.",
  "Good sports facilities and regular events.",
  "The peer group is extremely competitive and inspiring.",
  "Faculty members are very approachable and helpful."
];

const mockNames = [
  "Rahul Sharma", "Priya Singh", "Amit Kumar", "Neha Gupta",
  "Rohan Verma", "Anjali Desai", "Vikram Patel", "Sneha Reddy",
  "Aditya Joshi", "Kavya Iyer", "Karan Malhotra", "Riya Sen"
];

function getRandomReviews() {
  const count = Math.floor(Math.random() * 3) + 2; // Random number between 2 and 4
  const shuffledTexts = [...reviewTemplates].sort(() => 0.5 - Math.random());
  const shuffledNames = [...mockNames].sort(() => 0.5 - Math.random());
  
  return shuffledTexts.slice(0, count).map((text, i) => {
    // Random rating between 3.5 and 5.0
    const rating = Math.round((Math.random() * 1.5 + 3.5) * 10) / 10;
    
    // Random date in the past 2 years
    const daysAgo = Math.floor(Math.random() * 730);
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);

    return {
      reviewText: text,
      name: shuffledNames[i],
      rating: rating,
      date: date
    };
  });
}

async function main() {
  console.log('Start seeding...');

  // Clear existing reviews to prevent duplicates if seeding multiple times
  await prisma.review.deleteMany({});
  console.log('Cleared existing reviews.');

  for (const c of colleges) {
    const college = await prisma.college.upsert({
      where: { slug: c.slug },
      update: c,
      create: c,
    });

    const mockReviews = getRandomReviews();
    for (const review of mockReviews) {
      await prisma.review.create({
        data: {
          collegeId: college.id,
          reviewText: review.reviewText,
          name: review.name,
          rating: review.rating,
          date: review.date
        }
      });
    }

    console.log(`Created college: ${college.name} with ${mockReviews.length} reviews`);
  }
  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
