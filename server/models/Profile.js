const { CustomError } = require('./CustomError');
const users = require('./Users');

module.exports.Profile = {
    id: users[0].id,
    Users_Name: users[id].firstname,
    ExerciseLog: users[id].exerciseLog,
    Friends: users[id].friendsList,

    Add_Exercise(exercise)
    {
        users[id].exerciseLog.push(exercise);
    },
    Add_Friend(friend)
    {
        users[id].friendsList.push(friend);
    },
}