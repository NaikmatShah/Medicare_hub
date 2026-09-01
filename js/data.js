/* ==========================================================================
   MediCare Hub — Mock Data
   In a production build, this would be replaced by calls to a real API.
   ========================================================================== */

const SPECIALTIES = [
  "Cardiology", "Dermatology", "Pediatrics", "Neurology",
  "Orthopedics", "Dentistry", "Psychiatry", "Gynecology",
  "General Physician", "ENT Specialist", "Ophthalmology", "Endocrinology"
];

const LOCATIONS = [
  "Downtown Clinic", "Northside Medical Center", "Riverside Health Plaza",
  "Lakeview Hospital", "Eastgate Wellness Center", "Westfield Clinic"
];

const DOCTORS = [
  {
    id: 1, name: "Dr. Amara Chen", gender: "female", specialty: "Cardiology",
    location: "Downtown Clinic", city: "Downtown",
    types: ["In-person", "Video"], rating: 4.9, reviews: 214, experience: 12,
    fee: 85, photo: "https://randomuser.me/api/portraits/women/68.jpg",
    verified: true, availableToday: true,
    bio: "Dr. Chen specializes in preventive cardiology and heart-rhythm disorders, combining evidence-based treatment with a calm, patient-first approach.",
    education: ["MD, Johns Hopkins University", "Fellowship, Cardiovascular Medicine, Mayo Clinic"],
    languages: ["English", "Mandarin"],
    nextSlot: "Today, 3:30 PM"
  },
  {
    id: 2, name: "Dr. Marcus Bello", gender: "male", specialty: "Dermatology",
    location: "Northside Medical Center", city: "Northside",
    types: ["In-person"], rating: 4.7, reviews: 156, experience: 9,
    fee: 65, photo: "https://randomuser.me/api/portraits/men/32.jpg",
    verified: true, availableToday: false,
    bio: "Dr. Bello treats a full range of skin, hair, and nail conditions, with particular focus on acne management and skin-cancer screening.",
    education: ["MD, University of Michigan", "Residency, Dermatology, NYU Langone"],
    languages: ["English", "Yoruba"],
    nextSlot: "Tomorrow, 10:00 AM"
  },
  {
    id: 3, name: "Dr. Priya Nair", gender: "female", specialty: "Pediatrics",
    location: "Riverside Health Plaza", city: "Riverside",
    types: ["In-person", "Video"], rating: 5.0, reviews: 302, experience: 15,
    fee: 55, photo: "https://randomuser.me/api/portraits/women/44.jpg",
    verified: true, availableToday: true,
    bio: "Dr. Nair has spent over a decade caring for infants, children, and teens, with a gentle style that puts young patients at ease.",
    education: ["MD, University of Toronto", "Residency, Pediatrics, SickKids Hospital"],
    languages: ["English", "Hindi", "Tamil"],
    nextSlot: "Today, 1:15 PM"
  },
  {
    id: 4, name: "Dr. Elena Petrova", gender: "female", specialty: "Neurology",
    location: "Lakeview Hospital", city: "Lakeview",
    types: ["Video"], rating: 4.8, reviews: 98, experience: 18,
    fee: 110, photo: "https://randomuser.me/api/portraits/women/22.jpg",
    verified: true, availableToday: false,
    bio: "Dr. Petrova is a neurologist focused on migraine management, epilepsy, and early diagnosis of neurodegenerative conditions.",
    education: ["MD, PhD, Charité – Universitätsmedizin Berlin", "Fellowship, Neurology, Cleveland Clinic"],
    languages: ["English", "Russian", "German"],
    nextSlot: "Thu, 9:00 AM"
  },
  {
    id: 5, name: "Dr. Samuel Okafor", gender: "male", specialty: "Orthopedics",
    location: "Eastgate Wellness Center", city: "Eastgate",
    types: ["In-person"], rating: 4.6, reviews: 187, experience: 14,
    fee: 95, photo: "https://randomuser.me/api/portraits/men/54.jpg",
    verified: true, availableToday: true,
    bio: "Dr. Okafor treats sports injuries, joint pain, and post-surgical rehabilitation with a focus on minimally invasive techniques.",
    education: ["MD, University of Lagos", "Fellowship, Orthopedic Surgery, Hospital for Special Surgery"],
    languages: ["English", "Igbo"],
    nextSlot: "Today, 4:45 PM"
  },
  {
    id: 6, name: "Dr. Grace Lindqvist", gender: "female", specialty: "Dentistry",
    location: "Westfield Clinic", city: "Westfield",
    types: ["In-person"], rating: 4.9, reviews: 241, experience: 10,
    fee: 70, photo: "https://randomuser.me/api/portraits/women/12.jpg",
    verified: true, availableToday: true,
    bio: "Dr. Lindqvist offers general and cosmetic dentistry, from routine cleanings to same-day restorative care.",
    education: ["DDS, University of Gothenburg"],
    languages: ["English", "Swedish"],
    nextSlot: "Today, 11:30 AM"
  },
  {
    id: 7, name: "Dr. Daniel Kim", gender: "male", specialty: "Psychiatry",
    location: "Downtown Clinic", city: "Downtown",
    types: ["Video"], rating: 4.8, reviews: 133, experience: 11,
    fee: 120, photo: "https://randomuser.me/api/portraits/men/76.jpg",
    verified: true, availableToday: false,
    bio: "Dr. Kim provides evidence-based therapy and medication management for anxiety, depression, and adult ADHD, entirely via video.",
    education: ["MD, Stanford University", "Residency, Psychiatry, UCSF"],
    languages: ["English", "Korean"],
    nextSlot: "Fri, 2:00 PM"
  },
  {
    id: 8, name: "Dr. Fatima Al-Sayed", gender: "female", specialty: "Gynecology",
    location: "Riverside Health Plaza", city: "Riverside",
    types: ["In-person", "Video"], rating: 4.9, reviews: 176, experience: 13,
    fee: 90, photo: "https://randomuser.me/api/portraits/women/56.jpg",
    verified: true, availableToday: true,
    bio: "Dr. Al-Sayed provides comprehensive women's health care, from routine screenings to prenatal support, in a warm, judgment-free setting.",
    education: ["MD, American University of Beirut", "Residency, OB-GYN, Cedars-Sinai"],
    languages: ["English", "Arabic", "French"],
    nextSlot: "Today, 2:30 PM"
  },
  {
    id: 9, name: "Dr. Tom Whitfield", gender: "male", specialty: "General Physician",
    location: "Northside Medical Center", city: "Northside",
    types: ["In-person", "Video"], rating: 4.7, reviews: 289, experience: 20,
    fee: 45, photo: "https://randomuser.me/api/portraits/men/22.jpg",
    verified: true, availableToday: true,
    bio: "Dr. Whitfield is a family medicine physician who treats patients of all ages for everyday illness, chronic conditions, and preventive care.",
    education: ["MD, University of Edinburgh"],
    languages: ["English"],
    nextSlot: "Today, 9:45 AM"
  },
  {
    id: 10, name: "Dr. Hana Yoshida", gender: "female", specialty: "ENT Specialist",
    location: "Lakeview Hospital", city: "Lakeview",
    types: ["In-person"], rating: 4.6, reviews: 84, experience: 8,
    fee: 75, photo: "https://randomuser.me/api/portraits/women/33.jpg",
    verified: false, availableToday: false,
    bio: "Dr. Yoshida treats ear, nose, and throat conditions in both children and adults, including chronic sinus and hearing issues.",
    education: ["MD, Kyoto University"],
    languages: ["English", "Japanese"],
    nextSlot: "Mon, 10:15 AM"
  },
  {
    id: 11, name: "Dr. Victor Alvarez", gender: "male", specialty: "Ophthalmology",
    location: "Eastgate Wellness Center", city: "Eastgate",
    types: ["In-person", "Video"], rating: 4.8, reviews: 121, experience: 16,
    fee: 80, photo: "https://randomuser.me/api/portraits/men/41.jpg",
    verified: true, availableToday: true,
    bio: "Dr. Alvarez specializes in comprehensive eye exams, cataract evaluation, and management of diabetic eye disease.",
    education: ["MD, Universidad Nacional Autónoma de México", "Fellowship, Ophthalmology, Bascom Palmer Eye Institute"],
    languages: ["English", "Spanish"],
    nextSlot: "Today, 5:00 PM"
  },
  {
    id: 12, name: "Dr. Naomi Cole", gender: "female", specialty: "Endocrinology",
    location: "Westfield Clinic", city: "Westfield",
    types: ["Video"], rating: 4.9, reviews: 102, experience: 12,
    fee: 100, photo: "https://randomuser.me/api/portraits/women/8.jpg",
    verified: true, availableToday: false,
    bio: "Dr. Cole manages diabetes, thyroid disorders, and hormonal conditions with a focus on sustainable, long-term care plans.",
    education: ["MD, Duke University", "Fellowship, Endocrinology, Massachusetts General Hospital"],
    languages: ["English"],
    nextSlot: "Wed, 1:30 PM"
  }
];

// Mock signed-in patient + appointment history, used by dashboard/appointments pages.
const CURRENT_PATIENT = {
  name: "Jordan Casey",
  email: "jordan.casey@example.com",
  photo: "https://randomuser.me/api/portraits/men/85.jpg",
  memberSince: "March 2023"
};

const APPOINTMENTS = [
  { id: "MC-48213", doctorId: 1, date: "2026-09-04", time: "3:30 PM", type: "Video", status: "upcoming" },
  { id: "MC-48190", doctorId: 6, date: "2026-09-08", time: "11:30 AM", type: "In-person", status: "upcoming" },
  { id: "MC-47932", doctorId: 3, date: "2026-08-14", time: "1:15 PM", type: "In-person", status: "completed" },
  { id: "MC-47810", doctorId: 9, date: "2026-07-30", time: "9:45 AM", type: "Video", status: "completed" },
  { id: "MC-47655", doctorId: 5, date: "2026-07-02", time: "4:45 PM", type: "In-person", status: "cancelled" }
];

function getDoctorById(id) {
  return DOCTORS.find(d => d.id === Number(id));
}
