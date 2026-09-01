# 🏥 MediCare Hub

A professional, fully responsive **healthcare appointment booking platform** built with vanilla HTML, CSS, and JavaScript. Patients can search doctors by specialty, location, availability, and consultation type, then book, manage, and track appointments through a clean, trustworthy interface.

**[🔗 Live Demo](#-live-demo)** · **[📸 Preview](#-pages)** · **[🚀 Getting Started](#-getting-started)**

---

## ✨ Highlights

- **10 fully built pages** — homepage, doctor listing, doctor profile, appointment booking, patient dashboard, appointment history, contact, FAQ, login, and register
- **Real interactivity, no framework required** — search, multi-filter doctor listing, sortable results, an interactive date/time slot picker, tabbed profiles, an accordion FAQ, and form validation, all in plain JavaScript
- **Clean component-driven CSS** — a single design-token system (`css/style.css`) drives color, type, spacing, and every reusable component (cards, buttons, badges, modals, forms)
- **Fully responsive** — from a 360px phone to a widescreen desktop, with a dedicated mobile navigation drawer and collapsible filters
- **Realistic mock data layer** (`js/data.js`) that stands in for a backend API, making it easy to swap in real endpoints later

## 🧩 Pages

| Page | File | Description |
|---|---|---|
| Homepage | `index.html` | Hero search bar, specialty grid, "how it works," featured doctors, testimonials, mini-FAQ |
| Find Doctors | `doctors.html` | Full listing with specialty/location/type/rating/price filters, live search, and sorting |
| Doctor Profile | `doctor-profile.html` | Bio, education, languages, tabbed reviews, mini availability calendar |
| Book Appointment | `booking.html` | Step indicator, consultation type picker, date strip, time slots, live summary, confirmation modal |
| Patient Dashboard | `dashboard.html` | Stat cards, next appointment, profile settings |
| Appointment History | `appointments.html` | Filterable list (all / upcoming / completed / cancelled) with reschedule & cancel actions |
| Contact | `contact.html` | Contact details + validated contact form |
| FAQ | `faq.html` | Category-filtered accordion of common questions |
| Login | `login.html` | Split-panel login with validation |
| Register | `register.html` | Split-panel sign-up with live password-strength meter |

## 🛠️ Built With

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties (design tokens), CSS Grid & Flexbox, no framework
- **Vanilla JavaScript (ES6+)** — DOM APIs only, no build step or dependencies
- **Google Fonts** — [Fraunces](https://fonts.google.com/specimen/Fraunces) (display) + [Inter](https://fonts.google.com/specimen/Inter) (body)

No frameworks, no bundlers, no `npm install` — open a file and it works.

## 📁 Project Structure

```
medicare-hub/
├── index.html                 # Homepage
├── doctors.html                # Doctor listing + filters
├── doctor-profile.html         # Individual doctor profile
├── booking.html                 # Appointment booking flow
├── dashboard.html               # Patient dashboard
├── appointments.html            # Appointment history
├── contact.html                 # Contact page
├── faq.html                     # FAQ page
├── login.html                   # Login page
├── register.html                # Registration page
├── css/
│   └── style.css                # Full design system + all component styles
├── js/
│   ├── data.js                  # Mock doctors, patient, and appointment data
│   ├── main.js                  # Shared behavior: mobile nav, toasts, FAQ accordion
│   ├── home.js                  # Homepage rendering (specialties, featured doctors)
│   ├── doctors.js                # Listing search/filter/sort logic
│   ├── doctor-profile.js         # Profile page rendering + tabs
│   ├── booking.js                 # Booking flow state + confirmation modal
│   ├── dashboard.js               # Dashboard stats + next appointment
│   ├── appointments.js            # Appointment history filtering + actions
│   ├── auth.js                    # Login/register validation + password strength
│   ├── contact.js                 # Contact form submission
│   └── faq.js                     # FAQ category filtering
└── README.md
```

## 🚀 Getting Started

This is a static site — no build tools or package managers required.

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/medicare-hub.git
   cd medicare-hub
   ```
2. **Open it locally.** Either:
   - Double-click `index.html`, or
   - Serve it locally for the best experience (some browsers restrict local file access):
     ```bash
     python3 -m http.server 8000
     # then visit http://localhost:8000
     ```

## 🌐 Live Demo

Deploy this in under a minute with **GitHub Pages**:

1. Push this project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your live site will be published at:
   ```
   https://naikmatshah.github.io/Medicare_hub/
   ```

Add that link to the top of this README, your GitHub profile, and your CV/resume once deployed.

## 🎓 What This Project Demonstrates

- Structuring a **multi-page** static site with shared, consistent components
- Building **search, filter, and sort** logic from scratch in vanilla JS
- Designing an **interactive booking flow** (type → date → time → confirmation)
- Implementing **client-side form validation** (email format, required fields, password strength)
- Writing **mobile-first, fully responsive CSS** with a token-based design system
- Structuring a mock **data layer** that mirrors what a real API response would look like, making it straightforward to connect to a backend later

## 🔮 Possible Next Steps

- Connect to a real backend/database (e.g., Node/Express + PostgreSQL, or Firebase) for persistent accounts and bookings
- Add real authentication (JWT sessions, OAuth)
- Integrate a payment provider (e.g., Stripe) for consultation fees
- Add doctor-side dashboards for managing incoming bookings
- Real-time availability sync and email/SMS reminders

## 📄 License

This project is open-source and available for personal or educational use. Doctor names, reviews, and clinic details are fictional and used for demonstration purposes only.




