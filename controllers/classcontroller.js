const Class = require("../models/class");

exports.createClass = async (req, res) => {

  try {

    const data = await Class.create(req.body);

    res.status(201).json({
      success: true,
      message: "Class Created",
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

exports.getClasses = async (req, res) => {

  try {

    const data = await Class.findAll();

    res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

exports.updateClass = async (req, res) => {

  try {

    await Class.update(req.body, {
      where: { id: req.params.id },
    });

    res.status(200).json({
      success: true,
      message: "Class Updated",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

exports.deleteClass = async (req, res) => {

  try {

    await Class.destroy({
      where: { id: req.params.id },
    });

    res.status(200).json({
      success: true,
      message: "Class Deleted",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};