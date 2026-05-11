const chapter1Data = [
    // --- General Concepts ---
    {
        q: "What is a medium to communicate and express feelings and emotions to another person?",
        options: ["Hardware", "Software", "Language", "Program"],
        correct: 2
    },
    {
        q: "A set of instructions given to a computer to perform a task is called a:",
        options: ["Language", "Program", "Output", "Keyboard"],
        correct: 1
    },
    {
        q: "A person who writes a computer program is known as a:",
        options: ["Operator", "Engineer", "Programmer", "Analyst"],
        correct: 2
    },
    {
        q: "The process of creating a program by a programmer is called:",
        options: ["Executing", "Processing", "Programming", "Running"],
        correct: 2
    },
    {
        q: "Which of these is an example of a computer program?",
        options: ["Operating System", "Tux Paint", "Video Games", "All of these"],
        correct: 3
    },

    // --- First Generation: Machine Language (ML) ---
    {
        q: "Which is the only language directly understood by the computer?",
        options: ["Assembly Language", "Machine Language", "High Level Language", "4GL"],
        correct: 1
    },
    {
        q: "Machine Language is also known as which generation language?",
        options: ["First", "Second", "Third", "Fourth"],
        correct: 0
    },
    {
        q: "What two symbols are used in Machine Language?",
        options: ["A and B", "0 and 1", "X and Y", "+ and -"],
        correct: 1
    },
    {
        q: "In Machine Language, the symbol '0' represents which state?",
        options: ["ON state", "OFF state", "Error state", "Start state"],
        correct: 1
    },
    {
        q: "In Machine Language, the symbol '1' represents which state?",
        options: ["OFF state", "ON state", "Pause state", "End state"],
        correct: 1
    },
    {
        q: "Why is the execution of Machine Language easy and fast?",
        options: ["It uses English", "It is directly understood", "It is machine independent", "It uses icons"],
        correct: 1
    },
    {
        q: "Machine Language is 'machine dependent'. What does this mean?",
        options: ["It runs on any computer", "It only runs on the specific machine it was written for", "It needs no electricity", "It depends on the user"],
        correct: 1
    },
    {
        q: "Low-Level Language (LLL) is another name for:",
        options: ["High Level Language", "Machine Language", "Artificial Intelligence", "Siri"],
        correct: 1
    },
    {
        q: "Which is a disadvantage of Machine Language?",
        options: ["Binary codes are hard to learn", "Debugging is difficult", "It is machine dependent", "All of these"],
        correct: 3
    },
    {
        q: "How many computer languages currently exist according to the text?",
        options: ["Over 100", "Over 500", "Over 700", "Over 1000"],
        correct: 2
    },

    // --- Second Generation: Assembly Language (AL) ---
    {
        q: "Assembly Language is which generation of computer language?",
        options: ["First", "Second", "Third", "Fourth"],
        correct: 1
    },
    {
        q: "Instead of binary digits, Assembly Language uses abbreviation forms called:",
        options: ["Icons", "Mnemonics", "Scripts", "Symbols"],
        correct: 1
    },
    {
        q: "Which mnemonic code is used for addition in Assembly Language?",
        options: ["PLUS", "SUM", "ADD", "AD"],
        correct: 2
    },
    {
        q: "Which mnemonic code is used for subtraction in Assembly Language?",
        options: ["MINUS", "LESS", "SUB", "SBT"],
        correct: 2
    },
    {
        q: "A program written in Assembly Language is called:",
        options: ["Object Code", "Source Code", "User Code", "Mnemonic Code"],
        correct: 1
    },
    {
        q: "What is the name of the translator that converts Assembly Language into Machine Language?",
        options: ["Compiler", "Interpreter", "Assembler", "Processor"],
        correct: 2
    },
    {
        q: "When Source Code is converted into Machine Language, it is then known as:",
        options: ["Source Code", "Object Code", "Program Code", "Binary Code"],
        correct: 1
    },
    {
        q: "Which generation of language is also considered a Low-Level Language (LLL)?",
        options: ["1GL and 2GL", "2GL and 3GL", "3GL and 4GL", "4GL and 5GL"],
        correct: 0
    },
    {
        q: "What is an advantage of Assembly Language over Machine Language?",
        options: ["It is machine independent", "It requires lesser number of instructions", "It is faster than ML", "It doesn't need a translator"],
        correct: 1
    },
    {
        q: "What is a disadvantage of Assembly Language?",
        options: ["It is slower than ML", "It is machine dependent", "Syntax is difficult to remember", "All of these"],
        correct: 3
    },

    // --- Third Generation: High-Level Languages (HLL) ---
    {
        q: "Third Generation Language is also known as:",
        options: ["LLL", "3GL", "4GL", "AI"],
        correct: 1
    },
    {
        q: "High-Level Languages (HLL) use simple ________ language to write instructions.",
        options: ["Binary", "Mnemonic", "English", "French"],
        correct: 2
    },
    {
        q: "Which of these is an example of a 3GL?",
        options: ["C++", "JAVA", "BASIC", "All of these"],
        correct: 3
    },
    {
        q: "HLL codes are 'machine independent'. This means they:",
        options: ["Only run on one computer", "Can run on different computers", "Do not need a computer", "Are part of the hardware"],
        correct: 1
    },
    {
        q: "Who was the first computer programmer?",
        options: ["Charles Babbage", "Ada Lovelace", "Lady Smith", "John von Neumann"],
        correct: 1
    },
    {
        q: "In what year did Ada Lovelace write the first computer program?",
        options: ["1824", "1842", "1942", "1852"],
        correct: 1
    },
    {
        q: "Which machine by Charles Babbage is considered the first 'programmable' computer?",
        options: ["Difference Engine", "Analytical Machine", "Calculator", "Abacus"],
        correct: 1
    },
    {
        q: "Which translator converts a program one instruction at a time?",
        options: ["Compiler", "Interpreter", "Assembler", "Converter"],
        correct: 1
    },
    {
        q: "Which translator converts the whole program into machine code in one go?",
        options: ["Interpreter", "Compiler", "Assembler", "CPU"],
        correct: 1
    },
    {
        q: "What is an advantage of High-Level Languages?",
        options: ["Machine dependent", "Hard to debug", "Easier to understand and debug", "Slower than ML"],
        correct: 2
    },

    // --- Fourth Generation: 4GL ---
    {
        q: "Fourth Generation Languages (4GL) use icons, graphical interfaces, and ________.",
        options: ["Binary numbers", "Symbolic representations", "Complex math", "Machine codes"],
        correct: 1
    },
    {
        q: "What is a primary goal of 4GL?",
        options: ["To be harder to use", "To reduce software development time and cost", "To use only binary digits", "To work only on AI"],
        correct: 1
    },
    {
        q: "In 4GL, the user just tells the system ________ needs to be done.",
        options: ["How", "What", "When", "Where"],
        correct: 1
    },
    {
        q: "Which of these is an example of a 4GL used for databases?",
        options: ["SQL", "BASIC", "Assembly", "Binary"],
        correct: 0
    },
    {
        q: "Common 4GL scripting languages include Perl, PHP, Ruby, and ________.",
        options: ["C", "Python", "PASCAL", "FORTRAN"],
        correct: 1
    },
    {
        q: "What is a disadvantage of 4GL?",
        options: ["Needs more space to be stored", "Easy to maintain", "High speed execution", "User-friendly"],
        correct: 0
    },
    {
        q: "Which language type is designed to be 'programmer-friendly'?",
        options: ["LLL", "Machine Language", "4GL", "Binary"],
        correct: 2
    },

    // --- Fifth Generation: 5GL ---
    {
        q: "Fifth Generation Language (5GL) is used to make smart programs like:",
        options: ["Calculators", "Robots and Talking Assistants", "Printers", "Keyboards"],
        correct: 1
    },
    {
        q: "5GL is mainly used in which field?",
        options: ["Accounting", "Artificial Intelligence (AI)", "Typewriting", "Printing"],
        correct: 1
    },
    {
        q: "Which language allows the computer to find the best way to a task by itself?",
        options: ["3GL", "4GL", "5GL", "2GL"],
        correct: 2
    },
    {
        q: "Siri and Alexa are examples of tools built with ________.",
        options: ["Machine Language", "5GL", "Assembly", "Low Level Languages"],
        correct: 1
    },
    {
        q: "Which feature defines 5GL?",
        options: ["It is procedural", "It is problem-solving based", "It uses mnemonics", "It is machine dependent"],
        correct: 1
    },
    {
        q: "5GL is a 'declarative language'. This means you tell the computer ________.",
        options: ["The steps to take", "What you want, not the steps", "Binary codes", "How to use electricity"],
        correct: 1
    },
    {
        q: "What is a disadvantage of 5GL?",
        options: ["Saves time", "Good for complex problems", "Difficult and expensive to develop", "Less coding needed"],
        correct: 2
    },
    {
        q: "Which generation follows logic and constraints to find answers?",
        options: ["1st Gen", "2nd Gen", "3rd Gen", "5th Gen"],
        correct: 3
    }
];
