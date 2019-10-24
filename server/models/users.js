const users = [
    {
        id: 0,
        username: "test", 
        password: "test",
        firstName: "Test",
        lastName: "Testing",
        age: "99",
        weight: "999",
        height: "9\'9\"",
        gender: "male", 
        exerciseList: [
            {
                date: "10/23/2019",
                exercise: "Sit-Ups",
                amount: 10
            }
        ]
    }
];
const util = {
    addUser(username, password, firstName, lastName, age, weight, height, gender, output)
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
            weight: weight,
            height: height,
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