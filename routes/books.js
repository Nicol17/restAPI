const express = require('express');
const router = express.Router();

let books = [
    {
      Title: "The Almanack of Naval Ravikant",
      Author: "Eric Jorgenson",
      ISBN: "9781544514208",
      Year: "2020",
      Description: "Getting rich is not just about luck; happiness is not just a trait we are born with. These aspirations may seem out of reach, but building wealth and being happy are skills we can learn."
  },
  {
      Title: "The Molecule of More",
      Author: "Daniel Z. Lieberman",
      ISBN: "1946885118",
      Year: "2018",
      Description: "Dopamine is the chemical of desire that always asks for more—more stuff, more stimulation, and more surprises. In pursuit of these things, it is undeterred by emotion, fear, or morality. Dopamine is the source of our every urge, that little bit of biology that makes an ambitious business professional sacrifice everything in pursuit of success, or that drives a satisfied spouse to risk it all for the thrill of someone new. Simply put, it is why we seek and succeed; it is why we discover and prosper. Yet, at the same time, it’s why we gamble and squander."
  },
  {
      Title: "Breath: The New Science of a Lost Art",
      Author: " James Nestor",
      ISBN: "0735213615",
      Year: "2020",
      Description: "No matter what you eat, how much you exercise, how skinny or young or wise you are, none of it matters if you're not breathing properly. There is nothing more essential to our health and well-being than breathing: take air in, let it out, repeat twenty-five thousand times a day. Yet, as a species, humans have lost the ability to breathe correctly, with grave consequences."
  }
  ]

router.get('/', (req, res) => {
    console.log(books)
    res.send(books)
})

router.get('/:isbn', (req, res) => {
    const { isbn } = req.params

    const foundBook = books.find((book) => book.ISBN === isbn)
    res.send(foundBook)
})

router.post('/', (req, res) => {
    console.log('POST ROUTE REACH')

    const book = req.body;
    books.push(book);
    res.send(`Your book ${book.Title} has been added`)
})

router.delete('/:isbn', (req, res) => {
    const { isbn } = req.params;

    books = books.filter((book) => book.ISBN !== isbn) 
    res.send(`Book with ISBN ${isbn} has been deleted`)
})

router.patch(':isbn', (req, res) => {
    const { isbn } = req.body;
    const { Title, Author, Year, Description } = req.body;

    const book = books.find((book) => book.ISBN === isbn)

    if(Title) book.Title = Title
    
    if(Author) book.Author = Author
    
    if(Year) book.Year = Year

    if(Description) book.Description = Description
    
    res.send(`Book with ISBN ${isbn} has been Updated`)
})

module.exports = router;