const myNum = [1,2,3,4,5,6,7,8,9,20]

// const greaterNUm=myNum.filter((item)=>(item>4));

// console.log(greaterNum);

const greaterNum = [];

const numPush = myNum.forEach((item)=>{
    if(item>4){
        greaterNum.push(item)
    }
})

// console.log(greaterNum)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBook = books.filter((bk)=> (bk.genre === 'Non-Fiction'));
  let userBook2 = books.filter((bk)=> (bk.genre === 'Non-Fiction' && bk.edition >=1900));

  console.log(userBook, userBook2)