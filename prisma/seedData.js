const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');

const categories = [
    {
        question_id: uuidv4(),
        question: "is this a test0?",
        answer: "yesn",
        category: "TESTINGn",
        points: 1000,
        difficulty: 10,                     
    },
    {
        question_id: uuidv4(),
        question: "is this a test2?",
        answer: "yesn",
        category: "TESTINGn",
        points: 1000,
        difficulty: 10,                     
    },
    {
        question_id: uuidv4(),
        question: "is this a test3?",
        answer: "yesn",
        category: "TESTINGn",
        points: 1000,
        difficulty: 10,                     
    },
    {
        question_id: uuidv4(),
        question: "is this a test4?",
        answer: "yesn",
        category: "TESTINGn",
        points: 1000,
        difficulty: 10,                     
    },
    {
        question_id: uuidv4(),
        question: "is this a test5?",
        answer: "yesn",
        category: "TESTINGn",
        points: 1000,
        difficulty: 10,                     
    },
    {
        question_id: uuidv4(),
        question: "is this a test6?",
        answer: "yesn",
        category: "TESTINGn",
        points: 1000,
        difficulty: 10,                     
    },
];

module.exports = {categories};