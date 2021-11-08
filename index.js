// JSON notation
var persona = {
    'Nombre' : 'Fernando',
    'Apellido' : 'Gekdyszman',
    'Edad' : 43,
    'Hijos': [
        {
            'Nombre' : 'Jere',
            'Edad' : 17
        }, 
        {
            'Nombre' : 'Noé',
            'Edad' : 10
        }, 
        {
            'Nombre' : 'Penelope',
            'Edad' : 1
        }
    ],
    'Pareja' : {
        'Nombre' : 'Amalia',
        'Edad' : 40
    }
};


console.log('El nombre de mi persona es', persona.Nombre);
console.log('El apellido de mi persona es', persona.Apellido);
console.log('La edad de mi persona es', persona.Edad);
console.log('La pareja de', persona.Nombre, 'se llama', persona.Pareja.Nombre)
console.log('Los hijos se llaman');
persona.Hijos.forEach(hijo => {
    console.log(hijo.Nombre);
});


for (var i = 0; i < persona.Hijos.length; i++)
{
    persona.Hijos[i].Nombre;
}