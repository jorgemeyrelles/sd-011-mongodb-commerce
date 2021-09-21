db.produtos.updateMany(
  { valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $gte: 40 } } } },
  { $push: { tags: "muito sódio" } },
);

db.produtos.find({}, { nome: 1, _id: 0, tags: 1 });