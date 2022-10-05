import nc from "next-connect";
import { createRoom, getAllRooms } from "../../backend/controllers/room";
import dbConnect from "../../backend/lib/dbConnect";

const handler = nc();

dbConnect();

handler.post(createRoom);
handler.get(getAllRooms);

export default handler;
