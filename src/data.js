const questions = [
    {
        id: 1,
        question: "Everything in react is a ________",
        options: [
            {
                id: 1,
                option: "Module",
                isAnswer: false
            },
            {
                id: 2,
                option: "Class",
                isAnswer: false
            },
            {
                id: 3,
                option: "Component",
                isAnswer: true
            },
            {
                id: 4,
                option: "Package",
                isAnswer: false
            }
        ]
    },
    {
        id: 2,
        question: "What is state in react",
        options: [
            {
                id: 5,
                option: "A persistant storage.",
                isAnswer: false
            },
            {
                id: 6,
                option: "An internal data store (object) of a component.",
                isAnswer: true
            },
            {
                id: 7,
                option: "A lifecycle method",
                isAnswer: true
            },
            {
                id: 8,
                option: "A single source of truth for a react application",
                isAnswer: false
            }
        ]
    },
    {
        id: 3,
        question: "Which of the following is true about React?",
        options: [
            {
                id: 9,
                option: "React is a Javascript library for building user interfaces",
                isAnswer: false
            },
            {
                id: 10,
                option: "React is used to build single page applications",
                isAnswer: false
            },
            {
                id: 11,
                option: "React allows us to create reusable UI components",
                isAnswer: false
            },
            {
                id: 12,
                option: "All of the above",
                isAnswer: true
            }
        ]
    },
    {
        id: 4,
        question: "A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword?",
        options: [
            {
                id: 13,
                option: "constructor",
                isAnswer: false
            },
            {
                id: 14,
                option: "class",
                isAnswer: true
            },
            {
                id: 15,
                option: "object",
                isAnswer: false
            },
            {
                id: 16,
                option: "dataObject",
                isAnswer: false
            }
        ]
    },
    {
        id: 5,
        question: "To create a class inheritance, use the ________ keyword",
        options: [
            {
                id: 17,
                option: "extend",
                isAnswer: false
            },
            {
                id: 18,
                option: "inherits",
                isAnswer: false
            },
            {
                id: 19,
                option: "extends",
                isAnswer: true
            },
            {
                id: 20,
                option: "dataObject",
                isAnswer: false
            }
        ]
    },
    {
        id: 6,
        question: "What is used in ReactJS to increase performance",
        options: [
            {
                id: 21,
                option: "Browser DOM",
                isAnswer: false
            },
            {
                id: 22,
                option: "Virtual DOM",
                isAnswer: true
            },
            {
                id: 23,
                option: "Both A and B",
                isAnswer: false
            },
            {
                id: 24,
                option: "None of the above",
                isAnswer: false
            }
        ]
    },
    {
        id: 7,
        question: "Which of the following below act as the input of a class-based component?",
        options: [
            {
                id: 25,
                option: "class",
                isAnswer: false
            },
            {
                id: 26,
                option: "factory",
                isAnswer: false
            },
            {
                id: 27,
                option: "render",
                isAnswer: false
            },
            {
                id: 28,
                option: "props",
                isAnswer: true
            }
        ]
    },
    {
        id: 8,
        question: "What is the declarative way to render a dynamic list of components based on values in an array?",
        options: [
            {
                id: 29,
                option: "Using the reduce array method",
                isAnswer: false
            },
            {
                id: 30,
                option: "Using the <Each /> method",
                isAnswer: false
            },
            {
                id: 31,
                option: "Using the Array.map() method",
                isAnswer: true
            },
            {
                id: 32,
                option: "Using a for/while loop",
                isAnswer: false
            }
        ]
    },
    {
        id: 9,
        question: "Name the function used to change the state of react component",
        options: [
            {
                id: 33,
                option: "this.setState",
                isAnswer: true
            },
            {
                id: 34,
                option: "this.props",
                isAnswer: false
            },
            {
                id: 35,
                option: "this.state{}",
                isAnswer: false
            },
            {
                id: 36,
                option: "Both A and B",
                isAnswer: false
            }
        ]
    },
    {
        id: 10,
        question: "At the highest level, React components have lifecycle events that fall into?",
        options: [
            {
                id: 37,
                option: "Initialization",
                isAnswer: false
            },
            {
                id: 38,
                option: "State/Property Updates",
                isAnswer: false
            },
            {
                id: 39,
                option: "Destruction",
                isAnswer: false
            },
            {
                id: 40,
                option: "All of these",
                isAnswer: true
            }
        ]
    },
];

export default questions;