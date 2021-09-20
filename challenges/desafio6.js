db.produtos.updateMany(
  {
    nome: { $in: ["Big Mac", "Quarteirão com Queijo"] },
    ingredientes: { $not: { $in: ["bacon"] } }, 
  },
  { $push: { ingredientes: "bacon" } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);