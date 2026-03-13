# Photo Gallery App

This is a simple Photo Gallery project built with **React** and **Tailwind CSS**. I created this as part of my submission for the **Celebrare Frontend Intern Assignment**.

## Features
- **Image Gallery**: Fetches 30 high-quality photos from the Picsum API.
- **Search**: You can quickly find photos by searching for the author's name.
- **Favorites**: Click the heart icon to save photos you like. Your favorites are saved in your browser (LocalStorage) so they don't disappear when you refresh.
- **Responsive**: It works smoothly on both mobile and desktop screens.

## How to Run it locally
1. **Clone or Download** the files.
2. Open your terminal in the project folder and install dependencies:
   ```bash
   npm install
   ```
3. Start the project:
   ```bash
   npm run dev
   ```
4. Open the link shown in your terminal (usually `http://localhost:5173`).

## Tech Stack
- React 19
- Tailwind CSS 4
- Axios (for API fetching)
- React Icons

## Project Structure
- `src/components`: UI parts like the Search Bar, Photo Cards, and Loader.
- `src/hooks`: Custom hook for fetching API data.
- `src/reducers`: Reducer logic for managing the favorite list.

---
Created by [Your Name]
