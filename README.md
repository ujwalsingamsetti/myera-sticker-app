# MyEra Sticker App
A feature-rich, interactive web application built with React and react-konva that allows users to create and customize a 600x400 pixel canvas with draggable, rotatable stickers. This app demonstrates advanced React state management, canvas interactivity, responsive design, and a polished user experience, built as part of the MyEra Frontend Internship application.
Deployed Link
Try the app live at: https://myera-sticker-app-dun.vercel.app/
Features

Interactive Canvas: A 600x400 pixel canvas powered by react-konva for placing and manipulating stickers.
Sticker Buttons: Three buttons to add stickers (star, heart, circle) at a snapped position (40x40 grid).
Draggable Stickers: Drag stickers anywhere on the canvas, with automatic snapping to a 40x40 pixel grid for precise alignment.
Sticker Rotation: Click a sticker to rotate it 90 degrees clockwise, enhancing creative control.
Double-Click Deletion: Remove individual stickers by double-clicking, providing an intuitive way to edit the canvas.
Undo/Redo: Use Ctrl+Z to undo and Ctrl+Y to redo actions (adding, moving, rotating, or deleting stickers), implemented with a robust state history system.
Sticker Counter: Displays the real-time count of stickers on the canvas (e.g., "Stickers: 5").
Clear Canvas: A button to remove all stickers at once, with undo support for easy recovery.
Download as PNG: Save the canvas as a PNG file with all stickers included, using Konva’s toDataURL method.
Responsive Design: Adapts to mobile devices (screens <700px) by stacking buttons and controls vertically, ensuring usability across devices.

# Setup and Running
To run the app locally:

## Clone the repository:
git clone https://github.com/ujwalsingamsetti/myera-sticker-app.git
cd myera-sticker-app


## Install dependencies:
npm install


## Start the development server:
npm start

The app will open in your browser at http://localhost:3000.


Note: Ensure you have Node.js installed (version 14 or higher recommended). Place three 50x50 PNG images (sticker1.png, sticker2.png, sticker3.png) in public/stickers/ before running (e.g., star, heart, circle icons from Flaticon).
Technologies

React: Functional components and hooks (useState, useEffect) for dynamic UI and state management.
react-konva: React wrapper for Konva, enabling interactive canvas features like dragging and rotation.
konva: Core library for 2D canvas rendering and shape manipulation.
use-image: Hook for efficient loading of sticker PNGs.
CSS: Flexbox and media queries for responsive layout and polished styling.
Git/GitHub: Version control with clean commit messages for collaboration.
Vercel: Deployment platform for hosting the live app.


## Development Notes

Code Quality: Resolved ESLint errors (no-undef for past, exhaustive-deps for useEffect) to ensure clean, maintainable code.
Error Handling: Thoroughly tested all features to prevent runtime errors, ensuring a robust user experience.
Performance: Optimized state updates and canvas rendering with react-konva to handle dozens of stickers efficiently.
Commits: Used descriptive Git commit messages (e.g., "Add sticker rotation," "Fix ESLint errors") for clarity and collaboration.

Scalability and Future Improvements
The app is designed to be extensible and maintainable:

Modular Components: StickerButton and Canvas components are reusable, making it easy to add new sticker types or canvas features.
State Management: Centralized state with a history system (past/future arrays) supports complex actions like undo/redo for adding, moving, rotating, and deleting stickers.
Responsive Design: CSS media queries ensure compatibility across devices, with room for additional UI elements.
Image Handling: The public/stickers/ folder and use-image hook allow easy addition of new stickers without code changes.

##Future Enhancements:
 
Sticker Scaling: Add a slider to resize stickers dynamically.
Local Storage: Save canvas state to the browser for persistence between sessions.
Animations: Use Konva’s animation API for smooth rotation or transitions.
Sticker Collision Detection: Prevent new stickers from overlapping existing ones.
Backend Integration: Save canvas layouts to a server via a REST API.


