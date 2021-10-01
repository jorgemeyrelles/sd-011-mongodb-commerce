db.produtos.createIndex({ descricao: "text" },
{ default_language: "portuguese" });
db.produtos.find({ $text: { $search: "frango hamburguer" } }).count();
// explicação tirada da pagina https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/