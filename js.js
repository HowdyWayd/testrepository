let types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];

$.each(types, (index, type) => {
    console.log(type)
    $('#types').append(`
        <label for="${type}">${type.toUpperCase()}:</label>
        <input type="radio" id="${type}" value="${type}" name="type">
    `)
})


$('#random').on('click', () => {
let params = $('#filter').serialize();
console.log(params)



    $.ajax(`https://bored.api.lewagon.com/api/activity/?${params}`, {
        dataType: 'json',
    success: (result) => {
        console.log(result)
        $('#result').html(`
            <p>Activity: ${result.activity}</p>
             <p>Price: ${result.price}</p>
             <p>Type: ${result.type}</p>
            `)
    },
    error: (xhr) => {
        console.log(xhr.statusText);
        $('#result').html(`
            <p>Error: ${xhr.statusText}</p>
            `)
    }
    })
})