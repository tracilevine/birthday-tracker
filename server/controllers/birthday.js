const Birthday = require("../db/models/birthday");

const getAllBirthdays =(req,res)=>{
    Birthday.find()
    .then((birthday) => res.json(birthday))
    .catch((err)=>res.status(500).json("Error: " + err));
}

const addBirthday = (req, res) => {
    const birthday = new Birthday(req.body);
    birthday
      .save()
      .then((resp) => res.status(201).json(resp))
      .catch((err) => res.status(500).json("Error: " + err));
  };

  const getBirthdayById = (req,res) => {
      const filter = req.params.id; 
      Birthday.findById(filter)
      .then ((resp)=> res.json(resp))
      .catch((err)=>res.status(500).json("Error: " + err));
  }
  const updateBirthday = (req, res) => {
    const filter = req.params.id;
    const update = req.body;
  
    Birthday.findOneAndUpdate(filter, update, { new: true })
      .then((resp) => res.json(resp))
      .catch((err) => res.status(500).json("Error: " + err));
  };


  const deleteBirthdayById = (req, res) => {
    Birthday.findByIdAndDelete(req.params.id)
      .then((birthday) => {
        console.log(birthday);
        if (!birthday) {
          return res.status(404).json("Error: Birthday not found!");
        }
  
        res.status(204).json(birthday);
      })
      .catch((err) => {
        res.status(500).json("Error: " + err);
      });
  };


module.exports = {
    getAllBirthdays,
    addBirthday,
    getBirthdayById,
    updateBirthday,
    deleteBirthdayById,
  };
  