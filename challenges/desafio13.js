db.produtos.updateMany({ valoresNutricionais: {$eleMatch: { tipo: "sódio", percentual: { $gte: 40 } } } },
{ push: { tags: { $each: ["Muito sódio"] } } });
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });