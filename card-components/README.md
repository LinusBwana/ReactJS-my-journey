# Card Component
This project is a simple but practical exercise in building reusable UI components with React. I created a Card component that displays a profile image, a title, and a short description. I styled using CSS class names. The goal of this project was to strengthen my understanding of React fundamentals like JSX, component reuse, asset importing, and layout structure.

By rendering multiple Card components inside the main App component, I practiced how to build scalable and modular interfaces, the building blocks of real-world React applications.

## What I Did
- Created a new React component called *Card.jsx* which displays:  
     - A profile image imported from the local *assets* folder  
     - A title (*h2*)  
     - A paragraph text (*p*)  
- I assigned classes to the picture, title and paragraph and styled the card  
- Imported and rendered the Card component **five times** inside the root component *App.jsx* 
- Used React fragments (*<> </>*) to return multiple sibling elements in *App.jsx*  

### Card.jsx
```javascript
import profilePic from './assets/profile.jpg'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Lorem Ipsum</h2>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestias?</p>
        </div>
    );
}

export default Card
```

### App.jsx
```javascript
import Card from "./Card"

function App() {

    return(
      <>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </>
    );
}

export default App
```

## What I Learnt
1. How to import and use local image assets inside React components  
2. Creating reusable components and rendering them multiple times  
3. Using React fragments to group multiple elements without extra DOM nodes  
4. Assigning CSS classes in JSX for styling