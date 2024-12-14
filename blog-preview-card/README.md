# Blog Preview Card Project

## Project Overview
The Blog Preview Card project is a simple HTML and CSS implementation of a card component to preview a blog post. It showcases a responsive design with a visually appealing layout and includes a header image, label, blog details, and author information.

## File Structure
```
├── index.html       # Main HTML file
├── styles.css       # Inline styles defined in the <style> tag within HTML
├── images/          # Folder containing images used in the project
│   ├── favicon-32x32.png
│   ├── illustration-article.svg
│   ├── image-avatar.webp
├── fonts/           # Folder containing custom fonts
│   ├── Figtree-VariableFont_wght.ttf
```
# screenshot 
![blog-preciew-desktop](/blog-preview-card/screenshot/blog-preview-desktop.png);

## Features
1. **Responsive Design**:
   - The card is centered horizontally and vertically on the page using `flexbox`.
   - The layout adjusts seamlessly within the defined dimensions of `740px` by `580px`.

2. **Card Component**:
   - Includes a header with an image.
   - Contains blog content with a title, description, label, and publish date.
   - Author information with an avatar and name.

3. **Custom Fonts**:
   - The `MyFont` font is imported from the local fonts folder and applied to the entire page.

4. **Styling**:
   - Rounded corners, shadow effects, and colors are applied to enhance the visual appearance.
   - The design includes well-defined padding, margins, and spacing for a clean layout.


## Technical Details
### HTML
The structure is defined using semantic elements like:
- `<div>` containers for grouping content.
- `<img>` for displaying images.
- `<h2>` for the blog title.
- `<p>` for text content.
- `<span>` for labels.

### CSS
The inline styles include:
- **Global Styles**:
  - `*` selector for resetting margins and padding.
  - `body` for font family, background color, and alignment.
- **Flexbox**:
  - Used in `.container` and `.card-container` for alignment and layout.
- **Custom Styles**:
  - Box shadows, font sizes, and color schemes for visual consistency.

### Fonts
Custom font `Figtree` is used for the design and imported with the `@font-face` rule.

## Images
- **Favicon**: `favicon-32x32.png`
- **Header Image**: `illustration-article.svg`
- **Author Avatar**: `image-avatar.webp`

Ensure these files are placed in the `images/` directory to avoid broken links.

## Preview
This project can be viewed by opening `index.html` in any modern web browser. Ensure that all image and font files are correctly placed to experience the complete design.

---
For further customization or feature requests, feel free to modify the HTML and CSS directly in the project.

