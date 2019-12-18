exports.createTrainingRoutine = (req, res) => {
    try {
        // do some stuff with your db
        console.log('doing stuff');
        res.status(201).send('tasty tasty wheat');
    } catch (err) {
        res.status(400).send();
    }
};
