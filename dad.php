<?php
  header('Content-Type:application/json');
  $list=[];
  $list[]=[
    'name'=>'高凯莉',
	'age'=>20
  ];
   $list[]=[
    'name'=>'高',
	'age'=>15
  ];
  echo json_encode($list);
?>