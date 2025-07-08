
📍 MemoryHub
================================================================================

Location-based journaling platform to pin meaningful places on an interactive map
and enrich each pin with photos, short videos, and text.
With granular privacy controls (private, shared, or public), users can curate personal
memories, collaborate in groups, and engage with a broader community—while
administrators maintain content quality through moderation tools.
================================================================================

🚀 Table of Contents
================================================================================
1. Features
2. Tech Stack
3. Getting Started
4. Usage
5. Roadmap
6. Contributing
7. Team
8. Environment Variables

================================================================================
✨ Features
================================================================================
• Interactive Map  
  – Pin your memories to exact locations with intuitive drag-and-drop controls.

• Rich Media Support  
  – Add photos, short videos, and voice notes to every memory.

• Privacy Controls  
  – Private : Only you can view  
  – Shared  : Invite-only groups  
  – Public  : Everyone on MemoryHub

• Groups & Collaboration  
  – Create shared “Memory Groups” for events like weddings, reunions, or trips.

• Community Exploration  
  – Discover public memory pins by others around the world.

• Admin Moderation  
  – Administrators can review, approve, or remove content to maintain quality.

================================================================================
🛠️ Tech Stack
================================================================================

BACKEND
  • Language & Framework : TypeScript + Node.js, Express.js  
  • Database            : MongoDB (mongoose)  
  • Auth & Security     : JSON Web Tokens, bcryptjs, helmet, cors  
  • Media & Storage     : multer, streamifier, Cloudinary  
  • Utilities & Logging : axios, winston, morgan, dotenv  
  • Validation & Errors : express-validator, express-async-handler  
  • IDs & Formatting    : ulid, prettier  
  • Dev Tools           : ts-node, nodemon, TypeScript  


FRONTEND
  • Language & Framework : React 19 (hooks), Vite  
  • Styling & UI        : Tailwind CSS, Framer Motion, react-icons  
  • Maps & Geolocation  : react-map-gl (Mapbox GL), leaflet  
  • Forms & State       : Formik, jwt-decode  
  • Charts & Feedback   : chart.js, react-chartjs-2, react-toastify, sweetalert2  

================================================================================
🛠️ Getting Started
================================================================================

Prerequisites:
  • Node.js v16+  
  • npm or yarn  
  • MongoDB database (Atlas or local)  
  • Mapbox access token  

Installation:
  1. Clone repository:  
       git clone https://github.com/YourOrg/MemoryHub.git  
       cd MemoryHub  

  2. Install backend dependencies:  
       cd backend  
       npm install    (or yarn)  

  3. Install frontend dependencies:  
       cd ../frontend  
       npm install    (or yarn)  

  4. Run development servers in two terminals:  
       • Backend : npm run dev  
       • Frontend: npm run dev  

================================================================================
📦 Usage
================================================================================
1. Sign up or log in.  
2. Click on the map to create a new pin.  
3. Fill in title, description, and privacy level.  
4. Upload media (photos, videos, voice notes).  
5. Save and revisit your memories anytime!

================================================================================
🗺️ Roadmap
================================================================================
[ ] Mobile-friendly UI  
[ ] Real-time collaboration in groups  
[ ] Geofencing notifications  
================================================================================

================================================================================
👥 Team
================================================================================
| Name               | Email                          | GitHub                           |
|--------------------|--------------------------------|----------------------------------|
| Asma Alqahtani     | asmaalqhtani123@gmail.com      | github.com/AAbAlQahtani          |
| Azzam Alshaye      | azzamalshaye@gmail.com         | github.com/AzzamAlshaye          |
| Khaled Almutairi   | khaledalmutairi220@hotmail.com | github.com/g39g1                 |
| Rana Aldosari      | ranaaldosari10@gmail.com       | github.com/RanaAldosari          |


================================================================================
🔑 Environment Variables
================================================================================

# Frontend (.env)
VITE_PRIMARY_API_URL=
VITE_MAPBOX_TOKEN=

# Backend (.env)
MONGODB_URI=
MONGODB_DB=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

================================================================================
