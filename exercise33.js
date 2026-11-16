// exercise 33 JS


//Exercise 3: Changing Content
// Task: Create a button that, when clicked, changes the text and HTML content of different elements on the page. Implement the changeContent function as shown in the example.


const header = document.querySelector('#header')

console.log(header)

const text = document.querySelector('.text')

console.log(text)


// change text 

function changeText () {
  header.textContent = (`Today's topic: Technology`)
}

// change element 

function changeElement () {
  text.innerHTML = (`Technology: The application of knowledge and skills to create <b> tools,
      machines, and systems </b> that make work easier`)
}

