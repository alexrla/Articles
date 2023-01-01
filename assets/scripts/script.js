// CKEditor
ClassicEditor
            .create( document.querySelector( '#editor' ) )
            .then( editor => {
                    console.log( editor );
            } )
            .catch( error => {
                    console.error( error );
            } );

// Pegando o ano atual
$('#year').text(new Date().getFullYear());