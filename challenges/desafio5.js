db.produtos.updateMany(
    { $nor: [{ nome: "McChicken" }, { ingredientes: "ketchup" }] },
    { $push: { ingredientes: "ketchup" } },
  );

db.produtos.find(
    {},
    { nome: 1, ingredientes: 1, _id: 0 },
  );
