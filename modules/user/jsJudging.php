<?php
session_start();

require_once('../../database/config.php');

$tp = $_POST['tp'];
$ap = $_POST['ap'];
$name = $_POST['name'];
$event = $_POST['event'];
$category = $_POST['category'];

$sql="SELECT*FROM score_sheet_ap WHERE name_participant = ? AND kata_kumite = ? AND category_participant = ? LIMIT 1";
$stmtselect = $db->prepare($sql);
$result = $stmtselect->execute([$name, $event, $category]);


if(!$result){
    $sql="INSERT into score_sheet_ap(name_participant,kata_kumite,category_participant,judge_1) values(?,?,?,?)";
    $stmtselect = $db->prepare($sql);
    $score = $stmtselect->execute([$name, $event, $category, $ap]);
	if($score){
		echo 'Scored Successfully';
	}
	else{
		echo 'There is something wrong';
	}
}
else{
	echo 'There were errors while connecting to database';
}