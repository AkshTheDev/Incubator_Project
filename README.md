# Scrippy

🎬 **Real-Time AI Scriptwriting Assistant**

Scrippy is an AI-powered platform built for scriptwriters, filmmakers, and storytellers. It enhances the writing process with real-time suggestions, grammar fixes, dialogue polishing, and industry-specific insights — whether you're writing a Bollywood blockbuster, a Hollywood thriller, or an indie historical drama.

---

## ✨ Description

Scrippy is designed to revolutionize scriptwriting with powerful AI features tailored for global and era-specific storytelling. It supports voice-to-text writing, real-time co-writing, cultural accuracy, and market alignment. Whether you're an aspiring writer or a seasoned screenwriter, Scrippy gives you the tools to write smarter, faster, and more authentically.

---

## 🚀 Features

### 💡 Real-Time AI Scriptwriting Assistance
- Grammar correction & dialogue enhancement
- Bollywood/Hollywood-style suggestions
- Voice-to-text for accessibility and multilingual support
- AI co-writer for plot & scene suggestions
- Time-specific (era-based) language & style tips

### 📊 AI-Based Script Analysis & Scoring
- Emotion & pacing metrics
- Story structure & commercial viability analysis
- Advanced dashboard with screen time & beats
- Anachronism flagging for period pieces

### 🧰 Industry-Specific Templates
- Built-in templates for Bollywood, OTT, indie, regional, and more
- Genre & trope recommendations (e.g., K-dramas, telenovelas, period films)

### 🎥 AI-Generated Visual Storyboarding
- Script-to-storyboard conversion
- Shot suggestions & cinematography tips
- Era-appropriate visual generation
- Soundtrack suggestions & mood matching
- Auto-generated schedules, budgets, shot lists

### 🧐 AI-Powered Pitch Deck Generator
- Logline, market analysis, and script comparisons
- Tailored decks for studios, producers, and investors
- Copyright & collaboration contract assistance

### 🗣️ AI-Driven Dialogue Enhancer
- Realistic & impactful dialogue suggestions
- Multilingual support (e.g., Hindi, Tamil, Spanish)
- Cultural sensitivity checker
- Era-appropriate slang & idioms

### 🎮 Gamified Learning & Feedback
- Interactive lessons and real-time AI feedback
- Script challenges and learning modules for specific eras

### 🎯 AI-Powered Hit Predictor
- Box office success prediction
- Market-aligned content suggestions
- Historical trend analysis for period dramas

### 🤝 Community & Collaboration
- Real-time co-writing & version control
- Peer feedback and collaboration rooms
- Historical authenticity support for period pieces

### 🧕‍♂️ AI-Powered Character Development
- Deep character arcs, motives, and backstories

### ⚒️ Additional Features
- Offline mode with sync
- Cross-platform support (desktop, mobile, web)
- Integration with Final Draft, Adobe Premiere, DaVinci Resolve

---

## 🧪 Tech Stack

### Frontend
- React.js

### Backend
- Django (Python)

### Database
- MySQL

### AI/ML
- GPT-4, BERT, Vader, Hugging Face
- OpenAI Whisper (voice-to-text), Jukebox (music generation)

### Data & Scraping
- IMDb datasets, BeautifulSoup, Selenium
- Historical and cultural datasets

### Visuals & Media
- DALL·E, RunwayML, OpenCV

### Collaboration & Infrastructure
- WebSocket, Git-style version control
- AWS S3, Google Cloud Storage

---

## 🛠 Setup Instructions

### Clone the repository
```bash
git clone https://github.com/yourusername/scrippy.git
cd scrippy
```
### Frontend Setup (React)
```bash
cd frontend
npm install
npm run start
```
### Backend Setup (Django)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```
### Configure MySQL Database
```bash
python manage.py makemigrations
python manage.py migrate
```
### Run the Django Server
```bash
python manage.py runserver
```
### Enviornment Variables
- Create a `.env` file in both frontend and backend
- Add API keys for OpenAI, Whisper, Firebase, etc.

## Commit Message Guidelines
- Use present tense and be specific.
- Examples:
    `Add Django models for scene and dialogue entities`
    `Integrate voice-to-text feature using Whisper`
    `Fix React UI bug in character creation modal`
