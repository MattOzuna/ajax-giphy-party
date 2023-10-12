console.log("Let's get this party started!");
let search = $('#search').val()


let appendGif = async function(e){
    e.preventDefault();
    let url = await axios.get("http://api.giphy.com/v1/gifs/search", 
            {params: {
            api_key: 's99UehhPyYlWArat8kQ2DNkhZ0CzsQ3D',
            q: $('#search').val()}});
    let $newGif = $('<img>', {src: url.data.data[0].images.original.url});
    $('#giphy-container').append($newGif);
    $('#search').val('');
}

let removeGifs = function(e){
    e.preventDefault();
    $('#giphy-container').html('')
}



$('#submit').on('click', appendGif)
$('#delete').on('click', removeGifs)