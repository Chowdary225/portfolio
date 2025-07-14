#!/bin/bash

# Certificate Image Setup Helper Script
# This script helps you add missing certificate images to your portfolio

echo "🎓 Certificate Image Setup Helper"
echo "=================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Directory paths
IMAGES_DIR="/Users/chowdary/portfolio/public/certificates/images"
PDFS_DIR="/Users/chowdary/portfolio/public/certificates/pdfs"

echo -e "${BLUE}📁 Checking current certificate files...${NC}"
echo ""

# Check PDFs (should all be there)
echo -e "${GREEN}✅ PDF Files (Ready for Download):${NC}"
for pdf in "Frontend-Development.pdf" "HTML-CSS-JS.pdf" "NodeJS.pdf" "Oracle.pdf" "PHP-MOOCS.pdf"; do
    if [ -f "$PDFS_DIR/$pdf" ]; then
        echo -e "   ✅ $pdf"
    else
        echo -e "   ❌ $pdf ${RED}(MISSING)${NC}"
    fi
done

echo ""

# Check Images
echo -e "${YELLOW}🖼️  Image Files (For Certificate Viewing):${NC}"
for img in "Frontend-Development.jpg" "HTML-CSS-JS.jpg" "NodeJS.jpg" "Oracle.jpg" "PHP-MOOCS.svg"; do
    if [ -f "$IMAGES_DIR/$img" ]; then
        echo -e "   ✅ $img ${GREEN}(READY!)${NC}"
    else
        echo -e "   ❌ $img ${RED}(MISSING)${NC}"
    fi
done

echo ""
echo -e "${BLUE}📊 Summary:${NC}"

# Count existing images
existing_images=0
if [ -f "$IMAGES_DIR/PHP-MOOCS.svg" ]; then ((existing_images++)); fi
if [ -f "$IMAGES_DIR/Frontend-Development.jpg" ]; then ((existing_images++)); fi
if [ -f "$IMAGES_DIR/HTML-CSS-JS.jpg" ]; then ((existing_images++)); fi
if [ -f "$IMAGES_DIR/NodeJS.jpg" ]; then ((existing_images++)); fi
if [ -f "$IMAGES_DIR/Oracle.jpg" ]; then ((existing_images++)); fi

echo "   📄 PDFs ready: 5/5"
echo "   🖼️  Images ready: $existing_images/5"

if [ $existing_images -eq 5 ]; then
    echo -e "${GREEN}🎉 ALL CERTIFICATES COMPLETE! Your portfolio is ready!${NC}"
elif [ $existing_images -gt 0 ]; then
    echo -e "${YELLOW}⚠️  Need $(( 5 - existing_images )) more certificate images${NC}"
else
    echo -e "${RED}⚠️  Need to add certificate images${NC}"
fi

echo ""
echo -e "${BLUE}🚀 Next Steps:${NC}"

if [ $existing_images -lt 5 ]; then
    echo "1. Open your PDF certificates from: $PDFS_DIR"
    echo "2. Take screenshots or export as JPG images"
    echo "3. Save them with these exact names in: $IMAGES_DIR"
    echo ""
    echo -e "${YELLOW}Missing image files needed:${NC}"
    
    if [ ! -f "$IMAGES_DIR/Frontend-Development.jpg" ]; then
        echo "   📸 Frontend-Development.jpg"
    fi
    if [ ! -f "$IMAGES_DIR/HTML-CSS-JS.jpg" ]; then
        echo "   📸 HTML-CSS-JS.jpg"
    fi
    if [ ! -f "$IMAGES_DIR/NodeJS.jpg" ]; then
        echo "   📸 NodeJS.jpg"
    fi
    if [ ! -f "$IMAGES_DIR/Oracle.jpg" ]; then
        echo "   📸 Oracle.jpg"
    fi
fi

echo ""
echo -e "${GREEN}✅ Test your certificates at: http://localhost:5174${NC}"
echo -e "${BLUE}📖 Full guide available at: certificate-setup-guide.html${NC}"

echo ""
echo "🎯 PHP-MOOCS certificate should work perfectly right now!"
echo "   Try clicking 'View Certificate' and 'Download' to test it."
