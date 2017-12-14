$(function(){
  $(document).ready(function(){
    $("#viewClient").click();
    document.getElementById("numClient").innerHTML = clients.length;
});
  $('#viewClient').on('click',function(){
    $.ajax({
      url:'/clients',
      contentType:'application/json',
      success:function(response){
          var tbody=$('tbody');
          var thead=$('thead');
          tbody.html('');
          thead.html('');
          thead.append('\
          <th>ID</th>\
      			<th>First Name</th>\
      				<th>Last Name</th>\
      				<th>Email ID</th>\
      				<th>Phone No</th>\
      				<th>Business Name</th>\
      				<th>Account No</th>\
      				<th>Street1</th>\
      				<th>Street2</th>\
      				<th>City</th>\
      				<th>State</th>\
      				<th>Country</th>\
      				<th>Pincode</th>\
      				<th>Actions</th>\
          ')
          response.clients.forEach(function(client){
              tbody.append('\
              <tr>\
              <td class="id">'+client.id+'</td>\
              <td><input type="text" class="fname" value='+client.fname+' required></td>\
              <td><input type="text" class="lname" value='+client.lname+'></td>\
              <td><input type="email" class="email" value='+client.email+'></td>\
              <td><input type="number" class="phno" value='+client.phno+'></td>\
              <td><input type="text" class="bname" value='+client.bname+'></td>\
              <td><input type="number" class="bnum" value='+client.bnum+'></td>\
              <td><input type="text" class="street1" value='+client.address.street1+'></td>\
              <td><input type="text" class="street2" value='+client.address.street2+'></td>\
              <td><input type="text" class="city" value='+client.address.city+'></td>\
              <td><input type="text" class="state" value='+client.address.state+'></td>\
              <td><input type="text" class="country" value='+client.address.country+'></td>\
              <td><input type="number" class="pincode" value='+client.address.pincode+'></td>\
              <td>\
              <button class="updateClient edit">Edit</button></td>\
              <td><button class="deleteClient delete">Delete</button>\
              </td>\
              </tr>\
              ');
          });
        }

    });
  });

$('#add-form').on('submit',function(event){
  event.preventDefault();
  console.log("add");
  var fname=$('#fname');
  var lname=$('#lname');
  var email=$('#email');
  var phno=$('#phno');
  var bname=$('#bname');
  var bnum=$('#bnum');
  var street1=$('#street1');
  var street2=$('#street2');
  var city=$('#city');
  var state=$('#state');
  var country=$('#country');
  var pincode=$('#pincode');
  $.ajax({

    url:'/clients',
    method:'POST',
    contentType:'application/json',
    data:JSON.stringify({fname:fname.val(),lname:lname.val(),email:email.val(),
      phno:phno.val(),bname:bname.val(),bnum:bnum.val(),street1:street1.val(),street2:street2.val(),city:city.val(),
      state:state.val(),country:country.val(),pincode:pincode.val()}),
      success:function(response){
        alert(response);
      }

  });

});

$('table').on('click','.updateClient',function(){
var row=$(this).closest('tr');
var id=row.find('.id').text();
var fname=row.find('.fname').val();
var lname=row.find('.lname').val();
var email=row.find('.email').val();
var bname=row.find('.bname').val();
var phno=row.find('.phno').val();
var bnum=row.find('.bnum').val();
var city=row.find('.city').val();
var state=row.find('.state').val();
var country=row.find('.country').val();
var street2=row.find('.street2').val();
var street1=row.find('.street1').val();
var pincode=row.find('.pincode').val();
console.log("id : "+id+" "+fname);
$.ajax({
url:'/clients/'+id,
method:'PUT',
contentType:'application/json',
data:JSON.stringify({id:id,fname:fname,lname:lname,email:email,phno:phno,bname:bname,bnum:bnum,street1:street1,street2:street2,city:city,state:state,country:country,pincode:pincode}),
success:function(response){
  $("#viewClient").click();
}
});

});

$('table').on('click','.deleteClient',function(){
var row=$(this).closest('tr');
var id=row.find('.id').text();
$.ajax({
url:'/clients/'+id,
method:'DELETE',
contentType:'application/json',
success:function(response){
$("#viewClient").click();
}
});

});


});
