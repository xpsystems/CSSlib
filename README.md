# 🎨 CSSlib  

A **lightweight and modern CSS library** for building fast and responsive websites. 🚀  

Developed by **[XPSYSTEMS](https://github.com/xpsystems)**.  

---

## 🌟 Features  
- Simple and lightweight  
- Customizable CSS variables  
- Responsive grid system  
- Pre-styled buttons, cards, forms, and more  
- Dark mode support 
- Scroll to top (Button)

---

## 📥 Installation  

### Option 1: CDN (Coming Soon)  
```html
<link rel="stylesheet" href="https://cdn.csslib.eu/csslib.min.css">
````
### Option 2: Download & Include 
1. Download the ``CSSlib`` source files.
2. Include ``main.css`` in your HTML file:
```html
<link rel="stylesheet" href="src/styles/main.css">
````
---
## 📌 Usage
### Buttons
Use ``.btn`` for buttons with different styles
```html
<a href="#" class="btn primary">Primary</a>
<a href="#" class="btn secondary">Secondary</a>
<a href="#" class="btn success">Success</a>
<a href="#" class="btn danger">Danger</a>
````
### Grid System
Create responsive layouts using ``.grid`` and ``.col``.
```html
<div class="grid">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
</div>
```
### Cards
A simple card component.
```html
<div class="card">
    <h3>Card Title</h3>
    <p>This is a simple card component.</p>
</div>
```
---
## 🎨 Customization
CSSlib uses CSS variables for easy theming.
Edit ``_variables.css`` to customize:
```css
:root {
  /* Primary Colors */
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
  --warning-color: #ffc107;
  --info-color: #17a2b8;

  /* Backgrounds & Text */
  --background-color: #f8f9fa;
  --text-color: #212529;
  --card-bg: #ffffff;
  --navbar-bg: #ffffff;
  --footer-bg: #f1f1f1;
  --border-color: #ddd;
  --shadow-color: rgba(0, 0, 0, 0.1);
  
  /* 🎨 Extra Colors */
  --blue: #007bff;
  --green: #28a745;
  --red: #dc3545;
  --yellow: #ffc107;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --aqua: #17a2b8;
  --lime: #cddc39;
  --orange: #fd7e14;
  --teal: #20c997;
  --cyan: #17a2b8;

  /* Elements */
  --input-bg: #ffffff;
  --input-border: #ccc;
  --modal-bg: #ffffff;
  --btn-hover-opacity: 0.9;
  --navbar-bg: #e9ecef;


  --theme-btn-text: #f0f0f0;
  --theme-btn-bg: #1c1c1c;
  --theme-btn-bg-hover: #444;
}

/* Override variables for Dark Theme */
body[data-theme="dark"] {
  /* Dark Mode Colors */
  --primary-color: #1e90ff;
  --secondary-color: #495057;
  --success-color: #218838;
  --danger-color: #c82333;
  --warning-color: #d39e00;
  --info-color: #138496;

  /* Backgrounds & Text */
  --background-color: #121212;
  --text-color: #f0f0f0;
  --card-bg: #1c1c1c;
  --navbar-bg: #1a1a1a;
  --footer-bg: #181818;
  --border-color: #333;
  --shadow-color: rgba(255, 255, 255, 0.1);

  /* Extra Colors */
  --blue: #1e90ff;
  --green: #218838;
  --red: #c82333;
  --yellow: #d39e00;
  --purple: #593196;
  --pink: #c2185b;
  --aqua: #117a8b;
  --lime: #9aa93b;
  --orange: #e06400;
  --teal: #168d75;
  --cyan: #128ea6;

  /* Elements */
  --input-bg: #262626;
  --input-border: #444;
  --modal-bg: #1c1c1c;
  --btn-hover-opacity: 0.85;
  --navbar-bg: #1a1a1a;


  --theme-btn-text: #1c1c1c;
  --theme-btn-bg: #f0f0f0;
  --theme-btn-bg-hover: #ccc;
}
```
---
## 🛠 Development & Contribution
### Clone the Repository
````
git clone https://github.com/xpsystems/CSSlib.git
cd CSSlib
````
### Run Locally (with Live Server)
Use VS Code Live Server to preview changes.
Or manually open index.html in a browser. 
### Contribute
Want to contribute?
1. Fork this repository
2. Create a new branch (git checkout -b feature-name)
3. Commit your changes (git commit -m "Added feature")
4. Push to GitHub (git push origin feature-name)
5. Open a Pull Request 🚀

---

##📢 License
CSSlib is open-source under the MIT License.

---
# 💡 Developed with ❤️ by XPSYSTEMS

---

## 🔜 Next Steps  
-  Host CSSlib on a CDN
-  Improve mobile responsiveness  

