const users = [
    {
        id: 0,
        username: "Username", 
        password: "Password",
        firstName: "First Name",
        lastName: "Last Name",
        age: "Age",
        height: "Height",
        weight: "Weight",
        gender: "Gender", 
        exerciseList: [
            {
                date: "Date",
                exercise: "Sample Exercise",
                amount: "10 Reps/Mins/Laps"
            }
        ]
    },
    {
        id: 1,
        username: "Username1", 
        password: "Password1",
        firstName: "First Name1",
        lastName: "Last Name1",
        age: "Age1",
        height: "Height1",
        weight: "Weight1",
        gender: "Gender1", 
        exerciseList: [
            {
                date: "Date",
                exercise: "Sample Exercise",
                amount: "10 Reps/Mins/Laps"
            }
        ]
    }
];
const util = {
    addUser(username, password, firstName, lastName, age, height, weight, gender, output)
    {
        id = users.length;
        var newUser = 
        {
            id: id,
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            age: age,
            height: height,
            weight: weight,
            gender: gender
        };
        users.push(newUser);
        output.send(newUser);
    },
    getUser(userID, output)
    {
        output.send(users[userID]);
    },
    getAllUsers(output)
    {
        output.send(users);
    },
    editUser(userID, username, password, firstName, lastName, age, weight, height, gender, output)
    {
        if(username != null)
        {
            users[userID].username = username;
        }
        if(password != null)
        {
            users[userID].password = password;
        }
        if(firstName != null)
        {
            users[userID].firstName = firstName;
        }
        if(lastName != null)
        {
            users[userID].lastName = lastName;
        }
        if(age != null)
        {
            users[userID].age = age;
        }
        if(weight != null)
        {
            users[userID].weight = weight;
        }
        if(height != null)
        {
            users[userID].height = height;
        }
        if(gender != null)
        {
            users[userID].gender = gender;
        }
        output.send(users[userID]);
    },
    deleteUser(userID, output)
    {
        output.send(users[userID].firstName + " removed.");
        users.splice(userID, 1);
    }
}
module.exports = util;