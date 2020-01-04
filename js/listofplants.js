// $(document).ready(function () {

    
    
//     var row = "";
//     $('#dataTable').DataTable({
//         "ajax":{
//             "url": "https://plantalife-backend.herokuapp.com/getPlantData",
//             "type": "POST",
//             "datatype": "json",
//             "data": {},
//             success: function (data) {
//                 console.log(data.message);
//                 var len = data.message.length;
//                 console.log(len)
//                 for (var i = 0; i < len; i++) {
//                     row += "<tr><td>" + data.message[i].plant_type + "</td>" + "<td>" + data.message[i].plant_name + "</td>" + "<td>" + data.message[i].plant_price + "</td> " + "<td>" + data.message[i].plant_status + "</td> " + '<td><button>Edit</button> / <button onclick="'+productDelete(data.message[i].plant_no)+'">Delete</button></td></tr>'
    
//                 };
               
//                 $("#tbDetails").append(row);
//             }
    
    
    
//         }
//     });
    
//     function productDelete(plant) {
//         console.log("Do you really want to delete")
//         // $(ctl).parents("tr").remove();
//       }
   
    
// })

$(document).ready(function()
{
    $.ajax({
        type: "GET",
        async: false,
        url: "https://plantalife-backend.herokuapp.com/getAllPlantData",        
        success: myCallback,
        error: function (e) {
          
          console.log("ERROR : ", e);
          Notiflix.Notify.Failure("Some Error Occured");
        }
        
      });
      function myCallback(response) {
        data = response.message;        
        if(data == 'No Data Found'){
            Notiflix.Notify.Warning("No Data Found","Please Try Again","OK");
          }
      }
    


	//--->create data table > start
	var tbl = '';
	tbl +='<table class="table table-hover">'

		//--->create table header > start
		tbl +='<thead>';
			tbl +='<tr>';
			tbl +='<th>Plant Type</th>';
			tbl +='<th>Plant Name</th>';
			tbl +='<th>Price</th>';
            tbl +='<th>Status</th>';
            tbl +='<th>Action</th>';
			tbl +='</tr>';
		tbl +='</thead>';
		//--->create table header > end

		
		//--->create table body > start
		tbl +='<tbody>';

			//--->create table body rows > start
			$.each(data, function(index, val) 
			{
                console.log("table data",data)
				//you can replace with your database row id
				var row_id = val['plant_no']
				console.log("plant_no",row_id)
				//loop through ajax row data
				tbl +='<tr row_id="'+row_id+'">';
					tbl +='<td ><div class="row_data" edit_type="click" col_name="plant_type">'+val['plant_type']+'</div></td>';
					tbl +='<td ><div class="row_data" edit_type="click" col_name="plant_name">'+val['plant_name']+'</div></td>';
                    tbl +='<td ><div class="row_data" edit_type="click" col_name="plant_price">'+val['plant_price']+'</div></td>';
                    tbl +='<td ><div class="row_data" edit_type="click" col_name="plant_status">'+val['plant_status']+'</div></td>';

					//--->edit options > start
					tbl +='<td>';
					 
						// tbl +='<span class="btn_edit" > <a href="#" class="btn btn-link " row_id="'+row_id+'" ><i class="fa fa-edit"></i></a> </span>';

						//only show this button if edit button is clicked
						tbl +='<span class="btn_del"> <a href="#" class="btn btn-link"  row_id="'+row_id+'"><i class="fa fa-trash" aria-hidden="true"></i></a></span>';
						

					tbl +='</td>';
					//--->edit options > end
					
				tbl +='</tr>';
			});

			//--->create table body rows > end

		tbl +='</tbody>';
		//--->create table body > end

	tbl +='</table>'	
	//--->create data table > end

	//out put table data
	$(document).find('.tbl_user_data').html(tbl);

	$(document).on('click', '.btn_del', function(event) 
	{
		event.preventDefault();
	 var tbl_row = $(this).closest('tr');

		var row_id = tbl_row.attr('row_id');
		console.log("id",row_id)
		$.ajax({
			url: "https://plantalife-backend.herokuapp.com/removePlantData",
			type: "POST",
			datatype: "json",
			data: {"plant_no":row_id},
			success: function (data) {
			  data = data.message;
			  console.log("plant data", data);
			  if(data == 'success'){
				
				Notiflix.Report.Success('Data Removed Succesfully', 'click OK to continue' ); 
			  }       
			  $('#loading').hide();
			  $('#loading').css({ 'position': '' });
			},
			 error: function (e) {
			  $('#loading').hide();
			  $('#loading').css({ 'position': '' });
			  console.log("ERROR : ", e);
			  Notiflix.Report.Warning( 'Network Issue', 'Please Check Your Connection', 'OK' ); 
			}
		  });
	

	});
	

});