# Instructions for Adding Certificate Images

Your certificate PDFs have been added, but you need to add certificate images for the modal viewer.

## Steps to Add Certificate Images:

1. **Convert your certificates to images:**
   - Take screenshots of your certificates or export them as JPG/PNG
   - Ensure high resolution (at least 1200px wide)
   - Save with these exact names:

2. **Required image files:**
   - Frontend-Development.jpg (for Frontend Development certificate)
   - HTML-CSS-JS.jpg (for HTML, CSS & JavaScript certificate)
   - NodeJS.jpg (for Node.js Development certificate)
   - PHP-MOOCS.jpg (for PHP Programming certificate)
   - Oracle.jpg (for Oracle Database certificate)

3. **Save images in:** `/public/certificates/images/`

4. **Update the file paths in personalData.js if needed**

## Current Certificate Status:
✅ PDFs added for download functionality
⏳ Images needed for viewing functionality

Once you add the images, users will be able to:
- View certificate images in the modal popup
- Download certificate PDFs
- See all certificate details and skills

## File Structure:
```
public/certificates/
├── images/
│   ├── Frontend-Development.jpg (ADD THIS)
│   ├── HTML-CSS-JS.jpg (ADD THIS)
│   ├── NodeJS.jpg (ADD THIS)
│   ├── PHP-MOOCS.jpg (ADD THIS)
│   └── Oracle.jpg (ADD THIS)
└── pdfs/
    ├── Frontend-Development.pdf ✅
    ├── HTML-CSS-JS.pdf ✅
    ├── NodeJS.pdf ✅
    ├── PHP-MOOCS.pdf ✅
    └── Oracle.pdf ✅
```
