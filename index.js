const obj1 = {
    nome: "victor",
    idade: "24"
};

const obj2 = {
    endereco: "Rua Teste"
};
const restObjetos = {...obj1, ...obj2};

console.log(typeof restObjetos);