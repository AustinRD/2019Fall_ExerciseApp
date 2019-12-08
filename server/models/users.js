const users = [
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
];

module.exports = users;