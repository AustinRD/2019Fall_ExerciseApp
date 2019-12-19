module.exports.Profile = {
    profileData: [
        {
            id: 0,
            username: 'test',
            password: 'password',
            firstname: 'Tes',
            lastname: 'ting',
            height: 'tall',
            weight: 'average',
            gender: 'male',
            age: 99,
            exerciseLog: [
                {
                    date: '11-12-1314',
                    time: '1:11',
                    exercise: 'Squats',
                    amount: '20 reps'
                },
                {
                    date: '12-13-1415',
                    time: '2:22',
                    exercise: 'Jog',
                    amount: '20 min'
                }
            ],
            friendsList: ["Friend", "Friend2"]
        },
        {
            id: 1,
            username: 'test2',
            password: 'password',
            firstname: 'Test',
            lastname: 'ing',
            height: 'short',
            weight: 'average',
            gender: 'male',
            age: 99,
            exerciseLog: [
                {
                    date: '11-12-1314',
                    time: '1:11',
                    exercise: 'Squats',
                    amount: '20 reps'
                },
                {
                    date: '12-13-1415',
                    time: '2:22',
                    exercise: 'Jog',
                    amount: '20 min'
                }
            ],
            friendsList: ["Friend3", "test"]
        }
    ],
    id: 0,
    Users_Name: "",
    ExerciseLog: "",
    Friends: "",

    Add_Exercise(exercise)
    {
        profileData[id].exerciseLog.push(exercise);
    },
    Add_Friend(friend)
    {
        profileData[id].friendsList.push(friend);
    },
    Login(username, password)
    {
        if(this.profileData.find(x=>x.username == username))
        {
            if(profileData[id].password == password)
            {
                return userID;
            }
            else
            {
                //Wrong password
                return null;
            }
        }
        else
        {
            //Wrong username
            return null;
        }
    },
    ChangePassword(username, prevPassword, newPassword)
    {
        
    },
    addUser(username, password, firstname, lastname, height, weight, gender, age)
    {
        
    },
    async searchExercises(input)
    {
        var currentLog = profileData[0].exerciseLog;
        
    }

}