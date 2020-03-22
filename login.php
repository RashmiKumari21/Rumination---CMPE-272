<?php session_start();?>
<html>
   <title>Login</title>
   <head>
      <a href="index.php">
      </a>
   </head>
   <?php
      if(isset($_POST['Submit'])){
          $credentials = array('admin'=>'admin');

          if(isset($_POST['username'])){
              $username =  $_POST['username'];
          }

          else{
              $username = '';
          }

          if(isset($_POST['password'])){
              $password =  $_POST['password'];
          }
          else{
              $password = '';
          }

          if(isset($credentials[$username]) && $credentials[$username] == $password){
              $_SESSION['userData']['userName'] = $credentials[$username];
              header("location:loggedIn.php");
              exit;
          }else {
             $response = "<span style='color:red'>Invalid credentials</span>";
          }
      }
      ?>
   <body>
      <div class="clearfix borderbox" id="page">
         <!-- group -->
         <div class="clip_frame grpelem" id="u94">
            <!-- image -->
            <img class="block" id="u94_img" src="images/my%20post%20(10).jpg?crc=17566081" alt="" data-heightwidthratio="0.5627035830618893" data-image-width="1228" data-image-height="691"/>
         </div>
         <form class="form-grp clearfix grpelem" id="widgetu127" method="post" name="loginForm" enctype="multipart/form-data" action="" data-sizePolicy="fluidWidth" data-pintopage="page_fluidx">
            <!-- none box -->
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
               </div>
               <button class="submit-btn NoWrap rounded-corners clearfix colelem" name="Submit" id="u138-4" type="submit" value="Login" tabindex="3">
                  <!-- content -->
                  <div style="margin-top:-12px;height:12px;">
                     <p>Submit</p>
                  </div>
               </button>
               </div>
            </div>
         </form>
         <div class="verticalspacer" data-offset-top="691" data-content-above-spacer="690" data-content-below-spacer="61" data-sizePolicy="fixed" data-pintopage="page_fixedLeft"></div>
      </div>
   </body>
</html>
