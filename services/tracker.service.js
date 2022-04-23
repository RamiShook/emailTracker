const Tracker = require('../models/tracker.model');

exports.createTracker = async () => {
  try {
    const tracker = await Tracker.create({});
    return tracker;
  } catch (err) {
    throw Error('error creating tracker');
  }
};

exports.openTracker = async (trackerId) => {
  try {
    // const openedTracker = await Tracker.findById(trackerId);
    // if (!openedTracker) return;
    // openedTracker.opened = true;
    // openedTracker.openedAt.push(new Date());
    const openedTracker = await Tracker.findByIdAndUpdate(trackerId, {
      opened: true,
      $addToSet: { openedAt: new Date() },
    });
    return openedTracker;
  } catch (error) {
    throw Error(error);
  }
};
