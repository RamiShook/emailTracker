const mongoose = require('mongoose');
const trackerService = require('../services/tracker.service');

exports.createTracker = async (req, res) => {
  try {
    const { _id } = await trackerService.createTracker();
    const emailBody = `<img src= '${req.protocol}://${req.get(
      'host',
    )}/emailTrack/${_id}.png' style = 'display:none'>`;
    return res.status(201).json({
      _id,
      message: `Created Use this tag with your email ${emailBody}`,
    });
  } catch (error) {
    throw Error(error);
  }
};

exports.openTracker = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(404).send();
    const openedTracker = await trackerService.openTracker(req.params.id);
    if (!openedTracker) {
      return res.status(500).send('no tracker with this id');
    }
    console.log(`Email ${req.params.id} Just Opened`);

    res.writeHead(200, {
      'Content-Type': 'image/png',
    });
    res.send();
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};
