<?php session_start();?>
<html>
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  form {border: 3px solid #f1f1f1;}
  background-color: black;
}
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}  

* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
  background-color: white;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 550px;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.registerbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
.btn-group button {
  background-color: #301934; /* Green background */
  border: 2px solid green; /* Green border */
  color: white; /* White text */
  padding: 15px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  width: 50%; /* Set a width if needed */
  display: block; /* Make the buttons appear below each other */
  

margin-left: 25%;
margin-right: 25%
  
 
}

.btn-group button:not(:last-child) {
  border-bottom: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 550px;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  float: center;
 
  

}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}




</style>
   <title>Login</title>
   <head>
   <meta name="viewport" content="width=device-width, initial-scale=1">
      <a href="index.php">
      </a>
   </head>
   <?php
      if(isset($_POST['Submit'])){
          $loginData = array('admin'=>'password');
          /* /<form style="margin-top: 192px;text-align:center;color: white;" class="form-grp clearfix grpelem" id="widgetu127" method="post" name="loginForm" enctype="multipart/form-data" action="" data-sizepolicy="fluidWidth" data-pintopage="page_fluidx">            <!-- none box -->-->
          <!--//<?php if(isset($response)){?>-->*/
          if(isset($_POST['username'])){
              $username =  $_POST['username'];
          }

          else{
              $username = '';
              /* <!-- //<div class="position_content" id="widgetu127_position_content"> 
                 <!--// <?php echo $respons -->*/
          }

          if(isset($_POST['password'])){
              $password =  $_POST['password'];

            /*  <!--//<div class="position_content" id="widgetu127_position_content">-->
             <!--// <?php echo $response -->*/
          }
          else{
              $password = '';
          }
/*//<body background="images/my%20post%20(10).jpg?crc=17566081">
    //  <div class="clearfix borderbox" id="page">*/
          if(isset($loginData[$username]) && $loginData[$username] == $password){
              $_SESSION['userData']['userName'] = $loginData[$username];
              header("location:protected.php");
              exit;
          }else {
             $response = "<span style='color:red'>Invalid credentials</span>";
          }
      }
      ?>
   <body background="images/my%20post%20(10).jpg?crc=17566081">
      <div class="clearfix borderbox" id="page">
         <!-- group -->
        
         <form style="margin-top: 192px;text-align:center;color: white;" class="form-grp clearfix grpelem" id="widgetu127" method="post" name="loginForm" enctype="multipart/form-data" action="" data-sizepolicy="fluidWidth" data-pintopage="page_fluidx">            <!-- none box -->
            <?php if(isset($response)){?>

            <div class="position_content" id="widgetu127_position_content">
               <?php echo $response?>
                   <?php }?>
               <div class="fld-grp clearfix colelem" id="widgetu129" data-required="true" data-sizePolicy="fluidWidth" data-pintopage="page_fluidx">
                  <!-- none box -->
                  <label class="fld-label actAsDiv clearfix colelem" id="u130-4" for="widgetu129_input">
                     <!-- content --><span class="actAsPara">Username</span>
                  </label>
                  <span class="fld-input NoWrap actAsDiv clearfix colelem" id="u131-3">
                     <!-- content -->
                     <div id="u131-2"><input class="wrapped-input" type="text" spellcheck="false" id="widgetu129_input" name="username" tabindex="1"/></div>
                  </span>
               </div>
               <div class="fld-grp clearfix colelem" id="widgetu139" data-required="true" data-type="email" data-sizePolicy="fluidWidth" data-pintopage="page_fluidx">
                  <!-- none box -->
                  <label class="fld-label actAsDiv clearfix colelem" id="u141-4" for="widgetu139_input">
                     <!-- content --><span class="actAsPara">Password</span>
                  </label>
                  <span class="fld-input NoWrap actAsDiv clearfix colelem" id="u142-3">
                     <!-- content -->
                     <div id="u142-2"><input class="wrapped-input" type="password" spellcheck="false" id="widgetu139_input" name="password" tabindex="2"/></div>
                  </span>
               </div><br><br>
               <div class="btn-group">
               <button class="btn-group" name="Submit" id="u138-4" type="submit" value="Login" tabindex="3">
               <!-- content -->
               <div style="margin-top:-12px;height:12px;">
                     <p>Submit</p>
                  </div>
                  </button>
               
                  <a href="Register.php">Add Users</a><br><br>
                  <a href="userSearch.php">Search Users</a>
                  
             
             
               </button>
               </div>
               </div>
            </div>
         </form>
         <div class="verticalspacer" data-offset-top="691" data-content-above-spacer="690" data-content-below-spacer="61" data-sizePolicy="fixed" data-pintopage="page_fixedLeft"></div>
      </div>


</script>

   </body>
</html>
