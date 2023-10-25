describe('Example Componenet', () => {
  test( 'Debe ser mayor a 10', () => {
    
    //Arreglar
    let value = 5;

    //Estimulo
    value += 2;

    //Aserción
    if(value > 10){
      //TODO bien
    } else {
      throw `${value} no es mayor a 10`
    }
  })
})