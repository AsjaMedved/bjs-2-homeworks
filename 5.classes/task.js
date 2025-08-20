class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
		this.name = name;
		this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
	}

    fix() {
        this.state *= 1.5;
    }

    set state(newState) {
        if (newState <= 0) {
            this._state = 0;
        } else if (newState >= 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook (book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type,value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        let findBook = this.findBookBy("name", bookName);
        if (findBook) {
            this.books.splice(findBook);
        } 
        return findBook;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject){
        if ((mark >= 2)&&(mark <= 5)) {
            if (!this.marks[subject]) {
                this.marks[subject] = [];
            }  
            this.marks[subject].push(mark);
        }
    }

    getAverageBySubject(subject){
        if (!this.marks[subject]){
            return 0;
        }
        return this.marks[subject].reduce((acc, item) => acc += item, 0) / this.marks[subject].length;
    }

    getAverage(){
        const subjects = Object.keys(this.marks);
        if (subjects.length === 0) {
            return 0;
        } 
        let average = 0;
        for (let i = 0; i < subjects.length; i++) {
            average += this.getAverageBySubject(subjects[i]);
        }
        return average / subjects.length;
    }
}