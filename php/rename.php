<?php
$target_dir = "uploads/";
// $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);

$filecount = 0;
$files = glob($target_dir . "*");
if ($files){
 $filecount = count($files);
}
echo "There were $filecount files";

// // Check if file already exists
// if (file_exists($target_file)) {
//   echo "Sorry, file already exists.";
//   $uploadOk = 0;
// }


