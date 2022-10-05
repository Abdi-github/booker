import Room from "../models/room";

export const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json({ data: room });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};

export const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    console.log("ENV ___ BACKEND==========", process.env.MONGODB_URI);
    res.status(200).json({ rooms });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
