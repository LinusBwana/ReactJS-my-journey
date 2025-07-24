# onChange
- onChange event handler is used primarily with form elements e.g `<input>, <textarea>, <select>, <radio>`
- It triggers a function every time the value of the input changes

## Illustration of onChange react event handler
I created *MyComponent.jsx* with 5 form fields:
- *name* (`<input>`)
- *quantity* (`<input type="number"`>)
- *comment* (`<textarea>`)
- *payment* (`<select>`)
- *shipping* (`<input type="radio">`)

Each field has:
- A piece of React state (like *name, quantity*, etc.)
- An *onChange* handler to update the state
- A UI element that shows the current value using {...}

**`Mycomponent.jsx`**
```jsx
import react, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event){
        setName(event.target.value);
    };

    function handleQuantityChange(event){
        setQuantity(Number(event.target.value));
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

  return (
    <div>
        <input value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type='number' min={1}/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Enter Delivery Instructions'/>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="GiftCard">GiftCard</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="Pick Up"
                   checked={shipping === "Pick Up"}
                   onChange={handleShippingChange}/>
            Pick Up
        </label> <br />
        <label>
            <input type="radio" value="Delivery"
                   checked={shipping==="Delivery"}
                   onChange={handleShippingChange}/>
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>
  )
}

export default MyComponent;
```

#### 1. User types in the Name input field:
```jsx
<input value={name} onChange={handleNameChange}/>
```

1. You type something in the input.
2. *onChange* triggers the *handleNameChange* function.
3. *setName(event.target.value)* updates the *name* state.
4. React re-renders the component.
5. The `<input>` receives the updated value={*name*}.
6. The `<p>Name: {name}</p>` also updates and displays the new name.

#### 2. User changes the Quantity:
```jsx
<input value={quantity} onChange={handleQuantityChange} type='number' min={1}/>
```

1. You enter a number.
2. *handleQuantityChange* runs.
3. *setQuantity(event.target.value)* updates *quantity*.
4. React re-renders.
5. The input shows the new value from *value={quantity}*.
6. The `<p>Quantity: {quantity}</p>` updates with the current number.

#### 3. User writes a Comment:
```jsx
<textarea value={comment} onChange={handleCommentChange} />
```

1. User types in the textarea.
2. *handleCommentChange* runs.
3. *setComment(event.target.value)* updates the *comment* state.
4. React re-renders the component.
5. The *textarea* shows the updated value.
6. The `<p>Comment: {comment}</p>` displays the updated comment.

#### 4. User selects a Payment option:
```jsx
<select value={payment} onChange={handlePaymentChange}>
```

1. User selects one of: Visa, MasterCard, GiftCard.
2. *handlePaymentChange* runs.
3. *setPayment(event.target.value)* updates *payment*.
4. React re-renders.
5. The `<select>` now shows the selected option (*value={payment}*).
6. `<p>Payment: {payment}</p>` displays it.

#### 5. User selects a Shipping method (Radio):
```jsx
<input type="radio" value="Pick Up" checked={shipping === "Pick Up"} />
<input type="radio" value="Delivery" checked={shipping === "Delivery"} />
```

1. User clicks on "Pick Up" or "Delivery".
2. *handleShippingChange* runs.
3. *setShipping(event.target.value)* updates the *shipping* state.
4. React re-renders.
5. The correct radio button is selected (*checked={shipping === "..."}*).
6. `<p>Shipping: {shipping}</p>` shows the current choice

**`App.jsx`**
```jsx
import MyComponent from "./MyComponent"

function App() {

  return (
    <div>
        <MyComponent />
    </div>
  );
};

export default App
```

- *App.jsx* is the root component of my React app.
- It imports another component i.e *MyComponent* from the file *MyComponent.jsx*.
- Inside the return statement, I tell React to render `<MyComponent />` on the screen.
- Everything I built inside *MyComponent* i.e all the form inputs, states, and paragraphs will be displayed when the app runs.
- I export App at the end so React can use it in *main.jsx* and render it into the browser.