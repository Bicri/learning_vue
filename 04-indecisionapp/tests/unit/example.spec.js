describe('Example Componenet', () => {
  test( 'Debe ser mayor a 10', () => {
    
    //Arreglar
    let value = 10;

    //Estimulo
    value += 2;

    //Aserción
    expect( value ).toBeGreaterThan( 10 )
  })
})