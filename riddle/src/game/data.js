import React, { createContext, useState } from 'react';

const ExamDataContext = createContext();

export const ExamDataProvider = ({ children }) => {

    const [level,setLevel]=useState(0);
    const [examData, setexamData] = useState([
        {
            'level': 0,
            'content': [{
                "question": "1 An area of the production, distribution and trade, as well as consumption of goods and services.",
                "options": ["Economy", "Animal feed", "Environment", "Compost"],
                "correct_answer": "Economy",
            },
            {
                "question": "Natural process of recycling organic material to make fertilizer",
                "options": ["Animal feed", "Compost", "Environment", "3rd biggest country"],
                "correct_answer": "Compost",
            },
            {
                "question": "Food given to livestock",
                "options": ["Methane ", "Animal feed", "Environment", "3rd biggest country"],
                "correct_answer": "Animal feed"
            },
            {
                "question": "Natural world that involves livening and non-living things",
                "options": ["Methane ", "Animal feed", "3rd biggest country", "Environment"],
                "correct_answer": "Environment",
            },
            {
                "question": "Colourless, odourless invisible gas that affects the Earth’s temperature and climate system.",
                "options": ["Methane", "Animal feed", "3rd biggest country", "Environment"],
                "correct_answer": "Methane",
            },
            {
                "question": "Food waste",
                "options": ["Methane ", "Animal feed", "3rd biggest country", "Compost"],
                "correct_answer": "3rd biggest country",
            }]
        },
        {
            'level': 1,
            'content': [{
                "question": "2 An area of the production, distribution and trade, as well as consumption of goods and services.",
                "options": ["Economy", "Animal feed", "Environment", "Compost"],
                "correct_answer": "Economy",

            },
            {
                "question": "Natural process of recycling organic material to make fertilizer",
                "options": ["Animal feed", "Compost", "Environment", "3rd biggest country"],
                "correct_answer": "Compost",

            },
            {
                "question": "Food given to livestock",
                "options": ["Methane ", "Animal feed", "Environment", "3rd biggest country"],
                "correct_answer": "Animal feed"
            },
            {
                "question": "Natural world that involves livening and non-living things",
                "options": ["Methane ", "Animal feed", "3rd biggest country", "Environment"],
                "correct_answer": "Environment",

            },
            {
                "question": "Colourless, odourless invisible gas that affects the Earth’s temperature and climate system.",
                "options": ["Methane", "Animal feed", "3rd biggest country", "Environment"],
                "correct_answer": "Methane",

            },
            {
                "question": "Food waste",
                "options": ["Methane ", "Animal feed", "3rd biggest country", "Compost"],
                "correct_answer": "3rd biggest country",

            }]
        },
        {
            'level': 2,
            'content': [{
                "question": "3 An area of the production, distribution and trade, as well as consumption of goods and services.",
                "options": ["Economy", "Animal feed", "Environment", "Compost"],
                "correct_answer": "Economy",

            },
            {
                "question": "Natural process of recycling organic material to make fertilizer",
                "options": ["Animal feed", "Compost", "Environment", "3rd biggest country"],
                "correct_answer": "Compost",

            },
            {
                "question": "Food given to livestock",
                "options": ["Methane ", "Animal feed", "Environment", "3rd biggest country"],
                "correct_answer": "Animal feed"
            },
            {
                "question": "Natural world that involves livening and non-living things",
                "options": ["Methane ", "Animal feed", "3rd biggest country", "Environment"],
                "correct_answer": "Environment",

            },
            {
                "question": "Colourless, odourless invisible gas that affects the Earth’s temperature and climate system.",
                "options": ["Methane", "Animal feed", "3rd biggest country", "Environment"],
                "correct_answer": "Methane",

            },
            {
                "question": "Food waste",
                "options": ["Methane ", "Animal feed", "3rd biggest country", "Compost"],
                "correct_answer": "3rd biggest country",

            }]
        },
        {
            'level': 3,
            'content': [{
                "question": "3 An area of the production, distribution and trade, as well as consumption of goods and services.",
                "options": ["Economy", "Animal feed", "Environment", "Compost"],
                "correct_answer": "Economy",

            },
            {
                "question": "Natural process of recycling organic material to make fertilizer",
                "options": ["Animal feed", "Compost", "Environment", "3rd biggest country"],
                "correct_answer": "Compost",

            },
            {
                "question": "Food given to livestock",
                "options": ["Methane ", "Animal feed", "Environment", "3rd biggest country"],
                "correct_answer": "Animal feed"
            },
            {
                "question": "Natural world that involves livening and non-living things",
                "options": ["Methane ", "Animal feed", "3rd biggest country", "Environment"],
                "correct_answer": "Environment",

            },
            {
                "question": "Colourless, odourless invisible gas that affects the Earth’s temperature and climate system.",
                "options": ["Methane", "Animal feed", "3rd biggest country", "Environment"],
                "correct_answer": "Methane",

            },
            {
                "question": "Food waste",
                "options": ["Methane ", "Animal feed", "3rd biggest country", "Compost"],
                "correct_answer": "3rd biggest country",

            }]
        },
        {
            'level': 4,
            'content': [{
                "question": "3 An area of the production, distribution and trade, as well as consumption of goods and services.",
                "options": ["Economy", "Animal feed", "Environment", "Compost"],
                "correct_answer": "Economy",

            },
            {
                "question": "Natural process of recycling organic material to make fertilizer",
                "options": ["Animal feed", "Compost", "Environment", "3rd biggest country"],
                "correct_answer": "Compost",

            },
            {
                "question": "Food given to livestock",
                "options": ["Methane ", "Animal feed", "Environment", "3rd biggest country"],
                "correct_answer": "Animal feed"
            },
            {
                "question": "Natural world that involves livening and non-living things",
                "options": ["Methane ", "Animal feed", "3rd biggest country", "Environment"],
                "correct_answer": "Environment",

            },
            {
                "question": "Colourless, odourless invisible gas that affects the Earth’s temperature and climate system.",
                "options": ["Methane", "Animal feed", "3rd biggest country", "Environment"],
                "correct_answer": "Methane",

            },
            {
                "question": "Food waste",
                "options": ["Methane ", "Animal feed", "3rd biggest country", "Compost"],
                "correct_answer": "3rd biggest country",

            }]
        },
        {
            'level': 5,
            'content': [{
                "question": "3 An area of the production, distribution and trade, as well as consumption of goods and services.",
                "options": ["Economy", "Animal feed", "Environment", "Compost"],
                "correct_answer": "Economy",

            },
            {
                "question": "Natural process of recycling organic material to make fertilizer",
                "options": ["Animal feed", "Compost", "Environment", "3rd biggest country"],
                "correct_answer": "Compost",

            },
            {
                "question": "Food given to livestock",
                "options": ["Methane ", "Animal feed", "Environment", "3rd biggest country"],
                "correct_answer": "Animal feed"
            },
            {
                "question": "Natural world that involves livening and non-living things",
                "options": ["Methane ", "Animal feed", "3rd biggest country", "Environment"],
                "correct_answer": "Environment",

            },
            {
                "question": "Colourless, odourless invisible gas that affects the Earth’s temperature and climate system.",
                "options": ["Methane", "Animal feed", "3rd biggest country", "Environment"],
                "correct_answer": "Methane",

            },
            {
                "question": "Food waste",
                "options": ["Methane ", "Animal feed", "3rd biggest country", "Compost"],
                "correct_answer": "3rd biggest country",

            }]
        },
        {
            'level': 6,
            'content': [{
                "question": "3 An area of the production, distribution and trade, as well as consumption of goods and services.",
                "options": ["Economy", "Animal feed", "Environment", "Compost"],
                "correct_answer": "Economy",

            },
            {
                "question": "Natural process of recycling organic material to make fertilizer",
                "options": ["Animal feed", "Compost", "Environment", "3rd biggest country"],
                "correct_answer": "Compost",

            },
            {
                "question": "Food given to livestock",
                "options": ["Methane ", "Animal feed", "Environment", "3rd biggest country"],
                "correct_answer": "Animal feed"
            },
            {
                "question": "Natural world that involves livening and non-living things",
                "options": ["Methane ", "Animal feed", "3rd biggest country", "Environment"],
                "correct_answer": "Environment",

            },
            {
                "question": "Colourless, odourless invisible gas that affects the Earth’s temperature and climate system.",
                "options": ["Methane", "Animal feed", "3rd biggest country", "Environment"],
                "correct_answer": "Methane",

            },
            {
                "question": "Food waste",
                "options": ["Methane ", "Animal feed", "3rd biggest country", "Compost"],
                "correct_answer": "3rd biggest country",

            }]
        },
    ]);
   

  return (
    <ExamDataContext.Provider value={{ examData, setexamData, level,setLevel}}>
      {children}
    </ExamDataContext.Provider>
  );
};

export default ExamDataContext;