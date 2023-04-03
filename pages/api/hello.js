import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const newId = new ObjectId("573a1394f29313caabcdf67a");
    const movies = await db.collection("movies").find({ _id: newId }).toArray();
    console.log(movies);

    res.json(movies);
  } catch (e) {
    console.error(e);
  }
};
