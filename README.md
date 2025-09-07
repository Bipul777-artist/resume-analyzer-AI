# 🚀 AI Resume Reviewer

An intelligent resume analysis tool powered by AI that provides comprehensive feedback to help job seekers optimize their resumes for better ATS compatibility and overall effectiveness.

## ✨ Features

- **📄 PDF Resume Upload & Analysis** - Upload your resume in PDF format for instant AI-powered analysis
- **🎯 Job-Specific Feedback** - Input job title and description for targeted, role-specific recommendations
- **🤖 ATS Compatibility Scoring** - Get detailed ATS (Applicant Tracking System) compatibility scores and tips
- **📊 Comprehensive Analysis** - Receive feedback across multiple dimensions:
  - **Tone & Style** - Professional language and communication effectiveness
  - **Content Quality** - Relevance, impact, and completeness of information
  - **Structure & Format** - Resume organization and visual hierarchy
  - **Skills Assessment** - Technical and soft skills presentation
- **🖼️ PDF to Image Conversion** - Advanced document processing for better analysis
- **💯 Scoring System** - Get numerical scores (0-100) for each category with actionable improvement tips

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Backend Services**: Puter (Database, Storage, AI Models)
- **AI Model**: GPT-4o for resume analysis

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-resume-reviewer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to start using the application.

## 🎯 How to Use

1. **Upload Your Resume**: Click the upload area and select your PDF resume file
2. **Add Job Details** (Optional): Enter the company name, job title, and job description for more targeted feedback
3. **Analyze**: Click the "Analyze Resume" button to start the AI analysis
4. **Review Feedback**: Get comprehensive scores and actionable tips across all categories
5. **Improve**: Implement the suggestions and re-analyze for better scores

## 📊 Analysis Categories

### ATS Compatibility
- Keyword optimization
- Format compatibility
- Section organization
- File structure

### Tone & Style
- Professional language use
- Clarity and conciseness
- Industry-appropriate terminology
- Communication effectiveness

### Content Quality
- Work experience relevance
- Achievement quantification
- Skills alignment
- Educational background

### Structure & Format
- Visual hierarchy
- Section organization
- White space usage
- Readability

### Skills Assessment
- Technical skills presentation
- Soft skills demonstration
- Skill-job alignment
- Competency levels

## 🏗️ Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Main application pages
│   ├── utils/          # Helper functions and utilities
│   ├── types/          # TypeScript type definitions
│   └── styles/         # Global styles and Tailwind config
├── public/             # Static assets
└── package.json        # Project dependencies and scripts
```

## 🤖 AI Analysis Process

1. **Document Processing**: PDF is converted to image format for better AI comprehension
2. **Content Extraction**: AI extracts and analyzes text, formatting, and structure
3. **Job Matching**: When job description is provided, analysis is tailored to specific role requirements
4. **Scoring Algorithm**: Each category is scored based on industry best practices and ATS requirements
5. **Feedback Generation**: Actionable tips are generated with specific improvement recommendations

## 📈 Scoring System

- **0-40**: Needs Significant Improvement
- **41-60**: Below Average - Multiple Areas Need Work
- **61-75**: Good - Minor Improvements Needed
- **76-85**: Very Good - Well-Optimized Resume
- **86-100**: Excellent - ATS and Recruiter Ready

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Powered by Puter for seamless backend services
- AI analysis provided by GPT-4o
- Built with modern React and TypeScript best practices

---

**Ready to optimize your resume?** Upload your PDF and get AI-powered feedback in seconds! 🎯