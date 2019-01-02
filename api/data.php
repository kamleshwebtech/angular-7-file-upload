<?php
// session_start();

// date_default_timezone_set("Asia/Kolkata");
// echo date('d-m-Y H:i:s')."\n";

$_POST = json_decode(file_get_contents('php://input'), true);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json; charset=utf-8');

$action = '';
$data = array();
if((!isset($_GET['action'])) or (isset($_GET['action']) && empty($_GET['action']))){
	$data['data'] = array();
	$data['status'] = 400;
	$data['message'] = 'Unauthorized access, action is not defined.';
	echo json_encode($data);
	exit;
} else {
	$action = trim($_GET['action']);
}

switch($action){

	case 'uploadfile':

		if(isset($_FILES['files']['name']) && !empty($_FILES['files']['name'])){
			$filename = $_FILES['files']['name'];
			if(copy($_FILES['files']['tmp_name'], 'images/'.$filename)){
				$data['status'] = 200;
				$data['message'] = 'Uploaded image has been stored successfully.';
			} else {
				$data['status'] = 400;
				$data['message'] = 'Oops!! Image file not uploaded, please try again.';
			}
			

		} else {
			$data['data'] = array();
			$data['status'] = 400;
			$data['message'] = 'Something went wrong, please try again.';
		}
		
		echo json_encode($data);
		break;

	default:

		echo 'this is default action';
		$data['status'] = 400;
		$data['message'] = 'Anonymous custom action...';
		echo json_encode($data);
		break;

}
?>