const { CustomError } = require('./CustomError');
const profileData = require('./Users');

module.exports.Profile = {
    profileData,
    id: profileData[0].id,
    Users_Name: profileData[0].firstname,
    ExerciseLog: profileData[0].exerciseLog,
    Friends: profileData[0].friendsList,

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
    }
}