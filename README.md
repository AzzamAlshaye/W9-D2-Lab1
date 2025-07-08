--------------------------------------------------------------------------------
 📍 MemoryHub
 
Location-based journaling platform to pin meaningful places on an interactive map and enrich each pin with photos, short videos and text.
With granular privacy controls (private, shared, or public), users can curate personal memories, collaborate in groups, and engage with a broader community—while administrators maintain content quality through moderation tools.
--------------------------------------------------------------------------------

🚀 Table of Contents
--------------------------------------------------------------------------------
1. Features
2. Tech Stack
3. Getting Started
4. Usage
5. Roadmap
6. Contributing
7. Team
--------------------------------------------------------------------------------
✨ Features
--------------------------------------------------------------------------------
- Interactive Map
  Pin your memories to exact locations with intuitive drag-and-drop controls.

- Rich Media Support
  Add photos, short videos, and voice notes to every memory.

- Privacy Controls
  • Private: Only you can view
  • Shared: Invite-only groups
  • Public: Everyone on MemoryHub

- Groups & Collaboration
  Create shared “Memory Groups” for events like weddings, reunions, or trips.

- Community Exploration
  Discover public memory pins by others around the world.

- Admin Moderation
  Administrators can review, approve, or remove content to maintain quality.

--------------------------------------------------------------------------------
🛠️ Tech Stack
--------------------------------------------------------------------------------

Backend
-------
Language & Framework:
  • TypeScript + Node.js
  • Express.js

Database:
  • MongoDB (mongoose)

Auth & Security:
  • JSON Web Tokens (jsonwebtoken)
  • bcryptjs for password hashing
  • helmet for HTTP headers
  • cors

Media & Storage:
  • multer & streamifier for file uploads
  • Cloudinary for image/video hosting

Utilities & Logging:
  • axios
  • winston & morgan
  • dotenv
  • express-validator & express-async-handler
  • ulid for unique IDs

Dev Tools:
  • TypeScript, ts-node
  • nodemon
  • prettier

<package.json> (backend)
{
  "name": "final-project-backend",
  "version": "1.0.0",
  "scripts": {
    "start": "node dist/app.js",
    "dev": "nodemon src/app.ts",
    "build": "tsc",
    "format": "prettier --write \"src/**/*.ts\"",
    "seed": "ts-node src/scripts/seed.ts"
  },
  "dependencies": {
    "axios": "^1.10.0",
    "bcryptjs": "^3.0.2",
    "cloudinary": "^2.7.0",
    "cors": "^2.8.5",
    "dotenv": "^16.5.0",
    "express": "^5.1.0",
    "express-async-handler": "^1.2.0",
    "express-validator": "^7.2.1",
    "helmet": "^8.1.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.16.0",
    "morgan": "^1.10.0",
    "multer": "^2.0.1",
    "remove": "^0.1.5",
    "streamifier": "^0.1.1",
    "ulid": "^3.0.1",
    "winston": "^3.17.0"
  },
  "devDependencies": {
    "@types/bcryptjs": "^3.0.0",
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.3",
    "@types/jsonwebtoken": "^9.0.10",
    "@types/morgan": "^1.9.10",
    "@types/multer": "^2.0.0",
    "@types/node": "^24.0.1",
    "@types/streamifier": "^0.1.2",
    "nodemon": "^3.1.10",
    "prettier": "^3.5.3",
    "ts-node": "^10.9.2",
    "typescript": "^5.8.3"
  }
}

Frontend
--------
Language & Framework:
  • React 19 (hooks & functional components)
  • Vite for fast dev server

Styling & UI:
  • Tailwind CSS
  • Framer Motion for animations
  • react-icons

Maps & Geolocation:
  • react-map-gl (Mapbox GL)

Forms & State:
  • Formik
  • jwt-decode

Charts & Feedback:
  • chart.js & react-chartjs-2
  • react-toastify
  • sweetalert2

<package.json> (frontend)
{
  "name": "w8-d4-project",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.7",
    "axios": "^1.9.0",
    "chart.js": "^4.4.9",
    "formik": "^2.4.6",
    "framer-motion": "^12.23.0",
    "jwt-decode": "^4.0.0",
    "leaflet": "^1.9.4",
    "mapbox-gl": "^3.13.0",
    "react": "^19.1.0",
    "react-chartjs-2": "^5.3.0",
    "react-dom": "^19.1.0",
    "react-icons": "^5.5.0",
    "react-map-gl": "^8.0.4",
    "react-router": "^7.6.0",
    "react-toastify": "^11.0.5",
    "sweetalert2": "^11.22.2",
    "sweetalert2-react-content": "^5.1.0",
    "tailwindcss": "^4.1.7"
  },
  "devDependencies": {
    "@eslint/js": "^9.25.0",
    "@types-react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.4.1",
    "eslint": "^9.25.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "vite": "^6.3.5"
  }
}

--------------------------------------------------------------------------------
🛠️ Getting Started
--------------------------------------------------------------------------------

Prerequisites:
  • Node.js (v16+)
  • npm or yarn
  • A MongoDB database (Atlas or local)
  • Mapbox access token

Installation:
  1. Clone the repo:
     git clone https://github.com/AzzamAlshaye/MemoryHub-frontend.git (MemoryHub-backend)
     cd MemoryHub-frontend (backend)

  2. Install backend dependencies:
     cd backend
     npm install  (or yarn)

  3. Install frontend dependencies:
     cd ../frontend
     npm install  (or yarn)

  4. Run development servers in two terminals:
     • Backend: npm run dev
     • Frontend: npm run dev

--------------------------------------------------------------------------------
📦 Usage
--------------------------------------------------------------------------------
1. Sign up or log in.
2. Click on the map to create a new pin.
3. Fill in title, description, and privacy level.
4. Upload media (photos, videos).
5. Save and revisit your memories anytime!

--------------------------------------------------------------------------------
🗺️ Roadmap
--------------------------------------------------------------------------------
- [ ] Mobile-friendly UI
- [ ] collaboration in groups
- [ ] Geofencing notifications
--------------------------------------------------------------------------------
👥 Team
--------------------------------------------------------------------------------
Azzam Alshaye          | azzamalshaye@gmail.com          | https://github.com/AzzamAlshaye
Asma Alqahtani         | asmaalqhtani123@gmail.com       | https://github.com/AAbAlQahtani
Rana Aldosari          | ranaaldosari10@gmail.com        | https://github.com/RanaAldosari
Khaled Almutairi       | khaledalmutairi220@hotmail.com  | https://github.com/g39g1

--------------------------------------------------------------------------------
Built with ❤️ by the MemoryHub Team
