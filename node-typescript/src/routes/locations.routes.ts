import { Router } from "express";
import knex from "../database/connection";

const locationsRouter = Router();

locationsRouter.post("/", async (request, response) => {
  const { name, email, whatsapp, latitude, longitude, city, uf, items } =
    request.body;

  const location = {
    image: "fake-image.png",
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
  };

  const transaction = await knex.transaction();

  const newIds = await transaction("locations").insert(location);

  const locationId = newIds[0];

  const locationItems = items.map(async (item_id: number) => {
    const selectedItem = await transaction("items").where("id", item_id).first();
    if (!selectedItem) {
      return response.status(400).json({message: "Item doesn't found"})
    }
    return {
      item_id,
      location_id: locationId,
    };
  });

  await transaction("location_items").insert(locationItems);

  await transaction.commit();

  return response.json({ id: locationId, ...location });
});

export default locationsRouter;
