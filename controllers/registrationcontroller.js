const Registration = require("../models/registration");

exports.registerStudent = async (req, res) => {

  try {

    const {
      studentName,
      email,
      phone,
      city,
      classId,
    } = req.body;

    const data = await Registration.create({

      studentName,
      email,
      phone,
      city,
      ClassId: classId,

      paymentProof: req.file
        ? req.file.filename
        : null,

    });

    res.status(201).json({
      success: true,
      message: "Registration Submitted",
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
exports.getRegistrations = async (req, res) => {

  try {

    const data = await Registration.findAll();

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
exports.approveRegistration = async (req, res) => {

  try {

    await Registration.update(
      {
        status: "Approved",
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({
      success: true,
      message: "Student Approved",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
exports.rejectRegistration = async (req, res) => {

  try {

    await Registration.update(
      {
        status: "Rejected",
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({
      success: true,
      message: "Student Rejected",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};