const { Exercise, User } = require('../models/');
const exerciseList = [
  'Pull Ups',
  'Push Ups',
  'Lat Pull Downs',
  'Crunches',
  'Sit Ups',
];

const generateExercise = async userList => {
  const exerciseKinds = exerciseList.length;
  for (let i = 0; i <= 1000; i++) {
    //   create new exercise
    const exerciseInstance = {
      // random exercise name
      exerciseName: exerciseList[Math.floor(Math.random() * exerciseKinds)],
      username: userList[Math.floor(Math.random() * 21)].username,
      weight: Math.floor(Math.random() * 15 + 125),
      repetitions: Math.floor(Math.random() * 30 + 30),
      time: Math.floor(Math.random() * 30 + 10),
      createdAt: new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 181))),
    };
    // save data to User document's exercises
    await Exercise.create(exerciseInstance)
      .then(data =>
        User.findOneAndUpdate(
          { username: data.username },
          {
            $push: {
              exercises: data._id,
            },
          },
          { new: true }
        )
      )
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }
};

const seedExercise = async () => {
  // delete old data
  await Exercise.deleteMany({});
  //find all the user
  const userList = await User.find({}).select('username');
  //add exercises
  await generateExercise(userList);
};

module.exports = seedExercise;