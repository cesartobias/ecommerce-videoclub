let obj = [
    {id: '1', name: 'El Apostol', categoria: 'gore',stock: '100',price: '1500',  foto:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apostle-1624132552.jpeg'},
    {id: '2', name: 'Demonic', categoria: 'gore', stock: '10',price: '100',  foto:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/demonic-1624132688.jpeg'},
    {id: '3', name: '1922', categoria: 'sobre natural',stock: '1000',price: '150',  foto:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/0-sh8inoczrqukxr5c-1624570240.jpg'},
    {id: '4', name: 'El Conjuro', categoria: 'sobre natural',stock: '50',price: '500',  foto:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-conjuring-1624134212.jpeg'},
    {id: '5', name: 'La Posesion', categoria: 'remeras',stock: '80',price: '50',  foto:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-possession-1624134377.jpeg'}
]

export const data = (id) => {
      return new Promise( ( res, err ) => {
        setTimeout(()=>{
            res(obj)
        }, 1000)
    })
}
