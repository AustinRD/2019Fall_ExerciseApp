export const App_Server = {
    Users: [],
    Profile_Picture: [],
    
}

export const App_Client = {
    User: "Austin",
    Friends: [
        {name: "Michael"},
        {name: "Chase"},
        {name: "Angelina"},
    ],
    Exercise_Log: ["Pushups 10reps"],
    Health_Information: [ 
        {age: "Age"},
        {height: "Height"},
        {weight: "Weight"},
        {gender: "Gender"},
    ]
}

export class User {
    name;
    exercise_log;
    health_info;
}