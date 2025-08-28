# INOB - Instituto Nogueira O Barbeiro Website

INOB is a static HTML/CSS/JavaScript website for Giovanni Nogueira's barbering institute offering courses, consultancy, and home delivery services. The website features multiple service pages with WhatsApp integration and animated counters.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

- **Serve and test the website**:
  - `cd /home/runner/work/inob-giovanninogueira/inob-giovanninogueira`
  - `python3 -m http.server 8080` -- Starts local development server instantly (under 1 second)
  - Access at: `http://localhost:8080`
  - **NEVER CANCEL**: Website loads in ~7ms. No build process required.

- **No build process required**:
  - This is a static website with no compilation, bundling, or build steps
  - Files are served directly by any HTTP server
  - No package.json, no npm install, no build commands needed

- **File structure validation**:
  - Verify all files exist in correct directories:
    - HTML files: in root directory (`*.html`)
    - Images: in `img/` directory (`*.png`, `*.jpg`, `*.webp`)
    - CSS files: in `css/` and `css/css/` directories (`*.css`)
    - JavaScript: in `js/` and `public_html/js/` directories (`*.js`)

## Validation

- **ALWAYS manually validate website functionality** after making changes:
  - Serve the website with `python3 -m http.server 8080`
  - Test navigation between all 5 pages: `index.html`, `pag002.html`, `pag003.html`, `pag004.html`, `pag005.html`
  - Click WhatsApp integration buttons (should open WhatsApp links in new tabs)
  - Verify images load correctly (logo, testimonial photos, course images)
  - Check responsive design on different viewport sizes

- **Complete end-to-end scenarios to test**:
  1. **Navigation flow**: Start at homepage → Click "Quem sou eu" → View testimonials → Click WhatsApp button → Verify redirection
  2. **Course inquiry**: Navigate to pag004.html → View course details → Click contact button → Verify WhatsApp integration
  3. **Home delivery booking**: Navigate to pag005.html → Click scheduling buttons → Verify WhatsApp integration with correct message
  4. **Consultancy contact**: Navigate to pag003.html → View consultancy services → Test contact integration

- **Known issues to expect**:
  - External CDN resources may be blocked (AOS animations, Google Fonts) - this is normal in sandboxed environments
  - Animated counters may show "0" if JavaScript files don't load from correct paths
  - WhatsApp links open in new tabs (expected behavior)

## Directory Structure

```
/
├── index.html              # Main landing page with navigation
├── pag002.html            # About Giovanni page with testimonials  
├── pag003.html            # Consultancy services page
├── pag004.html            # Course details page
├── pag005.html            # Home delivery scheduling page
├── favicon.ico            # Website favicon
├── img/                   # All images directory
│   ├── inob.jpg          # Main logo
│   ├── quemsoueu.jpg     # Giovanni's photo
│   ├── aluno.jpg         # Student testimonial photos
│   ├── *.png             # Navigation and promotional images
│   └── *.webp            # Certificate and course images
├── css/                   # Stylesheets directory
│   ├── style.css         # Main stylesheet
│   ├── pag002-style.css  # About page styles
│   ├── pag003-style.css  # Consultancy page styles
│   ├── pag004-style.css  # Course page styles
│   ├── pag005-style.css  # Scheduling page styles
│   └── css/              # Nested CSS directory (some HTML files reference this path)
├── js/                    # JavaScript files directory
│   ├── contador.js       # Animated counters for testimonials
│   ├── script.js         # WhatsApp integration scripts
│   └── pag004-animacoes.js # Course page animations
└── public_html/js/        # Alternative JS path (referenced by pag002.html)
    └── contador.js       # Copy of counter script
```

## Common Tasks

### Testing website functionality
```bash
# Start local server (NEVER CANCEL - starts instantly)
cd /home/runner/work/inob-giovanninogueira/inob-giovanninogueira
python3 -m http.server 8080

# Test page load times (typically under 10ms)
curl -w "%{time_total}\n" -o /dev/null -s http://localhost:8080

# Test all pages exist and return 200
for page in index.html pag002.html pag003.html pag004.html pag005.html; do
  curl -I http://localhost:8080/$page
done
```

### File path validation
```bash
# Verify all referenced files exist
find . -name "*.html" -exec grep -l "href=\|src=" {} \; | head -5
find . -name "*.css" -type f | wc -l  # Should show 10 files
find . -name "*.js" -type f | wc -l   # Should show 4 files  
find . -name "*.png" -o -name "*.jpg" -o -name "*.webp" | wc -l  # Should show 15 images
```

### Performance verification
```bash
# Check file sizes (total should be under 15MB)
du -sh . 
du -sh img/  # Image directory size
```

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **External Libraries**: 
  - AOS (Animate On Scroll) via CDN: `https://unpkg.com/aos@2.3.1/dist/aos.js`
  - Google Fonts via CDN: `https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap`
- **No build tools**: No webpack, no npm, no bundling required
- **Server requirements**: Any static HTTP server (Python, Node.js http-server, nginx, Apache)

## Key Features and Functionality

### WhatsApp Integration
- Multiple WhatsApp contact buttons throughout the site
- Pre-filled messages for different services:
  - Course enrollment: Custom message for course inquiry
  - Home delivery: Scheduling message with specific text
  - Consultancy: Business coaching inquiry message
- Phone number: `5521986560887` (Giovanni's WhatsApp)

### Animated Counters
- Location: `pag002.html` (About page)
- Function: Shows student count and years of experience
- Script: `contador.js` with Intersection Observer API
- Expected behavior: Animates from 0 to target values when scrolled into view

### Multi-page Navigation
- Homepage (`index.html`): Navigation hub with 4 main service areas
- About (`pag002.html`): Giovanni's story, testimonials, student count
- Consultancy (`pag003.html`): Business coaching services
- Courses (`pag004.html`): Professional barbering course details  
- Delivery (`pag005.html`): Home service booking

## Troubleshooting

### Images not loading
- Check if `img/` directory exists and contains 15 files
- Verify HTML references use correct relative paths (`img/filename.ext`)
- Check file permissions and server can access files

### CSS not applying
- Verify `css/` directory structure exists with both `css/` and `css/css/` subdirectories
- Some HTML files reference `css/filename.css`, others reference `css/css/filename.css`
- Check browser developer tools for 404 errors on CSS files

### JavaScript not working
- Animated counters showing "0": Check `public_html/js/contador.js` exists
- WhatsApp buttons not working: Verify phone number format in HTML
- External CDN blocked: Normal in sandboxed environments, functionality may be limited

### Performance issues
- Expected load time: Under 10ms for any page
- Total site size: ~14MB (mostly images)
- No optimization needed for static content

## Validation Checklist

Before completing any changes, always run through this checklist:

- [ ] Serve website locally with `python3 -m http.server 8080`
- [ ] Navigate to all 5 pages and verify content loads correctly
- [ ] Test WhatsApp integration on at least 2 different pages
- [ ] Verify images display properly (logo, photos, promotional images)
- [ ] Check responsive behavior by resizing browser window
- [ ] Confirm no broken links between pages
- [ ] Test "Voltar" (back) links work correctly
- [ ] Verify footer information displays on all pages

**Time expectations**:
- Server startup: Instant (under 1 second)
- Page load: Under 10ms per page
- Full site validation: 2-3 minutes for complete manual testing
- **NEVER CANCEL**: No long-running processes in this project

**CRITICAL**: This is a static website with no build process. If you find yourself running npm install, webpack, or any build commands, you are working with the wrong instructions. Simply serve the files with any HTTP server and test in a browser.