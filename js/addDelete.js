


$(document).ready(function () {

    $("#btnSubmit").click(function (event) {

        var form = $('#fileUploadForm')[0];

        var data = new FormData(form);

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
             url: "http://localhost:5000/uploadPlantData",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            success: function (data) {

               console.log(data)
            },
        })
    })
})


$(document).ready(function () { 
    // $('#dataTable').DataTable({});
    var row = "";
    $.ajax({ 
            url: "http://localhost:5000/getPlantData",  
            type: "GET",  
            datatype: "json",  
            data:{},
            success: function (data) {
                console.log(data.message);
                var len = data.message.length;
                console.log(len)
                for(var i=0;i<len;i++){
                    row += "<tr><td>"+data.message[i].plant_type + "</td>" + "<td>"+data.message[i].plant_name + "</td>" +"<td>" +data.message[i].plant_price + "</td> "+"<td>" +data.message[i].plant_status + "</td> "+"<td> Edit/Delete  </td></tr> ";
                    
                    };
                    
                    $("#tbDetails").append(row);
                    }
            
      
    
});  
})   

function anotherPage(){
    window.location.href='/listofplants.html';
}
